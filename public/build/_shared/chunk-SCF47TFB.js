import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "/build/_shared/chunk-NPIM253G.js";
import {
  cn
} from "/build/_shared/chunk-UF6K54N4.js";
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

// app/components/admin/AdminModal.tsx
var import_react = __toESM(require_react(), 1);
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
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\AdminModal.tsx"
  );
  import.meta.hot.lastModified = "1781440720578.1184";
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
  _s();
  (0, import_react.useEffect)(() => {
    if (!open) {
      document.body.style.pointerEvents = "";
      document.body.style.overflow = "";
      return;
    }
    return () => {
      document.body.style.pointerEvents = "";
      document.body.style.overflow = "";
    };
  }, [open]);
  if (!open)
    return null;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Dialog, { open: true, onOpenChange: (nextOpen) => {
    if (!nextOpen)
      onOpenChange(false);
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogContent, { className: cn("gap-0 overflow-hidden rounded-3xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl shadow-slate-900/10", sizeClasses[size], className, contentClassName), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogHeader, { className: "space-y-1 border-b border-slate-100 px-6 py-5 text-left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogTitle, { className: "text-xl font-semibold tracking-tight text-slate-900", children: title }, void 0, false, {
        fileName: "app/components/admin/AdminModal.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      description ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogDescription, { className: "text-sm text-slate-500", children: description }, void 0, false, {
        fileName: "app/components/admin/AdminModal.tsx",
        lineNumber: 63,
        columnNumber: 26
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminModal.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    children ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "admin-scrollbar max-h-[calc(100vh-280px)] overflow-y-auto px-6 py-5", children }, void 0, false, {
      fileName: "app/components/admin/AdminModal.tsx",
      lineNumber: 68,
      columnNumber: 21
    }, this) : null,
    footer ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DialogFooter, { className: "gap-3 border-t border-slate-100 bg-slate-50/80 px-6 py-4 sm:flex-row sm:justify-end", children: footer }, void 0, false, {
      fileName: "app/components/admin/AdminModal.tsx",
      lineNumber: 70,
      columnNumber: 19
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminModal.tsx",
    lineNumber: 58,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/admin/AdminModal.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
};
_s(AdminModal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AdminModal;
var AdminModal_default = AdminModal;
var _c;
$RefreshReg$(_c, "AdminModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/DeleteConfirmationModal.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\DeleteConfirmationModal.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\DeleteConfirmationModal.tsx"
  );
  import.meta.hot.lastModified = "1780875257013.0393";
}
var DeleteConfirmationModal = ({
  open,
  onOpenChange,
  title = "Confirm delete",
  description,
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  onConfirm,
  isBusy = false
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminModal_default, { open, onOpenChange, title, size: "sm", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => onOpenChange(false), disabled: isBusy, className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: cancelLabel }, void 0, false, {
      fileName: "app/components/admin/DeleteConfirmationModal.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: onConfirm, disabled: isBusy, className: "rounded-2xl bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-400 disabled:opacity-60", children: confirmLabel }, void 0, false, {
      fileName: "app/components/admin/DeleteConfirmationModal.tsx",
      lineNumber: 36,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/DeleteConfirmationModal.tsx",
    lineNumber: 32,
    columnNumber: 94
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-4 text-sm text-slate-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: description }, void 0, false, {
    fileName: "app/components/admin/DeleteConfirmationModal.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/admin/DeleteConfirmationModal.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/admin/DeleteConfirmationModal.tsx",
    lineNumber: 32,
    columnNumber: 10
  }, this);
};
_c2 = DeleteConfirmationModal;
var DeleteConfirmationModal_default = DeleteConfirmationModal;
var _c2;
$RefreshReg$(_c2, "DeleteConfirmationModal");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  AdminModal_default,
  DeleteConfirmationModal_default
};
//# sourceMappingURL=/build/_shared/chunk-SCF47TFB.js.map
