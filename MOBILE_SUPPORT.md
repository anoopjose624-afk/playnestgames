# PlayNest Mobile Support

This document explains how mobile play works across PlayNest games and how to add mobile support to new games.

## Overview

All games in `public/games/` include shared systems from **`/playnest-engine`**:

| Module | Purpose |
|--------|---------|
| `mobileControls.js` | Virtual joystick, action button, pause, swipe, tap |
| `audioManager.js` | Unlock audio on first touch, mute, no overlapping SFX |
| `saveSystem.js` | `localStorage` for settings, scores, progress, auto-save |
| `sceneManager.js` | Menu / gameplay / pause / game over scenes, RAF loops |
| `uiSystem.js` | Responsive canvas, HUD scale, fullscreen, orientation hint |
| `playnest-bootstrap.js` | Single import that wires everything together |
| `keyboardBridge.js` | Sends synthetic key events for legacy arcade games |
| `playnest-mobile.css` | Global touch UX (no scroll/zoom/select) |
| `playnest-arcade-mobile.css` | Responsive menus for classic arcade titles |

## How mobile controls work

### Virtual joystick (bottom-left)

- Drag inside the circle to get a normalized direction `{ x, y }` from `-1` to `1`.
- Fires `onJoystick` while held (useful for continuous movement).
- Only shown on touch/coarse-pointer devices.

### Action button (bottom-right)

- Large tap target (default label **A**).
- Calls `onAction` — often mapped to Space / jump / flap / interact.

### Pause

- Fixed button (or toolbar) dispatches **P** / pause handlers.

### Swipe & tap

- **Swipe** on the game area (not on controls): `onSwipe("left"|"right"|"up"|"down")`.
- Used by Snake, 2048, etc.
- Short touches without swipe can trigger `onTap(x, y)` in normalized coordinates.

### Desktop

- Keyboard and mouse keep working.
- Mobile overlays are hidden when touch is not available.

## Quick start for a new canvas game

```html
<link rel="stylesheet" href="/playnest-engine/playnest-mobile.css" />
<div class="pn-game-wrap">
  <canvas id="c" width="400" height="400"></canvas>
</div>
<script type="module">
  import PlayNest from "/playnest-engine/playnest-bootstrap.js";
  import { bridgeJoystickToKeys } from "/playnest-engine/keyboardBridge.js";

  PlayNest.init({
    gameId: "my-game",
    canvas: "#c",
    canvasSize: { baseWidth: 400, baseHeight: 400 },
    mobile: { joystick: true, action: true, actionLabel: "↑" },
  });

  if (PlayNest.mobile) bridgeJoystickToKeys(PlayNest.mobile);

  // Your game loop using requestAnimationFrame...
  PlayNest.save.setHighScore(score);
</script>
```

### Important options

| Option | Description |
|--------|-------------|
| `gameId` | Prefix for all `localStorage` keys |
| `lockPage` | Prevents scroll/zoom during play (default `true`) |
| `toolbar` | Mute + fullscreen buttons (default `true`) |
| `canvas` + `canvasSize` | CSS scaling with fixed internal resolution |
| `mobile` | `false` to disable overlays, or pass `MobileControls` options |

## Legacy arcade games (Bounce, Pacman, Tetris, …)

Add to `index.html`:

```html
<link rel="stylesheet" href="/playnest-engine/playnest-mobile.css" />
<link rel="stylesheet" href="/playnest-engine/playnest-arcade-mobile.css" />
<script type="module" src="/playnest-engine/playnest-arcade-boot.js"
  data-game="pacman"
  data-control="direction"></script>
```

### `data-control` values

| Value | Joystick | Action | Typical games |
|-------|----------|--------|----------------|
| `direction` | 4-way → arrow keys | — | Pacman, Classic Snake |
| `paddle` | Left/right | Space (start) | Bounce |
| `tetris` | Move piece | Rotate (up) | Tetris |
| `none` | Off | Off | Defender, Puzzle, Spider (touch/mouse UI) |

The boot script dispatches `keydown` events so existing `KeyCode` handlers work without rewriting game logic.

## Customizing controls

```javascript
import MobileControls from "/playnest-engine/mobileControls.js";

const controls = new MobileControls({
  container: document.body,
  joystick: true,
  action: true,
  actionLabel: "Jump",
  pause: true,
  onJoystick: ({ x, y }) => { /* move player */ },
  onAction: () => { /* jump */ },
  onPause: () => { /* pause */ },
  onSwipe: (dir) => { /* dir: left|right|up|down */ },
}).mount();
```

Hide/show: `controls.hide()` / `controls.show()` / `controls.destroy()`.

## Audio manager

```javascript
PlayNest.audio.play("coin", "/games/my-game/coin.mp3", { volume: 0.8 });
PlayNest.audio.toggleMute();
```

Audio unlocks automatically on first touch/click (required on iOS).

## Save system

```javascript
PlayNest.save.setSettings({ music: 0.8 });
PlayNest.save.setHighScore(1200);
PlayNest.save.unlock("night-2");
PlayNest.save.autoSave(5000, () => ({ level, score }));
const state = PlayNest.save.loadAutoSave();
```

## Scene manager

```javascript
PlayNest.scenes.go("gameplay", { classTarget: document.body, classPrefix: "pn-scene-" });
PlayNest.scenes.setLoop("gameplay", (dt) => update(dt));
PlayNest.scenes.stopLoop("gameplay");
```

Use `onEnter` / `onExit` hooks in `PlayNest.init({ scenes: { hooks: { onEnter: { gameplay: () => {} } } } })`.

## UI system

```javascript
PlayNest.ui.bindResponsiveCanvas(canvas, {
  baseWidth: 480,
  baseHeight: 320,
});
PlayNest.ui.orientationWarning("landscape"); // optional
```

## Games upgraded in this pass

### PlayNest originals (inline canvas / DOM)

- Snake, Runner, Flappy, Pong, Breakout, 2048, Clicker, Memory, Whack, Tic Tac Toe

### Classic arcade (ES modules)

- Bounce, Pacman, Tetris, Classic Snake, Defender, Puzzle, Spider Solitaire

### Featured

- Delivery Guy After Midnight (existing touch controls + PlayNest page lock & toolbar)
- **Endless Runner** (Phaser 3 — see `playnest-runner-init.js` and `public/games/endless-runner/README.md`)

## Testing checklist

1. Open game on phone (or Chrome DevTools device mode).
2. Confirm no page scroll while playing.
3. Test portrait and landscape.
4. Verify keyboard still works on desktop.
5. Test mute and fullscreen toolbar buttons.
6. Confirm scores persist after refresh (where implemented).

## Recommendations / known limits

- **Defender** sidebar is scrollable on small screens; full tower UI is dense on phones — consider a simplified mobile HUD in a future update.
- **Delivery Midnight** keeps its custom joystick; engine toolbar is additive.
- **Puzzle / Spider** rely on touch-drag; very small screens may need larger card hit areas.
- Embed in iframe: games use relative `/playnest-engine/...` paths — ensure your host serves `public/` at the site root (Next.js default).
