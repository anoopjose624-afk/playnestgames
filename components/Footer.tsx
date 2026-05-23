import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-[#12082a] py-8 text-center text-sm text-white/50">
      <div className="mx-auto max-w-7xl px-4">
        <p>
          <Link href="/" className="font-semibold text-white/70 hover:text-white">
            PlayNest
          </Link>{" "}
          — free browser games. For learning and fun.
        </p>
        <nav className="mt-4 flex flex-wrap justify-center gap-4 text-xs">
          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white">
            Terms of Use
          </Link>
        </nav>
        <p className="mt-3 text-xs">© {new Date().getFullYear()} PlayNest</p>
      </div>
    </footer>
  );
}
