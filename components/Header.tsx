"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useCallback, useRef } from "react";
import { useFavoriteSlugs } from "@/lib/use-favorites-store";

export function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const inputRef = useRef<HTMLInputElement>(null);
  const favoriteSlugs = useFavoriteSlugs();

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const trimmed = (inputRef.current?.value ?? "").trim();
      if (trimmed) {
        router.push(`/search?q=${encodeURIComponent(trimmed)}`);
      } else {
        router.push("/search");
      }
    },
    [router],
  );

  return (
    <header className="sticky top-0 z-50 h-[var(--pn-header-h)] border-b border-[var(--pn-border-subtle)] bg-[var(--pn-bg-base)]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-7xl items-center gap-3 px-4 sm:gap-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 text-lg font-extrabold tracking-tight text-[var(--pn-text-primary)]"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--pn-accent-cyan)] to-[var(--pn-accent-purple)] text-base font-black text-white shadow-[0_0_20px_var(--pn-glow-purple)]">
            P
          </span>
          <span className="hidden sm:inline pn-gradient-text">PlayNest</span>
        </Link>

        <form onSubmit={onSubmit} className="min-w-0 flex-1 sm:max-w-lg">
          <label htmlFor="search" className="sr-only">
            Search games
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--pn-text-muted)]">
              ⌕
            </span>
            <input
              key={initialQuery}
              ref={inputRef}
              id="search"
              type="search"
              defaultValue={initialQuery}
              placeholder="Search games…"
              className="w-full rounded-full border border-[var(--pn-border-subtle)] bg-white/5 py-2.5 pl-10 pr-4 text-sm text-[var(--pn-text-primary)] placeholder:text-[var(--pn-text-muted)] focus:border-[var(--pn-accent-purple)]/50 focus:outline-none focus:ring-2 focus:ring-[var(--pn-accent-purple)]/25"
            />
          </div>
        </form>

        <nav className="flex shrink-0 items-center gap-1 sm:gap-2">
          <Link
            href="/favorites"
            className="relative flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium text-[var(--pn-text-secondary)] transition hover:bg-white/5 hover:text-white"
          >
            ♥
            <span className="hidden md:inline">Favorites</span>
            {favoriteSlugs.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--pn-accent-purple)] px-1 text-[10px] font-bold text-white">
                {favoriteSlugs.length}
              </span>
            )}
          </Link>
          <button
            type="button"
            disabled
            title="Profiles coming soon"
            aria-label="Profile (coming soon)"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--pn-border-subtle)] bg-white/5 text-sm text-[var(--pn-text-muted)]"
          >
            👤
          </button>
        </nav>
      </div>
    </header>
  );
}
