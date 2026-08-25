import { pool } from "@/lib/db/db";
import { adminMessaging } from "@/lib/firebase-admin";

type NotificationPayload = {
  title: string;
  body: string;
  type: string;
};

export async function sendNotificationToAllDevices(
  payload: NotificationPayload
) {
  const result = await pool.query(`
    SELECT id, token
    FROM notification_devices
    ORDER BY created_at DESC
  `);

  if (result.rows.length === 0) {
    return {
      success: false,
      successCount: 0,
      failureCount: 0,
      message: "No notification devices registered",
    };
  }

  const tokens = result.rows.map(
    (row) => row.token
  );

  const response =
    await adminMessaging.sendEachForMulticast({
      tokens,

      notification: {
        title: payload.title,
        body: payload.body,
      },

      data: {
        type: payload.type,
      },

      webpush: {
        notification: {
          icon: "/favicon.ico",
        },
      },
    });

  return {
    success: response.successCount > 0,
    successCount: response.successCount,
    failureCount: response.failureCount,
    message: "Notification sent",
  };
}