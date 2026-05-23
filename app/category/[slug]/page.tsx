import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPills } from "@/components/CategoryPills";
import { GameGrid } from "@/components/GameGrid";
import {
  getCategories,
  getGamesByCategory,
} from "@/lib/games";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((cat) => ({ slug: cat.toLowerCase() }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} Games`,
    description: `Browse ${slug} games on PlayNest.`,
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
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <h1 className="mb-2 text-3xl font-extrabold text-white">{label} games</h1>
      <p className="mb-6 text-white/60">
        {games.length} game{games.length !== 1 ? "s" : ""} in this category
      </p>

      <section className="mb-8">
        <CategoryPills categories={categories} activeCategory={slug} />
      </section>

      <GameGrid
        games={games}
        emptyMessage={`No ${label.toLowerCase()} games yet.`}
      />
    </div>
  );
}
