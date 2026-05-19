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

// app/routes/admin/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin\\\\index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin\\index.tsx"
  );
  import.meta.hot.lastModified = "1779106492173.7168";
}
var stats = [{
  label: "Total Users",
  value: "1,284",
  change: "+12%",
  up: true
}, {
  label: "Products",
  value: "348",
  change: "+3%",
  up: true
}, {
  label: "Orders Today",
  value: "57",
  change: "-4%",
  up: false
}, {
  label: "Revenue",
  value: "\u20B184,200",
  change: "+21%",
  up: true
}];
var recentOrders = [{
  id: "#ORD-001",
  customer: "Juan dela Cruz",
  status: "Completed",
  amount: "\u20B11,200"
}, {
  id: "#ORD-002",
  customer: "Maria Santos",
  status: "Pending",
  amount: "\u20B1450"
}, {
  id: "#ORD-003",
  customer: "Pedro Reyes",
  status: "Cancelled",
  amount: "\u20B1780"
}, {
  id: "#ORD-004",
  customer: "Ana Lim",
  status: "Completed",
  amount: "\u20B12,100"
}];
var statusColor = {
  Completed: "text-[#a3e635] bg-[#a3e635]/10",
  Pending: "text-yellow-400 bg-yellow-400/10",
  Cancelled: "text-red-400 bg-red-400/10"
};
function AdminDashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "p-8 space-y-8 font-mono", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-2xl font-bold text-white tracking-tight", children: "Dashboard" }, void 0, false, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-white/40 text-sm mt-1", children: "Welcome back, Admin" }, void 0, false, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 75,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/index.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-white/40 text-xs uppercase tracking-widest", children: s.label }, void 0, false, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 81,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-2xl font-bold text-white", children: s.value }, void 0, false, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 82,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `text-xs font-medium ${s.up ? "text-[#a3e635]" : "text-red-400"}`, children: [
        s.up ? "\u25B2" : "\u25BC",
        " ",
        s.change,
        " this month"
      ] }, void 0, true, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 83,
        columnNumber: 13
      }, this)
    ] }, s.label, true, {
      fileName: "app/routes/admin/index.tsx",
      lineNumber: 80,
      columnNumber: 25
    }, this)) }, void 0, false, {
      fileName: "app/routes/admin/index.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "bg-white/5 border border-white/10 rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "px-6 py-4 border-b border-white/10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-sm font-semibold text-white tracking-wide", children: "Recent Orders" }, void 0, false, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 92,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "text-white/30 uppercase text-xs tracking-widest border-b border-white/5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left px-6 py-3", children: "Order" }, void 0, false, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left px-6 py-3", children: "Customer" }, void 0, false, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 98,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-left px-6 py-3", children: "Status" }, void 0, false, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { className: "text-right px-6 py-3", children: "Amount" }, void 0, false, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 100,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: recentOrders.map((order) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { className: "border-b border-white/5 hover:bg-white/[0.03] transition-colors", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-3 text-white/60", children: order.id }, void 0, false, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 105,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-3 text-white", children: order.customer }, void 0, false, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 106,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: `px-2 py-0.5 rounded-full text-xs font-medium ${statusColor[order.status]}`, children: order.status }, void 0, false, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 108,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 107,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { className: "px-6 py-3 text-right text-white", children: order.amount }, void 0, false, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 112,
            columnNumber: 17
          }, this)
        ] }, order.id, true, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 104,
          columnNumber: 40
        }, this)) }, void 0, false, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 103,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 94,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin/index.tsx",
      lineNumber: 90,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin/index.tsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
}
_c = AdminDashboard;
var _c;
$RefreshReg$(_c, "AdminDashboard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminDashboard as default
};
//# sourceMappingURL=/build/routes/admin-U2CUPT6U.js.map
