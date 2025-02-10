"use client";

import AtomaNetworkIcon from "@/assets/svgs/atoma-network.svg";
import BluefinIcon from "@/assets/svgs/bluefin.svg";
import CetusIcon from "@/assets/svgs/cetus.svg";
import DeepbookIcon from "@/assets/svgs/deepbook.svg";
import DeepSynthIcon from "@/assets/svgs/deepsynth-black.svg";
import DiscordIcon from "@/assets/svgs/discord.svg";
import GmailIcon from "@/assets/svgs/gmail.svg";
import SuilendIcon from "@/assets/svgs/suilend.svg";
import TelegramIcon from "@/assets/svgs/telegram.svg";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { cn } from "@/libs/utils";
import Image from "next/image";
import React, { forwardRef, useRef } from "react";

const Icons = {
  deepsynth: () => (
    <Image
      src={DeepSynthIcon}
      alt=""
      width={100}
      height={100}
    />
  ),
  bluefin: () => (
    <Image
      src={BluefinIcon}
      alt=""
      width={100}
      height={100}
    />
  ),
  cetus: () => (
    <Image
      src={CetusIcon}
      alt=""
      width={100}
      height={100}
    />
  ),
  deepbook: () => (
    <Image
      src={DeepbookIcon}
      alt=""
      width={100}
      height={100}
    />
  ),
  suilend: () => (
    <Image
      src={SuilendIcon}
      alt=""
      width={100}
      height={100}
    />
  ),
  atomanetwork: () => (
    <Image
      src={AtomaNetworkIcon}
      alt=""
      width={100}
      height={100}
    />
  ),
  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle
        cx="12"
        cy="7"
        r="4"
      />
    </svg>
  ),
  gmail: () => (
    <Image
      src={GmailIcon}
      alt=""
      width={100}
      height={100}
    />
  ),
  telegram: () => (
    <Image
      src={TelegramIcon}
      alt=""
      width={100}
      height={100}
    />
  ),
  discord: () => (
    <Image
      src={DiscordIcon}
      alt=""
      width={100}
      height={100}
    />
  ),
};

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "group z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}>
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function IntegrationsAnimatedBeam({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const bluefinRef = useRef<HTMLDivElement>(null);
  const cetusRef = useRef<HTMLDivElement>(null);
  const deepbookRef = useRef<HTMLDivElement>(null);
  const atomaNetworkRef = useRef<HTMLDivElement>(null);
  const suilendRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const deepSynthRef = useRef<HTMLDivElement>(null);
  const telegramRef = useRef<HTMLDivElement>(null);
  const discordRef = useRef<HTMLDivElement>(null);
  const gmailRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "absolute flex h-full w-full items-center justify-end overflow-hidden rounded-lg p-4 transition-all duration-300 ease-out md:p-20",
        className,
      )}
      ref={containerRef}>
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center space-y-4">
          <Circle ref={telegramRef}>
            <Icons.telegram />
          </Circle>
          <Circle ref={discordRef}>
            <Icons.discord />
          </Circle>
          <Circle ref={gmailRef}>
            <Icons.gmail />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle
            ref={deepSynthRef}
            className="size-16">
            <Icons.deepsynth />
          </Circle>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <Circle ref={bluefinRef}>
            <Icons.bluefin />
          </Circle>
          <Circle ref={cetusRef}>
            <Icons.cetus />
          </Circle>
          <Circle ref={deepbookRef}>
            <Icons.deepbook />
          </Circle>
          <Circle ref={suilendRef}>
            <Icons.suilend />
          </Circle>
          <Circle ref={atomaNetworkRef}>
            <Icons.atomanetwork />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={bluefinRef}
        toRef={deepSynthRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={suilendRef}
        toRef={deepSynthRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={atomaNetworkRef}
        toRef={deepSynthRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={deepbookRef}
        toRef={deepSynthRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={cetusRef}
        toRef={deepSynthRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={deepSynthRef}
        toRef={userRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={telegramRef}
        toRef={deepSynthRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={discordRef}
        toRef={deepSynthRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={gmailRef}
        toRef={deepSynthRef}
        duration={3}
      />
    </div>
  );
}
