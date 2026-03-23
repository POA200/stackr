import Image from "next/image";
import { ChevronRight } from "lucide-react";

type FeatureCardContent = {
  title: string;
  description: string;
  ctaLabel: string;
  imageSrc: string;
  imageAlt: string;
};

const walletCardContent: FeatureCardContent = {
  title: "Automatic Wallet Creation",
  description:
    "Tag @stackr_main in a post and create a dedicated wallet instantly, so users can move from discovery to action without friction.",
  ctaLabel: "Create a wallet with a tag",
  imageSrc: "/stackr-feature-wallet.svg",
  imageAlt: "Illustration of a wallet representing automatic wallet creation",
};

const launchCardContent: FeatureCardContent = {
  title: "Launch for Free",
  description:
    "Deploy a token on Stacks in seconds through a single post. No gas fees, no setup complexity, and immediate market access.",
  ctaLabel: "Launch a token",
  imageSrc: "/stackr-feature-launch.svg",
  imageAlt: "Illustration of a launch coin representing zero-cost token launch",
};

const swapCardContent: FeatureCardContent = {
  title: "Swap with Tweets",
  description:
    "Execute swaps directly from X by tagging @stackr_main, enabling fast and intuitive token-to-token trading from a single interaction.",
  ctaLabel: "Start swapping",
  imageSrc: "/stackr-feature-swap.svg",
  imageAlt: "Illustration of a swap icon representing tweet-based token swaps",
};

const featureCards: FeatureCardContent[] = [
  walletCardContent,
  launchCardContent,
  swapCardContent,
];

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="w-full scroll-mt-24 px-4 py-8 sm:px-5 md:px-6 md:py-14"
    >
      <div className="rounded-2xl bg-foreground px-4 py-6 sm:px-8 sm:py-12 md:rounded-3xl md:px-9 md:py-24">
        <div className="mx-auto mb-7 max-w-3xl text-center sm:mb-8 md:mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-background sm:text-3xl md:text-5xl">
            The Self-Funding Flywheel
          </h2>
          <p className="mt-3 text-sm text-background/85 sm:mt-4 sm:text-base md:text-lg">
            Launch a token. Earn fees. Fund your agent&apos;s intelligence.
          </p>
        </div>

        <div className="grid gap-12 sm:gap-6 md:grid-cols-3">
          {featureCards.map((card) => (
            <article key={card.title} className="flex h-full flex-col">
              <div className="relative mb-4 h-64 overflow-hidden rounded-xl sm:mb-5 sm:h-72 sm:rounded-2xl md:h-80 lg:h-96">
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-center"
                />
              </div>

              <h3 className=" mt-6 md:mt-12 text-xl font-semibold leading-tight text-background sm:text-2xl">
                {card.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-background/80 sm:mt-4 md:text-base">
                {card.description}
              </p>

              <p className="mt-8 md:mt-18 text-sm font-regular text-background sm:mt-6 cursor-pointer hover:text-primary/90">
                {card.ctaLabel}
                <ChevronRight
                  className="size-4 inline-block ml-1"
                  aria-hidden="true"
                />
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
