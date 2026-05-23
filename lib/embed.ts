const ALLOWED_HOSTS = [
  "localhost",
  "127.0.0.1",
  "playnestgames.vercel.app",
  "html-classic.itch.zone",
  "itch.io",
  "cdn.html5games.com",
  "www.html5games.com",
  "games.html5games.com",
];

/**
 * Resolve catalog embedUrl to the iframe src.
 * Self-hosted games use /games/[slug]/embed (see next.config rewrites).
 */
export function resolveEmbedUrl(url: string): string {
  if (!url.startsWith("/")) {
    return url;
  }
  // Already using embed route or explicit index.html
  if (url.endsWith("/embed") || url.endsWith("/index.html")) {
    return url;
  }
  // Trailing slash only — avoid loading Next.js page inside iframe
  if (url.match(/^\/games\/[^/]+\/$/)) {
    return url.replace(/\/$/, "/embed");
  }
  // Bare /games/slug would iframe the Next.js wrapper (broken)
  if (url.match(/^\/games\/[^/]+$/)) {
    return `${url}/embed`;
  }
  return url;
}

export function isEmbedUrlAllowed(url: string): boolean {
  try {
    const parsed = new URL(url, "http://localhost");
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return false;
    }
    if (url.startsWith("/")) {
      return true;
    }
    const host = parsed.hostname.toLowerCase();
    return ALLOWED_HOSTS.some(
      (allowed) => host === allowed || host.endsWith(`.${allowed}`),
    );
  } catch {
    return false;
  }
}
