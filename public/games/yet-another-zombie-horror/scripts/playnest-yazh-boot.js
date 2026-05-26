/**
 * PlayNest embed bridge for Yet Another Zombie Horror.
 */
(function () {
  var gameRoot = window.location.pathname.replace(/\/[^/]*$/, "");
  if (!gameRoot || gameRoot.indexOf("yet-another-zombie-horror") === -1) {
    gameRoot = "/games/yet-another-zombie-horror";
  }
  window.__YAZH_BASE__ = gameRoot;

  var baseEl = document.querySelector("base");
  if (baseEl) baseEl.href = gameRoot + "/";

  function notifyParent(type) {
    try {
      if (window.parent && window.parent !== window) {
        window.parent.postMessage({ source: "yazh-game", type: type }, "*");
      }
    } catch (e) {}
  }

  notifyParent("SHELL");

  var readySent = false;
  function notifyReady() {
    if (readySent) return;
    readySent = true;
    notifyParent("READY");
  }

  function watchForGameUi() {
    var ticks = 0;
    var timer = setInterval(function () {
      ticks += 1;
      var canvas = document.querySelector("canvas");
      if (canvas && (canvas.width > 0 || canvas.clientWidth > 0)) {
        notifyReady();
        clearInterval(timer);
        return;
      }
      if (ticks > 900) {
        notifyReady();
        clearInterval(timer);
      }
    }, 100);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", watchForGameUi);
  } else {
    watchForGameUi();
  }

  var params = new URLSearchParams(window.location.search);
  var q = params.get("quality");
  if (q === "low" || q === "medium" || q === "high") {
    window.__PLAYNEST_QUALITY = q;
  }
  var coarse =
    window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  var narrow = window.innerWidth < 768;
  if (!q && (coarse || narrow)) window.__PLAYNEST_QUALITY = "low";

  window.addEventListener("message", function (event) {
    var data = event.data;
    if (!data || data.source !== "playnest-parent") return;
    if (data.type === "PAUSE") document.body.classList.add("pn-yazh-paused");
    if (data.type === "RESUME") document.body.classList.remove("pn-yazh-paused");
  });
})();
