const ALLOWED_HOSTS = [
  "localhost",
  "127.0.0.1",
  "playnest-games.vercel.app",
  "playnestgames.vercel.app",
  "html-classic.itch.zone",
  "itch.io",
  "cdn.html5games.com",
  "www.html5games.com",
  "games.html5games.com",
];

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

export function resolveEmbedUrl(url: string): string {
  if (url.startsWith("/")) {
    return url;
  }
  return url;
}
