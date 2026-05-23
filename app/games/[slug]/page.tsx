import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FavoriteButton } from "@/components/FavoriteButton";
import { GameCard } from "@/components/GameCard";
import { GamePlayer } from "@/components/GamePlayer";
import { RecentTracker } from "@/components/RecentTracker";
import { getGameBySlug, getGames, getRelatedGames } from "@/lib/games";

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

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  return {
    title: game.title,
    description: game.description,
    openGraph: {
      title: game.title,
      description: game.description,
      images: [{ url: new URL(game.thumbnail, siteUrl).toString() }],
    },
  };
}

export default async function GamePage({ params }: PageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const related = getRelatedGames(game);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
      <RecentTracker slug={game.slug} />

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <Link
          href="/"
          className="text-sm text-white/60 hover:text-white"
        >
          ← Back
        </Link>
        <span className="text-white/30">|</span>
        <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
          {game.title}
        </h1>
        <FavoriteButton slug={game.slug} />
      </div>

      <GamePlayer embedUrl={game.embedUrl} title={game.title} />

      <div className="mt-6 flex flex-wrap gap-2">
        {game.categories.map((cat) => (
          <Link
            key={cat}
            href={`/category/${cat.toLowerCase()}`}
            className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold capitalize text-white/80 hover:bg-white/20"
          >
            {cat}
          </Link>
        ))}
        {game.publisher && (
          <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">
            {game.publisher}
          </span>
        )}
      </div>

      <p className="mt-4 max-w-2xl text-white/70">{game.description}</p>

      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 text-xl font-bold text-white">More like this</h2>
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
