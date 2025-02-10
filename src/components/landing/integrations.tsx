"use client";

import Marquee from "../ui/marquee";
import IntegrationCard from "./integration-card";
import { landingIntegrations } from "@/constants/conversation";
import { Key } from "react";

export default function Integrations() {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <h2 className="mb-10 bg-gradient-to-b from-foreground to-primary bg-clip-text text-center text-4xl font-bold text-transparent">
        Integrations
      </h2>
      <Marquee
        pauseOnHover
        className="[--duration:20s]">
        {landingIntegrations.map((integration, key: Key) => (
          <IntegrationCard
            key={key}
            data={integration}
          />
        ))}
      </Marquee>
    </section>
  );
}
