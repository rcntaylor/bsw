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
})({"js/vendor/glide.min.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Glide.js v3.4.1
 * (c) 2013-2019 Jędrzej Chałubek <jedrzej.chalubek@gmail.com> (http://jedrzejchalubek.com/)
 * Released under the MIT License.
 */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.Glide = e();
}(this, function () {
  "use strict";

  var n = {
    type: "slider",
    startAt: 0,
    perView: 1,
    focusAt: 0,
    gap: 10,
    autoplay: !1,
    hoverpause: !0,
    keyboard: !0,
    bound: !1,
    swipeThreshold: 80,
    dragThreshold: 120,
    perTouch: !1,
    touchRatio: .5,
    touchAngle: 45,
    animationDuration: 400,
    rewind: !0,
    rewindDuration: 800,
    animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
    throttle: 10,
    direction: "ltr",
    peek: 0,
    breakpoints: {},
    classes: {
      direction: {
        ltr: "glide--ltr",
        rtl: "glide--rtl"
      },
      slider: "glide--slider",
      carousel: "glide--carousel",
      swipeable: "glide--swipeable",
      dragging: "glide--dragging",
      cloneSlide: "glide__slide--clone",
      activeNav: "glide__bullet--active",
      activeSlide: "glide__slide--active",
      disabledArrow: "glide__arrow--disabled"
    }
  };

  function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }

  var r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
  },
      t = function t(_t, e, n) {
    return e && o(_t.prototype, e), n && o(_t, n), _t;
  };

  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }

  var a = Object.assign || function (t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];

      for (var i in n) {
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
      }
    }

    return t;
  };

  function y(t) {
    return parseInt(t);
  }

  function s(t) {
    return "string" == typeof t;
  }

  function u(t) {
    var e = void 0 === t ? "undefined" : r(t);
    return "function" === e || "object" === e && !!t;
  }

  function c(t) {
    return "function" == typeof t;
  }

  function l(t) {
    return void 0 === t;
  }

  function f(t) {
    return t.constructor === Array;
  }

  function d(t, e, n) {
    Object.defineProperty(t, e, n);
  }

  function h(t, e) {
    var n = a({}, t, e);
    return e.hasOwnProperty("classes") && (n.classes = a({}, t.classes, e.classes), e.classes.hasOwnProperty("direction") && (n.classes.direction = a({}, t.classes.direction, e.classes.direction))), e.hasOwnProperty("breakpoints") && (n.breakpoints = a({}, t.breakpoints, e.breakpoints)), n;
  }

  var v = (t(e, [{
    key: "on",
    value: function value(t, e) {
      if (f(t)) for (var n = 0; n < t.length; n++) {
        this.on(t[n], e);
      }
      this.hop.call(this.events, t) || (this.events[t] = []);
      var i = this.events[t].push(e) - 1;
      return {
        remove: function remove() {
          delete this.events[t][i];
        }
      };
    }
  }, {
    key: "emit",
    value: function value(t, e) {
      if (f(t)) for (var n = 0; n < t.length; n++) {
        this.emit(t[n], e);
      }
      this.hop.call(this.events, t) && this.events[t].forEach(function (t) {
        t(e || {});
      });
    }
  }]), e);

  function e() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    i(this, e), this.events = t, this.hop = t.hasOwnProperty;
  }

  var p = (t(m, [{
    key: "mount",
    value: function value(t) {
      var e = 0 < arguments.length && void 0 !== t ? t : {};
      return this._e.emit("mount.before"), u(e) && (this._c = function (t, e, n) {
        var i = {};

        for (var r in e) {
          c(e[r]) && (i[r] = e[r](t, i, n));
        }

        for (var o in i) {
          c(i[o].mount) && i[o].mount();
        }

        return i;
      }(this, e, this._e)), this._e.emit("mount.after"), this;
    }
  }, {
    key: "mutate",
    value: function value(t) {
      var e = 0 < arguments.length && void 0 !== t ? t : [];
      return f(e) && (this._t = e), this;
    }
  }, {
    key: "update",
    value: function value(t) {
      var e = 0 < arguments.length && void 0 !== t ? t : {};
      return this.settings = h(this.settings, e), e.hasOwnProperty("startAt") && (this.index = e.startAt), this._e.emit("update"), this;
    }
  }, {
    key: "go",
    value: function value(t) {
      return this._c.Run.make(t), this;
    }
  }, {
    key: "move",
    value: function value(t) {
      return this._c.Transition.disable(), this._c.Move.make(t), this;
    }
  }, {
    key: "destroy",
    value: function value() {
      return this._e.emit("destroy"), this;
    }
  }, {
    key: "play",
    value: function value(t) {
      var e = 0 < arguments.length && void 0 !== t && t;
      return e && (this.settings.autoplay = e), this._e.emit("play"), this;
    }
  }, {
    key: "pause",
    value: function value() {
      return this._e.emit("pause"), this;
    }
  }, {
    key: "disable",
    value: function value() {
      return this.disabled = !0, this;
    }
  }, {
    key: "enable",
    value: function value() {
      return this.disabled = !1, this;
    }
  }, {
    key: "on",
    value: function value(t, e) {
      return this._e.on(t, e), this;
    }
  }, {
    key: "isType",
    value: function value(t) {
      return this.settings.type === t;
    }
  }, {
    key: "settings",
    get: function get() {
      return this._o;
    },
    set: function set(t) {
      u(t) && (this._o = t);
    }
  }, {
    key: "index",
    get: function get() {
      return this._i;
    },
    set: function set(t) {
      this._i = y(t);
    }
  }, {
    key: "type",
    get: function get() {
      return this.settings.type;
    }
  }, {
    key: "disabled",
    get: function get() {
      return this._d;
    },
    set: function set(t) {
      this._d = !!t;
    }
  }]), m);

  function m(t) {
    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
    i(this, m), this._c = {}, this._t = [], this._e = new v(), this.disabled = !1, this.selector = t, this.settings = h(n, e), this.index = this.settings.startAt;
  }

  function g() {
    return new Date().getTime();
  }

  function b(n, i, r) {
    var o = void 0,
        s = void 0,
        u = void 0,
        a = void 0,
        c = 0;
    r = r || {};

    function l() {
      c = !1 === r.leading ? 0 : g(), o = null, a = n.apply(s, u), o || (s = u = null);
    }

    function t() {
      var t = g();
      c || !1 !== r.leading || (c = t);
      var e = i - (t - c);
      return s = this, u = arguments, e <= 0 || i < e ? (o && (clearTimeout(o), o = null), c = t, a = n.apply(s, u), o || (s = u = null)) : o || !1 === r.trailing || (o = setTimeout(l, e)), a;
    }

    return t.cancel = function () {
      clearTimeout(o), c = 0, o = s = u = null;
    }, t;
  }

  var w = {
    ltr: ["marginLeft", "marginRight"],
    rtl: ["marginRight", "marginLeft"]
  };

  function _(t) {
    if (t && t.parentNode) {
      for (var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && n.push(e);
      }

      return n;
    }

    return [];
  }

  function k(t) {
    return !!(t && t instanceof window.HTMLElement);
  }

  var S = '[data-glide-el="track"]';
  var H = (t(T, [{
    key: "on",
    value: function value(t, e, n, i) {
      var r = 3 < arguments.length && void 0 !== i && i;
      s(t) && (t = [t]);

      for (var o = 0; o < t.length; o++) {
        this.listeners[t[o]] = n, e.addEventListener(t[o], this.listeners[t[o]], r);
      }
    }
  }, {
    key: "off",
    value: function value(t, e, n) {
      var i = 2 < arguments.length && void 0 !== n && n;
      s(t) && (t = [t]);

      for (var r = 0; r < t.length; r++) {
        e.removeEventListener(t[r], this.listeners[t[r]], i);
      }
    }
  }, {
    key: "destroy",
    value: function value() {
      delete this.listeners;
    }
  }]), T);

  function T() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
    i(this, T), this.listeners = t;
  }

  var x = ["ltr", "rtl"],
      O = {
    ">": "<",
    "<": ">",
    "=": "="
  };

  function A(t, e) {
    return {
      modify: function modify(t) {
        return e.Direction.is("rtl") ? -t : t;
      }
    };
  }

  function M(i, r, o) {
    var s = [function (e, n) {
      return {
        modify: function modify(t) {
          return t + n.Gaps.value * e.index;
        }
      };
    }, function (t, e) {
      return {
        modify: function modify(t) {
          return t + e.Clones.grow / 2;
        }
      };
    }, function (n, i) {
      return {
        modify: function modify(t) {
          if (0 <= n.settings.focusAt) {
            var e = i.Peek.value;
            return u(e) ? t - e.before : t - e;
          }

          return t;
        }
      };
    }, function (o, s) {
      return {
        modify: function modify(t) {
          var e = s.Gaps.value,
              n = s.Sizes.width,
              i = o.settings.focusAt,
              r = s.Sizes.slideWidth;
          return "center" === i ? t - (n / 2 - r / 2) : t - r * i - e * i;
        }
      };
    }].concat(i._t, [A]);
    return {
      mutate: function mutate(t) {
        for (var e = 0; e < s.length; e++) {
          var n = s[e];
          c(n) && c(n().modify) && (t = n(i, r, o).modify(t));
        }

        return t;
      }
    };
  }

  var C = !1;

  try {
    var P = Object.defineProperty({}, "passive", {
      get: function get() {
        C = !0;
      }
    });
    window.addEventListener("testPassive", null, P), window.removeEventListener("testPassive", null, P);
  } catch (t) {}

  var L = C,
      z = ["touchstart", "mousedown"],
      j = ["touchmove", "mousemove"],
      D = ["touchend", "touchcancel", "mouseup", "mouseleave"],
      E = ["mousedown", "mousemove", "mouseup", "mouseleave"];

  function R(t) {
    return u(t) ? function (n) {
      return Object.keys(n).sort().reduce(function (t, e) {
        return t[e] = n[e], t[e], t;
      }, {});
    }(t) : {};
  }

  var W = {
    Html: function Html(e, t) {
      var n = {
        mount: function mount() {
          this.root = e.selector, this.track = this.root.querySelector(S), this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function (t) {
            return !t.classList.contains(e.settings.classes.cloneSlide);
          });
        }
      };
      return d(n, "root", {
        get: function get() {
          return n._r;
        },
        set: function set(t) {
          s(t) && (t = document.querySelector(t)), k(t) && (n._r = t);
        }
      }), d(n, "track", {
        get: function get() {
          return n._t;
        },
        set: function set(t) {
          k(t) && (n._t = t);
        }
      }), d(n, "wrapper", {
        get: function get() {
          return n.track.children[0];
        }
      }), n;
    },
    Translate: function Translate(r, o, s) {
      var u = {
        set: function set(t) {
          var e = M(r, o).mutate(t);
          o.Html.wrapper.style.transform = "translate3d(" + -1 * e + "px, 0px, 0px)";
        },
        remove: function remove() {
          o.Html.wrapper.style.transform = "";
        }
      };
      return s.on("move", function (t) {
        var e = o.Gaps.value,
            n = o.Sizes.length,
            i = o.Sizes.slideWidth;
        return r.isType("carousel") && o.Run.isOffset("<") ? (o.Transition.after(function () {
          s.emit("translate.jump"), u.set(i * (n - 1));
        }), u.set(-i - e * n)) : r.isType("carousel") && o.Run.isOffset(">") ? (o.Transition.after(function () {
          s.emit("translate.jump"), u.set(0);
        }), u.set(i * n + e * n)) : u.set(t.movement);
      }), s.on("destroy", function () {
        u.remove();
      }), u;
    },
    Transition: function Transition(n, i, t) {
      var r = !1,
          e = {
        compose: function compose(t) {
          var e = n.settings;
          return r ? t + " 0ms " + e.animationTimingFunc : t + " " + this.duration + "ms " + e.animationTimingFunc;
        },
        set: function set(t) {
          var e = 0 < arguments.length && void 0 !== t ? t : "transform";
          i.Html.wrapper.style.transition = this.compose(e);
        },
        remove: function remove() {
          i.Html.wrapper.style.transition = "";
        },
        after: function after(t) {
          setTimeout(function () {
            t();
          }, this.duration);
        },
        enable: function enable() {
          r = !1, this.set();
        },
        disable: function disable() {
          r = !0, this.set();
        }
      };
      return d(e, "duration", {
        get: function get() {
          var t = n.settings;
          return n.isType("slider") && i.Run.offset ? t.rewindDuration : t.animationDuration;
        }
      }), t.on("move", function () {
        e.set();
      }), t.on(["build.before", "resize", "translate.jump"], function () {
        e.disable();
      }), t.on("run", function () {
        e.enable();
      }), t.on("destroy", function () {
        e.remove();
      }), e;
    },
    Direction: function Direction(t, e, n) {
      var i = {
        mount: function mount() {
          this.value = t.settings.direction;
        },
        resolve: function resolve(t) {
          var e = t.slice(0, 1);
          return this.is("rtl") ? t.split(e).join(O[e]) : t;
        },
        is: function is(t) {
          return this.value === t;
        },
        addClass: function addClass() {
          e.Html.root.classList.add(t.settings.classes.direction[this.value]);
        },
        removeClass: function removeClass() {
          e.Html.root.classList.remove(t.settings.classes.direction[this.value]);
        }
      };
      return d(i, "value", {
        get: function get() {
          return i._v;
        },
        set: function set(t) {
          -1 < x.indexOf(t) && (i._v = t);
        }
      }), n.on(["destroy", "update"], function () {
        i.removeClass();
      }), n.on("update", function () {
        i.mount();
      }), n.on(["build.before", "update"], function () {
        i.addClass();
      }), i;
    },
    Peek: function Peek(n, t, e) {
      var i = {
        mount: function mount() {
          this.value = n.settings.peek;
        }
      };
      return d(i, "value", {
        get: function get() {
          return i._v;
        },
        set: function set(t) {
          u(t) ? (t.before = y(t.before), t.after = y(t.after)) : t = y(t), i._v = t;
        }
      }), d(i, "reductor", {
        get: function get() {
          var t = i.value,
              e = n.settings.perView;
          return u(t) ? t.before / e + t.after / e : 2 * t / e;
        }
      }), e.on(["resize", "update"], function () {
        i.mount();
      }), i;
    },
    Sizes: function Sizes(t, i, e) {
      var n = {
        setupSlides: function setupSlides() {
          for (var t = this.slideWidth + "px", e = i.Html.slides, n = 0; n < e.length; n++) {
            e[n].style.width = t;
          }
        },
        setupWrapper: function setupWrapper(t) {
          i.Html.wrapper.style.width = this.wrapperSize + "px";
        },
        remove: function remove() {
          for (var t = i.Html.slides, e = 0; e < t.length; e++) {
            t[e].style.width = "";
          }

          i.Html.wrapper.style.width = "";
        }
      };
      return d(n, "length", {
        get: function get() {
          return i.Html.slides.length;
        }
      }), d(n, "width", {
        get: function get() {
          return i.Html.root.offsetWidth;
        }
      }), d(n, "wrapperSize", {
        get: function get() {
          return n.slideWidth * n.length + i.Gaps.grow + i.Clones.grow;
        }
      }), d(n, "slideWidth", {
        get: function get() {
          return n.width / t.settings.perView - i.Peek.reductor - i.Gaps.reductor;
        }
      }), e.on(["build.before", "resize", "update"], function () {
        n.setupSlides(), n.setupWrapper();
      }), e.on("destroy", function () {
        n.remove();
      }), n;
    },
    Gaps: function Gaps(e, o, t) {
      var n = {
        apply: function apply(t) {
          for (var e = 0, n = t.length; e < n; e++) {
            var i = t[e].style,
                r = o.Direction.value;
            i[w[r][0]] = 0 !== e ? this.value / 2 + "px" : "", e !== t.length - 1 ? i[w[r][1]] = this.value / 2 + "px" : i[w[r][1]] = "";
          }
        },
        remove: function remove(t) {
          for (var e = 0, n = t.length; e < n; e++) {
            var i = t[e].style;
            i.marginLeft = "", i.marginRight = "";
          }
        }
      };
      return d(n, "value", {
        get: function get() {
          return y(e.settings.gap);
        }
      }), d(n, "grow", {
        get: function get() {
          return n.value * (o.Sizes.length - 1);
        }
      }), d(n, "reductor", {
        get: function get() {
          var t = e.settings.perView;
          return n.value * (t - 1) / t;
        }
      }), t.on(["build.after", "update"], b(function () {
        n.apply(o.Html.wrapper.children);
      }, 30)), t.on("destroy", function () {
        n.remove(o.Html.wrapper.children);
      }), n;
    },
    Move: function Move(t, i, r) {
      var e = {
        mount: function mount() {
          this._o = 0;
        },
        make: function make(t) {
          var e = this,
              n = 0 < arguments.length && void 0 !== t ? t : 0;
          this.offset = n, r.emit("move", {
            movement: this.value
          }), i.Transition.after(function () {
            r.emit("move.after", {
              movement: e.value
            });
          });
        }
      };
      return d(e, "offset", {
        get: function get() {
          return e._o;
        },
        set: function set(t) {
          e._o = l(t) ? 0 : y(t);
        }
      }), d(e, "translate", {
        get: function get() {
          return i.Sizes.slideWidth * t.index;
        }
      }), d(e, "value", {
        get: function get() {
          var t = this.offset,
              e = this.translate;
          return i.Direction.is("rtl") ? e + t : e - t;
        }
      }), r.on(["build.before", "run"], function () {
        e.make();
      }), e;
    },
    Clones: function Clones(v, p, t) {
      var e = {
        mount: function mount() {
          this.items = [], v.isType("carousel") && (this.items = this.collect());
        },
        collect: function collect(t) {
          for (var e = 0 < arguments.length && void 0 !== t ? t : [], n = p.Html.slides, i = v.settings, r = i.perView, o = i.classes, s = r + +!!v.settings.peek, u = n.slice(0, s), a = n.slice(-s), c = 0; c < Math.max(1, Math.floor(r / n.length)); c++) {
            for (var l = 0; l < u.length; l++) {
              var f = u[l].cloneNode(!0);
              f.classList.add(o.cloneSlide), e.push(f);
            }

            for (var d = 0; d < a.length; d++) {
              var h = a[d].cloneNode(!0);
              h.classList.add(o.cloneSlide), e.unshift(h);
            }
          }

          return e;
        },
        append: function append() {
          for (var t = this.items, e = p.Html, n = e.wrapper, i = e.slides, r = Math.floor(t.length / 2), o = t.slice(0, r).reverse(), s = t.slice(r, t.length), u = p.Sizes.slideWidth + "px", a = 0; a < s.length; a++) {
            n.appendChild(s[a]);
          }

          for (var c = 0; c < o.length; c++) {
            n.insertBefore(o[c], i[0]);
          }

          for (var l = 0; l < t.length; l++) {
            t[l].style.width = u;
          }
        },
        remove: function remove() {
          for (var t = this.items, e = 0; e < t.length; e++) {
            p.Html.wrapper.removeChild(t[e]);
          }
        }
      };
      return d(e, "grow", {
        get: function get() {
          return (p.Sizes.slideWidth + p.Gaps.value) * e.items.length;
        }
      }), t.on("update", function () {
        e.remove(), e.mount(), e.append();
      }), t.on("build.before", function () {
        v.isType("carousel") && e.append();
      }), t.on("destroy", function () {
        e.remove();
      }), e;
    },
    Resize: function Resize(t, e, n) {
      var i = new H(),
          r = {
        mount: function mount() {
          this.bind();
        },
        bind: function bind() {
          i.on("resize", window, b(function () {
            n.emit("resize");
          }, t.settings.throttle));
        },
        unbind: function unbind() {
          i.off("resize", window);
        }
      };
      return n.on("destroy", function () {
        r.unbind(), i.destroy();
      }), r;
    },
    Build: function Build(n, i, t) {
      var e = {
        mount: function mount() {
          t.emit("build.before"), this.typeClass(), this.activeClass(), t.emit("build.after");
        },
        typeClass: function typeClass() {
          i.Html.root.classList.add(n.settings.classes[n.settings.type]);
        },
        activeClass: function activeClass() {
          var e = n.settings.classes,
              t = i.Html.slides[n.index];
          t && (t.classList.add(e.activeSlide), _(t).forEach(function (t) {
            t.classList.remove(e.activeSlide);
          }));
        },
        removeClasses: function removeClasses() {
          var e = n.settings.classes;
          i.Html.root.classList.remove(e[n.settings.type]), i.Html.slides.forEach(function (t) {
            t.classList.remove(e.activeSlide);
          });
        }
      };
      return t.on(["destroy", "update"], function () {
        e.removeClasses();
      }), t.on(["resize", "update"], function () {
        e.mount();
      }), t.on("move.after", function () {
        e.activeClass();
      }), e;
    },
    Run: function Run(o, n, i) {
      var t = {
        mount: function mount() {
          this._o = !1;
        },
        make: function make(t) {
          var e = this;
          o.disabled || (o.disable(), this.move = t, i.emit("run.before", this.move), this.calculate(), i.emit("run", this.move), n.Transition.after(function () {
            e.isStart() && i.emit("run.start", e.move), e.isEnd() && i.emit("run.end", e.move), (e.isOffset("<") || e.isOffset(">")) && (e._o = !1, i.emit("run.offset", e.move)), i.emit("run.after", e.move), o.enable();
          }));
        },
        calculate: function calculate() {
          var t = this.move,
              e = this.length,
              n = t.steps,
              i = t.direction,
              r = function (t) {
            return "number" == typeof t;
          }(y(n)) && 0 !== y(n);

          switch (i) {
            case ">":
              ">" === n ? o.index = e : this.isEnd() ? o.isType("slider") && !o.settings.rewind || (this._o = !0, o.index = 0) : r ? o.index += Math.min(e - o.index, -y(n)) : o.index++;
              break;

            case "<":
              "<" === n ? o.index = 0 : this.isStart() ? o.isType("slider") && !o.settings.rewind || (this._o = !0, o.index = e) : r ? o.index -= Math.min(o.index, y(n)) : o.index--;
              break;

            case "=":
              o.index = n;
          }
        },
        isStart: function isStart() {
          return 0 === o.index;
        },
        isEnd: function isEnd() {
          return o.index === this.length;
        },
        isOffset: function isOffset(t) {
          return this._o && this.move.direction === t;
        }
      };
      return d(t, "move", {
        get: function get() {
          return this._m;
        },
        set: function set(t) {
          var e = t.substr(1);
          this._m = {
            direction: t.substr(0, 1),
            steps: e ? y(e) ? y(e) : e : 0
          };
        }
      }), d(t, "length", {
        get: function get() {
          var t = o.settings,
              e = n.Html.slides.length;
          return o.isType("slider") && "center" !== t.focusAt && t.bound ? e - 1 - (y(t.perView) - 1) + y(t.focusAt) : e - 1;
        }
      }), d(t, "offset", {
        get: function get() {
          return this._o;
        }
      }), t;
    },
    Swipe: function Swipe(d, h, v) {
      var n = new H(),
          p = 0,
          m = 0,
          g = 0,
          i = !1,
          r = !!L && {
        passive: !0
      },
          t = {
        mount: function mount() {
          this.bindSwipeStart();
        },
        start: function start(t) {
          if (!i && !d.disabled) {
            this.disable();
            var e = this.touches(t);
            p = null, m = y(e.pageX), g = y(e.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), v.emit("swipe.start");
          }
        },
        move: function move(t) {
          if (!d.disabled) {
            var e = d.settings,
                n = e.touchAngle,
                i = e.touchRatio,
                r = e.classes,
                o = this.touches(t),
                s = y(o.pageX) - m,
                u = y(o.pageY) - g,
                a = Math.abs(s << 2),
                c = Math.abs(u << 2),
                l = Math.sqrt(a + c),
                f = Math.sqrt(c);
            if (!(180 * (p = Math.asin(f / l)) / Math.PI < n)) return !1;
            t.stopPropagation(), h.Move.make(s * function (t) {
              return parseFloat(t);
            }(i)), h.Html.root.classList.add(r.dragging), v.emit("swipe.move");
          }
        },
        end: function end(t) {
          if (!d.disabled) {
            var e = d.settings,
                n = this.touches(t),
                i = this.threshold(t),
                r = n.pageX - m,
                o = 180 * p / Math.PI,
                s = Math.round(r / h.Sizes.slideWidth);
            this.enable(), i < r && o < e.touchAngle ? (e.perTouch && (s = Math.min(s, y(e.perTouch))), h.Direction.is("rtl") && (s = -s), h.Run.make(h.Direction.resolve("<" + s))) : r < -i && o < e.touchAngle ? (e.perTouch && (s = Math.max(s, -y(e.perTouch))), h.Direction.is("rtl") && (s = -s), h.Run.make(h.Direction.resolve(">" + s))) : h.Move.make(), h.Html.root.classList.remove(e.classes.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), v.emit("swipe.end");
          }
        },
        bindSwipeStart: function bindSwipeStart() {
          var e = this,
              t = d.settings;
          t.swipeThreshold && n.on(z[0], h.Html.wrapper, function (t) {
            e.start(t);
          }, r), t.dragThreshold && n.on(z[1], h.Html.wrapper, function (t) {
            e.start(t);
          }, r);
        },
        unbindSwipeStart: function unbindSwipeStart() {
          n.off(z[0], h.Html.wrapper, r), n.off(z[1], h.Html.wrapper, r);
        },
        bindSwipeMove: function bindSwipeMove() {
          var e = this;
          n.on(j, h.Html.wrapper, b(function (t) {
            e.move(t);
          }, d.settings.throttle), r);
        },
        unbindSwipeMove: function unbindSwipeMove() {
          n.off(j, h.Html.wrapper, r);
        },
        bindSwipeEnd: function bindSwipeEnd() {
          var e = this;
          n.on(D, h.Html.wrapper, function (t) {
            e.end(t);
          });
        },
        unbindSwipeEnd: function unbindSwipeEnd() {
          n.off(D, h.Html.wrapper);
        },
        touches: function touches(t) {
          return -1 < E.indexOf(t.type) ? t : t.touches[0] || t.changedTouches[0];
        },
        threshold: function threshold(t) {
          var e = d.settings;
          return -1 < E.indexOf(t.type) ? e.dragThreshold : e.swipeThreshold;
        },
        enable: function enable() {
          return i = !1, h.Transition.enable(), this;
        },
        disable: function disable() {
          return i = !0, h.Transition.disable(), this;
        }
      };
      return v.on("build.after", function () {
        h.Html.root.classList.add(d.settings.classes.swipeable);
      }), v.on("destroy", function () {
        t.unbindSwipeStart(), t.unbindSwipeMove(), t.unbindSwipeEnd(), n.destroy();
      }), t;
    },
    Images: function Images(t, e, n) {
      var i = new H(),
          r = {
        mount: function mount() {
          this.bind();
        },
        bind: function bind() {
          i.on("dragstart", e.Html.wrapper, this.dragstart);
        },
        unbind: function unbind() {
          i.off("dragstart", e.Html.wrapper);
        },
        dragstart: function dragstart(t) {
          t.preventDefault();
        }
      };
      return n.on("destroy", function () {
        r.unbind(), i.destroy();
      }), r;
    },
    Anchors: function Anchors(t, e, n) {
      var i = new H(),
          r = !1,
          o = !1,
          s = {
        mount: function mount() {
          this._a = e.Html.wrapper.querySelectorAll("a"), this.bind();
        },
        bind: function bind() {
          i.on("click", e.Html.wrapper, this.click);
        },
        unbind: function unbind() {
          i.off("click", e.Html.wrapper);
        },
        click: function click(t) {
          o && (t.stopPropagation(), t.preventDefault());
        },
        detach: function detach() {
          if (o = !0, !r) {
            for (var t = 0; t < this.items.length; t++) {
              this.items[t].draggable = !1, this.items[t].setAttribute("data-href", this.items[t].getAttribute("href")), this.items[t].removeAttribute("href");
            }

            r = !0;
          }

          return this;
        },
        attach: function attach() {
          if (o = !1, r) {
            for (var t = 0; t < this.items.length; t++) {
              this.items[t].draggable = !0, this.items[t].setAttribute("href", this.items[t].getAttribute("data-href"));
            }

            r = !1;
          }

          return this;
        }
      };
      return d(s, "items", {
        get: function get() {
          return s._a;
        }
      }), n.on("swipe.move", function () {
        s.detach();
      }), n.on("swipe.end", function () {
        e.Transition.after(function () {
          s.attach();
        });
      }), n.on("destroy", function () {
        s.attach(), s.unbind(), i.destroy();
      }), s;
    },
    Controls: function Controls(i, e, t) {
      var n = new H(),
          r = !!L && {
        passive: !0
      },
          o = {
        mount: function mount() {
          this._n = e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'), this._c = e.Html.root.querySelectorAll('[data-glide-el^="controls"]'), this.addBindings();
        },
        setActive: function setActive() {
          for (var t = 0; t < this._n.length; t++) {
            this.addClass(this._n[t].children);
          }
        },
        removeActive: function removeActive() {
          for (var t = 0; t < this._n.length; t++) {
            this.removeClass(this._n[t].children);
          }
        },
        addClass: function addClass(t) {
          var e = i.settings,
              n = t[i.index];
          n && (n.classList.add(e.classes.activeNav), _(n).forEach(function (t) {
            t.classList.remove(e.classes.activeNav);
          }));
        },
        removeClass: function removeClass(t) {
          var e = t[i.index];
          e && e.classList.remove(i.settings.classes.activeNav);
        },
        addBindings: function addBindings() {
          for (var t = 0; t < this._c.length; t++) {
            this.bind(this._c[t].children);
          }
        },
        removeBindings: function removeBindings() {
          for (var t = 0; t < this._c.length; t++) {
            this.unbind(this._c[t].children);
          }
        },
        bind: function bind(t) {
          for (var e = 0; e < t.length; e++) {
            n.on("click", t[e], this.click), n.on("touchstart", t[e], this.click, r);
          }
        },
        unbind: function unbind(t) {
          for (var e = 0; e < t.length; e++) {
            n.off(["click", "touchstart"], t[e]);
          }
        },
        click: function click(t) {
          t.preventDefault(), e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")));
        }
      };
      return d(o, "items", {
        get: function get() {
          return o._c;
        }
      }), t.on(["mount.after", "move.after"], function () {
        o.setActive();
      }), t.on("destroy", function () {
        o.removeBindings(), o.removeActive(), n.destroy();
      }), o;
    },
    Keyboard: function Keyboard(t, e, n) {
      var i = new H(),
          r = {
        mount: function mount() {
          t.settings.keyboard && this.bind();
        },
        bind: function bind() {
          i.on("keyup", document, this.press);
        },
        unbind: function unbind() {
          i.off("keyup", document);
        },
        press: function press(t) {
          39 === t.keyCode && e.Run.make(e.Direction.resolve(">")), 37 === t.keyCode && e.Run.make(e.Direction.resolve("<"));
        }
      };
      return n.on(["destroy", "update"], function () {
        r.unbind();
      }), n.on("update", function () {
        r.mount();
      }), n.on("destroy", function () {
        i.destroy();
      }), r;
    },
    Autoplay: function Autoplay(e, n, t) {
      var i = new H(),
          r = {
        mount: function mount() {
          this.start(), e.settings.hoverpause && this.bind();
        },
        start: function start() {
          var t = this;
          e.settings.autoplay && l(this._i) && (this._i = setInterval(function () {
            t.stop(), n.Run.make(">"), t.start();
          }, this.time));
        },
        stop: function stop() {
          this._i = clearInterval(this._i);
        },
        bind: function bind() {
          var t = this;
          i.on("mouseover", n.Html.root, function () {
            t.stop();
          }), i.on("mouseout", n.Html.root, function () {
            t.start();
          });
        },
        unbind: function unbind() {
          i.off(["mouseover", "mouseout"], n.Html.root);
        }
      };
      return d(r, "time", {
        get: function get() {
          var t = n.Html.slides[e.index].getAttribute("data-glide-autoplay");
          return y(t || e.settings.autoplay);
        }
      }), t.on(["destroy", "update"], function () {
        r.unbind();
      }), t.on(["run.before", "pause", "destroy", "swipe.start", "update"], function () {
        r.stop();
      }), t.on(["run.after", "play", "swipe.end"], function () {
        r.start();
      }), t.on("update", function () {
        r.mount();
      }), t.on("destroy", function () {
        i.destroy();
      }), r;
    },
    Breakpoints: function Breakpoints(t, e, n) {
      var i = new H(),
          r = t.settings,
          o = R(r.breakpoints),
          s = a({}, r),
          u = {
        match: function match(t) {
          if (void 0 !== window.matchMedia) for (var e in t) {
            if (t.hasOwnProperty(e) && window.matchMedia("(max-width: " + e + "px)").matches) return t[e];
          }
          return s;
        }
      };
      return a(r, u.match(o)), i.on("resize", window, b(function () {
        t.settings = h(r, u.match(o));
      }, t.settings.throttle)), n.on("update", function () {
        o = R(o), s = a({}, r);
      }), n.on("destroy", function () {
        i.off("resize", window);
      }), u;
    }
  };

  function G() {
    return i(this, G), function (t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !e || "object" != _typeof(e) && "function" != typeof e ? t : e;
    }(this, (G.__proto__ || Object.getPrototypeOf(G)).apply(this, arguments));
  }

  return function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + _typeof(e));
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }(G, p), t(G, [{
    key: "mount",
    value: function value(t) {
      var e = 0 < arguments.length && void 0 !== t ? t : {};
      return function t(e, n, i) {
        null === e && (e = Function.prototype);
        var r = Object.getOwnPropertyDescriptor(e, n);

        if (void 0 === r) {
          var o = Object.getPrototypeOf(e);
          return null === o ? void 0 : t(o, n, i);
        }

        if ("value" in r) return r.value;
        var s = r.get;
        return void 0 !== s ? s.call(i) : void 0;
      }(G.prototype.__proto__ || Object.getPrototypeOf(G.prototype), "mount", this).call(this, a({}, W, e));
    }
  }]), G;
});
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60824" + '/');

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/vendor/glide.min.js"], null)
//# sourceMappingURL=/glide.min.7e8a33bc.js.map