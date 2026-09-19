/**
 * Pair with auth.ts. Build a /login page that POSTs { password } here.
 * Guard server components with isAuthenticatedRoute() + redirect('/login');
 * guard API routes with requireAuth(request).
 *
 * Set AUTH_PASSWORD and AUTH_SESSION_SECRET (a long random string, not the
 * password itself) in the environment.
 */

import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, getExpectedAuthPassword, SESSION_MAX_AGE_SECONDS, signedSessionValue } from "./auth";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password = body?.password;

    if (password !== getExpectedAuthPassword()) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set(AUTH_COOKIE_NAME, signedSessionValue(), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: SESSION_MAX_AGE_SECONDS,
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
