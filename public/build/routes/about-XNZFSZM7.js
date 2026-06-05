import {
  motion
} from "/build/_shared/chunk-ZJN32EVK.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-JQ452JWN.js";
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
  import.meta.hot.lastModified = "1779692792398.727";
}
function meta() {
  return [{
    title: "About Us"
  }];
}
var timelineEvents = [{
  year: "2018",
  title: "Founded as Leads Agriventures Corporation",
  body: "Established as a proud subsidiary of LEADS Agri, the company began its journey focused on hybrid rice seed varietal testing and milled rice distribution to improve food security across the country.",
  accent: "gold"
}, {
  year: "2018\u201323",
  title: "Growth & diversification",
  body: "Expanded into financing for rice farmers, rental of large-scale agricultural machinery, and distribution of small farm tools and equipment \u2014 offering end-to-end solutions from planting to post-harvest.",
  accent: "gold"
}, {
  year: "2024",
  title: "Rebranded to Farmex Corporation",
  body: "As the company expanded its scope and vision, it was officially rebranded to Farmex Corporation \u2014 cementing its commitment to advancing Philippine agriculture through innovation, sustainability, and meaningful partnerships.",
  accent: "green"
}];
function HistorySection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full relative py-14 px-4 sm:px-6 lg:px-8 overflow-hidden", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 z-0", style: {
      backgroundImage: "url('/history.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(6px) brightness(0.35)",
      transform: "scale(1.05)"
    } }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10 max-w-4xl mx-auto", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        amount: 0.3
      }, transition: {
        duration: 0.55,
        ease: "easeOut"
      }, className: "mb-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-widest text-yellow-400 mb-2", children: "Our story" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl md:text-4xl font-extrabold text-white uppercase tracking-widest mb-3", children: "History" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-1 bg-yellow-400 rounded-full" }, void 0, false, {
          fileName: "app/routes/about.tsx",
          lineNumber: 82,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: timelineEvents.map((event, index) => {
        const isLast = index === timelineEvents.length - 1;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "flex gap-6", initial: {
          opacity: 0,
          x: -24
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true,
          amount: 0.2
        }, transition: {
          duration: 0.5,
          ease: "easeOut",
          delay: index * 0.12
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", style: {
            minWidth: 72
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `w-4 h-4 rounded-full border-4 border-white/20 flex-shrink-0 mt-1 ${event.accent === "green" ? "bg-green-400 ring-2 ring-green-400" : "bg-yellow-400 ring-2 ring-yellow-400"}` }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 107,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `text-xs font-bold mt-1.5 mb-1 ${event.accent === "green" ? "text-green-400" : "text-yellow-400"}`, children: event.year }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 108,
              columnNumber: 19
            }, this),
            !isLast && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 w-0.5 bg-gradient-to-b from-yellow-400 to-green-400 rounded-full" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 111,
              columnNumber: 31
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 104,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `mb-8 flex-1 rounded-xl px-5 py-4 border backdrop-blur-sm ${event.accent === "green" ? "bg-white/10 border-green-400/30" : "bg-white/10 border-white/20"}`, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-semibold text-white mb-1", children: event.title }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 116,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-white/70 leading-relaxed", children: event.body }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 119,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 115,
            columnNumber: 17
          }, this)
        ] }, event.year, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 89,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 86,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 50,
    columnNumber: 10
  }, this);
}
_c = HistorySection;
var missionPillars = ["High-yielding variety testing", "Machinery rental & farm tools", "Technical consultations & training", "Farmer financing solutions"];
var visionPillars = ["Strengthen rice food security", "Advance Philippine agriculture", "Sustainable farming practices", "Nationwide farmer partnerships"];
function MissionVisionSection() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full relative border-t border-gray-100 py-14 px-4 sm:px-6 lg:px-8 overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 z-0", style: {
        backgroundImage: "url('/mission.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "blur(6px) brightness(0.35)",
        transform: "scale(1.05)"
      } }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true,
          amount: 0.3
        }, transition: {
          duration: 0.55,
          ease: "easeOut"
        }, className: "mb-10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-widest text-yellow-400 mb-2", children: "What drives us" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 166,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-3xl md:text-4xl font-extrabold text-white uppercase tracking-widest mb-3", children: "Our Mission" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 169,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-1 bg-yellow-400 rounded-full" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 172,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 153,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative rounded-xl border border-white/20 overflow-hidden backdrop-blur-sm bg-white/10", initial: {
            opacity: 0,
            y: 28
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true,
            amount: 0.2
          }, transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: 0.1
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 w-full bg-green-400" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 193,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 pt-6 pb-7", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-11 h-11 rounded-lg bg-green-400/20 flex items-center justify-center mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-5 h-5 text-green-400", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "12", cy: "12", r: "10" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 197,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "12", cy: "12", r: "6" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 198,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "12", cy: "12", r: "2" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 199,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 196,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 195,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-widest text-green-400 mb-1", children: "Mission" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 202,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-bold text-white mb-3", children: "What we do every day" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 205,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-white/70 leading-relaxed mb-5", children: "To bring all the technologies and provide holistic support to the Filipino rice farmer \u2014 from land preparation through to post-harvest." }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 206,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col gap-2", children: missionPillars.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center gap-2.5 bg-green-400/10 border border-green-400/20 rounded-lg px-3 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 211,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-white", children: item }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 212,
                  columnNumber: 23
                }, this)
              ] }, item, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 210,
                columnNumber: 47
              }, this)) }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 209,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 194,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 179,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative rounded-xl border border-white/20 overflow-hidden backdrop-blur-sm bg-white/10", initial: {
            opacity: 0,
            y: 28
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true,
            amount: 0.2
          }, transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2
          }, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 w-full bg-yellow-400" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 233,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 pt-6 pb-7", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-11 h-11 rounded-lg bg-yellow-400/20 flex items-center justify-center mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-5 h-5 text-yellow-400", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", strokeLinejoin: "round", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 237,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "12", cy: "12", r: "3" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 238,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 236,
                columnNumber: 19
              }, this) }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 235,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-widest text-yellow-400 mb-1", children: "Vision" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 241,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-bold text-white mb-3", children: "Where we are headed" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 244,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-white/70 leading-relaxed mb-5", children: "To be the leading end-to-end agricultural solutions provider in the Philippines \u2014 empowering farming communities through innovation and sustainability." }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 245,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex flex-col gap-2", children: visionPillars.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "flex items-center gap-2.5 bg-yellow-400/10 border border-yellow-400/20 rounded-lg px-3 py-2", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0" }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 250,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-white", children: item }, void 0, false, {
                  fileName: "app/routes/about.tsx",
                  lineNumber: 251,
                  columnNumber: 23
                }, this)
              ] }, item, true, {
                fileName: "app/routes/about.tsx",
                lineNumber: 249,
                columnNumber: 46
              }, this)) }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 248,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 234,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 219,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 176,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 150,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "w-full bg-gradient-to-br from-[#2A4127] to-[#3B6D11] py-12 px-6 text-center", initial: {
      opacity: 0
    }, whileInView: {
      opacity: 1
    }, viewport: {
      once: true,
      amount: 0.3
    }, transition: {
      duration: 0.6,
      ease: "easeOut"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-4xl leading-none text-yellow-400 font-serif mb-2", children: "\u201C" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 273,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white/90 text-base md:text-lg italic leading-relaxed max-w-2xl mx-auto mb-4", children: "Advancing Philippine agriculture through innovation, sustainability, and meaningful partnerships with the farming community." }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 274,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-widest text-yellow-400", children: "Farmex Corporation" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 277,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 262,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 138,
    columnNumber: 10
  }, this);
}
_c2 = MissionVisionSection;
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
        lineNumber: 296,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 mt-16 md:-mt-26", children: "FARMEX AT A GLANCE" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 310,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 309,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 295,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
      opacity: 0,
      y: 32
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      amount: 0.1
    }, transition: {
      duration: 0.6,
      ease: "easeOut"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HistorySection, {}, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 330,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 317,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { initial: {
      opacity: 0,
      y: 32
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      amount: 0.1
    }, transition: {
      duration: 0.6,
      ease: "easeOut"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MissionVisionSection, {}, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 347,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 334,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full bg-gradient-to-tr from-[#788B5F] to-[#2A4127] min-h-screen", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-1 bg-[#E0B100]" }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 353,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10 px-4 sm:px-6 lg:px-8 py-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-[24px] md:text-5xl font-extrabold text-white mb-4", children: "Farmex Leadership Team" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 360,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-auto md:w-[620px] h-1 bg-[#E0B100] mx-auto" }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 363,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 359,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-white text-center text-base md:text-lg leading-relaxed mb-16 space-y-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "The leadership team of Farmex Corporation comprises dedicated and forward-thinking individuals committed to empowering Filipino rice farmers through innovation and comprehensive agricultural support." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 368,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Guided by the mission to deliver comprehensive technologies and services across the rice production cycle, the team oversees initiatives that include the continuous testing of high-yielding, locally adaptable rice seed varieties under Farmex Corporation." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 371,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Their leadership ensures that farmers receive end-to-end assistance\u2014from land preparation to harvest\u2014through technical consultations, machinery rentals, production training, and field demonstrations, driving sustainable growth and productivity in the local rice industry." }, void 0, false, {
            fileName: "app/routes/about.tsx",
            lineNumber: 374,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 367,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-16", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-2xl md:text-3xl font-bold text-white mb-2", children: "Fernando B. Malveda" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 383,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-lg tracking-wide", children: "Chairman" }, void 0, false, {
              fileName: "app/routes/about.tsx",
              lineNumber: 386,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 382,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Jose Maria Fernando L. Malveda" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 392,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "President" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 393,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 391,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Arturo A. Alejar Jr." }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 396,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Chief Operations Officer (COO)" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 397,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 395,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Angelica A. Belarmino" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 400,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Operations Manager" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 401,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 399,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Myrile Mae T. Adlus" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 404,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Business Development Manager" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 405,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 403,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Karlo Miguel F. Santos" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 408,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "LTC Operations Manager" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 409,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 407,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Janine M. Villamor" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 412,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Admin and Sales Operations Manager" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 413,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 411,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Rey N. Rivera" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 416,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Warehouse Manager" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 417,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 415,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-xl md:text-2xl font-bold text-white mb-1", children: "Angelou Q. Reodique" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 420,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-base", children: "Communications Manager" }, void 0, false, {
                fileName: "app/routes/about.tsx",
                lineNumber: 421,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/about.tsx",
              lineNumber: 419,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/about.tsx",
            lineNumber: 390,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/about.tsx",
          lineNumber: 380,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/about.tsx",
        lineNumber: 356,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/about.tsx",
        lineNumber: 355,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/about.tsx",
      lineNumber: 352,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/about.tsx",
      lineNumber: 351,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/about.tsx",
    lineNumber: 292,
    columnNumber: 10
  }, this);
}
_s(About, "k460N28PNzD7zo1YW47Q9UigQis=");
_c3 = About;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "HistorySection");
$RefreshReg$(_c2, "MissionVisionSection");
$RefreshReg$(_c3, "About");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  About as default,
  meta
};
//# sourceMappingURL=/build/routes/about-XNZFSZM7.js.map
