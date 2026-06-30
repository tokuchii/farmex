import {
  motion
} from "/build/_shared/chunk-ZJN32EVK.js";
import {
  require_visitors
} from "/build/_shared/chunk-WSA5V6VW.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-3BOG53TH.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/_index.tsx
var import_react = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_visitors = __toESM(require_visitors(), 1);
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
  import.meta.hot.lastModified = "1782783997785.6882";
}
var meta = () => [{
  title: "Farmex Corporation"
}];
var cardVariants = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};
function Home() {
  _s();
  const [isClient, setIsClient] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setIsClient(true);
  }, []);
  const products = [{
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
  }];
  const services = [{
    image: "/service1.jpg",
    alt: "Machine Rentals",
    label: "Machine Rentals",
    href: "/services#machine-rentals"
  }, {
    image: "/service2.png",
    alt: "Technical Consultation",
    label: "Technical Consultation",
    href: "/services#technical-consultation"
  }, {
    image: "/training1.jpg",
    alt: "Training",
    label: "Training",
    href: "/services#training"
  }];
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
        lineNumber: 121,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-black/30" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 122,
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
        lineNumber: 124,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 w-full bg-yellow-500" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 143,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 142,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full py-16 px-4 sm:px-6 lg:px-8 flex items-center bg-white justify-center bg-cover bg-center", style: {
        backgroundImage: "url('/ricefieldbg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex flex-col items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.h2, { className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-2 uppercase tracking-widest text-center", initial: {
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
          ease: "easeOut"
        }, children: "Featured Products" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 154,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 w-40 md:w-48 lg:w-[400px] bg-yellow-500 rounded-full mb-12" }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 169,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid sm:grid-cols-2 gap-8 xl:flex xl:justify-center xl:gap-16 w-full max-w-7xl mt-6", children: products.map((product, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "flex uppercase tracking-widest flex-col items-center", custom: i, variants: cardVariants, initial: "hidden", whileInView: "visible", viewport: {
          once: true,
          amount: 0.2
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-[300px] mb-6 flex items-center justify-center overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/products", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: product.image, alt: product.name, className: "w-full h-80 object-cover" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 178,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 177,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 176,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-white mt-3 uppercase text-center text-md sm:text-base", children: product.name }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 181,
            columnNumber: 19
          }, this)
        ] }, product.name, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 172,
          columnNumber: 45
        }, this)) }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 171,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 153,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 147,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 140,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full py-16 px-4 sm:px-6 md:px-8 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-7xl mx-auto flex flex-col items-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.h2, { className: "text-3xl md:text-4xl font-extrabold text-green-700 mb-4 uppercase text-center tracking-widest", initial: {
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
        ease: "easeOut"
      }, children: "Services" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 194,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 w-40 md:w-48 lg:w-52 bg-yellow-500 rounded-full mb-12" }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 209,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-full", children: services.map((service, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "bg-white rounded-2xl overflow-hidden flex flex-col shadow-md hover:shadow-xl transition-shadow duration-300", custom: i, variants: cardVariants, initial: "hidden", whileInView: "visible", viewport: {
        once: true,
        amount: 0.2
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center bg-gray-100 h-52 relative overflow-hidden", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-40 h-40 rounded-full bg-white/70 absolute" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 221,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: service.image, alt: service.alt, className: "relative z-10 w-full h-full object-cover" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 222,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 220,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-between flex-1 p-5 gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-gray-900 font-bold text-base md:text-lg uppercase tracking-wide", children: service.label }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 228,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-xs mt-1 tracking-wide", children: "Click below to learn more and get involved" }, void 0, false, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 231,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 227,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: service.href, className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", className: "w-full bg-yellow-400 text-black text-sm font-bold py-2 rounded-full hover:bg-yellow-300 transition-colors duration-200", children: "Get Involved \u2192" }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 236,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 235,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 226,
          columnNumber: 19
        }, this)
      ] }, service.alt, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 215,
        columnNumber: 45
      }, this)) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 212,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 193,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 192,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 190,
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
      lineNumber: 248,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 107,
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
//# sourceMappingURL=/build/routes/_index-KIUFRXSS.js.map
