import { CategoryBar } from "@/components/home/CategoryBar";
import { FeaturedSections } from "@/components/home/FeaturedSections";
import { RecentGamesSection } from "@/components/home/RecentGamesSection";
import { GameGrid } from "@/components/GameGrid";
import {
  getCategories,
  getGames,
  getMostPlayedGames,
  getNewlyAddedGames,
  getTrendingGames,
} from "@/lib/games";

export default function HomePage() {
  const allGames = getGames();
  const categories = getCategories();

  return (
    <>
      <CategoryBar categories={categories} />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <section className="mb-10 text-center sm:mb-12 sm:text-left">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="pn-gradient-text">PlayNest Games</span>
          </h1>
          <p className="mt-2 max-w-xl text-[var(--pn-text-secondary)]">
            {allGames.length} premium browser games — arcade, puzzle, action, and more.
          </p>
        </section>

        <RecentGamesSection />

        <FeaturedSections
          mostPlayed={getMostPlayedGames(5)}
          trending={getTrendingGames(5)}
          newlyAdded={getNewlyAddedGames(5)}
        />

        <section>
          <h2 className="pn-section-title mb-4">All Games</h2>
          <GameGrid games={allGames} />
        </section>
      </div>
    </>
  );
}
