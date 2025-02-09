import { IntegrationsAnimatedBeam } from "../common/integrations-animated-beam";
import { NotifyAnimatedList } from "../common/notify-animated-list";
import onchainTracingImage from "@/assets/images/onchain-tracking.webp";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { CalendarIcon } from "@radix-ui/react-icons";
import {
  BellIcon,
  BotIcon,
  BoxesIcon,
  Share2Icon,
  UsersIcon,
  WorkflowIcon,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Delivers real-time notifications across Discord, Telegram, and Gmail, keeping users instantly informed. Whether it's market updates, transaction alerts, or system changes, stay connected and in control.",
    className: "col-span-2",
    background: <NotifyAnimatedList />,
  },
  {
    Icon: BotIcon,
    name: "AI-Drivent & Agent",
    description:
      "Leverages AI to analyze market trends and execute intelligent trading strategies with minimal manual input.",
    className: "col-span-1",
  },
  {
    Icon: CalendarIcon,
    name: "Schedule Trading",
    description:
      "Plan and automate your trades in advance using a built-in calendar, ensuring timely execution without manual intervention.",
    className: "col-span-1",
  },
  {
    Icon: BoxesIcon,
    name: "Onchain tracking",
    description:
      "Provides real-time monitoring of blockchain transactions, ensuring transparency and informed decision-making.",
    className: "col-span-2",
    background: (
      <Image
        src={onchainTracingImage.src}
        alt=""
        fill
        objectFit="cover"
      />
    ),
  },
  {
    Icon: WorkflowIcon,
    name: "Automation Trading",
    description:
      "Enables rule-based and AI-driven automated trading, optimizing efficiency and reducing manual effort.",
    className: "col-span-2",
  },
  {
    Icon: UsersIcon,
    name: "Human Approval for Agent Actions",
    description:
      "Ensures security by requiring human verification before executing critical AI-driven actions.",
    className: "col-span-1",
  },
];

export function PlatformFeatures() {
  return (
    <section className="bg-background py-40">
      <h2 className="mb-10 bg-gradient-to-b from-foreground to-primary bg-clip-text text-center text-4xl font-bold text-transparent">
        Core features
      </h2>
      <BentoCard
        Icon={Share2Icon}
        name="Integrations"
        description="Supports integrations from SUI ecosystem & traditional communication platforms"
        className="mx-auto mb-4 h-[500px] w-full max-w-7xl"
        background={<IntegrationsAnimatedBeam />}
      />
      <BentoGrid className="mx-auto w-full max-w-7xl">
        {features.map((feature, idx) => (
          <BentoCard
            key={idx}
            {...feature}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
