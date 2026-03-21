type AgentCapability = {
  title: string;
  description: string;
};

const capabilities: AgentCapability[] = [
  {
    title: "Natural Language Wallet Actions",
    description:
      "Execute wallet operations with clear prompts, reducing operational friction for your team and your users.",
  },
  {
    title: "Battle-Tested Transaction Reliability",
    description:
      "Coordinate high-frequency workflows with predictable execution across launches, swaps, and transfers.",
  },
  {
    title: "Token Swaps Through a Single Workflow",
    description:
      "Route token actions from one guided interface so users can move from intent to execution in seconds.",
  },
];

export function StackrAgentSection() {
  return (
    <section className="w-full bg-[#8B5CF6] px-4 py-14 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Stackr Agent
          </h2>
          <p className="mt-4 text-sm text-white/85 sm:text-base md:text-lg">
            Manage wallet operations through Stackr Terminal and X with a single coordinated workflow built for fast execution.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 md:mt-10 md:grid-cols-3 md:gap-4">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="rounded-xl border border-white/30 bg-white/8 p-4 backdrop-blur-[1px]"
            >
              <h3 className="text-sm font-semibold text-white sm:text-base">
                {capability.title}
              </h3>
              <p className="mt-2 text-xs leading-5 text-white/85 sm:text-sm">
                {capability.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-[minmax(0,1fr)_230px]">
          <article className="overflow-hidden rounded-xl bg-[#ECECEC] text-[#111111] shadow-[0_14px_30px_rgba(0,0,0,0.14)]">
            <header className="flex items-center justify-between border-b border-black/8 px-4 py-3 sm:px-5 sm:py-4">
              <h3 className="text-base font-semibold sm:text-2xl">Terminal</h3>
              <button
                type="button"
                className="rounded-md bg-black px-2.5 py-1 text-[10px] font-medium tracking-wide text-white uppercase sm:px-3 sm:py-1.5 sm:text-[11px]"
              >
                Open
              </button>
            </header>
            <div className="h-52 bg-[#F4F4F4] sm:h-64 md:h-72" />
          </article>

          <article className="overflow-hidden rounded-xl bg-[#ECECEC] text-[#111111] shadow-[0_14px_30px_rgba(0,0,0,0.14)]">
            <header className="flex items-center justify-between border-b border-black/8 px-4 py-3">
              <div>
                <h3 className="text-base font-semibold">On X</h3>
                <p className="text-[11px] text-black/60">Tag @stackr_main on X</p>
              </div>
              <div className="h-6 w-6 rounded-sm bg-black" aria-hidden="true" />
            </header>
            <div className="relative h-52 bg-[#F4F4F4] md:h-72">
              <div
                className="absolute bottom-2 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-black/70"
                aria-hidden="true"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
