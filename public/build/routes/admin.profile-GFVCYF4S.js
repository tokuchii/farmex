import {
  require_firebase
} from "/build/_shared/chunk-5ZXPXUPH.js";
import "/build/_shared/chunk-ZMN6YE3T.js";
import {
  DeleteConfirmationModal_default
} from "/build/_shared/chunk-B5MSCQQ7.js";
import "/build/_shared/chunk-D6FIOM5R.js";
import "/build/_shared/chunk-3TJB5JYW.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_session
} from "/build/_shared/chunk-WDL7VJWI.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import {
  useAdminToast
} from "/build/_shared/chunk-NYPZHE2B.js";
import "/build/_shared/chunk-HHCPKSUZ.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  Form,
  useActionData,
  useLoaderData,
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

// app/routes/admin.profile.tsx
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
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.profile.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.profile.tsx"
  );
  import.meta.hot.lastModified = "1781569147199.8364";
}
function AdminProfile() {
  _s();
  const {
    admin
  } = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const toast = useAdminToast();
  const isSubmitting = navigation.state === "submitting";
  const [deleteOpen, setDeleteOpen] = (0, import_react2.useState)(false);
  const deleteFormRef = (0, import_react2.useRef)(null);
  const isConfirmingRef = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(() => {
    if (!actionData)
      return;
    if (actionData.formError) {
      toast.error(actionData.formError);
    }
    if (actionData.successMessage) {
      toast.success(actionData.successMessage);
    }
    if (actionData.fieldErrors) {
      Object.values(actionData.fieldErrors).forEach((err) => {
        if (err)
          toast.error(err);
      });
    }
  }, [actionData, toast]);
  const handleDelete = (event) => {
    event.preventDefault();
    setDeleteOpen(true);
  };
  const handleDeleteConfirm = () => {
    isConfirmingRef.current = true;
    deleteFormRef.current?.submit();
  };
  const handleDeleteOpenChange = (open) => {
    if (!open && !isConfirmingRef.current) {
      toast.error("Account deletion cancelled.");
    }
    if (!open)
      isConfirmingRef.current = false;
    setDeleteOpen(open);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "Profile" }, void 0, false, {
        fileName: "app/routes/admin.profile.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Admin Profile" }, void 0, false, {
        fileName: "app/routes/admin.profile.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-slate-500", children: "Manage your admin profile information and account settings." }, void 0, false, {
        fileName: "app/routes/admin.profile.tsx",
        lineNumber: 167,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.profile.tsx",
      lineNumber: 164,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-slate-900", children: "Account Information" }, void 0, false, {
        fileName: "app/routes/admin.profile.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: "Username" }, void 0, false, {
            fileName: "app/routes/admin.profile.tsx",
            lineNumber: 174,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium text-slate-900", children: admin.username }, void 0, false, {
            fileName: "app/routes/admin.profile.tsx",
            lineNumber: 175,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.profile.tsx",
          lineNumber: 173,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: "Email" }, void 0, false, {
            fileName: "app/routes/admin.profile.tsx",
            lineNumber: 178,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium text-slate-900", children: admin.email }, void 0, false, {
            fileName: "app/routes/admin.profile.tsx",
            lineNumber: 179,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.profile.tsx",
          lineNumber: 177,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: "Role" }, void 0, false, {
            fileName: "app/routes/admin.profile.tsx",
            lineNumber: 182,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium capitalize text-slate-900", children: admin.role }, void 0, false, {
            fileName: "app/routes/admin.profile.tsx",
            lineNumber: 183,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.profile.tsx",
          lineNumber: 181,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm text-slate-500", children: "Created At" }, void 0, false, {
            fileName: "app/routes/admin.profile.tsx",
            lineNumber: 186,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "font-medium text-slate-900", children: admin.createdAt }, void 0, false, {
            fileName: "app/routes/admin.profile.tsx",
            lineNumber: 187,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.profile.tsx",
          lineNumber: 185,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.profile.tsx",
        lineNumber: 172,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.profile.tsx",
      lineNumber: 170,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-slate-200 p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-slate-900", children: "Change Password" }, void 0, false, {
        fileName: "app/routes/admin.profile.tsx",
        lineNumber: 193,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "update" }, void 0, false, {
          fileName: "app/routes/admin.profile.tsx",
          lineNumber: 198,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "currentPassword", className: "mb-2 block text-sm font-medium text-slate-700", children: "Current Password" }, void 0, false, {
            fileName: "app/routes/admin.profile.tsx",
            lineNumber: 201,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "currentPassword", type: "password", name: "currentPassword", className: "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-emerald-500 focus:outline-none", required: true }, void 0, false, {
            fileName: "app/routes/admin.profile.tsx",
            lineNumber: 204,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.profile.tsx",
          lineNumber: 200,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "newPassword", className: "mb-2 block text-sm font-medium text-slate-700", children: "New Password" }, void 0, false, {
            fileName: "app/routes/admin.profile.tsx",
            lineNumber: 209,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "newPassword", type: "password", name: "newPassword", className: "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-emerald-500 focus:outline-none", required: true }, void 0, false, {
            fileName: "app/routes/admin.profile.tsx",
            lineNumber: 212,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.profile.tsx",
          lineNumber: 208,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "confirmPassword", className: "mb-2 block text-sm font-medium text-slate-700", children: "Confirm New Password" }, void 0, false, {
            fileName: "app/routes/admin.profile.tsx",
            lineNumber: 217,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { id: "confirmPassword", type: "password", name: "confirmPassword", className: "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-emerald-500 focus:outline-none", required: true }, void 0, false, {
            fileName: "app/routes/admin.profile.tsx",
            lineNumber: 220,
            columnNumber: 13
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/admin.profile.tsx",
          lineNumber: 216,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", disabled: isSubmitting, className: "w-full rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70", children: isSubmitting ? "Updating..." : "Update Password" }, void 0, false, {
          fileName: "app/routes/admin.profile.tsx",
          lineNumber: 224,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.profile.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.profile.tsx",
      lineNumber: 192,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-2xl border border-red-200 bg-white p-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-xl font-semibold text-red-700", children: "Delete Account" }, void 0, false, {
        fileName: "app/routes/admin.profile.tsx",
        lineNumber: 231,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-2 text-sm text-slate-600", children: "Permanently delete your admin account and all associated data. This action cannot be undone." }, void 0, false, {
        fileName: "app/routes/admin.profile.tsx",
        lineNumber: 232,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", ref: deleteFormRef, className: "mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "intent", value: "delete" }, void 0, false, {
          fileName: "app/routes/admin.profile.tsx",
          lineNumber: 235,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: (e) => handleDelete(e), className: "rounded-xl bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700", children: "Delete Account" }, void 0, false, {
          fileName: "app/routes/admin.profile.tsx",
          lineNumber: 236,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/admin.profile.tsx",
        lineNumber: 234,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteConfirmationModal_default, { open: deleteOpen, onOpenChange: handleDeleteOpenChange, description: "Permanently delete your admin account and all associated data. This action cannot be undone.", confirmLabel: "Delete Account", onConfirm: handleDeleteConfirm }, void 0, false, {
        fileName: "app/routes/admin.profile.tsx",
        lineNumber: 241,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.profile.tsx",
      lineNumber: 230,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.profile.tsx",
    lineNumber: 163,
    columnNumber: 10
  }, this);
}
_s(AdminProfile, "A1M1htaCyc4bhQNOWpPwRLtU8Ag=", false, function() {
  return [useLoaderData, useActionData, useNavigation, useAdminToast];
});
_c = AdminProfile;
var admin_profile_default = AdminProfile;
var _c;
$RefreshReg$(_c, "AdminProfile");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  admin_profile_default as default
};
//# sourceMappingURL=/build/routes/admin.profile-GFVCYF4S.js.map
