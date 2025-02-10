"use client";

import { BorderBeam } from "../ui/border-beam";
import { integrations } from "@/constants/conversation";
import { useConversation } from "@/hooks/use-conversation";
import Image from "next/image";
import Link from "next/link";
import { Key } from "react";

export default function Integrations() {
  const { conversation } = useConversation();

  if (conversation.length > 0) return;

  return (
    <div className="mx-auto w-full max-w-5xl">
      <h3 className="my-2 text-sm font-bold text-primary">Integrations</h3>
      <div className="my-2 grid grid-cols-1 gap-4 md:grid-cols-2">
        {integrations.map((integration, key: Key) => (
          <Link
            key={key}
            href={integration.path}
            target="_blank"
            className="relative flex cursor-pointer items-center overflow-hidden rounded-md border p-6 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/40">
            <div className="absolute flex aspect-square size-12 items-center justify-center rounded-full bg-white p-1">
              <Image
                src={integration.image}
                alt=""
                width={40}
                height={40}
              />
            </div>
            <div className="w-full pl-16">
              <p className="truncate text-xl font-bold">{integration.title}</p>
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {integration.description}
              </p>
            </div>
            <BorderBeam
              size={100}
              duration={5}
              colorTo="#249AC2"
              colorFrom="#FAFAFA"
              delay={Number(key) + 0.5}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
