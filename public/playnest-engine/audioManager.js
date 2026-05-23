/**
 * PlayNest Audio Manager
 * Unlocks audio on first touch, mute toggle, prevents overlapping SFX.
 */

export default class AudioManager {
  /**
   * @param {string} storageKey - localStorage key prefix
   */
  constructor(storageKey = "playnest-audio") {
    this.storageKey = storageKey;
    this.muted = false;
    this.unlocked = false;
    this._pool = new Map();
    this._playing = new Set();
    this._loadSettings();
    this._bindUnlock();
  }

  _loadSettings() {
    try {
      const raw = localStorage.getItem(`${this.storageKey}-settings`);
      if (raw) {
        const data = JSON.parse(raw);
        this.muted = !!data.muted;
      }
    } catch {
      /* ignore */
    }
  }

  _saveSettings() {
    try {
      localStorage.setItem(
        `${this.storageKey}-settings`,
        JSON.stringify({ muted: this.muted }),
      );
    } catch {
      /* ignore */
    }
  }

  _bindUnlock() {
    const unlock = () => {
      if (this.unlocked) return;
      this.unlocked = true;
      // Silent buffer play for iOS / mobile browsers
      const ctx = window.AudioContext || window.webkitAudioContext;
      if (ctx) {
        try {
          const c = new ctx();
          const o = c.createOscillator();
          const g = c.createGain();
          g.gain.value = 0;
          o.connect(g);
          g.connect(c.destination);
          o.start(0);
          o.stop(0);
          c.close();
        } catch {
          /* ignore */
        }
      }
      document.removeEventListener("touchstart", unlock, true);
      document.removeEventListener("click", unlock, true);
    };
    document.addEventListener("touchstart", unlock, { once: true, capture: true });
    document.addEventListener("click", unlock, { once: true, capture: true });
  }

  /** @returns {boolean} */
  isMuted() {
    return this.muted;
  }

  toggleMute() {
    this.muted = !this.muted;
    this._saveSettings();
    document.body.classList.toggle("pn-muted", this.muted);
    return this.muted;
  }

  setMuted(value) {
    this.muted = !!value;
    this._saveSettings();
    document.body.classList.toggle("pn-muted", this.muted);
  }

  /**
   * Play HTMLAudioElement or create from src.
   * @param {string} id - unique sound id (prevents overlap if same id)
   * @param {string} src
   * @param {{ volume?: number, loop?: boolean, allowOverlap?: boolean }} [opts]
   */
  play(id, src, opts = {}) {
    if (this.muted || !this.unlocked) return null;
    if (!opts.allowOverlap && this._playing.has(id)) return null;

    let audio = this._pool.get(id);
    if (!audio) {
      audio = new Audio(src);
      this._pool.set(id, audio);
    }
    audio.volume = opts.volume ?? 1;
    audio.loop = !!opts.loop;
    audio.currentTime = 0;
    this._playing.add(id);
    const done = () => this._playing.delete(id);
    audio.play().catch(done);
    audio.onended = done;
    return audio;
  }

  stop(id) {
    const audio = this._pool.get(id);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    this._playing.delete(id);
  }

  stopAll() {
    this._pool.forEach((a) => {
      a.pause();
      a.currentTime = 0;
    });
    this._playing.clear();
  }
}
