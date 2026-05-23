const FAVORITES_KEY = "playnest-favorites";
const RECENT_KEY = "playnest-recent";
const MAX_RECENT = 10;

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

export function getFavoriteSlugs(): string[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as string[]) : [];
  } catch {
    return [];
  }
}

export function isFavorite(slug: string): boolean {
  return getFavoriteSlugs().includes(slug);
}

export function toggleFavorite(slug: string): boolean {
  const current = getFavoriteSlugs();
  const exists = current.includes(slug);
  const next = exists
    ? current.filter((s) => s !== slug)
    : [...current, slug];
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("playnest-favorites-change"));
  }
  return !exists;
}

export function getRecentSlugs(): string[] {
  if (!isBrowser()) return [];
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as string[]) : [];
  } catch {
    return [];
  }
}

export function addRecentGame(slug: string): void {
  const current = getRecentSlugs().filter((s) => s !== slug);
  const next = [slug, ...current].slice(0, MAX_RECENT);
  localStorage.setItem(RECENT_KEY, JSON.stringify(next));
}
