import Image from "next/image";
import Link from "next/link";
import type { Game } from "@/types/game";

interface HomeHeroProps {
  game: Game;
}

export function HomeHero({ game }: HomeHeroProps) {
  return (
    <section className="relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-900/80 via-fuchsia-900/60 to-indigo-950 ring-1 ring-white/10">
      <div className="grid gap-6 p-6 sm:grid-cols-2 sm:items-center sm:p-8 lg:p-10">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/30 shadow-lg ring-1 ring-white/10 sm:order-2">
          <Image
            src={game.thumbnail}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="sm:order-1">
          <p className="text-sm font-semibold uppercase tracking-wider text-violet-300">
            Featured game
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {game.title}
          </h2>
          <p className="mt-3 text-base text-white/70">{game.description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/games/${game.slug}`}
              className="inline-flex min-h-[48px] min-w-[140px] items-center justify-center rounded-full bg-violet-500 px-8 py-3 text-base font-bold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
            >
              Play now
            </Link>
            <Link
              href={`/games/${game.slug}`}
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              View details
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
