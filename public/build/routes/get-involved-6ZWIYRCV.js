import {
  motion
} from "/build/_shared/chunk-ZJN32EVK.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-F4KNNEUR.js";
import {
  createHotContext
} from "/build/_shared/chunk-FEEY3YGC.js";
import "/build/_shared/chunk-JR22VO6P.js";
import {
  require_react
} from "/build/_shared/chunk-2Z2JGDFU.js";
import {
  __toESM
} from "/build/_shared/chunk-PZDJHGND.js";

// app/routes/get-involved.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\get-involved.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\get-involved.tsx"
  );
  import.meta.hot.lastModified = "1754365511322.1812";
}
function meta() {
  return [{
    title: "FarmEx - Revolutionary Agricultural Technology"
  }];
}
function GetInvolved() {
  _s();
  const [isClient, setIsClient] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    setIsClient(true);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { className: "relative w-full h-auto overflow-hidden", children: [
      isClient && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.img, { src: "/getinvolved.png", alt: "Farm Image", className: "w-full h-64 sm:h-96 md:h-[600px] lg:h-[500px] object-cover object-top", initial: {
        opacity: 0,
        y: 40
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true,
        amount: 0.2
      }, transition: {
        duration: 0.6,
        ease: "easeOut"
      } }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 37,
        columnNumber: 22
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 flex flex-col items-center justify-center z-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-white text-2xl md:text-4xl font-extrabold uppercase tracking-widest mb-4 h-auto mt-16 md:-mt-26", children: "FARMEX AT A GLANCE" }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(motion.div, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "w-full min-h-screen pt-8 pb-16 px-4 sm:px-8 bg-[url('/bgcontact.png')] bg-cover bg-center flex flex-col items-center justify-start", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-center justify-center space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: "/pandoybg1.png", alt: "Logo", className: "w-[350px] h-auto" }, void 0, false, {
          fileName: "app/routes/get-involved.tsx",
          lineNumber: 64,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 w-full bg-yellow-500" }, void 0, false, {
          fileName: "app/routes/get-involved.tsx",
          lineNumber: 67,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/get-involved.tsx",
          lineNumber: 66,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-black space-y-6 text-md", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold text-xl", children: "Emails:" }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 73,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:customersupport@leadsav.com", className: "underline text-black hover:text-green-600", children: "customersupport@leadsav.com" }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 75,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 74,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "mailto:hr@leadsagri.com", className: "underline text-black hover:text-green-600", children: "hr@leadsagri.com" }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 80,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 79,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 72,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold text-xl", children: "Contact numbers:" }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 88,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "FARMEX Customer Service & Support:",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:+639451709401", className: "underline text-black hover:text-green-600", children: "+63 945 170 9401" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 91,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 89,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "Northern Luzon:",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:+639064819885", className: "underline text-black hover:text-green-600", children: "+63 906 481 9885" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 97,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 95,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "MIMAROPA:",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:+639267091276", className: "underline text-black hover:text-green-600", children: "+63 926 709 1276" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 103,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 101,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
              "CALABARZON:",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "tel:+639173138162", className: "underline text-black hover:text-green-600", children: "+63 917 313 8162" }, void 0, false, {
                fileName: "app/routes/get-involved.tsx",
                lineNumber: 109,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 107,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 87,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "font-bold text-xl", children: "Station Address:" }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 116,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "https://www.google.com/maps?q=14.330623,121.076050", target: "_blank", rel: "noopener noreferrer", className: "underline text-black hover:text-green-600", children: "Unit A 201 and Alfresco Area, 2nd Floor Coral Center Mall, Barangay San Francisco, Bi\xF1an, Laguna" }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 118,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/get-involved.tsx",
              lineNumber: 117,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 115,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/get-involved.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 63,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col items-end gap-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "bg-green-700 text-white p-6 rounded-lg w-full max-w-md shadow-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Name", className: "w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none" }, void 0, false, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 132,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 131,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "email", placeholder: "Email Address", className: "w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none" }, void 0, false, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 135,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 134,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", placeholder: "Contact Number", className: "w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none" }, void 0, false, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 138,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 137,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { rows: 4, placeholder: "Your Message", className: "w-full px-4 py-3 rounded text-gray-700 bg-white border border-gray-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:outline-none" }, void 0, false, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 141,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "text-white px-4 py-2 rounded hover:brightness-95", style: {
            backgroundColor: "#E0B100"
          }, children: "Submit Form" }, void 0, false, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 144,
            columnNumber: 19
          }, this) }, void 0, false, {
            fileName: "app/routes/get-involved.tsx",
            lineNumber: 143,
            columnNumber: 17
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/get-involved.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full max-w-md h-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("iframe", { title: "FarmEx Location", src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.64908692822!2d121.27209887587168!3d14.172200686486535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5e176676321b%3A0x7b2c62c941bcd7a3!2s1775%20F.T.%20San%20Luis%20Ave%2C%20Bay%2C%20Laguna%204033!5e0!3m2!1sen!2sph!4v1693817890000!5m2!1sen!2sph", width: "100%", height: "100%", allowFullScreen: true, loading: "lazy", className: "rounded-md shadow-lg", referrerPolicy: "no-referrer-when-downgrade" }, void 0, false, {
          fileName: "app/routes/get-involved.tsx",
          lineNumber: 157,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/get-involved.tsx",
          lineNumber: 156,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/get-involved.tsx",
        lineNumber: 129,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 59,
      columnNumber: 3
    }, this) }, void 0, false, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this) }, void 0, false, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "w-full flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-1 w-full bg-yellow-500" }, void 0, false, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 169,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/get-involved.tsx",
      lineNumber: 168,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/get-involved.tsx",
    lineNumber: 35,
    columnNumber: 10
  }, this);
}
_s(GetInvolved, "k460N28PNzD7zo1YW47Q9UigQis=");
_c = GetInvolved;
var _c;
$RefreshReg$(_c, "GetInvolved");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  GetInvolved as default,
  meta
};
//# sourceMappingURL=/build/routes/get-involved-6ZWIYRCV.js.map
