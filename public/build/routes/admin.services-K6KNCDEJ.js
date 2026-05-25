import "/build/_shared/chunk-GKLYR5Y7.js";
import "/build/_shared/chunk-D66B3R7C.js";
import "/build/_shared/chunk-QN472OYM.js";
import "/build/_shared/chunk-PWEZSQ62.js";
import {
  AdminMultiImageUpload_default
} from "/build/_shared/chunk-CI3KMCPB.js";
import {
  AdminModal_default,
  adminInputClass
} from "/build/_shared/chunk-BSKAJOYM.js";
import "/build/_shared/chunk-6UOKIDRU.js";
import "/build/_shared/chunk-QHNS7JQF.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import "/build/_shared/chunk-H7DKSGHW.js";
import "/build/_shared/chunk-RAO5S252.js";
import "/build/_shared/chunk-KOO4XNJ3.js";
import "/build/_shared/chunk-ZCW6PNXX.js";
import {
  Calendar,
  Plus,
  Tractor,
  UserCog
} from "/build/_shared/chunk-RVEYE3WS.js";
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

// app/routes/admin.services.tsx
var import_react5 = __toESM(require_react(), 1);

// app/components/admin/MachineRentalsModule.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\MachineRentalsModule.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\MachineRentalsModule.tsx"
  );
  import.meta.hot.lastModified = "1779334290975.9043";
}
var adminInputClass2 = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20";
var MachineRentalsModule = () => {
  _s();
  const [isModalOpen, setModalOpen] = (0, import_react.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "MACHINE RENTALS" }, void 0, false, {
          fileName: "app/components/admin/MachineRentalsModule.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Manage machine rentals" }, void 0, false, {
          fileName: "app/components/admin/MachineRentalsModule.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Add and manage equipment rentals, pricing, and availability for tractors, harvesters, and other tools." }, void 0, false, {
          fileName: "app/components/admin/MachineRentalsModule.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(true), className: "flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/MachineRentalsModule.tsx",
          lineNumber: 40,
          columnNumber: 11
        }, this),
        "Add machine rental"
      ] }, void 0, true, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-center text-slate-500", children: "No machine rentals yet. Use \u201CAdd machine rental\u201D to create one in the modal." }, void 0, false, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminModal_default, { open: isModalOpen, onOpenChange: setModalOpen, title: "Add Machine Rental", description: "Fill in the details for the rental equipment and availability schedule.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(false), className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 50,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(false), className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400", children: "Save machine rental" }, void 0, false, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 53,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 49,
      columnNumber: 197
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "space-y-4", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Equipment name",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "name", placeholder: "Tractor, harvester, etc.", className: adminInputClass2 }, void 0, false, {
          fileName: "app/components/admin/MachineRentalsModule.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Rental rate",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "rate", placeholder: "e.g. \u20B11,200 per day", className: adminInputClass2 }, void 0, false, {
          fileName: "app/components/admin/MachineRentalsModule.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Availability notes",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { name: "details", placeholder: "Location, condition, or special instructions", className: `${adminInputClass2} admin-scrollbar resize-none`, rows: 4 }, void 0, false, {
          fileName: "app/components/admin/MachineRentalsModule.tsx",
          lineNumber: 68,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 66,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/MachineRentalsModule.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_s(MachineRentalsModule, "o+ymuZc6VVdUpCAroHabBGZ51VI=");
_c = MachineRentalsModule;
var _c;
$RefreshReg$(_c, "MachineRentalsModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/TechnicalConsultantModule.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\TechnicalConsultantModule.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\TechnicalConsultantModule.tsx"
  );
  import.meta.hot.lastModified = "1779692388388.4377";
}
var TechnicalConsultantModule = () => {
  _s2();
  const [isModalOpen, setModalOpen] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "TECHNICAL CONSULTANT" }, void 0, false, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Manage technical consultants" }, void 0, false, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Add and manage consultant profiles, specialties, and advisory availability." }, void 0, false, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(true), className: "flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        "Add technical consultant"
      ] }, void 0, true, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-center text-slate-500", children: "No technical consultants yet. Use \u201CAdd technical consultant\u201D to create one in the modal." }, void 0, false, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminModal_default, { open: isModalOpen, onOpenChange: setModalOpen, title: "Add Technical Consultant", description: "Fill in the consultant\u2019s name, specialty, and availability.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(false), className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(false), className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400", children: "Save technical consultant" }, void 0, false, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 54,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 50,
      columnNumber: 191
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { className: "space-y-4", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Title",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "text", name: "title", placeholder: "Full name", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Description",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "text", name: "description", placeholder: "Brief bio and expertise", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminMultiImageUpload_default, { files: [], onChange: () => {
      } }, void 0, false, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 68,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/TechnicalConsultantModule.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s2(TechnicalConsultantModule, "o+ymuZc6VVdUpCAroHabBGZ51VI=");
_c2 = TechnicalConsultantModule;
var _c2;
$RefreshReg$(_c2, "TechnicalConsultantModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/TrainingModule.tsx
var import_react4 = __toESM(require_react(), 1);

// app/components/admin/TrainingGalleryModule.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\TrainingGalleryModule.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\TrainingGalleryModule.tsx"
  );
  import.meta.hot.lastModified = "1779676353318.1328";
}
var TrainingGalleryModule = () => {
  _s3();
  const [isModalOpen, setModalOpen] = (0, import_react3.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-lg font-semibold text-slate-700", children: "Gallery  Collections" }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(true), className: "flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/TrainingGalleryModule.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, this),
        "Add gallery collection"
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 36,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 31,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-center text-slate-500", children: "No gallery collections yet. Use \u201CAdd gallery collection\u201D to create one in the modal." }, void 0, false, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 42,
      columnNumber: 12
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AdminModal_default, { open: isModalOpen, onOpenChange: setModalOpen, title: "Add Gallery Collection", description: "Fill in the gallery collection details and schedule.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(false), className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50", children: "cancel" }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 47,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(false), className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400", children: "Save collection" }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 46,
      columnNumber: 188
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { className: "space-y-4", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { htmlFor: "collectionName", className: "block text-sm font-medium text-slate-700", children: "Collection Name" }, void 0, false, {
          fileName: "app/components/admin/TrainingGalleryModule.tsx",
          lineNumber: 56,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "text", id: "collectionName", name: "collectionName", className: adminInputClass, placeholder: "e.g. Spring 2024 Training Highlights" }, void 0, false, {
          fileName: "app/components/admin/TrainingGalleryModule.tsx",
          lineNumber: 59,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 55,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AdminMultiImageUpload_default, { files: [], onChange: () => {
      } }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 62,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 54,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 46,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/TrainingGalleryModule.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s3(TrainingGalleryModule, "o+ymuZc6VVdUpCAroHabBGZ51VI=");
_c3 = TrainingGalleryModule;
var _c3;
$RefreshReg$(_c3, "TrainingGalleryModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/TrainingModule.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\TrainingModule.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\TrainingModule.tsx"
  );
  import.meta.hot.lastModified = "1779676330054.838";
}
var TrainingModule = () => {
  _s4();
  const [isModalOpen, setModalOpen] = (0, import_react4.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "TRAINING" }, void 0, false, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Manage training sessions" }, void 0, false, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Add and manage workshop schedules, topics, and venue details." }, void 0, false, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(true), className: "flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 41,
          columnNumber: 11
        }, this),
        "Add training session"
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-lg font-semibold text-slate-700", children: "Event schedule" }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-center text-slate-500", children: "No training sessions yet. Use \u201CAdd training session\u201D to create one in the modal." }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AdminModal_default, { open: isModalOpen, onOpenChange: setModalOpen, title: "Add Training Session", description: "Fill in the training session details and schedule.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(false), className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 57,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(false), className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400", children: "Save training session" }, void 0, false, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 56,
      columnNumber: 178
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { className: "space-y-4", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Session title",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", name: "title", placeholder: "Workshop title", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
          "Date",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "date", name: "date", className: adminInputClass }, void 0, false, {
            fileName: "app/components/admin/TrainingModule.tsx",
            lineNumber: 72,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 70,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
          "Time",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "time", name: "time", className: adminInputClass }, void 0, false, {
            fileName: "app/components/admin/TrainingModule.tsx",
            lineNumber: 76,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 74,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Venue or link",
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", name: "location", placeholder: "Venue or online link", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("hr", { className: "my-4 border-slate-200" }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 86,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TrainingGalleryModule, {}, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 88,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/TrainingModule.tsx",
    lineNumber: 30,
    columnNumber: 10
  }, this);
};
_s4(TrainingModule, "o+ymuZc6VVdUpCAroHabBGZ51VI=");
_c4 = TrainingModule;
var _c4;
$RefreshReg$(_c4, "TrainingModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\index.ts"
  );
  import.meta.hot.lastModified = "1779693629328.101";
}

