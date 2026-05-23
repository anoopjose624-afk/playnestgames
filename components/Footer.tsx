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
        <p className="mt-2 text-xs">Games hosted locally for demo purposes.</p>
      </div>
    </footer>
  );
}
