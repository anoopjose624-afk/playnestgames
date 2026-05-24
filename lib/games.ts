import gamesData from "@/data/games.json";
import type { Game } from "@/types/game";

const games = gamesData as Game[];

export function getGames(): Game[] {
  return games;
}

export function getGameBySlug(slug: string): Game | undefined {
  return games.find((g) => g.slug === slug);
}

export function getFeaturedGames(): Game[] {
  return games.filter((g) => g.featured);
}

export function getHeroGame(): Game | undefined {
  return getGameBySlug("endless-runner") ?? getFeaturedGames()[0];
}

export function getMostPlayedGames(limit = 5): Game[] {
  const featured = getFeaturedGames();
  const rest = games.filter((g) => !g.featured);
  return [...featured, ...rest].slice(0, limit);
}

export function getTrendingGames(limit = 5): Game[] {
  const hot = games.filter((g) => g.badge === "hot" || g.featured);
  const pool = hot.length >= limit ? hot : getFeaturedGames();
  return [...pool]
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, limit);
}

export function getNewlyAddedGames(limit = 5): Game[] {
  const withDates = games.filter((g) => g.addedAt);
  if (withDates.length > 0) {
    return [...withDates]
      .sort((a, b) => (b.addedAt ?? "").localeCompare(a.addedAt ?? ""))
      .slice(0, limit);
  }
  return [...games].slice(-limit).reverse();
}

export function getGamesByCategory(category: string): Game[] {
  const normalized = category.toLowerCase();
  return games.filter((g) =>
    g.categories.some((c) => c.toLowerCase() === normalized),
  );
}

export function getCategories(): string[] {
  const set = new Set<string>();
  for (const game of games) {
    for (const cat of game.categories) {
      set.add(cat);
    }
  }
  return Array.from(set).sort();
}

export function searchGames(query: string): Game[] {
  const q = query.trim().toLowerCase();
  if (!q) return games;
  return games.filter(
    (g) =>
      g.title.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q) ||
      g.categories.some((c) => c.toLowerCase().includes(q)) ||
      (g.publisher?.toLowerCase().includes(q) ?? false),
  );
}

export function getRelatedGames(game: Game, limit = 4): Game[] {
  const categorySet = new Set(game.categories);
  return games
    .filter(
      (g) =>
        g.slug !== game.slug &&
        g.categories.some((c) => categorySet.has(c)),
    )
    .slice(0, limit);
}
