import {
  CircleAlert,
  CircleCheckBig,
  X
} from "/build/_shared/chunk-HHCPKSUZ.js";
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

// app/components/admin/AdminToast.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\AdminToast.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\AdminToast.tsx"
  );
  import.meta.hot.lastModified = "1782446340378.33";
}
var AdminToastContext = (0, import_react.createContext)(null);
var TOAST_DURATION_MS = 5e3;
function AdminToastProvider({
  children
}) {
  _s();
  const [toasts, setToasts] = (0, import_react.useState)([]);
  const [now, setNow] = (0, import_react.useState)(() => Date.now());
  const dismiss = (0, import_react.useCallback)((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);
  const showToast = (0, import_react.useCallback)((type, message) => {
    const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
    setToasts((current) => [...current, {
      id,
      type,
      message,
      expiresAt: Date.now() + TOAST_DURATION_MS
    }]);
  }, []);
  (0, import_react.useEffect)(() => {
    if (toasts.length === 0)
      return;
    const interval = window.setInterval(() => setNow(Date.now()), 50);
    return () => window.clearInterval(interval);
  }, [toasts.length]);
  (0, import_react.useEffect)(() => {
    if (toasts.length === 0)
      return;
    const timers = toasts.map((toast) => window.setTimeout(() => dismiss(toast.id), TOAST_DURATION_MS));
    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [toasts, dismiss]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminToastContext.Provider, { value: {
    showToast
  }, children: [
    children,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { "aria-live": "polite", className: "pointer-events-none fixed right-4 top-4 z-[200] flex w-full max-w-sm flex-col gap-2", children: toasts.map((toast) => {
      const remainingMs = toast.expiresAt - now;
      const progress = Math.max(0, Math.min(100, remainingMs / TOAST_DURATION_MS * 100));
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { role: "status", className: `pointer-events-auto flex flex-col gap-3 rounded-2xl border px-4 py-3 text-sm shadow-lg shadow-slate-900/10 ${toast.type === "success" ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-rose-200 bg-rose-50 text-rose-900"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-3", children: [
          toast.type === "success" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheckBig, { className: "mt-0.5 h-5 w-5 shrink-0 text-emerald-600" }, void 0, false, {
            fileName: "app/components/admin/AdminToast.tsx",
            lineNumber: 65,
            columnNumber: 45
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleAlert, { className: "mt-0.5 h-5 w-5 shrink-0 text-rose-600" }, void 0, false, {
            fileName: "app/components/admin/AdminToast.tsx",
            lineNumber: 65,
            columnNumber: 116
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "min-w-0 flex-1 font-medium", children: toast.message }, void 0, false, {
            fileName: "app/components/admin/AdminToast.tsx",
            lineNumber: 66,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => dismiss(toast.id), className: "shrink-0 rounded-lg p-1 text-slate-500 transition hover:bg-white/60 hover:text-slate-700", "aria-label": "Dismiss notification", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/admin/AdminToast.tsx",
            lineNumber: 68,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/components/admin/AdminToast.tsx",
            lineNumber: 67,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/AdminToast.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 overflow-hidden rounded-full bg-slate-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: `h-full rounded-full transition-all duration-50 ${toast.type === "success" ? "bg-emerald-600" : "bg-rose-600"}`, style: {
          width: `${progress}%`
        } }, void 0, false, {
          fileName: "app/components/admin/AdminToast.tsx",
          lineNumber: 72,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/components/admin/AdminToast.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this)
      ] }, toast.id, true, {
        fileName: "app/components/admin/AdminToast.tsx",
        lineNumber: 63,
        columnNumber: 16
      }, this);
    }) }, void 0, false, {
      fileName: "app/components/admin/AdminToast.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminToast.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
}
_s(AdminToastProvider, "iPzv0XvlHcbYWWWiPQ++zXLf+64=");
_c = AdminToastProvider;
function useAdminToast() {
  _s2();
  const context = (0, import_react.useContext)(AdminToastContext);
  if (!context) {
    throw new Error("useAdminToast must be used within AdminToastProvider");
  }
  return (0, import_react.useMemo)(() => ({
    success: (message) => context.showToast("success", message),
    error: (message) => context.showToast("error", message)
  }), [context.showToast]);
}
_s2(useAdminToast, "vUyu++KvuV2Hvfe1mlJUr7vo954=");
var _c;
$RefreshReg$(_c, "AdminToastProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  AdminToastProvider,
  useAdminToast
};
//# sourceMappingURL=/build/_shared/chunk-NYPZHE2B.js.map
