"use client";

import { BorderBeam } from "../ui/border-beam";
import { intergrations } from "@/constants/conversation";
import { useConversation } from "@/hooks/use-conversation";
import Link from "next/link";
import { Key } from "react";

export default function Intergrations() {
  const { conversation } = useConversation();

  if (conversation.length > 0) return;

  return (
    <div className="mx-auto w-full max-w-5xl">
      <h3 className="my-2 text-sm font-bold text-foreground/60">
        Intergrations
      </h3>
      <div className="my-2 grid grid-cols-2 gap-4">
        {intergrations.map((suggestion, key: Key) => (
          <Link
            key={key}
            href={"#"}
            className="relative cursor-pointer overflow-hidden rounded-md border p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-xl hover:shadow-popover-foreground/20">
            <p className="text-xl font-bold">{suggestion.title}</p>
            <p className="text-sm text-muted-foreground">
              {suggestion.description}
            </p>
            <BorderBeam
              size={100}
              duration={5}
              delay={Number(key) + 0.5}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
