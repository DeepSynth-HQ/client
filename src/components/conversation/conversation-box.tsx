"use client";

import MarkdownFormat from "../common/markdown-format";
import { Avatar, AvatarFallback } from "../ui/avatar";
import AgentAvatar from "@/assets/svgs/agent.svg";
import { useConversation } from "@/hooks/use-conversation";
import { useSession } from "@/hooks/use-session";
import { cn } from "@/libs/utils";
import { getInitials } from "@/utils";
import { AvatarImage } from "@radix-ui/react-avatar";
import { motion } from "motion/react";
import Image from "next/image";
import { Key } from "react";

export default function ConversationBox() {
  const { conversation, answeringText, isThinking, isAnswering } =
    useConversation();

  const { session } = useSession();

  if (conversation.length === 0) return;

  return (
    <motion.div
      initial={{ flexGrow: 0, height: "0px", opacity: 0 }}
      animate={{ flexGrow: 1, height: "auto", opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto my-4 w-full max-w-5xl flex-grow space-y-4 overflow-y-auto overflow-x-hidden rounded-md">
      {conversation.map((msg, index) => (
        <div
          key={index}
          className={cn(
            "relative flex w-full max-w-full items-center space-x-4",
            msg.role === "user" && "justify-end",
          )}>
          {/* Agent Avatar */}
          {msg.role === "assistant" && (
            <Image
              src={AgentAvatar}
              alt="agent avt"
              width={40}
              height={40}
              className="sticky top-0 self-start rounded-full"
            />
          )}

          {/* Conversation Content */}
          <div
            className={cn(
              "flex w-full max-w-full flex-grow flex-col space-y-2",
              msg.role === "user" && "items-end",
            )}>
            {/* Input Image */}
            {msg.images && msg.images?.length > 0 && (
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

            {/* Message */}
            <div
              className={cn(
                "flex w-full",
                msg.role === "user" &&
                  "w-fit max-w-full justify-end rounded-lg bg-primary px-4 py-2 text-primary-foreground",
                msg.role === "assistant" && "max-w-[90%]",
              )}>
              {msg.role === "assistant" && (
                <MarkdownFormat>{msg.content}</MarkdownFormat>
              )}
              <p className="w-fit">{msg.role === "user" && msg.content}</p>
            </div>
          </div>

          {/* User avatar */}
          {msg.role === "user" && (
            <Avatar className="sticky top-0 self-start rounded-full">
              <AvatarImage src={session?.user?.avatar ?? undefined} />
              <AvatarFallback>
                {getInitials(session?.user?.name as string)}
              </AvatarFallback>
            </Avatar>
          )}
        </div>
      ))}
      {isThinking && (
        <div className="flex items-center justify-start space-x-4">
          <Image
            src={AgentAvatar}
            alt="agent avt"
            width={40}
            height={40}
          />
          <MarkdownFormat>Agent is typing...</MarkdownFormat>
        </div>
      )}
      {isAnswering && (
        <div className="flex items-center justify-start space-x-4">
          <Image
            src={AgentAvatar}
            alt="agent avt"
            width={40}
            height={40}
            className="sticky top-0 self-start rounded-full"
          />
          <MarkdownFormat>{answeringText}</MarkdownFormat>
        </div>
      )}
    </motion.div>
  );
}
