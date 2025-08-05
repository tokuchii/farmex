import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-FEEY3YGC.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/knowledge-transfer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\knowledge-transfer.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\knowledge-transfer.tsx"
  );
  import.meta.hot.lastModified = "1754362438672.2764";
}
function KnowledgeTransfer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full h-[300px] mb-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/welcome.png", alt: "About Us", className: "w-full h-full object-cover rounded-lg shadow" }, void 0, false, {
      fileName: "app/routes/knowledge-transfer.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/knowledge-transfer.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-4", children: "About Us" }, void 0, false, {
      fileName: "app/routes/knowledge-transfer.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This is the About Us page. Add your content here." }, void 0, false, {
      fileName: "app/routes/knowledge-transfer.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/knowledge-transfer.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = KnowledgeTransfer;
var _c;
$RefreshReg$(_c, "KnowledgeTransfer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  KnowledgeTransfer as default
};
//# sourceMappingURL=/build/routes/knowledge-transfer-ZK72LOOM.js.map
