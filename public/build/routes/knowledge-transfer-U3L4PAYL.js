import {
  Link
} from "/build/_shared/chunk-25UY2YLG.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  motion
} from "/build/_shared/chunk-ZJN32EVK.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-FEEY3YGC.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/knowledge-transfer.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\knowledge-transfer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\knowledge-transfer.tsx"
  );
  import.meta.hot.lastModified = "1756698126113.4949";
}
var meta = () => [{
  title: "Knowledge Transfer"
}];
function KnowledgeTransfer() {
  _s();
  const [isClient, setIsClient] = (0, import_react.useState)(false);
  const [activeSection, setActiveSection] = (0, import_react.useState)("lav");
  (0, import_react.useEffect)(() => {
    setIsClient(true);
    function handleHashChange() {
      const hash = window.location.hash;
      if (hash === "#rice-derbies") {
        setActiveSection("rice");
      } else {
        setActiveSection("lav");
      }
    }
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white w-full min-h-screen relative", children: [
    activeSection === "lav" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { id: "lav-station", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative w-full h-[520px] sm:h-[520px] md:h-[600px] lg:h-[600px] overflow-hidden", children: [
        isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: "/LAV-station 1.png", alt: "LAV Station Background", className: "w-full h-full object-cover object-top", initial: {
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
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 53,
          columnNumber: 26
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[#007F3D8C]" }, void 0, false, {
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20 px-4 md:px-8 py-4 pt-24 md:pt-20", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-widest mb-4 md:mb-6 text-center", children: "LAV STATION" }, void 0, false, {
            fileName: "app/routes/knowledge-transfer.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white text-[10px] md:text-base lg:text-lg leading-relaxed max-w-6xl mb-4 md:mb-8 text-justify", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: "Situated on a 6.6-hectare agricultural land in Calauan, Laguna, the LAV Station serves as the heart of Farmex Corporation\u2019s research and development efforts. As the Leads Group\u2019s primary research center, it is where we conduct in-house trials that pave the way for innovations in rice farming. It also serves as a learning hub, hosting training programs for farmers, agriculture students, extension workers, and enthusiasts who share our passion for advancing agriculture." }, void 0, false, {
              fileName: "app/routes/knowledge-transfer.tsx",
              lineNumber: 75,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Though Farmex Corporation is now our name, we proudly retain the name \u2018LAV Station\u2019\xA0in honor of our beginnings as Leads Agriventures Corporation (LAV). This name embodies the dedication and perseverance of the people who worked tirelessly in the early years to establish our seed business. Today, it stands as a symbol of how far we have come and a reminder of our continuing commitment to deliver sustainable solutions that help farmers thrive." }, void 0, false, {
              fileName: "app/routes/knowledge-transfer.tsx",
              lineNumber: 78,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/knowledge-transfer.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/get-involved", className: "bg-[#E0B100] text-white px-2 md:px-8 py-1 md:py-3 rounded-lg font-bold hover:bg-[#E0B100F7] transition-colors duration-300 inline-block text-center", children: "Contact Us" }, void 0, false, {
            fileName: "app/routes/knowledge-transfer.tsx",
            lineNumber: 85,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/knowledge-transfer.tsx",
            lineNumber: 84,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "w-full bg-[url('/bgmachinerentals.jpg')] bg-cover bg-center flex flex-col items-center justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "w-full py-2 sm:py-4 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-0 sm:px-2 py-4 sm:py-6 flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LAVStationSlider, {}, void 0, false, {
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 95,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-2 sm:px-4 py-4 sm:py-6 flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-64 sm:h-96 md:h-[350px] lg:h-[470px] overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", { src: "https://www.youtube.com/embed/OwXif6G_3oU", title: "LAV Station Video", className: "w-full h-full borde-2 md:border-4 border-[#00703C] rounded-lg", allowFullScreen: true, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" }, void 0, false, {
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 101,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 100,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/knowledge-transfer.tsx",
      lineNumber: 50,
      columnNumber: 35
    }, this),
    activeSection === "rice" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { id: "rice-derbies", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative w-full h-[400px] sm:h-[400px] md:h-[600px] lg:h-[500px] overflow-hidden", children: [
        isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: "/Jackpot102.jpg", alt: "Rice Derbies Background", className: "w-full h-full object-cover object-top", initial: {
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
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 111,
          columnNumber: 26
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-[#007F3D8C]" }, void 0, false, {
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 124,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20 px-4 md:px-8 py-4 pt-24 md:pt-20", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-widest mb-4 md:mb-6 text-center", children: "RICE DERBIES" }, void 0, false, {
            fileName: "app/routes/knowledge-transfer.tsx",
            lineNumber: 127,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white text-[12px] md:text-lg lg:text-xl leading-relaxed max-w-4xl mb-4 md:mb-8 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: "Farmex actively participates yearly to regional, provincial and district derbies nationwide. By showcasing our varieties, Jackpot 102 and LAV 777, stakeholders are continually witnessing the competencies of our products. In these events, we showcase not just the genetic traits and performance of our hybrid seeds but also our proven production protocols in achieving high yields." }, void 0, false, {
            fileName: "app/routes/knowledge-transfer.tsx",
            lineNumber: 133,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/knowledge-transfer.tsx",
            lineNumber: 132,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/get-involved", className: "bg-[#E0B100] text-white px-2 md:px-8 py-1 md:py-3 rounded-lg font-bold hover:bg-[#E0B100F7] transition-colors duration-300 inline-block text-center", children: "Contact Us" }, void 0, false, {
            fileName: "app/routes/knowledge-transfer.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/knowledge-transfer.tsx",
            lineNumber: 139,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 125,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "w-full bg-[url('/ricederbies-bg.jpg')] bg-cover bg-center flex flex-col md items-center justify-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "w-full py-2 sm:py-4 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-0 sm:px-2 py-4 sm:py-6 flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RiceDerbiesSlider, {}, void 0, false, {
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 151,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 150,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 149,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-6xl px-2 sm:px-4 py-4 sm:py-6 flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-[180px] sm:h-[250px] md:h-[330px] lg:h-[320px] overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", { src: "https://www.youtube.com/embed/xsk3jOkGG8k", title: "Rice Derbies Video", className: "w-full h-full", allowFullScreen: true, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" }, void 0, false, {
            fileName: "app/routes/knowledge-transfer.tsx",
            lineNumber: 158,
            columnNumber: 20
          }, this) }, void 0, false, {
            fileName: "app/routes/knowledge-transfer.tsx",
            lineNumber: 157,
            columnNumber: 18
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-[180px] sm:h-[250px] md:h-[330px] lg:h-[320px] overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", { src: "https://www.youtube.com/embed/ozN10240MUI", title: "Rice Derbies Video 2", className: "w-full h-full", allowFullScreen: true, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" }, void 0, false, {
            fileName: "app/routes/knowledge-transfer.tsx",
            lineNumber: 161,
            columnNumber: 20
          }, this) }, void 0, false, {
            fileName: "app/routes/knowledge-transfer.tsx",
            lineNumber: 160,
            columnNumber: 18
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 156,
          columnNumber: 16
        }, this) }, void 0, false, {
          fileName: "app/routes/knowledge-transfer.tsx",
          lineNumber: 155,
          columnNumber: 14
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/knowledge-transfer.tsx",
      lineNumber: 108,
      columnNumber: 36
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/knowledge-transfer.tsx",
    lineNumber: 48,
    columnNumber: 10
  }, this);
}
_s(KnowledgeTransfer, "2yUpKecA7rZTScOjCrFytUI23Dw=");
_c = KnowledgeTransfer;
function LAVStationSlider() {
  _s2();
  const images = [{
    src: "/LAV-station 13.jpg",
    alt: "LAV Station 2"
  }, {
    src: "/LAV-station 3.jpg",
    alt: "LAV Station 3"
  }, {
    src: "/LAV-station 4.jpg",
    alt: "LAV Station 4"
  }, {
    src: "/LAV-station 5.jpg",
    alt: "LAV Station 5"
  }, {
    src: "/LAV-station 6.jpg",
    alt: "LAV Station 6"
  }, {
    src: "/LAV-station 7.jpg",
    alt: "LAV Station 7"
  }, {
    src: "/LAV-station 8.jpg",
    alt: "LAV Station 8"
  }, {
    src: "/LAV-station 9.jpg",
    alt: "LAV Station 9"
  }, {
    src: "/LAV-station 10.jpg",
    alt: "LAV Station 10"
  }, {
    src: "/LAV-station 11.jpg",
    alt: "LAV Station 11"
  }, {
    src: "/LAV-station 12.jpg",
    alt: "LAV Station 12"
  }];
  const [index, setIndex] = (0, import_react.useState)(0);
  const prev = () => setIndex((i) => i === 0 ? images.length - 1 : i - 1);
  const next = () => setIndex((i) => i === images.length - 1 ? 0 : i + 1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full flex items-center justify-center px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: prev, className: "absolute \r\n             left-2 sm:left-4 md:-left-8 \r\n             z-10 bg-[#057A31] hover:bg-[#046a2a] text-white rounded-full \r\n             w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-[180px] lg:h-[220px] \r\n             flex items-center justify-center shadow-md transition-all duration-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm sm:text-base md:text-xl font-bold", children: "<" }, void 0, false, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 218,
        columnNumber: 3
      }, this) }, void 0, false, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 213,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-6xl h-64 sm:h-96 md:h-[350px] lg:h-[450px] relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: images[index].src, alt: images[index].alt, className: "w-full h-full object-cover rounded-lg border-4 border-[#057A31]" }, void 0, false, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 223,
        columnNumber: 12
      }, this) }, void 0, false, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 222,
        columnNumber: 10
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: next, className: "absolute \r\n             right-2 sm:right-4 md:-right-8 \r\n             z-10 bg-[#057A31] hover:bg-[#046a2a] text-white rounded-full \r\n             w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-[180px] lg:h-[220px] \r\n             flex items-center justify-center shadow-md transition-all duration-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm sm:text-base md:text-xl font-bold", children: ">" }, void 0, false, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 232,
        columnNumber: 3
      }, this) }, void 0, false, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 227,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/knowledge-transfer.tsx",
      lineNumber: 211,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mt-4 sm:mt-6", children: images.map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `mx-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${i === index ? "bg-[#057A31]" : "bg-gray-300"}`, style: {
      display: "inline-block"
    } }, i, false, {
      fileName: "app/routes/knowledge-transfer.tsx",
      lineNumber: 238,
      columnNumber: 31
    }, this)) }, void 0, false, {
      fileName: "app/routes/knowledge-transfer.tsx",
      lineNumber: 237,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/knowledge-transfer.tsx",
    lineNumber: 210,
    columnNumber: 10
  }, this);
}
_s2(LAVStationSlider, "x2oTrUAHknTo02Ld7gcDOqaxQ8E=");
_c2 = LAVStationSlider;
function RiceDerbiesSlider() {
  _s3();
  const images = [{
    src: "/Rice-berbies 1.jpg",
    alt: "Rice Derbies 1"
  }, {
    src: "/Rice-berbies 2.jpg",
    alt: "Rice Derbies 2"
  }, {
    src: "/Rice-berbies 3.jpg",
    alt: "Rice Derbies 3"
  }, {
    src: "/Rice-berbies 4.jpg",
    alt: "Rice Derbies 4"
  }, {
    src: "/Rice-berbies 5.jpg",
    alt: "Rice Derbies 5"
  }, {
    src: "/Rice-berbies 6.jpg",
    alt: "Rice Derbies 6"
  }];
  const [index, setIndex] = (0, import_react.useState)(0);
  const prev = () => setIndex((i) => i === 0 ? images.length - 1 : i - 1);
  const next = () => setIndex((i) => i === images.length - 1 ? 0 : i + 1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full flex items-center justify-center px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: prev, className: "absolute left-0 md:-left-8 z-10 bg-[#057A31] hover:bg-[#046a2a] text-white rounded-full w-10 h-10 md:w-12 md:h-[220px] flex items-center justify-center shadow-lg transition-colors duration-200 -ml-3 md:-ml-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg md:text-xl font-bold", children: "<" }, void 0, false, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 274,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 273,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-6xl h-64 sm:h-96 md:h-[350px] lg:h-[450px] relative", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: images[index].src, alt: images[index].alt, className: "w-full h-full object-cover rounded-lg border-4 border-[#057A31]" }, void 0, false, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 279,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 278,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: next, className: "absolute right-0 md:-right-8 z-10 bg-[#057A31] hover:bg-[#046a2a] text-white rounded-full w-10 h-10 md:w-12 md:h-[220px] flex items-center justify-center shadow-lg transition-colors duration-200 -mr-3 md:-mr-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-lg md:text-xl font-bold", children: ">" }, void 0, false, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 284,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/knowledge-transfer.tsx",
        lineNumber: 283,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/knowledge-transfer.tsx",
      lineNumber: 271,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mt-4 sm:mt-6", children: images.map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `mx-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-200 ${i === index ? "bg-[#057A31]" : "bg-gray-300"}`, style: {
      display: "inline-block"
    } }, i, false, {
      fileName: "app/routes/knowledge-transfer.tsx",
      lineNumber: 290,
      columnNumber: 31
    }, this)) }, void 0, false, {
      fileName: "app/routes/knowledge-transfer.tsx",
      lineNumber: 289,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/knowledge-transfer.tsx",
    lineNumber: 270,
    columnNumber: 10
  }, this);
}
_s3(RiceDerbiesSlider, "x2oTrUAHknTo02Ld7gcDOqaxQ8E=");
_c3 = RiceDerbiesSlider;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "KnowledgeTransfer");
$RefreshReg$(_c2, "LAVStationSlider");
$RefreshReg$(_c3, "RiceDerbiesSlider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  KnowledgeTransfer as default,
  meta
};
//# sourceMappingURL=/build/routes/knowledge-transfer-U3L4PAYL.js.map
