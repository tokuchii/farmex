import {
  cn
} from "/build/_shared/chunk-UF6K54N4.js";
import {
  BrainCircuit,
  ExternalLink,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  Newspaper,
  Settings2,
  User,
  X
} from "/build/_shared/chunk-HHCPKSUZ.js";
import {
  Form,
  Link,
  NavLink,
  useLocation
} from "/build/_shared/chunk-ZCW6PNXX.js";
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

// app/components/admin/adminNavLinks.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\adminNavLinks.ts"
  );
  import.meta.hot.lastModified = "1779346442105.241";
}
var adminNavLinks = [
  { label: "Dashboard", to: "/admin/dashboard", icon: LayoutDashboard },
  { label: "News", to: "/admin/news", icon: Newspaper },
  { label: "Services", to: "/admin/services", icon: Settings2 },
  { label: "Testimonials", to: "/admin/testimonial", icon: MessageSquare },
  { label: "Knowledge transfer", to: "/admin/knowledgeT", icon: BrainCircuit }
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
  import.meta.hot.lastModified = "1779367955221.157";
}
var getPageTitle = (pathname) => {
  const match = adminNavLinks.find((link) => pathname === link.to || pathname.startsWith(`${link.to}/`));
  return match?.label ?? "Admin";
};
var AdminNavbar = ({
  onMenuClick,
  username,
  email
}) => {
  _s();
  const {
    pathname
  } = useLocation();
  const pageTitle = getPageTitle(pathname);
  const displayName = username ?? "Admin";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "sticky top-0 z-30 border-b border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm sm:px-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex min-w-0 flex-1 items-center gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: onMenuClick, className: "inline-flex shrink-0 items-center justify-center rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 lg:hidden", "aria-label": "Open menu", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "h-5 w-5" }, void 0, false, {
        fileName: "app/components/admin/AdminNavbar.tsx",
        lineNumber: 45,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/AdminNavbar.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-w-0 lg:hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "truncate text-xs font-bold uppercase tracking-[0.16em] text-emerald-600", children: "Farmex Admin" }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "truncate text-base font-semibold text-slate-900", children: pageTitle }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminNavbar.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden min-w-0 lg:block", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-semibold uppercase tracking-[0.16em] text-slate-400", children: "Current page" }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "truncate text-lg font-semibold text-slate-900", children: pageTitle }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 59,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminNavbar.tsx",
        lineNumber: 55,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminNavbar.tsx",
      lineNumber: 43,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex shrink-0 items-center gap-2 sm:gap-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", className: "hidden items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 sm:inline-flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "h-4 w-4", "aria-hidden": true }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        "Site"
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminNavbar.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 sm:flex", title: email ?? displayName, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "rounded-lg bg-white p-1.5 text-emerald-600 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(User, { className: "h-4 w-4", "aria-hidden": true }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 71,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "max-w-[8rem] truncate text-sm font-medium text-slate-700 md:max-w-[10rem]", children: displayName }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 73,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminNavbar.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "/admin", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "logout" }, void 0, false, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 79,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: cn("inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40"), children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "h-4 w-4", "aria-hidden": true }, void 0, false, {
            fileName: "app/components/admin/AdminNavbar.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "hidden sm:inline", children: "Logout" }, void 0, false, {
            fileName: "app/components/admin/AdminNavbar.tsx",
            lineNumber: 82,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "sr-only sm:hidden", children: "Logout" }, void 0, false, {
            fileName: "app/components/admin/AdminNavbar.tsx",
            lineNumber: 83,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/AdminNavbar.tsx",
          lineNumber: 80,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminNavbar.tsx",
        lineNumber: 78,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminNavbar.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminNavbar.tsx",
    lineNumber: 42,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/admin/AdminNavbar.tsx",
    lineNumber: 41,
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
  import.meta.hot.lastModified = "1781482441880.585";
}
var navLinkClass = ({
  isActive
}) => cn("flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition", isActive ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/25" : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-800");
var SidebarBrand = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-3", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-sm font-bold text-white", children: "F" }, void 0, false, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-6 border-t border-slate-100 pt-4 text-xs text-slate-400", children: "Farmex Corporation @2026." }, void 0, false, {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "border-t border-slate-100 px-4 py-4 text-xs text-slate-400", children: "Farmex Corporation @2026." }, void 0, false, {
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

export {
  AdminNavbar_default,
  AdminSidebar_default
};
//# sourceMappingURL=/build/_shared/chunk-COVJFQDL.js.map
