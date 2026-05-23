/**
 * PlayNest Save System
 * localStorage wrapper for settings, scores, progress, unlocks.
 */

export default class SaveSystem {
  /**
   * @param {string} gameId - unique id per game (e.g. "snake")
   */
  constructor(gameId) {
    this.gameId = gameId;
    this.prefix = `playnest-${gameId}`;
    this._autoTimer = null;
  }

  _key(slot) {
    return `${this.prefix}-${slot}`;
  }

  /**
   * @param {string} slot
   * @returns {*}
   */
  load(slot, fallback = null) {
    try {
      const raw = localStorage.getItem(this._key(slot));
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  /**
   * @param {string} slot
   * @param {*} data
   */
  save(slot, data) {
    try {
      localStorage.setItem(this._key(slot), JSON.stringify(data));
      return true;
    } catch {
      return false;
    }
  }

  remove(slot) {
    try {
      localStorage.removeItem(this._key(slot));
    } catch {
      /* ignore */
    }
  }

  // Convenience helpers
  getSettings() {
    return this.load("settings", {});
  }

  setSettings(settings) {
    return this.save("settings", settings);
  }

  getScore() {
    return this.load("score", 0);
  }

  setScore(score) {
    return this.save("score", score);
  }

  getHighScore() {
    return this.load("highScore", 0);
  }

  setHighScore(score) {
    const prev = this.getHighScore();
    if (score > prev) this.save("highScore", score);
    return Math.max(score, prev);
  }

  getProgress() {
    return this.load("progress", {});
  }

  setProgress(progress) {
    return this.save("progress", progress);
  }

  getUnlocks() {
    return this.load("unlocks", []);
  }

  unlock(id) {
    const list = this.getUnlocks();
    if (!list.includes(id)) {
      list.push(id);
      this.save("unlocks", list);
    }
    return list;
  }

  /**
   * Auto-save on an interval (ms). Pass null to stop.
   * @param {number|null} ms
   * @param {() => object} getState
   */
  autoSave(ms, getState) {
    if (this._autoTimer) {
      clearInterval(this._autoTimer);
      this._autoTimer = null;
    }
    if (!ms || !getState) return;
    this._autoTimer = setInterval(() => {
      this.save("autosave", getState());
    }, ms);
  }

  loadAutoSave() {
    return this.load("autosave", null);
  }
}
