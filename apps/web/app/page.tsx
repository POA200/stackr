import { CtaSection } from "@/components/sections/cta";
import { FeaturesSection } from "@/components/sections/features";
import { FooterSection } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { LaunchTokenCtaSection } from "@/components/sections/launch-token-cta";
import { NavbarSection } from "@/components/sections/navbar";
import { StackrAgentSection } from "@/components/sections/stackr-agent";
import { StackrBrandSection } from "@/components/sections/stackr-brand";
import { TrendingTokensSection } from "@/components/sections/trending-tokens";
import { WhyLaunchSection } from "@/components/sections/why-launch";
import { getTrendingTokens } from "@/lib/db/tokens";

export default async function Home() {
  const tokens = await getTrendingTokens();

  return (
    <main className="min-h-screen bg-background">
      <NavbarSection />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TrendingTokensSection tokens={tokens} />
      <WhyLaunchSection />
      <StackrBrandSection />
      <StackrAgentSection />
      <LaunchTokenCtaSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
