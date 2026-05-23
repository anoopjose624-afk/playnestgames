const Player = (() => {
  const state = {
    x: 450,
    y: 500,
    angle: 0,
    onScooter: true,
    scooterSpeed: 220,
    footSpeed: 120,
    flashlightOn: true,
    sanity: 100,
    mouseSensitivity: 0.0028,
    inputEnabled: false,
  };

  const keys = { w: false, a: false, s: false, d: false };

  function setKey(key, down) {
    const k = key.toLowerCase();
    if (k in keys) keys[k] = down;
    if (key === "ArrowUp") keys.w = down;
    if (key === "ArrowDown") keys.s = down;
    if (key === "ArrowLeft") keys.a = down;
    if (key === "ArrowRight") keys.d = down;
  }

  function init() {
    const canvas = document.getElementById("gameCanvas");
    canvas?.setAttribute("tabindex", "0");

    document.addEventListener("mousemove", (e) => {
      if (!state.inputEnabled) return;
      if (document.pointerLockElement === canvas) {
        state.angle += e.movementX * state.mouseSensitivity;
      }
    });

    document.addEventListener("keydown", (e) => {
      if (!state.inputEnabled) return;
      setKey(e.key, true);
      if (e.key === "f" || e.key === "F") {
        state.flashlightOn = !state.flashlightOn;
        AudioSystem.playClick();
        Helpers.toast(state.flashlightOn ? "Flashlight ON" : "Flashlight OFF");
      }
    });

    document.addEventListener("keyup", (e) => {
      if (!state.inputEnabled) return;
      setKey(e.key, false);
    });

    canvas?.addEventListener("click", () => {
      if (!state.inputEnabled) return;
      if (!document.pointerLockElement && canvas.requestPointerLock) {
        canvas.requestPointerLock().catch(() => {});
      }
    });
  }

  function reset(x, y) {
    state.x = x;
    state.y = y;
    state.angle = 0;
    state.onScooter = true;
    state.sanity = 100;
    state.flashlightOn = true;
    state.inputEnabled = false;
    Object.keys(keys).forEach((k) => {
      keys[k] = false;
    });
    document.getElementById("sanity-fill").style.width = "100%";
    document.getElementById("sanity-bar")?.classList.add("hidden");
  }

  function enableInput() {
    state.inputEnabled = true;
    document.getElementById("gameCanvas")?.focus();
  }

  function update(dt) {
    if (!state.inputEnabled) return;

    const touch = TouchControls.getMove();
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
    if (keys.a) state.angle -= 2.4 * dt;
    if (keys.d) state.angle += 2.4 * dt;

    if (touch.x !== 0 || touch.y !== 0) {
      const len = Math.hypot(touch.x, touch.y) || 1;
      const nx = touch.x / len;
      const ny = touch.y / len;
      if (Math.abs(nx) > 0.15 || Math.abs(ny) > 0.15) {
        state.angle = Math.atan2(ny, nx);
        dx += nx * spd * dt;
        dy += ny * spd * dt;
      }
    }

    const nextX = Helpers.clamp(state.x + dx, 40, 1160);
    const nextY = Helpers.clamp(state.y + dy, 40, 860);

    if (!Building.collides(nextX, nextY, 10)) {
      state.x = nextX;
      state.y = nextY;
    } else if (!Building.collides(nextX, state.y, 10)) {
      state.x = nextX;
    } else if (!Building.collides(state.x, nextY, 10)) {
      state.y = nextY;
    }

    if ((dx || dy) && state.onScooter && Math.random() < dt * 8) AudioSystem.playFootstep();
  }

  function enterBuilding() {
    state.onScooter = false;
  }

  function exitBuilding() {
    state.onScooter = true;
  }

  function decreaseSanity(n) {
    state.sanity = Helpers.clamp(state.sanity - n, 0, 100);
    document.getElementById("sanity-bar")?.classList.remove("hidden");
    document.getElementById("sanity-fill").style.width = `${state.sanity}%`;
    if (state.sanity <= 0) GameSession.triggerGameOver("insanity", "Your mind gave way on the night shift.");
  }

  return {
    init,
    reset,
    enableInput,
    update,
    enterBuilding,
    exitBuilding,
    decreaseSanity,
    get state() {
      return state;
    },
    get x() {
      return state.x;
    },
    get y() {
      return state.y;
    },
    get angle() {
      return state.angle;
    },
  };
})();
