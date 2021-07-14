// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data.json":[function(require,module,exports) {
module.exports = {
  "testimonials": [{
    "test": "Dear Richard Just a very quick note to let you know how much I enjoyed the tour of South Island with you! It seems like a very long time ago now and I can hardly believe I was lucky enough to come, but what an opportunity! As I’m sure you know, all of our group had a fantastic time and really appreciated your expert skills as tour guide, and your good humoured company. I will certainly be recommending you to clients. Having talked endlessly about NZ since I got home, my husband is feeling suitably left out, so we will definitely plan to visit again together. Would love to make it for the rugby world cup, but will have to see how the finances work out. Will be in touch when we have a plan. Once again, thank you for making it such a great trip. Best regards to you and Heather.",
    "author": "Alison Bryson Qantas Achievers Trip 2010"
  }, {
    "test": "Richard, thank you for everything you have done for us during our trip, we greatly appreciate it. It has been a pleasure to meet you. Wishing you all the very best & many more happy tours!",
    "author": "Miles & Pauline"
  }, {
    "test": "Dear Richard, Thank you for a great trip! All the UAE journalists in the group had a good time and many remarked that it was one of the best press trips they’ve been on.You made the difference. Some has already written wonderful stories and everyone is saying how much they want to go back to South Island (myself included)!",
    "author": "Valerie Tan Dubai, UAE"
  }, {
    "test": "Richard, thank you for a wonderful tour you are an excellent driver & guide and I learnt so much from your informative commentary. Thank you too for helping me with my rather large suit case, Lol! Best wishes",
    "author": "Sue"
  }]
};
},{}],"node_modules/lozad/dist/lozad.min.js":[function(require,module,exports) {
var define;
/*! lozad.js - v1.16.0 - 2020-09-06
* https://github.com/ApoorvSaxena/lozad.js
* Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.lozad=e()}(this,function(){"use strict";
/**
   * Detect IE browser
   * @const {boolean}
   * @private
   */var g="undefined"!=typeof document&&document.documentMode,f={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute("data-src"))&&(a[i].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var n=",";if(t.getAttribute("data-background-delimiter")&&(n=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var d=t.getAttribute("data-background-image-set").split(n),u=d[0].substr(0,d[0].indexOf(" "))||d[0];// Substring before ... 1x
u=-1===u.indexOf("url(")?"url("+u+")":u,1===d.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+d+"); background-image: image-set("+d+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function A(t){t.setAttribute("data-loaded",!0)}var m=function(t){return"true"===t.getAttribute("data-loaded")},v=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var r,a,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=Object.assign({},f,t),i=e.root,n=e.rootMargin,d=e.threshold,u=e.load,g=e.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((r=u,a=g,function(t,e){t.forEach(function(t){(0<t.intersectionRatio||t.isIntersecting)&&(e.unobserve(t.target),m(t.target)||(r(t.target),A(t.target),a(t.target)))})}),{root:i,rootMargin:n,threshold:d}));for(var c,l=v(o,i),b=0;b<l.length;b++)(c=l[b]).getAttribute("data-placeholder-background")&&(c.style.background=c.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=v(o,i),e=0;e<t.length;e++)m(t[e])||(s?s.observe(t[e]):(u(t[e]),A(t[e]),g(t[e])))},triggerLoad:function(t){m(t)||(u(t),A(t),g(t))},observer:s}}});

},{}],"app.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./data.json"));

var _lozad = _interopRequireDefault(require("lozad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* import _ from 'lodash';

// this does just load the whole file instead of specific images which kinda defeats the point
// tree shaking could probably fix this
var req = require.context("./images/", false, /.*\.(png|jpe?g|svg)$/);
req.keys().forEach(function(key){
  req(key);
}); */
// const data = require('./data.json');
// console.log(data.testimonials[0]);
// fill testimonials with JSON data
for (var j = 0; j < _data.default.testimonials.length; j++) {
  var myTestimonal = document.createElement('article');
  myTestimonal.setAttribute("class", "testimonial io-push");
  var myBackground = document.createElement('div');
  myBackground.setAttribute("class", "skewer");
  var myPara1 = document.createElement('p');
  var schemaReview = document.createElement('span');
  schemaReview.setAttribute("itemprop", "review"); // metatag

  var myH3 = document.createElement('blockquote'); // why is my H3 a blockquote

  schemaReview.textContent = _data.default.testimonials[j].test; // add this to the span

  myH3.textContent = _data.default.testimonials[j].author;
  myTestimonal.appendChild(myPara1); // p after the empty div

  myPara1.appendChild(schemaReview); // puts the span inside the p

  myTestimonal.appendChild(myH3); // author after the p

  myTestimonal.appendChild(myBackground); // empty div for styling

  document.getElementById('testimonials').appendChild(myTestimonal); // article in the section
} // Large margins when IO comes into play


if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
  var createObserver = function createObserver() {
    var observer;
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: buildThresholdList()
    };
    observer = new IntersectionObserver(handleIntersect, options);
    pusher.forEach(function (pushers) {
      observer.observe(pushers);
    });
  };

  var buildThresholdList = function buildThresholdList() {
    var thresholds = [];
    var numSteps = 100;

    for (var i = 1.0; i <= numSteps; i++) {
      var ratio = i / numSteps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  };

  var handleIntersect = function handleIntersect(entries, observer) {
    entries.forEach(function (entry) {
      entry.target.style.marginTop = mT.replace("ratio", entry.intersectionRatio * 5);
      prevRatio = entry.intersectionRatio;
    });
  };

  var iopush = document.querySelectorAll('.io-push');
  var numSteps = 20.0;
  var pusher; // naming choice is too close to push

  var prevRatio = 0.0;
  var mT = "ratioem"; // Set things up.

  window.addEventListener("load", function (event) {
    pusher = document.querySelectorAll(".io-push");
    createObserver();
  }, false);
} // Parallax images to add to the drop down effects


if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
  var paraObserver = function paraObserver() {
    var pObserver;
    var pOptions = {
      root: null,
      rootMargin: "0px",
      threshold: paraThresholdList()
    };
    pObserver = new IntersectionObserver(pHandleIntersect, pOptions);
    para.forEach(function (paras) {
      pObserver.observe(paras);
    });
  };

  var paraThresholdList = function paraThresholdList() {
    var paraThresholds = [];
    var paraSteps = 100;

    for (var i = 1.0; i <= paraSteps; i++) {
      var ratio = i / paraSteps;
      paraThresholds.push(ratio);
    }

    paraThresholds.push(0);
    return paraThresholds;
  };

  var pHandleIntersect = function pHandleIntersect(pEntries, pObserver) {
    pEntries.forEach(function (entry) {
      entry.target.style.webkitTransform = pT.replace("pRatio", entry.intersectionRatio * 5);
      paraRatio = entry.intersectionRatio;
    });
  };

  var ioparallax = document.querySelectorAll('.io-parallax'); // doesnt seem used can I skip it

  var paraSteps = 20.0;
  var para; // naming choice is too close to push

  var paraRatio = 0.0;
  var pT = "translateY(pRatioem)"; // Set things up.

  window.addEventListener("load", function (event) {
    para = document.querySelectorAll(".io-parallax");
    paraObserver();
  }, false);
} // Lazy load


var observer = (0, _lozad.default)(); // lazy loads elements with default selector as '.lozad'

observer.observe();
},{"./data.json":"data.json","lozad":"node_modules/lozad/dist/lozad.min.js"}],"../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63007" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
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
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
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
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../opt/homebrew/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map