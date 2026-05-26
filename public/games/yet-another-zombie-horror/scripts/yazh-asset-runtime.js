/**
 * PlayNest / YAZH runtime asset path rewriter.
 * Must run before game bundles and inside the Web Worker.
 */
(function (global) {
  "use strict";

  var ROOT = "/games/yet-another-zombie-horror";

  try {
    var loc = global.location;
    if (loc && loc.pathname) {
      var p = loc.pathname.replace(/\/[^/]*$/, "");
      if (/\/assets$/i.test(p)) p = p.slice(0, -7);
      if (p && p.indexOf("yet-another-zombie-horror") !== -1) ROOT = p;
    }
  } catch (e) {}

  global.__YAZH_BASE__ = ROOT;
  var ASSET_ROOT = ROOT + "/assets";

  global.__YAZH_ASSET_ROOT = ASSET_ROOT;
  global.__PLAYNEST_YAZH_ASSET_ROOT = ASSET_ROOT;

  function fixUrl(url) {
    if (url == null) return url;
    var s = String(url);
    if (s.indexOf("/assets/") === 0) return ROOT + s;
    if (s === "/assets") return ASSET_ROOT;
    if (s.indexOf("assets/") === 0) return ROOT + "/" + s;
    return s;
  }

  function fixFetchInput(input) {
    if (typeof input === "string") return fixUrl(input);
    try {
      if (typeof URL !== "undefined" && input instanceof URL) {
        return new URL(fixUrl(input.href));
      }
    } catch (e) {}
    try {
      if (typeof Request !== "undefined" && input instanceof Request) {
        return new Request(fixUrl(input.url), input);
      }
    } catch (e) {}
    return input;
  }

  if (typeof global.fetch === "function") {
    var nativeFetch = global.fetch.bind(global);
    global.fetch = function (input, init) {
      return nativeFetch(fixFetchInput(input), init);
    };
  }

  if (global.XMLHttpRequest) {
    var xhrOpen = global.XMLHttpRequest.prototype.open;
    global.XMLHttpRequest.prototype.open = function (method, url) {
      arguments[1] = fixUrl(url);
      return xhrOpen.apply(this, arguments);
    };
  }

  if (global.Image) {
    var desc = Object.getOwnPropertyDescriptor(global.Image.prototype, "src");
    if (desc && desc.set) {
      Object.defineProperty(global.Image.prototype, "src", {
        configurable: true,
        enumerable: true,
        get: desc.get,
        set: function (v) {
          desc.set.call(this, fixUrl(v));
        },
      });
    }
  }

  if (global.URL) {
    var NativeURL = global.URL;
    function PatchedURL(url, base) {
      if (arguments.length === 0) return new NativeURL();
      if (arguments.length === 1) return new NativeURL(fixUrl(url));
      return new NativeURL(fixUrl(url), base);
    }
    PatchedURL.prototype = NativeURL.prototype;
    PatchedURL.createObjectURL = NativeURL.createObjectURL.bind(NativeURL);
    PatchedURL.revokeObjectURL = NativeURL.revokeObjectURL.bind(NativeURL);
    global.URL = PatchedURL;
  }

  global.__yazhFixUrl = fixUrl;
  global.__yazhPatchConfigs = function (configs) {
    if (!configs || typeof configs.basePath !== "function") return;
    configs.basePath = function () {
      return ASSET_ROOT;
    };
  };

  global.__yazhForceAssetRoot = function () {
    return ASSET_ROOT;
  };
})(typeof self !== "undefined" ? self : window);
