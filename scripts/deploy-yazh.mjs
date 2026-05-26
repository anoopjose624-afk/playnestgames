import { cpSync, existsSync, readFileSync, rmSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { patchYazhWorkers } from "./patch-yazh-worker.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "public/games/YetAnotherZombieHorror-main/dist");
const dest = join(root, "public/games/yet-another-zombie-horror");
const license = join(root, "public/games/YetAnotherZombieHorror-main/LICENSE");
const scriptsSrc = join(root, "public/games/yet-another-zombie-horror/scripts");
const runtimeSrc = join(scriptsSrc, "yazh-asset-runtime.js");
const bootSrc = join(scriptsSrc, "playnest-yazh-boot.js");
const indexPath = join(dest, "index.html");

const BOOT_SCRIPT = `/**
 * PlayNest embed bridge for Yet Another Zombie Horror.
 */
(function () {
  var params = new URLSearchParams(window.location.search);
  var q = params.get("quality");
  if (q === "low" || q === "medium" || q === "high") {
    window.__PLAYNEST_QUALITY = q;
  }
  var coarse = window.matchMedia && window.matchMedia("(pointer: coarse)").matches;
  var narrow = window.innerWidth < 768;
  if (!q && (coarse || narrow)) {
    window.__PLAYNEST_QUALITY = "low";
  }
  window.addEventListener("message", function (event) {
    var data = event.data;
    if (!data || data.source !== "playnest-parent") return;
    if (data.type === "PAUSE") document.body.classList.add("pn-yazh-paused");
    if (data.type === "RESUME") document.body.classList.remove("pn-yazh-paused");
  });
})();
`;

if (!existsSync(src)) {
  console.error("Missing dist. Run build:web in YetAnotherZombieHorror-main first.");
  process.exit(1);
}

const runtimeBody = existsSync(runtimeSrc) ? readFileSync(runtimeSrc, "utf8") : "";
const bootBody = existsSync(bootSrc) ? readFileSync(bootSrc, "utf8") : BOOT_SCRIPT;

if (existsSync(dest)) rmSync(dest, { recursive: true, force: true });
cpSync(src, dest, { recursive: true });
cpSync(license, join(dest, "LICENSE"));

if (runtimeBody) writeFileSync(join(dest, "scripts/yazh-asset-runtime.js"), runtimeBody);
writeFileSync(join(dest, "scripts/playnest-yazh-boot.js"), bootBody);

let html = readFileSync(indexPath, "utf8");
if (!html.includes("yazh-asset-runtime.js")) {
  html = html.replace(
    '<link rel="manifest" href="./manifest.json" />',
    '<link rel="stylesheet" type="text/css" href="./styles/yazh-mobile.css" />\n\n    <link rel="manifest" href="./manifest.json" />\n    <script type="text/javascript" src="./scripts/yazh-asset-runtime.js"></script>\n    <script type="text/javascript" src="./scripts/playnest-yazh-boot.js"></script>',
  );
  writeFileSync(indexPath, html);
}

patchYazhWorkers(dest);

console.log("Deployed YAZH to public/games/yet-another-zombie-horror");
