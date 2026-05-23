const MainScene = (() => {
  let canvas, ctx, mmCtx;
  const raindrops = [];
  const state = {
    cameraX: 0,
    cameraY: 0,
    lightFlicker: false,
    flickerTimer: 0,
    shadowFigures: [],
    timeFrozen: false,
    frozenTimer: 0,
    deliverableNearby: false,
    insideBuilding: false,
  };

  const ROADS = [
    { x1: 0, y1: 300, x2: 1200, y2: 300 },
    { x1: 0, y1: 500, x2: 1200, y2: 500 },
    { x1: 200, y1: 0, x2: 200, y2: 900 },
    { x1: 450, y1: 0, x2: 450, y2: 900 },
    { x1: 700, y1: 0, x2: 700, y2: 900 },
  ];

  function init() {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    mmCtx = document.getElementById("minimap").getContext("2d");
    resize();
    window.addEventListener("resize", resize);
    for (let i = 0; i < 180; i++) raindrops.push({ x: Math.random() * 1200, y: Math.random() * 900, speed: 250 + Math.random() * 150, len: 10 + Math.random() * 8, a: 0.3 });
  }

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function update(dt) {
    if (state.timeFrozen) {
      state.frozenTimer -= dt;
      if (state.frozenTimer <= 0) state.timeFrozen = false;
      return;
    }
    state.cameraX = Helpers.lerp(state.cameraX, Player.x - canvas.width / 2, 0.12);
    state.cameraY = Helpers.lerp(state.cameraY, Player.y - canvas.height / 2, 0.12);
    raindrops.forEach((d) => {
      d.y += d.speed * dt;
      d.x += d.speed * 0.12 * dt;
      if (d.y > state.cameraY + canvas.height) {
        d.y = state.cameraY - 10;
        d.x = state.cameraX + Math.random() * canvas.width;
      }
    });
    if (state.lightFlicker) {
      state.flickerTimer -= dt;
      if (state.flickerTimer <= 0) state.lightFlicker = false;
    }
    state.shadowFigures = state.shadowFigures.filter((s) => {
      s.a -= dt * 0.6;
      return s.a > 0;
    });
    checkInteract();
    if (DeliverySystem.getActiveOrder() && Math.random() < dt * 0.004) {
      EventSystem.tryTrigger(SceneAPI);
    }
  }

  function checkInteract() {
    const prompt = document.getElementById("interact-prompt");
    const text = document.getElementById("interact-text");
    const near = Building.getNearestEntrance(Player.x, Player.y, 48);
    if (near && !state.insideBuilding) {
      prompt.classList.remove("hidden");
      text.textContent = `Enter ${near.name}`;
      state.deliverableNearby = false;
      return;
    }
    if (state.insideBuilding && DeliverySystem.getActiveOrder()) {
      prompt.classList.remove("hidden");
      text.textContent = "Knock / Deliver";
      state.deliverableNearby = true;
      return;
    }
    prompt.classList.add("hidden");
    state.deliverableNearby = false;
  }

  function handleInteract() {
    const near = Building.getNearestEntrance(Player.x, Player.y, 48);
    if (near && !state.insideBuilding) {
      state.insideBuilding = true;
      Player.enterBuilding();
      Elevator.open(near);
      return;
    }
    if (state.deliverableNearby) {
      const order = DeliverySystem.getActiveOrder();
      if (!order) return;
      AudioSystem.playKnock(3);
      if (Math.random() < 0.35 + EventSystem.horrorLevel * 0.1) {
        setTimeout(() => EventSystem.tryTrigger(SceneAPI, Helpers.pick(["vanish", "shadow", "gps"])), 1200);
      } else {
        setTimeout(() => {
          DialogueSystem.show({
            speaker: order.customer,
            lines: ["...Thanks.", "Door closes before you can ask anything."],
            onDone: () => {
              DeliverySystem.deliverOrder(order.id);
              state.insideBuilding = false;
              Elevator.close();
              Player.exitBuilding();
            },
          });
        }, 1000);
      }
    }
  }

  function draw() {
    const W = canvas.width;
    const H = canvas.height;
    const cx = state.cameraX;
    const cy = state.cameraY;
    ctx.fillStyle = "#060810";
    ctx.fillRect(0, 0, W, H);

    ROADS.forEach((r) => {
      const horiz = r.y1 === r.y2;
      ctx.fillStyle = "#0e1622";
      if (horiz) ctx.fillRect(r.x1 - cx, r.y1 - 28 - cy, r.x2 - r.x1, 56);
      else ctx.fillRect(r.x1 - 28 - cx, r.y1 - cy, 56, r.y2 - r.y1);
    });

    Building.drawAll(ctx, cx, cy);

    state.shadowFigures.forEach((s) => {
      ctx.globalAlpha = s.a;
      ctx.fillStyle = "#000";
      ctx.fillRect(s.x - cx - 6, s.y - cy - 30, 12, 35);
      ctx.globalAlpha = 1;
    });

    const px = W / 2;
    const py = H / 2;
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(Player.angle + Math.PI / 2);
    if (Player.state.onScooter) {
      ctx.fillStyle = "#ddd";
      ctx.fillRect(-6, -14, 12, 28);
      ctx.fillStyle = "#ff9";
      ctx.beginPath();
      ctx.ellipse(0, -18, 4, 3, 0, 0, Math.PI * 2);
      ctx.fill();
    } else {
      ctx.fillStyle = "#c9d6e3";
      ctx.fillRect(-5, -12, 10, 22);
    }
    ctx.restore();

    if (Player.state.flashlightOn) {
      ctx.fillStyle = "rgba(0,0,0,0.55)";
      ctx.fillRect(0, 0, W, H);
      ctx.save();
      ctx.globalCompositeOperation = "destination-out";
      const g = ctx.createRadialGradient(px, py, 10, px, py, 280);
      g.addColorStop(0, "rgba(0,0,0,0.9)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.arc(px, py, 280, Player.angle - 0.5, Player.angle + 0.5);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }

    const vign = ctx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, Math.max(W, H) * 0.65);
    vign.addColorStop(0, "transparent");
    vign.addColorStop(1, "rgba(0,0,0,0.8)");
    ctx.fillStyle = vign;
    ctx.fillRect(0, 0, W, H);

    ctx.strokeStyle = "rgba(180,220,255,0.35)";
    raindrops.forEach((d) => {
      const sx = d.x - cx;
      const sy = d.y - cy;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.lineTo(sx + 2, sy + d.len);
      ctx.stroke();
    });

    Building.drawMinimap(mmCtx, Player.x, Player.y);
  }

  function flickerLights(sec = 3) {
    state.lightFlicker = true;
    state.flickerTimer = sec;
  }

  function spawnShadow() {
    const a = Player.angle + Math.PI;
    state.shadowFigures.push({
      x: Player.x + Math.cos(a) * 180,
      y: Player.y + Math.sin(a) * 180,
      a: 0.85,
    });
  }

  function freezeTime(sec = 4) {
    state.timeFrozen = true;
    state.frozenTimer = sec;
    Helpers.triggerGlitch("static-effect", sec * 1000);
  }

  const SceneAPI = { flickerLights, spawnShadow, freezeTime, handleInteract };

  return {
    init,
    update,
    draw,
    handleInteract,
    SceneAPI,
    get timeFrozen() { return state.timeFrozen; },
  };
})();
