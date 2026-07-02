import {
  AdminAuthShell_default,
  adminInputClass
} from "/build/_shared/chunk-LOQCLT7D.js";
import {
  require_firebase
} from "/build/_shared/chunk-5ZXPXUPH.js";
import "/build/_shared/chunk-ZMN6YE3T.js";
import {
  AdminNavbar_default,
  AdminSidebar_default
} from "/build/_shared/chunk-W52RAIBT.js";
import "/build/_shared/chunk-3TJB5JYW.js";
import {
  require_session
} from "/build/_shared/chunk-WDL7VJWI.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  useAdminActionToast
} from "/build/_shared/chunk-YHD75TJC.js";
import {
  useAdminUrlToast
} from "/build/_shared/chunk-G3UCOLO6.js";
import {
  AdminToastProvider
} from "/build/_shared/chunk-NYPZHE2B.js";
import "/build/_shared/chunk-HHCPKSUZ.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  Form,
  Link,
  Outlet,
  useActionData,
  useLoaderData,
  useLocation,
  useNavigation
} from "/build/_shared/chunk-2744OLY6.js";
import "/build/_shared/chunk-PLT55Z5M.js";
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

// app/routes/admin.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_firebase = __toESM(require_firebase(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
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
var _s = $RefreshSig$();
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.tsx"
  );
  import.meta.hot.lastModified = "1781569155206.3557";
}
var LOGIN_URL_TOASTS = [{
  param: "logout",
  value: "success",
  type: "success",
  message: "Logout successful. See you again!"
}, {
  param: "logout",
  value: "deleted",
  type: "success",
  message: "Account deleted. Goodbye!"
}];
var AdminLoginForm = () => {
  _s();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  useAdminUrlToast(LOGIN_URL_TOASTS);
  useAdminActionToast(actionData?.formError);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminAuthShell_default, { eyebrow: "Login", title: "Admin login", description: "Log in with your credentials to access the admin panel.", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
    "Don't have an account?",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin/register", className: "font-semibold text-emerald-600 transition hover:text-emerald-700", children: "Register here" }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 152,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 150,
    columnNumber: 140
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-slate-700", children: "Email address" }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 159,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", name: "email", placeholder: "example@mail.com", autoComplete: "email", className: adminInputClass, required: true }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 160,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 158,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-slate-700", children: "Password" }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 164,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "password", name: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", autoComplete: "current-password", className: adminInputClass, required: true }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 165,
        columnNumber: 15
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 163,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "w-full rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-emerald-500/30", children: isSubmitting ? "Logging in..." : "Log in" }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 168,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 157,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 156,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 150,
    columnNumber: 10
  }, this);
};
_s(AdminLoginForm, "rnZTy2S7gK80RPlqC4UqeioMOT0=", false, function() {
  return [useActionData, useNavigation, useAdminUrlToast, useAdminActionToast];
});
_c = AdminLoginForm;
var AdminRoot = () => {
  _s2();
  const {
    user
  } = useLoaderData();
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = (0, import_react2.useState)(false);
  const openMobileNav = (0, import_react2.useCallback)(() => setMobileNavOpen(true), []);
  const closeMobileNav = (0, import_react2.useCallback)(() => setMobileNavOpen(false), []);
  const isLoginPage = location.pathname === "/admin" || location.pathname === "/admin/";
  const isRegisterPage = location.pathname === "/admin/register";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminToastProvider, { children: isRegisterPage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 191,
    columnNumber: 25
  }, this) : isLoginPage ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminLoginForm, {}, void 0, false, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 191,
    columnNumber: 52
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-screen overflow-hidden bg-slate-50 text-slate-900", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminSidebar_default, { mobileOpen: mobileNavOpen, onMobileClose: closeMobileNav }, void 0, false, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex h-full min-w-0 flex-col lg:pl-64", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminNavbar_default, { onMenuClick: openMobileNav, username: user?.username, email: user?.email }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "admin-scrollbar flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 196,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 195,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 193,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 191,
    columnNumber: 73
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 190,
    columnNumber: 10
  }, this);
};
_s2(AdminRoot, "f8UgEcFyKgsCi1pyPjGQH6mS0IA=", false, function() {
  return [useLoaderData, useLocation];
});
_c2 = AdminRoot;
var admin_default = AdminRoot;
var _c;
var _c2;
$RefreshReg$(_c, "AdminLoginForm");
$RefreshReg$(_c2, "AdminRoot");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  admin_default as default
};
//# sourceMappingURL=/build/routes/admin-W7EGWG6V.js.map
