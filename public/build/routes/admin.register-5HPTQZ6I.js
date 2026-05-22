import {
  AdminAuthField,
  AdminAuthShell_default,
  adminInputClass,
  require_firebase
} from "/build/_shared/chunk-SUJBPZ3O.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  useAdminActionToast
} from "/build/_shared/chunk-U5SUJ5PG.js";
import {
  useAdminUrlToast
} from "/build/_shared/chunk-2RLK6O5F.js";
import "/build/_shared/chunk-NPHVSHBY.js";
import {
  Form,
  Link,
  useActionData
} from "/build/_shared/chunk-NCCBZ6OM.js";
import "/build/_shared/chunk-QYKKIRSI.js";
import "/build/_shared/chunk-PLT55Z5M.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-JQ452JWN.js";
import "/build/_shared/chunk-JR22VO6P.js";
import "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/admin.register.tsx
var import_node = __toESM(require_node(), 1);
var import_firebase = __toESM(require_firebase(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.register.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.register.tsx"
  );
  import.meta.hot.lastModified = "1779410954312.5115";
}
var REGISTER_URL_TOASTS = [{
  param: "registered",
  value: "true",
  type: "success",
  message: "Account successfully created! Maaari ka nang mag-login."
}];
var meta = () => [{
  title: "Register | Farmex Admin"
}];
function AdminRegister() {
  _s();
  const actionData = useActionData();
  useAdminUrlToast(REGISTER_URL_TOASTS);
  useAdminActionToast(actionData?.formError);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminAuthShell_default, { eyebrow: "Register", title: "Create admin account", description: "Gumawa ng admin account para ma-access ang panel.", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
    "May account na?",
    " ",
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/admin", className: "font-semibold text-emerald-600 transition hover:text-emerald-700", children: "Mag-login" }, void 0, false, {
      fileName: "app/routes/admin.register.tsx",
      lineNumber: 134,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.register.tsx",
    lineNumber: 132,
    columnNumber: 146
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "space-y-5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminAuthField, { label: "Username", htmlFor: "username", error: actionData?.fieldErrors?.username, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "username", type: "text", name: "username", placeholder: "juan_delacruz", autoComplete: "username", className: adminInputClass, required: true }, void 0, false, {
      fileName: "app/routes/admin.register.tsx",
      lineNumber: 141,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.register.tsx",
      lineNumber: 140,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminAuthField, { label: "Email address", htmlFor: "email", error: actionData?.fieldErrors?.email, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "email", type: "email", name: "email", placeholder: "example@mail.com", autoComplete: "email", className: adminInputClass, required: true }, void 0, false, {
      fileName: "app/routes/admin.register.tsx",
      lineNumber: 145,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.register.tsx",
      lineNumber: 144,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminAuthField, { label: "Password", htmlFor: "password", error: actionData?.fieldErrors?.password, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "password", type: "password", name: "password", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", autoComplete: "new-password", className: adminInputClass, required: true }, void 0, false, {
      fileName: "app/routes/admin.register.tsx",
      lineNumber: 149,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.register.tsx",
      lineNumber: 148,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminAuthField, { label: "Confirm password", htmlFor: "confirmPassword", error: actionData?.fieldErrors?.confirmPassword, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "confirmPassword", type: "password", name: "confirmPassword", placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", autoComplete: "new-password", className: adminInputClass, required: true }, void 0, false, {
      fileName: "app/routes/admin.register.tsx",
      lineNumber: 153,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/routes/admin.register.tsx",
      lineNumber: 152,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "w-full rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30", children: "Register" }, void 0, false, {
      fileName: "app/routes/admin.register.tsx",
      lineNumber: 156,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.register.tsx",
    lineNumber: 139,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.register.tsx",
    lineNumber: 138,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.register.tsx",
    lineNumber: 132,
    columnNumber: 10
  }, this);
}
_s(AdminRegister, "le/0Qnwzk5P+MBKzShcbraMY/74=", false, function() {
  return [useActionData, useAdminUrlToast, useAdminActionToast];
});
_c = AdminRegister;
var _c;
$RefreshReg$(_c, "AdminRegister");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  AdminRegister as default,
  meta
};
//# sourceMappingURL=/build/routes/admin.register-5HPTQZ6I.js.map
