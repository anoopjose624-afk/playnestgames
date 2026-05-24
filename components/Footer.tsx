import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--pn-border-subtle)] bg-[var(--pn-bg-base)] py-10">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
        <Link href="/" className="text-base font-bold pn-gradient-text">
          PlayNest
        </Link>
        <p className="mt-2 text-sm text-[var(--pn-text-muted)]">
          Free browser games — play instantly, no download required.
        </p>
        <nav className="mt-5 flex flex-wrap justify-center gap-6 text-sm text-[var(--pn-text-secondary)]">
          <Link href="/privacy" className="transition hover:text-white">
            Privacy
          </Link>
          <Link href="/terms" className="transition hover:text-white">
            Terms
          </Link>
        </nav>
        <p className="mt-4 text-xs text-[var(--pn-text-muted)]">
          © {new Date().getFullYear()} PlayNest Games
        </p>
      </div>
    </footer>
  );
}
