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
  import.meta.hot.lastModified = "1753940144275.6975";
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative w-full h-auto overflow-hidden", children: [
      isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        motion.img,
        {
          src: "/bgabout.jpg",
          alt: "Farm Image",
          className: "w-full h-64 sm:h-96 md:h-[600px] lg:h-[910px] object-cover",
          initial: {
            opacity: 0,
            y: 40
          },
          whileInView: {
            opacity: 1,
            y: 0
          },
          viewport: {
            once: true,
            amount: 0.2
          },
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        },
        void 0,
        false,
        {
          fileName: "app/routes/about.tsx",
          lineNumber: 40,
          columnNumber: 22
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 h-auto mt-16 md:-mt-26", children: "FARMEX AT A GLANCE" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 55,
        columnNumber: 2
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-white justify-center bg-cover bg-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-7xl flex flex-col gap-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/2 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/history.jpg", alt: "FarmEx History", className: "rounded-lg shadow-lg w-full max-w-md object-cover", style: {
          boxShadow: "0 2px 20px 2px rgba(234, 179, 8, 0.85)"
          // gold shadow
        } }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 67,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/2 flex flex-col justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-4 uppercase tracking-widest", children: "History" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 74,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-lg leading-relaxed", children: "Leads Agriventures Corporation (LAV) was established in 2018 as subsidiary company of LEADS AGRI. Presently under the Malveda Holdings Corporation, the main business is focused on Hybrid Rice Seeds and milled rice distribution. Apart from these, LAV has now ventured in machineries rental, and coming up with our own milled rice grains." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 73,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 65,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-16", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/2 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/mission.jpg", alt: "FarmEx Mission", className: "rounded-lg shadow-lg w-full max-w-md object-cover", style: {
          boxShadow: "0 2px 20px 2px rgba(234, 179, 8, 0.85)"
          // gold shadow
        } }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 87,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 86,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/2 flex flex-col justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-4 uppercase tracking-widest", children: "Our Mission" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 93,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-lg leading-relaxed", children: "LAV\u2019s mission is to come up with all the technologies and provide holistic support to the Filipino rice farmers. LAV is continuously testing high yielding rice seed varieties adaptable to the local conditions. From land preparation to harvesting activities, we provide after-sales support through technical consultations, machineries rental, production trainings and field demonstrations." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 96,
            columnNumber: 9
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 92,
          columnNumber: 7
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 84,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 63,
      columnNumber: 3
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full py-16 px-4 sm:px-6 lg:px-8 flex items-center bg-white justify-center bg-cover bg-center", style: {
      backgroundImage: "url('/featuredbg.jpg')",
      // change this to your actual image path
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    } }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 106,
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
//# sourceMappingURL=/build/routes/about-5QIP7C4P.js.map
