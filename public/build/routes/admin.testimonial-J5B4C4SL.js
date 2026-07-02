import {
  require_testimonials
} from "/build/_shared/chunk-SEQ7IFIP.js";
import {
  TestimonialsModule
} from "/build/_shared/chunk-FPFT6CIE.js";
import {
  require_cloudinary
} from "/build/_shared/chunk-TSWEK2BM.js";
import "/build/_shared/chunk-B5MSCQQ7.js";
import "/build/_shared/chunk-D6FIOM5R.js";
import "/build/_shared/chunk-3TJB5JYW.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_session
} from "/build/_shared/chunk-WDL7VJWI.js";
import "/build/_shared/chunk-Y3Q3TNJF.js";
import "/build/_shared/chunk-NYPZHE2B.js";
import "/build/_shared/chunk-HHCPKSUZ.js";
import {
  require_node
} from "/build/_shared/chunk-NBEH4DGX.js";
import {
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-2744OLY6.js";
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

// app/routes/admin.testimonial.tsx
var import_node = __toESM(require_node(), 1);
var import_cloudinary = __toESM(require_cloudinary(), 1);
var import_testimonials = __toESM(require_testimonials(), 1);
var import_session = __toESM(require_session(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\admin.testimonial.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.testimonial.tsx"
  );
  import.meta.hot.lastModified = "1781440380622.8335";
}
var AdminTestimonials = () => {
  _s();
  const {
    testimonials,
    cloudinaryConfig
  } = useLoaderData();
  const fetcher = useFetcher();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TestimonialsModule, { testimonials, fetcher, cloudinaryConfig }, void 0, false, {
    fileName: "app/routes/admin.testimonial.tsx",
    lineNumber: 168,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/admin.testimonial.tsx",
    lineNumber: 167,
    columnNumber: 10
  }, this);
};
_s(AdminTestimonials, "FZWTDFA+cbUJprN+BtNdFEr4i/E=", false, function() {
  return [useLoaderData, useFetcher];
});
_c = AdminTestimonials;
var admin_testimonial_default = AdminTestimonials;
var _c;
$RefreshReg$(_c, "AdminTestimonials");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  admin_testimonial_default as default
};
//# sourceMappingURL=/build/routes/admin.testimonial-J5B4C4SL.js.map
