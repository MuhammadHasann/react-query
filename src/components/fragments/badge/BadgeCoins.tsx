"use client";

import {
  getCoinsRouteHandlers,
  getCoinsServerAction,
} from "@/utils/coins/coinUtils";
import { useQuery } from "@tanstack/react-query";

const BadgeCoins = () => {
  const { data: coins, isLoading: coinsLoading } = useQuery({
    queryKey: ["coins"],
    queryFn: getCoinsRouteHandlers,
    // queryFn: getCoinsServerAction,
  });

  if (coinsLoading) return <h1>Loading coins...</h1>;

  if (!coins) return <h1>Nothing data coins</h1>;

  return (
    <div className="py-1.5 px-3 size-fit bg-secondary/75 text-sm text-foreground ring-1 ring-secondary rounded-full">
      <span>{coins.coins}</span>
    </div>
  );
};

export default BadgeCoins;
