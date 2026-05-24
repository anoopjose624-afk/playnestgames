import { GameCard } from "@/components/GameCard";
import type { Game } from "@/types/game";

interface FeaturedSectionsProps {
  mostPlayed: Game[];
  trending: Game[];
  newlyAdded: Game[];
}

function FeaturedRow({ title, subtitle, games }: { title: string; subtitle?: string; games: Game[] }) {
  if (games.length === 0) return null;

  return (
    <section className="mb-10 pn-animate-in">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="pn-section-title">{title}</h2>
          {subtitle && (
            <p className="mt-0.5 text-sm text-[var(--pn-text-muted)]">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-4">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}

export function FeaturedSections({ mostPlayed, trending, newlyAdded }: FeaturedSectionsProps) {
  return (
    <>
      <FeaturedRow
        title="Most Played"
        subtitle="Community favorites right now"
        games={mostPlayed}
      />
      <FeaturedRow
        title="Trending"
        subtitle="Popular picks this week"
        games={trending}
      />
      <FeaturedRow
        title="Newly Added"
        subtitle="Fresh titles on PlayNest"
        games={newlyAdded}
      />
    </>
  );
}
