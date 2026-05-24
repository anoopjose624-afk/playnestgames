"use client";

import { GameCard } from "@/components/GameCard";
import { getGameBySlug } from "@/lib/games";
import { getRecentSlugs } from "@/lib/favorites";
import { useSyncExternalStore } from "react";

function subscribeRecent(onStoreChange: () => void) {
  window.addEventListener("playnest-recent-change", onStoreChange);
  window.addEventListener("storage", onStoreChange);
  return () => {
    window.removeEventListener("playnest-recent-change", onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getRecentSnapshot() {
  return getRecentSlugs().join(",");
}

export function RecentGamesSection() {
  const recentKey = useSyncExternalStore(subscribeRecent, getRecentSnapshot, () => "");
  const slugs = recentKey ? recentKey.split(",").filter(Boolean) : [];
  const games = slugs.map((s) => getGameBySlug(s)).filter(Boolean);

  if (games.length === 0) return null;

  return (
    <section className="mb-10">
      <h2 className="pn-section-title mb-4">Continue Playing</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
        {games.map((game) => (
          <GameCard key={game!.slug} game={game!} />
        ))}
      </div>
    </section>
  );
}
