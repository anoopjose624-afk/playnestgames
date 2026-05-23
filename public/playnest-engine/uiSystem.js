/**
 * PlayNest UI System
 * Responsive canvas sizing, HUD scale, fullscreen, orientation hint.
 */

export default class UISystem {
  /**
   * @param {Object} options
   */
  constructor(options = {}) {
    this.options = options;
    this._resizeObserver = null;
    this._onResize = null;
    this._bar = null;
    this._warn = null;
  }

  /**
   * Fit a canvas inside its parent while keeping aspect ratio (letterbox minimized).
   * @param {HTMLCanvasElement} canvas
   * @param {{ baseWidth: number, baseHeight: number, parent?: HTMLElement, integerScale?: boolean }} opts
   * @returns {() => void} cleanup
   */
  bindResponsiveCanvas(canvas, opts) {
    const parent = opts.parent || canvas.parentElement || document.body;
    const baseW = opts.baseWidth;
    const baseH = opts.baseHeight;
    const integerScale = opts.integerScale !== false;

    const apply = () => {
      const rect = parent.getBoundingClientRect();
      const availW = rect.width || window.innerWidth;
      const availH = rect.height || window.innerHeight;
      const scale = Math.min(availW / baseW, availH / baseH);
      const s = integerScale ? Math.max(1, Math.floor(scale)) : scale;
      const cssW = Math.floor(baseW * s);
      const cssH = Math.floor(baseH * s);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      canvas.style.display = "block";
      canvas.style.margin = "0 auto";
      // Internal resolution stays at design size; games draw in base coords
      if (canvas.width !== baseW) canvas.width = baseW;
      if (canvas.height !== baseH) canvas.height = baseH;
      canvas.dataset.pnScale = String(s);
      return s;
    };

    apply();
    this._onResize = () => apply();
    window.addEventListener("resize", this._onResize);
    window.addEventListener("orientationchange", this._onResize);

    if (typeof ResizeObserver !== "undefined") {
      this._resizeObserver = new ResizeObserver(this._onResize);
      this._resizeObserver.observe(parent);
    }

    return () => {
      window.removeEventListener("resize", this._onResize);
      window.removeEventListener("orientationchange", this._onResize);
      this._resizeObserver?.disconnect();
    };
  }

  /**
   * Scale HUD text/buttons via CSS variable --pn-ui-scale
   * @param {HTMLElement} root
   */
  bindHudScale(root) {
    const update = () => {
      const w = window.innerWidth;
      const scale = w < 380 ? 0.85 : w < 600 ? 0.95 : 1;
      root.style.setProperty("--pn-ui-scale", String(scale));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }

  /** Top bar: mute + fullscreen */
  mountToolbar({ audio, onPause } = {}) {
    if (this._bar) return this._bar;
    const bar = document.createElement("div");
    bar.className = "pn-toolbar";
    bar.innerHTML = `
      <button type="button" class="pn-tool-mute" aria-label="Mute">🔊</button>
      <button type="button" class="pn-tool-fs" aria-label="Fullscreen">⛶</button>
    `;
    document.body.appendChild(bar);

    const muteBtn = bar.querySelector(".pn-tool-mute");
    muteBtn.addEventListener("click", () => {
      const muted = audio?.toggleMute?.() ?? false;
      muteBtn.textContent = muted ? "🔇" : "🔊";
    });

    bar.querySelector(".pn-tool-fs").addEventListener("click", () => {
      const el = document.documentElement;
      if (!document.fullscreenElement) {
        el.requestFullscreen?.().catch(() => {});
      } else {
        document.exitFullscreen?.();
      }
    });

    if (onPause) {
      const p = document.createElement("button");
      p.type = "button";
      p.className = "pn-tool-pause";
      p.textContent = "⏸";
      p.setAttribute("aria-label", "Pause");
      p.addEventListener("click", onPause);
      bar.appendChild(p);
    }

    this._bar = bar;
    return bar;
  }

  /**
   * Show orientation hint when landscape required (or portrait).
   * @param {"landscape"|"portrait"} prefer
   */
  orientationWarning(prefer = "landscape") {
    if (this._warn) return;
    const el = document.createElement("div");
    el.className = "pn-orientation-warn";
    el.innerHTML = `<p>Rotate your device to <strong>${prefer}</strong> for the best experience.</p>`;
    document.body.appendChild(el);
    this._warn = el;

    const check = () => {
      const landscape = window.matchMedia("(orientation: landscape)").matches;
      const bad =
        prefer === "landscape" ? !landscape && window.innerWidth < 900 : landscape;
      el.classList.toggle("pn-show", bad && window.innerWidth < 900);
    };
    check();
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);
  }

  destroy() {
    this._bar?.remove();
    this._warn?.remove();
    this._bar = null;
    this._warn = null;
  }
}
