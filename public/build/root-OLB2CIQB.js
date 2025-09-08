import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation
} from "/build/_shared/chunk-ADWLACKH.js";
import "/build/_shared/chunk-PLT55Z5M.js";
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
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-PQCETUPC.css";

// app/components/Navbar.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Navbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Navbar.tsx"
  );
  import.meta.hot.lastModified = "1756279500451.1987";
}
function Navbar() {
  _s();
  const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
  const [openDropdownDesktop, setOpenDropdownDesktop] = (0, import_react.useState)(null);
  const [openDropdownMobile, setOpenDropdownMobile] = (0, import_react.useState)(null);
  const servicesRef = (0, import_react.useRef)(null);
  const knowledgeRef = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1002)
        setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  (0, import_react.useEffect)(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  (0, import_react.useEffect)(() => {
    function handleClickOutside(event) {
      if (openDropdownDesktop && !servicesRef.current?.contains(event.target) && !knowledgeRef.current?.contains(event.target)) {
        setOpenDropdownDesktop(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdownDesktop]);
  const servicesDropdown = [{
    label: "Machine Rentals",
    href: "/services#machine-rentals"
  }, {
    label: "Technical Consultation",
    href: "/services#technical-consultation"
  }, {
    label: "Training",
    href: "/services#training"
  }];
  const knowledgeDropdown = [{
    label: "LAV Station",
    href: "/knowledge-transfer#lav-station"
  }, {
    label: "Rice Derbies",
    href: "/knowledge-transfer#rice-derbies"
  }];
  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute("href") || "";
    if (!href.includes("#")) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
    setMenuOpen(false);
    setOpenDropdownDesktop(null);
    setOpenDropdownMobile(null);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", { className: "fixed w-full top-0 left-0 z-50 bg-white duration-300 shadow-[0_8px_40px_0_rgba(0,0,0,0.45)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-7xl mx-auto px-2 sm:px-4 lg:px-4 group", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between h-20 items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/logo.jpg", alt: "FarmEx Logo", className: "h-16 w-auto" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 85,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden [@media(min-width:1002px)]:flex items-center space-x-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "text-black hover:text-green-600 font-medium", onClick: handleNavClick, children: "Home" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/about", className: "text-black hover:text-green-600 font-medium", onClick: handleNavClick, children: "About Us" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/products", className: "text-black hover:text-green-600 font-medium", onClick: handleNavClick, children: "Products" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 93,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", ref: servicesRef, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-black hover:text-green-600 font-medium flex items-center focus:outline-none", onClick: () => setOpenDropdownDesktop(openDropdownDesktop === "services" ? null : "services"), "aria-haspopup": "true", "aria-expanded": openDropdownDesktop === "services", children: [
            "Services ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1", children: "\u25BC" }, void 0, false, {
              fileName: "app/components/Navbar.tsx",
              lineNumber: 98,
              columnNumber: 26
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          openDropdownDesktop === "services" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg z-50", children: servicesDropdown.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600", onClick: handleNavClick, children: item.label }, item.label, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 101,
            columnNumber: 49
          }, this)) }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 100,
            columnNumber: 54
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", ref: knowledgeRef, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-black hover:text-green-600 font-medium flex items-center focus:outline-none", onClick: () => setOpenDropdownDesktop(openDropdownDesktop === "knowledge" ? null : "knowledge"), "aria-haspopup": "true", "aria-expanded": openDropdownDesktop === "knowledge", children: [
            "Knowledge Transfer ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1", children: "\u25BC" }, void 0, false, {
              fileName: "app/components/Navbar.tsx",
              lineNumber: 110,
              columnNumber: 36
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 109,
            columnNumber: 15
          }, this),
          openDropdownDesktop === "knowledge" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute left-0 mt-2 w-56 bg-white border rounded shadow-lg z-50", children: knowledgeDropdown.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600", onClick: handleNavClick, children: item.label }, item.label, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 113,
            columnNumber: 50
          }, this)) }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 112,
            columnNumber: 55
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 108,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/news", className: "text-black hover:text-green-600 font-medium", onClick: handleNavClick, children: "News" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 119,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/get-involved", className: "text-black hover:text-green-600 font-medium", onClick: handleNavClick, children: "Get Involved" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "[@media(max-width:1002px)]:flex hidden flex-col items-center justify-center w-10 h-10 p-2 rounded", onClick: () => setMenuOpen((prev) => !prev), "aria-label": "Toggle Menu", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `block h-0.5 w-6 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}` }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `block h-0.5 w-6 bg-gray-800 rounded transition-all duration-300 my-1 ${menuOpen ? "opacity-0" : "opacity-100"}` }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 127,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `block h-0.5 w-6 bg-gray-800 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}` }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 128,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `[@media(max-width:1002px)]:block hidden fixed top-16 left-0 w-full z-60 bg-white shadow-lg transition-transform duration-300 ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0 pointer-events-none"}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col space-y-4 px-6 py-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/", className: "text-gray-900 hover:text-green-600 font-medium", onClick: handleNavClick, children: "Home" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 135,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/about", className: "text-gray-700 hover:text-green-600 font-medium", onClick: handleNavClick, children: "About Us" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 136,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/products", className: "text-gray-700 hover:text-green-600 font-medium", onClick: handleNavClick, children: "Products" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 137,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-gray-700 hover:text-green-600 font-medium flex items-center w-full text-left", onClick: () => setOpenDropdownMobile(openDropdownMobile === "services" ? null : "services"), "aria-expanded": openDropdownMobile === "services", children: [
          "Services ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1", children: "\u25BC" }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 142,
            columnNumber: 26
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 141,
          columnNumber: 15
        }, this),
        openDropdownMobile === "services" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 ml-4 border-l pl-4", children: servicesDropdown.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.href, className: "block py-2 text-gray-700 hover:text-green-600", onClick: handleNavClick, children: item.label }, item.label, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 145,
          columnNumber: 49
        }, this)) }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 144,
          columnNumber: 53
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 140,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "text-gray-700 hover:text-green-600 font-medium flex items-center w-full text-left", onClick: () => setOpenDropdownMobile(openDropdownMobile === "knowledge" ? null : "knowledge"), "aria-expanded": openDropdownMobile === "knowledge", children: [
          "Knowledge Transfer ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1", children: "\u25BC" }, void 0, false, {
            fileName: "app/components/Navbar.tsx",
            lineNumber: 154,
            columnNumber: 36
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 153,
          columnNumber: 15
        }, this),
        openDropdownMobile === "knowledge" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-1 ml-4 border-l pl-4", children: knowledgeDropdown.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: item.href, className: "block py-2 text-gray-700 hover:text-green-600", onClick: handleNavClick, children: item.label }, item.label, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 157,
          columnNumber: 50
        }, this)) }, void 0, false, {
          fileName: "app/components/Navbar.tsx",
          lineNumber: 156,
          columnNumber: 54
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 152,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/news", className: "text-gray-700 hover:text-green-600 font-medium", onClick: handleNavClick, children: "News" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 163,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/get-involved", className: "text-gray-700 hover:text-green-600 font-medium", onClick: handleNavClick, children: "Get Involved" }, void 0, false, {
        fileName: "app/components/Navbar.tsx",
        lineNumber: 164,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 134,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/components/Navbar.tsx",
      lineNumber: 133,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Navbar.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
_s(Navbar, "lxGcAZ+2J7Ooilku7+Rr873PsUU=");
_c = Navbar;
var _c;
$RefreshReg$(_c, "Navbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// public/bgfooter.jpg
var bgfooter_default = "/build/_assets/bgfooter-AYR2YOT3.jpg";

// node_modules/react-icons/lib/iconBase.mjs
var import_react4 = __toESM(require_react(), 1);

// node_modules/react-icons/lib/iconContext.mjs
var import_react3 = __toESM(require_react(), 1);
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react3.default.createContext && /* @__PURE__ */ import_react3.default.createContext(DefaultContext);

// node_modules/react-icons/lib/iconBase.mjs
var _excluded = ["attr", "size", "title"];
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t)
    return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i)
      return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function Tree2Element(tree) {
  return tree && tree.map((node, i) => /* @__PURE__ */ import_react4.default.createElement(node.tag, _objectSpread({
    key: i
  }, node.attr), Tree2Element(node.child)));
}
function GenIcon(data) {
  return (props) => /* @__PURE__ */ import_react4.default.createElement(IconBase, _extends({
    attr: _objectSpread({}, data.attr)
  }, props), Tree2Element(data.child));
}
function IconBase(props) {
  var elem = (conf) => {
    var {
      attr,
      size,
      title
    } = props, svgProps = _objectWithoutProperties(props, _excluded);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return /* @__PURE__ */ import_react4.default.createElement("svg", _extends({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: _objectSpread(_objectSpread({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && /* @__PURE__ */ import_react4.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? /* @__PURE__ */ import_react4.default.createElement(IconContext.Consumer, null, (conf) => elem(conf)) : elem(DefaultContext);
}

// node_modules/react-icons/fa/index.mjs
function FaEnvelope(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" }, "child": [] }] })(props);
}
function FaMapMarkerAlt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 384 512" }, "child": [{ "tag": "path", "attr": { "d": "M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" }, "child": [] }] })(props);
}
function FaPhoneAlt(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" }, "child": [] }] })(props);
}

// app/components/Footer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Footer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Footer.tsx"
  );
  import.meta.hot.lastModified = "1756279500450.691";
}
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "bg-white relative", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "relative w-full h-1 bg-[#E0B100]" }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-shrink-0 items-center pt-4 md:pt-6 hide-below-850", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: bgfooter_default, alt: "FarmEx Logo", className: "h-36 w-auto -mb-12" }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col items-start space-y-2 text-gray-900 text-xs sm:text-sm md:text-base md:mt-4 mr-[14%]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FaMapMarkerAlt, { className: "text-green-600 text-xl md:text-base" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 34,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "https://maps.app.goo.gl/sjpAiD1d1ciTcU9n7", target: "_blank", rel: "noopener noreferrer", className: "hover:underline text-black leading-snug", children: "Farmex Corporation KM 70 National Highway, Brgy. Bangyas, Calauan, Laguna" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 35,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FaPhoneAlt, { className: "text-green-600" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "tel:+639451709401", className: "hover:underline text-black leading-snug", children: "+63 945 170 9401" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 41,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(FaEnvelope, { className: "text-green-600" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: "mailto:leadsagriventurescorporation@gmail.com", className: "hover:underline text-black leading-snug", children: "leadsagriventurescorporation@gmail.com" }, void 0, false, {
            fileName: "app/components/Footer.tsx",
            lineNumber: 47,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "w-11/12 max-w-[350px] mx-auto mb-2 border-t border-green-600" }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-green-700 text-center text-xs sm:text-sm md:text-base", children: "\xA9 2025 Farmex Corporation" }, void 0, false, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c2 = Footer;
var _c2;
$RefreshReg$(_c2, "Footer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/root.tsx
var import_react6 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => [{
  rel: "stylesheet",
  href: tailwind_default
}, {
  rel: "icon",
  href: "/group30.png"
}, {
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { charSet: "utf-8" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preload", as: "image", href: "/bgnews.png" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preload", as: "image", href: "/newbgevents.png" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("link", { rel: "preload", as: "image", href: "/productbg1.png" }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
}
_c3 = Layout;
function App() {
  _s2();
  const location = useLocation();
  (0, import_react6.useEffect)(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  }, [location]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Navbar, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/root.tsx",
      lineNumber: 78,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
}
_s2(App, "BXcZrDMM76mmm4zA8/QV5UbMNXE=", false, function() {
  return [useLocation];
});
_c22 = App;
var _c3;
var _c22;
$RefreshReg$(_c3, "Layout");
$RefreshReg$(_c22, "App");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Layout,
  App as default,
  links
};
//# sourceMappingURL=/build/root-OLB2CIQB.js.map
