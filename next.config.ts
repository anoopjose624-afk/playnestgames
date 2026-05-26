import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  /**
   * Self-hosted games live in public/games/[slug]/index.html.
   * /games/[slug] is the Next.js play page — do not use it as iframe src.
   * /games/[slug]/embed serves the static game without exposing index.html in URLs.
   */
  async rewrites() {
    return [
      {
        source: "/games/:slug/embed",
        destination: "/games/:slug/index.html",
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/games/:slug/main.js",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/games/:slug/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
