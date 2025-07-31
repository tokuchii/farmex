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
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/about.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\about.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\about.tsx"
  );
  import.meta.hot.lastModified = "1753892499895.312";
}
function meta() {
  return [{
    title: "FarmEx - Revolutionary Agricultural Technology"
  }, {
    name: "description",
    content: "Transform your farming operations with FarmEx's cutting-edge agricultural technology solutions. Increase yields, reduce costs, and farm smarter."
  }];
}
function About() {
  _s();
  const [isClient, setIsClient] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setIsClient(true);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative w-full h-auto overflow-hidden", initial: {
      opacity: 0,
      y: 40
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      amount: 0.2
    }, transition: {
      duration: 0.6,
      ease: "easeOut"
    }, children: [
      isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          src: "/bgabout.jpg",
          alt: "Farm Image",
          className: "w-full h-[910px] object-cover"
        },
        void 0,
        false,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 52,
          columnNumber: 22
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4", children: "FARMEX AT A GLANCE" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 55,
        columnNumber: 3
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 54,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full py-16 px-4 sm:px-6 lg:px-8 flex items-center bg-white justify-center bg-cover bg-center", style: {
        backgroundImage: "url('/featuredbg.jpg')",
        // change this to your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex flex-col items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-2 uppercase leading-tight tracking-widest text-center", children: "Featured Products" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 70,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 w-40 md:w-48 lg:w-[400px] bg-yellow-500 rounded-full mb-12" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 73,
          columnNumber: 3
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid sm:grid-cols-2 gap-8 xl:flex xl:justify-center xl:gap-16 w-full max-w-7xl mt-6", children: [{
          name: "Jackpot 102",
          image: "/jackpot102.png"
        }, {
          name: "LAV 777",
          image: "/lav777.png"
        }, {
          name: "Jackpot Ready",
          image: "/jackpotready.png"
        }, {
          name: "Jose Maria Milled Rice",
          image: "/josemaria.png"
        }].map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-[300px] bg-white rounded-lg shadow-lg flex items-center justify-center overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105", style: {
            boxShadow: "0 2px 20px 2px rgba(34, 197, 94, 0.85)"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: product.image, alt: product.name, className: "w-full h-auto object-cover" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 93,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 92,
            columnNumber: 13
          }, this) }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 89,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-gray-800 mt-3 uppercase text-center text-sm sm:text-base", children: product.name }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 96,
            columnNumber: 11
          }, this)
        ] }, product.name, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 88,
          columnNumber: 31
        }, this)) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 74,
          columnNumber: 5
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 69,
        columnNumber: 3
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 62,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 w-full bg-yellow-500" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 105,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(About, "k460N28PNzD7zo1YW47Q9UigQis=");
_c = About;
var _c;
$RefreshReg$(_c, "About");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  About as default,
  meta
};
//# sourceMappingURL=/build/routes/about-JMLLGCUU.js.map
