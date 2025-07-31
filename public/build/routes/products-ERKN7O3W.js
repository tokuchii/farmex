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
  import.meta.hot.lastModified = "1753224906393.1978";
}
function meta() {
  return [{
    title: "FarmEx - Revolutionary Agricultural Technology"
  }, {
    name: "description",
    content: "Transform your farming operations with FarmEx's cutting-edge agricultural technology solutions. Increase yields, reduce costs, and farm smarter."
  }];
}
function Products() {
  _s();
  const [isClient, setIsClient] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setIsClient(true);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen pt-14", children: [
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative w-full h-auto overflow-hidden", initial: {
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
    }, children: [
      isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/bgproducts.jpg", alt: "Farm Image", className: "w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover" }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 52,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest m-4", children: "Products" }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/products.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/products.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/products.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_s(Products, "k460N28PNzD7zo1YW47Q9UigQis=");
_c = Products;
var _c;
$RefreshReg$(_c, "Products");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Products as default,
  meta
};
//# sourceMappingURL=/build/routes/products-ERKN7O3W.js.map
