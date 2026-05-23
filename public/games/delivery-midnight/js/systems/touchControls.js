// Mobile touch controls (joystick + action buttons)
const TouchControls = (() => {
  let active = false;
  let move = { x: 0, y: 0 };
  let pointerId = null;
  let origin = { x: 0, y: 0 };
  const MAX_RADIUS = 52;

  function init() {
    const root = document.getElementById("touch-controls");
    const zone = document.getElementById("joystick-zone");
    const knob = document.getElementById("joystick-knob");
    if (!root || !zone || !knob) return;

    const show =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;
    if (show) root.classList.remove("hidden");

    zone.addEventListener(
      "touchstart",
      (e) => {
        e.preventDefault();
        active = true;
        const t = e.changedTouches[0];
        pointerId = t.identifier;
        const rect = zone.getBoundingClientRect();
        origin = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        updateKnob(t.clientX, t.clientY, knob);
      },
      { passive: false },
    );

    zone.addEventListener(
      "touchmove",
      (e) => {
        if (!active) return;
        e.preventDefault();
        const t = [...e.changedTouches].find((x) => x.identifier === pointerId);
        if (t) updateKnob(t.clientX, t.clientY, knob);
      },
      { passive: false },
    );

    const end = (e) => {
      const t = [...e.changedTouches].find((x) => x.identifier === pointerId);
      if (!t && e.type !== "touchcancel") return;
      active = false;
      pointerId = null;
      move = { x: 0, y: 0 };
      knob.style.transform = "translate(-50%, -50%)";
    };
    zone.addEventListener("touchend", end);
    zone.addEventListener("touchcancel", end);

    document.getElementById("touch-interact")?.addEventListener("click", (e) => {
      e.preventDefault();
      if (GameSession.isPlaying()) MainScene.handleInteract();
    });
    document.getElementById("touch-phone")?.addEventListener("click", (e) => {
      e.preventDefault();
      if (GameSession.isPlaying()) PhoneSystem.toggle();
    });
  }

  function updateKnob(clientX, clientY, knob) {
    let dx = clientX - origin.x;
    let dy = clientY - origin.y;
    const len = Math.hypot(dx, dy) || 1;
    if (len > MAX_RADIUS) {
      dx = (dx / len) * MAX_RADIUS;
      dy = (dy / len) * MAX_RADIUS;
    }
    knob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
    move.x = dx / MAX_RADIUS;
    move.y = dy / MAX_RADIUS;
  }

  return {
    init,
    getMove() {
      return { ...move };
    },
    isActive() {
      return active;
    },
  };
})();
