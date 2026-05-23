import Link from "next/link";

const CATEGORY_COLORS: Record<string, string> = {
  arcade: "bg-orange-500 hover:bg-orange-400",
  action: "bg-red-500 hover:bg-red-400",
  puzzle: "bg-blue-500 hover:bg-blue-400",
  casual: "bg-green-500 hover:bg-green-400",
  classic: "bg-amber-500 hover:bg-amber-400",
  sports: "bg-cyan-500 hover:bg-cyan-400",
  brain: "bg-purple-500 hover:bg-purple-400",
};

interface CategoryPillsProps {
  categories: string[];
  activeCategory?: string;
}

export function CategoryPills({
  categories,
  activeCategory,
}: CategoryPillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href="/"
        className={`rounded-full px-4 py-1.5 text-sm font-semibold text-white transition ${
          !activeCategory
            ? "bg-white/20 ring-2 ring-white/40"
            : "bg-white/10 hover:bg-white/20"
        }`}
      >
        All
      </Link>
      {categories.map((cat) => {
        const color =
          CATEGORY_COLORS[cat.toLowerCase()] ?? "bg-violet-500 hover:bg-violet-400";
        const isActive =
          activeCategory?.toLowerCase() === cat.toLowerCase();
        return (
          <Link
            key={cat}
            href={`/category/${cat.toLowerCase()}`}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold capitalize text-white transition ${color} ${
              isActive ? "ring-2 ring-white/60" : ""
            }`}
          >
            {cat}
          </Link>
        );
      })}
    </div>
  );
}
