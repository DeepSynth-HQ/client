"use client";

import TypingAnimation from "../ui/typing-animation";
import { useConversation } from "@/hooks/use-conversation";
import { getLastName } from "@/utils";
import { useSession } from "next-auth/react";

export default function AgentQuote() {
  const { conversation } = useConversation();
  const { data: session } = useSession();

  if (conversation.length > 0 || !session) return;

  return (
    <TypingAnimation
      duration={50}
      className="mx-auto my-2 w-full max-w-5xl text-center text-3xl font-bold text-foreground">
      {`Hi ${getLastName(session?.user?.name ?? "")}, how can I help you!`}
    </TypingAnimation>
  );
}
