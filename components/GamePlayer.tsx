"use client";

import type { Game } from "@/types/game";
import { GameFrame } from "@/components/game/GameFrame";

interface GamePlayerProps {
  embedUrl: string;
  title: string;
  tall?: boolean;
  slug?: string;
  aspectRatio?: Game["aspectRatio"];
}

/** @deprecated Use GameFrame with full game object. Kept for backward compatibility. */
export function GamePlayer({ embedUrl, title, tall, slug = "game", aspectRatio }: GamePlayerProps) {
  return (
    <GameFrame
      game={{
        slug,
        title,
        embedUrl,
        aspectRatio: aspectRatio ?? (tall ? "960:520" : "16:9"),
      }}
    />
  );
}
