/**
 * Canonical PlayNest URLs for game pages vs embedded play (static HTML in public/).
 *
 * - /games/[slug]           → Next.js catalog page (iframe shell)
 * - /games/[slug]/embed     → static game (rewritten to index.html)
 * - /games/[slug]/index.html → direct static file (also works)
 */

/** Public game page (Next.js App Router). */
export function gamePagePath(slug: string): string {
  return `/games/${slug}`;
}

/** Iframe src — must not hit the Next.js page or the game loads inside itself. */
export function gameEmbedPath(slug: string): string {
  return `/games/${slug}/embed`;
}

/** Legacy embed URLs still supported via resolveGameEmbedUrl. */
export function isSelfHostedEmbed(url: string): boolean {
  return url.startsWith("/games/");
}
