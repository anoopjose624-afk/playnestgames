"use client";

import { useCallback } from "react";
import { toggleFavorite } from "@/lib/favorites";
import { useIsFavorite } from "@/lib/use-favorites-store";

interface FavoriteButtonProps {
  slug: string;
}

export function FavoriteButton({ slug }: FavoriteButtonProps) {
  const favorited = useIsFavorite(slug);

  const handleClick = useCallback(() => {
    toggleFavorite(slug);
  }, [slug]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 ${
        favorited
          ? "bg-fuchsia-500 text-white hover:bg-fuchsia-400"
          : "bg-white/10 text-white hover:bg-white/20"
      }`}
      aria-pressed={favorited}
      aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
    >
      {favorited ? "♥ Favorited" : "♡ Favorite"}
    </button>
  );
}
