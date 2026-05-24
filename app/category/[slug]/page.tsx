import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryBar } from "@/components/home/CategoryBar";
import { GameGrid } from "@/components/GameGrid";
import { getCategories, getGamesByCategory } from "@/lib/games";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((cat) => ({ slug: cat.toLowerCase() }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const label = slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    title: `${label} Games`,
    description: `Browse ${label.toLowerCase()} games on PlayNest — free browser games, no download.`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const games = getGamesByCategory(slug);
  const categories = getCategories();

  if (games.length === 0) {
    const valid = categories.some((c) => c.toLowerCase() === slug.toLowerCase());
    if (!valid) notFound();
  }

  const label = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <>
      <CategoryBar categories={categories} />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <h1 className="text-3xl font-extrabold tracking-tight text-[var(--pn-text-primary)]">
          {label}
        </h1>
        <p className="mt-1 text-[var(--pn-text-secondary)]">
          {games.length} game{games.length !== 1 ? "s" : ""}
        </p>
        <div className="mt-8">
          <GameGrid games={games} emptyMessage={`No ${label.toLowerCase()} games yet.`} />
        </div>
      </div>
    </>
  );
}
