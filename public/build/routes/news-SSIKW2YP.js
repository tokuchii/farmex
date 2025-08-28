import {
  motion
} from "/build/_shared/chunk-ZJN32EVK.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-65CJFPR6.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// node_modules/react-lazy-load-image-component/build/index.js
var require_build = __commonJS({
  "node_modules/react-lazy-load-image-component/build/index.js"(exports, module) {
    (() => {
      var e = { 296: (e2, t2, r2) => {
        var o2 = /^\s+|\s+$/g, n = /^[-+]0x[0-9a-f]+$/i, i = /^0b[01]+$/i, c = /^0o[0-7]+$/i, u = parseInt, s = "object" == typeof r2.g && r2.g && r2.g.Object === Object && r2.g, l = "object" == typeof self && self && self.Object === Object && self, a = s || l || Function("return this")(), f = Object.prototype.toString, p = Math.max, y = Math.min, b = function() {
          return a.Date.now();
        };
        function d(e3) {
          var t3 = typeof e3;
          return !!e3 && ("object" == t3 || "function" == t3);
        }
        function h(e3) {
          if ("number" == typeof e3)
            return e3;
          if (function(e4) {
            return "symbol" == typeof e4 || function(e5) {
              return !!e5 && "object" == typeof e5;
            }(e4) && "[object Symbol]" == f.call(e4);
          }(e3))
            return NaN;
          if (d(e3)) {
            var t3 = "function" == typeof e3.valueOf ? e3.valueOf() : e3;
            e3 = d(t3) ? t3 + "" : t3;
          }
          if ("string" != typeof e3)
            return 0 === e3 ? e3 : +e3;
          e3 = e3.replace(o2, "");
          var r3 = i.test(e3);
          return r3 || c.test(e3) ? u(e3.slice(2), r3 ? 2 : 8) : n.test(e3) ? NaN : +e3;
        }
        e2.exports = function(e3, t3, r3) {
          var o3, n2, i2, c2, u2, s2, l2 = 0, a2 = false, f2 = false, v = true;
          if ("function" != typeof e3)
            throw new TypeError("Expected a function");
          function m(t4) {
            var r4 = o3, i3 = n2;
            return o3 = n2 = void 0, l2 = t4, c2 = e3.apply(i3, r4);
          }
          function O(e4) {
            var r4 = e4 - s2;
            return void 0 === s2 || r4 >= t3 || r4 < 0 || f2 && e4 - l2 >= i2;
          }
          function w() {
            var e4 = b();
            if (O(e4))
              return g(e4);
            u2 = setTimeout(w, function(e5) {
              var r4 = t3 - (e5 - s2);
              return f2 ? y(r4, i2 - (e5 - l2)) : r4;
            }(e4));
          }
          function g(e4) {
            return u2 = void 0, v && o3 ? m(e4) : (o3 = n2 = void 0, c2);
          }
          function P() {
            var e4 = b(), r4 = O(e4);
            if (o3 = arguments, n2 = this, s2 = e4, r4) {
              if (void 0 === u2)
                return function(e5) {
                  return l2 = e5, u2 = setTimeout(w, t3), a2 ? m(e5) : c2;
                }(s2);
              if (f2)
                return u2 = setTimeout(w, t3), m(s2);
            }
            return void 0 === u2 && (u2 = setTimeout(w, t3)), c2;
          }
          return t3 = h(t3) || 0, d(r3) && (a2 = !!r3.leading, i2 = (f2 = "maxWait" in r3) ? p(h(r3.maxWait) || 0, t3) : i2, v = "trailing" in r3 ? !!r3.trailing : v), P.cancel = function() {
            void 0 !== u2 && clearTimeout(u2), l2 = 0, o3 = s2 = n2 = u2 = void 0;
          }, P.flush = function() {
            return void 0 === u2 ? c2 : g(b());
          }, P;
        };
      }, 96: (e2, t2, r2) => {
        var o2 = "Expected a function", n = NaN, i = "[object Symbol]", c = /^\s+|\s+$/g, u = /^[-+]0x[0-9a-f]+$/i, s = /^0b[01]+$/i, l = /^0o[0-7]+$/i, a = parseInt, f = "object" == typeof r2.g && r2.g && r2.g.Object === Object && r2.g, p = "object" == typeof self && self && self.Object === Object && self, y = f || p || Function("return this")(), b = Object.prototype.toString, d = Math.max, h = Math.min, v = function() {
          return y.Date.now();
        };
        function m(e3) {
          var t3 = typeof e3;
          return !!e3 && ("object" == t3 || "function" == t3);
        }
        function O(e3) {
          if ("number" == typeof e3)
            return e3;
          if (function(e4) {
            return "symbol" == typeof e4 || function(e5) {
              return !!e5 && "object" == typeof e5;
            }(e4) && b.call(e4) == i;
          }(e3))
            return n;
          if (m(e3)) {
            var t3 = "function" == typeof e3.valueOf ? e3.valueOf() : e3;
            e3 = m(t3) ? t3 + "" : t3;
          }
          if ("string" != typeof e3)
            return 0 === e3 ? e3 : +e3;
          e3 = e3.replace(c, "");
          var r3 = s.test(e3);
          return r3 || l.test(e3) ? a(e3.slice(2), r3 ? 2 : 8) : u.test(e3) ? n : +e3;
        }
        e2.exports = function(e3, t3, r3) {
          var n2 = true, i2 = true;
          if ("function" != typeof e3)
            throw new TypeError(o2);
          return m(r3) && (n2 = "leading" in r3 ? !!r3.leading : n2, i2 = "trailing" in r3 ? !!r3.trailing : i2), function(e4, t4, r4) {
            var n3, i3, c2, u2, s2, l2, a2 = 0, f2 = false, p2 = false, y2 = true;
            if ("function" != typeof e4)
              throw new TypeError(o2);
            function b2(t5) {
              var r5 = n3, o3 = i3;
              return n3 = i3 = void 0, a2 = t5, u2 = e4.apply(o3, r5);
            }
            function w(e5) {
              var r5 = e5 - l2;
              return void 0 === l2 || r5 >= t4 || r5 < 0 || p2 && e5 - a2 >= c2;
            }
            function g() {
              var e5 = v();
              if (w(e5))
                return P(e5);
              s2 = setTimeout(g, function(e6) {
                var r5 = t4 - (e6 - l2);
                return p2 ? h(r5, c2 - (e6 - a2)) : r5;
              }(e5));
            }
            function P(e5) {
              return s2 = void 0, y2 && n3 ? b2(e5) : (n3 = i3 = void 0, u2);
            }
            function j() {
              var e5 = v(), r5 = w(e5);
              if (n3 = arguments, i3 = this, l2 = e5, r5) {
                if (void 0 === s2)
                  return function(e6) {
                    return a2 = e6, s2 = setTimeout(g, t4), f2 ? b2(e6) : u2;
                  }(l2);
                if (p2)
                  return s2 = setTimeout(g, t4), b2(l2);
              }
              return void 0 === s2 && (s2 = setTimeout(g, t4)), u2;
            }
            return t4 = O(t4) || 0, m(r4) && (f2 = !!r4.leading, c2 = (p2 = "maxWait" in r4) ? d(O(r4.maxWait) || 0, t4) : c2, y2 = "trailing" in r4 ? !!r4.trailing : y2), j.cancel = function() {
              void 0 !== s2 && clearTimeout(s2), a2 = 0, n3 = l2 = i3 = s2 = void 0;
            }, j.flush = function() {
              return void 0 === s2 ? u2 : P(v());
            }, j;
          }(e3, t3, { leading: n2, maxWait: t3, trailing: i2 });
        };
      }, 703: (e2, t2, r2) => {
        "use strict";
        var o2 = r2(414);
        function n() {
        }
        function i() {
        }
        i.resetWarningCache = n, e2.exports = function() {
          function e3(e4, t4, r4, n2, i2, c) {
            if (c !== o2) {
              var u = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
              throw u.name = "Invariant Violation", u;
            }
          }
          function t3() {
            return e3;
          }
          e3.isRequired = e3;
          var r3 = { array: e3, bigint: e3, bool: e3, func: e3, number: e3, object: e3, string: e3, symbol: e3, any: e3, arrayOf: t3, element: e3, elementType: e3, instanceOf: t3, node: e3, objectOf: t3, oneOf: t3, oneOfType: t3, shape: t3, exact: t3, checkPropTypes: i, resetWarningCache: n };
          return r3.PropTypes = r3, r3;
        };
      }, 697: (e2, t2, r2) => {
        e2.exports = r2(703)();
      }, 414: (e2) => {
        "use strict";
        e2.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      } }, t = {};
      function r(o2) {
        var n = t[o2];
        if (void 0 !== n)
          return n.exports;
        var i = t[o2] = { exports: {} };
        return e[o2](i, i.exports, r), i.exports;
      }
      r.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
        return r.d(t2, { a: t2 }), t2;
      }, r.d = (e2, t2) => {
        for (var o2 in t2)
          r.o(t2, o2) && !r.o(e2, o2) && Object.defineProperty(e2, o2, { enumerable: true, get: t2[o2] });
      }, r.g = function() {
        if ("object" == typeof globalThis)
          return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e2) {
          if ("object" == typeof window)
            return window;
        }
      }(), r.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var o = {};
      (() => {
        "use strict";
        r.r(o), r.d(o, { LazyLoadComponent: () => Y, LazyLoadImage: () => ne, trackWindowScroll: () => D });
        const e2 = require_react();
        var t2 = r.n(e2), n = r(697);
        function i() {
          return "undefined" != typeof window && "IntersectionObserver" in window && "isIntersecting" in window.IntersectionObserverEntry.prototype;
        }
        function c(e3) {
          return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, c(e3);
        }
        function u(e3, t3) {
          var r2 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var o2 = Object.getOwnPropertySymbols(e3);
            t3 && (o2 = o2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), r2.push.apply(r2, o2);
          }
          return r2;
        }
        function s(e3, t3, r2) {
          return (t3 = a(t3)) in e3 ? Object.defineProperty(e3, t3, { value: r2, enumerable: true, configurable: true, writable: true }) : e3[t3] = r2, e3;
        }
        function l(e3, t3) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, a(o2.key), o2);
          }
        }
        function a(e3) {
          var t3 = function(e4, t4) {
            if ("object" !== c(e4) || null === e4)
              return e4;
            var r2 = e4[Symbol.toPrimitive];
            if (void 0 !== r2) {
              var o2 = r2.call(e4, "string");
              if ("object" !== c(o2))
                return o2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e4);
          }(e3);
          return "symbol" === c(t3) ? t3 : String(t3);
        }
        function f(e3, t3) {
          return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, f(e3, t3);
        }
        function p(e3) {
          return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, p(e3);
        }
        var y = function(e3) {
          e3.forEach(function(e4) {
            e4.isIntersecting && e4.target.onVisible();
          });
        }, b = {}, d = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t3 && f(e4, t3);
          }(h2, e3);
          var r2, o2, n2, a2, d2 = (n2 = h2, a2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t3 = p(n2);
            if (a2) {
              var r3 = p(this).constructor;
              e4 = Reflect.construct(t3, arguments, r3);
            } else
              e4 = t3.apply(this, arguments);
            return function(e5, t4) {
              if (t4 && ("object" === c(t4) || "function" == typeof t4))
                return t4;
              if (void 0 !== t4)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(e6) {
                if (void 0 === e6)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e6;
              }(e5);
            }(this, e4);
          });
          function h2(e4) {
            var t3;
            if (function(e5, t4) {
              if (!(e5 instanceof t4))
                throw new TypeError("Cannot call a class as a function");
            }(this, h2), (t3 = d2.call(this, e4)).supportsObserver = !e4.scrollPosition && e4.useIntersectionObserver && i(), t3.supportsObserver) {
              var r3 = e4.threshold;
              t3.observer = function(e5) {
                return b[e5] = b[e5] || new IntersectionObserver(y, { rootMargin: e5 + "px" }), b[e5];
              }(r3);
            }
            return t3;
          }
          return r2 = h2, o2 = [{ key: "componentDidMount", value: function() {
            this.placeholder && this.observer && (this.placeholder.onVisible = this.props.onVisible, this.observer.observe(this.placeholder)), this.supportsObserver || this.updateVisibility();
          } }, { key: "componentWillUnmount", value: function() {
            this.observer && this.placeholder && this.observer.unobserve(this.placeholder);
          } }, { key: "componentDidUpdate", value: function() {
            this.supportsObserver || this.updateVisibility();
          } }, { key: "getPlaceholderBoundingBox", value: function() {
            var e4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.scrollPosition, t3 = this.placeholder.getBoundingClientRect(), r3 = this.placeholder.style, o3 = parseInt(r3.getPropertyValue("margin-left"), 10) || 0, n3 = parseInt(r3.getPropertyValue("margin-top"), 10) || 0;
            return { bottom: e4.y + t3.bottom + n3, left: e4.x + t3.left + o3, right: e4.x + t3.right + o3, top: e4.y + t3.top + n3 };
          } }, { key: "isPlaceholderInViewport", value: function() {
            if ("undefined" == typeof window || !this.placeholder)
              return false;
            var e4 = this.props, t3 = e4.scrollPosition, r3 = e4.threshold, o3 = this.getPlaceholderBoundingBox(t3), n3 = t3.y + window.innerHeight, i2 = t3.x, c2 = t3.x + window.innerWidth, u2 = t3.y;
            return Boolean(u2 - r3 <= o3.bottom && n3 + r3 >= o3.top && i2 - r3 <= o3.right && c2 + r3 >= o3.left);
          } }, { key: "updateVisibility", value: function() {
            this.isPlaceholderInViewport() && this.props.onVisible();
          } }, { key: "render", value: function() {
            var e4 = this, r3 = this.props, o3 = r3.className, n3 = r3.height, i2 = r3.placeholder, c2 = r3.style, l2 = r3.width;
            if (i2 && "function" != typeof i2.type)
              return t2().cloneElement(i2, { ref: function(t3) {
                return e4.placeholder = t3;
              } });
            var a3 = function(e5) {
              for (var t3 = 1; t3 < arguments.length; t3++) {
                var r4 = null != arguments[t3] ? arguments[t3] : {};
                t3 % 2 ? u(Object(r4), true).forEach(function(t4) {
                  s(e5, t4, r4[t4]);
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e5, Object.getOwnPropertyDescriptors(r4)) : u(Object(r4)).forEach(function(t4) {
                  Object.defineProperty(e5, t4, Object.getOwnPropertyDescriptor(r4, t4));
                });
              }
              return e5;
            }({ display: "inline-block" }, c2);
            return void 0 !== l2 && (a3.width = l2), void 0 !== n3 && (a3.height = n3), t2().createElement("span", { className: o3, ref: function(t3) {
              return e4.placeholder = t3;
            }, style: a3 }, i2);
          } }], o2 && l(r2.prototype, o2), Object.defineProperty(r2, "prototype", { writable: false }), h2;
        }(t2().Component);
        d.propTypes = { onVisible: n.PropTypes.func.isRequired, className: n.PropTypes.string, height: n.PropTypes.oneOfType([n.PropTypes.number, n.PropTypes.string]), placeholder: n.PropTypes.element, threshold: n.PropTypes.number, useIntersectionObserver: n.PropTypes.bool, scrollPosition: n.PropTypes.shape({ x: n.PropTypes.number.isRequired, y: n.PropTypes.number.isRequired }), width: n.PropTypes.oneOfType([n.PropTypes.number, n.PropTypes.string]) }, d.defaultProps = { className: "", placeholder: null, threshold: 100, useIntersectionObserver: true };
        const h = d;
        var v = r(296), m = r.n(v), O = r(96), w = r.n(O), g = function(e3) {
          var t3 = getComputedStyle(e3, null);
          return t3.getPropertyValue("overflow") + t3.getPropertyValue("overflow-y") + t3.getPropertyValue("overflow-x");
        };
        const P = function(e3) {
          if (!(e3 instanceof HTMLElement))
            return window;
          for (var t3 = e3; t3 && t3 instanceof HTMLElement; ) {
            if (/(scroll|auto)/.test(g(t3)))
              return t3;
            t3 = t3.parentNode;
          }
          return window;
        };
        function j(e3) {
          return j = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, j(e3);
        }
        var T = ["delayMethod", "delayTime"];
        function S() {
          return S = Object.assign ? Object.assign.bind() : function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var r2 = arguments[t3];
              for (var o2 in r2)
                Object.prototype.hasOwnProperty.call(r2, o2) && (e3[o2] = r2[o2]);
            }
            return e3;
          }, S.apply(this, arguments);
        }
        function E(e3, t3) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, (void 0, n2 = function(e4, t4) {
              if ("object" !== j(e4) || null === e4)
                return e4;
              var r3 = e4[Symbol.toPrimitive];
              if (void 0 !== r3) {
                var o3 = r3.call(e4, "string");
                if ("object" !== j(o3))
                  return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e4);
            }(o2.key), "symbol" === j(n2) ? n2 : String(n2)), o2);
          }
          var n2;
        }
        function L(e3, t3) {
          return L = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, L(e3, t3);
        }
        function _(e3, t3) {
          if (t3 && ("object" === j(t3) || "function" == typeof t3))
            return t3;
          if (void 0 !== t3)
            throw new TypeError("Derived constructors may only return object or undefined");
          return I(e3);
        }
        function I(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function x(e3) {
          return x = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, x(e3);
        }
        var R = function() {
          return "undefined" == typeof window ? 0 : window.scrollX || window.pageXOffset;
        }, k = function() {
          return "undefined" == typeof window ? 0 : window.scrollY || window.pageYOffset;
        };
        const D = function(e3) {
          var r2 = function(r3) {
            !function(e4, t3) {
              if ("function" != typeof t3 && null !== t3)
                throw new TypeError("Super expression must either be null or a function");
              e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t3 && L(e4, t3);
            }(l2, r3);
            var o2, n2, c2, u2, s2 = (c2 = l2, u2 = function() {
              if ("undefined" == typeof Reflect || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if ("function" == typeof Proxy)
                return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch (e4) {
                return false;
              }
            }(), function() {
              var e4, t3 = x(c2);
              if (u2) {
                var r4 = x(this).constructor;
                e4 = Reflect.construct(t3, arguments, r4);
              } else
                e4 = t3.apply(this, arguments);
              return _(this, e4);
            });
            function l2(e4) {
              var r4;
              if (function(e5, t3) {
                if (!(e5 instanceof t3))
                  throw new TypeError("Cannot call a class as a function");
              }(this, l2), (r4 = s2.call(this, e4)).useIntersectionObserver = e4.useIntersectionObserver && i(), r4.useIntersectionObserver)
                return _(r4);
              var o3 = r4.onChangeScroll.bind(I(r4));
              return "debounce" === e4.delayMethod ? r4.delayedScroll = m()(o3, e4.delayTime) : "throttle" === e4.delayMethod && (r4.delayedScroll = w()(o3, e4.delayTime)), r4.state = { scrollPosition: { x: R(), y: k() } }, r4.baseComponentRef = t2().createRef(), r4;
            }
            return o2 = l2, (n2 = [{ key: "componentDidMount", value: function() {
              this.addListeners();
            } }, { key: "componentWillUnmount", value: function() {
              this.removeListeners();
            } }, { key: "componentDidUpdate", value: function() {
              "undefined" == typeof window || this.useIntersectionObserver || P(this.baseComponentRef.current) !== this.scrollElement && (this.removeListeners(), this.addListeners());
            } }, { key: "addListeners", value: function() {
              "undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement = P(this.baseComponentRef.current), this.scrollElement.addEventListener("scroll", this.delayedScroll, { passive: true }), window.addEventListener("resize", this.delayedScroll, { passive: true }), this.scrollElement !== window && window.addEventListener("scroll", this.delayedScroll, { passive: true }));
            } }, { key: "removeListeners", value: function() {
              "undefined" == typeof window || this.useIntersectionObserver || (this.scrollElement.removeEventListener("scroll", this.delayedScroll), window.removeEventListener("resize", this.delayedScroll), this.scrollElement !== window && window.removeEventListener("scroll", this.delayedScroll));
            } }, { key: "onChangeScroll", value: function() {
              this.useIntersectionObserver || this.setState({ scrollPosition: { x: R(), y: k() } });
            } }, { key: "render", value: function() {
              var r4 = this.props, o3 = (r4.delayMethod, r4.delayTime, function(e4, t3) {
                if (null == e4)
                  return {};
                var r5, o4, n4 = function(e5, t4) {
                  if (null == e5)
                    return {};
                  var r6, o5, n5 = {}, i3 = Object.keys(e5);
                  for (o5 = 0; o5 < i3.length; o5++)
                    r6 = i3[o5], t4.indexOf(r6) >= 0 || (n5[r6] = e5[r6]);
                  return n5;
                }(e4, t3);
                if (Object.getOwnPropertySymbols) {
                  var i2 = Object.getOwnPropertySymbols(e4);
                  for (o4 = 0; o4 < i2.length; o4++)
                    r5 = i2[o4], t3.indexOf(r5) >= 0 || Object.prototype.propertyIsEnumerable.call(e4, r5) && (n4[r5] = e4[r5]);
                }
                return n4;
              }(r4, T)), n3 = this.useIntersectionObserver ? null : this.state.scrollPosition;
              return t2().createElement(e3, S({ forwardRef: this.baseComponentRef, scrollPosition: n3 }, o3));
            } }]) && E(o2.prototype, n2), Object.defineProperty(o2, "prototype", { writable: false }), l2;
          }(t2().Component);
          return r2.propTypes = { delayMethod: n.PropTypes.oneOf(["debounce", "throttle"]), delayTime: n.PropTypes.number, useIntersectionObserver: n.PropTypes.bool }, r2.defaultProps = { delayMethod: "throttle", delayTime: 300, useIntersectionObserver: true }, r2;
        };
        function C(e3) {
          return C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, C(e3);
        }
        function B(e3, t3) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, (void 0, n2 = function(e4, t4) {
              if ("object" !== C(e4) || null === e4)
                return e4;
              var r3 = e4[Symbol.toPrimitive];
              if (void 0 !== r3) {
                var o3 = r3.call(e4, "string");
                if ("object" !== C(o3))
                  return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e4);
            }(o2.key), "symbol" === C(n2) ? n2 : String(n2)), o2);
          }
          var n2;
        }
        function M(e3, t3) {
          return M = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, M(e3, t3);
        }
        function N(e3) {
          return N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, N(e3);
        }
        var V = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t3 && M(e4, t3);
          }(u2, e3);
          var r2, o2, n2, i2, c2 = (n2 = u2, i2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t3 = N(n2);
            if (i2) {
              var r3 = N(this).constructor;
              e4 = Reflect.construct(t3, arguments, r3);
            } else
              e4 = t3.apply(this, arguments);
            return function(e5, t4) {
              if (t4 && ("object" === C(t4) || "function" == typeof t4))
                return t4;
              if (void 0 !== t4)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(e6) {
                if (void 0 === e6)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e6;
              }(e5);
            }(this, e4);
          });
          function u2(e4) {
            return function(e5, t3) {
              if (!(e5 instanceof t3))
                throw new TypeError("Cannot call a class as a function");
            }(this, u2), c2.call(this, e4);
          }
          return r2 = u2, (o2 = [{ key: "render", value: function() {
            return t2().createElement(h, this.props);
          } }]) && B(r2.prototype, o2), Object.defineProperty(r2, "prototype", { writable: false }), u2;
        }(t2().Component);
        const W = D(V);
        function z(e3) {
          return z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, z(e3);
        }
        function $(e3, t3) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, (void 0, n2 = function(e4, t4) {
              if ("object" !== z(e4) || null === e4)
                return e4;
              var r3 = e4[Symbol.toPrimitive];
              if (void 0 !== r3) {
                var o3 = r3.call(e4, "string");
                if ("object" !== z(o3))
                  return o3;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e4);
            }(o2.key), "symbol" === z(n2) ? n2 : String(n2)), o2);
          }
          var n2;
        }
        function U(e3, t3) {
          return U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, U(e3, t3);
        }
        function F(e3) {
          if (void 0 === e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e3;
        }
        function q(e3) {
          return q = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, q(e3);
        }
        var H = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t3 && U(e4, t3);
          }(s2, e3);
          var r2, o2, n2, c2, u2 = (n2 = s2, c2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t3 = q(n2);
            if (c2) {
              var r3 = q(this).constructor;
              e4 = Reflect.construct(t3, arguments, r3);
            } else
              e4 = t3.apply(this, arguments);
            return function(e5, t4) {
              if (t4 && ("object" === z(t4) || "function" == typeof t4))
                return t4;
              if (void 0 !== t4)
                throw new TypeError("Derived constructors may only return object or undefined");
              return F(e5);
            }(this, e4);
          });
          function s2(e4) {
            var t3;
            !function(e5, t4) {
              if (!(e5 instanceof t4))
                throw new TypeError("Cannot call a class as a function");
            }(this, s2), t3 = u2.call(this, e4);
            var r3 = e4.afterLoad, o3 = e4.beforeLoad, n3 = e4.scrollPosition, i2 = e4.visibleByDefault;
            return t3.state = { visible: i2 }, i2 && (o3(), r3()), t3.onVisible = t3.onVisible.bind(F(t3)), t3.isScrollTracked = Boolean(n3 && Number.isFinite(n3.x) && n3.x >= 0 && Number.isFinite(n3.y) && n3.y >= 0), t3;
          }
          return r2 = s2, (o2 = [{ key: "componentDidUpdate", value: function(e4, t3) {
            t3.visible !== this.state.visible && this.props.afterLoad();
          } }, { key: "onVisible", value: function() {
            this.props.beforeLoad(), this.setState({ visible: true });
          } }, { key: "render", value: function() {
            if (this.state.visible)
              return this.props.children;
            var e4 = this.props, r3 = e4.className, o3 = e4.delayMethod, n3 = e4.delayTime, c3 = e4.height, u3 = e4.placeholder, s3 = e4.scrollPosition, l2 = e4.style, a2 = e4.threshold, f2 = e4.useIntersectionObserver, p2 = e4.width;
            return this.isScrollTracked || f2 && i() ? t2().createElement(h, { className: r3, height: c3, onVisible: this.onVisible, placeholder: u3, scrollPosition: s3, style: l2, threshold: a2, useIntersectionObserver: f2, width: p2 }) : t2().createElement(W, { className: r3, delayMethod: o3, delayTime: n3, height: c3, onVisible: this.onVisible, placeholder: u3, style: l2, threshold: a2, width: p2 });
          } }]) && $(r2.prototype, o2), Object.defineProperty(r2, "prototype", { writable: false }), s2;
        }(t2().Component);
        H.propTypes = { afterLoad: n.PropTypes.func, beforeLoad: n.PropTypes.func, useIntersectionObserver: n.PropTypes.bool, visibleByDefault: n.PropTypes.bool }, H.defaultProps = { afterLoad: function() {
          return {};
        }, beforeLoad: function() {
          return {};
        }, useIntersectionObserver: true, visibleByDefault: false };
        const Y = H;
        function X(e3) {
          return X = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e4) {
            return typeof e4;
          } : function(e4) {
            return e4 && "function" == typeof Symbol && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
          }, X(e3);
        }
        var A = ["afterLoad", "beforeLoad", "delayMethod", "delayTime", "effect", "placeholder", "placeholderSrc", "scrollPosition", "threshold", "useIntersectionObserver", "visibleByDefault", "wrapperClassName", "wrapperProps"];
        function G(e3, t3) {
          var r2 = Object.keys(e3);
          if (Object.getOwnPropertySymbols) {
            var o2 = Object.getOwnPropertySymbols(e3);
            t3 && (o2 = o2.filter(function(t4) {
              return Object.getOwnPropertyDescriptor(e3, t4).enumerable;
            })), r2.push.apply(r2, o2);
          }
          return r2;
        }
        function J(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var r2 = null != arguments[t3] ? arguments[t3] : {};
            t3 % 2 ? G(Object(r2), true).forEach(function(t4) {
              K(e3, t4, r2[t4]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(r2)) : G(Object(r2)).forEach(function(t4) {
              Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(r2, t4));
            });
          }
          return e3;
        }
        function K(e3, t3, r2) {
          return (t3 = ee(t3)) in e3 ? Object.defineProperty(e3, t3, { value: r2, enumerable: true, configurable: true, writable: true }) : e3[t3] = r2, e3;
        }
        function Q() {
          return Q = Object.assign ? Object.assign.bind() : function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var r2 = arguments[t3];
              for (var o2 in r2)
                Object.prototype.hasOwnProperty.call(r2, o2) && (e3[o2] = r2[o2]);
            }
            return e3;
          }, Q.apply(this, arguments);
        }
        function Z(e3, t3) {
          for (var r2 = 0; r2 < t3.length; r2++) {
            var o2 = t3[r2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, ee(o2.key), o2);
          }
        }
        function ee(e3) {
          var t3 = function(e4, t4) {
            if ("object" !== X(e4) || null === e4)
              return e4;
            var r2 = e4[Symbol.toPrimitive];
            if (void 0 !== r2) {
              var o2 = r2.call(e4, "string");
              if ("object" !== X(o2))
                return o2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e4);
          }(e3);
          return "symbol" === X(t3) ? t3 : String(t3);
        }
        function te(e3, t3) {
          return te = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e4, t4) {
            return e4.__proto__ = t4, e4;
          }, te(e3, t3);
        }
        function re(e3) {
          return re = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e4) {
            return e4.__proto__ || Object.getPrototypeOf(e4);
          }, re(e3);
        }
        var oe = function(e3) {
          !function(e4, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Super expression must either be null or a function");
            e4.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e4, writable: true, configurable: true } }), Object.defineProperty(e4, "prototype", { writable: false }), t3 && te(e4, t3);
          }(u2, e3);
          var r2, o2, n2, i2, c2 = (n2 = u2, i2 = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
              return false;
            if (Reflect.construct.sham)
              return false;
            if ("function" == typeof Proxy)
              return true;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
              })), true;
            } catch (e4) {
              return false;
            }
          }(), function() {
            var e4, t3 = re(n2);
            if (i2) {
              var r3 = re(this).constructor;
              e4 = Reflect.construct(t3, arguments, r3);
            } else
              e4 = t3.apply(this, arguments);
            return function(e5, t4) {
              if (t4 && ("object" === X(t4) || "function" == typeof t4))
                return t4;
              if (void 0 !== t4)
                throw new TypeError("Derived constructors may only return object or undefined");
              return function(e6) {
                if (void 0 === e6)
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e6;
              }(e5);
            }(this, e4);
          });
          function u2(e4) {
            var t3;
            return function(e5, t4) {
              if (!(e5 instanceof t4))
                throw new TypeError("Cannot call a class as a function");
            }(this, u2), (t3 = c2.call(this, e4)).state = { loaded: false }, t3;
          }
          return r2 = u2, (o2 = [{ key: "onImageLoad", value: function() {
            var e4 = this;
            return this.state.loaded ? null : function(t3) {
              e4.props.onLoad(t3), e4.props.afterLoad(), e4.setState({ loaded: true });
            };
          } }, { key: "getImg", value: function() {
            var e4 = this.props, r3 = (e4.afterLoad, e4.beforeLoad, e4.delayMethod, e4.delayTime, e4.effect, e4.placeholder, e4.placeholderSrc, e4.scrollPosition, e4.threshold, e4.useIntersectionObserver, e4.visibleByDefault, e4.wrapperClassName, e4.wrapperProps, function(e5, t3) {
              if (null == e5)
                return {};
              var r4, o3, n3 = function(e6, t4) {
                if (null == e6)
                  return {};
                var r5, o4, n4 = {}, i4 = Object.keys(e6);
                for (o4 = 0; o4 < i4.length; o4++)
                  r5 = i4[o4], t4.indexOf(r5) >= 0 || (n4[r5] = e6[r5]);
                return n4;
              }(e5, t3);
              if (Object.getOwnPropertySymbols) {
                var i3 = Object.getOwnPropertySymbols(e5);
                for (o3 = 0; o3 < i3.length; o3++)
                  r4 = i3[o3], t3.indexOf(r4) >= 0 || Object.prototype.propertyIsEnumerable.call(e5, r4) && (n3[r4] = e5[r4]);
              }
              return n3;
            }(e4, A));
            return t2().createElement("img", Q({}, r3, { onLoad: this.onImageLoad() }));
          } }, { key: "getLazyLoadImage", value: function() {
            var e4 = this.props, r3 = e4.beforeLoad, o3 = e4.className, n3 = e4.delayMethod, i3 = e4.delayTime, c3 = e4.height, u3 = e4.placeholder, s2 = e4.scrollPosition, l2 = e4.style, a2 = e4.threshold, f2 = e4.useIntersectionObserver, p2 = e4.visibleByDefault, y2 = e4.width;
            return t2().createElement(Y, { beforeLoad: r3, className: o3, delayMethod: n3, delayTime: i3, height: c3, placeholder: u3, scrollPosition: s2, style: l2, threshold: a2, useIntersectionObserver: f2, visibleByDefault: p2, width: y2 }, this.getImg());
          } }, { key: "getWrappedLazyLoadImage", value: function(e4) {
            var r3 = this.props, o3 = r3.effect, n3 = r3.height, i3 = r3.placeholderSrc, c3 = r3.width, u3 = r3.wrapperClassName, s2 = r3.wrapperProps, l2 = this.state.loaded, a2 = l2 ? " lazy-load-image-loaded" : "", f2 = l2 || !i3 ? {} : { backgroundImage: "url(".concat(i3, ")"), backgroundSize: "100% 100%" };
            return t2().createElement("span", Q({ className: u3 + " lazy-load-image-background " + o3 + a2, style: J(J({}, f2), {}, { color: "transparent", display: "inline-block", height: n3, width: c3 }) }, s2), e4);
          } }, { key: "render", value: function() {
            var e4 = this.props, t3 = e4.effect, r3 = e4.placeholderSrc, o3 = e4.visibleByDefault, n3 = e4.wrapperClassName, i3 = e4.wrapperProps, c3 = this.getLazyLoadImage();
            return (t3 || r3) && !o3 || n3 || i3 ? this.getWrappedLazyLoadImage(c3) : c3;
          } }]) && Z(r2.prototype, o2), Object.defineProperty(r2, "prototype", { writable: false }), u2;
        }(t2().Component);
        oe.propTypes = { onLoad: n.PropTypes.func, afterLoad: n.PropTypes.func, beforeLoad: n.PropTypes.func, delayMethod: n.PropTypes.string, delayTime: n.PropTypes.number, effect: n.PropTypes.string, placeholderSrc: n.PropTypes.string, threshold: n.PropTypes.number, useIntersectionObserver: n.PropTypes.bool, visibleByDefault: n.PropTypes.bool, wrapperClassName: n.PropTypes.string, wrapperProps: n.PropTypes.object }, oe.defaultProps = { onLoad: function() {
        }, afterLoad: function() {
          return {};
        }, beforeLoad: function() {
          return {};
        }, delayMethod: "throttle", delayTime: 300, effect: "", placeholderSrc: null, threshold: 100, useIntersectionObserver: true, visibleByDefault: false, wrapperClassName: "" };
        const ne = oe;
      })(), module.exports = o;
    })();
  }
});

