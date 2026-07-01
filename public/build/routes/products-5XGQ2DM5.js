import {
  motion
} from "/build/_shared/chunk-ZJN32EVK.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
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

// app/routes/products.tsx
var import_react = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\products.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\products.tsx"
  );
  import.meta.hot.lastModified = "1782870039129.1785";
}
function meta() {
  return [{
    title: "Products"
  }];
}
var productList = [{
  name: "Jackpot 102",
  image: "J102.png",
  desc: "Hybrid Rice Seed",
  code: "NSIC 2021 Rc 666H",
  details: [["Potential Yield", "18 MT or 360 cavans"], ["Maturity (DAS)", "110-115 days"], ["Milling Recovery", "71%"], ["Grain Type", "Long and slender"], ["Amylose Content", "14.8%"], ["Plant Height", "109 CM"], ["Number of tillers", "12-13"], ["Seeding rate:", "Direct seeded: 21-24 KG\nTransplanted: 15-18 KG"]],
  pdf: "/downloads/jackpot-102.pdf"
}, {
  name: "LAV 777",
  image: "lav777_product.png",
  desc: "Hybrid Rice Seed",
  code: "NSIC 2021 Rc 656H",
  details: [["Potential Yield", "11 MT or 220 cavans and above"], ["Maturity (DAS)", "109-113 Days"], ["Milling Recovery", "75%"], ["Grain Type", "Long and slender"], ["Amylose Content", "20.1%"], ["Plant Height", "112 CM"], ["Number of tillers", "12-14"], ["Seeding rate:", "Direct seeded: 21-24 KG\nTransplanted: 15-18 KG"]],
  pdf: "/downloads/lav-777.pdf"
}, {
  name: "Leads 143",
  image: "leads143_product.png",
  desc: "Hybrid Rice Seed",
  code: "NSIC 2022 Rc 694H",
  details: [["Potential Yield", "11 MT or 220 cavans and above"], ["Maturity (DAS)", "112-114 days"], ["Milling Recovery", "68.7%"], ["Grain Type", "Long and slender"], ["Amylose Content", "13.7%"], ["Plant Height", "111 CM"], ["Number of tillers", "12-13"], ["Seeding rate:", "Direct seeded: 21-24 KG\nTransplanted: 15-18 KG"]],
  pdf: "/downloads/leads143.pdf"
}, {
  name: "Jose Maria Milled Rice",
  image: "/jose1.png",
  desc: "Regular-milled Rice",
  code: "",
  desc1: "Farmex has entered the whole value-chain of rice production by selling milled rice to the local market. Jose Maria is Farmex's regular-milled rice similar to the Dinorado type. As a product of contract growing, Farmex helps the rice growers sell their produce by buying back their harvests at the prevailing market price. These fresh palay are then milled through our own milling facility and packaged as Jose Maria milled rice, named after the Farmex's Founder and President, Mr. Jose Maria Fernando L. Malveda.",
  pdf: "/downloads/jose-maria.pdf"
}, {
  name: "Jackpot ready",
  image: "/jr_new_image2.png",
  code: "",
  desc: "Hybrid Rice Seedlings",
  desc1: "Jackpot Ready is a product development where Jackpot 102 seeds have been grown into healthy 15-21 day-old seedlings. This technology gives the farmers an option of ready-to-plant seedlings and provides convenience to farmers who want to save time and energy during pre-planting stage.",
  pdf: "/downloads/jackpot-ready.pdf"
}];
var DetailIcon = ({
  index
}) => {
  const icons = [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 146
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", { points: "16 7 22 7 22 13" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 196
    }, this)
  ] }, 0, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 69,
    columnNumber: 18
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 369
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "16", y1: "2", x2: "16", y2: "6" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 419
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "8", y1: "2", x2: "8", y2: "6" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 457
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "3", y1: "10", x2: "21", y2: "10" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 493
    }, this)
  ] }, 1, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 69,
    columnNumber: 241
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", { x: "5", y: "2", width: "14", height: "20", rx: "2" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 668
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "9", y1: "9", x2: "15", y2: "9" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 718
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "9", y1: "13", x2: "15", y2: "13" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 755
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "9", y1: "17", x2: "13", y2: "17" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 794
    }, this)
  ] }, 2, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 69,
    columnNumber: 540
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ellipse", { cx: "12", cy: "12", rx: "3", ry: "7" }, void 0, false, {
    fileName: "app/routes/products.tsx",
    lineNumber: 69,
    columnNumber: 969
  }, this) }, 3, false, {
    fileName: "app/routes/products.tsx",
    lineNumber: 69,
    columnNumber: 841
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 1146
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "9", y1: "3", x2: "9", y2: "21" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 1196
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "3", y1: "9", x2: "21", y2: "9" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 1233
    }, this)
  ] }, 4, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 69,
    columnNumber: 1018
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("line", { x1: "12", y1: "3", x2: "12", y2: "21" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 1406
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", { points: "8 7 12 3 16 7" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 1445
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("polyline", { points: "8 17 12 21 16 17" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 1480
    }, this)
  ] }, 5, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 69,
    columnNumber: 1278
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12 22V12" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 1654
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12 12C12 7 8 4 4 5" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 1676
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12 12C12 7 16 4 20 5" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 1708
    }, this)
  ] }, 6, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 69,
    columnNumber: 1526
  }, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", { cx: "12", cy: "8", r: "3" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 1878
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M12 11v10" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 1909
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M9 18l3 3 3-3" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 1931
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M6.343 17.657a8 8 0 1011.314 0" }, void 0, false, {
      fileName: "app/routes/products.tsx",
      lineNumber: 69,
      columnNumber: 1957
    }, this)
  ] }, 7, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 69,
    columnNumber: 1750
  }, this)];
  const icon = icons[index] ?? icons[0];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "w-4 h-4 text-green-700 flex items-center justify-center", children: import_react2.default.cloneElement(icon, {
    className: "w-4 h-4"
  }) }, void 0, false, {
    fileName: "app/routes/products.tsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
};
_c = DetailIcon;
function Products() {
  _s();
  const [isClient, setIsClient] = (0, import_react.useState)(false);
  const [selectedProduct, setSelectedProduct] = (0, import_react.useState)(null);
  const [showError, setShowError] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);
  (0, import_react.useEffect)(() => {
    setIsClient(true);
  }, []);
  const closeModal = () => setSelectedProduct(null);
  const handleDownload = (pdf) => {
    if (!pdf)
      return;
    const link = document.createElement("a");
    link.href = pdf;
    link.download = pdf.split("/").pop() || "file.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  (0, import_react.useEffect)(() => {
    if (!selectedProduct && !showError)
      return;
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (showError) {
          setShowError(false);
          return;
        }
        if (selectedProduct)
          closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selectedProduct, showError]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative w-full h-64 sm:h-96 md:h-[600px] lg:h-[500px] overflow-hidden", children: [
        isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: "/bgproducts.png", alt: "Farm Image", className: "w-full h-full object-cover object-top", initial: {
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
          fileName: "app/routes/products.tsx",
          lineNumber: 120,
          columnNumber: 24
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 h-auto mt-16 md:-mt-26", children: "PRODUCTS" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-white justify-center bg-cover bg-center", style: {
        backgroundImage: "url('/About us 1.png')"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr", children: productList.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full overflow-hidden rounded mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: product.image, alt: product.name, className: "w-full h-60 object-contain transform transition-transform duration-300 ease-in-out hover:scale-105" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 148,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 147,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-bold text-green-700 text-2xl mb-3 text-center", children: product.name }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 150,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-base text-center mb-6", children: product.desc }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 151,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto w-full flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSelectedProduct(product), className: "px-5 py-2.5 bg-[#057A31] text-white text-base rounded hover:bg-green-900 transition", children: "Learn More" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 153,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 152,
          columnNumber: 19
        }, this)
      ] }, product.name, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 146,
        columnNumber: 43
      }, this)) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 145,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 142,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    selectedProduct && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 backdrop-blur-sm bg-black/40 z-40", onClick: closeModal }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 overflow-y-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-h-full items-center justify-center p-4 sm:p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative bg-white rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: closeModal, className: "absolute top-3 right-4 z-10 text-gray-400 hover:text-gray-700 text-3xl font-light leading-none", "aria-label": "Close modal", children: "\xD7" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 176,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-[38%] relative flex flex-col border-b md:border-b-0 md:border-r border-gray-100 bg-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 pt-8 pb-4 flex flex-col items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-green-800 text-2xl sm:text-3xl font-extrabold text-center uppercase leading-tight mb-1", children: selectedProduct.name }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 187,
                columnNumber: 23
              }, this),
              selectedProduct.code && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-green-600 text-sm font-semibold text-center flex items-center gap-1.5 flex-wrap justify-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\u273F" }, void 0, false, {
                  fileName: "app/routes/products.tsx",
                  lineNumber: 191,
                  columnNumber: 27
                }, this),
                selectedProduct.code,
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { "aria-hidden": "true", children: "\u273F" }, void 0, false, {
                  fileName: "app/routes/products.tsx",
                  lineNumber: 193,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/products.tsx",
                lineNumber: 190,
                columnNumber: 48
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 186,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 w-full overflow-hidden", style: {
              minHeight: "280px"
            }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: selectedProduct.image, alt: selectedProduct.name, className: "w-full h-full object-cover object-center", style: {
              minHeight: "280px",
              maxHeight: "420px"
            } }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 201,
              columnNumber: 23
            }, this) }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 198,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 184,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-[62%] flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 pt-6 pb-4 flex-1 ", children: selectedProduct.details ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-green-800 font-bold text-xs tracking-widest uppercase mb-1", children: "PRODUCT INFORMATION" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 214,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-14 h-0.5 bg-green-700 mb-3" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 217,
              columnNumber: 27
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divide-y divide-gray-100", children: selectedProduct.details.map(([label, value], idx) => {
              const isSeeding = label.toLowerCase().includes("seeding");
              const lines = value.split("\n").filter(Boolean);
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3 py-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-8 h-8 rounded-full bg-green-50 border border-green-100 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DetailIcon, { index: idx }, void 0, false, {
                  fileName: "app/routes/products.tsx",
                  lineNumber: 226,
                  columnNumber: 37
                }, this) }, void 0, false, {
                  fileName: "app/routes/products.tsx",
                  lineNumber: 225,
                  columnNumber: 35
                }, this),
                isSeeding ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-semibold text-gray-800 text-sm mb-1", children: label }, void 0, false, {
                    fileName: "app/routes/products.tsx",
                    lineNumber: 230,
                    columnNumber: 39
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-0.5", children: lines.map((line, li) => {
                    const [part, kg] = line.split(":");
                    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-between text-sm", children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-medium text-gray-700", children: part.trim() }, void 0, false, {
                        fileName: "app/routes/products.tsx",
                        lineNumber: 235,
                        columnNumber: 47
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500 text-right", children: kg?.trim() }, void 0, false, {
                        fileName: "app/routes/products.tsx",
                        lineNumber: 236,
                        columnNumber: 47
                      }, this)
                    ] }, li, true, {
                      fileName: "app/routes/products.tsx",
                      lineNumber: 234,
                      columnNumber: 40
                    }, this);
                  }) }, void 0, false, {
                    fileName: "app/routes/products.tsx",
                    lineNumber: 231,
                    columnNumber: 39
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/products.tsx",
                  lineNumber: 229,
                  columnNumber: 48
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-1 min-w-0 justify-between items-center gap-4", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-gray-800 text-sm", children: label }, void 0, false, {
                    fileName: "app/routes/products.tsx",
                    lineNumber: 241,
                    columnNumber: 39
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-500 text-sm text-right shrink-0", children: value }, void 0, false, {
                    fileName: "app/routes/products.tsx",
                    lineNumber: 242,
                    columnNumber: 39
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/products.tsx",
                  lineNumber: 240,
                  columnNumber: 46
                }, this)
              ] }, idx, true, {
                fileName: "app/routes/products.tsx",
                lineNumber: 223,
                columnNumber: 32
              }, this);
            }) }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 219,
              columnNumber: 27
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 213,
            columnNumber: 50
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-sm leading-relaxed", children: selectedProduct.desc1 || selectedProduct.desc }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 247,
            columnNumber: 31
          }, this) }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 212,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 209,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 181,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-gray-50 border-t border-gray-200 px-6 py-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-10 rounded-full bg-green-700 flex items-center justify-center shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 text-white", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.23 1.05L7.5 9.6a16 16 0 006.9 6.9l1.57-1.62a1 1 0 011.05-.23l3.3 1.1A1 1 0 0121 16.72V19a2 2 0 01-2 2h-1C9.16 21 3 14.84 3 7V5z" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 266,
                columnNumber: 29
              }, this) }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 265,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 264,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-bold text-gray-800 text-sm leading-none mb-0.5", children: "For sales inquiries," }, void 0, false, {
                  fileName: "app/routes/products.tsx",
                  lineNumber: 270,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-500 text-xs", children: [
                  "or call",
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:+639451709401", className: "text-green-700 font-semibold hover:underline", children: "(+63) 945 170 9401" }, void 0, false, {
                    fileName: "app/routes/products.tsx",
                    lineNumber: 272,
                    columnNumber: 29
                  }, this)
                ] }, void 0, true, {
                  fileName: "app/routes/products.tsx",
                  lineNumber: 271,
                  columnNumber: 27
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/products.tsx",
                lineNumber: 269,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 263,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden sm:block w-px h-8 bg-gray-300" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 280,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-10 h-10 rounded-full bg-green-700 flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-5 h-5 text-white", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" }, void 0, false, {
                  fileName: "app/routes/products.tsx",
                  lineNumber: 286,
                  columnNumber: 29
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z" }, void 0, false, {
                  fileName: "app/routes/products.tsx",
                  lineNumber: 287,
                  columnNumber: 29
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/products.tsx",
                lineNumber: 285,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 284,
                columnNumber: 25
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.google.com/maps?q=14.330623,121.076050", target: "_blank", rel: "noopener noreferrer", className: "text-xs text-gray-500 hover:underline leading-relaxed", children: [
                "Unit A 201 and Alfresco Area 2nd Floor",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                  fileName: "app/routes/products.tsx",
                  lineNumber: 291,
                  columnNumber: 65
                }, this),
                "Coral Center Mall Barangay San Francisco,",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                  fileName: "app/routes/products.tsx",
                  lineNumber: 292,
                  columnNumber: 68
                }, this),
                "Bi\xF1an Laguna"
              ] }, void 0, true, {
                fileName: "app/routes/products.tsx",
                lineNumber: 290,
                columnNumber: 25
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 283,
              columnNumber: 23
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 260,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-2 shrink-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/get-involved", className: "px-4 py-2.5 border-2 border-green-700 text-green-700 rounded-lg text-sm font-semibold hover:bg-green-50 transition text-center flex items-center gap-1.5 whitespace-nowrap", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", strokeWidth: 2, viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 302,
                columnNumber: 27
              }, this) }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 301,
                columnNumber: 25
              }, this),
              "Contact Us"
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 300,
              columnNumber: 23
            }, this),
            selectedProduct.pdf && selectedProduct.name !== "Jose Maria Milled Rice" && selectedProduct.name !== "Jackpot ready" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleDownload(selectedProduct.pdf), className: "px-4 py-2.5 bg-green-700 text-white rounded-lg text-sm font-semibold hover:bg-green-900 transition flex items-center gap-2 whitespace-nowrap", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M1.4 12.4444H12.6V7H14V13.2222C14 13.6518 13.6866 14 13.3 14H0.7C0.313404 14 0 13.6518 0 13.2222V7H1.4V12.4444ZM8.4 4.66667H11.9L7 10.1111L2.1 4.66667H5.6V0H8.4V4.66667Z", fill: "white" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 309,
                columnNumber: 31
              }, this) }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 308,
                columnNumber: 29
              }, this),
              "Download PDF"
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 307,
              columnNumber: 144
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 299,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 257,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 256,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 173,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 170,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this),
      showError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]", onClick: () => setShowError(false) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 325,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 flex items-center justify-center z-[70]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowError(false), className: "absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold", "aria-label": "Close error modal", children: "\xD7" }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 328,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-4 text-red-600", children: "Sorry, this product does not have a PDF available for download." }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 331,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowError(false), className: "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800", children: "OK" }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 334,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 327,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 326,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 324,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 164,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 116,
    columnNumber: 10
  }, this);
}
_s(Products, "kvL2Rk5sOSoTD6sthhezz1T1RXs=");
_c2 = Products;
var _c;
var _c2;
$RefreshReg$(_c, "DetailIcon");
$RefreshReg$(_c2, "Products");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Products as default,
  meta
};
//# sourceMappingURL=/build/routes/products-5XGQ2DM5.js.map
