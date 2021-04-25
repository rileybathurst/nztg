// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2FQzm":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "c75227167347e57df55b258c72166a09";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, /*: {|[string]: boolean|}*/
acceptedAssets, /*: {|[string]: boolean|}*/
/*: {|[string]: boolean|}*/
assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) /*: {data: string, ...}*/
  {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = /*: HMRMessage*/
    JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = /*: string*/
      links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, /*: ParcelRequire*/
asset) /*:  HMRAsset*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, /*: ParcelRequire*/
id, /*: ParcelRequire*/
/*: string*/
depsByBundle) /*: ?{ [string]: { [string]: string } }*/
{
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, /*: ParcelRequire*/
id) /*: string*/
{
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"5XPnV":[function(require,module,exports) {
var _dataJson = require('./data.json');
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _dataJsonDefault = _parcelHelpers.interopDefault(_dataJson);
var _lozad = require('lozad');
var _lozadDefault = _parcelHelpers.interopDefault(_lozad);
// console.log(data.testimonials[0]);
// fill testimonials with JSON data
for (var j = 0; j < _dataJsonDefault.default.testimonials.length; j++) {
  var myTestimonal = document.createElement('article');
  var myBackground = document.createElement('div');
  myBackground.setAttribute("class", "skewer");
  myTestimonal.setAttribute("class", "testimonial io-push");
  var myPara1 = document.createElement('p');
  var schemaReview = document.createElement('span');
  schemaReview.setAttribute("itemprop", "review");
  var myH3 = document.createElement('quote');
  schemaReview.textContent = _dataJsonDefault.default.testimonials[j].test;
  myH3.textContent = _dataJsonDefault.default.testimonials[j].author;
  myTestimonal.appendChild(myBackground);
  myTestimonal.appendChild(myPara1);
  myPara1.appendChild(schemaReview);
  myTestimonal.appendChild(myH3);
  document.getElementById('testimonials').appendChild(myTestimonal);
}
// Large margins when IO comes into play
if (('IntersectionObserver' in window) && ('IntersectionObserverEntry' in window) && ('intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
  let iopush = document.querySelectorAll('.io-push');
  var numSteps = 20.0;
  var pusher;
  // naming choice is too close to push
  var prevRatio = 0.0;
  var mT = "ratioem";
  // Set things up.
  window.addEventListener("load", function (event) {
    pusher = document.querySelectorAll(".io-push");
    createObserver();
  }, false);
  function createObserver() {
    var observer;
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList()
    };
    observer = new IntersectionObserver(handleIntersect, options);
    pusher.forEach(pushers => {
      observer.observe(pushers);
    });
  }
  function buildThresholdList() {
    var thresholds = [];
    var numSteps = 100;
    for (var i = 1.0; i <= numSteps; i++) {
      var ratio = i / numSteps;
      thresholds.push(ratio);
    }
    thresholds.push(0);
    return thresholds;
  }
  function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
      entry.target.style.marginTop = mT.replace("ratio", entry.intersectionRatio * 5);
      prevRatio = entry.intersectionRatio;
    });
  }
}
// Parallax images to add to the drop down effects
if (('IntersectionObserver' in window) && ('IntersectionObserverEntry' in window) && ('intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
  let ioparallax = document.querySelectorAll('.io-parallax');
  // doesnt seem used can I skip it
  var paraSteps = 20.0;
  var para;
  // naming choice is too close to push
  var paraRatio = 0.0;
  var pT = "translateY(pRatioem)";
  // Set things up.
  window.addEventListener("load", function (event) {
    para = document.querySelectorAll(".io-parallax");
    paraObserver();
  }, false);
  function paraObserver() {
    var pObserver;
    var pOptions = {
      root: null,
      rootMargin: "0px",
      threshold: paraThresholdList()
    };
    pObserver = new IntersectionObserver(pHandleIntersect, pOptions);
    para.forEach(paras => {
      pObserver.observe(paras);
    });
  }
  function paraThresholdList() {
    var paraThresholds = [];
    var paraSteps = 100;
    for (var i = 1.0; i <= paraSteps; i++) {
      var ratio = i / paraSteps;
      paraThresholds.push(ratio);
    }
    paraThresholds.push(0);
    return paraThresholds;
  }
  function pHandleIntersect(pEntries, pObserver) {
    pEntries.forEach(function (entry) {
      entry.target.style.webkitTransform = pT.replace("pRatio", entry.intersectionRatio * 5);
      paraRatio = entry.intersectionRatio;
    });
  }
}
const observer = _lozadDefault.default();
// lazy loads elements with default selector as '.lozad'
observer.observe();

},{"./data.json":"2JbJW","lozad":"m392M","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2JbJW":[function(require,module,exports) {
module.exports = JSON.parse("{\"testimonials\":[{\"test\":\"Dear Richard Just a very quick note to let you know how much I enjoyed the tour of South Island with you! It seems like a very long time ago now and I can hardly believe I was lucky enough to come, but what an opportunity! As I’m sure you know, all of our group had a fantastic time and really appreciated your expert skills as tour guide, and your good humoured company. I will certainly be recommending you to clients. Having talked endlessly about NZ since I got home, my husband is feeling suitably left out, so we will definitely plan to visit again together. Would love to make it for the rugby world cup, but will have to see how the finances work out. Will be in touch when we have a plan. Once again, thank you for making it such a great trip. Best regards to you and Heather.\",\"author\":\"Alison Bryson Qantas Achievers Trip 2010\"},{\"test\":\"Richard, thank you for everything you have done for us during our trip, we greatly appreciate it. It has been a pleasure to meet you. Wishing you all the very best & many more happy tours!\",\"author\":\"Miles & Pauline\"},{\"test\":\"Dear Richard, Thank you for a great trip! All the UAE journalists in the group had a good time and many remarked that it was one of the best press trips they’ve been on.You made the difference. Some has already written wonderful stories and everyone is saying how much they want to go back to South Island (myself included)!\",\"author\":\"Valerie Tan Dubai, UAE\"},{\"test\":\"Richard, thank you for a wonderful tour you are an excellent driver & guide and I learnt so much from your informative commentary. Thank you too for helping me with my rather large suit case, Lol! Best wishes\",\"author\":\"Sue\"}]}");
},{}],"m392M":[function(require,module,exports) {
var define;
/*! lozad.js - v1.16.0 - 2020-09-06
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT*/
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.lozad = e();
})(this, function () {
  "use strict";
  /**
  * Detect IE browser
  * @const {boolean}
  * @private
  */
  var g = "undefined" != typeof document && document.documentMode, f = {
    rootMargin: "0px",
    threshold: 0,
    load: function (t) {
      if ("picture" === t.nodeName.toLowerCase()) {
        var e = t.querySelector("img"), r = !1;
        (null === e && (e = document.createElement("img"), r = !0), g && t.getAttribute("data-iesrc") && (e.src = t.getAttribute("data-iesrc")), t.getAttribute("data-alt") && (e.alt = t.getAttribute("data-alt")), r && t.append(e));
      }
      if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) {
        for (var a = t.children, o = void 0, i = 0; i <= a.length - 1; i++) (o = a[i].getAttribute("data-src")) && (a[i].src = o);
        t.load();
      }
      (t.getAttribute("data-poster") && (t.poster = t.getAttribute("data-poster")), t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")), t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset")));
      var n = ",";
      if ((t.getAttribute("data-background-delimiter") && (n = t.getAttribute("data-background-delimiter")), t.getAttribute("data-background-image"))) t.style.backgroundImage = "url('" + t.getAttribute("data-background-image").split(n).join("'),url('") + "')"; else if (t.getAttribute("data-background-image-set")) {
        var d = t.getAttribute("data-background-image-set").split(n), u = d[0].substr(0, d[0].indexOf(" ")) || d[0];
        // Substring before ... 1x
        (u = -1 === u.indexOf("url(") ? "url(" + u + ")" : u, 1 === d.length ? t.style.backgroundImage = u : t.setAttribute("style", (t.getAttribute("style") || "") + "background-image: " + u + "; background-image: -webkit-image-set(" + d + "); background-image: image-set(" + d + ")"));
      }
      t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"));
    },
    loaded: function () {}
  };
  function A(t) {
    t.setAttribute("data-loaded", !0);
  }
  var m = function (t) {
    return "true" === t.getAttribute("data-loaded");
  }, v = function (t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
    return t instanceof Element ? [t] : t instanceof NodeList ? t : e.querySelectorAll(t);
  };
  return function () {
    var r, a, o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad", t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = Object.assign({}, f, t), i = e.root, n = e.rootMargin, d = e.threshold, u = e.load, g = e.loaded, s = void 0;
    "undefined" != typeof window && window.IntersectionObserver && (s = new IntersectionObserver((r = u, a = g, function (t, e) {
      t.forEach(function (t) {
        (0 < t.intersectionRatio || t.isIntersecting) && (e.unobserve(t.target), m(t.target) || (r(t.target), A(t.target), a(t.target)));
      });
    }), {
      root: i,
      rootMargin: n,
      threshold: d
    }));
    for (var c, l = v(o, i), b = 0; b < l.length; b++) (c = l[b]).getAttribute("data-placeholder-background") && (c.style.background = c.getAttribute("data-placeholder-background"));
    return {
      observe: function () {
        for (var t = v(o, i), e = 0; e < t.length; e++) m(t[e]) || (s ? s.observe(t[e]) : (u(t[e]), A(t[e]), g(t[e])));
      },
      triggerLoad: function (t) {
        m(t) || (u(t), A(t), g(t));
      },
      observer: s
    };
  };
});

},{}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}]},["2FQzm","5XPnV"], "5XPnV", "parcelRequire2ac2")

//# sourceMappingURL=index.72166a09.js.map
