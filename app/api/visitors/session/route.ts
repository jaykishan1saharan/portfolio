import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { pool } from "@/lib/db/db";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      deviceType,
      browser,
      os,
      screenWidth,
      screenHeight,
      language,
      referrer,
    } = body;

    // Generate anonymous session ID
    const sessionId = crypto.randomUUID();

    // Get visitor IP from request headers
    const forwardedFor = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");

    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      realIp ||
      "unknown";

    // Hash IP instead of storing raw IP
    const ipHash = crypto
      .createHash("sha256")
      .update(ip)
      .digest("hex");

    // Get browser user-agent
    const userAgent = request.headers.get("user-agent");

    const result = await pool.query(
      `
      INSERT INTO visitor_sessions (
        session_id,
        country,
        region,
        city,
        ip_hash,
        user_agent,
        device_type,
        browser,
        os,
        screen_width,
        screen_height,
        language,
        referrer
      )
      VALUES (
        $1,
        NULL,
        NULL,
        NULL,
        $2,
        $3,
        $4,
        $5,
        $6,
        $7,
        $8,
        $9,
        $10
      )
      RETURNING
        session_id,
        started_at,
        is_active
      `,
      [
        sessionId,
        ipHash,
        userAgent,
        deviceType || null,
        browser || null,
        os || null,
        screenWidth || null,
        screenHeight || null,
        language || null,
        referrer || null,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Visitor session created",
      session: result.rows[0],
    });
  } catch (error) {
    console.error("Visitor session error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create visitor session",
      },
      { status: 500 }
    );
  }
}