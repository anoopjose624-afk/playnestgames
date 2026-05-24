"use client";

import Link from "next/link";

interface GameOverlayProps {
  title: string;
  paused: boolean;
  muted: boolean;
  onPause: () => void;
  onRestart: () => void;
  onFullscreen: () => void;
  onMute: () => void;
  backHref?: string;
}

interface ToolbarButtonProps {
  label: string;
  onClick: () => void;
  active?: boolean;
  children: React.ReactNode;
}

function ToolbarButton({ label, onClick, active, children }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition ${
        active
          ? "bg-[var(--pn-accent-purple)]/25 text-[var(--pn-accent-cyan)] ring-1 ring-[var(--pn-accent-purple)]/40"
          : "bg-white/5 text-[var(--pn-text-secondary)] hover:bg-white/10 hover:text-white"
      }`}
    >
      {children}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

export function GameOverlay({
  title,
  paused,
  muted,
  onPause,
  onRestart,
  onFullscreen,
  onMute,
  backHref = "/",
}: GameOverlayProps) {
  return (
    <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
      <p className="truncate text-sm font-medium text-[var(--pn-text-secondary)]">{title}</p>

      <div className="pn-overlay-toolbar flex items-center gap-1.5 overflow-x-auto rounded-xl pn-glass p-1.5">
        <ToolbarButton label={paused ? "Resume" : "Pause"} onClick={onPause} active={paused}>
          {paused ? "▶" : "⏸"}
        </ToolbarButton>
        <ToolbarButton label="Restart" onClick={onRestart}>
          ↺
        </ToolbarButton>
        <ToolbarButton label={muted ? "Unmute" : "Mute"} onClick={onMute} active={muted}>
          {muted ? "🔇" : "🔊"}
        </ToolbarButton>
        <ToolbarButton label="Fullscreen" onClick={onFullscreen}>
          ⛶
        </ToolbarButton>
        <Link
          href={backHref}
          className="flex shrink-0 items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-xs font-semibold text-[var(--pn-text-secondary)] transition hover:bg-white/10 hover:text-white"
        >
          ← <span className="hidden sm:inline">Exit</span>
        </Link>
      </div>
    </div>
  );
}
