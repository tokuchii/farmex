import {
  AdminMultiImageUpload_default,
  AdminPaginatedTable_default
} from "/build/_shared/chunk-CI3KMCPB.js";
import {
  AdminModal_default,
  adminInputClass
} from "/build/_shared/chunk-BSKAJOYM.js";
import {
  Plus
} from "/build/_shared/chunk-RVEYE3WS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-3BOG53TH.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/admin/NewsModule.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\NewsModule.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\NewsModule.tsx"
  );
  import.meta.hot.lastModified = "1779687213150.297";
}
var NewsModule = ({
  news,
  fetcher,
  cloudinaryConfig
}) => {
  _s();
  const [modalOpen, setModalOpen] = (0, import_react.useState)(false);
  const columns = [{
    id: "title",
    header: "Title",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: row.title }, void 0, false, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 38,
      columnNumber: 18
    }, this)
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "News" }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 43,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Manage news" }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 44,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Create and update news articles shown on the public site." }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 45,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(true), className: "flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, this),
        "Add article"
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 41,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminPaginatedTable_default, { columns, data: news, getRowKey: (row) => row.id }, void 0, false, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 56,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminModal_default, { open: modalOpen, onOpenChange: setModalOpen, title: "Add news article", description: "Fill in the details below. You can connect this form to your API later.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(false), className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 59,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(false), className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400", children: "Save article" }, void 0, false, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 62,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 58,
      columnNumber: 199
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "space-y-4", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Title",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", placeholder: "Article title", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 69,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Author",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1 text-slate-400 text-xs", children: "(Optional)" }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 73,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "author", placeholder: "Full name", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 75,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 71,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Organization",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "organization", placeholder: "Name of the organization", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 80,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Position",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1 text-slate-400 text-xs", children: "(Optional)" }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 85,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "position", placeholder: "Job title or role", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 87,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 83,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Notes",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1 text-slate-400 text-xs", children: "(Optional)" }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 91,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "notes", placeholder: "Additional details or context", className: `${adminInputClass} resize-none`, rows: 3 }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 92,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 89,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Location",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "location", placeholder: "City, state, or region", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 96,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 94,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Publish date",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "publishedAt", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 100,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 98,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Summary",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "summary", rows: 3, placeholder: "Short description for listings", className: `${adminInputClass} resize-none` }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 104,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 102,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminMultiImageUpload_default, { files: [], onChange: () => {
      } }, void 0, false, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 107,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 66,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/NewsModule.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_s(NewsModule, "CMfkJY0oHKX43wkRh7WkxSiVV1E=");
_c = NewsModule;
var _c;
$RefreshReg$(_c, "NewsModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  NewsModule
};
//# sourceMappingURL=/build/_shared/chunk-D66B3R7C.js.map
