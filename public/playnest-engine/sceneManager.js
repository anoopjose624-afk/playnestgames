/**
 * PlayNest Scene Manager
 * Menu / gameplay / pause / game over with clean listener lifecycle.
 */

export default class SceneManager {
  /**
   * @param {{ onEnter?: Record<string, Function>, onExit?: Record<string, Function> }} [hooks]
   */
  constructor(hooks = {}) {
    /** @type {string} */
    this.current = "menu";
    this.previous = null;
    this.hooks = hooks;
    this._loops = new Map();
    this._listeners = [];
    this._transitionMs = 200;
  }

  /**
   * @param {string} name
   * @param {{ classTarget?: HTMLElement, classPrefix?: string }} [opts]
   */
  go(name, opts = {}) {
    if (name === this.current) return;
    this.hooks.onExit?.[this.current]?.();
    this.previous = this.current;
    this.current = name;
    this.hooks.onEnter?.[name]?.();

    const el = opts.classTarget || document.body;
    const prefix = opts.classPrefix || "pn-scene-";
    [...el.classList].forEach((c) => {
      if (c.startsWith(prefix)) el.classList.remove(c);
    });
    el.classList.add(`${prefix}${name}`);
    el.dataset.pnScene = name;
  }

  is(name) {
    return this.current === name;
  }

  /**
   * Register a requestAnimationFrame loop tied to a scene.
   * Stops previous loop for that scene name automatically.
   * @param {string} sceneName
   * @param {(dt: number) => void} fn
   */
  setLoop(sceneName, fn) {
    this.stopLoop(sceneName);
    let last = performance.now();
    let id = 0;
    const tick = (now) => {
      if (this.current !== sceneName) return;
      const dt = now - last;
      last = now;
      fn(dt);
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    this._loops.set(sceneName, () => cancelAnimationFrame(id));
  }

  stopLoop(sceneName) {
    const stop = this._loops.get(sceneName);
    if (stop) stop();
    this._loops.delete(sceneName);
  }

  stopAllLoops() {
    this._loops.forEach((stop) => stop());
    this._loops.clear();
  }

  /**
   * Track DOM listeners for cleanup.
   */
  on(target, type, handler, options) {
    target.addEventListener(type, handler, options);
    this._listeners.push({ target, type, handler, options });
  }

  destroy() {
    this.stopAllLoops();
    this._listeners.forEach(({ target, type, handler, options }) => {
      target.removeEventListener(type, handler, options);
    });
    this._listeners = [];
  }
}
