import type { Game, GameAspectRatio, GameFrameConfig } from "@/types/game";

const ASPECT_MAP: Record<GameAspectRatio, string> = {
  "16:9": "16 / 9",
  "4:3": "4 / 3",
  "3:2": "3 / 2",
  "960:520": "960 / 520",
};

/** Resolve CSS aspect-ratio and height constraints for a game. */
export function getGameFrameConfig(game: Pick<Game, "slug" | "aspectRatio">): GameFrameConfig {
  const ratio = game.aspectRatio ?? (game.slug === "endless-runner" ? "960:520" : "16:9");
  const cssRatio = ASPECT_MAP[ratio] ?? "16 / 9";
  const isWide = ratio === "960:520" || ratio === "16:9";

  return {
    aspectRatio: cssRatio,
    minHeight: isWide ? "min(50vh, 320px)" : "min(45vh, 280px)",
    maxHeight: isWide ? "min(85vh, 720px)" : "min(80vh, 640px)",
  };
}

/** Canonical embed path for self-hosted games. */
export function normalizeEmbedUrl(slug: string, embedUrl?: string): string {
  if (embedUrl?.includes("/embed")) return embedUrl;
  return `/games/${slug}/embed`;
}
