import {
  Link,
  useLocation
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

// app/routes/services.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\services.tsx"' + id);
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
    "app\\routes\\services.tsx"
  );
  import.meta.hot.lastModified = "1755486036907.8992";
}
var meta = () => [{
  title: "Services"
}];
function Services() {
  _s();
  const [activeSection, setActiveSection] = (0, import_react.useState)("rentals");
  const [isClient, setIsClient] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setIsClient(true);
  }, []);
  const location = useLocation();
  (0, import_react.useEffect)(() => {
    const hash = location.hash;
    if (hash === "#technical-consultation") {
      setActiveSection("consultation");
    } else if (hash === "#training") {
      setActiveSection("training");
    } else if (hash === "#machine-rentals" || hash === "" || hash === "#") {
      setActiveSection("rentals");
    } else {
      setActiveSection("rentals");
    }
  }, [location.hash]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white w-full min-h-screen relative", children: [
    activeSection === "rentals" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative w-full h-[350px] sm:h-[400px] md:h-[600px] lg:h-[500px] overflow-hidden", children: [
        isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: "/machinerentals.png", alt: "Machine Rentals Background", className: "w-full h-full object-cover object-top pt-20", initial: {
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
          fileName: "app/routes/services.tsx",
          lineNumber: 54,
          columnNumber: 26
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-green-600 bg-opacity-50" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20 px-4 py-2 pt-20 md:pt-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-2 md:mb-6", children: "MACHINE RENTALS" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-[10px] md:text-xl leading-relaxed max-w-4xl text-center mb-4 md:mb-8", children: "Genuine to its mission of providing all the Filipino farmer needs, Farmex is offering farm machineries rentals to extend the accessibility of farm technologies and equipment to individual rice farmers and farm cooperatives. With the help of our sister company, Leads Tech, Farmex team also do machine demonstrations and provides after-sales support to our customers." }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/get-involved", className: "bg-[#E0B100F7] text-white px-2 md:px-8 py-1 md:py-3 rounded-lg font-bold hover:bg-[#E0B100F7] transition-colors duration-300 inline-block", children: "Contact Us" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 53,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full py-16 px-4 sm:px-8 bg-[url('/newbgmachinerental.png')] bg-cover bg-center flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "overflow-hidden p-2 sm:p-3 lg:p-4", initial: {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2 sm:px-4 pt-2 sm:pt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-green-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl", children: "Mobile Dryer" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 100,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-20 sm:w-24 md:w-28 h-0.5 sm:h-1 bg-yellow-400 mt-1" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 101,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/services.tsx",
            lineNumber: 99,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[280px] sm:h-[280px] md:h-[350px] lg:h-[450px] w-full overflow-hidden relative rounded py-2 sm:py-3 lg:py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/mobiledryer.png", alt: "Mobile Dryer", className: "w-full h-full object-cover border-2 sm:border-3 md:border-4 border-[#00703C] rounded-lg" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 104,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 103,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 86,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "overflow-hidden p-2 sm:p-3 lg:p-4", initial: {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2 sm:px-4 pt-2 sm:pt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-green-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl", children: "Tractor" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 123,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-20 sm:w-24 md:w-28 h-0.5 sm:h-1 bg-yellow-400 mt-1" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 124,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/services.tsx",
            lineNumber: 122,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[280px] sm:h-[280px] md:h-[350px] lg:h-[450px] w-full overflow-hidden relative rounded py-2 sm:py-3 lg:py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/tractor.png", alt: "Tractor", className: "w-full h-full object-cover border-2 sm:border-3 md:border-4 border-[#00703C] rounded-lg" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 127,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 126,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 109,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "overflow-hidden p-2 sm:p-3 lg:p-4", initial: {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2 sm:px-4 pt-2 sm:pt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-green-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl", children: "Transplanter" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 146,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-20 sm:w-24 md:w-28 h-0.5 sm:h-1 bg-yellow-400 mt-1" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 147,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/services.tsx",
            lineNumber: 145,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[280px] sm:h-[280px] md:h-[350px] lg:h-[450px] w-full overflow-hidden relative rounded py-2 sm:py-3 lg:py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/transplanter.png", alt: "Transplanter", className: "w-full h-full object-cover border-2 sm:border-3 md:border-4 border-[#00703C] rounded-lg" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 150,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 149,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 132,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "overflow-hidden p-2 sm:p-3 lg:p-4", initial: {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-2 sm:px-4 pt-2 sm:pt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-green-600 font-bold text-base sm:text-lg md:text-xl lg:text-2xl", children: "Harvester" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 169,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-20 sm:w-24 md:w-28 h-0.5 sm:h-1 bg-yellow-400 mt-1" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 170,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/services.tsx",
            lineNumber: 168,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-[280px] sm:h-[280px] md:h-[350px] lg:h-[450px] w-full overflow-hidden relative rounded py-2 sm:py-3 lg:py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/Harvester.jpg", alt: "Harvester", className: "w-full h-full object-cover border-2 sm:border-3 md:border-4 border-[#00703C] rounded-lg" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 173,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 172,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 155,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 84,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/services.tsx",
      lineNumber: 51,
      columnNumber: 39
    }, this),
    activeSection === "consultation" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative w-full h-[360px] sm:h-[400px] md:h-[600px] lg:h-[500px] overflow-hidden flex items-center justify-center", children: [
        isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: "/technicalconcultant.png", alt: "Technical Consultation Hero", className: "w-full h-full object-cover object-top pt-20", initial: {
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
          fileName: "app/routes/services.tsx",
          lineNumber: 186,
          columnNumber: 26
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-green-600 bg-opacity-50" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 199,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20 px-4 py-2 pt-20 md:pt-16", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-center text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-2 md:mb-6", children: [
            "TECHNICAL",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block md:inline", children: " CONSULTATION" }, void 0, false, {
              fileName: "app/routes/services.tsx",
              lineNumber: 202,
              columnNumber: 26
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/services.tsx",
            lineNumber: 201,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-[10px] md:text-xl leading-relaxed max-w-4xl text-center mb-4 md:mb-8", children: "Farmex's commitment to the rice farming communities does not end in providing quality hybrid rice seeds but extends its hands to those who are in need of free technical consultations. From farmers to agriculture students, Farmex technical team is always ready to share their expertise and strategy on rice farming production and technologies. Regular technical trainings are done to further equip and update our Seed Production Specialists on the latest technologies and having them share new learnings to our farmers." }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 204,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/get-involved", className: "bg-[#E0B100F7] text-white px-2 md:px-8 py-1 md:py-3 rounded-lg font-bold hover:bg-[#E0B100F7] transition-colors duration-300 inline-block", children: "Contact Us" }, void 0, false, {
            fileName: "app/routes/services.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/services.tsx",
          lineNumber: 200,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 185,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full py-8 sm:py-12 bg-white md:bg-[url('/bgmachinerentals.jpg')] md:bg-center md:bg-repeat-y flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl px-2 sm:px-4 py-4 sm:py-6 flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TechnicalConsultationSlider, {}, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 217,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 215,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 214,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/services.tsx",
      lineNumber: 183,
      columnNumber: 44
    }, this),
    activeSection === "training" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative w-full h-[600px] sm:h-[600px] md:h-[1000px] lg:h-[800px] overflow-hidden", children: [
      isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: "/training-bg.jpg", alt: "Training Background", className: "w-full h-full object-cover object-top", initial: {
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
        fileName: "app/routes/services.tsx",
        lineNumber: 226,
        columnNumber: 26
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-green-600 bg-opacity-50" }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 239,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20 px-4 md:px-8 py-4 pt-24 md:pt-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white  md:text-6xl lg:text-7xl font-extrabold uppercase tracking-widest mb-2 md:mb-4 text-center", children: "COMING SOON" }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 242,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white text-3xl md:text-3xl lg:text-4xl font-bold leading-relaxed max-w-4xl mb-4 md:mb-8 text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-4", children: "Big learning ahead \u2014 stay tuned." }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 248,
          columnNumber: 3
        }, this) }, void 0, false, {
          fileName: "app/routes/services.tsx",
          lineNumber: 247,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/services.tsx",
        lineNumber: 240,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/services.tsx",
      lineNumber: 225,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/services.tsx",
      lineNumber: 223,
      columnNumber: 40
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/services.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
_s(Services, "g0vV+BEz4g3QOzFSGEwMrzpgPY4=", false, function() {
  return [useLocation];
});
_c = Services;
function TechnicalConsultationSlider() {
  _s2();
  const images = [{
    src: "/technicalconsultantimg1.jpg",
    alt: "Technical Consultation 1"
  }, {
    src: "/technicalconsultantimg2.jpg",
    alt: "Technical Consultation 2"
  }];
  const [index, setIndex] = (0, import_react.useState)(0);
  const prev = () => setIndex((i) => i === 0 ? images.length - 1 : i - 1);
  const next = () => setIndex((i) => i === images.length - 1 ? 0 : i + 1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center w-full px-2 sm:px-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: prev, className: "text-3xl sm:text-4xl md:text-5xl text-[#00703C] hover:text-[#00703C] \r\n                 px-1 sm:px-2 focus:outline-none ml-1 sm:ml-4", children: "<" }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 277,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: images[index].src, alt: images[index].alt, className: "w-full max-w-[260px] sm:max-w-md md:max-w-lg lg:max-w-2xl \r\n                 h-56 sm:h-80 md:h-[350px] lg:h-[450px] \r\n                 object-cover rounded-lg mx-1 sm:mx-4 border-2 border-gray-200 bg-white" }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 283,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: next, className: "text-3xl sm:text-4xl md:text-5xl text-[#00703C] hover:text-[#00703C] \r\n                 px-1 sm:px-2 focus:outline-none mr-1 sm:mr-4", children: ">" }, void 0, false, {
        fileName: "app/routes/services.tsx",
        lineNumber: 288,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/services.tsx",
      lineNumber: 275,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mt-2 sm:mt-4", children: images.map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `mx-0.5 sm:mx-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full ${i === index ? "bg-yellow-500" : "bg-gray-300"}`, style: {
      display: "inline-block"
    } }, i, false, {
      fileName: "app/routes/services.tsx",
      lineNumber: 296,
      columnNumber: 31
    }, this)) }, void 0, false, {
      fileName: "app/routes/services.tsx",
      lineNumber: 295,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/services.tsx",
    lineNumber: 274,
    columnNumber: 10
  }, this);
}
_s2(TechnicalConsultationSlider, "x2oTrUAHknTo02Ld7gcDOqaxQ8E=");
_c2 = TechnicalConsultationSlider;
var _c;
var _c2;
$RefreshReg$(_c, "Services");
$RefreshReg$(_c2, "TechnicalConsultationSlider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Services as default,
  meta
};
//# sourceMappingURL=/build/routes/services-T6UVMRP5.js.map
