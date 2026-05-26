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
  const isHeavy3D = game.slug === "yet-another-zombie-horror";

  return {
    aspectRatio: cssRatio,
    minHeight: isHeavy3D
      ? "min(55vh, 360px)"
      : isWide
        ? "min(50vh, 320px)"
        : "min(45vh, 280px)",
    maxHeight: isHeavy3D
      ? "min(90vh, 800px)"
      : isWide
        ? "min(85vh, 720px)"
        : "min(80vh, 640px)",
  };
}

/** Canonical embed path for self-hosted games. */
export function normalizeEmbedUrl(slug: string, embedUrl?: string): string {
  if (embedUrl?.includes("/embed")) return embedUrl;
  return `/games/${slug}/embed`;
}
