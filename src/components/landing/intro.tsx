import { AuroraText } from "../ui/aurora-text";
import { Button } from "../ui/button";
import { Meteors } from "../ui/meteors";
import { RainbowButton } from "../ui/rainbow-button";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { cn } from "@/libs/utils";
import { BotIcon } from "lucide-react";
import Link from "next/link";

export default function Intro() {
  return (
    <section className="relative mx-auto flex h-svh items-center justify-center overflow-hidden">
      <Meteors number={30} />
      <div className="flex w-full max-w-7xl flex-col gap-10">
        <div className="flex items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}>
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-foreground hover:duration-300">
              <BotIcon className="mr-2 size-5" />
              Introducing DeepSynth Agent
            </AnimatedShinyText>
          </div>
        </div>
        <h1 className="mx-auto text-center text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
          The{" "}
          <AuroraText className="leading-normal">
            Intelligent Assistant
          </AuroraText>{" "}
          for onchain action with{" "}
          <AuroraText className="leading-normal">Natural Language</AuroraText>
        </h1>
        <p className="text-center text-lg text-foreground/60">
          Transform complex blockchain interactions into simple conversations.
          <br />
          Our intelligent assistant makes on-chain actions as easy as chatting
          with a friend.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Link href={"/conversation"}>
            <RainbowButton>Launch App</RainbowButton>
          </Link>
          <Link
            href={"#"}
            target={"_blank"}>
            <Button variant={"secondary"}>Read Documentation</Button>{" "}
          </Link>
        </div>
      </div>
    </section>
  );
}
