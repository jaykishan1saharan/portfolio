import { NextResponse } from "next/server";
import { pool } from "@/lib/db/db";

import {
    isAdminAuthenticated,
} from "@/lib/auth/admin";

export async function GET() {

    const authenticated =
        await isAdminAuthenticated();

    if (!authenticated) {
        return NextResponse.json(
            {
                success: false,
                message: "Unauthorized",
            },
            { status: 401 }
        );
    }

    try {
        const [
            totalVisitors,
            liveVisitors,
            engagedVisitors,
            recentVisitors,
            recentEvents,
        ] = await Promise.all([
            pool.query(`
        SELECT COUNT(*)::integer AS count
        FROM visitor_sessions
      `),

            pool.query(`
        SELECT COUNT(*)::integer AS count
        FROM visitor_sessions
        WHERE last_seen_at > NOW() - INTERVAL '45 seconds'
      `),

            pool.query(`
        SELECT COUNT(*)::integer AS count
        FROM visitor_sessions
        WHERE one_minute_reached = TRUE
      `),

            pool.query(`
        SELECT
          session_id,
          started_at,
          last_seen_at,
          duration_seconds,
          country,
          region,
          city,
          device_type,
          browser,
          os,
          screen_width,
          screen_height,
          is_active,
          one_minute_reached
        FROM visitor_sessions
        ORDER BY started_at DESC
        LIMIT 20
      `),

            pool.query(`
        SELECT
          event_type,
          created_at,
          session_id,
          event_data
        FROM visitor_events
        ORDER BY created_at DESC
        LIMIT 20
      `),
        ]);

        return NextResponse.json({
            success: true,

            stats: {
                totalVisitors:
                    totalVisitors.rows[0].count,

                liveVisitors:
                    liveVisitors.rows[0].count,

                engagedVisitors:
                    engagedVisitors.rows[0].count,
            },

            recentVisitors:
                recentVisitors.rows,

            recentEvents:
                recentEvents.rows,
        });
    } catch (error) {
        console.error(
            "Analytics API error:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message: "Failed to load analytics",
            },
            { status: 500 }
        );
    }
}