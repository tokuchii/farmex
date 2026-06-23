import {
  require_build
} from "/build/_shared/chunk-KKCJH6ZU.js";
import {
  motion
} from "/build/_shared/chunk-ZJN32EVK.js";
import {
  require_news
} from "/build/_shared/chunk-AG2JF7JH.js";
import {
  require_testimonials
} from "/build/_shared/chunk-SEQ7IFIP.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  useLoaderData
} from "/build/_shared/chunk-ZCW6PNXX.js";
import "/build/_shared/chunk-PLT55Z5M.js";
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

// app/routes/news.tsx
var import_react = __toESM(require_react(), 1);
var import_node = __toESM(require_node(), 1);
var import_react_lazy_load_image_component = __toESM(require_build(), 1);
var import_testimonials = __toESM(require_testimonials(), 1);
var import_news = __toESM(require_news(), 1);
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
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\news.tsx"
  );
  import.meta.hot.lastModified = "1781444576207.9207";
}
var {
  LazyLoadImage
} = import_react_lazy_load_image_component.default;
function meta() {
  return [{
    title: "News"
  }];
}
var formatAuthorDisplay = (author, position) => {
  const cleanAuthor = author.trim();
  const cleanPosition = position?.trim() ?? "";
  if (cleanAuthor && cleanPosition)
    return `-${cleanAuthor}, ${cleanPosition}`;
  if (cleanAuthor)
    return `-${cleanAuthor}`;
  return cleanPosition;
};
var mapNewsRecordToItem = (record) => ({
  title: record.title,
  description: record.summary,
  image: record.images[0] ?? "",
  author: record.author,
  position: record.position || void 0,
  content: record.summary,
  content2: record.notes || void 0,
  location: record.location || void 0,
  organization: record.organization || void 0
});
var mapNewsSlides = (record) => record.images.map((src) => ({
  src,
  alt: record.title
}));
var splitParagraphs = (text) => text.split(/\r?\n/).map((paragraph) => paragraph.trim()).filter(Boolean);
function IconPin() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-4 h-4 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 77,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/news.tsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
}
_c = IconPin;
function IconBuilding() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-4 h-4 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" }, void 0, false, {
    fileName: "app/routes/news.tsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/news.tsx",
    lineNumber: 82,
    columnNumber: 10
  }, this);
}
_c2 = IconBuilding;
function IconUser() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "w-4 h-4 text-white", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 1.5, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" }, void 0, false, {
    fileName: "app/routes/news.tsx",
    lineNumber: 89,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/news.tsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_c3 = IconUser;
