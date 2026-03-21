import Image from "next/image";

export function StackrBrandSection() {
  return (
    <section className="relative w-full px-4 pb-12 sm:px-6 sm:pb-14 md:px-8 md:pb-16">
      <div className="relative mx-auto rounded-3xl bg-foreground px-5 py-10 sm:px-8 sm:py-14 md:px-36 md:py-36">
        <div className="flex items-center gap-1">
          <Image
            src="/stackr-stx.png"
            alt="Stackr and Stacks logos"
            width={212}
            height={116}
            className="h-auto w-[90px] shrink-0 sm:w-[140px] md:w-[250px]"
            priority={false}
          />

          <h2 className="text-[42px] leading-none font-bold tracking-tight text-[#7C5DE8] sm:text-[72px] md:text-[150px]">
            $Stackr
          </h2>
        </div>
      </div>

      <Image
        src="/stackr-smile.png"
        alt="Decorative Stackr coin"
        width={304}
        height={304}
        className="pointer-events-none absolute -right-1 -top-40 z-20 hidden h-auto w-[210px] md:block md:w-[330px] lg:w-[390px]"
        aria-hidden="true"
      />

      <Image
        src="/stackr-smile.png"
        alt="Decorative Stackr coin"
        width={304}
        height={304}
        className="pointer-events-none absolute -bottom-24 right-[18%] z-20 hidden h-auto w-[225px] rotate-[24deg] md:block md:w-[330px] lg:w-[375px]"
        aria-hidden="true"
      />
    </section>
  );
}
