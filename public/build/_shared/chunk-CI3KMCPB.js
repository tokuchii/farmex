import {
  adminInputClass
} from "/build/_shared/chunk-BSKAJOYM.js";
import {
  cn
} from "/build/_shared/chunk-QHNS7JQF.js";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ImagePlus,
  X
} from "/build/_shared/chunk-RVEYE3WS.js";
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

// app/components/admin/AdminMultiImageUpload.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\AdminMultiImageUpload.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\AdminMultiImageUpload.tsx"
  );
  import.meta.hot.lastModified = "1779675740786.8557";
}
var AdminMultiImageUpload = ({
  files,
  onChange,
  existingUrls = [],
  onExistingUrlsChange,
  maxFiles = 10,
  disabled = false,
  label = "Images"
}) => {
  _s();
  const inputRef = (0, import_react.useRef)(null);
  const [previews, setPreviews] = (0, import_react.useState)([]);
  const totalCount = existingUrls.length + files.length;
  const canAddMore = totalCount < maxFiles;
  (0, import_react.useEffect)(() => {
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviews(urls);
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [files]);
  const handleFileChange = (event) => {
    const selected = Array.from(event.target.files ?? []);
    const remaining = maxFiles - existingUrls.length;
    const merged = [...files, ...selected].slice(0, remaining);
    onChange(merged);
    event.target.value = "";
  };
  const removeFile = (index) => {
    onChange(files.filter((_, fileIndex) => fileIndex !== index));
  };
  const removeExistingUrl = (index) => {
    onExistingUrlsChange?.(existingUrls.filter((_, urlIndex) => urlIndex !== index));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-slate-700", children: label }, void 0, false, {
      fileName: "app/components/admin/AdminMultiImageUpload.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-xs text-slate-500", children: [
      "You can upload up to ",
      maxFiles,
      " images (",
      totalCount,
      "/",
      maxFiles,
      ")."
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminMultiImageUpload.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: inputRef, type: "file", accept: "image/*", multiple: true, disabled: disabled || !canAddMore, onChange: handleFileChange, className: "sr-only" }, void 0, false, {
      fileName: "app/components/admin/AdminMultiImageUpload.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", disabled: disabled || !canAddMore, onClick: () => inputRef.current?.click(), className: cn(adminInputClass, "mt-2 flex items-center justify-center gap-2 border-dashed text-slate-600 hover:border-emerald-300 hover:bg-emerald-50/50 disabled:cursor-not-allowed disabled:opacity-60"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImagePlus, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/components/admin/AdminMultiImageUpload.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      !canAddMore ? "Maximum images reached" : "Select images"
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminMultiImageUpload.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this),
    existingUrls.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mt-3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mb-2 text-xs font-medium text-slate-500", children: "Current images" }, void 0, false, {
        fileName: "app/components/admin/AdminMultiImageUpload.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-2 gap-3 sm:grid-cols-3", children: existingUrls.map((url, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: url, alt: "", className: "h-28 w-full object-cover" }, void 0, false, {
          fileName: "app/components/admin/AdminMultiImageUpload.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", disabled, onClick: () => removeExistingUrl(index), className: "absolute right-2 top-2 rounded-full bg-white/90 p-1 text-slate-600 shadow-sm transition hover:bg-white hover:text-rose-600", "aria-label": "Remove saved image", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/AdminMultiImageUpload.tsx",
          lineNumber: 77,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/admin/AdminMultiImageUpload.tsx",
          lineNumber: 76,
          columnNumber: 17
        }, this)
      ] }, url, true, {
        fileName: "app/components/admin/AdminMultiImageUpload.tsx",
        lineNumber: 74,
        columnNumber: 47
      }, this)) }, void 0, false, {
        fileName: "app/components/admin/AdminMultiImageUpload.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminMultiImageUpload.tsx",
      lineNumber: 71,
      columnNumber: 34
    }, this) : null,
    files.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3", children: files.map((file, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: previews[index], alt: file.name, className: "h-28 w-full object-cover" }, void 0, false, {
        fileName: "app/components/admin/AdminMultiImageUpload.tsx",
        lineNumber: 85,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", disabled, onClick: () => removeFile(index), className: "absolute right-2 top-2 rounded-full bg-white/90 p-1 text-slate-600 shadow-sm transition hover:bg-white hover:text-rose-600", "aria-label": `Remove ${file.name}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/components/admin/AdminMultiImageUpload.tsx",
        lineNumber: 87,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/admin/AdminMultiImageUpload.tsx",
        lineNumber: 86,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "truncate px-2 py-1 text-xs text-slate-500", children: file.name }, void 0, false, {
        fileName: "app/components/admin/AdminMultiImageUpload.tsx",
        lineNumber: 89,
        columnNumber: 15
      }, this)
    ] }, `${file.name}-${file.lastModified}-${index}`, true, {
      fileName: "app/components/admin/AdminMultiImageUpload.tsx",
      lineNumber: 84,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/components/admin/AdminMultiImageUpload.tsx",
      lineNumber: 83,
      columnNumber: 27
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminMultiImageUpload.tsx",
    lineNumber: 58,
    columnNumber: 10
  }, this);
};
_s(AdminMultiImageUpload, "1tquD6k4ZmC5UhI+EZ/9xgiRJf4=");
_c = AdminMultiImageUpload;
var AdminMultiImageUpload_default = AdminMultiImageUpload;
var _c;
$RefreshReg$(_c, "AdminMultiImageUpload");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/AdminPagination.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\AdminPagination.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\AdminPagination.tsx"
  );
  import.meta.hot.lastModified = "1779416129015.7356";
}
var navButtonClass = "inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-white disabled:hover:text-slate-600";
var AdminPagination = ({
  page,
  totalPages,
  totalItems,
  pageSize,
  rangeStart,
  rangeEnd,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [5, 10, 20, 50],
  itemLabel = "records",
  className
}) => {
  if (totalItems === 0) {
    return null;
  }
  const pageNumbers = getPageNumbers(page, totalPages);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: cn("flex flex-col gap-4 border-t border-slate-100 bg-slate-50/50 px-4 py-4 sm:flex-row sm:items-center sm:justify-between", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm text-slate-500", children: [
      "Showing",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-semibold text-slate-700", children: [
        rangeStart,
        "\u2013",
        rangeEnd
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminPagination.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      " ",
      "of ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-semibold text-slate-700", children: totalItems }, void 0, false, {
        fileName: "app/components/admin/AdminPagination.tsx",
        lineNumber: 47,
        columnNumber: 12
      }, this),
      " ",
      itemLabel
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminPagination.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-wrap items-center gap-3", children: [
      onPageSizeChange ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "flex items-center gap-2 text-sm text-slate-600", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "whitespace-nowrap", children: "Per page" }, void 0, false, {
          fileName: "app/components/admin/AdminPagination.tsx",
          lineNumber: 52,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("select", { value: pageSize, onChange: (event) => onPageSizeChange(Number(event.target.value)), className: "rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20", children: pageSizeOptions.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("option", { value: option, children: option }, option, false, {
          fileName: "app/components/admin/AdminPagination.tsx",
          lineNumber: 54,
          columnNumber: 46
        }, this)) }, void 0, false, {
          fileName: "app/components/admin/AdminPagination.tsx",
          lineNumber: 53,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminPagination.tsx",
        lineNumber: 51,
        columnNumber: 29
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "flex items-center gap-1", "aria-label": "Pagination", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => onPageChange(1), disabled: page <= 1, className: navButtonClass, "aria-label": "First page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronsLeft, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/AdminPagination.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/admin/AdminPagination.tsx",
          lineNumber: 61,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => onPageChange(page - 1), disabled: page <= 1, className: navButtonClass, "aria-label": "Previous page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronLeft, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/AdminPagination.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/admin/AdminPagination.tsx",
          lineNumber: 64,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "hidden items-center gap-1 sm:flex", children: pageNumbers.map((pageNumber, index) => pageNumber === "ellipsis" ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "px-2 text-sm text-slate-400", "aria-hidden": true, children: "\u2026" }, `ellipsis-${index}`, false, {
          fileName: "app/components/admin/AdminPagination.tsx",
          lineNumber: 69,
          columnNumber: 81
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => onPageChange(pageNumber), "aria-current": pageNumber === page ? "page" : void 0, className: cn("inline-flex h-9 min-w-9 items-center justify-center rounded-xl px-2 text-sm font-semibold transition", pageNumber === page ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/25" : "border border-slate-200 bg-white text-slate-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"), children: pageNumber }, pageNumber, false, {
          fileName: "app/components/admin/AdminPagination.tsx",
          lineNumber: 71,
          columnNumber: 27
        }, this)) }, void 0, false, {
          fileName: "app/components/admin/AdminPagination.tsx",
          lineNumber: 68,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "px-2 text-sm font-medium text-slate-600 sm:hidden", children: [
          page,
          " / ",
          totalPages
        ] }, void 0, true, {
          fileName: "app/components/admin/AdminPagination.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => onPageChange(page + 1), disabled: page >= totalPages, className: navButtonClass, "aria-label": "Next page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronRight, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/AdminPagination.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/admin/AdminPagination.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => onPageChange(totalPages), disabled: page >= totalPages, className: navButtonClass, "aria-label": "Last page", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ChevronsRight, { className: "h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/AdminPagination.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this) }, void 0, false, {
          fileName: "app/components/admin/AdminPagination.tsx",
          lineNumber: 83,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/AdminPagination.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminPagination.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminPagination.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
};
_c2 = AdminPagination;
function getPageNumbers(current, total) {
  if (total <= 7) {
    return Array.from({
      length: total
    }, (_, index) => index + 1);
  }
  const pages = [1];
  if (current > 3) {
    pages.push("ellipsis");
  }
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let page = start; page <= end; page += 1) {
    pages.push(page);
  }
  if (current < total - 2) {
    pages.push("ellipsis");
  }
  pages.push(total);
  return pages;
}
var AdminPagination_default = AdminPagination;
var _c2;
$RefreshReg$(_c2, "AdminPagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/AdminTable.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\AdminTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\AdminTable.tsx"
  );
  import.meta.hot.lastModified = "1779368862715.4878";
}
var AdminTable = ({
  columns,
  data,
  emptyMessage = "No records yet.",
  getRowKey,
  isLoading = false,
  className
}) => {
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "rounded-3xl border border-slate-200 bg-slate-50/80 p-10 text-center text-sm text-slate-500", children: "Loading..." }, void 0, false, {
      fileName: "app/components/admin/AdminTable.tsx",
      lineNumber: 31,
      columnNumber: 12
    }, this);
  }
  if (data.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-center text-slate-500", children: emptyMessage }, void 0, false, {
      fileName: "app/components/admin/AdminTable.tsx",
      lineNumber: 36,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: cn("overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm", className), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "admin-scrollbar overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("table", { className: "min-w-full divide-y divide-slate-200 text-left text-sm", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("thead", { className: "bg-slate-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("th", { scope: "col", className: cn("px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500", column.className), children: column.header }, column.id, false, {
      fileName: "app/components/admin/AdminTable.tsx",
      lineNumber: 45,
      columnNumber: 38
    }, this)) }, void 0, false, {
      fileName: "app/components/admin/AdminTable.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/admin/AdminTable.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tbody", { className: "divide-y divide-slate-100", children: data.map((row) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("tr", { className: "transition hover:bg-slate-50/80", children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("td", { className: cn("px-4 py-4 align-top text-slate-700", column.className), children: column.cell(row) }, column.id, false, {
      fileName: "app/components/admin/AdminTable.tsx",
      lineNumber: 52,
      columnNumber: 40
    }, this)) }, getRowKey(row), false, {
      fileName: "app/components/admin/AdminTable.tsx",
      lineNumber: 51,
      columnNumber: 30
    }, this)) }, void 0, false, {
      fileName: "app/components/admin/AdminTable.tsx",
      lineNumber: 50,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminTable.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/admin/AdminTable.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/admin/AdminTable.tsx",
    lineNumber: 40,
    columnNumber: 10
  }, this);
};
_c3 = AdminTable;
var AdminTable_default = AdminTable;
var _c3;
$RefreshReg$(_c3, "AdminTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/useAdminPagination.ts
var import_react2 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\useAdminPagination.ts"
  );
  import.meta.hot.lastModified = "1779415916052.8774";
}
function useAdminPagination(items, { pageSize = 10, initialPage = 1 } = {}) {
  const [page, setPage] = (0, import_react2.useState)(initialPage);
  const [perPage, setPerPage] = (0, import_react2.useState)(pageSize);
  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  (0, import_react2.useEffect)(() => {
    if (page !== currentPage) {
      setPage(currentPage);
    }
  }, [page, currentPage]);
  (0, import_react2.useEffect)(() => {
    setPage(1);
  }, [perPage]);
  const paginatedItems = (0, import_react2.useMemo)(() => {
    const start = (currentPage - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [items, currentPage, perPage]);
  const rangeStart = totalItems === 0 ? 0 : (currentPage - 1) * perPage + 1;
  const rangeEnd = Math.min(currentPage * perPage, totalItems);
  const goToPage = (nextPage) => {
    setPage(Math.min(Math.max(1, nextPage), totalPages));
  };
  const goToFirst = () => goToPage(1);
  const goToLast = () => goToPage(totalPages);
  const goToPrevious = () => goToPage(currentPage - 1);
  const goToNext = () => goToPage(currentPage + 1);
  return {
    page: currentPage,
    setPage: goToPage,
    pageSize: perPage,
    setPageSize: setPerPage,
    totalPages,
    totalItems,
    paginatedItems,
    rangeStart,
    rangeEnd,
    goToFirst,
    goToLast,
    goToPrevious,
    goToNext,
    canGoPrevious: currentPage > 1,
    canGoNext: currentPage < totalPages
  };
}

// app/components/admin/AdminPaginatedTable.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\AdminPaginatedTable.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\AdminPaginatedTable.tsx"
  );
  import.meta.hot.lastModified = "1779369819336.8306";
}
var AdminPaginatedTable = ({
  columns,
  data,
  getRowKey,
  emptyMessage,
  isLoading = false,
  className,
  itemLabel = "records",
  pagination,
  showPageSizeSelect = true
}) => {
  _s2();
  const {
    paginatedItems,
    page,
    setPage,
    pageSize,
    setPageSize,
    totalPages,
    totalItems,
    rangeStart,
    rangeEnd
  } = useAdminPagination(data, pagination);
  if (isLoading) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AdminTable_default, { columns, data: [], getRowKey, isLoading: true, emptyMessage, className }, void 0, false, {
      fileName: "app/components/admin/AdminPaginatedTable.tsx",
      lineNumber: 50,
      columnNumber: 12
    }, this);
  }
  if (totalItems === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AdminTable_default, { columns, data: [], getRowKey, emptyMessage, className }, void 0, false, {
      fileName: "app/components/admin/AdminPaginatedTable.tsx",
      lineNumber: 53,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: cn("overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm", className), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "admin-scrollbar overflow-x-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("table", { className: "min-w-full divide-y divide-slate-200 text-left text-sm", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("thead", { className: "bg-slate-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tr", { children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("th", { scope: "col", className: cn("px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500", column.className), children: column.header }, column.id, false, {
        fileName: "app/components/admin/AdminPaginatedTable.tsx",
        lineNumber: 60,
        columnNumber: 38
      }, this)) }, void 0, false, {
        fileName: "app/components/admin/AdminPaginatedTable.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/AdminPaginatedTable.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tbody", { className: "divide-y divide-slate-100", children: paginatedItems.map((row) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("tr", { className: "transition hover:bg-slate-50/80", children: columns.map((column) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("td", { className: cn("px-4 py-4 align-top text-slate-700", column.className), children: column.cell(row) }, column.id, false, {
        fileName: "app/components/admin/AdminPaginatedTable.tsx",
        lineNumber: 67,
        columnNumber: 40
      }, this)) }, getRowKey(row), false, {
        fileName: "app/components/admin/AdminPaginatedTable.tsx",
        lineNumber: 66,
        columnNumber: 40
      }, this)) }, void 0, false, {
        fileName: "app/components/admin/AdminPaginatedTable.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminPaginatedTable.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/AdminPaginatedTable.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AdminPagination_default, { page, totalPages, totalItems, pageSize, rangeStart, rangeEnd, onPageChange: setPage, onPageSizeChange: showPageSizeSelect ? setPageSize : void 0, itemLabel }, void 0, false, {
      fileName: "app/components/admin/AdminPaginatedTable.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminPaginatedTable.tsx",
    lineNumber: 55,
    columnNumber: 10
  }, this);
};
_s2(AdminPaginatedTable, "KfQud4y5If+xMcNuH4Pgmz3fifk=", false, function() {
  return [useAdminPagination];
});
_c4 = AdminPaginatedTable;
var AdminPaginatedTable_default = AdminPaginatedTable;
var _c4;
$RefreshReg$(_c4, "AdminPaginatedTable");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  AdminMultiImageUpload_default,
  AdminPaginatedTable_default
};
//# sourceMappingURL=/build/_shared/chunk-CI3KMCPB.js.map
