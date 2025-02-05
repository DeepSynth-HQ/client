"use client";

import { MagicCard } from "../ui/magic-card";
import { actionSuggestions } from "@/constants/conversation";
import { useConversation } from "@/hooks/use-conversation";
import { useTheme } from "next-themes";
import { Key } from "react";

export default function Suggestions() {
  const { theme } = useTheme();
  const { submitUserInput, conversation } = useConversation();

  if (conversation.length > 0) return;

  return (
    <div className="mx-auto w-full max-w-5xl">
      <h3 className="my-2 text-sm font-bold text-foreground/60">Suggestion</h3>
      <div className="my-2 grid grid-cols-2 gap-4">
        {actionSuggestions.map((suggestion, key: Key) => (
          <MagicCard
            key={key}
            className="hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl hover:shadow-popover-foreground/20"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
            <div
              className="w-full cursor-pointer p-6"
              onClick={() => submitUserInput({ message: suggestion.title })}>
              <p className="text-xl font-bold">{suggestion.title}</p>
              <p className="text-sm text-muted-foreground">
                {suggestion.description}
              </p>
            </div>
          </MagicCard>
        ))}
      </div>
    </div>
  );
}
