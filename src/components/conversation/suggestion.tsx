"use client";

import { MagicCard } from "../ui/magic-card";
import { actionSuggestions } from "@/constants/conversation";
import { useConversation } from "@/hooks/use-conversation";
import { Key } from "react";

export default function Suggestions() {
  const { submitUserInput, conversation } = useConversation();

  if (conversation.length > 0) return;

  return (
    <div className="mx-auto w-full max-w-5xl">
      <h3 className="my-2 text-sm font-bold text-primary">Suggestion</h3>
      <div className="my-2 grid grid-cols-2 gap-4">
        {actionSuggestions.map((suggestion, key: Key) => (
          <MagicCard
            key={key}
            className="hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40"
            gradientColor="#249AC255"
            gradientFrom="#FAFAFA"
            gradientTo="#1C6382">
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
