"use server";

import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const requestUrl = new URL(request.url);

  cookieStore.delete("auth_token");

  return NextResponse.redirect(requestUrl.origin);
}
