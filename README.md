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

Production runs on Vercel project **[playnest](https://vercel.com)** (not `poki-mini`).

| Setting | Value |
|--------|--------|
| GitHub repo | `anoopjose624-afk/playnestgames` |
| Production branch | `main` |
| Live URL | https://playnestgames.vercel.app |

**Pushes to `main` auto-deploy to production.** No manual step needed after merge.

Local preview or a one-off production deploy:

```bash
npx vercel link --project playnest
npx vercel deploy --prod
```

Set `NEXT_PUBLIC_SITE_URL` to `https://playnestgames.vercel.app` in the Vercel **playnest** project environment variables.

## Adding games

Every game inherits the platform shell automatically via `GameFrame` + `GameOverlay` on `/games/[slug]`.

1. Put static files in `public/games/[slug]/` (include `index.html`).
2. Load playnest-engine in `index.html` for mobile controls and audio:
   ```html
   <link rel="stylesheet" href="/playnest-engine/playnest-mobile.css" />
   <script type="module">
     import PlayNest from "/playnest-engine/playnest-bootstrap.js";
     PlayNest.init({ gameId: "your-slug", lockPage: true });
   </script>
   ```
3. Add an entry to `data/games.json`:
   - `"embedUrl": "/games/[slug]/embed"` (required — iframe target)
   - `"aspectRatio": "16:9"` (optional: `"4:3"`, `"960:520"`)
   - `"addedAt": "YYYY-MM-DD"` (optional — shows in Newly Added)
   - `"badge": "new"` | `"hot"` (optional)
4. Add `public/thumbnails/[slug].svg` (4:3 ratio).

Page URL for players: `/games/[slug]`. Do not use that URL as iframe `src`.

See `components/game/GameFrame.tsx`, `lib/game-frame.ts`, `lib/embed.ts`.
