import { CategoryPills } from "@/components/CategoryPills";
import { GameCard } from "@/components/GameCard";
import { GameGrid } from "@/components/GameGrid";
import {
  getCategories,
  getFeaturedGames,
  getGames,
} from "@/lib/games";

export default function HomePage() {
  const featured = getFeaturedGames();
  const allGames = getGames();
  const categories = getCategories();

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <section className="mb-8 text-center sm:text-left">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          PlayNest
        </h1>
        <p className="mt-2 max-w-xl text-white/60">
          Play free games online — ten titles for now. Pick a game and start
          playing instantly in your browser.
        </p>
      </section>

      <section className="mb-8">
        <CategoryPills categories={categories} />
      </section>

      {featured.length > 0 && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-bold text-white">Featured</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4">
            {featured.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="mb-4 text-xl font-bold text-white">All games</h2>
        <GameGrid games={allGames} />
      </section>
    </div>
  );
}
