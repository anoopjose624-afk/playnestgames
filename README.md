# PlayNest

PlayNest is a free browser game portal built with Next.js. Browse games by category, search, play in an embedded player, and save favorites locally.

## Features

- Home grid with featured and all games
- Category pages (`/category/[slug]`)
- Search (`/search?q=...`)
- Game play pages with iframe player (`/games/[slug]`)
- Local favorites and recently played (`localStorage`)
- Self-hosted HTML5 demo games in `public/games/`
- SEO: sitemap, robots, per-game metadata

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` for production sitemap/OG URLs.

## Deploy

Deploy to [Vercel](https://vercel.com) — zero config for Next.js:

```bash
npm run build
```

Set `NEXT_PUBLIC_SITE_URL` to `https://playnestgames.vercel.app` in the Vercel project settings.

## Adding games

1. Put static files in `public/games/[slug]/` (include `index.html`).
2. Add an entry to `data/games.json` with:
   - `"embedUrl": "/games/[slug]/embed"` (iframe — rewritten to `index.html`)
   - Page URL for players: `/games/[slug]` (Next.js, no `index.html` needed)
3. Add `public/thumbnails/[slug].svg`.

See `lib/game-urls.ts` and `lib/embed.ts`.
