const DialogueSystem = (() => {
  let isOpen = false;
  let lines = [];
  let index = 0;
  let onDone = null;

  function show(config) {
    if (isOpen) return;
    isOpen = true;
    lines = config.lines || [];
    index = 0;
    onDone = config.onDone || null;
    document.getElementById("dialogue-box").classList.remove("hidden");
    document.getElementById("dialogue-speaker").textContent = config.speaker || "UNKNOWN";
    document.addEventListener("keydown", onKey);
    displayLine();
  }

  function displayLine() {
    if (index >= lines.length) {
      close();
      return;
    }
    document.getElementById("dialogue-text").textContent = lines[index];
  }

  function onKey(e) {
    if (["e", "E", " ", "Enter"].includes(e.key)) {
      e.preventDefault();
      index++;
      AudioSystem.playClick();
      displayLine();
    }
  }

  function close() {
    isOpen = false;
    document.getElementById("dialogue-box").classList.add("hidden");
    document.removeEventListener("keydown", onKey);
    if (onDone) onDone();
  }

  return { show, get isOpen() { return isOpen; } };
})();
