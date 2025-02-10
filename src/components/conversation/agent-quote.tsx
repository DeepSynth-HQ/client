"use client";

import TypingAnimation from "../ui/typing-animation";
import { useConversation } from "@/hooks/use-conversation";
import { useSession } from "@/hooks/use-session";
import { getLastName } from "@/utils";

export default function AgentQuote() {
  const { session } = useSession();

  const { conversation, conversationId } = useConversation();

  if (conversation.length > 0 || !session?.user?.name || conversationId)
    return null;
  return (
    <TypingAnimation
      duration={50}
      className="mx-auto my-2 w-full max-w-5xl text-center text-3xl font-bold text-foreground">
      {`Hi ${getLastName(session?.user?.name ?? "")}, how can I help you!`}
    </TypingAnimation>
  );
}
