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
  import.meta.hot.lastModified = "1755060660368.0215";
}
function meta() {
  return [{
    title: "About Us"
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-lg leading-relaxed", children: [
            "Farmex Corporation began its journey in 2018 under the name Leads Agriventures Corporation (LAV), as a proud subsidiary of LEADS Agri. In 2024, as the company expanded its scope and vision, it was officially rebranded to Farmex Corporation.  ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 81,
              columnNumber: 261
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 81,
              columnNumber: 267
            }, this),
            "Farmex continues to strengthen its position in the agricultural sector. Our core business focuses on hybrid rice seed varietal testing and milled rice distribution, helping improve rice productivity and food security across the country. ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 83,
              columnNumber: 256
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 83,
              columnNumber: 262
            }, this),
            "Building on our strong foundation, Farmex has recently diversified into financing of rice farmers, rental of large-scale agricultural machinery and the distribution of small farm tools and equipment, offering farmers end-to-end solutions from planting to post-harvest. ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 85,
              columnNumber: 288
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 85,
              columnNumber: 294
            }, this),
            "We are committed to advancing Philippine agriculture through innovation, sustainability, and meaningful partnerships with the farming community."
          ] }, void 0, true, {
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
            lineNumber: 98,
            columnNumber: 19
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 95,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 94,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/2 flex flex-col justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-700 mb-4 uppercase tracking-widest", children: "Our Mission" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 105,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-lg leading-relaxed", children: "LAV\u2019s mission is to come up with all the technologies and provide holistic support to the Filipino rice farmers. LAV is continuously testing high yielding rice seed varieties adaptable to the local conditions. From land preparation to harvesting activities, we provide after-sales support through technical consultations, machineries rental, production trainings and field demonstrations." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 108,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 104,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 92,
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
      lineNumber: 120,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full bg-gradient-to-tr from-[#788B5F] to-[#2A4127] min-h-screen", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-1 bg-[#E0B100]" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 136,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10 px-4 sm:px-6 lg:px-8 py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-[24px] md:text-5xl font-extrabold text-white mb-4", children: "Farmex Leadership Team" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 160,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-auto md:w-[620px] h-1 bg-[#E0B100] mx-auto" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 163,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 159,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white text-base md:text-lg leading-relaxed mb-16 space-y-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "indent-12 md:indent-28 text-justify", children: "The leadership team of Farmex Corporation comprises dedicated and forward-thinking individuals committed to empowering Filipino rice farmers through innovation and comprehensive agricultural support." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 168,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "indent-12 md:indent-28 text-justify", children: "Guided by the mission to deliver comprehensive technologies and services across the rice production cycle, the team oversees initiatives that include the continuous testing of high-yielding, locally adaptable rice seed varieties under Farmex Corporation." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 171,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "indent-12 md:indent-28 text-justify", children: "Their leadership ensures that farmers receive end-to-end assistance\u2014from land preparation to harvest\u2014through technical consultations, machinery rentals, production training, and field demonstrations, driving sustainable growth and productivity in the local rice industry." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 174,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-16", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl md:text-3xl font-bold text-white mb-2", children: "Fernando B. Malveda" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 183,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-lg uppercase tracking-wide", children: "Chairman" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 186,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 182,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-8 text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Jose Maria Fernando L. Malveda" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 196,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "PRESIDENT" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 199,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 195,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Angelica A. Belarmino" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 204,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Operations Manager" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 207,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 203,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Karlo Miguel F. Santos" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 212,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "LTC Operations Manager" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 215,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 211,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Rey N. Rivera" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 220,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Warehouse Manager" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 223,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 219,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 194,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-8 text-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Arturo A. Alejar Jr." }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 232,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Chief Operations Officer (COO)" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 235,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 231,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Myrile Mae T. Adlus" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 240,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Business Development Manager" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 243,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 239,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Janine M. Villamor" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 248,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Admin and Sales Operations Manager" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 251,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 247,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Angelou Q. Reodique" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 256,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Communications Manager" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 259,
                  columnNumber: 23
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 255,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 230,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 192,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 157,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 134,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 132,
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
//# sourceMappingURL=/build/routes/about-JHKDRMZS.js.map
