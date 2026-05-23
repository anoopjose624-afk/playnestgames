const PhoneSystem = (() => {
  let isOpen = false;
  let messages = [];

  function init() {
    document.querySelectorAll(".ptab").forEach((tab) => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".ptab").forEach((t) => t.classList.remove("active"));
        document.querySelectorAll(".phone-panel").forEach((p) => p.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById(`phone-${tab.dataset.tab}`)?.classList.add("active");
        if (tab.dataset.tab === "orders") refreshOrders();
        if (tab.dataset.tab === "messages") refreshMessages();
        AudioSystem.playClick();
      });
    });
    document.getElementById("phone-overlay")?.addEventListener("click", (e) => {
      if (e.target.id === "phone-overlay") toggle(false);
    });
    addMessage({
      from: "NIGHT DELIVERY CO.",
      text: "Shift starting. Complete deliveries. Be professional. Don't ask questions.",
    });
  }

  function toggle(force = null) {
    isOpen = force !== null ? force : !isOpen;
    document.getElementById("phone-overlay").classList.toggle("hidden", !isOpen);
    if (isOpen) refreshOrders();
  }

  function refreshOrders() {
    const list = document.getElementById("order-list");
    if (!list) return;
    list.innerHTML = "";
    const available = DeliverySystem.getAvailableOrders();
    const active = DeliverySystem.getActiveOrder();
    if (!available.length && !active) {
      list.innerHTML = '<p style="color:var(--text-dim);font-size:0.8rem">No orders yet...</p>';
      return;
    }
    if (active) {
      const el = document.createElement("div");
      el.className = "order-item accepted";
      el.innerHTML = `<div class="oi-name">[ACTIVE] ${active.customer}</div><div class="oi-address">${active.address}</div>`;
      list.appendChild(el);
    }
    available.forEach((order) => {
      const el = document.createElement("div");
      el.className = "order-item";
      el.innerHTML = `<div class="oi-pay">$${order.payment}</div><div class="oi-name">${order.customer}</div><div class="oi-address">${order.address}</div><div class="oi-food">${order.food}</div>`;
      el.addEventListener("click", () => {
        if (DeliverySystem.acceptOrder(order.id)) toggle(false);
      });
      list.appendChild(el);
    });
  }

  function addMessage({ from, text, creepy = false }) {
    messages.unshift({ from, text, creepy });
    if (!isOpen) {
      AudioSystem.playPhoneNotification();
      Helpers.toast(`New message from ${from}`);
    }
    refreshMessages();
  }

  function refreshMessages() {
    const list = document.getElementById("message-list");
    if (!list) return;
    list.innerHTML = messages
      .map(
        (m) =>
          `<div class="msg-item${m.creepy ? " creepy" : ""}"><div class="msg-from">${m.from}</div>${m.text}</div>`,
      )
      .join("");
  }

  function updateTime(str) {
    const el = document.getElementById("phone-time");
    if (el) el.textContent = str;
  }

  return { init, toggle, addMessage, refreshOrders, updateTime, get isOpen() { return isOpen; } };
})();
