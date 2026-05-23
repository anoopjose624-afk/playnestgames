"use client";

import { useState } from "react";
import { isEmbedUrlAllowed, resolveEmbedUrl } from "@/lib/embed";

interface GamePlayerProps {
  embedUrl: string;
  title: string;
  /** Taller iframe for landscape runners (e.g. endless-runner). */
  tall?: boolean;
}

export function GamePlayer({ embedUrl, title, tall = false }: GamePlayerProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const resolved = resolveEmbedUrl(embedUrl);
  const allowed = isEmbedUrlAllowed(embedUrl);

  if (!allowed) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-2xl bg-red-900/30 text-white">
        <p>This game cannot be loaded (embed not allowed).</p>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-black ring-2 ring-white/10">
      {loading && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-[#1a1040]"
          aria-hidden={!loading}
        >
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-400 border-t-transparent" />
          <span className="sr-only">Loading game</span>
        </div>
      )}
      {error ? (
        <div className="flex aspect-video items-center justify-center p-8 text-center text-white/80">
          <p>
            Unable to load {title}. The game may be blocked by your browser.
          </p>
        </div>
      ) : (
        <iframe
          key={embedUrl}
          src={resolved}
          title={title}
          className={
            tall
              ? "aspect-[960/520] w-full min-h-[min(70vh,520px)] max-h-[85vh]"
              : "aspect-video w-full min-h-[50vh] md:min-h-[70vh]"
          }
          sandbox="allow-scripts allow-same-origin allow-pointer-lock allow-fullscreen"
          allow="fullscreen"
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
        />
      )}
    </div>
  );
}
