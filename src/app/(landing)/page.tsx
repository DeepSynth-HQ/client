import { ChainCloud } from "@/components/landing/chain-cloud";
import Intro from "@/components/landing/intro";
import { PlatformFeatures } from "@/components/landing/plaform-features";
import UsageDemo from "@/components/landing/usage-demo";
import BlurFade from "@/components/ui/blur-fade";

export default function Landing() {
  return (
    <>
      <Intro />
      <BlurFade
        delay={0.2}
        inView>
        <PlatformFeatures />
      </BlurFade>
      <BlurFade
        delay={0.2}
        inView>
        <UsageDemo />
      </BlurFade>
      <BlurFade
        delay={0.2}
        inView>
        <ChainCloud />
      </BlurFade>
    </>
  );
}
