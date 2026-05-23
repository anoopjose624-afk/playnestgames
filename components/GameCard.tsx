import Image from "next/image";
import Link from "next/link";
import type { Game } from "@/types/game";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Link
      href={`/games/${game.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white/5 shadow-md ring-1 ring-white/10 transition hover:-translate-y-1 hover:shadow-xl hover:ring-violet-400/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-violet-900/50 to-fuchsia-900/50">
        <Image
          src={game.thumbnail}
          alt={game.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        {game.featured && (
          <span className="absolute left-2 top-2 rounded-md bg-amber-400 px-2 py-0.5 text-xs font-bold text-amber-950">
            Featured
          </span>
        )}
        <span className="absolute bottom-2 right-2 rounded-full bg-violet-500 px-3 py-1.5 text-xs font-bold text-white shadow-md transition group-hover:bg-violet-400 group-hover:scale-105">
          Play
        </span>
      </div>
      <div className="p-3">
        <h3 className="truncate font-bold text-white group-hover:text-violet-200">
          {game.title}
        </h3>
        <p className="mt-1 truncate text-xs capitalize text-white/50">
          {game.categories.join(" · ")}
        </p>
      </div>
    </Link>
  );
}
