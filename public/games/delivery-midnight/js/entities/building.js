const Building = (() => {
  const BUILDINGS = [
    { id: 1, name: "Crescent Tower", x: 250, y: 200, width: 80, height: 80, floors: 8, neonColor: "#00f5ff", entranceX: 290, entranceY: 280 },
    { id: 2, name: "Harbor Heights", x: 500, y: 150, width: 90, height: 100, floors: 10, neonColor: "#ff2d78", entranceX: 545, entranceY: 250 },
    { id: 3, name: "Old Park Residences", x: 700, y: 300, width: 70, height: 70, floors: 6, neonColor: "#39ff14", entranceX: 735, entranceY: 370 },
  ];

  function drawAll(ctx, camX, camY) {
    BUILDINGS.forEach((b) => {
      const sx = b.x - camX;
      const sy = b.y - camY;
      ctx.fillStyle = "#0d1a30";
      ctx.fillRect(sx, sy, b.width, b.height);
      ctx.strokeStyle = b.neonColor;
      ctx.lineWidth = 2;
      ctx.strokeRect(sx, sy, b.width, b.height);
      ctx.fillStyle = b.neonColor;
      ctx.font = "10px monospace";
      ctx.textAlign = "center";
      ctx.fillText(b.name, sx + b.width / 2, sy - 6);
      const dx = b.entranceX - camX;
      const dy = b.entranceY - camY;
      ctx.fillStyle = "#050508";
      ctx.fillRect(dx - 8, dy - 12, 16, 18);
      ctx.strokeStyle = b.neonColor;
      ctx.strokeRect(dx - 8, dy - 12, 16, 18);
    });
  }

  function drawMinimap(ctx, px, py) {
    ctx.fillStyle = "#080a0f";
    ctx.fillRect(0, 0, 150, 150);
    BUILDINGS.forEach((b) => {
      const mx = 75 + (b.x - px) * 0.12;
      const my = 75 + (b.y - py) * 0.12;
      ctx.fillStyle = "rgba(0,245,255,0.2)";
      ctx.fillRect(mx, my, b.width * 0.12, b.height * 0.12);
    });
    ctx.fillStyle = "#f5e642";
    ctx.beginPath();
    ctx.arc(75, 75, 3, 0, Math.PI * 2);
    ctx.fill();
  }

  function getNearestEntrance(px, py, range = 50) {
    let best = null;
    let bestD = Infinity;
    BUILDINGS.forEach((b) => {
      const d = Helpers.dist2D(px, py, b.entranceX, b.entranceY);
      if (d < range && d < bestD) {
        best = b;
        bestD = d;
      }
    });
    return best;
  }

  function getById(id) {
    return BUILDINGS.find((b) => b.id === id);
  }

  return { drawAll, drawMinimap, getNearestEntrance, getById, BUILDINGS };
})();
