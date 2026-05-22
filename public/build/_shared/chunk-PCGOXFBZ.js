import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "/build/_shared/chunk-GGM4ORHQ.js";
import {
  cn
} from "/build/_shared/chunk-QHNS7JQF.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-3BOG53TH.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/components/admin/AdminModal.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\AdminModal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\AdminModal.tsx"
  );
  import.meta.hot.lastModified = "1779329687360.3716";
}
var sizeClasses = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl"
};
var AdminModal = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  size = "md",
  className,
  contentClassName
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { open, onOpenChange, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { className: cn("gap-0 overflow-hidden rounded-3xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl shadow-slate-900/10", sizeClasses[size], className, contentClassName), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { className: "space-y-1 border-b border-slate-100 px-6 py-5 text-left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { className: "text-xl font-semibold tracking-tight text-slate-900", children: title }, void 0, false, {
        fileName: "app/components/admin/AdminModal.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this),
      description ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { className: "text-sm text-slate-500", children: description }, void 0, false, {
        fileName: "app/components/admin/AdminModal.tsx",
        lineNumber: 46,
        columnNumber: 26
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminModal.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    children ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "admin-scrollbar max-h-[calc(100vh-280px)] overflow-y-auto px-6 py-5", children }, void 0, false, {
      fileName: "app/components/admin/AdminModal.tsx",
      lineNumber: 51,
      columnNumber: 21
    }, this) : null,
    footer ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { className: "gap-3 border-t border-slate-100 bg-slate-50/80 px-6 py-4 sm:flex-row sm:justify-end", children: footer }, void 0, false, {
      fileName: "app/components/admin/AdminModal.tsx",
      lineNumber: 53,
      columnNumber: 19
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminModal.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/admin/AdminModal.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_c = AdminModal;
var AdminModal_default = AdminModal;
var _c;
$RefreshReg$(_c, "AdminModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  AdminModal_default
};
//# sourceMappingURL=/build/_shared/chunk-PCGOXFBZ.js.map
