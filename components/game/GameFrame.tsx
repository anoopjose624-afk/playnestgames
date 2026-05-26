"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { isEmbedUrlAllowed, resolveEmbedUrl } from "@/lib/embed";
import { getGameFrameConfig } from "@/lib/game-frame";
import type { Game } from "@/types/game";
import { GameOverlay } from "./GameOverlay";

interface GameFrameProps {
  game: Pick<Game, "slug" | "title" | "embedUrl" | "aspectRatio">;
  lockScroll?: boolean;
}

const DEFAULT_LOAD_TIMEOUT_MS = 20_000;
const HEAVY_LOAD_TIMEOUT_MS = 180_000;

/** WebGL / large-asset games: never tear down the iframe on slow first load. */
const HEAVY_GAME_SLUGS = new Set(["yet-another-zombie-horror"]);

export function GameFrame({ game, lockScroll = true }: GameFrameProps) {
  const isHeavyGame = HEAVY_GAME_SLUGS.has(game.slug);
  const loadTimeoutMs = isHeavyGame ? HEAVY_LOAD_TIMEOUT_MS : DEFAULT_LOAD_TIMEOUT_MS;
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  const resolved = resolveEmbedUrl(game.embedUrl);
  const allowed = isEmbedUrlAllowed(game.embedUrl);
  const frameConfig = getGameFrameConfig(game);

  const postToGame = useCallback((type: string) => {
    iframeRef.current?.contentWindow?.postMessage({ source: "playnest-parent", type }, "*");
  }, []);

  const handleRestart = useCallback(() => {
    setPaused(false);
    setLoading(true);
    setError(false);
    setIframeKey((k) => k + 1);
  }, []);

  const handleTogglePause = useCallback(() => {
    setPaused((p) => {
      const next = !p;
      postToGame(next ? "PAUSE" : "RESUME");
      return next;
    });
  }, [postToGame]);

  const handleToggleMute = useCallback(() => {
    setMuted((m) => {
      const next = !m;
      postToGame(next ? "MUTE" : "UNMUTE");
      return next;
    });
  }, [postToGame]);

  const handleFullscreen = useCallback(async () => {
    const el = containerRef.current;
    if (!el) return;
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else {
        await el.requestFullscreen();
      }
    } catch {
      /* fullscreen not supported */
    }
  }, []);

  useEffect(() => {
    if (!lockScroll) return;
    document.body.classList.add("pn-play-active");
    return () => document.body.classList.remove("pn-play-active");
  }, [lockScroll]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const data = event.data as { source?: string; type?: string } | null;
      if (data?.source === "yazh-game" && (data.type === "READY" || data.type === "SHELL")) {
        setLoading(false);
        setError(false);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [iframeKey]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (isHeavyGame) {
        setLoading(false);
        return;
      }
      setLoading((stillLoading) => {
        if (stillLoading) setError(true);
        return false;
      });
    }, loadTimeoutMs);
    return () => window.clearTimeout(timer);
  }, [iframeKey, loadTimeoutMs, isHeavyGame]);

  if (!allowed) {
    return (
      <div className="pn-game-shell">
        <GameErrorState
          title={game.title}
          onRetry={handleRestart}
          message="This game cannot be embedded from this source."
        />
      </div>
    );
  }

  return (
    <div className="pn-game-shell">
      <div
        ref={containerRef}
        className="pn-game-frame"
        style={{
          aspectRatio: frameConfig.aspectRatio,
          minHeight: frameConfig.minHeight,
          maxHeight: frameConfig.maxHeight,
        }}
      >
        <iframe
          key={iframeKey}
          ref={iframeRef}
          src={resolved}
          title={game.title}
          className="absolute inset-0 h-full w-full"
          sandbox="allow-scripts allow-same-origin allow-pointer-lock"
          allow="fullscreen; autoplay"
          onLoad={() => {
            setLoading(false);
            setError(false);
          }}
        />

        {loading && !error && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-[var(--pn-bg-deep)]">
            <div className="h-12 w-12 animate-spin rounded-full border-[3px] border-[var(--pn-accent-purple)] border-t-transparent" />
            <p className="text-sm text-[var(--pn-text-secondary)]">Loading {game.title}…</p>
            {isHeavyGame && (
              <p className="max-w-xs text-center text-xs text-[var(--pn-text-muted)]">
                Large 3D game — first load can take up to a minute. Assets will continue loading in
                the background.
              </p>
            )}
            <div className="h-1.5 w-48 overflow-hidden rounded-full bg-white/10">
              <div className="pn-skeleton h-full w-full" />
            </div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-[var(--pn-bg-deep)]/95 p-4">
            <GameErrorState title={game.title} onRetry={handleRestart} />
          </div>
        )}

        {paused && !loading && !error && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <p className="pn-glass rounded-xl px-6 py-3 text-lg font-semibold text-white">Paused</p>
          </div>
        )}
      </div>

      <GameOverlay
        title={game.title}
        paused={paused}
        muted={muted}
        onPause={handleTogglePause}
        onRestart={handleRestart}
        onFullscreen={handleFullscreen}
        onMute={handleToggleMute}
        backHref="/"
      />
    </div>
  );
}

function GameErrorState({
  title,
  onRetry,
  message = "The game failed to load. Check your connection and try again.",
}: {
  title: string;
  onRetry: () => void;
  message?: string;
}) {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 rounded-xl bg-[var(--pn-bg-elevated)] p-8 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/15 text-2xl">
        ⚠
      </div>
      <div>
        <p className="font-semibold text-[var(--pn-text-primary)]">{title}</p>
        <p className="mt-1 max-w-sm text-sm text-[var(--pn-text-secondary)]">{message}</p>
      </div>
      <button
        type="button"
        onClick={onRetry}
        className="rounded-full bg-[var(--pn-accent-purple)] px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
      >
        Try again
      </button>
    </div>
  );
}
