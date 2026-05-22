import {
  AdminModal_default
} from "/build/_shared/chunk-UROH7QGW.js";
import "/build/_shared/chunk-6WY4TBFB.js";
import "/build/_shared/chunk-LP67RGKB.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  Plus
} from "/build/_shared/chunk-QYKKIRSI.js";
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

// app/routes/admin.testimonial.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.testimonial.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.testimonial.tsx"
  );
  import.meta.hot.lastModified = "1779410954312.5115";
}
var adminInputClass = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20";
var AdminTraining = () => {
  _s();
  const [modalOpen, setModalOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "Testimonial" }, void 0, false, {
          fileName: "app/routes/admin.testimonial.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Manage testimonials" }, void 0, false, {
          fileName: "app/routes/admin.testimonial.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Add and manage customer testimonials for your website." }, void 0, false, {
          fileName: "app/routes/admin.testimonial.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.testimonial.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(true), className: "flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/routes/admin.testimonial.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        "Add testimonial"
      ] }, void 0, true, {
        fileName: "app/routes/admin.testimonial.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.testimonial.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-center text-slate-500", children: "No testimonials yet. Use \u201CAdd testimonial\u201D to create one in the modal." }, void 0, false, {
      fileName: "app/routes/admin.testimonial.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminModal_default, { open: modalOpen, onOpenChange: setModalOpen, title: "Add testimonial", description: "Share your customers' experiences and feedback.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(false), className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50", children: "Cancel" }, void 0, false, {
        fileName: "app/routes/admin.testimonial.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(false), className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400", children: "Save testimonial" }, void 0, false, {
        fileName: "app/routes/admin.testimonial.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.testimonial.tsx",
      lineNumber: 49,
      columnNumber: 168
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "space-y-4", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Customer name",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "name", placeholder: "Full name", className: adminInputClass }, void 0, false, {
          fileName: "app/routes/admin.testimonial.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.testimonial.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Testimonial content",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "content", placeholder: "Share your experience...", className: `${adminInputClass} admin-scrollbar resize-none`, rows: 4 }, void 0, false, {
          fileName: "app/routes/admin.testimonial.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.testimonial.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Date",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "date", className: adminInputClass }, void 0, false, {
          fileName: "app/routes/admin.testimonial.tsx",
          lineNumber: 68,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.testimonial.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Location",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "location", placeholder: "Venue or online link", className: adminInputClass }, void 0, false, {
          fileName: "app/routes/admin.testimonial.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.testimonial.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Position",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "position", placeholder: "Job title or role", className: adminInputClass }, void 0, false, {
          fileName: "app/routes/admin.testimonial.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.testimonial.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Variety",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "variety", placeholder: "Product or service variety", className: adminInputClass }, void 0, false, {
          fileName: "app/routes/admin.testimonial.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.testimonial.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.testimonial.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.testimonial.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.testimonial.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_s(AdminTraining, "CMfkJY0oHKX43wkRh7WkxSiVV1E=");
_c = AdminTraining;
var admin_testimonial_default = AdminTraining;
var _c;
$RefreshReg$(_c, "AdminTraining");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  admin_testimonial_default as default
};
//# sourceMappingURL=/build/routes/admin.testimonial-ULR2C3FM.js.map
