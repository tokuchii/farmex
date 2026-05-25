import {
  require_session
} from "/build/_shared/chunk-WDL7VJWI.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  useAdminUrlToast
} from "/build/_shared/chunk-RAO5S252.js";
import "/build/_shared/chunk-KOO4XNJ3.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-ZCW6PNXX.js";
import {
  ArrowRight,
  Calendar,
  Newspaper
} from "/build/_shared/chunk-RVEYE3WS.js";
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
var import_session = __toESM(require_session(), 1);
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
  import.meta.hot.lastModified = "1779370770143.16";
}
var DASHBOARD_URL_TOASTS = [{
  param: "login",
  value: "success",
  type: "success",
  message: "Login successful! Welcome back."
}];
var stats = [{
  label: "News articles",
  value: "0",
  description: "Published on the site"
}, {
  label: "Training events",
  value: "0",
  description: "Scheduled sessions"
}, {
  label: "Draft items",
  value: "0",
  description: "Waiting to publish"
}, {
  label: "Status",
  value: "Live",
  description: "Admin panel ready"
}];
var quickLinks = [{
  title: "Manage news",
  description: "Add or edit articles for the public news page.",
  to: "/admin/news",
  icon: Newspaper
}, {
  title: "Manage services",
  description: "Manage machine rentals, technical consultants, and training.",
  to: "/admin/services",
  icon: Calendar
}];
var AdminDashboard = () => {
  _s();
  const {
    user
  } = useLoaderData();
  useAdminUrlToast(DASHBOARD_URL_TOASTS);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "Dashboard" }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: [
        "Welcome back, ",
        user.username
      ] }, void 0, true, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 max-w-2xl text-slate-500", children: "Overview of your Farmex admin panel. Use the cards below to jump to news or training, or open the sidebar anytime." }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4", children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "rounded-3xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: item.label }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-3xl font-semibold text-slate-900", children: item.value }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-slate-500", children: item.description }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 93,
        columnNumber: 13
      }, this)
    ] }, item.label, true, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 88,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold text-slate-900", children: "Quick actions" }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 grid gap-4 lg:grid-cols-2", children: quickLinks.map((item) => {
        const Icon = item.icon;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.to, className: "group flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-2xl bg-emerald-500/10 p-3 text-emerald-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-5 w-5" }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 104,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center gap-2 font-semibold text-slate-900", children: [
              item.title,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-emerald-600" }, void 0, false, {
                fileName: "app/routes/admin.dashboard.tsx",
                lineNumber: 109,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 107,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mt-1 block text-sm text-slate-500", children: item.description }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 111,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 106,
            columnNumber: 17
          }, this)
        ] }, item.to, true, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 102,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.dashboard.tsx",
    lineNumber: 75,
    columnNumber: 10
  }, this);
};
_s(AdminDashboard, "jl5+DK767WP1TRHlHmfcd8ZQONA=", false, function() {
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
//# sourceMappingURL=/build/routes/admin.dashboard-NGKFAKJZ.js.map
