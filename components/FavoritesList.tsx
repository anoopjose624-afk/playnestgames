"use client";

import Link from "next/link";
import { getGameBySlug } from "@/lib/games";
import { useFavoriteSlugs } from "@/lib/use-favorites-store";
import { GameGrid } from "./GameGrid";

export function FavoritesList() {
  const slugs = useFavoriteSlugs();
  const games = slugs
    .map((s) => getGameBySlug(s))
    .filter((g) => g !== undefined);

  if (games.length === 0) {
    return (
      <div className="rounded-2xl bg-white/5 px-6 py-16 text-center">
        <p className="text-lg text-white/70">No favorites yet.</p>
        <p className="mt-2 text-sm text-white/50">
          Tap the heart on any game to save it here.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-violet-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-violet-400"
        >
          Browse games
        </Link>
      </div>
    );
  }

  return <GameGrid games={games} />;
}
