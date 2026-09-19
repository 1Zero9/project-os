/**
 * Single-password, cookie-based auth gate for a small internal app or a
 * known small group - new-project's "who uses it" step, tier 2 (not "just
 * you", not public/customers). No user table, no auth provider dependency.
 *
 * From eolas (parked 2026-09-19, kept for its content, not its running
 * system - see AI-HANDOFF.md). The original set the cookie's value to the
 * literal string "true" - completely forgeable: anyone can open dev tools
 * and run `document.cookie = "app-session=true"` and be in, without ever
 * knowing the password. Fixed here by signing the cookie value with an
 * HMAC of a server-only secret, so knowing the cookie's NAME (which is
 * visible in the browser) is not enough to forge a valid value.
 *
 * Copy this into the new project - don't import it as a dependency.
 */

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";

export const AUTH_COOKIE_NAME = "app-session";
const SESSION_VALUE = "true"; // the payload being signed; only the signature matters

function getSecret(): string {
  const secret = process.env.AUTH_SESSION_SECRET;
  if (!secret) {
    throw new Error("AUTH_SESSION_SECRET is not configured.");
  }
  return secret;
}

function sign(value: string): string {
  const mac = createHmac("sha256", getSecret()).update(value).digest("hex");
  return `${value}.${mac}`;
}

function verify(cookieValue: string | undefined): boolean {
  if (!cookieValue) return false;
  const dot = cookieValue.lastIndexOf(".");
  if (dot === -1) return false;
  const value = cookieValue.slice(0, dot);
  const mac = cookieValue.slice(dot + 1);
  if (value !== SESSION_VALUE) return false;
  const expected = createHmac("sha256", getSecret()).update(value).digest("hex");
  const a = Buffer.from(mac);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function getExpectedAuthPassword(): string {
  const password = process.env.AUTH_PASSWORD;
  if (!password) {
    throw new Error("AUTH_PASSWORD is not configured.");
  }
  return password;
}

/** The signed cookie value to set after a successful password check. */
export function signedSessionValue(): string {
  return sign(SESSION_VALUE);
}

export function isAuthenticatedRequest(request: NextRequest): boolean {
  return verify(request.cookies.get(AUTH_COOKIE_NAME)?.value);
}

export async function isAuthenticatedRoute(): Promise<boolean> {
  const cookieStore = await cookies();
  return verify(cookieStore.get(AUTH_COOKIE_NAME)?.value);
}

export function requireAuth(request: NextRequest): NextResponse | null {
  if (!isAuthenticatedRequest(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}
