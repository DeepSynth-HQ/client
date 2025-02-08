import { Button } from "../ui/button";
import ShineBorder from "../ui/shine-border";
import { cn } from "@/libs/utils";
import {
  BotIcon,
  ImagePlusIcon,
  SendHorizontalIcon,
  TerminalIcon,
} from "lucide-react";
import { Key } from "react";

const demoConversation: { role: "user" | "agent"; message: string }[] = [
  {
    role: "user",
    message:
      "I’m thinking of buying HYPE at $15 and selling at $30 with a $15,000 position. Does that sound good?",
  },
  {
    role: "agent",
    message:
      "That sounds like a solid plan. Setting a buy order at $15 and a sell order at $30 for a $15,000 position. Keep an eye on market conditions just in case.",
  },
  {
    role: "user",
    message:
      "I want to DCA into SUI over the next 3 months, investing $1,000 each month. Can you help me set that up?",
  },
  {
    role: "agent",
    message:
      "Absolutely. Setting up a dollar-cost averaging plan to invest $1,000 in SUI every month for the next 3 months.",
  },
  {
    role: "user",
    message: "What do you think I should do if ETH hits $3,500?",
  },
  {
    role: "agent",
    message:
      "If ETH hits $3,500, it might be a good time to review your portfolio. You could take partial profits or hold on if you’re expecting further growth. What’s your goal here?",
  },
  {
    role: "user",
    message: "Should I stake my ADA or keep it liquid?",
  },
  {
    role: "agent",
    message:
      "Staking ADA can earn you passive rewards while supporting the network, but keeping it liquid offers more flexibility. It depends on your priorities—growth or flexibility.",
  },
  {
    role: "user",
    message: "How can I minimize my trading fees across exchanges?",
  },
  {
    role: "agent",
    message:
      "To minimize fees, consider using exchanges with lower fee tiers, taking advantage of fee discounts with native tokens, and placing limit orders instead of market orders.",
  },
];

export default function UsageDemo() {
  return (
    <section className="relative bg-gradient-to-b from-[hsl(var(--background-secondary))] to-background to-20% py-40">
      <h2 className="mb-10 bg-gradient-to-b from-foreground to-primary bg-clip-text text-center text-4xl font-bold text-transparent">
        Demo
      </h2>
      <ShineBorder
        className="mx-auto flex aspect-video w-full max-w-7xl flex-col gap-2 overflow-hidden rounded-lg bg-background p-0 shadow-lg shadow-secondary"
        color={[
          "#249AC2",
          "#2186AB",
          "#1E7699",
          "#1C6382",
          "#185572",
          "#154760",
          "#11384B",
        ]}>
        <div className="flex w-full items-center gap-8 border-b p-4">
          <TerminalIcon className="size-4" />
          <h3 className="font-bold">Agent terminal</h3>
        </div>
        <div className="w-full flex-grow overflow-y-auto p-4">
          {demoConversation.map((item, key: Key) => (
            <div
              key={key}
              className={cn(
                "my-4 flex w-full gap-2",
                item.role === "user" && "justify-end",
                item.role === "agent" && "justify-start",
              )}>
              {item.role === "agent" && (
                <BotIcon className="size-8 rounded-md bg-secondary p-1 text-secondary-foreground" />
              )}
              <div
                className={cn(
                  "max-w-[80%] rounded-md p-2",
                  item.role === "user" &&
                    "bg-secondary text-secondary-foreground",
                  item.role === "agent" &&
                    "border border-secondary text-secondary-foreground",
                )}
                key={key}>
                {item.message}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full border-t p-4">
          <div className="flex w-full items-center space-x-2 rounded-md border p-2">
            <div className="w-full">Chat with agent</div>
            <ImagePlusIcon className="size-4" />
            <Button
              size="icon"
              variant="ghost"
              disabled>
              <SendHorizontalIcon className="size-4" />
            </Button>
          </div>
        </div>
      </ShineBorder>
    </section>
  );
}
