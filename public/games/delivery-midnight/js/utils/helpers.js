// Shared helpers for Delivery Guy After Midnight
const Helpers = {
  rand(min, max) {
    return Math.random() * (max - min) + min;
  },
  randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  },
  clamp(val, min, max) {
    return Math.max(min, Math.min(max, val));
  },
  lerp(a, b, t) {
    return a + (b - a) * t;
  },
  dist2D(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  },
  formatGameTime(minutes) {
    const h = Math.floor(minutes / 60) % 24;
    const m = minutes % 60;
    const suffix = h < 12 ? "AM" : "PM";
    const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
    return `${String(h12).padStart(2, "0")}:${String(m).padStart(2, "0")} ${suffix}`;
  },
  toast(message, color = "var(--neon-yellow)", duration = 3000) {
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = message;
    el.style.borderColor = color;
    el.style.color = color;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), duration);
  },
  triggerGlitch(type = "vhs-glitch", duration = 500) {
    const overlay = document.getElementById("event-overlay");
    overlay.className = type;
    overlay.classList.remove("hidden");
    AudioSystem.playStaticGlitch(duration / 1000);
    setTimeout(() => overlay.classList.add("hidden"), duration);
  },
  subtitle(text, duration = 3000) {
    const el = document.getElementById("subtitles");
    el.textContent = text;
    el.classList.remove("hidden");
    clearTimeout(el._timeout);
    el._timeout = setTimeout(() => el.classList.add("hidden"), duration);
  },
  fadeOut(duration = 1000) {
    return new Promise((resolve) => {
      const el = document.createElement("div");
      el.style.cssText = `position:fixed;inset:0;background:#000;z-index:9999;opacity:0;transition:opacity ${duration}ms;pointer-events:none;`;
      document.body.appendChild(el);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = "1";
        });
      });
      setTimeout(() => {
        el.remove();
        resolve();
      }, duration + 50);
    });
  },
  fadeIn(duration = 1000) {
    return new Promise((resolve) => {
      const el = document.createElement("div");
      el.style.cssText = `position:fixed;inset:0;background:#000;z-index:9999;opacity:1;transition:opacity ${duration}ms;pointer-events:none;`;
      document.body.appendChild(el);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.opacity = "0";
        });
      });
      setTimeout(() => {
        el.remove();
        resolve();
      }, duration + 50);
    });
  },
  showScreen(id) {
    document.querySelectorAll(".screen").forEach((s) => s.classList.remove("active"));
    document.getElementById(`screen-${id}`)?.classList.add("active");
  },
  wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
};
