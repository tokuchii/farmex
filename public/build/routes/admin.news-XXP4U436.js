import {
  AdminModal_default
} from "/build/_shared/chunk-Z4HNAHXO.js";
import "/build/_shared/chunk-SWGZB5DL.js";
import "/build/_shared/chunk-LP67RGKB.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  Plus
} from "/build/_shared/chunk-7C2OVJSI.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-JQ452JWN.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/admin.news.tsx
var import_react = __toESM(require_react(), 1);
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
  import.meta.hot.lastModified = "1779410954312.5115";
}
var adminInputClass = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20";
var AdminNews = () => {
  _s();
  const [modalOpen, setModalOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "News" }, void 0, false, {
          fileName: "app/routes/admin.news.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Manage news" }, void 0, false, {
          fileName: "app/routes/admin.news.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Create and update news articles shown on the public site." }, void 0, false, {
          fileName: "app/routes/admin.news.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.news.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(true), className: "flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/routes/admin.news.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        "Add article"
      ] }, void 0, true, {
        fileName: "app/routes/admin.news.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.news.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-center text-slate-500", children: "No articles yet. Use \u201CAdd article\u201D to open the modal and add your first entry." }, void 0, false, {
      fileName: "app/routes/admin.news.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminModal_default, { open: modalOpen, onOpenChange: setModalOpen, title: "Add news article", description: "Fill in the details below. You can connect this form to your API later.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(false), className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50", children: "Cancel" }, void 0, false, {
        fileName: "app/routes/admin.news.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(false), className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400", children: "Save article" }, void 0, false, {
        fileName: "app/routes/admin.news.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.news.tsx",
      lineNumber: 49,
      columnNumber: 193
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "space-y-4", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Title",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", placeholder: "Article title", className: adminInputClass }, void 0, false, {
          fileName: "app/routes/admin.news.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.news.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Name of Supervice Technical Consultant",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1 text-slate-400 text-xs", children: "(Optional)" }, void 0, false, {
          fileName: "app/routes/admin.news.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "supervisor", placeholder: "Full name", className: adminInputClass }, void 0, false, {
          fileName: "app/routes/admin.news.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.news.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Position",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1 text-slate-400 text-xs", children: "(Optional)" }, void 0, false, {
          fileName: "app/routes/admin.news.tsx",
          lineNumber: 71,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "position", placeholder: "Job title or role", className: adminInputClass }, void 0, false, {
          fileName: "app/routes/admin.news.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.news.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Notes",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1 text-slate-400 text-xs", children: "(Optional)" }, void 0, false, {
          fileName: "app/routes/admin.news.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "notes", placeholder: "Additional details or context", className: `${adminInputClass} resize-none`, rows: 3 }, void 0, false, {
          fileName: "app/routes/admin.news.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.news.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Publish date",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "publishedAt", className: adminInputClass }, void 0, false, {
          fileName: "app/routes/admin.news.tsx",
          lineNumber: 82,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.news.tsx",
        lineNumber: 80,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Summary",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "summary", rows: 3, placeholder: "Short description for listings", className: `${adminInputClass} resize-none` }, void 0, false, {
          fileName: "app/routes/admin.news.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.news.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.news.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.news.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.news.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_s(AdminNews, "CMfkJY0oHKX43wkRh7WkxSiVV1E=");
_c = AdminNews;
var admin_news_default = AdminNews;
var _c;
$RefreshReg$(_c, "AdminNews");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  admin_news_default as default
};
//# sourceMappingURL=/build/routes/admin.news-XXP4U436.js.map
