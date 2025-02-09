"use client";

import discordIcon from "@/assets/svgs/discord.svg";
import gmailIcon from "@/assets/svgs/gmail.svg";
import telegramIcon from "@/assets/svgs/telegram.svg";
import { AnimatedList } from "@/components/ui/animated-list";
import { cn } from "@/libs/utils";
import Image from "next/image";

interface Item {
  name: string;
  description: string;
  icon: string;
  title: string;
  time: string;
  color: string;
}

let notifications = [
  {
    name: "Telegram",
    title: "Token Price Alert",
    description: "SUI has reached your target price of $4.13.",
    time: "2m ago",
    icon: telegramIcon,
    color: "#0088CC",
  },
  {
    name: "Discord",
    title: "Agent Action Executed",
    description: "Bought 0.5 CETUS at $0.12 based on strategy recommendation.",
    time: "5m ago",
    icon: discordIcon,
    color: "#5865F2",
  },
  {
    name: "Gmail",
    title: "PnL Report",
    description: "Your daily PnL: +$250 | Weekly: +$1,400 | Monthly: +$5,600",
    time: "10m ago",
    icon: gmailIcon,
    color: "#D14836",
  },
  {
    name: "Telegram",
    title: "Strategy Recommendation",
    description: "DEEP predicted to hit $0.21, consider setting a sell order.",
    time: "15m ago",
    icon: telegramIcon,
    color: "#0088CC",
  },
  {
    name: "Discord",
    title: "Portfolio Update",
    description:
      "New token added: SUI | Estimated impact: +8% growth potential.",
    time: "20m ago",
    icon: discordIcon,
    color: "#5865F2",
  },
  {
    name: "Gmail",
    title: "Market Insight",
    description:
      "SEND token in the SUI ecosystem increased by 1.5%, reflecting growing activity and adoption.",
    time: "30m ago",
    icon: gmailIcon,
    color: "#D14836",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({
  name,
  description,
  title,
  icon,
  color,
  time,
}: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}>
      <div
        className="flex flex-row items-center gap-3 p-2"
        style={{ background: color }}>
        <div className="flex size-10 items-center justify-center rounded-2xl bg-white p-2">
          <Image
            src={icon}
            alt=""
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white">
            <span className="text-xs text-white">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-300">{time}</span>
          </figcaption>{" "}
          <p className="text-sm font-bold text-white">{title}</p>
          <p className="text-sm text-white/60">{description}</p>
        </div>
      </div>
    </figure>
  );
};

export function NotifyAnimatedList({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "absolute flex h-full w-full flex-col overflow-hidden rounded-lg border-none p-4 transition-all duration-300 ease-out",
        className,
      )}>
      <AnimatedList delay={1500}>
        {notifications.map((item, idx) => (
          <Notification
            {...item}
            key={idx}
          />
        ))}
      </AnimatedList>
    </div>
  );
}
