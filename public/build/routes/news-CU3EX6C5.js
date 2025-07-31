import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-65CJFPR6.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/news.tsx
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
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\news.tsx"
  );
  import.meta.hot.lastModified = "1753215288307.7078";
}
function News() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "p-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold mb-4", children: "News" }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "This is the News page. Add your content here." }, void 0, false, {
      fileName: "app/routes/news.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/news.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = News;
var _c;
$RefreshReg$(_c, "News");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  News as default
};
//# sourceMappingURL=/build/routes/news-CU3EX6C5.js.map
