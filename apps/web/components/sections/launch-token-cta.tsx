import { Button } from "@/components/ui/button";

export function LaunchTokenCtaSection() {
  return (
    <section className="w-full bg-background px-4 py-10 sm:px-6 sm:py-12 md:px-8 md:py-14">
      <div className="mx-auto flex max-w-6xl justify-center">
        <Button
          size="lg"
          className="h-12 rounded-xl bg-[#FC6432] px-7 text-sm font-bold tracking-[0.12em] text-black uppercase hover:bg-[#f75c2d] sm:h-14 sm:px-10 sm:text-base"
        >
          Launch Your Token
        </Button>
      </div>
    </section>
  );
}
