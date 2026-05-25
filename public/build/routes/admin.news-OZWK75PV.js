import {
  NewsModule
} from "/build/_shared/chunk-D66B3R7C.js";
import "/build/_shared/chunk-CI3KMCPB.js";
import "/build/_shared/chunk-BSKAJOYM.js";
import "/build/_shared/chunk-6UOKIDRU.js";
import "/build/_shared/chunk-QHNS7JQF.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-RVEYE3WS.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-3BOG53TH.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/admin.news.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.news.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.news.tsx"
  );
  import.meta.hot.lastModified = "1779681820510.479";
}
var AdminNews = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NewsModule, { news: [], fetcher: null, cloudinaryConfig: null }, void 0, false, {
    fileName: "app/routes/admin.news.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.news.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
};
_c = AdminNews;
var admin_news_default = AdminNews;
var _c;
$RefreshReg$(_c, "AdminNews");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  admin_news_default as default
};
//# sourceMappingURL=/build/routes/admin.news-OZWK75PV.js.map
