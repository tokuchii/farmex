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

// app/routes/get-involved.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\get-involved.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\get-involved.tsx"
  );
  import.meta.hot.lastModified = "1753892195502.9875";
}
function meta() {
  return [{
    title: "FarmEx - Revolutionary Agricultural Technology"
  }, {
    name: "description",
    content: "Transform your farming operations with FarmEx's cutting-edge agricultural technology solutions. Increase yields, reduce costs, and farm smarter."
  }];
}
function GetInvolved() {
  _s();
  const [isClient, setIsClient] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setIsClient(true);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative w-full h-auto overflow-hidden", children: [
      isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { src: "/rice.mp4", autoPlay: true, loop: true, muted: true, playsInline: true, className: "w-full h-full object-cover" }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 39,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-black/30" }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex items-center justify-center z-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/welcome.png", alt: "Welcome", className: "max-w-4xl w-full h-auto" }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "p-8 relative z-20", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-4", children: "About Us" }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This is the About Us page. Add your content here." }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 48,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/get-involved.tsx",
    lineNumber: 37,
    columnNumber: 10
  }, this);
}
_s(GetInvolved, "k460N28PNzD7zo1YW47Q9UigQis=");
_c = GetInvolved;
var _c;
$RefreshReg$(_c, "GetInvolved");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  GetInvolved as default,
  meta
};
//# sourceMappingURL=/build/routes/get-involved-S5CUDYEM.js.map
