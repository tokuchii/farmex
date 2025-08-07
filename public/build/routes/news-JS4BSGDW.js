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

// app/routes/news.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\news.tsx"' + id);
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
    "app\\routes\\news.tsx"
  );
  import.meta.hot.lastModified = "1754539383319.831";
}
function meta() {
  return [{
    title: "Farmex - News"
  }];
}
var newsItems = [{
  title: "Hybrid Rice Expansion",
  description: "Farmex expands hybrid rice production to boost yields across Luzon.",
  image: "/news1.jpg",
  author: "Admin - Farmex",
  content: "Farmex continues to expand hybrid rice initiatives in major provinces of Luzon to improve agricultural yields and support food security. This program involves training, seed distribution, and field monitoring across multiple municipalities."
}, {
  title: "Farmer Training 2025",
  description: "A new round of technical training for farmers begins this August.",
  image: "/news2.jpg",
  author: "Training Department",
  content: "Farmex will launch a new training series focused on climate-smart agriculture, pest management, and machinery operation. This will include both in-person and online modules for accessibility."
}, {
  title: "Irrigation Innovations",
  description: "New water-efficient systems tested in pilot areas in Central Luzon.",
  image: "/news3.jpg",
  author: "Irrigation Team",
  content: "Farmex engineers are piloting new low-pressure irrigation systems in Central Luzon. These systems are expected to save up to 40% more water while maintaining crop output, especially in dry seasons."
}, {
  title: "Machinery Rentals Up",
  description: "LAV expands machinery availability in high-demand regions.",
  image: "/news4.jpg",
  author: "LAV Program",
  content: "To meet growing farmer demands, LAV stations now offer extended rental schedules, increased machine inventory, and online booking support in high-demand zones like Pampanga and Nueva Ecija."
}, {
  title: "Organic Farming Push",
  description: "Efforts increase to promote sustainable and organic techniques.",
  image: "/news5.jpg",
  author: "Sustainability Team",
  content: "With growing interest in sustainability, Farmex is scaling organic compost production and biofertilizer distribution. A new community-supported organic farm will also be inaugurated this September."
}, {
  title: "Youth in Agriculture",
  description: "Farmex encourages youth participation in agriculture tech programs.",
  image: "/news6.jpg",
  author: "Youth & Innovation Division",
  content: "Farmex has launched 'AgriTech Youth Drive' \u2014 a program aimed at getting young people involved in modern farming techniques through coding, drone operation, and soil sensor technologies."
}];
var newsSlides = {
  0: [{
    src: "/hybrid1.jpg",
    alt: "Hybrid 1"
  }, {
    src: "/hybrid2.jpg",
    alt: "Hybrid 2"
  }],
  1: [{
    src: "/training1.jpg",
    alt: "Training 1"
  }, {
    src: "/training2.jpg",
    alt: "Training 2"
  }],
  2: [{
    src: "/irrigation1.jpg",
    alt: "Irrigation 1"
  }, {
    src: "/irrigation2.jpg",
    alt: "Irrigation 2"
  }],
  3: [{
    src: "/lav1.jpg",
    alt: "LAV 1"
  }, {
    src: "/lav2.jpg",
    alt: "LAV 2"
  }],
  4: [{
    src: "/organic1.jpg",
    alt: "Organic 1"
  }, {
    src: "/organic2.jpg",
    alt: "Organic 2"
  }],
  5: [{
    src: "/youth1.jpg",
    alt: "Youth 1"
  }, {
    src: "/youth2.jpg",
    alt: "Youth 2"
  }]
};
function SliderModal({
  images,
  title,
  author,
  content,
  onClose
}) {
  _s();
  const [index, setIndex] = (0, import_react.useState)(0);
  const prev = () => setIndex((i) => i === 0 ? images.length - 1 : i - 1);
  const next = () => setIndex((i) => i === images.length - 1 ? 0 : i + 1);
  (0, import_react.useEffect)(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative rounded-lg shadow-xl w-full max-w-5xl p-6 pt-12 overflow-y-auto max-h-[95vh] bg-no-repeat bg-cover bg-center", style: {
    backgroundImage: "url('/productbg1.png')",
    backgroundSize: "100% 100%"
  }, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onClose, className: "absolute top-3 right-4 text-gray-600 hover:text-black text-3xl font-bold z-50", children: "\xD7" }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 138,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex items-center justify-center mb-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: prev, className: "absolute left-0 text-3xl text-green-800 px-3 font-bold", children: "<" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 144,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: images[index].src, alt: images[index].alt, className: "w-full h-[320px] sm:h-[400px] md:h-[450px] object-cover rounded-md border-4 border-green-700" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: next, className: "absolute right-0 text-3xl text-green-800 px-3 font-bold", children: ">" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/news.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-6", children: images.map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `mx-1 w-3 h-3 rounded-full ${i === index ? "bg-green-700" : "bg-gray-300"}` }, i, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 155,
      columnNumber: 33
    }, this)) }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 154,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-left px-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-gray-800 mb-1", children: title }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-500 italic mb-4", children: author }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 161,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-base leading-relaxed whitespace-pre-line", children: content }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 162,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/news.tsx",
      lineNumber: 159,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/news.tsx",
    lineNumber: 133,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/news.tsx",
    lineNumber: 132,
    columnNumber: 10
  }, this);
}
_s(SliderModal, "c3fuAdVwNN91t4bNS1qBXl5hAWY=");
_c = SliderModal;
function News() {
  _s2();
  const [isClient, setIsClient] = (0, import_react.useState)(false);
  const [selectedNewsIndex, setSelectedNewsIndex] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    setIsClient(true);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative min-h-screen w-full", children: [
    isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: "/bgnews.png", alt: "News Background", className: "absolute inset-0 w-full h-full object-cover z-0", initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      duration: 0.6,
      ease: "easeOut"
    } }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 183,
      columnNumber: 22
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10 flex flex-col items-center min-h-screen px-4 py-20 space-y-8 mt-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-6xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-3xl md:text-4xl font-extrabold uppercase tracking-widest", children: "Events" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 196,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-no-repeat bg-center bg-contain p-8 md:p-12 max-w-6xl w-full text-center mt-20", style: {
        backgroundImage: "url('/bgcontact.png')",
        backgroundSize: "100% 100%"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: newsItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "shadow-md flex flex-col overflow-hidden h-[480px]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.image, alt: item.title, className: "w-full h-[180px] object-cover" }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 210,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col justify-between bg-no-repeat bg-cover bg-center flex-grow", style: {
          backgroundImage: "url('/bgnews1.png')",
          backgroundSize: "100% 100%",
          boxShadow: `
      inset 0 0 12px rgba(234, 179, 8, 0.8),
      0 6px 14px rgba(0, 0, 0, 0.25)`
        }, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-left text-gray-800 px-5 pt-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-14 text-white", children: item.title }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 224,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-base font-light", children: item.description }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 229,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-right text-gray-800 mt-4", children: item.author }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 232,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/news.tsx",
            lineNumber: 222,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end px-5 pb-5 mt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSelectedNewsIndex(index), className: "text-white bg-yellow-400 px-5 py-2 text-sm font-semibold rounded hover:bg-yellow-500 transition", children: "Read More" }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 237,
            columnNumber: 23
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 236,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/news.tsx",
          lineNumber: 214,
          columnNumber: 19
        }, this)
      ] }, index, true, {
        fileName: "app/routes/news.tsx",
        lineNumber: 208,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 207,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 202,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/news.tsx",
      lineNumber: 193,
      columnNumber: 9
    }, this),
    selectedNewsIndex !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SliderModal, { images: newsSlides[selectedNewsIndex], title: newsItems[selectedNewsIndex].title, author: newsItems[selectedNewsIndex].author, content: newsItems[selectedNewsIndex].content, onClose: () => setSelectedNewsIndex(null) }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 248,
      columnNumber: 40
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/news.tsx",
    lineNumber: 182,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/news.tsx",
    lineNumber: 180,
    columnNumber: 10
  }, this);
}
_s2(News, "/HWAV2AYV0a57r7JNPRHUDVyvvM=");
_c2 = News;
var _c;
var _c2;
$RefreshReg$(_c, "SliderModal");
$RefreshReg$(_c2, "News");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  News as default,
  meta
};
//# sourceMappingURL=/build/routes/news-JS4BSGDW.js.map
