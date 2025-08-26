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

// app/routes/_index.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1756181227930.8086";
}
var meta = () => [{
  title: "Farmex Corporation"
}];
function Home() {
  _s();
  const [isClient, setIsClient] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setIsClient(true);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "w-full h-64 sm:h-96 md:h-[600px] lg:h-[911px] object-cover relative overflow-hidden", initial: {
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
      isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { src: "/rice.mp4", autoPlay: true, loop: true, muted: true, playsInline: true, controls: false, disablePictureInPicture: true, controlsList: "nodownload noplaybackrate noremoteplayback", onContextMenu: (e) => e.preventDefault(), preload: "auto", className: "w-full h-full object-cover object-top pointer-events-none" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 47,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-black/30" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center justify-center z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: "/welcome.png", alt: "Welcome", className: "w-full max-w-[300px] sm:max-w-lg md:max-w-lg xl:max-w-4xl h-auto mt-16 md:-mt-2", initial: {
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
      } }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 w-full bg-yellow-500" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full py-16 px-4 sm:px-6 lg:px-8 flex items-center bg-white justify-center bg-cover bg-center", style: {
        backgroundImage: "url('/featuredbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex flex-col items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2 uppercase tracking-widest text-center", children: "Featured Products" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 w-40 md:w-48 lg:w-[400px] bg-yellow-500 rounded-full mb-12" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid sm:grid-cols-2 gap-8 xl:flex xl:justify-center xl:gap-16 w-full max-w-7xl mt-6", children: [{
          name: "Jackpot 102",
          image: "/J102.png"
        }, {
          name: "LAV 777",
          image: "/lav777_product.png"
        }, {
          name: "Leads 143",
          image: "/leads143_product.png"
        }, {
          name: "Jackpot ready",
          image: "/jr_new_image1.png"
        }].map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex uppercase tracking-widest flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-[300px] mb-6 flex items-center justify-center overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: product.image, alt: product.name, initial: {
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
          }, className: "w-full h-80 object-cover" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 99,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 98,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 97,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-white mt-3 uppercase text-center text-md sm:text-base", children: product.name }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 114,
            columnNumber: 19
          }, this)
        ] }, product.name, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 96,
          columnNumber: 31
        }, this)) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 77,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 71,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full min-h-[900px] py-6 px-4 sm:px-6 md:px-8 flex items-center justify-center bg-cover bg-center bg-no-repeat", style: {
      backgroundImage: "url('/bgservices.jpg')"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-7xl mx-auto flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl md:text-4xl font-extrabold text-white mb-12 uppercase text-center tracking-widest", children: "Services" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 w-40 md:w-48 lg:w-52 bg-yellow-500 rounded-full -mt-12 mb-20" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 137,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col xl:flex-row justify-center items-center w-full gap-12 xl:gap-16", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-[525px]:w-[90%] h-72 rounded-lg border-4 border-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden mb-8", style: {
            boxShadow: "0 2px 32px 2px rgba(34,197,94,0.25)"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/service1.jpg", alt: "Service 1", className: "w-full h-full object-cover block" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 145,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 142,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/services#machine-rentals", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "bg-yellow-500 tracking-widest text-white px-8 py-3 max-[525px]:px-4 max-[525px]:py-2 rounded-lg font-bold text-base max-[525px]:text-sm shadow hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50", children: "Get Involved" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 148,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 147,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 141,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center w-full sm:w-2/3 md:w-1/2 lg:w-1/3 max-w-md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-[525px]:w-[90%] h-72 rounded-lg border-4 border-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 overflow-hidden mb-8", style: {
            boxShadow: "0 2px 32px 2px rgba(34,197,94,0.25)"
          }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/service2.png", alt: "Service 2", className: "w-full h-full object-cover block" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 159,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 156,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/services#technical-consultation", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "bg-yellow-500 tracking-widest text-white px-8 py-3 max-[525px]:px-4 max-[525px]:py-2 rounded-lg font-bold text-base max-[525px]:text-sm shadow hover:bg-yellow-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-opacity-50", children: "Get Involved" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 163,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 162,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 155,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 139,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 132,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 129,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.main, { className: "relative z-20", initial: {
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
    } }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 175,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}
_s(Home, "k460N28PNzD7zo1YW47Q9UigQis=");
_c = Home;
var _c;
$RefreshReg$(_c, "Home");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Home as default,
  meta
};
//# sourceMappingURL=/build/routes/_index-JDWZEG3T.js.map
