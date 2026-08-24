import { NextRequest, NextResponse } from "next/server";
import {
  COOKIE_NAME,
  getAdminSessionToken,
  verifyAdminPassword,
} from "@/lib/auth/admin";

export async function POST(
  request: NextRequest
) {
  try {
    const { password } =
      await request.json();

    if (
      typeof password !== "string" ||
      !password
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Password is required",
        },
        { status: 400 }
      );
    }

    const valid =
      verifyAdminPassword(password);

    if (!valid) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid password",
        },
        { status: 401 }
      );
    }

    const response =
      NextResponse.json({
        success: true,
        message: "Login successful",
      });

    response.cookies.set({
      name: COOKIE_NAME,
      value: getAdminSessionToken(),

      httpOnly: true,

      secure:
        process.env.NODE_ENV ===
        "production",

      sameSite: "strict",

      path: "/",

      maxAge: 60 * 60 * 24 * 7,
    });

    return response;

  } catch (error) {
    console.error(
      "Admin login error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Login failed",
      },
      { status: 500 }
    );
  }
}