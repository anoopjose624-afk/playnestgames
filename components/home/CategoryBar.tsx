"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CATEGORY_ORDER } from "@/lib/design-tokens";

interface CategoryBarProps {
  categories: string[];
}

function sortCategories(categories: string[]): string[] {
  const orderMap = new Map(CATEGORY_ORDER.map((c, i) => [c, i]));
  return [...categories].sort((a, b) => {
    const ai = orderMap.get(a.toLowerCase()) ?? 999;
    const bi = orderMap.get(b.toLowerCase()) ?? 999;
    if (ai !== bi) return ai - bi;
    return a.localeCompare(b);
  });
}

export function CategoryBar({ categories }: CategoryBarProps) {
  const pathname = usePathname();
  const sorted = sortCategories(categories);
  const activeCategory = pathname.startsWith("/category/")
    ? pathname.replace("/category/", "")
    : null;

  return (
    <nav
      aria-label="Game categories"
      className="sticky top-[var(--pn-header-h)] z-40 -mx-4 border-b border-[var(--pn-border-subtle)] bg-[var(--pn-bg-base)]/90 px-4 backdrop-blur-md sm:-mx-6 sm:px-6"
    >
      <div className="pn-category-scroll mx-auto flex max-w-7xl gap-2 overflow-x-auto py-3">
        <CategoryPill href="/" label="All" active={!activeCategory} />
        {sorted.map((cat) => (
          <CategoryPill
            key={cat}
            href={`/category/${cat.toLowerCase()}`}
            label={cat}
            active={activeCategory === cat.toLowerCase()}
          />
        ))}
      </div>
    </nav>
  );
}

function CategoryPill({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold capitalize transition ${
        active
          ? "bg-gradient-to-r from-[var(--pn-accent-purple)] to-[var(--pn-accent-blue)] text-white shadow-[0_0_16px_var(--pn-glow-purple)]"
          : "bg-white/5 text-[var(--pn-text-secondary)] hover:bg-white/10 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}
