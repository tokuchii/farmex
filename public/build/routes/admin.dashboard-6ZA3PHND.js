import {
  Link
} from "/build/_shared/chunk-JUOVFKAS.js";
import {
  ArrowRight,
  Calendar,
  Newspaper
} from "/build/_shared/chunk-2ELZTNL5.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  createHotContext
} from "/build/_shared/chunk-JQ452JWN.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/admin.dashboard.tsx
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
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.dashboard.tsx"
  );
  import.meta.hot.lastModified = "1779346506735.7942";
}
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
  title: "Manage training",
  description: "Schedule workshops and calendar events.",
  to: "/admin/training",
  icon: Calendar
}];
var AdminDashboard = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "Dashboard" }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Welcome back, Admin" }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 max-w-2xl text-slate-500", children: "Overview of your Farmex admin panel. Use the cards below to jump to news or training, or open the sidebar anytime." }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4", children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "rounded-3xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-slate-500", children: item.label }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-3xl font-semibold text-slate-900", children: item.value }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 67,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-sm text-slate-500", children: item.description }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 68,
        columnNumber: 13
      }, this)
    ] }, item.label, true, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 63,
      columnNumber: 28
    }, this)) }, void 0, false, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-lg font-semibold text-slate-900", children: "Quick actions" }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-4 grid gap-4 lg:grid-cols-2", children: quickLinks.map((item) => {
        const Icon = item.icon;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: item.to, className: "group flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-2xl bg-emerald-500/10 p-3 text-emerald-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "h-5 w-5" }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 79,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 78,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "flex items-center gap-2 font-semibold text-slate-900", children: [
              item.title,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-emerald-600" }, void 0, false, {
                fileName: "app/routes/admin.dashboard.tsx",
                lineNumber: 84,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 82,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mt-1 block text-sm text-slate-500", children: item.description }, void 0, false, {
              fileName: "app/routes/admin.dashboard.tsx",
              lineNumber: 86,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/admin.dashboard.tsx",
            lineNumber: 81,
            columnNumber: 17
          }, this)
        ] }, item.to, true, {
          fileName: "app/routes/admin.dashboard.tsx",
          lineNumber: 77,
          columnNumber: 18
        }, this);
      }) }, void 0, false, {
        fileName: "app/routes/admin.dashboard.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.dashboard.tsx",
      lineNumber: 72,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.dashboard.tsx",
    lineNumber: 52,
    columnNumber: 10
  }, this);
};
_c = AdminDashboard;
var admin_dashboard_default = AdminDashboard;
var _c;
$RefreshReg$(_c, "AdminDashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  admin_dashboard_default as default
};
//# sourceMappingURL=/build/routes/admin.dashboard-6ZA3PHND.js.map
