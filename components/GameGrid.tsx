import type { Game } from "@/types/game";
import { GameCard } from "./GameCard";

interface GameGridProps {
  games: Game[];
  emptyMessage?: string;
}

export function GameGrid({
  games,
  emptyMessage = "No games found.",
}: GameGridProps) {
  if (games.length === 0) {
    return (
      <p className="rounded-2xl bg-white/5 px-6 py-12 text-center text-white/60">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
