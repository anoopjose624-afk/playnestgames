const Player = (() => {
  const state = {
    x: 450,
    y: 500,
    angle: 0,
    onScooter: true,
    scooterSpeed: 200,
    footSpeed: 110,
    flashlightOn: true,
    sanity: 100,
    interactRange: 55,
    mouseSensitivity: 0.002,
  };

  const keys = { w: false, a: false, s: false, d: false };

  function init() {
    document.addEventListener("mousemove", (e) => {
      if (!document.pointerLockElement) return;
      state.angle += e.movementX * state.mouseSensitivity;
    });
    document.addEventListener("keydown", (e) => {
      if (e.key in keys) keys[e.key] = true;
      if (e.key === "f" || e.key === "F") {
        state.flashlightOn = !state.flashlightOn;
        Helpers.toast(state.flashlightOn ? "Flashlight ON" : "Flashlight OFF");
      }
    });
    document.addEventListener("keyup", (e) => {
      if (e.key in keys) keys[e.key] = false;
    });
    document.getElementById("gameCanvas")?.addEventListener("click", () => {
      if (!document.pointerLockElement) document.getElementById("gameCanvas").requestPointerLock();
    });
  }

  function update(dt) {
    const spd = state.onScooter ? state.scooterSpeed : state.footSpeed;
    let dx = 0;
    let dy = 0;
    if (keys.w) {
      dx += Math.cos(state.angle) * spd * dt;
      dy += Math.sin(state.angle) * spd * dt;
    }
    if (keys.s) {
      dx -= Math.cos(state.angle) * spd * dt;
      dy -= Math.sin(state.angle) * spd * dt;
    }
    if (keys.a) state.angle -= 2.2 * dt;
    if (keys.d) state.angle += 2.2 * dt;
    state.x = Helpers.clamp(state.x + dx, 50, 1150);
    state.y = Helpers.clamp(state.y + dy, 50, 850);
    if ((dx || dy) && !state.onScooter) AudioSystem.playFootstep();
  }

  function enterBuilding() {
    state.onScooter = false;
    Helpers.toast("Entered building");
  }

  function exitBuilding() {
    state.onScooter = true;
    Helpers.toast("Back on scooter");
  }

  function decreaseSanity(n) {
    state.sanity = Helpers.clamp(state.sanity - n, 0, 100);
    document.getElementById("sanity-bar")?.classList.remove("hidden");
    document.getElementById("sanity-fill").style.width = `${state.sanity}%`;
    if (state.sanity <= 0) Game.triggerGameOver("insanity", "Your mind gave way.");
  }

  return {
    init,
    update,
    enterBuilding,
    exitBuilding,
    decreaseSanity,
    get state() { return state; },
    get x() { return state.x; },
    get y() { return state.y; },
    get angle() { return state.angle; },
  };
})();
