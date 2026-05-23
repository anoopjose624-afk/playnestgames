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

Edit `data/games.json`. Use embed URLs under `/games/...` (self-hosted) or allowlisted external domains (see `lib/embed.ts`).
