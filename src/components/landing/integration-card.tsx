import ShineBorder from "../ui/shine-border";
import { Integration } from "@/interfaces/conversation";
import Image from "next/image";
import { useState } from "react";

export default function IntegrationCard({ data }: { data: Integration }) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <ShineBorder
      borderWidth={2}
      borderRadius={10}
      className="relative flex aspect-square w-40 items-center justify-center overflow-hidden"
      color={["#249AC2", "#2186AB", "#1E7699", "#1C6382", "#185572"]}>
      <Image
        src={data.image}
        alt=""
        width={160}
        height={160}
      />
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
        className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-gradient-to-b from-secondary/80 to-black/60 p-4">
        {!isHover && (
          <p className="pointer-events-none text-3xl font-bold">{data.title}</p>
        )}
        {isHover && data.description && (
          <p className="pointer-events-none italic text-primary-foreground/80">
            {data.description}
          </p>
        )}
      </div>
    </ShineBorder>
  );
}
