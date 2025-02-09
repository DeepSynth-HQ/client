"use client";

import { SessionContext } from "@/contexts/conversation";
import { useContext } from "react";

export function useSession() {
  const sessionContext = useContext(SessionContext);
  if (!sessionContext) {
    throw new Error("useSession must be within a SessionProvider");
  }
  return sessionContext;
}
