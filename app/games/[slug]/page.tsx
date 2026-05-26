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

      {game.mobile && (
        <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-[var(--pn-accent-cyan)]/30 bg-[var(--pn-accent-cyan)]/10 px-3 py-1 text-xs font-semibold text-[var(--pn-accent-cyan)]">
          Touch controls supported
        </p>
      )}

      {game.loadingNotice && (
        <p className="mt-4 rounded-xl border border-amber-500/25 bg-amber-500/10 px-4 py-3 text-sm text-amber-100/90">
          {game.loadingNotice}
        </p>
      )}

      {game.controls && (
        <section className="mt-8 grid gap-6 sm:grid-cols-2">
          <ControlsTable title="Desktop controls" rows={game.controls.desktop} />
          <ControlsTable title="Mobile controls" rows={game.controls.mobile} />
        </section>
      )}

      {game.attribution && (
        <footer className="mt-8 rounded-xl border border-[var(--pn-border-subtle)] bg-white/5 px-4 py-4 text-xs leading-relaxed text-[var(--pn-text-muted)]">
          <p>
            <strong className="text-[var(--pn-text-secondary)]">{game.title}</strong> by{" "}
            <a
              href={game.attribution.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--pn-accent-cyan)] hover:underline"
            >
              {game.attribution.author}
            </a>
            . Licensed under the {game.attribution.license}.{" "}
            {game.attribution.licensePath && (
              <>
                <a
                  href={game.attribution.licensePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--pn-accent-purple)] hover:underline"
                >
                  View license text
                </a>
                .{" "}
              </>
            )}
            Original project and source code remain the property of the author.
          </p>
        </footer>
      )}

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

function ControlsTable({
  title,
  rows,
}: {
  title: string;
  rows: Array<{ action: string; keys: string }>;
}) {
  return (
    <div className="rounded-xl border border-[var(--pn-border-subtle)] bg-[var(--pn-bg-elevated)]/50 p-4">
      <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-[var(--pn-text-primary)]">
        {title}
      </h2>
      <table className="w-full text-left text-sm">
        <tbody>
          {rows.map((row) => (
            <tr key={row.action} className="border-t border-white/5 first:border-0">
              <th className="py-2 pr-3 font-medium text-[var(--pn-text-secondary)]">
                {row.action}
              </th>
              <td className="py-2 font-mono text-xs text-[var(--pn-accent-cyan)]">{row.keys}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
