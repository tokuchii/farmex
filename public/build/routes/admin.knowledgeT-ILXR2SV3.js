import {
  require_lav_stations,
  require_rice_derbies
} from "/build/_shared/chunk-CJNIYCAR.js";
import {
  LavStationModule,
  RiceDerbiesModule
} from "/build/_shared/chunk-I7E2KYFF.js";
import {
  require_cloudinary
} from "/build/_shared/chunk-2T37EEZG.js";
import "/build/_shared/chunk-SCF47TFB.js";
import "/build/_shared/chunk-NPIM253G.js";
import "/build/_shared/chunk-UF6K54N4.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_session
} from "/build/_shared/chunk-WDL7VJWI.js";
import "/build/_shared/chunk-VYS3PCQI.js";
import {
  Captions,
  Wheat
} from "/build/_shared/chunk-HHCPKSUZ.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  useFetcher,
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
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/admin.knowledgeT.tsx
var import_node = __toESM(require_node(), 1);
var import_react2 = __toESM(require_react(), 1);
var import_lav_stations = __toESM(require_lav_stations(), 1);
var import_rice_derbies = __toESM(require_rice_derbies(), 1);
var import_cloudinary = __toESM(require_cloudinary(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.knowledgeT.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.knowledgeT.tsx"
  );
  import.meta.hot.lastModified = "1779630806864.151";
}
var KnowledgeTransferAdmin = () => {
  _s();
  const {
    lavStations,
    riceDerbies,
    cloudinary
  } = useLoaderData();
  const fetcher = useFetcher();
  const [activeSection, setActiveSection] = (0, import_react2.useState)("lav-station");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex gap-3 sm:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setActiveSection("lav-station"), className: `flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${activeSection === "lav-station" ? "bg-emerald-500 text-white hover:bg-emerald-400" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Captions, { className: "mr-2 inline-block" }, void 0, false, {
          fileName: "app/routes/admin.knowledgeT.tsx",
          lineNumber: 358,
          columnNumber: 11
        }, this),
        "LAV STATION"
      ] }, void 0, true, {
        fileName: "app/routes/admin.knowledgeT.tsx",
        lineNumber: 357,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setActiveSection("rice-derbies"), className: `flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${activeSection === "rice-derbies" ? "bg-emerald-500 text-white hover:bg-emerald-400" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wheat, { className: "mr-2 inline-block" }, void 0, false, {
          fileName: "app/routes/admin.knowledgeT.tsx",
          lineNumber: 362,
          columnNumber: 11
        }, this),
        "Rice Derbies"
      ] }, void 0, true, {
        fileName: "app/routes/admin.knowledgeT.tsx",
        lineNumber: 361,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.knowledgeT.tsx",
      lineNumber: 356,
      columnNumber: 7
    }, this),
    activeSection === "lav-station" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LavStationModule, { stations: lavStations, fetcher, cloudinary }, void 0, false, {
      fileName: "app/routes/admin.knowledgeT.tsx",
      lineNumber: 367,
      columnNumber: 42
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RiceDerbiesModule, { derbies: riceDerbies, fetcher, cloudinaryConfig: cloudinary }, void 0, false, {
      fileName: "app/routes/admin.knowledgeT.tsx",
      lineNumber: 367,
      columnNumber: 130
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.knowledgeT.tsx",
    lineNumber: 355,
    columnNumber: 10
  }, this);
};
_s(KnowledgeTransferAdmin, "SuIHAF1zB2eBeQAAOjAqTo7RtZk=", false, function() {
  return [useLoaderData, useFetcher];
});
_c = KnowledgeTransferAdmin;
var admin_knowledgeT_default = KnowledgeTransferAdmin;
var _c;
$RefreshReg$(_c, "KnowledgeTransferAdmin");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  admin_knowledgeT_default as default
};
//# sourceMappingURL=/build/routes/admin.knowledgeT-ILXR2SV3.js.map
