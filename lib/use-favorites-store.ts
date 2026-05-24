"use client";

import { useSyncExternalStore } from "react";
import { getFavoriteSlugs, isFavorite } from "@/lib/favorites";

const FAVORITES_EVENT = "playnest-favorites-change";

function subscribe(callback: () => void): () => void {
  window.addEventListener(FAVORITES_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(FAVORITES_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export function useIsFavorite(slug: string): boolean {
  return useSyncExternalStore(
    subscribe,
    () => isFavorite(slug),
    () => false,
  );
}

export function useFavoriteSlugs(): string[] {
  const serialized = useSyncExternalStore(
    subscribe,
    () => getFavoriteSlugs().join("\0"),
    () => "",
  );
  return serialized ? serialized.split("\0") : [];
}
