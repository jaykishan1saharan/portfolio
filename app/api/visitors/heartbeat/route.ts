import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db/db";

export async function POST(request: NextRequest) {
  try {
    const { sessionId } = await request.json();

    if (!sessionId) {
      return NextResponse.json(
        { success: false, message: "Session ID is required" },
        { status: 400 }
      );
    }

    const current = await pool.query(
      `
      SELECT
        started_at,
        one_minute_reached
      FROM visitor_sessions
      WHERE session_id = $1
      `,
      [sessionId]
    );

    if (current.rows.length === 0) {
      return NextResponse.json(
        { success: false, message: "Session not found" },
        { status: 404 }
      );
    }

    const session = current.rows[0];

    const durationResult = await pool.query(
      `
      SELECT EXTRACT(
        EPOCH FROM (NOW() - $1::timestamptz)
      )::integer AS duration
      `,
      [session.started_at]
    );

    const duration = durationResult.rows[0].duration;
    const reachedOneMinute =
      !session.one_minute_reached && duration >= 60;

    await pool.query(
      `
      UPDATE visitor_sessions
      SET
        last_seen_at = NOW(),
        duration_seconds = $2,
        is_active = TRUE,
        one_minute_reached =
          one_minute_reached OR $3,
        updated_at = NOW()
      WHERE session_id = $1
      `,
      [sessionId, duration, reachedOneMinute]
    );

    if (reachedOneMinute) {
      await pool.query(
        `
        INSERT INTO visitor_events (
          session_id,
          event_type,
          event_data
        )
        VALUES ($1, $2, $3)
        `,
        [
          sessionId,
          "one_minute_reached",
          JSON.stringify({
            durationSeconds: duration,
          }),
        ]
      );
    }

    return NextResponse.json({
      success: true,
      duration,
      oneMinuteReached:
        session.one_minute_reached || reachedOneMinute,
    });
  } catch (error) {
    console.error("Heartbeat error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Heartbeat failed",
      },
      { status: 500 }
    );
  }
}