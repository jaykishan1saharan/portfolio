import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db/db";

export async function POST(
  request: NextRequest
) {
  try {
    const body = await request.json();

    const {
      token,
      deviceType,
      userAgent,
    } = body;

    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "FCM token is required",
        },
        { status: 400 }
      );
    }

    await pool.query(
      `
      INSERT INTO notification_devices
      (
        token,
        device_type,
        user_agent,
        updated_at
      )
      VALUES ($1, $2, $3, NOW())

      ON CONFLICT (token)
      DO UPDATE SET
        device_type = EXCLUDED.device_type,
        user_agent = EXCLUDED.user_agent,
        updated_at = NOW()
      `,
      [
        token,
        deviceType || "unknown",
        userAgent || null,
      ]
    );

    return NextResponse.json({
      success: true,
      message: "Notification device registered",
    });

  } catch (error) {
    console.error(
      "Notification device registration error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to register notification device",
      },
      { status: 500 }
    );
  }
}