"use client";

import { SERVER_URL } from "@/configs/env.config";
import { SessionContext } from "@/contexts/conversation";
import { Session, SessionStatus } from "@/contexts/conversation/interface";
import { ReactNode, useCallback, useEffect, useState } from "react";

export const SessionProvider = ({
  children,
  authToken,
}: Readonly<{ children: ReactNode; authToken?: string }>) => {
  const [status, setStatus] = useState<SessionStatus>("unauthenticated");
  const [session, setSession] = useState<Session | null>();

  const fetchSession = useCallback(async () => {
    if (!authToken) return;

    const payload = {
      token: authToken,
    };

    try {
      setStatus("loading");
      const serverUrl = `${SERVER_URL}/auth/login/x`;

      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("unauthenticated");
        throw new Error("No session response");
      }

      const newSession = await response.json();

      if (newSession) {
        setSession(newSession);
        setStatus("authenticated");
      }
    } catch (err) {
      setStatus("unauthenticated");
      throw new Error(`Failed to fetch session: ${err}`);
    }
  }, [authToken]);

  useEffect(() => {
    fetchSession();
  }, [fetchSession]);

  return (
    <SessionContext.Provider value={{ session: session, status: status }}>
      {children}
    </SessionContext.Provider>
  );
};
