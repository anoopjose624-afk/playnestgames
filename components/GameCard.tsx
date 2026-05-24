import Image from "next/image";
import Link from "next/link";
import type { Game } from "@/types/game";

interface GameCardProps {
  game: Game;
  priority?: boolean;
}

const BADGE_STYLES: Record<string, string> = {
  featured: "bg-[var(--pn-accent-gold)]/90 text-amber-950",
  new: "bg-[var(--pn-accent-cyan)]/90 text-slate-900",
  hot: "bg-[var(--pn-accent-rose)]/90 text-white",
};

function getBadge(game: Game): { label: string; style: string } | null {
  if (game.badge) {
    return { label: game.badge, style: BADGE_STYLES[game.badge] ?? BADGE_STYLES.featured };
  }
  if (game.featured) {
    return { label: "Featured", style: BADGE_STYLES.featured };
  }
  return null;
}

export function GameCard({ game, priority = false }: GameCardProps) {
  const badge = getBadge(game);

  return (
    <Link
      href={`/games/${game.slug}`}
      className="group pn-card block overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pn-accent-purple)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--pn-bg-elevated)]">
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          priority={priority}
          className="object-cover transition duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
        {badge && (
          <span
            className={`absolute left-2 top-2 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${badge.style}`}
          >
            {badge.label}
          </span>
        )}
        <span className="absolute bottom-2 right-2 translate-y-1 rounded-full bg-[var(--pn-accent-purple)] px-3 py-1.5 text-xs font-bold text-white opacity-0 shadow-lg transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          Play →
        </span>
      </div>
      <div className="p-3">
        <h3 className="truncate font-bold text-[var(--pn-text-primary)] group-hover:text-[var(--pn-accent-cyan)]">
          {game.title}
        </h3>
        <p className="mt-0.5 truncate text-xs capitalize text-[var(--pn-text-muted)]">
          {game.categories.slice(0, 2).join(" · ")}
        </p>
      </div>
    </Link>
  );
}
