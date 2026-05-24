/**
 * Boots mobile support for legacy ES-module arcade games.
 * Add to index.html after styles:
 *   <script type="module" src="/playnest-engine/playnest-arcade-boot.js" data-control="direction"></script>
 *
 * data-control: direction | paddle | tetris | none
 */

import PlayNest from "./playnest-bootstrap.js";
import { bridgeJoystickToKeys, bridgeActionToKey, dispatchNamedKey } from "./keyboardBridge.js";

const script = document.currentScript;
const gameId = script?.dataset?.game || location.pathname.split("/").filter(Boolean)[1] || "arcade";
const control = script?.dataset?.control || "direction";

const mobileOpts =
  control === "none"
    ? { joystick: false, action: false, pause: true, onPause: () => dispatchNamedKey("p") }
    : {
        joystick: true,
        action: control === "tetris" || control === "action",
        actionLabel: control === "tetris" ? "↻" : "A",
        pause: true,
        onPause: () => dispatchNamedKey("p"),
      };

PlayNest.init({
  gameId,
  lockPage: true,
  toolbar: true,
  mobile: mobileOpts,
});

window.PlayNest = PlayNest;

// Legacy arcade Sounds.js respects PlayNest mute
document.addEventListener("playnest-mute-change", (e) => {
  window.__pnForceMute = e.detail?.muted ?? false;
});

if (PlayNest.mobile) {
  if (control === "paddle") {
    bridgeJoystickToKeys(PlayNest.mobile, { vertical: false });
    bridgeActionToKey(PlayNest.mobile, "space");
  } else if (control === "direction" || control === "tetris") {
    bridgeJoystickToKeys(PlayNest.mobile, { horizontal: true, vertical: true });
    if (control === "tetris") {
      bridgeActionToKey(PlayNest.mobile, "up");
    }
  }
}

// Scale #container on small screens
function scaleContainer() {
  const container = document.getElementById("container");
  if (!container) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  if (w > 900) {
    container.style.transform = "";
    return;
  }
  const rect = container.getBoundingClientRect();
  const sw = w / Math.max(rect.width, 320);
  const sh = (h - 80) / Math.max(rect.height, 400);
  const scale = Math.min(1, sw, sh);
  container.style.transform = `scale(${scale})`;
  container.style.transformOrigin = "top center";
}

window.addEventListener("resize", scaleContainer);
window.addEventListener("orientationchange", scaleContainer);
window.addEventListener("load", scaleContainer);
