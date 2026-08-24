import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db/db";

export async function POST(request: NextRequest) {
  try {
    const {
      sessionId,
      page,
    } = await request.json();

    if (!sessionId || !page) {
      return NextResponse.json(
        {
          success: false,
          message: "Session ID and page are required",
        },
        { status: 400 }
      );
    }

    const result = await pool.query(
      `
      INSERT INTO page_views (
        session_id,
        page
      )
      VALUES ($1, $2)
      RETURNING id, entered_at
      `,
      [sessionId, page]
    );

    return NextResponse.json({
      success: true,
      pageView: result.rows[0],
    });
  } catch (error) {
    console.error("Page view error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Page view tracking failed",
      },
      { status: 500 }
    );
  }
}