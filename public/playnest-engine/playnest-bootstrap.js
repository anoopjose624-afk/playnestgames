/**
 * PlayNest Bootstrap — single import for all engine systems.
 *
 * Usage:
 *   import PlayNest from "/playnest-engine/playnest-bootstrap.js";
 *   PlayNest.init({ gameId: "snake", lockPage: true, ... });
 */

import MobileControls from "./mobileControls.js";
import AudioManager from "./audioManager.js";
import SaveSystem from "./saveSystem.js";
import SceneManager from "./sceneManager.js";
import UISystem from "./uiSystem.js";
import * as KeyboardBridge from "./keyboardBridge.js";

const PlayNest = {
  MobileControls,
  AudioManager,
  SaveSystem,
  SceneManager,
  UISystem,
  KeyboardBridge,

  /** @type {AudioManager|null} */
  audio: null,
  /** @type {SaveSystem|null} */
  save: null,
  /** @type {SceneManager|null} */
  scenes: null,
  /** @type {UISystem|null} */
  ui: null,
  /** @type {MobileControls|null} */
  mobile: null,

  /**
   * Initialize shared systems for a game.
   * @param {Object} config
   * @param {string} config.gameId
   * @param {boolean} [config.lockPage=true]
   * @param {boolean} [config.toolbar=true]
   * @param {HTMLCanvasElement|string} [config.canvas]
   * @param {{ baseWidth: number, baseHeight: number }} [config.canvasSize]
   * @param {Object} [config.mobile]
   * @param {Object} [config.scenes]
   * @param {() => void} [config.onPause]
   */
  init(config) {
    const { gameId } = config;

    this.save = new SaveSystem(gameId);
    this.audio = new AudioManager(`playnest-${gameId}`);
    this.scenes = new SceneManager(config.scenes?.hooks);
    this.ui = new UISystem();

    if (config.lockPage !== false) {
      PlayNest.lockPage();
    }

    if (config.canvas && config.canvasSize) {
      const canvas =
        typeof config.canvas === "string"
          ? document.querySelector(config.canvas)
          : config.canvas;
      if (canvas) {
        this.ui.bindResponsiveCanvas(canvas, {
          baseWidth: config.canvasSize.baseWidth,
          baseHeight: config.canvasSize.baseHeight,
        });
      }
    }

    if (config.toolbar !== false) {
      this.ui.mountToolbar({
        audio: this.audio,
        onPause: config.onPause,
      });
    }

    if (config.mobile) {
      this.mobile = new MobileControls({
        ...config.mobile,
        onPause: config.onPause || config.mobile.onPause,
      }).mount();
    }

    if (config.scenes?.initial) {
      this.scenes.go(config.scenes.initial, config.scenes);
    }

    return this;
  },

  /** Prevent scroll, zoom, text selection during play */
  lockPage() {
    document.documentElement.classList.add("pn-game-active");
    document.body.classList.add("pn-game-active");

    const prevent = (e) => {
      if (e.target.closest("input, textarea, select, .pn-allow-scroll")) return;
      if (e.cancelable) e.preventDefault();
    };

    document.addEventListener("touchmove", prevent, { passive: false });
    document.addEventListener("gesturestart", prevent);
    document.addEventListener("gesturechange", prevent);
  },

  unlockPage() {
    document.documentElement.classList.remove("pn-game-active");
    document.body.classList.remove("pn-game-active");
  },

  isMobile() {
    return MobileControls.isTouchDevice || window.innerWidth < 768;
  },

  /**
   * Low-end device hint for reducing particles / effects.
   */
  isLowEnd() {
    const mem = navigator.deviceMemory;
    const cores = navigator.hardwareConcurrency;
    return (mem && mem <= 2) || (cores && cores <= 4 && window.innerWidth < 500);
  },

  destroy() {
    this.mobile?.destroy();
    this.ui?.destroy();
    this.scenes?.destroy();
    this.audio?.stopAll();
    this.mobile = null;
    this.ui = null;
    this.scenes = null;
    this.audio = null;
    this.save = null;
  },
};

export default PlayNest;
