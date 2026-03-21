import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section id="cta" className="w-full scroll-mt-24 bg-[#D9D9D9]">
      <div className="mx-auto w-full overflow-hidden">
        <div
          className="top-0 h-14 w-full bg-black/12 sm:h-24"
          aria-hidden="true"
        />

        <div className="flex min-h-[300px] items-center justify-center px-4 py-10 sm:min-h-[360px] sm:px-6 sm:py-16 md:min-h-[410px] md:px-8 md:py-20">
          <div className="flex w-full max-w-[580px] flex-col items-center gap-4 sm:flex-row sm:items-stretch sm:justify-center sm:gap-5">
            <Image
              src="/stackr-cta-logo.png"
              alt="Stackr logo"
              width={116}
              height={116}
              className="h-[96px] w-[96px] shrink-0 rounded-2xl object-cover sm:h-[120px] sm:w-[120px]"
            />

            <article className="w-full h-full rounded-2xl bg-[#8B5CF6] px-4 py-4 text-white sm:max-w-[420px] sm:px-5 sm:py-5">
              <h2 className="text-md leading-none font-semibold tracking-tight sm:text-lg">
                Try Stackr Free
              </h2>

              <p className="mt-6 text-sm leading-4 text-background sm:text-md sm:leading-5">
                Just chat to transact, making blockchain interaction seamless.
              </p>

              <Button
                type="button"
                className="mt-6 p-4 rounded-md bg-background px-3 text-sm font-regular tracking-[0.18em] text-foreground uppercase hover:bg-background/90"
              >
                Try For Free
                <ArrowUpRight className="size-3" aria-hidden="true" />
              </Button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
