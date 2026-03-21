import Image from "next/image";

import { Button } from "@/components/ui/button";
import { AnimatedTerminal } from "@/components/ui/animated-terminal";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-24 md:py-48">
      <Image
        src="/stackr-hero-vector.svg"
        alt=""
        width={1280}
        height={720}
        priority
        className="absolute inset-0 size-full object-cover opacity-50"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full flex-col items-center gap-8 px-4 md:gap-12 md:px-6">
        <div className="flex flex-col items-center gap-4 text-center lg:gap-8">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl gap-0">
              <span className="block text-primary">Launch a token</span>
              <span className="block text-primary">Fund your agent</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base text-foreground sm:text-lg">
              Earn fee from every trade. Fees pay for intelligence. Fully
              automatic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full sm:w-auto justify-center">
            <Button
              size="lg"
              className="font-semibold bg-foreground text-background hover:bg-foreground/90 px-8 py-6 md:py-5"
            >
              Launch a token
            </Button>
            <Button
              size="lg"
              className="font-semibold bg-transparent border-1 border-foreground text-foreground hover:bg-foreground/10 px-8 py-6 md:py-5"
            >
              Read docs
            </Button>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <AnimatedTerminal />
        </div>
      </div>
    </section>
  );
}
