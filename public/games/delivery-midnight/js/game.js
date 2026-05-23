const Game = (() => {
  const state = {
    currentScreen: "menu",
    currentNight: 1,
    gameRunning: false,
    paused: false,
    gameOver: false,
    gameMinutes: 720,
    gameTimeSpeed: 2,
  };

  let lastTime = 0;
  let animFrame = null;
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
      if (state.currentScreen !== "game") return;
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
    document.getElementById("night-number").textContent = String(night).padStart(2, "0");
    document.getElementById("night-quote").textContent = NIGHT_QUOTES[Math.min(night - 1, NIGHT_QUOTES.length - 1)];
    Helpers.showScreen("night-intro");
    await Helpers.wait(3000);
    startGame(night);
  }

  function startGame(night) {
    state.currentScreen = "game";
    state.gameRunning = true;
    state.gameOver = false;
    state.paused = false;
    state.gameMinutes = 720;
    Helpers.showScreen("game");
    document.getElementById("pause-menu").classList.add("hidden");

    Player.state.x = 450;
    Player.state.y = 500;
    Player.state.angle = 0;
    Player.state.sanity = 100;
    Player.state.onScooter = true;

    EventSystem.setNight(night);
    DeliverySystem.resetNight();
    for (let i = 0; i < 2 + night; i++) DeliverySystem.generateOrder(EventSystem.horrorLevel);
    PhoneSystem.refreshOrders();

    const hint = document.createElement("div");
    hint.id = "pointer-hint";
    hint.innerHTML = "CLICK TO PLAY<br/><span style='font-size:0.7rem;opacity:0.6'>WASD move · Mouse look · TAB phone · E interact</span>";
    document.body.appendChild(hint);
    document.addEventListener(
      "pointerlockchange",
      () => {
        if (document.pointerLockElement) hint.classList.add("fade");
      },
      { once: false },
    );

    lastTime = performance.now();
    animFrame = requestAnimationFrame(loop);
    setTimeout(() => Helpers.subtitle(`Night ${night}. Heavy rain. Normal shift... probably.`), 800);
    scheduleOrders();
  }

  function scheduleOrders() {
    const id = setInterval(() => {
      if (!state.gameRunning || state.gameOver) return clearInterval(id);
      if (Math.random() < 0.5) {
        DeliverySystem.generateOrder(EventSystem.horrorLevel);
        PhoneSystem.refreshOrders();
        AudioSystem.playPhoneNotification();
        Helpers.toast("New delivery order!");
      }
    }, 35000);
  }

  function loop(ts) {
    const dt = Math.min((ts - lastTime) / 1000, 0.1);
    lastTime = ts;
    if (!state.paused && !state.gameOver) update(dt);
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
    if (state.gameMinutes >= 1020) endNight();
  }

  function endNight() {
    if (state.gameOver) return;
    state.gameOver = true;
    const stats = DeliverySystem.getNightStats();
    document.getElementById("go-title").textContent = `NIGHT ${state.currentNight} COMPLETE`;
    document.getElementById("go-reason").textContent = "Dawn breaks. You survived.";
    document.getElementById("go-stats").innerHTML = `Deliveries: ${stats.delivered}<br/>Earnings: $${stats.earnings.toFixed(2)}`;
    document.getElementById("btn-retry").textContent = `NIGHT ${state.currentNight + 1} →`;
    document.getElementById("btn-retry").onclick = () => startNightIntro(state.currentNight + 1);
    Helpers.showScreen("gameover");
    cancelAnimationFrame(animFrame);
  }

  function triggerGameOver(type, reason) {
    if (state.gameOver) return;
    state.gameOver = true;
    AudioSystem.playHorrorSting();
    document.getElementById("go-title").textContent = type === "insanity" ? "YOU LOST YOUR MIND" : "SHIFT ENDED";
    document.getElementById("go-reason").textContent = reason;
    Helpers.showScreen("gameover");
    cancelAnimationFrame(animFrame);
  }

  function togglePause() {
    state.paused = !state.paused;
    document.getElementById("pause-menu").classList.toggle("hidden", !state.paused);
    if (state.paused) document.exitPointerLock?.();
  }

  function returnToMenu() {
    state.gameOver = true;
    state.gameRunning = false;
    cancelAnimationFrame(animFrame);
    document.getElementById("pause-menu").classList.add("hidden");
    document.exitPointerLock?.();
    document.getElementById("pointer-hint")?.remove();
    Helpers.showScreen("menu");
  }

  return { init, triggerGameOver, togglePause };
})();

document.addEventListener("DOMContentLoaded", () => Game.init());
