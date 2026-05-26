"use client";

import { useSyncExternalStore } from "react";
import { getFavoriteSlugs, isFavorite } from "@/lib/favorites";

const FAVORITES_EVENT = "playnest-favorites-change";
const EMPTY_SNAPSHOT = "";
const EMPTY_SLUGS: string[] = [];

function getFavoriteSnapshot(): string {
  return getFavoriteSlugs().join("\0");
}

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
    getFavoriteSnapshot,
    () => EMPTY_SNAPSHOT,
  );
  if (!serialized) return EMPTY_SLUGS;
  return serialized.split("\0");
}
