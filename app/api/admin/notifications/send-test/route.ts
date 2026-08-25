import { NextResponse } from "next/server";
import { sendNotificationToAllDevices } from "@/lib/notifications/sendNotification";

export async function POST() {
  try {
    const result =
      await sendNotificationToAllDevices({
        title: "🔔 Portfolio Test",
        body:
          "Push notifications are working! 🚀",
        type: "test_notification",
      });

    if (!result.success) {
      return NextResponse.json(
        result,
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Test notification sent",
      successCount:
        result.successCount,
      failureCount:
        result.failureCount,
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
          "Failed to send notification",
      },
      { status: 500 }
    );
  }
}