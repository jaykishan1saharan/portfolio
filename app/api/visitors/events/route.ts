import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db/db";

export async function POST(request: NextRequest) {
  try {
    const {
      sessionId,
      eventType,
      eventData,
    } = await request.json();

    if (!sessionId || !eventType) {
      return NextResponse.json(
        {
          success: false,
          message: "Session ID and event type are required",
        },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `
      INSERT INTO visitor_events (
        session_id,
        event_type,
        event_data
      )
      VALUES ($1, $2, $3)
      RETURNING id, created_at
      `,
      [
        sessionId,
        eventType,
        eventData
          ? JSON.stringify(eventData)
          : null,
      ]
    );

    return NextResponse.json({
      success: true,
      event: result.rows[0],
    });
  } catch (error) {
    console.error("Visitor event error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Event tracking failed",
      },
      { status: 500 }
    );
  }
}