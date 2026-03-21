export type TrendingToken = {
  id: string;
  rank: number;
  name: string;
  ticker: string;
  logoPath: string;
  marketCapUsd: string;
  revenue7dUsd: string;
};

export const trendingTokensSeed: TrendingToken[] = [
  {
    id: "stackr",
    rank: 1,
    name: "STACKR",
    ticker: "$str",
    logoPath: "/$str.png",
    marketCapUsd: "$100K",
    revenue7dUsd: "$10K",
  },
  {
    id: "welsh",
    rank: 2,
    name: "WELSH",
    ticker: "$WELSH",
    logoPath: "/$WELSH.png",
    marketCapUsd: "$100K",
    revenue7dUsd: "$10K",
  },
  {
    id: "meme",
    rank: 3,
    name: "MEME",
    ticker: "$MEME",
    logoPath: "/$MEME.png",
    marketCapUsd: "$100K",
    revenue7dUsd: "$10K",
  },
  {
    id: "flat",
    rank: 4,
    name: "FLAT",
    ticker: "$FLAT",
    logoPath: "/$FLAT.png",
    marketCapUsd: "$100K",
    revenue7dUsd: "$10K",
  },
  {
    id: "ghost",
    rank: 5,
    name: "GHOST",
    ticker: "$GHOST",
    logoPath: "/$GHOST.png",
    marketCapUsd: "$100K",
    revenue7dUsd: "$10K",
  },
];

export async function getTrendingTokens(): Promise<TrendingToken[]> {
  const useEmptyState =
    process.env.NEXT_PUBLIC_TRENDING_TOKENS_EMPTY_STATE === "true";

  if (useEmptyState) {
    return [];
  }

  return trendingTokensSeed;
}
