"use server";

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const requestUrl = new URL(request.url);
  const token = requestUrl.searchParams.get("token");
  if (token) {
    cookieStore.set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      secure: true,
    });
  }
  return NextResponse.redirect(requestUrl.origin);
}
