import { NextResponse } from "next/server";
import { pool } from "@/lib/db/db";
import { adminMessaging } from "@/lib/firebase-admin";

export async function POST() {
  try {
    // Get registered notification devices
    const result = await pool.query(`
      SELECT id, token
      FROM notification_devices
      ORDER BY created_at DESC
    `);

    if (result.rows.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message:
            "No notification devices registered",
        },
        { status: 404 }
      );
    }

    const tokens = result.rows.map(
      (row) => row.token
    );

    // Send notification to all registered devices
    const response =
      await adminMessaging.sendEachForMulticast({
        tokens,

        notification: {
          title: "🔔 Portfolio Test",
          body:
            "Push notifications are working! 🚀",
        },

        data: {
          type: "test_notification",
        },

        webpush: {
          notification: {
            icon: "/favicon.ico",
          },
        },
      });

    return NextResponse.json({
      success: true,

      message:
        "Test notification sent",

      successCount:
        response.successCount,

      failureCount:
        response.failureCount,
    });

  } catch (error) {
    console.error(
      "Test notification error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to send test notification",
      },
      { status: 500 }
    );
  }
}