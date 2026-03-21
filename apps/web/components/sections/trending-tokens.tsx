import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { TrendingToken } from "@/lib/db/tokens";

type TrendingTokensSectionProps = {
  tokens: TrendingToken[];
};

export function TrendingTokensSection({ tokens }: TrendingTokensSectionProps) {
  const hasTokens = tokens.length > 0;

  return (
    <section
      id="trending-tokens"
      className="w-full scroll-mt-24 px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16"
    >
      <div className="mx-auto w-full rounded-3xl bg-foreground px-5 py-8 sm:px-12 sm:py-14 md:px-24 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-background sm:text-5xl">
            Top 5 Trending Coins
          </h2>
          <p className="mt-5 text-sm text-[#6B7280] md:text-lg">
            Coins created on Stackr, ranked by market cap.
          </p>
        </div>

        {hasTokens ? (
          <div className="mt-8 overflow-hidden bg-transparent">
            <Table className="min-w-[680px] md:min-w-full">
              <TableHeader className="bg-white/25">
                <TableRow className="border-black/10 hover:bg-transparent">
                  <TableHead className="w-14 px-6 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
                    #
                  </TableHead>
                  <TableHead className="px-3 text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
                    Agent
                  </TableHead>
                  <TableHead className="px-3 text-right text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
                    Market Cap
                  </TableHead>
                  <TableHead className="px-6 text-right text-xs font-semibold uppercase tracking-widest text-[#6B7280]">
                    7D Revenue
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {tokens.map((token, index) => (
                  <TableRow
                    key={token.id}
                    className={cn(
                      "border-background/5 transition-colors duration-150",
                      index % 2 === 1 ? "bg-[#F9FAFB]" : "bg-transparent",
                    )}
                  >
                    <TableCell className="px-6 py-4 text-sm text-background/90">
                      {token.rank}
                    </TableCell>

                    <TableCell className="px-3 py-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={token.logoPath}
                          alt={`${token.name} logo`}
                          width={28}
                          height={28}
                          className="h-7 w-7 rounded-full object-cover"
                        />
                        <div className="flex items-baseline gap-2">
                          <span className="text-sm font-semibold tracking-wide text-background/90">
                            {token.name}
                          </span>
                          <span className="text-xs text-background/55 md:text-sm">
                            {token.ticker}
                          </span>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="px-3 py-4 text-right text-sm font-medium text-background/90">
                      {token.marketCapUsd}
                    </TableCell>

                    <TableCell className="px-6 py-4 text-right text-sm font-medium text-background/90">
                      {token.revenue7dUsd}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-black/20 bg-foreground/40 px-6 py-14 text-center sm:px-10">
            <p className="text-lg font-semibold text-background/85">
              No trending coins yet
            </p>
            <p className="mt-3 text-sm text-background/55 sm:text-base">
              This table will populate automatically when token activity is
              available from the backend.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
