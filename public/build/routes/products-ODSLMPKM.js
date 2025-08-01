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
  import.meta.hot.lastModified = "1754065549478.1628";
}
function meta() {
  return [{
    title: "FarmEx - Revolutionary Agricultural Technology"
  }];
}
var productList = [{
  name: "Jackpot 102",
  image: "/product1.jpg",
  desc: "Hybrid Rice",
  pdf: "/downloads/jackpot-102.pdf"
}, {
  name: "LAV 777",
  image: "/product2.jpg",
  desc: "Hybrid Rice",
  pdf: "/downloads/lav-777.pdf"
}, {
  name: "Jose Maria Milled Rice",
  image: "/product3.jpg",
  desc: "Hybrid Rice",
  pdf: "/downloads/jose-maria.pdf"
}, {
  name: "Leads 143",
  image: "/product4.jpg",
  desc: "Hybrid Rice",
  pdf: "/downloads/leads-143.pdf"
}, {
  name: "Jackpot ready",
  image: "/product5.jpg",
  desc: "Hybrid Rice",
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
          lineNumber: 83,
          columnNumber: 24
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 h-auto mt-16 md:-mt-26", children: "PRODUCTS" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 96,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full py-16 px-4 sm:px-8 bg-[url('/productbg1.png')] bg-cover bg-center flex flex-col items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8", children: productList.map((product, idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: product.image, alt: product.name, className: "w-full h-40 object-cover rounded mb-4" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-bold text-green-600 text-xl mb-2", children: product.name }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 109,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-600 text-center mb-4", children: product.desc }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 110,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSelectedProduct(product), className: "mt-auto px-4 py-2 bg-[#057A31] text-white rounded hover:bg-green-900 transition", children: "Learn More" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 111,
          columnNumber: 17
        }, this)
      ] }, idx, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 107,
        columnNumber: 48
      }, this)) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 106,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    selectedProduct && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 backdrop-blur-sm bg-black/30 z-40" }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 flex items-center justify-center px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden relative bg-cover bg-center", style: {
        backgroundImage: "url('/bgmodal.png')"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:w-1/2 p-6 flex flex-col items-center relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-48 relative mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: selectedProduct.image, alt: selectedProduct.name, className: "w-full h-full object-cover rounded" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 133,
              columnNumber: 5
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "absolute top-2 left-1/2 transform -translate-x-1/2 text-green-800 text-2xl font-bold px-4 py-1", children: selectedProduct.name }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 134,
              columnNumber: 5
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 132,
            columnNumber: 3
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-left text-black", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block text-lg font-semibold mb-1", children: "For sales inquiries," }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 140,
              columnNumber: 3
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm leading-relaxed block", children: [
              "Or call",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:(049) 576-007", className: "text-black underline hover:underline", children: "(049) 576-007" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 145,
                columnNumber: 2
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 146,
                columnNumber: 5
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.google.com/maps/place/1775+F.T.+San+Luis+Avenue,+Bay,+4033+Laguna/@14.1770685,121.3138026,3a,75y,179.58h,90.22t/data=!3m7!1e1!3m5!1sER7LVQxCt1pLkAWu1AjQQg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.220788706272117%26panoid%3DER7LVQxCt1pLkAWu1AjQQg%26yaw%3D179.5800923117178!7i16384!8i8192!4m6!3m5!1s0x33bd5e176676321b:0x7b2c62c941bcd7a3!8m2!3d14.1722007!4d121.2746737!16s%2Fg%2F11qwynhv6y?entry=ttu", target: "_blank", rel: "noopener noreferrer", className: "text-black underline hover:underline inline-flex items-center", children: "1775 F.T. San Luis Avenue, Bay, Laguna, Philippines" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 147,
                columnNumber: 17
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 143,
              columnNumber: 3
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 139,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 131,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "md:w-1/2 p-6 flex flex-col justify-between text-black", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "text-lg font-semibold mb-2", children: "Description" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 162,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6", children: [
              selectedProduct.desc,
              " is a top-performing hybrid rice variant known for its resilience, productivity, and superior grain quality. Ideal for commercial and local farming."
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 163,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 161,
            columnNumber: 7
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/get-involved", className: "px-4 py-2 bg-green-700 text-white rounded hover:bg-green-900 text-center w-full md:w-auto", children: "Contact Us" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 170,
              columnNumber: 9
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: selectedProduct.pdf, className: "px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 text-center w-full md:w-auto", download: true, children: "Download" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 173,
              columnNumber: 9
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 169,
            columnNumber: 7
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 160,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: closeModal, className: "absolute top-2 right-2 text-black hover:text-gray-200 text-2xl font-bold", children: "\xD7" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 180,
          columnNumber: 5
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 127,
        columnNumber: 3
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 126,
        columnNumber: 7
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 121,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 78,
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
//# sourceMappingURL=/build/routes/products-ODSLMPKM.js.map
