const DeliverySystem = (() => {
  const STATUS = { AVAILABLE: "available", ACTIVE: "active", DELIVERED: "delivered", FAILED: "failed" };
  const NAMES = ["Mr. K", "Room 404", "Mrs. Chen", "Night Owl", "???", "The Resident"];
  const FOODS = ["Large Pizza", "Pad Thai", "Chicken Burger", "Ramen Bowl", "7x Boiled Eggs"];
  const ADDRESSES = ["14 Crescent St, Apt 7B", "88 Harbor Rd", "Floor 13 (maybe)", "55 Neon Blvd"];

  let orders = [];
  let activeOrderId = null;
  let nightDeliveryCount = 0;
  let totalEarnings = 0;
  let orderIdCounter = 1;

  function generateOrder(horrorLevel = 0) {
    const creepy = Math.random() < horrorLevel * 0.25;
    const order = {
      id: orderIdCounter++,
      status: STATUS.AVAILABLE,
      customer: creepy ? "???" : Helpers.pick(NAMES),
      food: creepy ? "1x Soup. You know the one." : Helpers.pick(FOODS),
      address: creepy ? Helpers.pick(["Floor 13", "0 Null Lane"]) : Helpers.pick(ADDRESSES),
      buildingId: Helpers.randInt(1, 3),
      floor: Helpers.randInt(2, creepy ? 12 : 8),
      unit: Helpers.randInt(1, 20),
      payment: parseFloat(Helpers.rand(5, 14).toFixed(2)),
      timeLimit: 300,
      timeRemaining: 300,
      isWeird: creepy,
    };
    orders.push(order);
    return order;
  }

  function acceptOrder(orderId) {
    if (activeOrderId !== null) {
      Helpers.toast("Finish current delivery first!", "var(--text-horror)");
      return false;
    }
    const order = orders.find((o) => o.id === orderId);
    if (!order || order.status !== STATUS.AVAILABLE) return false;
    order.status = STATUS.ACTIVE;
    activeOrderId = orderId;
    document.getElementById("order-customer").textContent = order.customer;
    document.getElementById("order-address").textContent = order.address;
    document.getElementById("order-items").textContent = order.food;
    document.getElementById("order-card").classList.remove("hidden");
    AudioSystem.playPhoneNotification();
    Helpers.toast(`Order accepted: ${order.address}`);
    return true;
  }

  function deliverOrder(orderId) {
    const order = orders.find((o) => o.id === orderId);
    if (!order || order.status !== STATUS.ACTIVE) return false;
    order.status = STATUS.DELIVERED;
    activeOrderId = null;
    nightDeliveryCount++;
    totalEarnings += order.payment;
    document.getElementById("order-card").classList.add("hidden");
    AudioSystem.playDelivered();
    Helpers.toast(`Delivered! +$${order.payment.toFixed(2)}`);
    return true;
  }

  function failOrder(orderId, reason = "Too slow") {
    const order = orders.find((o) => o.id === orderId);
    if (!order) return;
    order.status = STATUS.FAILED;
    if (activeOrderId === orderId) activeOrderId = null;
    document.getElementById("order-card").classList.add("hidden");
    Helpers.toast(`Failed: ${reason}`, "var(--text-horror)");
  }

  function tick(dt) {
    if (!activeOrderId) return;
    const order = orders.find((o) => o.id === activeOrderId);
    if (!order) return;
    order.timeRemaining -= dt;
    const pct = Helpers.clamp((order.timeRemaining / order.timeLimit) * 100, 0, 100);
    const fill = document.getElementById("order-timer-fill");
    if (fill) {
      fill.style.width = `${pct}%`;
      fill.style.backgroundColor = pct < 30 ? "var(--text-horror)" : "var(--neon-yellow)";
    }
    if (order.timeRemaining <= 0) failOrder(order.id);
  }

  return {
    generateOrder,
    acceptOrder,
    deliverOrder,
    failOrder,
    tick,
    getAvailableOrders: () => orders.filter((o) => o.status === STATUS.AVAILABLE),
    getActiveOrder: () => (activeOrderId ? orders.find((o) => o.id === activeOrderId) : null),
    resetNight: () => {
      orders = [];
      activeOrderId = null;
      nightDeliveryCount = 0;
    },
    getNightStats: () => ({
      delivered: nightDeliveryCount,
      earnings: totalEarnings,
      failed: orders.filter((o) => o.status === STATUS.FAILED).length,
    }),
    STATUS,
  };
})();
