import {
  require_news
} from "/build/_shared/chunk-AG2JF7JH.js";
import {
  NewsModule
} from "/build/_shared/chunk-H7ULNRH6.js";
import {
  require_cloudinary
} from "/build/_shared/chunk-2T37EEZG.js";
import "/build/_shared/chunk-SCF47TFB.js";
import "/build/_shared/chunk-NPIM253G.js";
import "/build/_shared/chunk-UF6K54N4.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_session
} from "/build/_shared/chunk-WDL7VJWI.js";
import "/build/_shared/chunk-VYS3PCQI.js";
import "/build/_shared/chunk-HHCPKSUZ.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-ZCW6PNXX.js";
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
var import_node = __toESM(require_node(), 1);
var import_session = __toESM(require_session(), 1);
var import_cloudinary = __toESM(require_cloudinary(), 1);
var import_news = __toESM(require_news(), 1);
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
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.news.tsx"
  );
  import.meta.hot.lastModified = "1779971199288.9363";
}
var AdminNews = () => {
  _s();
  const {
    news,
    cloudinaryConfig
  } = useLoaderData();
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NewsModule, { news, fetcher, cloudinaryConfig }, void 0, false, {
    fileName: "app/routes/admin.news.tsx",
    lineNumber: 190,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.news.tsx",
    lineNumber: 189,
    columnNumber: 10
  }, this);
};
_s(AdminNews, "5cIXA7s98IkiMX8uIsbZzQ233OA=", false, function() {
  return [useLoaderData, useFetcher];
});
_c = AdminNews;
var admin_news_default = AdminNews;
var _c;
$RefreshReg$(_c, "AdminNews");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  admin_news_default as default
};
//# sourceMappingURL=/build/routes/admin.news-O2VUYOSW.js.map
