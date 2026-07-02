import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-3BOG53TH.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/admin/AdminAuthShell.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\AdminAuthShell.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\AdminAuthShell.tsx"
  );
  import.meta.hot.lastModified = "1779697845273.3083";
}
var adminInputClass = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20";
var adminLabelClass = "text-sm font-medium text-slate-700";
var AdminAuthField = ({
  label,
  htmlFor,
  error,
  children
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block", htmlFor, children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: adminLabelClass, children: label }, void 0, false, {
    fileName: "app/components/admin/AdminAuthShell.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this),
  children,
  error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-rose-600", children: error }, void 0, false, {
    fileName: "app/components/admin/AdminAuthShell.tsx",
    lineNumber: 31,
    columnNumber: 14
  }, this) : null
] }, void 0, true, {
  fileName: "app/components/admin/AdminAuthShell.tsx",
  lineNumber: 28,
  columnNumber: 7
}, this);
_c = AdminAuthField;
var AdminBrand = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-center gap-3", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-lg font-bold text-white shadow-sm shadow-emerald-500/25", children: "F" }, void 0, false, {
    fileName: "app/components/admin/AdminAuthShell.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-left", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-bold uppercase tracking-[0.18em] text-emerald-600", children: "Farmex" }, void 0, false, {
      fileName: "app/components/admin/AdminAuthShell.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-slate-900", children: "Admin panel" }, void 0, false, {
      fileName: "app/components/admin/AdminAuthShell.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminAuthShell.tsx",
    lineNumber: 39,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/admin/AdminAuthShell.tsx",
  lineNumber: 35,
  columnNumber: 26
}, this);
_c2 = AdminBrand;
var AdminAuthShell = ({
  eyebrow,
  title,
  description,
  children,
  footer
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 sm:py-14", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-md space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminBrand, {}, void 0, false, {
      fileName: "app/components/admin/AdminAuthShell.tsx",
      lineNumber: 54,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "border-b border-slate-100 pb-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: eyebrow }, void 0, false, {
          fileName: "app/components/admin/AdminAuthShell.tsx",
          lineNumber: 58,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl", children: title }, void 0, false, {
          fileName: "app/components/admin/AdminAuthShell.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-sm text-slate-500", children: description }, void 0, false, {
          fileName: "app/components/admin/AdminAuthShell.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminAuthShell.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pt-6", children }, void 0, false, {
        fileName: "app/components/admin/AdminAuthShell.tsx",
        lineNumber: 67,
        columnNumber: 11
      }, this),
      footer ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-8 border-t border-slate-100 pt-6 text-center text-sm text-slate-500", children: footer }, void 0, false, {
        fileName: "app/components/admin/AdminAuthShell.tsx",
        lineNumber: 69,
        columnNumber: 21
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminAuthShell.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminAuthShell.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/admin/AdminAuthShell.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
};
_c3 = AdminAuthShell;
var AdminAuthShell_default = AdminAuthShell;
var _c;
var _c2;
var _c3;
$RefreshReg$(_c, "AdminAuthField");
$RefreshReg$(_c2, "AdminBrand");
$RefreshReg$(_c3, "AdminAuthShell");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  adminInputClass,
  AdminAuthField,
  AdminAuthShell_default
};
//# sourceMappingURL=/build/_shared/chunk-LOQCLT7D.js.map
