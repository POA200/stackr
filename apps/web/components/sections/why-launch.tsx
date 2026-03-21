import { Bot, Coins, ShieldCheck } from "lucide-react";

import type { LucideIcon } from "lucide-react";

type LaunchBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const launchBenefits: LaunchBenefit[] = [
  {
    title: "Passive Revenue",
    description:
      "Capture protocol-driven fees from every trade and route value back to your treasury without extra operational overhead.",
    icon: Coins,
  },
  {
    title: "Sustainable Agent Economics",
    description:
      "Use token-driven cash flow to continuously fund model usage, infrastructure, and growth without relying on external capital.",
    icon: Bot,
  },
  {
    title: "Trust-Minimized Execution",
    description:
      "Launch and scale on transparent onchain rails with auditable flows, reducing coordination risk for your team and community.",
    icon: ShieldCheck,
  },
];

export function WhyLaunchSection() {
  return (
    <section
      id="why-launch"
      className="w-full scroll-mt-24 px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16"
    >
      <div className="mx-auto w-full rounded-3xl bg-[#D9D9D9] px-5 py-8 sm:px-8 sm:py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-background sm:text-5xl">
            Why Launch on Stackr
          </h2>
          <p className="mt-5 text-sm text-[#6B7280] md:text-lg">
            Focus on building your agent while token activity powers the
            business model.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-6">
          {launchBenefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="rounded-xl border border-background/12 bg-foreground/30 px-5 py-6 sm:py-8 sm:px-6"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#7C3AED]/10 text-[#7C3AED]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-background/90">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-background/70 sm:text-base">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
