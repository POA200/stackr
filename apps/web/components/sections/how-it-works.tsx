type WorkflowStep = {
  number: string;
  title: string;
  command: string;
  description: string;
  numberClassName: string;
};

const workflowSteps: WorkflowStep[] = [
  {
    number: "01",
    title: "Tag the X Handle",
    command: "$ tag the agent through a post",
    description: "A dedicated wallet is created for the account in seconds.",
    numberClassName: "text-[#7C6CFF]",
  },
  {
    number: "02",
    title: "Buy & Sell Token",
    command: "$ trade on Stacks through a post",
    description: "Trending tokens can be bought and sold in seconds.",
    numberClassName: "text-[#FF8A32]",
  },
  {
    number: "03",
    title: "Create Tokens",
    command: "$ create tokens through a post",
    description: "Launch new tokens in seconds for any live trend.",
    numberClassName: "text-[#9C84FF]",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="w-full scroll-mt-24 px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16"
    >
      <div className="mx-auto w-full rounded-3xl bg-[#D9D9D9] px-5 py-8 sm:px-8 sm:py-14 md:px-10 md:py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-background sm:text-5xl">
            How it Works
          </h2>
          <p className="mt-5 md:mt-8 text-md text-[#6B7280] md:text-lg">
            Three commands. That&apos;s it.
          </p>
        </div>

        <ol className="mt-8 grid gap-6 md:mt-10 md:grid-cols-3 md:gap-7">
          {workflowSteps.map((step) => (
            <li key={step.number} className="flex h-full flex-col">
              <div className="inline-flex w-fit rounded-xl bg-[#F5F3FF] p-3">
                <span
                  className={`text-sm font-bold font-mono tracking-[0.18em] ${step.numberClassName}`}
                >
                  {step.number}
                </span>
              </div>

              <h3 className="mt-4 text-lg leading-none font-bold text-background sm:text-[34px] md:text-4xl">
                {step.title}
              </h3>

              <div className="mt-4 rounded-lg bg-foreground px-4 py-3">
                <p className="font-mono text-md text-background">
                  {step.command}
                </p>
              </div>

              <p className="mt-4 text-sm tracking-[0.06em] text-[#6B7280]">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
