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

// app/routes/products.tsx
var import_react = __toESM(require_react(), 1);
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
  import.meta.hot.lastModified = "1754400027792.6926";
}
function meta() {
  return [{
    title: "Farmex"
  }];
}
var productList = [{
  name: "Jackpot 102",
  image: "/jackpot102_product.png",
  desc: "Hybrid Rice",
  desc1: "Jackpot 102 (NSIC 666H) is the first hybrid rice seed variety introduced and distributed by LAV way back 2019. Through the years, Jackpot has already proven its place in the hybrid rice seed industry by ranking in the Top 5 varieties preferred by farmers during Rice Derbies.",
  pdf: "/downloads/jackpot-102.pdf"
}, {
  name: "LAV 777",
  image: "/lav777_product.png",
  desc: "Hybrid Rice",
  desc1: "LAV 777 (NSIC Rc 656H) is our latest variety offering to rice farmers. Launched last year in Occidental Mindoro, LAV 777 has the quality traits of a superior hybrid rice. \n\n A genetically high yielding and Bacterial Leaf Blight-tolerant variety partnered with our\xA0\u201CSapat na Alaga Protocol\u201D\xA0can definitely help our rice farmers attain high yields without excessive production costs.",
  pdf: "/downloads/lav-777.pdf"
}, {
  name: "Jose Maria Milled Rice",
  image: "/jose1.png",
  desc: "Hybrid Rice",
  desc1: "LAV has entered the whole value-chain of rice production by selling milled rice to the local market. Jose Maria is LAV\u2019s regular-milled rice similar to the Dinorado type. As a product of contract growing, LAV helps the rice growers sell their produce by buying back their harvests at the prevailing market price. These fresh palay are then milled through our own milling facility and packaged as Jose Maria milled rice, named after the LAV\u2019s Founder and President, Mr. Jose Maria Fernando L. Malveda.",
  pdf: "/downloads/jose-maria.pdf"
}, {
  name: "Leads 143",
  image: "/leads143_product.png",
  desc: "Hybrid Rice",
  desc1: "",
  pdf: "/downloads/leads-143.pdf"
}, {
  name: "Jackpot ready",
  image: "/jackpot-ready_product.png",
  desc: "Hybrid Rice",
  desc1: "Jackpot Ready is a product development where Jackpot 102 seeds have been grown into healthy 15-21 day-old seedlings. This technology gives the farmers an option of ready-to-plant seedlings and provides convenience to farmers who want to save time and energy during pre-planting stage.",
  pdf: "/downloads/jackpot-ready.pdf"
}];
function Products() {
  _s();
  const [isClient, setIsClient] = (0, import_react.useState)(false);
  const [selectedProduct, setSelectedProduct] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProduct]);
  (0, import_react.useEffect)(() => {
    setIsClient(true);
  }, []);
  const closeModal = () => setSelectedProduct(null);
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
          lineNumber: 88,
          columnNumber: 24
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 h-auto mt-16 md:-mt-26", children: "PRODUCTS" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 102,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 101,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full py-16 px-4 sm:px-8 bg-[url('/productbg1.png')] bg-cover bg-center flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8", children: productList.map((product, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: product.image, alt: product.name, initial: {
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
        }, className: "w-full h-50 object-cover rounded mb-4" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 113,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-bold text-green-600 text-xl mb-2", children: product.name }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 126,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-center mb-4", children: product.desc }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 127,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSelectedProduct(product), className: "mt-auto px-4 py-2 bg-[#057A31] text-white rounded hover:bg-green-900 transition", children: "Learn More" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 128,
          columnNumber: 19
        }, this)
      ] }, idx, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 112,
        columnNumber: 50
      }, this)) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 109,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this),
    selectedProduct && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 backdrop-blur-sm bg-black/30 z-40" }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 140,
        columnNumber: 5
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 flex items-start justify-center pt-24 md:pt-32 px-4 overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg w-full max-w-4xl bg-cover bg-center flex flex-col md:flex-row overflow-hidden relative bg-white min-h-[400px]", style: {
        backgroundImage: "url('/bgmodal.png')"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-center items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-2 text-green-800 text-xl sm:text-2xl font-bold text-center", children: selectedProduct.name }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 151,
              columnNumber: 3
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: selectedProduct.image, alt: selectedProduct.name, initial: {
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
            }, className: "w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-auto object-contain mx-auto rounded" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 154,
              columnNumber: 3
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 150,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block text-center md:text-left text-black text-sm sm:text-base", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-semibold mb-1", children: "For sales inquiries," }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 171,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "leading-relaxed text-sm", children: [
              "Or call",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:(049) 576-007", className: "text-black text-sm underline hover:underline", children: "(049) 576-007" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 174,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 177,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.google.com/maps/...", target: "_blank", rel: "noopener noreferrer", className: "text-black text-sm underline hover:underline inline-flex items-center", children: "1775 F.T. San Luis Avenue, Bay, Laguna" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 178,
                columnNumber: 7
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 172,
              columnNumber: 5
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 170,
            columnNumber: 3
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 149,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-center text-black text-sm sm:text-base", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6 whitespace-pre-line", children: selectedProduct.desc1 || selectedProduct.desc }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 188,
            columnNumber: 5
          }, this) }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 187,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block md:hidden text-center text-black text-sm sm:text-base mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-semibold mb-1", children: "For sales inquiries," }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 194,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "leading-relaxed", children: [
              "Or call",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:(049) 576-007", className: "text-black underline hover:underline", children: "(049) 576-007" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 197,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 200,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.google.com/maps/...", target: "_blank", rel: "noopener noreferrer", className: "text-black underline hover:underline inline-flex items-center", children: "1775 F.T. San Luis Avenue, Bay, Laguna" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 201,
                columnNumber: 7
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 195,
              columnNumber: 5
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 193,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row justify-center items-center gap-3 mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/get-involved", className: "w-full sm:w-auto px-4 py-2 bg-green-700 text-white rounded hover:bg-green-900 text-center", children: "Contact Us" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 207,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: selectedProduct.pdf, className: "w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 text-center", download: true, children: "Download" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 210,
              columnNumber: 5
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 206,
            columnNumber: 3
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 186,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: closeModal, className: "absolute top-2 right-2 text-black hover:text-gray-600 text-2xl font-bold", children: "\xD7" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 217,
          columnNumber: 9
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 145,
        columnNumber: 5
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 143,
        columnNumber: 5
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 138,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 83,
    columnNumber: 10
  }, this);
}
_s(Products, "clpl7EjBxePUbOnNKfj//Dnw6uU=");
_c = Products;
var _c;
$RefreshReg$(_c, "Products");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Products as default,
  meta
};
//# sourceMappingURL=/build/routes/products-4H4OG3ON.js.map
