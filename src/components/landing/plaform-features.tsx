import { IntegrationsAnimatedBeam } from "../common/integrations-animated-beam";
import { NotifyAnimatedList } from "../common/notify-animated-list";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { CalendarIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

const features = [
  {
    Icon: Share2Icon,
    name: "Integrations",
    description:
      "An advanced AI agent designed to seamlessly interact with the SUI ecosystem, integrating with DeepBook, SuiLend, Atoma Network, Cetus, Bluefin, and more. It provides real-time notifications across Discord, Telegram, and Gmail, ensuring users stay updated on the latest events and transactions.",
    className: "col-span-3",
    background: <IntegrationsAnimatedBeam />,
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Delivers real-time notifications across Discord, Telegram, and Gmail, keeping users instantly informed. Whether it's market updates, transaction alerts, or system changes, stay connected and in control.",
    className: "col-span-3 lg:col-span-2",
    background: <NotifyAnimatedList />,
  },
  {
    Icon: CalendarIcon,
    name: "Schedule Trading",
    description: "Use the calendar to filter your files by date.",
    className: "col-span-3 lg:col-span-1",
  },
];

export function PlatformFeatures() {
  return (
    <section className="bg-background py-40">
      <h2 className="mb-10 bg-gradient-to-b from-foreground to-primary bg-clip-text text-center text-4xl font-bold text-transparent">
        Core features
      </h2>
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
