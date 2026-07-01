import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-3BOG53TH.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/admin.training.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.training.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.training.tsx"
  );
  import.meta.hot.lastModified = "1779334299621.7769";
}
var AdminServices = () => {
  _s();
  const [activeSection, setActiveSection] = (0, import_react.useState)("rentals");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3 sm:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setActiveSection("rentals"), className: `flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${activeSection === "rentals" ? "bg-emerald-500 text-white hover:bg-emerald-400" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`, children: "Machine Rentals" }, void 0, false, {
        fileName: "app/routes/admin.training.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setActiveSection("consultation"), className: `flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${activeSection === "consultation" ? "bg-emerald-500 text-white hover:bg-emerald-400" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`, children: "Technical Consultant" }, void 0, false, {
        fileName: "app/routes/admin.training.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setActiveSection("training"), className: `flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${activeSection === "training" ? "bg-emerald-500 text-white hover:bg-emerald-400" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`, children: "Training" }, void 0, false, {
        fileName: "app/routes/admin.training.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.training.tsx",
      lineNumber: 27,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-slate-700", children: activeSection === "rentals" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-slate-900", children: "Machine rentals" }, void 0, false, {
        fileName: "app/routes/admin.training.tsx",
        lineNumber: 41,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Manage equipment inventory, rental rates, and machine availability for tractors, harvesters, and other agricultural tools." }, void 0, false, {
        fileName: "app/routes/admin.training.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.training.tsx",
      lineNumber: 40,
      columnNumber: 40
    }, this) : activeSection === "consultation" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-slate-900", children: "Technical consultant" }, void 0, false, {
        fileName: "app/routes/admin.training.tsx",
        lineNumber: 46,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Coordinate consultant assignments, advisory sessions, and field support for farmer clients and extension programs." }, void 0, false, {
        fileName: "app/routes/admin.training.tsx",
        lineNumber: 47,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.training.tsx",
      lineNumber: 45,
      columnNumber: 52
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-slate-900", children: "Training" }, void 0, false, {
        fileName: "app/routes/admin.training.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Organize training schedules, workshop topics, and venue details for production training and knowledge-transfer events." }, void 0, false, {
        fileName: "app/routes/admin.training.tsx",
        lineNumber: 52,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.training.tsx",
      lineNumber: 50,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.training.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.training.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
};
_s(AdminServices, "1/WEDCxd4B1w0pDs5jQLEzNybgw=");
_c = AdminServices;
var admin_training_default = AdminServices;
var _c;
$RefreshReg$(_c, "AdminServices");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  admin_training_default as default
};
//# sourceMappingURL=/build/routes/admin.training-6MUYJEV5.js.map
