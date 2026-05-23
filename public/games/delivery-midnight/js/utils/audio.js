// Procedural audio via Web Audio API (no external files)
const AudioSystem = (() => {
  let ctx = null;
  let masterGain = null;
  let musicGain = null;
  let sfxGain = null;
  let rainSource = null;
  let ambientNodes = [];

  function init() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = ctx.createGain();
    masterGain.gain.value = 0.8;
    masterGain.connect(ctx.destination);
    musicGain = ctx.createGain();
    musicGain.gain.value = 0.6;
    musicGain.connect(masterGain);
    sfxGain = ctx.createGain();
    sfxGain.gain.value = 0.8;
    sfxGain.connect(masterGain);
  }

  function setVolume(type, val) {
    if (!ctx) return;
    if (type === "master") masterGain.gain.setTargetAtTime(val, ctx.currentTime, 0.1);
    if (type === "music") musicGain.gain.setTargetAtTime(val, ctx.currentTime, 0.1);
    if (type === "sfx") sfxGain.gain.setTargetAtTime(val, ctx.currentTime, 0.1);
  }

  function startRain(intensity = 0.35) {
    if (!ctx) return;
    stopRain();
    const bufSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
    rainSource = ctx.createBufferSource();
    rainSource.buffer = buffer;
    rainSource.loop = true;
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 2800;
    const gainNode = ctx.createGain();
    gainNode.gain.value = intensity;
    rainSource.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(musicGain);
    rainSource.start();
  }

  function stopRain() {
    if (rainSource) {
      try {
        rainSource.stop();
      } catch (e) {}
      rainSource = null;
    }
  }

  function startAmbientDrone(horrorLevel = 0) {
    if (!ctx) return;
    stopAmbientDrone();
    [55, 82.5, 110].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      osc.type = i === 0 ? "sawtooth" : "sine";
      osc.frequency.value = freq;
      gainNode.gain.value = 0.04 + horrorLevel * 0.02;
      osc.connect(gainNode);
      gainNode.connect(musicGain);
      osc.start();
      ambientNodes.push(osc);
    });
  }

  function stopAmbientDrone() {
    ambientNodes.forEach((n) => {
      try {
        n.stop();
      } catch (e) {}
    });
    ambientNodes = [];
  }

  function playClick() {
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.frequency.value = 800;
    g.gain.setValueAtTime(0.08, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    osc.connect(g);
    g.connect(sfxGain);
    osc.start();
    osc.stop(ctx.currentTime + 0.06);
  }

  function playPhoneNotification() {
    if (!ctx) return;
    [880, 1108, 1318].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0, ctx.currentTime + i * 0.1);
      g.gain.linearRampToValueAtTime(0.15, ctx.currentTime + i * 0.1 + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.3);
      osc.connect(g);
      g.connect(sfxGain);
      osc.start(ctx.currentTime + i * 0.1);
      osc.stop(ctx.currentTime + i * 0.1 + 0.35);
    });
  }

  function playElevatorDing() {
    if (!ctx) return;
    [1046, 1318].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0.2, ctx.currentTime + i * 0.15);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.15 + 0.8);
      osc.connect(g);
      g.connect(sfxGain);
      osc.start(ctx.currentTime + i * 0.15);
      osc.stop(ctx.currentTime + i * 0.15 + 0.85);
    });
  }

  function playKnock(count = 3) {
    if (!ctx) return;
    for (let i = 0; i < count; i++) {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.frequency.value = 180;
      g.gain.setValueAtTime(0.3, ctx.currentTime + i * 0.22);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.22 + 0.1);
      osc.connect(g);
      g.connect(sfxGain);
      osc.start(ctx.currentTime + i * 0.22);
      osc.stop(ctx.currentTime + i * 0.22 + 0.12);
    }
  }

  function playStaticGlitch(duration = 0.4) {
    if (!ctx) return;
    const bufSize = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufSize; i++) data[i] = (Math.random() * 2 - 1) * (Math.random() > 0.6 ? 1 : 0.1);
    const src = ctx.createBufferSource();
    const g = ctx.createGain();
    src.buffer = buffer;
    g.gain.setValueAtTime(0.25, ctx.currentTime);
    g.gain.linearRampToValueAtTime(0, ctx.currentTime + duration);
    src.connect(g);
    g.connect(sfxGain);
    src.start();
    src.stop(ctx.currentTime + duration);
  }

  function playDelivered() {
    if (!ctx) return;
    [523, 659, 784].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.frequency.value = freq;
      g.gain.setValueAtTime(0.15, ctx.currentTime + i * 0.08);
      g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.4);
      osc.connect(g);
      g.connect(sfxGain);
      osc.start(ctx.currentTime + i * 0.08);
      osc.stop(ctx.currentTime + i * 0.08 + 0.45);
    });
  }

  function playHorrorSting() {
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(55, ctx.currentTime + 1.2);
    g.gain.setValueAtTime(0.2, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
    osc.connect(g);
    g.connect(sfxGain);
    osc.start();
    osc.stop(ctx.currentTime + 1.25);
  }

  function playFootstep() {
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.frequency.value = 70;
    g.gain.setValueAtTime(0.12, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.connect(g);
    g.connect(sfxGain);
    osc.start();
    osc.stop(ctx.currentTime + 0.12);
  }

  return {
    init,
    setVolume,
    startRain,
    stopRain,
    startAmbientDrone,
    stopAmbientDrone,
    playClick,
    playPhoneNotification,
    playElevatorDing,
    playKnock,
    playStaticGlitch,
    playDelivered,
    playHorrorSting,
    playFootstep,
  };
})();
