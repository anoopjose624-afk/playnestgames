const Elevator = (() => {
  const state = { isOpen: false, currentFloor: 1, maxFloor: 8, isMoving: false };

  function open(building) {
    state.isOpen = true;
    state.currentFloor = 1;
    state.maxFloor = building?.floors || 8;
    renderPanel();
    AudioSystem.playElevatorDing();
    Helpers.toast("Elevator — select a floor");
  }

  function close() {
    state.isOpen = false;
    document.getElementById("elevator-panel")?.remove();
  }

  function renderPanel() {
    document.getElementById("elevator-panel")?.remove();
    const panel = document.createElement("div");
    panel.id = "elevator-panel";
    panel.style.cssText =
      "position:fixed;right:20px;top:50%;transform:translateY(-50%);background:#0a0f1a;border:1px solid rgba(0,245,255,0.3);padding:1rem;z-index:40;width:130px;font-family:monospace;color:#c9d6e3;";
    const display = document.createElement("div");
    display.id = "elev-display";
    display.style.cssText = "text-align:center;font-size:1.4rem;color:#00f5ff;margin-bottom:0.5rem;";
    display.textContent = state.currentFloor;
    panel.appendChild(display);
    for (let f = state.maxFloor; f >= 1; f--) {
      const btn = document.createElement("button");
      btn.textContent = f;
      btn.style.cssText = "width:100%;margin:3px 0;padding:4px;background:#111;border:1px solid #333;color:#fff;cursor:pointer;";
      btn.onclick = () => goToFloor(f, display);
      panel.appendChild(btn);
    }
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "EXIT";
    closeBtn.style.cssText = "width:100%;margin-top:8px;padding:4px;background:transparent;border:1px solid #f44;color:#f88;cursor:pointer;";
    closeBtn.onclick = close;
    panel.appendChild(closeBtn);
    document.getElementById("screen-game").appendChild(panel);
  }

  function goToFloor(floor, display) {
    if (state.isMoving) return;
    state.isMoving = true;
    let cur = state.currentFloor;
    const dir = floor > cur ? 1 : -1;
    const interval = setInterval(() => {
      cur += dir;
      if (EventSystem.horrorLevel >= 1 && Math.random() < 0.2) {
        display.textContent = Helpers.randInt(0, 99);
        display.style.color = "#f44";
        setTimeout(() => {
          display.style.color = "#0ff";
          display.textContent = cur;
        }, 60);
      } else {
        display.textContent = cur;
      }
      if (cur === floor) {
        clearInterval(interval);
        state.currentFloor = floor;
        state.isMoving = false;
        AudioSystem.playElevatorDing();
        Helpers.toast(`Floor ${floor}`);
        const active = DeliverySystem.getActiveOrder();
        if (active && active.floor === floor) {
          Helpers.subtitle(`Unit ${active.unit} should be on this floor.`);
          document.getElementById("interact-prompt").classList.remove("hidden");
          document.getElementById("interact-text").textContent = `Deliver to Unit ${active.unit}`;
        }
        if (Math.random() < 0.25) EventSystem.tryTrigger(MainScene.SceneAPI, "flicker");
      }
    }, 180);
  }

  return { open, close, get isOpen() { return state.isOpen; }, get currentFloor() { return state.currentFloor; } };
})();
