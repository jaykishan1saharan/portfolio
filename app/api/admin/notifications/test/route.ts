import { NextResponse } from "next/server";
import { adminMessaging } from "@/lib/firebase-admin";

export async function GET() {
  try {
    console.log("Firebase Admin Messaging initialized");

    return NextResponse.json({
      success: true,
      message: "Firebase Admin Messaging is ready",
    });
  } catch (error) {
    console.error(
      "Firebase Admin initialization error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Firebase Admin initialization failed",
      },
      { status: 500 }
    );
  }
}