// app/routes/news.tsx
var import_react = __toESM(require_react(), 1);
var import_react_lazy_load_image_component = __toESM(require_build(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\news.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\news.tsx"
  );
  import.meta.hot.lastModified = "1756346453210.15";
}
var {
  LazyLoadImage
} = import_react_lazy_load_image_component.default;
function meta() {
  return [{
    title: "News"
  }];
}
var newsItems = [{
  title: "FARMEX Corporation Recognized",
  description: "FARMEX Corporation Recognized as Learning Site for Agriculture I",
  image: "/news1.png",
  author: "-Jayson S. Baldoz, Project Supervisor",
  content: `FARMEX Corporation was officially awarded the Learning Site for Agriculture I (LSA I) Certificate by the Agricultural Training Institute \u2013 CALABARZON (ATI-CALABARZON) on May 2, 2025, during a ceremony held at its station in Brgy. Bangyas, Calauan, Laguna.

The event featured key messages from ATI-CALABARZON Center Director Dr. Rolando V. Maningas, FARMEX Chief Operations Officer Mr. Arturo A. Alejar, and Ms. Angelica A. Belarmino, Operations Manager and LSA cooperator, along with the signing of a Memorandum of Understanding (MOU) between the two organizations.

\u201CAng kasunduang ito ay tanda ng pagsisimula ng ating pagtutulungan upang higit nating maabot ang mga magsasakang Pilipino at mapabuti ang kanilang kabuhayan sa pamamagitan ng pagpapalaganap ng mga makabago at angkop na teknolohiya sa pagsasaka,\u201D said Dir. Rolando V. Maningas during his message at the event.

FARMEX also presented its plans for facility and project development as an LSA through Ms. Myrille T. Adlus (Business Development Manager) and Engr. Karlo Miguel Santos (LEADSTECH Operations Manager).

This was followed by the unveiling of the LSA billboard, a guided tour of the farm and its facilities, and a photo opportunity. As an accredited Learning Site, FARMEX will now serve as a hub for knowledge sharing, sustainable farming practices, and farmer capacity-building in the region.

The event was facilitated by ATI-CALABARZON staff, led by Ms. Abbie del Rosario, Partnerships and Accreditation Section Chief, and Ms. Soledad E. Leal, Agriculturist II and ATI-LSA Focal Person. It was witnessed by executives from the LEADS Group of Companies, including Senior Vice President Romeo Obcena Jr., HR Director Almicko Reyes, Engr. Kelvin Chryzth Velasquez (Chief HR and Transformation Officer of Malveda Holdings Corporation), and Vice President for Finance Catalina Malveda.

The Learning Site for Agriculture (LSA) program is one of ATI\u2019s strategies to promote sustainable and practical agriculture through farm-based learning. An LSA I is a private farm accredited by ATI to serve as a model learning venue where farmers and stakeholders can observe, learn, and adopt best practices and technologies in agriculture.

FARMEX Corporation, a newly ATI-Certified Learning Site for Agriculture I (LSA I), proudly hosted its first batch of farmer training following the official awarding of its LSA I certificate last May. The five-day course, conducted by the Department of Agriculture - Agricultural Training Institute (DA-ATI) CALABARZON, was held on June 9\u201313, 2025, and focused on strengthening the capabilities of farmers in harvest and post-harvest management to improve Rice Processing Center (RPC) operations.

Held at the FARMEX demonstration site in Brgy. Bangyas, Calauan, Laguna, the training brought together 25 farmer-leaders from different rice clusters/associations in Rizal and Quezon provinces. The activity was conducted in partnership with the Philippine Center for Postharvest Development and Mechanization (PhilMech) and the Coalition Alliance of Farmers in Santa Cruz, Laguna (CAFSCL).

The training program included lectures, field demonstrations, and hands-on activities covering the correct use and maintenance of vital post-harvest machinery such as multi-stage rice mills and mechanical dryers. These sessions aimed to help reduce post-harvest losses, enhance grain quality, and improve the overall efficiency of community-based RPCs.

Dr. Rolando V. Maningas, Center Director of DA-ATI CALABARZON, personally attended the closing program and delivered an inspiring message to the participants. He encouraged them to apply their newly acquired knowledge in their farming communities and to serve as advocates of improved rice post-harvest practices.

As a newly certified LSA I, FARMEX Corporation is honored to contribute to the capacity-building of Filipino farmers and remains committed to supporting ATI\u2019s mission of empowering rural communities through training, innovation, and sustainable agricultural practices.`
}, {
  title: "FARMEX  Regional Training",
  description: "FARMEX Hosts Regional Training on Rice Harvest and Post-Harvest Management",
  image: "/news2.png",
  author: "-Jayson S. Baldoz, Project Supervisor",
  content: `FARMEX Corporation, a newly ATI-Certified Learning Site for Agriculture I (LSA I), proudly hosted its first batch of farmer training following the official awarding of its LSA I certificate last May. The five-day course, conducted by the Department of Agriculture - Agricultural Training Institute (DA-ATI) CALABARZON, was held on June 9\u201313, 2025, and focused on strengthening the capabilities of farmers in harvest and post-harvest management to improve Rice Processing Center (RPC) operations.

Held at the FARMEX demonstration site in Brgy. Bangyas, Calauan, Laguna, the training brought together 25 farmer-leaders from different rice clusters/associations in Rizal and Quezon provinces. The activity was conducted in partnership with the Philippine Center for Postharvest Development and Mechanization (PhilMech) and the Coalition Alliance of Farmers in Santa Cruz, Laguna (CAFSCL).

The training program included lectures, field demonstrations, and hands-on activities covering the correct use and maintenance of vital post-harvest machinery such as multi-stage rice mills and mechanical dryers. These sessions aimed to help reduce post-harvest losses, enhance grain quality, and improve the overall efficiency of community-based RPCs.

Dr. Rolando V. Maningas, Center Director of DA-ATI CALABARZON, personally attended the closing program and delivered an inspiring message to the participants. He encouraged them to apply their newly acquired knowledge in their farming communities and to serve as advocates of improved rice post-harvest practices.

As a newly certified LSA I, FARMEX Corporation is honored to contribute to the capacity-building of Filipino farmers and remains committed to supporting ATI\u2019s mission of empowering rural communities through training, innovation, and sustainable agricultural practices.`
}, {
  title: "LEADS Agriventures Corporation Showcases Jackpot 102",
  description: "LEADS Agriventures Corporation Showcases Jackpot 102 at Licab\u2019s Kariton Festival",
  image: "/news3.png",
  author: "-Jayson S. Baldoz, Project Supervisor",
  content: `LEADS Agriventures Corporation (LAV) proudly showcased its famous Jackpot 102 hybrid rice variety at the Kariton Festival in Licab, Nueva Ecija, held on March 29, 2025, in celebration of Licab\u2019s 131st Founding Anniversary.

The festival featured a grand parade of kariton (wooden cart) floats, each uniquely decorated to highlight Licab\u2019s rich agricultural heritage. LAV\u2019s float, pulled by a kalabaw (carabao), stood out with its innovative display of ready-to-harvest Jackpot 102 rice plants in pots, that symbolizes the fusion of tradition and modern farming.

Thousands of spectators lined the streets as the parade made its way from Exequiel R. Lina High School, through Don Dalmacio Avenue, and concluded at Liwasang Dalmacio. The festivities also included a Street Dancing Competition, with students from various high schools showcasing vibrant performances, and the much-anticipated Binibining Licab 2025 beauty pageant.

Through their participation, LAV, together with LEADS Agricultural Products Corporation, reaffirmed their commitment to empowering Filipino farmers by providing high-quality seeds, agrochemicals, and innovative farming solutions. Jackpot 102, known for its exceptional yield and grain quality, remains a preferred choice among farmers in Nueva Ecija and beyond.

The return of the Kariton Festival after a five-year hiatus due to COVID-19 was a significant moment for the community. LEADS Agriventures Corporation\u2019s participation was made possible through the initiative of Mr. Randolph Diaz, with the strong support of Chief Operations Officer Mr. Arturo A. Alejar Jr. and Business Development Manager Ms. Myrille T. Adlus.

Through this event, LAV\u2019s presence left a lasting impression on festival-goers and reinforced its commitment to strengthening the agriculture sector\u2014the backbone of the country.`
}, {
  title: "RiceBoard Elects New Officers for 2025\u20132026",
  description: "The Rice Advocacy Inc. (RiceBoard) has elected its new set of officers for 2025\u20132026",
  image: "/news4.png",
  author: "",
  content2: "(from left to right: Bonn August Decena (Atlas Fertilizer Corp.), Devadatta Sirdeshpande (Bioseed Research), Joseph Fajardo (TAO Seeds), Recher Ondap (Bayer CropScience, former RB President), Ivy Escobin (ProAgri Seed Corporation), Ruby Eduarte (Syngenta Phils), Jojo Alejar (Farmex Corporation), Anthony Tan (New Hope Corporation) and Dr. Narciso Intal (Inavet Nutrition Technologies Inc.)",
  content: `The Rice Advocacy Inc. (RiceBoard) has elected its new set of officers for 2025\u20132026 on April 11, 2025, marking a new chapter in its ongoing mission to uplift the Philippine rice industry.

Arturo \u201CJojo\u201D A. Alejar, Jr. of Farmex Corporation (formerly Leads Agriventures) was elected as President, with Anthony Tan of New Hope as Vice President, Ruby Eduarte of Syngenta as Secretary, Ivy Escobin of PASCO as Treasurer, and Bonn August Decena of Atlas, Devadatta Sirdeshpande of Bioseed and Joseph Fajardo of TAO Seeds as Auditors.

The RiceBoard is a key organization that plays a critical role in representing seed companies and input providers committed to advancing rice productivity in the Philippines.

As a unified body, the RiceBoard consolidates the expertise and resources of both multinational and local seed companies. It serves as a vital channel for disseminating the latest agricultural innovations, such as advanced hybrid rice varieties, drone-assisted farming, and biofertilizer applications directly to rice farmers across the country. These contributions support the broader goal of transforming the Philippine rice sector into a globally competitive and self-reliant industry.

More than just an association of seed companies, the organization actively collaborates with the Department of Agriculture (DA) and continues to be an instrumental partner in helping the DA navigate issues stemming from various rice supply issues, technology adoption and other policy developments.

The new leadership and unified voice of the RiceBoard allows to advocate more on behalf of the industry ensuring that the private sector's insights and innovations are integrated into national agricultural strategies.`
}, {
  title: "USDA Visits LAV for Rice Industry Discussion",
  description: "A delegation from the United States Department of Agriculture (USDA), led by Agricultural Counselor Michael Ward.",
  image: "/news5.png",
  author: "",
  content2: "In the photo (from left):\xA0Sherwin Hermosa, USDA Agricultural Counselor Michael Ward, Mayflor Gamino, Myrille Adlus, Angelica Belarmino, USDA Agricultural Specialists: Tricia Joy Arroyo and Florence Sevilla.",
  content: `A delegation from the United States Department of Agriculture (USDA), led by Agricultural Counselor Michael Ward, visited Leads Agriventures (LAV) on August 22, 2024 to discuss the current state of the rice industry in the Philippines. LAV, in collaboration with the LAPC, provided valuable insights into the challenges and opportunities facing the sector.

The USDA expressed interest in gaining a private-sector perspective on the country's rice situation, including an outlook on future developments. Key topics discussed included the extension of the Rice Competitiveness Enhancement Fund (RCEF) program by the Philippine Department of Agriculture until 2030, current industry statistics, regulatory concerns, and potential areas where the USDA could support the Philippine government in improving rice production.

Additionally, discussions touched on the Department of Agriculture\u2019s export priorities, which include rice alongside mangosteen, pineapple, young coconut, and durian, as part of efforts to expand agricultural exports to the U.S. market.`
}, {
  title: "Leads explored the hybrid rice seed technologies",
  description: "Leads explored the hybrid rice seed technologies at Winall China Headquarters in Anhui Province last September 1, 2023.",
  image: "/news6.png",
  author: "",
  content: `Leads explored the hybrid rice seed technologies at Winall China Headquarters in Anhui Province last September 1, 2023. Winall, a strong player in the hybrid rice seed industry and currently holds the second position in market share in China, warmly welcomed the Leads delegation led by Mr. Arturo A. Alejar, Jr., Leads Agriventures\u2019 Chief Operations Officer.

The visit started with a tour of Winall\u2019s exhibit area, showcasing their top-performing varieties. After an insightful tour, Leads presented to Winall an overview of the hybrid rice seed production and distribution landscape in the Philippines. The discussion extended to some upcoming marketing programs for rice and the sales forecast of Jackpot 102 for the next three years.

Leads delegates also explored Winall\u2019s advanced laboratory, cold storage facilities, repacking plants, and research center where nearly 400 hybrid rice seed varieties are undergoing rigorous trials. Impressed by the growing market share of Jackpot 102, Winall committed to supporting Leads in establishing its local seed production trial. This collaborative effort aims to deliver and introduce more suitable seed varieties in Philippine conditions aligning with consumer preferences.

The visit resulted in a strengthened partnership between Leads and Winall, both companies committed to increasing the market presence of Jackpot 102 and subsequently, introducing other Winall varieties in the Philippine market.`
}];
var newsSlides = {
  0: [{
    src: "/news1 1.png",
    alt: "FARMEX Corporation Recognized"
  }, {
    src: "/news1 7.JPG",
    alt: "FARMEX Corporation Recognized"
  }, {
    src: "/news1 8.JPG",
    alt: "FARMEX Corporation Recognized"
  }, {
    src: "/news1 3.png",
    alt: "FARMEX Corporation Recognized"
  }, {
    src: "/news1 4.png",
    alt: "FARMEX Corporation Recognized"
  }, {
    src: "/news1 5.png",
    alt: "FARMEX Corporation Recognized"
  }, {
    src: "/news1 6.JPG",
    alt: "FARMEX Corporation Recognized"
  }],
  1: [{
    src: "/news2 1.png",
    alt: "FARMEX  Regional Training"
  }, {
    src: "/news2 2.png",
    alt: "FARMEX  Regional Training"
  }, {
    src: "/news2 3.png",
    alt: "FARMEX  Regional Training"
  }, {
    src: "/news2 4.png",
    alt: "FARMEX  Regional Training"
  }, {
    src: "/news2 5.png",
    alt: "FARMEX  Regional Training"
  }, {
    src: "/news2 6.png",
    alt: "FARMEX  Regional Training"
  }],
  2: [{
    src: "/news3 1.png",
    alt: "LEADS Agriventures Corporation Showcases Jackpot 102"
  }, {
    src: "/news3 2.png",
    alt: "LEADS Agriventures Corporation Showcases Jackpot 102"
  }, {
    src: "/news3 3.png",
    alt: "LEADS Agriventures Corporation Showcases Jackpot 102"
  }, {
    src: "/news3 4.png",
    alt: "LEADS Agriventures Corporation Showcases Jackpot 102"
  }, {
    src: "/news3 5.png",
    alt: "LEADS Agriventures Corporation Showcases Jackpot 102"
  }, {
    src: "/news3 6.png",
    alt: "LEADS Agriventures Corporation Showcases Jackpot 102"
  }, {
    src: "/news3 7.png",
    alt: "LEADS Agriventures Corporation Showcases Jackpot 102"
  }, {
    src: "/news3 8.png",
    alt: "LEADS Agriventures Corporation Showcases Jackpot 102"
  }],
  3: [{
    src: "/news4 1.png",
    alt: "RiceBoard Elects New Officers for 2025\u20132026"
  }],
  4: [{
    src: "/news5 1.png",
    alt: "USDA Visits LAV for Rice Industry Discussion"
  }],
  5: [{
    src: "/news6 1.png",
    alt: "Leads explored the hybrid rice seed technologies"
  }, {
    src: "/news6 5.jpg",
    alt: "Leads explored the hybrid rice seed technologies"
  }, {
    src: "/news6 3.png",
    alt: "Leads explored the hybrid rice seed technologies"
  }, {
    src: "/news6 4.png",
    alt: "Leads explored the hybrid rice seed technologies"
  }]
};
function SliderModal({
  images,
  title,
  author,
  content,
  content2,
  onClose
}) {
  _s();
  const [index, setIndex] = (0, import_react.useState)(0);
  const touchStartXRef = (0, import_react.useRef)(null);
  const prev = () => setIndex((i) => i === 0 ? images.length - 1 : i - 1);
  const next = () => setIndex((i) => i === images.length - 1 ? 0 : i + 1);
  (0, import_react.useEffect)(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape")
        onClose();
      if (e.key === "ArrowLeft" && images.length > 1)
        prev();
      if (e.key === "ArrowRight" && images.length > 1)
        next();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKey);
    };
  }, [images.length, onClose]);
  const onTouchStart = (e) => {
    touchStartXRef.current = e.changedTouches[0].screenX;
  };
  const onTouchEnd = (e) => {
    const startX = touchStartXRef.current;
    if (startX == null)
      return;
    const delta = e.changedTouches[0].screenX - startX;
    touchStartXRef.current = null;
    if (Math.abs(delta) < 40 || images.length <= 1)
      return;
    if (delta > 0)
      prev();
    else
      next();
  };
  const [isMobile, setIsMobile] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative rounded-lg shadow-xl w-full max-w-5xl p-6 pt-12 overflow-y-auto max-h-[95vh] bg-no-repeat bg-cover bg-center", style: {
    backgroundImage: "url('/productbg1.png')",
    backgroundSize: "100% 100%"
  }, onClick: (e) => e.stopPropagation(), onTouchStart, onTouchEnd, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onClose, className: "absolute top-3 right-4 text-gray-600 hover:text-black text-3xl font-bold z-50", children: "\xD7" }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 278,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex items-center justify-center mb-6", children: [
      images.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: prev, className: "absolute left-0 text-2xl text-green-800 px-3 py-1 font-bold bg-black/40 rounded-full hover:bg-gray-800 transition", children: "<" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 284,
        columnNumber: 33
      }, this),
      isMobile ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: images[index].src, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LazyLoadImage, { src: images[index].src, alt: images[index].alt, className: "max-h-[35vh] md:max-h-[60vh] object-contain rounded-md border-4 border-green-700 cursor-zoom-in" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 288,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 287,
        columnNumber: 23
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LazyLoadImage, { src: images[index].src, alt: images[index].alt, className: "max-h-[35vh] md:max-h-[60vh] object-contain rounded-md border-4 border-green-700" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 289,
        columnNumber: 20
      }, this),
      images.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs bg-black/40 px-2 py-0.5 rounded", children: [
        index + 1,
        " / ",
        images.length
      ] }, void 0, true, {
        fileName: "app/routes/news.tsx",
        lineNumber: 291,
        columnNumber: 33
      }, this),
      images.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: next, className: "absolute right-0 text-2xl text-green-800 px-3 py-1 font-bold bg-black/40 rounded-full hover:bg-gray-800 transition", children: ">" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 294,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/news.tsx",
      lineNumber: 283,
      columnNumber: 9
    }, this),
    images.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-6", children: images.map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { "aria-label": `Go to slide ${i + 1}`, onClick: () => setIndex(i), className: `mx-1 w-2.5 h-2.5 rounded-full ${i === index ? "bg-green-700" : "bg-gray-300"}` }, i, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 301,
      columnNumber: 35
    }, this)) }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 300,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-left px-2", children: [
      content2 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-[12px] italic leading-relaxed whitespace-pre-line mb-6", children: content2 }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 306,
        columnNumber: 24
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-gray-800 mb-1", children: title }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 309,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 italic mb-4", children: author }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 310,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-base leading-relaxed whitespace-pre-line", children: content }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 311,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/news.tsx",
      lineNumber: 305,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/news.tsx",
    lineNumber: 273,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/news.tsx",
    lineNumber: 272,
    columnNumber: 10
  }, this);
}
_s(SliderModal, "k+z6xl+v1nURMU62eovZ2G3dYMk=");
_c = SliderModal;
function News() {
  _s2();
  const [isClient, setIsClient] = (0, import_react.useState)(false);
  const [selectedNewsIndex, setSelectedNewsIndex] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    setIsClient(true);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative min-h-screen w-full", children: [
      isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LazyLoadImage, { src: "/bgnews.png", alt: "News Background", className: "absolute inset-0 w-full h-full object-cover z-0" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 332,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10 flex flex-col items-center min-h-screen px-4 py-20 space-y-8 mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-6xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-3xl md:text-4xl font-extrabold uppercase tracking-widest", children: "Events" }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 338,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 337,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-no-repeat bg-center bg-contain p-8 md:p-12 max-w-6xl w-full text-center mt-20", style: {
          backgroundImage: "url('/newbgevents.png')",
          backgroundSize: "100% 100%"
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: newsItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "shadow-md flex flex-col overflow-hidden h-[480px]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LazyLoadImage, { src: item.image, alt: item.title, className: "w-full h-[180px] object-cover", loading: "lazy" }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 352,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-between bg-gradient-to-tr from-[#788B5F] to-[#2A4127] flex-grow", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-left text-white px-3 pt-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-5 text-white", children: item.title }, void 0, false, {
                fileName: "app/routes/news.tsx",
                lineNumber: 359,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base font-light", children: item.description }, void 0, false, {
                fileName: "app/routes/news.tsx",
                lineNumber: 364,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-right text-white mt-4", children: item.author }, void 0, false, {
                fileName: "app/routes/news.tsx",
                lineNumber: 367,
                columnNumber: 23
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/news.tsx",
              lineNumber: 357,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end px-5 pb-5 mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSelectedNewsIndex(index), className: "text-white bg-[#2A4127] px-5 py-2 text-sm font-semibold rounded hover:bg-yellow-500 transition", children: "Read More" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 372,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 371,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/news.tsx",
            lineNumber: 356,
            columnNumber: 19
          }, this)
        ] }, index, true, {
          fileName: "app/routes/news.tsx",
          lineNumber: 350,
          columnNumber: 47
        }, this)) }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 349,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 344,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/news.tsx",
        lineNumber: 335,
        columnNumber: 9
      }, this),
      selectedNewsIndex !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SliderModal, { images: newsSlides[selectedNewsIndex], title: newsItems[selectedNewsIndex].title, author: newsItems[selectedNewsIndex].author, content: newsItems[selectedNewsIndex].content, content2: newsItems[selectedNewsIndex].content2, onClose: () => setSelectedNewsIndex(null) }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 383,
        columnNumber: 40
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/news.tsx",
      lineNumber: 331,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[url('/newbgfeedback.png')] bg-cover bg-center flex flex-col items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10 w-full max-w-6xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-[#057A31] text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-widest mb-4", children: "Customer Testimonials" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 393,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 392,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "bg-gradient-to-tr from-[#788B5F] to-[#2A4127] rounded-xl p-6 sm:p-8 shadow-lg", initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          amount: 0.2
        }, transition: {
          duration: 0.5
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LazyLoadImage, { src: "/gab_image.png", alt: "Gina Gonzalez", className: "w-full h-full object-cover" }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 416,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 415,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 414,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-justify mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm sm:text-base leading-relaxed", children: "\u201CNagtanim ako ng Jackpot 102 , bilib ako sa dami ng suwi niya. Katamtaman ang taas nito, matibay sa hangin, mahaba ang inuhay at siksik ang butil. Mabigat pa ang timbang ng kada sako ng palay ko. Malambot at masarap ang kanin at may aroma siya\u201D." }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 422,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 421,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mt-0 md:mt-28", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-white font-bold text-lg sm:text-xl mb-1", children: "Honorato Gabriel" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 429,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm sm:text-base", children: "Region 2 (Cagayan Valley)" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 432,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm sm:text-base", children: "Victoria, Mallig, Isabela Variety planted/used: Jackpot 102" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 435,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/news.tsx",
            lineNumber: 428,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/news.tsx",
          lineNumber: 401,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "bg-gradient-to-tr from-[#788B5F] to-[#2A4127] rounded-xl p-6 sm:p-8 shadow-lg", initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          amount: 0.2
        }, transition: {
          duration: 0.5,
          delay: 0.1
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LazyLoadImage, { src: "/est_image.png", alt: "Mr. Edson Del Rosario", className: "w-full h-full object-cover" }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 456,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 455,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 454,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-justify mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm sm:text-base leading-relaxed", children: "\u201CNoong nagtanim ako ng LAV 777, na-obserbahan ko na maganda at marami ang\xA0 suhi niya at hindi siya prone sa sakit. Nang lumabas ang uhay niya ay mahaba, at siksik ang butil niya. Mataas ang milling recovery, malambot ang kanin at masarap po siya kainin\u201D." }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 462,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 461,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mt-0 md:mt-[87px]", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-white font-bold text-lg sm:text-xl mb-1", children: "Melchor Estorga" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 469,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm sm:text-base", children: "Cordillera Administrative Region" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 472,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm sm:text-base", children: "Bulo, Tabuk, Kalinga Variety planted/used: LAV 777" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 475,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/news.tsx",
            lineNumber: 468,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/news.tsx",
          lineNumber: 440,
          columnNumber: 18
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "bg-gradient-to-tr from-[#788B5F] to-[#2A4127] rounded-xl p-6 sm:p-8 shadow-lg flex flex-col justify-between h-full", initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          amount: 0.2
        }, transition: {
          duration: 0.5,
          delay: 0.1
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LazyLoadImage, { src: "/edison.png", alt: "Mr. Edson Del Rosario", className: "w-full h-full object-cover" }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 498,
            columnNumber: 7
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 497,
            columnNumber: 5
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 496,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-justify mb-8 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm sm:text-base leading-relaxed", children: "\u201CSa tayo ng palay ng LAV 777, pwedeng pwedeng irekomenda sa mga magsasaka. Talagang kung ang habol natin ay maparami ang ani para tayo ay makaahon sa gastos, ito ay rekomendado ko. Kitang-kita naman natin, ang daming pumupuri. Maganda, matas, mahaba ang uhay.\u201D" }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 504,
            columnNumber: 5
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 503,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-white font-bold text-lg sm:text-xl mb-1", children: "Mr. Edson Del Rosario" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 511,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm sm:text-base", children: "Farmer Calintaan, Occidental Minodoro" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 514,
              columnNumber: 5
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/news.tsx",
            lineNumber: 510,
            columnNumber: 3
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/news.tsx",
          lineNumber: 482,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "bg-gradient-to-tr from-[#788B5F] to-[#2A4127] rounded-xl p-6 sm:p-8 shadow-lg", initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          amount: 0.2
        }, transition: {
          duration: 0.5,
          delay: 0.1
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LazyLoadImage, { src: "/gina.png", alt: "Mr. Edson Del Rosario", className: "w-full h-full object-cover" }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 537,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 536,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 535,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-justify mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm sm:text-base leading-relaxed", children: "\u201CSa Jackpot, nagustuhan yon dahil mataas ang milling recovery, nag-aaverage sya ng almost 67 to 68 (percent), and yung quality ng bigas niya ay buo at malambot. Regular milled pa lang yun. Siguro mas lalong quality pa ang labas ng bigas no\u2019n kapag i-papolish pa yun. Nakasubok na kami makakain ng Jackpot (na binigas). Maganda na ang butil sa Single-pass pa lang. Nagugustuhan ng mga suki ko, laging hinahanap ang Jackpot na bigas. Maganda ang pagkakanin, masarap ang kanin, quality. Nasubukan na namin at kumita na kami ng Malaki.\u201D" }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 543,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 542,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mt-0 md:mt-[87px]", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-white font-bold text-lg sm:text-xl mb-1", children: "Gina Gonzalez" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 550,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm sm:text-base", children: "Rice trader and Miller, Brgy. Tubuan, Pila, Laguna" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 553,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/news.tsx",
            lineNumber: 549,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/news.tsx",
          lineNumber: 521,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/news.tsx",
        lineNumber: 399,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/news.tsx",
      lineNumber: 390,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 389,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 387,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/news.tsx",
    lineNumber: 329,
    columnNumber: 10
  }, this);
}
_s2(News, "/HWAV2AYV0a57r7JNPRHUDVyvvM=");
_c2 = News;
var _c;
var _c2;
$RefreshReg$(_c, "SliderModal");
$RefreshReg$(_c2, "News");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  News as default,
  meta
};
//# sourceMappingURL=/build/routes/news-SSIKW2YP.js.map
