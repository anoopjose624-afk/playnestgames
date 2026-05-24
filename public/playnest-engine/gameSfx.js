/**
 * Procedural game SFX via Web Audio — no asset files required.
 * Respects PlayNest AudioManager mute state.
 */

export default class GameSfx {
  /** @param {import("./audioManager.js").default|null} audioManager */
  constructor(audioManager) {
    this._audio = audioManager;
    this._ctx = null;
  }

  _getCtx() {
    if (!this._ctx) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      this._ctx = new Ctx();
    }
    if (this._ctx.state === "suspended") this._ctx.resume().catch(() => {});
    return this._ctx;
  }

  _muted() {
    return this._audio?.isMuted?.() ?? false;
  }

  /**
   * @param {number} freq
   * @param {number} duration
   * @param {"sine"|"square"|"triangle"} [type]
   * @param {number} [volume]
   */
  tone(freq, duration, type = "sine", volume = 0.15) {
    if (this._muted()) return;
    const ctx = this._getCtx();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  }

  /** Short UI tap */
  tap() {
    this.tone(520, 0.05, "sine", 0.12);
  }

  /** Collect / eat */
  eat() {
    this.tone(660, 0.08, "sine", 0.14);
    setTimeout(() => this.tone(880, 0.1, "sine", 0.12), 60);
  }

  /** Jump / flap */
  jump() {
    this.tone(320, 0.06, "square", 0.1);
    this.tone(480, 0.08, "square", 0.08);
  }

  /** Card flip */
  flip() {
    this.tone(400, 0.04, "triangle", 0.1);
  }

  /** Match / success */
  match() {
    this.tone(523, 0.1, "sine", 0.14);
    setTimeout(() => this.tone(659, 0.12, "sine", 0.12), 80);
  }

  /** Hit / whack */
  hit() {
    this.tone(180, 0.06, "square", 0.18);
  }

  /** Move / slide tile */
  move() {
    this.tone(280, 0.04, "triangle", 0.08);
  }

  /** Merge (2048) */
  merge() {
    this.tone(350, 0.06, "sine", 0.12);
    setTimeout(() => this.tone(440, 0.08, "sine", 0.1), 50);
  }

  /** Win */
  win() {
    [523, 659, 784].forEach((f, i) => {
      setTimeout(() => this.tone(f, 0.15, "sine", 0.13), i * 100);
    });
  }

  /** Lose / crash */
  lose() {
    this.tone(220, 0.15, "sawtooth", 0.12);
    setTimeout(() => this.tone(110, 0.2, "sawtooth", 0.1), 120);
  }

  /** Paddle bounce */
  bounce() {
    this.tone(440, 0.05, "sine", 0.11);
  }

  /** Score point */
  score() {
    this.tone(600, 0.07, "sine", 0.13);
  }

  /** Clicker tick */
  click() {
    this.tone(800, 0.03, "square", 0.08);
  }
}
