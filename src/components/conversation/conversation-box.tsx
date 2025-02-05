"use client";

import MarkdownFormat from "../common/markdown-format";
import { useConversation } from "@/hooks/use-conversation";
import { cn } from "@/libs/utils";
import { motion } from "motion/react";
import Image from "next/image";
import { Key } from "react";

export default function ConversationBox() {
  const { conversation, answeringText, isThinking, isAnswering } =
    useConversation();

  if (conversation.length === 0) return;

  return (
    <motion.div
      initial={{ flexGrow: 0, height: "0px", opacity: 0 }}
      animate={{ flexGrow: 1, height: "auto", opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto my-4 w-full max-w-5xl flex-grow space-y-4 overflow-y-auto rounded-md">
      {conversation.map((msg, index) => (
        <div
          key={index}
          className={cn(
            "flex w-full flex-col gap-2",
            msg.role === "user" && "items-end",
          )}>
          {msg.images && (
            <div className="flex gap-2">
              {msg.images.map((image: string, key: Key) => (
                <Image
                  key={key}
                  src={image}
                  alt={"User Input Image"}
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              ))}
            </div>
          )}
          <div
            className={cn(
              msg.role === "user" &&
                "rounded-lg bg-primary px-4 py-2 text-primary-foreground",
            )}>
            <MarkdownFormat>{msg.content}</MarkdownFormat>
          </div>
        </div>
      ))}
      {isThinking && <MarkdownFormat>Agent is typing...</MarkdownFormat>}
      {isAnswering && <MarkdownFormat>{answeringText}</MarkdownFormat>}
    </motion.div>
  );
}
