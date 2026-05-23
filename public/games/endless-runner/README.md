# Endless Runner (PlayNest)

Side-scrolling endless runner built with **Phaser 3**, integrated into PlayNest with mobile touch controls and local high scores.

## Structure

```
endless-runner/
  index.html              # PlayNest embed entry
  main.js                 # Webpack bundle (run npm run build)
  form.html               # Username DOM form (Boot scene)
  assets/                 # Sprites, audio (copied at build)
  playnest-overrides.css  # Embed layout + touch button positions
  src/
    index.js              # Phaser config + scale FIT
    boot.js               # Username → Preload
    preload.js            # Asset loading
    Menu.js, game.js, …   # Scenes
    support_script/
      fetchData.js        # Scores (API + localStorage fallback)
  stylesheets/styler.css
  webpack.config.js
```

## Controls

| Input | Action |
|-------|--------|
| **↑** / **Space** (desktop) | Jump (double jump in air) |
| **↓** (desktop) | Fast fall / slide in air |
| **Jump button** (mobile) | Jump |
| **↓ button** (mobile) | Fast fall |
| **Tap game area** | Jump during gameplay |
| **Phaser menus** | Touch-friendly image buttons |

## Mobile system

Loaded from `/playnest-engine/playnest-runner-init.js`:

- Page scroll/zoom locked during play
- Mute + fullscreen toolbar
- `window.__pnRunnerInput` — read by `game.js` each frame for jump/slide
- Phaser `Scale.FIT` keeps 960×520 aspect ratio in the iframe
- Low-end devices: slower bird/coin/spike spawns (`gameState.lowEnd`)

## Build

From this folder:

```bash
npm install
npm run build
```

Outputs `main.js` and refreshes `assets/` in place.

## Scores & settings

- **localStorage** `playnest-endless-runner-scores` — leaderboard fallback
- **localStorage** `playnest-endless-runner-settings` — player name
- **PlayNest.save** `highScore` slot on game over

## Adding similar games

1. Place built game under `public/games/<slug>/` with `index.html`.
2. Add entry to `data/games.json` + thumbnail in `public/thumbnails/`.
3. Link `playnest-mobile.css` and a small bridge script (see `playnest-runner-init.js`).
4. Expose input via `window.__pn…` or dispatch keyboard events from `keyboardBridge.js`.

## Credits

Based on [Endless Runner](https://github.com/RNtaate/Endless-Runner) (Phaser 3). Integrated for PlayNest.