function NewsCard({
  item,
  index,
  onReadMore
}) {
  _s();
  const [hovered, setHovered] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-[400px] cursor-pointer rounded-xl overflow-hidden shadow-lg", onMouseEnter: () => setHovered(true), onMouseLeave: () => setHovered(false), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0", style: {
      filter: hovered ? "blur(4px) brightness(0.35)" : "blur(0px) brightness(1)",
      transition: "filter 0.5s ease"
    }, children: item.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: item.image, alt: item.title, className: "w-full h-full object-cover object-center" }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 107,
      columnNumber: 23
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-full bg-[#1a5c35]" }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 107,
      columnNumber: 120
    }, this) }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 103,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col justify-end p-5", style: {
      opacity: hovered ? 0 : 1,
      transition: "opacity 0.4s ease",
      pointerEvents: hovered ? "none" : "auto"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white text-[15px] font-semibold leading-snug mb-1", children: item.title }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white/70 text-[12px] leading-relaxed line-clamp-2", children: item.description }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 120,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/news.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/news.tsx",
      lineNumber: 110,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col justify-between p-6 z-10", style: {
      opacity: hovered ? 1 : 0,
      transition: "opacity 0.4s ease",
      pointerEvents: hovered ? "auto" : "none"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-white text-[17px] font-semibold leading-snug", children: item.title }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3 border-b border-white/20 pb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 border border-white/40 rounded-md flex items-center justify-center shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconPin, {}, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 138,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 137,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block text-white/60 text-[11px] uppercase tracking-wider font-medium mb-0.5", children: "Location" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 141,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-white/90 text-[13px] leading-snug", children: item.location ?? "Philippines" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 144,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/news.tsx",
            lineNumber: 140,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/news.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3 border-b border-white/20 pb-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 border border-white/40 rounded-md flex items-center justify-center shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconBuilding, {}, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 152,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 151,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block text-white/60 text-[11px] uppercase tracking-wider font-medium mb-0.5", children: "Organization" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 155,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-white/90 text-[13px] leading-snug", children: item.organization ?? "LEADS Group of Companies" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 158,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/news.tsx",
            lineNumber: 154,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/news.tsx",
          lineNumber: 150,
          columnNumber: 11
        }, this),
        item.author || item.position ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 border border-white/40 rounded-md flex items-center justify-center shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(IconUser, {}, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 166,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 165,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block text-white/60 text-[11px] uppercase tracking-wider font-medium mb-0.5", children: "Author" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 169,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-white/90 text-[13px] leading-snug", children: formatAuthorDisplay(item.author, item.position) }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 172,
              columnNumber: 17
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/news.tsx",
            lineNumber: 168,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/news.tsx",
          lineNumber: 164,
          columnNumber: 43
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/news.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => onReadMore(index), className: "w-full py-3 rounded-lg text-white text-[13px] font-semibold uppercase tracking-widest hover:opacity-80 transition-opacity", style: {
        background: "#1a5c35"
      }, children: "Read More" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 179,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/news.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/news.tsx",
    lineNumber: 102,
    columnNumber: 10
  }, this);
}
_s(NewsCard, "V8YbV+gTZxGliGj1g0fftBlvsq4=");
_c4 = NewsCard;
function SliderModal({
  images,
  title,
  author,
  content,
  content2,
  onClose
}) {
  _s2();
  const [index, setIndex] = (0, import_react.useState)(0);
  const touchStartXRef = (0, import_react.useRef)(null);
  const prev = () => setIndex((i) => i === 0 ? images.length - 1 : i - 1);
  const next = () => setIndex((i) => i === images.length - 1 ? 0 : i + 1);
  (0, import_react.useEffect)(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e) => {
      if (e.key === "Escape")
        onClose();
      if (e.key === "ArrowLeft" && images.length > 1)
        prev();
      if (e.key === "ArrowRight" && images.length > 1)
        next();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKey);
    };
  }, [images.length, onClose]);
  const onTouchStart = (e) => {
    touchStartXRef.current = e.changedTouches[0].screenX;
  };
  const onTouchEnd = (e) => {
    const startX = touchStartXRef.current;
    if (startX == null)
      return;
    const delta = e.changedTouches[0].screenX - startX;
    touchStartXRef.current = null;
    if (Math.abs(delta) < 40 || images.length <= 1)
      return;
    if (delta > 0)
      prev();
    else
      next();
  };
  const [isMobile, setIsMobile] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative rounded-xl shadow-2xl w-full max-w-5xl p-6 pt-12 overflow-y-auto max-h-[95vh] bg-white", onClick: (e) => e.stopPropagation(), onTouchStart, onTouchEnd, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute top-0 left-0 right-0 h-1.5 rounded-t-xl", style: {
      background: "linear-gradient(90deg, #1a5c35, #4ade80)"
    } }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 239,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: onClose, className: "absolute top-3 right-4 text-gray-400 hover:text-gray-700 text-3xl font-bold z-50 transition-colors", children: "\xD7" }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 243,
      columnNumber: 9
    }, this),
    images.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative flex items-center justify-center mb-6", children: [
      images.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: prev, className: "absolute left-0 text-2xl text-green-700 px-3 py-1 font-bold bg-gray-100 rounded-full hover:bg-gray-200 transition", children: "<" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 248,
        columnNumber: 33
      }, this),
      isMobile ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: images[index].src, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LazyLoadImage, { src: images[index].src, alt: images[index].alt, className: "max-h-[35vh] md:max-h-[60vh] object-contain rounded-md border-4 border-green-700 cursor-zoom-in" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 252,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 251,
        columnNumber: 23
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LazyLoadImage, { src: images[index].src, alt: images[index].alt, className: "max-h-[35vh] md:max-h-[60vh] object-contain rounded-md border-4 border-green-700" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 253,
        columnNumber: 20
      }, this),
      images.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-xs bg-black/40 px-2 py-0.5 rounded", children: [
        index + 1,
        " / ",
        images.length
      ] }, void 0, true, {
        fileName: "app/routes/news.tsx",
        lineNumber: 254,
        columnNumber: 33
      }, this),
      images.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: next, className: "absolute right-0 text-2xl text-green-700 px-3 py-1 font-bold bg-gray-100 rounded-full hover:bg-gray-200 transition", children: ">" }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 257,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/news.tsx",
      lineNumber: 247,
      columnNumber: 31
    }, this),
    images.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-6", children: images.map((_, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { "aria-label": `Go to slide ${i + 1}`, onClick: () => setIndex(i), className: `mx-1 w-2.5 h-2.5 rounded-full ${i === index ? "bg-green-700" : "bg-gray-300"}` }, i, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 263,
      columnNumber: 35
    }, this)) }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 262,
      columnNumber: 31
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-left px-2", children: [
      content2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-6 space-y-3 border-l-2 border-green-200 pl-3", children: splitParagraphs(content2).map((paragraph, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 text-[12px] italic leading-relaxed", children: paragraph }, `content2-${index2}`, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 268,
        columnNumber: 68
      }, this)) }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 267,
        columnNumber: 23
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl font-bold text-gray-800 mb-4", children: title }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 272,
        columnNumber: 11
      }, this),
      author ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-gray-400 italic mb-4", children: author }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 273,
        columnNumber: 21
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-4", children: splitParagraphs(content).map((paragraph, index2) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-base leading-relaxed", children: paragraph }, `content-${index2}`, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 275,
        columnNumber: 65
      }, this)) }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 274,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/news.tsx",
      lineNumber: 266,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/news.tsx",
    lineNumber: 237,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/news.tsx",
    lineNumber: 235,
    columnNumber: 10
  }, this);
}
_s2(SliderModal, "k+z6xl+v1nURMU62eovZ2G3dYMk=");
_c5 = SliderModal;
function News() {
  _s3();
  const {
    testimonials,
    news
  } = useLoaderData();
  const newsItems = news.map(mapNewsRecordToItem);
  const [selectedNewsIndex, setSelectedNewsIndex] = (0, import_react.useState)(null);
  const selectedNews = selectedNewsIndex !== null ? news[selectedNewsIndex] : null;
  const selectedItem = selectedNewsIndex !== null ? newsItems[selectedNewsIndex] : null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen w-full", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative min-h-screen w-full", style: {
      background: "#00743B"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10 flex flex-col items-center min-h-screen px-4 py-20 space-y-8 mt-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-6xl", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3 mb-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1 h-9 rounded-full shrink-0", style: {
              background: "linear-gradient(180deg, #4ade80, #16a34a)"
            } }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 304,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-3xl md:text-4xl font-extrabold uppercase tracking-widest", children: "Events" }, void 0, false, {
              fileName: "app/routes/news.tsx",
              lineNumber: 307,
              columnNumber: 15
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/news.tsx",
            lineNumber: 303,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white/40 text-sm ml-4", children: "Latest news and milestones from the LEADS Group of Companies" }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 311,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/news.tsx",
          lineNumber: 302,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-6xl w-full px-2 mt-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", children: newsItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NewsCard, { item, index, onReadMore: setSelectedNewsIndex }, news[index].id, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 318,
          columnNumber: 47
        }, this)) }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 317,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 316,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/news.tsx",
        lineNumber: 300,
        columnNumber: 9
      }, this),
      selectedNews && selectedItem && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SliderModal, { images: mapNewsSlides(selectedNews), title: selectedItem.title, author: formatAuthorDisplay(selectedItem.author, selectedItem.position), content: selectedItem.content, content2: selectedItem.content2, onClose: () => setSelectedNewsIndex(null) }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 323,
        columnNumber: 42
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/news.tsx",
      lineNumber: 297,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f0f7f2] flex flex-col items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative z-10 w-full max-w-6xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3 mb-1", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-1 h-9 rounded-full shrink-0", style: {
            background: "linear-gradient(180deg, #16a34a, #14532d)"
          } }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 334,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-[#1a5c35] text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-widest", children: "Customer Testimonials" }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 337,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/news.tsx",
          lineNumber: 333,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-400 text-sm ml-4", children: "What farmers say about our varieties" }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 341,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/news.tsx",
        lineNumber: 332,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12", children: testimonials.map((testimonial, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "bg-gradient-to-tr from-[#788B5F] to-[#2A4127] rounded-xl p-6 sm:p-8 shadow-lg flex flex-col", initial: {
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
        delay: index === 0 ? 0 : 0.1
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg", children: testimonial.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LazyLoadImage, { src: testimonial.image, alt: testimonial.name, className: "w-full h-full object-cover" }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 363,
          columnNumber: 44
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-full bg-white/20" }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 363,
          columnNumber: 150
        }, this) }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 362,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 361,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-justify mb-6 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm sm:text-base leading-relaxed", children: testimonial.content }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 367,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/news.tsx",
          lineNumber: 366,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-white font-bold text-lg sm:text-xl mb-1", children: testimonial.name }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 372,
            columnNumber: 21
          }, this),
          testimonial.location ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm sm:text-base", children: testimonial.location }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 373,
            columnNumber: 45
          }, this) : null,
          testimonial.position ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm sm:text-base", children: testimonial.position }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 374,
            columnNumber: 45
          }, this) : null,
          testimonial.variety ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white text-sm sm:text-base", children: testimonial.variety }, void 0, false, {
            fileName: "app/routes/news.tsx",
            lineNumber: 375,
            columnNumber: 44
          }, this) : null
        ] }, void 0, true, {
          fileName: "app/routes/news.tsx",
          lineNumber: 371,
          columnNumber: 19
        }, this)
      ] }, testimonial.id, true, {
        fileName: "app/routes/news.tsx",
        lineNumber: 348,
        columnNumber: 57
      }, this)) }, void 0, false, {
        fileName: "app/routes/news.tsx",
        lineNumber: 346,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/news.tsx",
      lineNumber: 329,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 328,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 327,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/news.tsx",
    lineNumber: 295,
    columnNumber: 10
  }, this);
}
_s3(News, "WihZOkTaOX3nrY0nEkSOHj2WKc0=", false, function() {
  return [useLoaderData];
});
_c6 = News;
var _c;
var _c2;
var _c3;
var _c4;
var _c5;
var _c6;
$RefreshReg$(_c, "IconPin");
$RefreshReg$(_c2, "IconBuilding");
$RefreshReg$(_c3, "IconUser");
$RefreshReg$(_c4, "NewsCard");
$RefreshReg$(_c5, "SliderModal");
$RefreshReg$(_c6, "News");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  News as default,
  meta
};
//# sourceMappingURL=/build/routes/news-4U4RZT4P.js.map
