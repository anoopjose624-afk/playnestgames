/**
 * PlayNest Mobile Controls
 * Virtual joystick, action button, pause, tap & swipe helpers.
 * Works without touch APIs (graceful no-op).
 */

const HAS_TOUCH =
  typeof window !== "undefined" &&
  ("ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches);

/**
 * @typedef {Object} MobileControlsOptions
 * @property {HTMLElement|string} [container] - Where overlays are appended
 * @property {boolean} [joystick=true]
 * @property {boolean} [action=true]
 * @property {boolean} [pause=true]
 * @property {string} [actionLabel="A"]
 * @property {(dir: {x:number,y:number}) => void} [onJoystick]
 * @property {() => void} [onAction]
 * @property {() => void} [onPause]
 * @property {(type: string, detail: object) => void} [onSwipe] - type: left|right|up|down
 * @property {(x: number, y: number) => void} [onTap] - normalized 0-1 coords on game area
 */

export default class MobileControls {
  /**
   * @param {MobileControlsOptions} options
   */
  constructor(options = {}) {
    this.options = options;
    this.root = null;
    this.joystickMove = { x: 0, y: 0 };
    this._pointerId = null;
    this._origin = { x: 0, y: 0 };
    this._maxRadius = 52;
    this._rafHold = null;
    this._swipeStart = null;
    this._visible = false;
    this._destroyed = false;
  }

  /** True when coarse pointer or touch is available */
  static get isTouchDevice() {
    return HAS_TOUCH;
  }

  /**
   * Build overlay DOM and wire listeners.
   * @returns {MobileControls}
   */
  mount() {
    if (!HAS_TOUCH || this._destroyed) return this;

    const parent =
      typeof this.options.container === "string"
        ? document.querySelector(this.options.container)
        : this.options.container || document.body;

    if (!parent) return this;

    this.root = document.createElement("div");
    this.root.className = "pn-mobile-controls";
    this.root.setAttribute("aria-hidden", "true");

    if (this.options.joystick !== false) {
      this.root.innerHTML += `
        <div class="pn-joystick-zone" data-pn="joystick">
          <div class="pn-joystick-knob"></div>
        </div>`;
    }
    if (this.options.action !== false) {
      this.root.innerHTML += `<button type="button" class="pn-btn-action" data-pn="action">${this.options.actionLabel || "A"}</button>`;
    }
    if (this.options.pause !== false) {
      this.root.innerHTML += `<button type="button" class="pn-btn-pause" data-pn="pause" aria-label="Pause">⏸</button>`;
    }

    parent.appendChild(this.root);
    this._visible = true;
    this._bindJoystick();
    this._bindAction();
    this._bindPause();
    this._bindSwipe(parent);
    return this;
  }

  /** @returns {{x:number,y:number}} */
  getJoystick() {
    return { ...this.joystickMove };
  }

  show() {
    if (this.root) this.root.classList.remove("pn-hidden");
  }

  hide() {
    if (this.root) this.root.classList.add("pn-hidden");
  }

  destroy() {
    this._destroyed = true;
    if (this._rafHold) cancelAnimationFrame(this._rafHold);
    this.root?.remove();
    this.root = null;
  }

  _bindJoystick() {
    const zone = this.root?.querySelector('[data-pn="joystick"]');
    const knob = zone?.querySelector(".pn-joystick-knob");
    if (!zone || !knob) return;

    const onStart = (e) => {
      e.preventDefault();
      const t = e.changedTouches?.[0] || e;
      this._pointerId = t.identifier ?? "mouse";
      const rect = zone.getBoundingClientRect();
      this._origin = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
      this._updateKnob(t.clientX, t.clientY, knob);
      this._startHoldLoop();
    };

    const onMove = (e) => {
      e.preventDefault();
      const t = this._getTouch(e);
      if (t) this._updateKnob(t.clientX, t.clientY, knob);
    };

    const onEnd = (e) => {
      const t = this._getTouch(e, true);
      if (!t && e.type !== "touchcancel") return;
      this._pointerId = null;
      this.joystickMove = { x: 0, y: 0 };
      knob.style.transform = "translate(-50%, -50%)";
      this._stopHoldLoop();
    };

    zone.addEventListener("touchstart", onStart, { passive: false });
    zone.addEventListener("touchmove", onMove, { passive: false });
    zone.addEventListener("touchend", onEnd);
    zone.addEventListener("touchcancel", onEnd);
  }

  _bindAction() {
    const btn = this.root?.querySelector('[data-pn="action"]');
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      this.options.onAction?.();
    });
  }

  _bindPause() {
    const btn = this.root?.querySelector('[data-pn="pause"]');
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      this.options.onPause?.();
    });
  }

  _bindSwipe(target) {
    if (!this.options.onSwipe) return;
    const minDist = 40;

    target.addEventListener(
      "touchstart",
      (e) => {
        if (e.target.closest(".pn-mobile-controls")) return;
        const t = e.changedTouches[0];
        this._swipeStart = { x: t.clientX, y: t.clientY };
      },
      { passive: true },
    );

    target.addEventListener(
      "touchend",
      (e) => {
        if (!this._swipeStart) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - this._swipeStart.x;
        const dy = t.clientY - this._swipeStart.y;
        this._swipeStart = null;
        if (Math.abs(dx) < minDist && Math.abs(dy) < minDist) {
          if (this.options.onTap) {
            const rect = target.getBoundingClientRect();
            this.options.onTap(
              (t.clientX - rect.left) / rect.width,
              (t.clientY - rect.top) / rect.height,
            );
          }
          return;
        }
        if (Math.abs(dx) > Math.abs(dy)) {
          this.options.onSwipe(dx > 0 ? "right" : "left", { dx, dy });
        } else {
          this.options.onSwipe(dy > 0 ? "down" : "up", { dx, dy });
        }
      },
      { passive: true },
    );
  }

  _getTouch(e, end = false) {
    if (e.changedTouches?.length) {
      const list = end ? [...e.changedTouches] : [...e.touches];
      return list.find((t) => t.identifier === this._pointerId) || e.changedTouches[0];
    }
    return e;
  }

  _updateKnob(clientX, clientY, knob) {
    let dx = clientX - this._origin.x;
    let dy = clientY - this._origin.y;
    const len = Math.hypot(dx, dy) || 1;
    if (len > this._maxRadius) {
      dx = (dx / len) * this._maxRadius;
      dy = (dy / len) * this._maxRadius;
    }
    knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    this.joystickMove = {
      x: dx / this._maxRadius,
      y: dy / this._maxRadius,
    };
    this.options.onJoystick?.(this.joystickMove);
  }

  _startHoldLoop() {
    const tick = () => {
      if (this._pointerId != null) {
        this.options.onJoystick?.(this.joystickMove);
        this._rafHold = requestAnimationFrame(tick);
      }
    };
    this._rafHold = requestAnimationFrame(tick);
  }

  _stopHoldLoop() {
    if (this._rafHold) cancelAnimationFrame(this._rafHold);
    this._rafHold = null;
  }
}
