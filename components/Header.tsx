"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useCallback, useRef } from "react";

export function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const inputRef = useRef<HTMLInputElement>(null);

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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1a1040]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-xl font-extrabold tracking-tight text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-lg shadow-lg">
            P
          </span>
          PlayNest
        </Link>

        <form onSubmit={onSubmit} className="min-w-0 flex-1 sm:max-w-md">
          <label htmlFor="search" className="sr-only">
            Search games
          </label>
          <div className="relative">
            <input
              key={initialQuery}
              ref={inputRef}
              id="search"
              type="search"
              defaultValue={initialQuery}
              placeholder="Search games..."
              className="w-full rounded-full border border-white/15 bg-white/10 py-2.5 pl-4 pr-10 text-sm text-white placeholder:text-white/50 focus:border-violet-400 focus:outline-none focus:ring-2 focus:ring-violet-400/40"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-violet-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-violet-400"
            >
              Go
            </button>
          </div>
        </form>

        <nav className="flex shrink-0 items-center gap-4 text-sm font-medium text-white/80">
          <Link href="/favorites" className="hover:text-white">
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}
