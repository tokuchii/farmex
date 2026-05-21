import {
  Form,
  Link,
  NavLink,
  Outlet,
  useActionData,
  useLocation
} from "/build/_shared/chunk-JUOVFKAS.js";
import {
  cn
} from "/build/_shared/chunk-LP67RGKB.js";
import {
  Calendar,
  ExternalLink,
  LayoutDashboard,
  LogOut,
  Menu,
  Newspaper,
  User,
  X
} from "/build/_shared/chunk-2ELZTNL5.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  createHotContext
} from "/build/_shared/chunk-JQ452JWN.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/routes/admin.tsx
var import_node = __toESM(require_node(), 1);
var import_react5 = __toESM(require_react(), 1);

// app/components/admin/adminNavLinks.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\adminNavLinks.ts"
  );
  import.meta.hot.lastModified = "1779346506733.2898";
}
var adminNavLinks = [
  { label: "Dashboard", to: "/admin/dashboard", icon: LayoutDashboard },
  { label: "News", to: "/admin/news", icon: Newspaper },
  { label: "Training", to: "/admin/training", icon: Calendar }
];

// app/components/admin/AdminNavbar.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\AdminNavbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\AdminNavbar.tsx"
  );
  import.meta.hot.lastModified = "1779346506732.3118";
}
var getPageTitle = (pathname) => {
  const match = adminNavLinks.find((link) => pathname === link.to || pathname.startsWith(`${link.to}/`));
  return match?.label ?? "Admin";
};
var AdminNavbar = ({
  onMenuClick
}) => {
  _s();
  const {
    pathname
  } = useLocation();
  const pageTitle = getPageTitle(pathname);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "sticky top-0 z-30 border-b border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: onMenuClick, className: "inline-flex shrink-0 items-center justify-center rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 lg:hidden", "aria-label": "Open menu", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "h-5 w-5" }, void 0, false, {
        fileName: "app/components/admin/AdminNavbar.tsx",
        lineNumber: 42,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/AdminNavbar.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 lg:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "truncate text-xs font-bold uppercase tracking-[0.16em] text-emerald-600", children: "Farmex Admin" }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "truncate text-base font-semibold text-slate-900", children: pageTitle }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminNavbar.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden min-w-0 lg:block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-slate-400", children: "Current page" }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "truncate text-lg font-semibold text-slate-900", children: pageTitle }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminNavbar.tsx",
        lineNumber: 52,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminNavbar.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex shrink-0 items-center gap-2 sm:gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "hidden items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 sm:inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "h-4 w-4", "aria-hidden": true }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        "Site"
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminNavbar.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 sm:flex", title: "admin@farmex.com", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-lg bg-white p-1.5 text-emerald-600 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "h-4 w-4", "aria-hidden": true }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 68,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "max-w-[8rem] truncate text-sm font-medium text-slate-700 md:max-w-[10rem]", children: "Admin" }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminNavbar.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin", className: cn("inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40"), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "h-4 w-4", "aria-hidden": true }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden sm:inline", children: "Logout" }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 77,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only sm:hidden", children: "Logout" }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminNavbar.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminNavbar.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminNavbar.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/admin/AdminNavbar.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
};
_s(AdminNavbar, "qVMqkCpYCjknUqSjfMln5RFSkbo=", false, function() {
  return [useLocation];
});
_c = AdminNavbar;
var AdminNavbar_default = AdminNavbar;
var _c;
$RefreshReg$(_c, "AdminNavbar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/AdminSidebar.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\AdminSidebar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\AdminSidebar.tsx"
  );
  import.meta.hot.lastModified = "1779346506733.2898";
}
var navLinkClass = ({
  isActive
}) => cn("flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition", isActive ? "bg-emerald-500 text-slate-950 shadow-sm shadow-emerald-500/25" : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-800");
var SidebarBrand = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-3", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-sm font-bold text-slate-950", children: "F" }, void 0, false, {
    fileName: "app/components/admin/AdminSidebar.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "min-w-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs font-bold uppercase tracking-[0.18em] text-emerald-600", children: "Farmex" }, void 0, false, {
      fileName: "app/components/admin/AdminSidebar.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "truncate text-base font-semibold text-slate-900", children: "Admin panel" }, void 0, false, {
      fileName: "app/components/admin/AdminSidebar.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminSidebar.tsx",
    lineNumber: 34,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/admin/AdminSidebar.tsx",
  lineNumber: 30,
  columnNumber: 28
}, this);
_c2 = SidebarBrand;
var AdminNav = ({
  onNavigate
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "flex flex-col gap-1", "aria-label": "Admin navigation", children: adminNavLinks.map((item) => {
  const Icon = item.icon;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(NavLink, { to: item.to, onClick: onNavigate, className: navLinkClass, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Icon, { className: "h-4 w-4 shrink-0", "aria-hidden": true }, void 0, false, {
      fileName: "app/components/admin/AdminSidebar.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, this),
    item.label
  ] }, item.to, true, {
    fileName: "app/components/admin/AdminSidebar.tsx",
    lineNumber: 45,
    columnNumber: 12
  }, this);
}) }, void 0, false, {
  fileName: "app/components/admin/AdminSidebar.tsx",
  lineNumber: 42,
  columnNumber: 7
}, this);
_c22 = AdminNav;
var AdminSidebar = ({
  mobileOpen = false,
  onMobileClose
}) => {
  _s2();
  const location = useLocation();
  (0, import_react3.useEffect)(() => {
    onMobileClose?.();
  }, [location.pathname, onMobileClose]);
  (0, import_react3.useEffect)(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("aside", { className: "hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-20 lg:flex lg:w-64 lg:flex-col border-r border-slate-200 bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "admin-scrollbar flex h-full flex-col overflow-y-auto px-4 py-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SidebarBrand, {}, void 0, false, {
        fileName: "app/components/admin/AdminSidebar.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-8 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminNav, {}, void 0, false, {
        fileName: "app/components/admin/AdminSidebar.tsx",
        lineNumber: 72,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/AdminSidebar.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-6 border-t border-slate-100 pt-4 text-xs text-slate-400", children: "Sample account for testing only." }, void 0, false, {
        fileName: "app/components/admin/AdminSidebar.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminSidebar.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/AdminSidebar.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: cn("fixed inset-0 z-40 lg:hidden", mobileOpen ? "pointer-events-auto" : "pointer-events-none"), "aria-hidden": !mobileOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", "aria-label": "Close menu", onClick: onMobileClose, className: cn("absolute inset-0 bg-slate-900/40 transition-opacity duration-300", mobileOpen ? "opacity-100" : "opacity-0") }, void 0, false, {
        fileName: "app/components/admin/AdminSidebar.tsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("aside", { className: cn("absolute left-0 top-0 flex h-full w-[min(100%,18rem)] flex-col border-r border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out", mobileOpen ? "translate-x-0" : "-translate-x-full"), role: "dialog", "aria-modal": "true", "aria-label": "Admin menu", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SidebarBrand, {}, void 0, false, {
            fileName: "app/components/admin/AdminSidebar.tsx",
            lineNumber: 85,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: onMobileClose, className: "rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900", "aria-label": "Close menu", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(X, { className: "h-5 w-5" }, void 0, false, {
            fileName: "app/components/admin/AdminSidebar.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this) }, void 0, false, {
            fileName: "app/components/admin/AdminSidebar.tsx",
            lineNumber: 86,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/AdminSidebar.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "admin-scrollbar flex-1 overflow-y-auto px-4 py-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminNav, { onNavigate: onMobileClose }, void 0, false, {
          fileName: "app/components/admin/AdminSidebar.tsx",
          lineNumber: 92,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/admin/AdminSidebar.tsx",
          lineNumber: 91,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "border-t border-slate-100 px-4 py-4 text-xs text-slate-400", children: "Sample account for testing only." }, void 0, false, {
          fileName: "app/components/admin/AdminSidebar.tsx",
          lineNumber: 95,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminSidebar.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminSidebar.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminSidebar.tsx",
    lineNumber: 67,
    columnNumber: 10
  }, this);
};
_s2(AdminSidebar, "Fsnn4T0K08C2NlVrqWhZtVJucvU=", false, function() {
  return [useLocation];
});
_c3 = AdminSidebar;
var AdminSidebar_default = AdminSidebar;
var _c2;
var _c22;
var _c3;
$RefreshReg$(_c2, "SidebarBrand");
$RefreshReg$(_c22, "AdminNav");
$RefreshReg$(_c3, "AdminSidebar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/admin.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.tsx"
  );
  import.meta.hot.lastModified = "1779346506737.8022";
}
var AdminRoot = () => {
  _s3();
  const location = useLocation();
  const actionData = useActionData();
  const [mobileNavOpen, setMobileNavOpen] = (0, import_react5.useState)(false);
  const openMobileNav = (0, import_react5.useCallback)(() => setMobileNavOpen(true), []);
  const closeMobileNav = (0, import_react5.useCallback)(() => setMobileNavOpen(false), []);
  const isLoginPage = location.pathname === "/admin" || location.pathname === "/admin/";
  if (isLoginPage) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "min-h-screen bg-white text-slate-100 flex items-center justify-center px-4 py-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "w-full max-w-md rounded-3xl bg-slate-900/95 border border-slate-700 shadow-2xl shadow-slate-950/30 backdrop-blur-xl p-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-2xl font-semibold text-slate-950", children: "A" }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "mt-6 text-3xl font-semibold tracking-tight text-white", children: "Admin Login" }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-3 text-sm text-slate-400", children: "Log in with the sample account to access the admin panel." }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      actionData?.formError ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6 rounded-3xl border border-rose-500 bg-rose-500/10 px-4 py-3 text-sm text-rose-200", children: actionData.formError }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 79,
        columnNumber: 36
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Form, { method: "post", className: "mt-6 space-y-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { className: "block", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-sm font-medium text-slate-300", children: "Email address" }, void 0, false, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 85,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "email", name: "email", placeholder: "example@mail.com", className: "mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20", required: true }, void 0, false, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { className: "block", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-sm font-medium text-slate-300", children: "Password" }, void 0, false, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "password", name: "password", placeholder: "********", className: "mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20", required: true }, void 0, false, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 91,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 89,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "submit", className: "w-full rounded-3xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30", children: "Login" }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 83,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-6 text-center text-sm text-slate-500", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { children: [
        "Don\u2019t have an account? ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Link, { to: "/", className: "font-medium text-white underline", children: "Back to the homepage" }, void 0, false, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 101,
          columnNumber: 44
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 100,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 99,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 67,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-screen overflow-hidden bg-slate-50 text-slate-900", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AdminSidebar_default, { mobileOpen: mobileNavOpen, onMobileClose: closeMobileNav }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 108,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex h-full min-w-0 flex-col lg:pl-64", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AdminNavbar_default, { onMenuClick: openMobileNav }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "admin-scrollbar flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 112,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 107,
    columnNumber: 10
  }, this);
};
_s3(AdminRoot, "rnxL4QnCYNoERb+a1MngwLpFLJo=", false, function() {
  return [useLocation, useActionData];
});
_c4 = AdminRoot;
var admin_default = AdminRoot;
var _c4;
$RefreshReg$(_c4, "AdminRoot");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  admin_default as default
};
//# sourceMappingURL=/build/routes/admin-4ZOHUBRQ.js.map
