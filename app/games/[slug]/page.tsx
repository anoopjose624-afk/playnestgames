import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FavoriteButton } from "@/components/FavoriteButton";
import { GameCard } from "@/components/GameCard";
import { GameFrame } from "@/components/game/GameFrame";
import { RecentTracker } from "@/components/RecentTracker";
import { getGameBySlug, getGames, getRelatedGames } from "@/lib/games";
import { getSiteUrl } from "@/lib/site-url";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getGames().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) return { title: "Game not found" };

  const siteUrl = getSiteUrl();

  return {
    title: game.title,
    description: game.description,
    keywords: [...game.categories, game.title, "browser game", "free game"],
    openGraph: {
      title: `${game.title} — Play Free Online`,
      description: game.description,
      type: "website",
      images: [{ url: new URL(game.thumbnail, siteUrl).toString(), alt: game.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: game.title,
      description: game.description,
    },
  };
}

export default async function GamePage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const related = getRelatedGames(game);

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
      <RecentTracker slug={game.slug} />

      <header className="mb-5 flex flex-wrap items-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-[var(--pn-text-secondary)] transition hover:bg-white/10 hover:text-white"
        >
          ← Home
        </Link>
        <h1 className="flex-1 text-xl font-extrabold text-[var(--pn-text-primary)] sm:text-2xl">
          {game.title}
        </h1>
        <FavoriteButton slug={game.slug} />
      </header>

      <GameFrame game={game} />

      <div className="mt-6 flex flex-wrap gap-2">
        {game.categories.map((cat) => (
          <Link
            key={cat}
            href={`/category/${cat.toLowerCase()}`}
            className="rounded-full border border-[var(--pn-border-subtle)] bg-white/5 px-3 py-1 text-xs font-semibold capitalize text-[var(--pn-text-secondary)] transition hover:border-[var(--pn-accent-purple)]/40 hover:text-white"
          >
            {cat}
          </Link>
        ))}
        {game.publisher && (
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-[var(--pn-text-muted)]">
            {game.publisher}
          </span>
        )}
      </div>

      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--pn-text-secondary)]">
        {game.description}
      </p>

      {related.length > 0 && (
        <section className="mt-12 border-t border-[var(--pn-border-subtle)] pt-10">
          <h2 className="pn-section-title mb-4">More like this</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {related.map((g) => (
              <GameCard key={g.id} game={g} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
