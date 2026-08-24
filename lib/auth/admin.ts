import crypto from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "portfolio_admin_session";

function getSessionToken() {
  const secret = process.env.ADMIN_SESSION_SECRET;

  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET is not configured"
    );
  }

  return crypto
    .createHmac("sha256", secret)
    .update("portfolio-admin-session")
    .digest("hex");
}

export function verifyAdminPassword(
  password: string
) {
  const adminPassword =
    process.env.ADMIN_PASSWORD;

  if (!adminPassword) {
    throw new Error(
      "ADMIN_PASSWORD is not configured"
    );
  }

  return password === adminPassword;
}

export function getAdminSessionToken() {
  return getSessionToken();
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();

  const session =
    cookieStore.get(COOKIE_NAME);

  if (!session) {
    return false;
  }

  return session.value === getSessionToken();
}

export { COOKIE_NAME };