/**
 * PlayNest bridge for Endless Runner (Phaser 3).
 * Maps touch controls to window.__pnRunnerInput for the Game scene.
 */

import PlayNest from "./playnest-bootstrap.js";

const input = {
  jump: false,
  slideDown: false,
};

window.__pnRunnerInput = input;

PlayNest.init({
  gameId: "endless-runner",
  lockPage: true,
  toolbar: true,
  mobile: {
    joystick: false,
    action: true,
    actionLabel: "↑",
    pause: true,
    onAction: () => {
      input.jump = true;
    },
    onPause: () => {
      const game = window.__pnPhaserGame;
      if (!game) return;
      const scene = game.scene.getScene("Game");
      if (scene?.scene?.isActive()) {
        scene.scene.pause();
        scene.scene.launch("Menu");
      }
    },
  },
});

// Slide / fast-fall button (bottom center-right)
if (PlayNest.isMobile() && PlayNest.mobile?.root) {
  const slideBtn = document.createElement("button");
  slideBtn.type = "button";
  slideBtn.className = "pn-btn-slide";
  slideBtn.textContent = "↓";
  slideBtn.setAttribute("aria-label", "Slide down");
  slideBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    input.slideDown = true;
  }, { passive: false });
  slideBtn.addEventListener("touchend", () => {
    input.slideDown = false;
  });
  slideBtn.addEventListener("mousedown", () => {
    input.slideDown = true;
  });
  slideBtn.addEventListener("mouseup", () => {
    input.slideDown = false;
  });
  PlayNest.mobile.root.appendChild(slideBtn);
}

// Tap canvas to jump (gameplay)
document.addEventListener(
  "pointerup",
  (e) => {
    if (e.target.closest(".pn-mobile-controls, .pn-toolbar, #name-form")) return;
    const game = window.__pnPhaserGame;
    const active = game?.scene?.getScene("Game");
    if (active?.scene?.isActive()) {
      input.jump = true;
    }
  },
  { passive: true },
);

window.PlayNest = PlayNest;

// Refit Phaser when iframe or device rotates
function refitPhaser() {
  const game = window.__pnPhaserGame;
  if (game?.scale) game.scale.refresh();
}
window.addEventListener("resize", refitPhaser);
window.addEventListener("orientationchange", refitPhaser);

const muteBtn = document.querySelector(".pn-tool-mute");
if (muteBtn) {
  muteBtn.addEventListener("click", () => {
    const gs = window.__pnGameState;
    if (gs) {
      const muted = PlayNest.audio.isMuted();
      gs.music = !muted;
      gs.sound = !muted;
    }
  });
}

export default PlayNest;
