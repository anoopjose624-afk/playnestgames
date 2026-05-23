const EventSystem = (() => {
  let horrorLevel = 0;
  let cooldown = 0;
  const EVENTS = [
    {
      id: "flicker",
      min: 0,
      fn: (scene) => {
        scene?.flickerLights?.(3);
        Helpers.subtitle("The hallway lights flicker. Must be old wiring.");
      },
    },
    {
      id: "gps",
      min: 0,
      fn: () => {
        PhoneSystem.addMessage({ from: "GPS", text: "Route updated. Do not stop.", creepy: true });
        Helpers.toast("GPS recalculated...", "var(--text-horror)");
        AudioSystem.playStaticGlitch(0.4);
      },
    },
    {
      id: "shadow",
      min: 1,
      fn: (scene) => {
        scene?.spawnShadow?.();
        Helpers.subtitle("Something moves at the end of the hall. Gone when you look.");
      },
    },
    {
      id: "vanish",
      min: 2,
      fn: () => {
        AudioSystem.playKnock(3);
        Helpers.subtitle("You knock. Footsteps. Then silence.");
        setTimeout(() => {
          AudioSystem.playHorrorSting();
          Helpers.triggerGlitch("red-flash", 400);
          Helpers.subtitle("The food is already plated inside. Like they knew.", 2500);
        }, 1800);
      },
    },
    {
      id: "funny",
      min: 0,
      fn: () => {
        Helpers.subtitle('"I ordered pepperoni. This has anchovies. I am calling your manager."');
      },
    },
  ];

  function tryTrigger(scene, forcedId = null) {
    if (cooldown > 0) return;
    let evt = forcedId ? EVENTS.find((e) => e.id === forcedId) : null;
    if (!evt) {
      const eligible = EVENTS.filter((e) => e.min <= horrorLevel);
      evt = Helpers.pick(eligible);
    }
    if (!evt) return;
    cooldown = 25;
    evt.fn(scene);
  }

  function tick(dt) {
    if (cooldown > 0) cooldown -= dt;
  }

  function setNight(night) {
    horrorLevel = Helpers.clamp(night - 1, 0, 4);
    AudioSystem.startAmbientDrone(horrorLevel);
  }

  return { tryTrigger, tick, setNight, get horrorLevel() { return horrorLevel; } };
})();
