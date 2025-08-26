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
  import.meta.hot.lastModified = "1756187377046.0422";
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
  details: [["Potential Yield", "18 MT or 360 cavans"], ["Maturity (DAS)", "110-115 days"], ["Milling Recovery", "71%"], ["Grain Type", "Long and slender"], ["Amylose Content", "14.8%"], ["Plant Height", "109 CM"], ["Number of tillers", "12-13"], ["Seeding rate: \n\n Direct seeded \n Transplanted", "\n\n 21-24 KG \n 15-18 KG"]],
  pdf: "/downloads/jackpot-102.pdf"
}, {
  name: "LAV 777",
  image: "lav777_product.png",
  desc: "Hybrid Rice Seed",
  code: "NSIC 2021 Rc 656H",
  details: [["Potential Yield", "11 MT or 220 cavans and above"], ["Maturity (DAS)", "109-113 Days"], ["Milling Recovery", "75%"], ["Grain Type", "Long and slender"], ["Amylose Content", "20.1%"], ["Plant Height", "112 CM"], ["Number of tillers", "12-14"], ["Seeding rate: \n\n Direct seeded \n Transplanted", "\n\n 21-24 KG \n 15-18 KG"]],
  pdf: "/downloads/lav-777.pdf"
}, {
  name: "Leads 143",
  image: "leads143_product.png",
  desc: "Hybrid Rice Seed",
  code: "NSIC 2022 Rc 694H",
  details: [["Potential Yield", "11 MT or 220 cavans and above"], ["Maturity (DAS)", "112-114 days"], ["Milling Recovery", "68.7%"], ["Grain Type", "Long and slender"], ["Amylose Content", "13.7%"], ["Plant Height", "111 CM"], ["Number of tillers", "12-13"], ["Seeding rate: \n\n Direct seeded \n Transplanted", "\n\n 21-24 KG \n 15-18 KG"]],
  pdf: "/downloads/leads143.pdf"
}, {
  name: "Jose Maria Milled Rice",
  image: "/jose1.png",
  desc: "Regular-milled Rice",
  code: "",
  desc1: "Farmex has entered the whole value-chain of rice production by selling milled rice to the local market. Jose Maria is Farmex\u2019s regular-milled rice similar to the Dinorado type. As a product of contract growing, Farmex helps the rice growers sell their produce by buying back their harvests at the prevailing market price. These fresh palay are then milled through our own milling facility and packaged as Jose Maria milled rice, named after the Farmex\u2019s Founder and President, Mr. Jose Maria Fernando L. Malveda.",
  pdf: "/downloads/jose-maria.pdf"
}, {
  name: "Jackpot ready",
  image: "/jr_new_image2.png",
  code: "",
  desc: "Hybrid Rice Seedlings",
  desc1: "Jackpot Ready is a product development where Jackpot 102 seeds have been grown into healthy 15-21 day-old seedlings.This technology gives the farmers an option of ready-to-plant seedlings and provides convenience to farmers who want to save time and energy during pre-planting stage.",
  pdf: "/downloads/jackpot-ready.pdf"
}];
function Products() {
  _s();
  const [isClient, setIsClient] = (0, import_react.useState)(false);
  const [selectedProduct, setSelectedProduct] = (0, import_react.useState)(null);
  const [showError, setShowError] = (0, import_react.useState)(false);
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
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        if (showError) {
          setShowError(false);
          return;
        }
        if (selectedProduct) {
          closeModal();
        }
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
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
          lineNumber: 125,
          columnNumber: 24
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 h-auto mt-16 md:-mt-26", children: "PRODUCTS" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 139,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 138,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "relative w-full py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center bg-white justify-center bg-cover bg-center", style: {
        backgroundImage: "url('/About us 1.png')"
      }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-fr", children: productList.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-centeR h-full", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full overflow-hidden rounded mb-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: product.image, alt: product.name, className: "w-full h-60 object-contain transform transition-transform duration-300 ease-in-out hover:scale-105" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 153,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 152,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", { className: "font-bold text-green-700 text-2xl mb-3 text-center", children: product.name }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 155,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-gray-700 text-base text-center mb-6", children: product.desc }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 156,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-auto w-full flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setSelectedProduct(product), className: "px-5 py-2.5 bg-[#057A31] text-white text-base rounded hover:bg-green-900 transition", children: "Learn More" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 158,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 157,
          columnNumber: 19
        }, this)
      ] }, product.name, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 151,
        columnNumber: 43
      }, this)) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 150,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, this),
    selectedProduct && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 backdrop-blur-sm bg-black/30 z-40" }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 171,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 z-50 flex items-start justify-center pt-24 md:pt-32 px-4 overflow-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-lg w-full max-w-6xl bg-cover bg-center flex flex-col md:flex-row overflow-hidden relative bg-white min-h-[400px] md:pr-12", style: {
        backgroundImage: "url('/bgmodal1.png')"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-center items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full mb-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "mb-2 text-white text-xl sm:text-2xl font-bold text-center", children: selectedProduct.name }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 183,
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
            }, className: "  w-full max-w-[360px]    sm:max-w-[350px]  md:max-w-[400px] lg:max-w-[450px] h-auto object-contain mx-auto rounded" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 186,
              columnNumber: 19
            }, this),
            selectedProduct.desc === "Hybrid Rice Seed" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: " text-white text-center text-sm sm:text-base", children: [
              "(",
              selectedProduct.code,
              ")"
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 199,
              columnNumber: 67
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 182,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden md:block text-center md:text-left text-black text-sm sm:text-base", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-semibold mb-1", children: "For sales inquiries," }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 206,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "leading-relaxed text-sm", children: [
              "Or call",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:(+63) 945 170 9401", className: "text-black text-sm underline hover:underline", children: "(+63) 945 170 9401" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 209,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 212,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.google.com/maps?q=14.330623,121.076050", target: "_blank", rel: "noopener noreferrer", className: "text-black text-sm underline hover:underline inline-flex items-center", children: "Unit A 201 and Alfresco Area 2nd Floor Coral Center Mall Barangay San Francisco, Bi\xF1an Laguna" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 213,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 207,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 205,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 181,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full md:w-1/2 p-4 sm:p-6 flex flex-col justify-center text-white text-sm sm:text-base", children: [
          selectedProduct.details ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-2 text-sm border border-white divide-x divide-white divide-y mb-4 items-stretch", children: selectedProduct.details.map(([label, value], idx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.default.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 font-bold whitespace-pre-line flex items-center", children: label }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 225,
              columnNumber: 25
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-3 whitespace-pre-line flex items-center", children: value }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 228,
              columnNumber: 25
            }, this)
          ] }, idx, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 224,
            columnNumber: 75
          }, this)) }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 223,
            columnNumber: 44
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-6 whitespace-pre-line", children: selectedProduct.desc1 || selectedProduct.desc }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 232,
            columnNumber: 28
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block md:hidden text-center text-black text-sm sm:text-base mb-6", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block font-semibold mb-1", children: "For sales inquiries," }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 237,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "leading-relaxed", children: [
              "Or call",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:(+63) 945 170 9401", className: "text-black underline hover:underline", children: "(+63) 945 170 9401" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 240,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 243,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.google.com/maps?q=14.330623,121.076050", target: "_blank", rel: "noopener noreferrer", className: "text-black underline hover:underline inline-flex items-center", children: "Unit A 201 and Alfresco Area 2nd Floor Coral Center Mall Barangay San Francisco, Bi\xF1an Laguna" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 244,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 238,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 236,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col sm:flex-row justify-center items-center gap-3 mt-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/get-involved", className: "w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded hover:bg-green-900 text-center", children: "Contact Us" }, void 0, false, {
              fileName: "app/routes/products.tsx",
              lineNumber: 251,
              columnNumber: 19
            }, this),
            selectedProduct.pdf && selectedProduct.name !== "Jose Maria Milled Rice" && selectedProduct.name !== "Jackpot ready" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => handleDownload(selectedProduct.pdf), className: "w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 text-center flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M1.4 12.4444H12.6V7H14V13.2222C14 13.6518 13.6866 14 13.3 14H0.7C0.313404 14 0 13.6518 0 13.2222V7H1.4V12.4444ZM8.4 4.66667H11.9L7 10.1111L2.1 4.66667H5.6V0H8.4V4.66667Z", fill: "white" }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 256,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/products.tsx",
                lineNumber: 255,
                columnNumber: 23
              }, this),
              "Download PDF"
            ] }, void 0, true, {
              fileName: "app/routes/products.tsx",
              lineNumber: 254,
              columnNumber: 140
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/products.tsx",
            lineNumber: 250,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 222,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: closeModal, className: "absolute top-2 right-6 text-white hover:text-gray-300 text-2xl font-bold", children: "\xD7" }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 266,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 176,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 174,
        columnNumber: 11
      }, this),
      showError && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]", onClick: () => setShowError(false) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 273,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fixed inset-0 flex items-center justify-center z-[70]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowError(false), className: "absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-2xl font-bold", "aria-label": "Close error modal", children: "\xD7" }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 277,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-lg font-semibold mb-4 text-red-600", children: "Sorry, this product does not have a PDF available for download." }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 281,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { onClick: () => setShowError(false), className: "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-800", children: "OK" }, void 0, false, {
            fileName: "app/routes/products.tsx",
            lineNumber: 284,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/products.tsx",
          lineNumber: 275,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/products.tsx",
          lineNumber: 274,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/products.tsx",
        lineNumber: 272,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 169,
      columnNumber: 27
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 120,
    columnNumber: 10
  }, this);
}
_s(Products, "kvL2Rk5sOSoTD6sthhezz1T1RXs=");
_c = Products;
var _c;
$RefreshReg$(_c, "Products");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Products as default,
  meta
};
//# sourceMappingURL=/build/routes/products-SCBILUK2.js.map