// app/routes/admin.services.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.services.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.services.tsx"
  );
  import.meta.hot.lastModified = "1779346656630.4116";
}
var AdminServices = () => {
  _s5();
  const [activeSection, setActiveSection] = (0, import_react5.useState)("rentals");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", onClick: () => setActiveSection("rentals"), className: `w-full sm:basis-0 sm:flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${activeSection === "rentals" ? "bg-emerald-500 text-white hover:bg-emerald-400" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Tractor, { className: "mr-2 inline-block" }, void 0, false, {
          fileName: "app/routes/admin.services.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        "Machine Rentals"
      ] }, void 0, true, {
        fileName: "app/routes/admin.services.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", onClick: () => setActiveSection("consultation"), className: `w-full sm:basis-0 sm:flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${activeSection === "consultation" ? "bg-emerald-500 text-white hover:bg-emerald-400" : "bg-slate-200 text-slate-900 hover:bg-emerald-300"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(UserCog, { className: "mr-2 inline-block" }, void 0, false, {
          fileName: "app/routes/admin.services.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        "Technical Consultant"
      ] }, void 0, true, {
        fileName: "app/routes/admin.services.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", onClick: () => setActiveSection("training"), className: `w-full sm:basis-0 sm:flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${activeSection === "training" ? "bg-emerald-500 text-white hover:bg-emerald-400" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Calendar, { className: "mr-2 inline-block" }, void 0, false, {
          fileName: "app/routes/admin.services.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this),
        "Training"
      ] }, void 0, true, {
        fileName: "app/routes/admin.services.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.services.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    activeSection === "rentals" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(MachineRentalsModule, {}, void 0, false, {
      fileName: "app/routes/admin.services.tsx",
      lineNumber: 44,
      columnNumber: 38
    }, this) : activeSection === "consultation" ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TechnicalConsultantModule, {}, void 0, false, {
      fileName: "app/routes/admin.services.tsx",
      lineNumber: 44,
      columnNumber: 100
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(TrainingModule, {}, void 0, false, {
      fileName: "app/routes/admin.services.tsx",
      lineNumber: 44,
      columnNumber: 132
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.services.tsx",
    lineNumber: 28,
    columnNumber: 10
  }, this);
};
_s5(AdminServices, "1/WEDCxd4B1w0pDs5jQLEzNybgw=");
_c5 = AdminServices;
var admin_services_default = AdminServices;
var _c5;
$RefreshReg$(_c5, "AdminServices");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  admin_services_default as default
};
//# sourceMappingURL=/build/routes/admin.services-K6KNCDEJ.js.map
