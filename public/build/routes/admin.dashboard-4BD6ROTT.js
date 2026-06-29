import {
  require_news
} from "/build/_shared/chunk-AG2JF7JH.js";
import {
  require_testimonials
} from "/build/_shared/chunk-SEQ7IFIP.js";
import {
  require_lav_stations,
  require_rice_derbies
} from "/build/_shared/chunk-CJNIYCAR.js";
import {
  require_trainings
} from "/build/_shared/chunk-KA2R6GWF.js";
import {
  require_session
} from "/build/_shared/chunk-WDL7VJWI.js";
import {
  useAdminUrlToast
} from "/build/_shared/chunk-O2OGYDR2.js";
import "/build/_shared/chunk-NYPZHE2B.js";
import "/build/_shared/chunk-HHCPKSUZ.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
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

// app/routes/admin.dashboard.tsx
var import_node = __toESM(require_node(), 1);
var import_lav_stations = __toESM(require_lav_stations(), 1);
var import_news = __toESM(require_news(), 1);
var import_rice_derbies = __toESM(require_rice_derbies(), 1);
var import_session = __toESM(require_session(), 1);
var import_testimonials = __toESM(require_testimonials(), 1);
var import_trainings = __toESM(require_trainings(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.dashboard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.dashboard.tsx"
  );
  import.meta.hot.lastModified = "1780898492822.8838";
}
var DASHBOARD_URL_TOASTS = [{
  param: "login",
  value: "success",
  type: "success",
  message: "Login successful! Welcome back."
}];
var AdminDashboard = () => {
  _s();
  const {
    user,
    totals
  } = useLoaderData();
  useAdminUrlToast(DASHBOARD_URL_TOASTS);
  const stats = [{
    label: "News articles",
    value: totals.news.toString(),
    description: "Items in News module"
  }, {
    label: "Service records",
    value: (totals.machineRentals + totals.machineRentalGalleries + totals.technicalConsultants + totals.trainingSessions + totals.trainingGalleries).toString(),
    description: "Machine rentals, consultants, training, and galleries"
  }, {
    label: "Knowledge transfer",
    value: (totals.lavStations + totals.riceDerbies).toString(),
    description: "Lav stations and rice derbies records"
  }, {
    label: "Testimonials",
    value: totals.testimonials.toString(),
    description: "Client testimonial entries"
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "Dashboard" }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: [
        "Welcome back, ",
        user.username
      ] }, void 0, true, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 max-w-2xl text-slate-500", children: "Overview of the current admin content. Use quick actions below to manage each section." }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 122,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 117,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4", children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "rounded-3xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: item.label }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 129,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-3xl font-semibold text-slate-900", children: item.value }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 132,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-slate-500", children: item.description }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 133,
        columnNumber: 13
      }, this)
    ] }, item.label, true, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 128,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {}, void 0, false, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 137,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.dashboard.tsx",
    lineNumber: 116,
    columnNumber: 10
  }, this);
};
_s(AdminDashboard, "I6sFyhulliNhJzUgpDmzKfL91Ss=", false, function() {
  return [useLoaderData, useAdminUrlToast];
});
_c = AdminDashboard;
var admin_dashboard_default = AdminDashboard;
var _c;
$RefreshReg$(_c, "AdminDashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  admin_dashboard_default as default
};
//# sourceMappingURL=/build/routes/admin.dashboard-4BD6ROTT.js.map
