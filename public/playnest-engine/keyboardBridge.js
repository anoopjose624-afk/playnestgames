/**
 * Dispatches synthetic keydown events for legacy arcade games (KeyCode-based).
 */

const KEY = {
  left: 37,
  right: 39,
  up: 38,
  down: 40,
  space: 32,
  enter: 13,
  p: 80,
  a: 65,
  d: 68,
  w: 87,
  s: 83,
};

/**
 * @param {number} keyCode
 */
export function dispatchKey(keyCode) {
  try {
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        keyCode,
        which: keyCode,
        bubbles: true,
        cancelable: true,
      }),
    );
  } catch {
    /* older browsers */
  }
}

/**
 * @param {"left"|"right"|"up"|"down"|"space"|"enter"|"p"|"a"|"d"|"w"|"s"} name
 */
export function dispatchNamedKey(name) {
  const code = KEY[name];
  if (code) dispatchKey(code);
}

/**
 * Wire mobile joystick to arrow/WASD keys for arcade games.
 * @param {import('./mobileControls.js').default} controls
 * @param {{ horizontal?: boolean, vertical?: boolean, threshold?: number }} [opts]
 */
export function bridgeJoystickToKeys(controls, opts = {}) {
  const threshold = opts.threshold ?? 0.35;
  let lastH = "";
  let lastV = "";

  const tick = () => {
    const { x, y } = controls.getJoystick();
    let h = "";
    let v = "";
    if (opts.horizontal !== false) {
      if (x < -threshold) h = "left";
      else if (x > threshold) h = "right";
    }
    if (opts.vertical !== false) {
      if (y < -threshold) v = "up";
      else if (y > threshold) v = "down";
    }
    if (h && h !== lastH) dispatchNamedKey(h);
    if (v && v !== lastV) dispatchNamedKey(v);
    lastH = h;
    lastV = v;
  };

  controls.options.onJoystick = tick;
}

/**
 * @param {import('./mobileControls.js').default} controls
 * @param {string} keyName
 */
export function bridgeActionToKey(controls, keyName = "space") {
  const prev = controls.options.onAction;
  controls.options.onAction = () => {
    dispatchNamedKey(keyName);
    prev?.();
  };
}

export { KEY };
