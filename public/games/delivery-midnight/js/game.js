const SHIFT_GOAL = 3;
const MAX_FAILED_ORDERS = 3;

const GameSession = (() => {
  const state = {
    currentScreen: "menu",
    currentNight: 1,
    gameRunning: false,
    playStarted: false,
    paused: false,
    gameOver: false,
    gameMinutes: 720,
    gameTimeSpeed: 4,
    score: 0,
    lastDelivered: 0,
  };

  let lastTime = 0;
  let animFrame = null;
  let orderInterval = null;

  const NIGHT_QUOTES = [
    '"Just a normal shift. Probably."',
    '"The GPS updated. You don\'t recognize the route."',
    '"Floor 13 is on your delivery list."',
  ];

  function init() {
    setupMenu();
    setupSettings();
    setupIngameKeys();
    Player.init();
    PhoneSystem.init();
    MainScene.init();
    TouchControls.init();
    AudioSystem.init();
    AudioSystem.startRain(0.35);
    AudioSystem.startAmbientDrone(0);
  }

  function setupMenu() {
    document.getElementById("btn-start")?.addEventListener("click", () => {
      AudioSystem.init();
      AudioSystem.playClick();
      startNightIntro(1);
    });
    document.getElementById("btn-howto")?.addEventListener("click", () => {
      AudioSystem.playClick();
      Helpers.showScreen("howto");
    });
    document.getElementById("btn-settings")?.addEventListener("click", () => {
      AudioSystem.playClick();
      Helpers.showScreen("settings");
    });
    document.getElementById("btn-howto-back")?.addEventListener("click", () => Helpers.showScreen("menu"));
    document.getElementById("btn-settings-back")?.addEventListener("click", () => Helpers.showScreen("menu"));
    document.getElementById("btn-retry")?.addEventListener("click", () => startNightIntro(state.currentNight));
    document.getElementById("btn-go-menu")?.addEventListener("click", returnToMenu);
    document.getElementById("btn-resume")?.addEventListener("click", togglePause);
    document.getElementById("btn-quit")?.addEventListener("click", returnToMenu);
  }

  function setupSettings() {
    [
      { id: "vol-master", val: "vol-master-val", type: "master" },
      { id: "vol-music", val: "vol-music-val", type: "music" },
      { id: "vol-sfx", val: "vol-sfx-val", type: "sfx" },
    ].forEach((s) => {
      const el = document.getElementById(s.id);
      const v = document.getElementById(s.val);
      el?.addEventListener("input", () => {
        v.textContent = el.value;
        AudioSystem.setVolume(s.type, el.value / 100);
      });
    });
    document.getElementById("toggle-subtitles")?.addEventListener("click", function () {
      this.classList.toggle("active");
      this.textContent = this.classList.contains("active") ? "ON" : "OFF";
    });
  }

  function setupIngameKeys() {
    document.addEventListener("keydown", (e) => {
      if (state.currentScreen === "game" && !state.playStarted && !state.paused) {
        beginPlay();
      }
      if (state.currentScreen !== "game" || !state.playStarted) return;
      if (e.key === "Escape") {
        if (PhoneSystem.isOpen) PhoneSystem.toggle(false);
        else if (!DialogueSystem.isOpen) togglePause();
      }
      if (e.key === "Tab") {
        e.preventDefault();
        if (!state.paused && !DialogueSystem.isOpen) PhoneSystem.toggle();
      }
      if ((e.key === "e" || e.key === "E") && !state.paused && !PhoneSystem.isOpen && !DialogueSystem.isOpen) {
        MainScene.handleInteract();
      }
    });
  }

  async function startNightIntro(night) {
    state.currentNight = night;
    state.playStarted = false;
    document.getElementById("night-number").textContent = String(night).padStart(2, "0");
    document.getElementById("night-quote").textContent = NIGHT_QUOTES[Math.min(night - 1, NIGHT_QUOTES.length - 1)];
    Helpers.showScreen("night-intro");
    await Helpers.wait(2000);
    startGame(night);
  }

  function startGame(night) {
    state.currentScreen = "game";
    state.gameRunning = true;
    state.gameOver = false;
    state.paused = false;
    state.playStarted = false;
    state.gameMinutes = 720;
    state.score = 0;
    state.lastDelivered = 0;
    Helpers.showScreen("game");
    document.getElementById("pause-menu").classList.add("hidden");
    document.getElementById("hud-status").textContent = "ON DUTY";

    Player.reset(450, 500);
    EventSystem.setNight(night);
    DeliverySystem.resetNight();
    MainScene.reset();

    for (let i = 0; i < 2 + night; i++) DeliverySystem.generateOrder(EventSystem.horrorLevel);
    PhoneSystem.refreshOrders();

    showPlayOverlay();
    updateScoreHud();

    lastTime = performance.now();
    if (animFrame) cancelAnimationFrame(animFrame);
    animFrame = requestAnimationFrame(loop);

    if (orderInterval) clearInterval(orderInterval);
    orderInterval = setInterval(() => {
      if (!state.gameRunning || state.gameOver || !state.playStarted) return;
      if (Math.random() < 0.45) {
        DeliverySystem.generateOrder(EventSystem.horrorLevel);
        PhoneSystem.refreshOrders();
        AudioSystem.playPhoneNotification();
        Helpers.toast("New delivery order!");
      }
    }, 28000);
  }

  function showPlayOverlay() {
    document.getElementById("pointer-hint")?.remove();
    const hint = document.createElement("div");
    hint.id = "pointer-hint";
    hint.innerHTML =
      '<div class="play-overlay-inner"><div class="play-overlay-title">CLICK TO PLAY</div><p class="play-overlay-sub">WASD / joystick · Mouse or A/D turn · TAB phone · E interact</p><button type="button" id="btn-play-now" class="menu-btn play-overlay-btn">START SHIFT</button></div>';
    document.getElementById("screen-game").appendChild(hint);

    const start = () => beginPlay();
    hint.addEventListener("click", start);
    document.getElementById("btn-play-now")?.addEventListener("click", (e) => {
      e.stopPropagation();
      start();
    });
  }

  function beginPlay() {
    if (state.playStarted || state.gameOver) return;
    state.playStarted = true;

    const hint = document.getElementById("pointer-hint");
    if (hint) {
      hint.classList.add("fade");
      setTimeout(() => hint.remove(), 350);
    }

    const canvas = document.getElementById("gameCanvas");
    canvas?.focus();
    if (canvas?.requestPointerLock) {
      canvas.requestPointerLock().catch(() => {});
    }

    AudioSystem.init();
    AudioSystem.playClick();
    Player.enableInput();

    const available = DeliverySystem.getAvailableOrders();
    if (!DeliverySystem.getActiveOrder() && available.length) {
      DeliverySystem.acceptOrder(available[0].id);
    }

    Helpers.toast(`Deliver ${SHIFT_GOAL} orders before dawn!`, "var(--neon-green)");
    Helpers.subtitle("Ride to the glowing marker. Press E at the door.", 4000);
    updateScoreHud();
  }

  function loop(ts) {
    const dt = Math.min((ts - lastTime) / 1000, 0.1);
    lastTime = ts;
    if (state.playStarted && !state.paused && !state.gameOver) update(dt);
    MainScene.draw();
    animFrame = requestAnimationFrame(loop);
  }

  function update(dt) {
    if (MainScene.timeFrozen) return;
    state.gameMinutes += dt * state.gameTimeSpeed;
    const t = Helpers.formatGameTime(Math.floor(state.gameMinutes));
    document.getElementById("hud-time").textContent = `🕛 ${t}`;
    PhoneSystem.updateTime(t);

    Player.update(dt);
    MainScene.update(dt);
    DeliverySystem.tick(dt);
    EventSystem.tick(dt);

    const stats = DeliverySystem.getNightStats();
    if (stats.delivered !== state.lastDelivered) {
      state.lastDelivered = stats.delivered;
      state.score += 100 + Math.floor(stats.earnings * 10);
      updateScoreHud();
      if (stats.delivered >= SHIFT_GOAL) endNight(true);
    }
    if (stats.failed >= MAX_FAILED_ORDERS) {
      triggerGameOver("failed", "Too many late deliveries. Shift terminated.");
    }
    if (state.gameMinutes >= 1020) endNight(stats.delivered > 0);
  }

  function updateScoreHud() {
    const stats = DeliverySystem.getNightStats();
    const el = document.getElementById("hud-score");
    if (el) {
      el.textContent = `Score ${state.score} · ${stats.delivered}/${SHIFT_GOAL} deliveries · $${stats.earnings.toFixed(2)}`;
    }
  }

  function endNight(won = true) {
    if (state.gameOver) return;
    state.gameOver = true;
    state.gameRunning = false;
    if (orderInterval) clearInterval(orderInterval);

    const stats = DeliverySystem.getNightStats();
    document.getElementById("go-title").textContent = won
      ? `NIGHT ${state.currentNight} — SHIFT WON`
      : `NIGHT ${state.currentNight} — DAWN`;
    document.getElementById("go-reason").textContent = won
      ? `You completed ${stats.delivered} deliveries and earned $${stats.earnings.toFixed(2)}.`
      : "The sun rises. You made it through the night.";
    document.getElementById("go-stats").innerHTML = `Final score: ${state.score}<br/>Deliveries: ${stats.delivered}<br/>Failed: ${stats.failed}<br/>Earnings: $${stats.earnings.toFixed(2)}`;
    document.getElementById("btn-retry").textContent = won ? `NIGHT ${state.currentNight + 1} →` : "TRY AGAIN";
    document.getElementById("btn-retry").onclick = () => startNightIntro(won ? state.currentNight + 1 : state.currentNight);
    Helpers.showScreen("gameover");
    cancelAnimationFrame(animFrame);
    document.exitPointerLock?.();
    document.getElementById("pointer-hint")?.remove();
  }

  function triggerGameOver(type, reason) {
    if (state.gameOver) return;
    state.gameOver = true;
    state.gameRunning = false;
    if (orderInterval) clearInterval(orderInterval);
    AudioSystem.playHorrorSting();
    const stats = DeliverySystem.getNightStats();
    document.getElementById("go-title").textContent =
      type === "insanity" ? "YOU LOST YOUR MIND" : "SHIFT ENDED";
    document.getElementById("go-reason").textContent = reason;
    document.getElementById("go-stats").innerHTML = `Score: ${state.score}<br/>Deliveries: ${stats.delivered}<br/>Failed: ${stats.failed}`;
    document.getElementById("btn-retry").textContent = "TRY AGAIN";
    document.getElementById("btn-retry").onclick = () => startNightIntro(state.currentNight);
    Helpers.showScreen("gameover");
    cancelAnimationFrame(animFrame);
    document.exitPointerLock?.();
    document.getElementById("pointer-hint")?.remove();
  }

  function togglePause() {
    if (!state.playStarted) return;
    state.paused = !state.paused;
    document.getElementById("pause-menu").classList.toggle("hidden", !state.paused);
    if (state.paused) document.exitPointerLock?.();
  }

  function returnToMenu() {
    state.gameOver = true;
    state.gameRunning = false;
    state.playStarted = false;
    if (orderInterval) clearInterval(orderInterval);
    cancelAnimationFrame(animFrame);
    document.getElementById("pause-menu").classList.add("hidden");
    document.exitPointerLock?.();
    document.getElementById("pointer-hint")?.remove();
    Helpers.showScreen("menu");
  }

  return {
    init,
    beginPlay,
    triggerGameOver,
    togglePause,
    isPlaying: () => state.gameRunning && state.playStarted && !state.gameOver && !state.paused,
    get score() {
      return state.score;
    },
  };
})();

const Game = GameSession;

document.addEventListener("DOMContentLoaded", () => GameSession.init());
