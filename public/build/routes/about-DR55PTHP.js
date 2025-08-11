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
  import.meta.hot.lastModified = "1754890524488.5303";
}
function meta() {
  return [{
    title: "Farmex"
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
      isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: "/bgabout.png", alt: "Farm Image", className: "w-full h-64 sm:h-96 md:h-[600px] lg:h-[500px] object-cover object-top", initial: {
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
        fileName: "app/routes/about.tsx",
        lineNumber: 37,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 h-auto mt-16 md:-mt-26", children: "FARMEX AT A GLANCE" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-white justify-center bg-cover bg-center", style: {
      backgroundImage: "url('/About us 1.png')"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-7xl flex flex-col gap-16", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/2 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg shadow-lg w-full max-w-md h-64 sm:h-72 md:h-80 overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105", style: {
          boxShadow: "0 2px 20px 2px rgba(234, 179, 8, 0.85)"
          // gold shadow
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: "/history.jpg",
            alt: "FarmEx History",
            className: "w-full h-full object-cover rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "app/routes/about.tsx",
            lineNumber: 69,
            columnNumber: 19
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 66,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 65,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/2 flex flex-col justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-4 uppercase tracking-widest", children: "History" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-lg leading-relaxed", children: "Leads Agriventures Corporation (LAV) was established in 2018 as subsidiary company of LEADS AGRI. Presently under the Malveda Holdings Corporation, the main business is focused on Hybrid Rice Seeds and milled rice distribution. Apart from these, LAV has now ventured in machineries rental, and coming up with our own milled rice grains." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 75,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row-reverse items-center md:items-start gap-8 md:gap-16", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/2 flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg shadow-lg w-full max-w-md h-64 sm:h-72 md:h-80 overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105", style: {
          boxShadow: "0 2px 20px 2px rgba(234, 179, 8, 0.85)"
          // gold shadow
        }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "img",
          {
            src: "/mission.jpg",
            alt: "FarmEx History",
            className: "w-full h-full object-cover rounded-lg"
          },
          void 0,
          false,
          {
            fileName: "app/routes/about.tsx",
            lineNumber: 92,
            columnNumber: 19
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 89,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/2 flex flex-col justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-4 uppercase tracking-widest", children: "Our Mission" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 99,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-lg leading-relaxed", children: "LAV\u2019s mission is to come up with all the technologies and provide holistic support to the Filipino rice farmers. LAV is continuously testing high yielding rice seed varieties adaptable to the local conditions. From land preparation to harvesting activities, we provide after-sales support through technical consultations, machineries rental, production trainings and field demonstrations." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 102,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 98,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 86,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 56,
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
      lineNumber: 114,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full bg-gradient-to-tr from-[#788B5F] to-[#2A4127] min-h-screen", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-1 bg-[#E0B100]" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10 px-4 sm:px-6 lg:px-8 py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-4xl md:text-5xl font-extrabold text-white mb-4", children: "Farmex Leadership Team" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 154,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-auto md:w-[620px] h-1 bg-[#E0B100] mx-auto" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 157,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 153,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white text-base md:text-lg leading-relaxed mb-16 space-y-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The leadership team of Farmex Corporation is composed of dedicated and forward-thinking individuals committed to empowering Filipino rice farmers through innovation and holistic agricultural support." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 162,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Guided by the mission to deliver comprehensive technologies and services across the rice production cycle, the team oversees initiatives that include the continuous testing of high-yielding, locally adaptable rice seed varieties under Farmex Corporation." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 165,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Their leadership ensures that farmers receive end-to-end assistance\u2014from land preparation to harvest\u2014through technical consultations, machinery rentals, production training, and field demonstrations, driving sustainable growth and productivity in the local rice industry." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 168,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 161,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-16", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl md:text-3xl font-bold text-white mb-2", children: "Fernando B. Malveda" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 177,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-lg uppercase tracking-wide", children: "Chairman" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 180,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 176,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-8 text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Jose Maria Fernando L. Malveda" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 190,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "PRESIDENT" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 193,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 189,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Angelica A. Belarmino" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 198,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Operations Manager" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 201,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 197,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Karlo Miguel F. Santos" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 206,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "LTC Operations Manager" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 209,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 205,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Rey N. Rivera" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 214,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Warehouse Manager" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 217,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 213,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 188,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-8 text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Arturo A. Alejar Jr." }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 226,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Chief Operations Officer (COO)" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 229,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 225,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Myrile Mae T. Adlus" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 234,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Business Development Manager" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 237,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 233,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Janine M. Villamor" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 242,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Admin and Sales Operations Manager" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 245,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 241,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Angelou Q. Reodique" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 250,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Communications Manager" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 253,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 249,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 224,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 186,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 174,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 151,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 150,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 35,
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
//# sourceMappingURL=/build/routes/about-DR55PTHP.js.map
