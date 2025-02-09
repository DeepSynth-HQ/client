import { cookies } from "next/headers";
import "server-only";

export async function getAuthToken() {
  const cookieStore = await cookies();

  const authToken = cookieStore.get("auth_token")?.value;
  if (!authToken) return;
  return authToken;
}
