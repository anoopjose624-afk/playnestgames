import type { Metadata } from "next";
import { Suspense } from "react";
import { GameGrid } from "@/components/GameGrid";
import { searchGames } from "@/lib/games";

interface PageProps {
  searchParams: Promise<{ q?: string }>;
}

export const metadata: Metadata = {
  title: "Search",
  description: "Search games on PlayNest.",
};

async function SearchResults({ query }: { query: string }) {
  const games = searchGames(query);
  return (
    <>
      <p className="mb-6 text-white/60">
        {games.length} result{games.length !== 1 ? "s" : ""}
        {query ? ` for “${query}”` : ""}
      </p>
      <GameGrid
        games={games}
        emptyMessage={
          query
            ? `No games matching “${query}”. Try another search.`
            : "Enter a search term to find games."
        }
      />
    </>
  );
}

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="mb-2 text-3xl font-extrabold text-white">Search</h1>
      <Suspense fallback={<p className="text-white/50">Searching...</p>}>
        <SearchResults query={query} />
      </Suspense>
    </div>
  );
}
