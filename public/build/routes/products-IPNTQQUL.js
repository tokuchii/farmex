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
  import.meta.hot.lastModified = "1754890618115.3123";
}
function meta() {
  return [{
    title: "Farmex"
  }];
}
var productList = [{
  name: "Jackpot 102",
  image: "/jackpot102_product.png",
  desc: "Hybrid Rice Seed",
  desc1: "Jackpot 102 (NSIC 666H) is the first hybrid rice seed variety introduced and distributed by LAV way back 2019. Through the years, Jackpot has already proven its place in the hybrid rice seed industry by ranking in the Top 5 varieties preferred by farmers during Rice Derbies.",
  pdf: "/downloads/jackpot-102.pdf"
}, {
  name: "LAV 777",
  image: "/lav777_product.png",
  desc: "Hybrid Rice Seed",
  desc1: "LAV 777 (NSIC Rc 656H) is our latest variety offering to rice farmers. Launched last year in Occidental Mindoro, LAV 777 has the quality traits of a superior hybrid rice. \n\n A genetically high yielding and Bacterial Leaf Blight-tolerant variety partnered with our\xA0\u201CSapat na Alaga Protocol\u201D\xA0can definitely help our rice farmers attain high yields without excessive production costs.",
  pdf: "/downloads/lav-777.pdf"
}, {
  name: "Jose Maria Milled Rice",
  image: "/jose1.png",
  desc: "Hybrid Rice Seed",
  desc1: "LAV has entered the whole value-chain of rice production by selling milled rice to the local market. Jose Maria is LAV\u2019s regular-milled rice similar to the Dinorado type. As a product of contract growing, LAV helps the rice growers sell their produce by buying back their harvests at the prevailing market price. These fresh palay are then milled through our own milling facility and packaged as Jose Maria milled rice, named after the LAV\u2019s Founder and President, Mr. Jose Maria Fernando L. Malveda.",
  pdf: "/downloads/jose-maria.pdf"
}, {
  name: "Leads 143",
  image: "/leads143_product.png",
  desc: "Hybrid Rice Seed",
  desc1: "",
  pdf: "/downloads/leads-143.pdf"
}, {
  name: "Jackpot ready",
  image: "/jackpot-ready_product.png",
  desc: "Hybrid Rice Seed",
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
  (0, import_react.useEffect)(() => {
    if (!selectedProduct)
      return;
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selectedProduct]);
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
          lineNumber: 100,
          columnNumber: 24
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 h-auto mt-16 md:-mt-26", children: "PRODUCTS" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 113,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-white justify-center bg-cover bg-center", style: {
        backgroundImage: "url('/About us 1.png')"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr", children: productList.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "div",
        {
          className: "flex flex-col items-centeR h-full",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full overflow-hidden rounded mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: product.image, alt: product.name, className: "w-full h-60 object-contain transform transition-transform duration-300 ease-in-out hover:scale-105" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 129,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 128,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-bold text-green-700 text-2xl mb-3 text-center", children: product.name }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 131,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-base text-center mb-6", children: product.desc }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 132,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto w-full flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSelectedProduct(product), className: "px-5 py-2.5 bg-[#057A31] text-white text-base rounded hover:bg-green-900 transition", children: "Learn More" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 134,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 133,
              columnNumber: 19
            }, this)
          ]
        },
        product.name,
        true,
        {
          fileName: "app/routes/products.tsx",
          lineNumber: 126,
          columnNumber: 43
        },
        this
      )) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 125,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 121,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this),
    selectedProduct && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 backdrop-blur-sm bg-black/30 z-40" }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 149,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 flex items-start justify-center pt-24 md:pt-32 px-4 overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg w-full max-w-4xl bg-cover bg-center flex flex-col md:flex-row overflow-hidden relative bg-white min-h-[400px]", style: {
        backgroundImage: "url('/bgmodal1.png')"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-center items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-2 text-white text-xl sm:text-2xl font-bold text-center", children: selectedProduct.name }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 160,
              columnNumber: 19
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
              lineNumber: 163,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 159,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block text-center md:text-left text-black text-sm sm:text-base", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-semibold mb-1", children: "For sales inquiries," }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 180,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "leading-relaxed text-sm", children: [
              "Or call",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:(049) 576-007", className: "text-black text-sm underline hover:underline", children: "(049) 576-007" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 183,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 186,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.google.com/maps/...", target: "_blank", rel: "noopener noreferrer", className: "text-black text-sm underline hover:underline inline-flex items-center", children: "1775 F.T. San Luis Avenue, Bay, Laguna" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 187,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 181,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 179,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 158,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-center text-white text-sm sm:text-base", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6 whitespace-pre-line", children: selectedProduct.desc1 || selectedProduct.desc }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 197,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 196,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block md:hidden text-center text-black text-sm sm:text-base mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-semibold mb-1", children: "For sales inquiries," }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 203,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "leading-relaxed", children: [
              "Or call",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:(049) 576-007", className: "text-black underline hover:underline", children: "(049) 576-007" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 206,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 209,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.google.com/maps/...", target: "_blank", rel: "noopener noreferrer", className: "text-black underline hover:underline inline-flex items-center", children: "1775 F.T. San Luis Avenue, Bay, Laguna" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 210,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 204,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 202,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row justify-center items-center gap-3 mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/get-involved", className: "w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-900 text-center", children: "Contact Us" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 216,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: selectedProduct.pdf, className: "w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 text-center flex items-center justify-center gap-2", download: true, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M1.4 12.4444H12.6V7H14V13.2222C14 13.6518 13.6866 14 13.3 14H0.7C0.313404 14 0 13.6518 0 13.2222V7H1.4V12.4444ZM8.4 4.66667H11.9L7 10.1111L2.1 4.66667H5.6V0H8.4V4.66667Z", fill: "white" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 221,
                columnNumber: 5
              }, this) }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 220,
                columnNumber: 3
              }, this),
              "Download PDF"
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 219,
              columnNumber: 2
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 215,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 195,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: closeModal, className: "absolute top-2 right-2 text-black hover:text-gray-600 text-2xl font-bold", children: "\xD7" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 230,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 154,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 152,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 147,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 95,
    columnNumber: 10
  }, this);
}
_s(Products, "4wjiePaXHGP28mqEu3QU69KK9DE=");
_c = Products;
var _c;
$RefreshReg$(_c, "Products");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Products as default,
  meta
};
//# sourceMappingURL=/build/routes/products-IPNTQQUL.js.map
