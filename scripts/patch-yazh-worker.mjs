import { existsSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const defaultDest = join(root, "public/games/yet-another-zombie-horror");

export function patchYazhWorkers(dest = defaultDest) {
const runtimePath = join(dest, "scripts/yazh-asset-runtime.js");
const runtime = readFileSync(runtimePath, "utf8");

const workers = ["WorkerManager-7b7965c9.js", "WorkerManager-1a3e0911.js"];

for (const file of workers) {
  const workerPath = join(dest, "assets", file);
  if (!existsSync(workerPath)) continue;

  let workerJs = readFileSync(workerPath, "utf8");
  if (!workerJs.includes("PlayNest / YAZH runtime asset path rewriter")) {
    workerJs = runtime + "\n" + workerJs.replace(/^\(function\(\)\{"use strict"\};const __pnYazhAssetBase[\s\S]*?;\s*/, "(function(){\"use strict\";");
  }

  workerJs = workerJs.replace(
    "var ve=_h;",
    "var ve=_h;try{__yazhPatchConfigs(ve);}catch(_yazh){}",
  );
  workerJs = workerJs.replace(
    "const t=ve.basePath();",
    "const t=(typeof __yazhForceAssetRoot===\"function\"?__yazhForceAssetRoot():ve.basePath());",
  );

  writeFileSync(workerPath, workerJs);
  console.log("Patched", file);
}
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  patchYazhWorkers();
}
