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
    currentBuilding: null,
    readyToDeliver: false,
    elevatorBusy: false,
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
    for (let i = 0; i < 180; i++) {
      raindrops.push({
        x: Math.random() * 1200,
        y: Math.random() * 900,
        speed: 250 + Math.random() * 150,
        len: 10 + Math.random() * 8,
      });
    }
  }

  function reset() {
    state.insideBuilding = false;
    state.currentBuilding = null;
    state.readyToDeliver = false;
    state.elevatorBusy = false;
    state.shadowFigures = [];
    state.timeFrozen = false;
    Elevator.close();
  }

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function getTargetBuilding() {
    const order = DeliverySystem.getActiveOrder();
    if (!order) return null;
    return Building.getById(order.buildingId);
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

    if (GameSession.isPlaying() && DeliverySystem.getActiveOrder() && Math.random() < dt * 0.003) {
      EventSystem.tryTrigger(SceneAPI);
    }
  }

  function checkInteract() {
    const prompt = document.getElementById("interact-prompt");
    const text = document.getElementById("interact-text");
    const order = DeliverySystem.getActiveOrder();

    if (state.insideBuilding && state.readyToDeliver && order) {
      prompt.classList.remove("hidden");
      text.textContent = `Deliver to Unit ${order.unit}`;
      state.deliverableNearby = true;
      return;
    }

    if (state.insideBuilding && state.elevatorBusy) {
      prompt.classList.add("hidden");
      state.deliverableNearby = false;
      return;
    }

    const near = Building.getNearestEntrance(Player.x, Player.y, 52);
    if (near && !state.insideBuilding && order) {
      const match = order.buildingId === near.id;
      prompt.classList.remove("hidden");
      text.textContent = match ? `Enter ${near.name}` : `Wrong building — go to ${Building.getById(order.buildingId)?.name || "marker"}`;
      state.deliverableNearby = false;
      return;
    }

    if (near && !state.insideBuilding && !order) {
      prompt.classList.remove("hidden");
      text.textContent = `Enter ${near.name} (no active order)`;
      state.deliverableNearby = false;
      return;
    }

    prompt.classList.add("hidden");
    state.deliverableNearby = false;
  }

  function handleInteract() {
    if (!GameSession.isPlaying()) return;

    const order = DeliverySystem.getActiveOrder();

    if (state.insideBuilding && state.readyToDeliver && order) {
      completeDelivery(order);
      return;
    }

    const near = Building.getNearestEntrance(Player.x, Player.y, 52);
    if (!near || state.insideBuilding) return;

    if (!order) {
      Helpers.toast("Accept an order on your phone (TAB)", "var(--neon-yellow)");
      return;
    }

    if (order.buildingId !== near.id) {
      Helpers.toast("GPS says this is the wrong building!", "var(--text-horror)");
      AudioSystem.playStaticGlitch(0.25);
      return;
    }

    enterBuilding(near, order);
  }

  function enterBuilding(building, order) {
    state.insideBuilding = true;
    state.currentBuilding = building;
    state.readyToDeliver = false;
    state.elevatorBusy = true;
    Player.enterBuilding();
    Helpers.toast(`Elevator to floor ${order.floor}...`);
    AudioSystem.playElevatorDing();

    setTimeout(() => {
      state.elevatorBusy = false;
      state.readyToDeliver = true;
      Helpers.subtitle(`Knock on Unit ${order.unit}. Press E to deliver.`, 3500);
      if (Math.random() < 0.2 + EventSystem.horrorLevel * 0.08) {
        EventSystem.tryTrigger(SceneAPI, Helpers.pick(["flicker", "shadow", "funny"]));
      }
    }, 900);
  }

  function completeDelivery(order) {
    AudioSystem.playKnock(2);
    if (Math.random() < 0.22 + EventSystem.horrorLevel * 0.12) {
      Player.decreaseSanity(8);
      EventSystem.tryTrigger(SceneAPI, Helpers.pick(["vanish", "shadow"]));
      setTimeout(() => {
        if (DeliverySystem.getActiveOrder()?.id === order.id) {
          DeliverySystem.deliverOrder(order.id);
          exitBuilding();
        }
      }, 1400);
      return;
    }

    DialogueSystem.show({
      speaker: order.customer,
      lines: ["...Thanks.", "Door closes before you can ask anything."],
      onDone: () => {
        DeliverySystem.deliverOrder(order.id);
        exitBuilding();
        const remaining = SHIFT_GOAL - DeliverySystem.getNightStats().delivered;
        if (remaining > 0) {
          Helpers.toast(`${remaining} more deliveries to win the shift`);
          const next = DeliverySystem.getAvailableOrders()[0];
          if (next) DeliverySystem.acceptOrder(next.id);
        }
      },
    });
  }

  function exitBuilding() {
    state.insideBuilding = false;
    state.currentBuilding = null;
    state.readyToDeliver = false;
    state.elevatorBusy = false;
    Elevator.close();
    Player.exitBuilding();
    Helpers.toast("Back on the scooter");
  }

  function draw() {
    const W = canvas.width;
    const H = canvas.height;
    const cx = state.cameraX;
    const cy = state.cameraY;

    ctx.fillStyle = state.insideBuilding ? "#0a0812" : "#060810";
    ctx.fillRect(0, 0, W, H);

    if (!state.insideBuilding) {
      ROADS.forEach((r) => {
        const horiz = r.y1 === r.y2;
        ctx.fillStyle = "#0e1622";
        if (horiz) ctx.fillRect(r.x1 - cx, r.y1 - 28 - cy, r.x2 - r.x1, 56);
        else ctx.fillRect(r.x1 - 28 - cx, r.y1 - cy, 56, r.y2 - r.y1);
      });

      Building.drawAll(ctx, cx, cy);

      const target = getTargetBuilding();
      if (target && GameSession.isPlaying()) Building.drawWaypoint(ctx, cx, cy, target);

      state.shadowFigures.forEach((s) => {
        ctx.globalAlpha = s.a;
        ctx.fillStyle = "#000";
        ctx.fillRect(s.x - cx - 6, s.y - cy - 30, 12, 35);
        ctx.globalAlpha = 1;
      });
    } else {
      ctx.fillStyle = "#111827";
      ctx.fillRect(W * 0.2 - cx * 0, H * 0.15, W * 0.6, H * 0.7);
      ctx.strokeStyle = "rgba(0,245,255,0.25)";
      ctx.strokeRect(W * 0.2, H * 0.15, W * 0.6, H * 0.7);
      ctx.fillStyle = "rgba(201,214,227,0.5)";
      ctx.font = "14px monospace";
      ctx.textAlign = "center";
      ctx.fillText("APARTMENT HALLWAY", W / 2, H * 0.2);
      if (state.elevatorBusy) {
        ctx.fillStyle = "var(--neon-cyan)";
        ctx.fillText("Elevator rising...", W / 2, H / 2);
      }
    }

    const px = W / 2;
    const py = H / 2;
    if (!state.insideBuilding) {
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
    }

    if (Player.state.flashlightOn && !state.insideBuilding) {
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

    const order = DeliverySystem.getActiveOrder();
    Building.drawMinimap(mmCtx, Player.x, Player.y, order?.buildingId ?? null);
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
    Player.decreaseSanity(4);
  }

  function freezeTime(sec = 4) {
    state.timeFrozen = true;
    state.frozenTimer = sec;
    Helpers.triggerGlitch("static-effect", sec * 1000);
  }

  const SceneAPI = { flickerLights, spawnShadow, freezeTime, handleInteract };

  return {
    init,
    reset,
    update,
    draw,
    handleInteract,
    SceneAPI,
    get timeFrozen() {
      return state.timeFrozen;
    },
  };
})();
