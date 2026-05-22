import {
  AdminModal_default
} from "/build/_shared/chunk-WHS3PIMC.js";
import {
  cn
} from "/build/_shared/chunk-QHNS7JQF.js";
import {
  useAdminToast
} from "/build/_shared/chunk-PIOGO2FW.js";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  ExternalLink,
  ImagePlus,
  Plus,
  Table,
  Trash2,
  X
} from "/build/_shared/chunk-QYKKIRSI.js";
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

// app/components/admin/LavStationModule.tsx
var import_react3 = __toESM(require_react(), 1);

// app/components/admin/AdminMultiImageUpload.tsx
var import_react = __toESM(require_react(), 1);

// app/components/admin/adminFormStyles.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\adminFormStyles.ts"
  );
  import.meta.hot.lastModified = "1779368856887.001";
}
var adminInputClass = "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20";

// app/components/admin/AdminMultiImageUpload.tsx
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
  import.meta.hot.lastModified = "1779368929952.4426";
}
var AdminMultiImageUpload = ({
  files,
  onChange,
  maxFiles = 10,
  disabled = false,
  label = "Images"
}) => {
  _s();
  const inputRef = (0, import_react.useRef)(null);
  const [previews, setPreviews] = (0, import_react.useState)([]);
  (0, import_react.useEffect)(() => {
    const urls = files.map((file) => URL.createObjectURL(file));
    setPreviews(urls);
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [files]);
  const handleFileChange = (event) => {
    const selected = Array.from(event.target.files ?? []);
    const merged = [...files, ...selected].slice(0, maxFiles);
    onChange(merged);
    event.target.value = "";
  };
  const removeFile = (index) => {
    onChange(files.filter((_, fileIndex) => fileIndex !== index));
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "block", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-slate-700", children: label }, void 0, false, {
      fileName: "app/components/admin/AdminMultiImageUpload.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-1 text-xs text-slate-500", children: [
      "Pwede kang mag-upload ng hanggang ",
      maxFiles,
      " images. I-upload sa Cloudinary kapag nag-save."
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminMultiImageUpload.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { ref: inputRef, type: "file", accept: "image/*", multiple: true, disabled: disabled || files.length >= maxFiles, onChange: handleFileChange, className: "sr-only" }, void 0, false, {
      fileName: "app/components/admin/AdminMultiImageUpload.tsx",
      lineNumber: 56,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", disabled: disabled || files.length >= maxFiles, onClick: () => inputRef.current?.click(), className: cn(adminInputClass, "mt-2 flex items-center justify-center gap-2 border-dashed text-slate-600 hover:border-emerald-300 hover:bg-emerald-50/50 disabled:cursor-not-allowed disabled:opacity-60"), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ImagePlus, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/components/admin/AdminMultiImageUpload.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      files.length >= maxFiles ? "Maximum images reached" : "Pumili ng images"
    ] }, void 0, true, {
      fileName: "app/components/admin/AdminMultiImageUpload.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    files.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3", children: files.map((file, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: previews[index], alt: file.name, className: "h-28 w-full object-cover" }, void 0, false, {
        fileName: "app/components/admin/AdminMultiImageUpload.tsx",
        lineNumber: 65,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", disabled, onClick: () => removeFile(index), className: "absolute right-2 top-2 rounded-full bg-white/90 p-1 text-slate-600 shadow-sm transition hover:bg-white hover:text-rose-600", "aria-label": `Remove ${file.name}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "h-4 w-4" }, void 0, false, {
        fileName: "app/components/admin/AdminMultiImageUpload.tsx",
        lineNumber: 67,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/components/admin/AdminMultiImageUpload.tsx",
        lineNumber: 66,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "truncate px-2 py-1 text-xs text-slate-500", children: file.name }, void 0, false, {
        fileName: "app/components/admin/AdminMultiImageUpload.tsx",
        lineNumber: 69,
        columnNumber: 15
      }, this)
    ] }, `${file.name}-${file.lastModified}-${index}`, true, {
      fileName: "app/components/admin/AdminMultiImageUpload.tsx",
      lineNumber: 64,
      columnNumber: 39
    }, this)) }, void 0, false, {
      fileName: "app/components/admin/AdminMultiImageUpload.tsx",
      lineNumber: 63,
      columnNumber: 27
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/components/admin/AdminMultiImageUpload.tsx",
    lineNumber: 50,
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
  import.meta.hot.lastModified = "1779415825215.4778";
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

// app/lib/cloudinary.client.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\lib\\cloudinary.client.ts"
  );
  import.meta.hot.lastModified = "1779369233688.3213";
}
async function uploadImagesToCloudinary(files, config) {
  const { cloudName, uploadPreset } = config;
  if (!cloudName || !uploadPreset) {
    throw new Error(
      "Cloudinary configuration is missing. Set VITE_CLOUDINARY_CLOUD_NAME and VITE_CLOUDINARY_UPLOAD_PRESET in your .env file."
    );
  }
  const uploads = files.map(async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      { method: "POST", body: formData }
    );
    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Cloudinary upload failed: ${errorBody}`);
    }
    const result = await response.json();
    if (!result.secure_url) {
      throw new Error("Cloudinary did not return a secure_url.");
    }
    return result.secure_url;
  });
  return Promise.all(uploads);
}

// app/components/admin/LavStationModule.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\LavStationModule.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\LavStationModule.tsx"
  );
  import.meta.hot.lastModified = "1779434393484.9219";
}
var formatDate = (iso) => {
  if (!iso)
    return "\u2014";
  try {
    return new Date(iso).toLocaleDateString("en-PH", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  } catch {
    return "\u2014";
  }
};
var LavStationModule = ({
  stations,
  fetcher,
  cloudinary
}) => {
  _s3();
  const [isModalOpen, setModalOpen] = (0, import_react3.useState)(false);
  const [title, setTitle] = (0, import_react3.useState)("");
  const [description, setDescription] = (0, import_react3.useState)("");
  const [youtubeLink, setYoutubeLink] = (0, import_react3.useState)("");
  const [imageFiles, setImageFiles] = (0, import_react3.useState)([]);
  const [isUploading, setIsUploading] = (0, import_react3.useState)(false);
  const toast = useAdminToast();
  const formRef = (0, import_react3.useRef)(null);
  const wasSubmitting = (0, import_react3.useRef)(false);
  const isBusy = isUploading || fetcher.state !== "idle";
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setYoutubeLink("");
    setImageFiles([]);
    formRef.current?.reset();
  };
  const closeModal = () => {
    if (isBusy)
      return;
    setModalOpen(false);
    resetForm();
  };
  (0, import_react3.useEffect)(() => {
    if (fetcher.state === "submitting") {
      wasSubmitting.current = true;
    }
    if (wasSubmitting.current && fetcher.state === "idle") {
      wasSubmitting.current = false;
      if (fetcher.data?.error) {
        toast.error(fetcher.data.error);
        return;
      }
      if (fetcher.data?.ok) {
        toast.success(fetcher.data.message ?? "Lav station saved successfully.");
        setModalOpen(false);
        resetForm();
      }
    }
  }, [fetcher.state, fetcher.data, toast.error, toast.success]);
  const handleSave = async () => {
    if (!title.trim()) {
      toast.error("Title is required.");
      return;
    }
    if (!description.trim()) {
      toast.error("Description is required.");
      return;
    }
    if (imageFiles.length > 0 && !cloudinary) {
      toast.error("Image upload is not configured.");
      return;
    }
    setIsUploading(true);
    try {
      const imageUrls = imageFiles.length > 0 && cloudinary ? await uploadImagesToCloudinary(imageFiles, cloudinary) : [];
      fetcher.submit({
        intent: "create-lav-station",
        title: title.trim(),
        description: description.trim(),
        youtubeLink: youtubeLink.trim(),
        images: JSON.stringify(imageUrls)
      }, {
        method: "post"
      });
    } catch (error) {
      toast.error("Failed to upload images. Please try again.");
      toast.error(error instanceof Error ? error.message : "An unknown error occurred during image upload.");
    } finally {
      setIsUploading(false);
    }
  };
  const handleDelete = (id) => {
    if (!confirm("Delete this lav station?"))
      return;
    fetcher.submit({
      intent: "delete-lav-station",
      id
    }, {
      method: "post"
    });
  };
  const columns = [{
    id: "title",
    header: "Title",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "font-semibold text-slate-900", children: row.title || "\u2014" }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 131,
      columnNumber: 18
    }, this)
  }, {
    id: "description",
    header: "Description",
    className: "max-w-xs",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "line-clamp-2 text-slate-600", children: row.description || "\u2014" }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 136,
      columnNumber: 18
    }, this)
  }, {
    id: "images",
    header: "Images",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      row.images.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: row.images[0], alt: row.title, className: "h-10 w-10 rounded-lg border border-slate-200 object-cover" }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 141,
        columnNumber: 36
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-slate-600", children: [
        row.images.length,
        " image(s)"
      ] }, void 0, true, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 142,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 140,
      columnNumber: 18
    }, this)
  }, {
    id: "youtube",
    header: "YouTube",
    cell: (row) => row.youtubeLink ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("a", { href: row.youtubeLink, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1 font-medium text-emerald-600 hover:text-emerald-700", children: [
      "View",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ExternalLink, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 147,
      columnNumber: 36
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-slate-400", children: "\u2014" }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 150,
      columnNumber: 18
    }, this)
  }, {
    id: "createdAt",
    header: "Created",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-slate-600", children: formatDate(row.createdAt) }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 154,
      columnNumber: 18
    }, this)
  }, {
    id: "actions",
    header: "Actions",
    className: "w-24",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", onClick: () => handleDelete(row.id), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Trash2, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 160,
        columnNumber: 11
      }, this),
      "Delete"
    ] }, void 0, true, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 159,
      columnNumber: 18
    }, this)
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "LAV STATION" }, void 0, false, {
          fileName: "app/components/admin/LavStationModule.tsx",
          lineNumber: 167,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Manage lav station info" }, void 0, false, {
          fileName: "app/components/admin/LavStationModule.tsx",
          lineNumber: 170,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Add and manage information about your lav stations." }, void 0, false, {
          fileName: "app/components/admin/LavStationModule.tsx",
          lineNumber: 171,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 166,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", className: "flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", onClick: () => setModalOpen(true), disabled: isBusy, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/LavStationModule.tsx",
          lineNumber: 177,
          columnNumber: 11
        }, this),
        "Add lav station"
      ] }, void 0, true, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AdminPaginatedTable_default, { columns, data: stations, getRowKey: (row) => row.id, isLoading: fetcher.state === "loading", emptyMessage: 'No lav stations yet. Use "Add lav station" to create one.', itemLabel: "lav stations", pagination: {
      pageSize: 5
    } }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 182,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AdminModal_default, { open: isModalOpen, onOpenChange: (open) => open ? setModalOpen(true) : closeModal(), title: "Add Lav Station", description: "Fill in the details. Images upload to Cloudinary; data saves to Firestore.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", onClick: closeModal, disabled: isBusy, className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 187,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", onClick: handleSave, disabled: isBusy, className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: isUploading ? "Uploading images..." : fetcher.state === "submitting" ? "Saving..." : "Save lav station" }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 190,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 186,
      columnNumber: 233
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { ref: formRef, className: "space-y-4", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Title lav station",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "text", name: "title", value: title, onChange: (event) => setTitle(event.target.value), placeholder: "Lav station title, e.g. 'Main Lav Station near the rice fields'", className: adminInputClass, required: true }, void 0, false, {
          fileName: "app/components/admin/LavStationModule.tsx",
          lineNumber: 197,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Description",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("textarea", { name: "description", value: description, onChange: (event) => setDescription(event.target.value), placeholder: "Brief description of the lav station", className: `${adminInputClass} admin-scrollbar resize-none`, rows: 4, required: true }, void 0, false, {
          fileName: "app/components/admin/LavStationModule.tsx",
          lineNumber: 202,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 200,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AdminMultiImageUpload_default, { files: imageFiles, onChange: setImageFiles, disabled: isBusy, maxFiles: 20 }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 205,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Youtube video link",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "url", name: "youtubeLink", value: youtubeLink, onChange: (event) => setYoutubeLink(event.target.value), placeholder: "https://www.youtube.com/watch?v=...", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/LavStationModule.tsx",
          lineNumber: 209,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 207,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 194,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/LavStationModule.tsx",
    lineNumber: 164,
    columnNumber: 10
  }, this);
};
_s3(LavStationModule, "PMX9gU+MOCnFQVI9TEwcCsC9KNU=", false, function() {
  return [useAdminToast];
});
_c5 = LavStationModule;
var _c5;
$RefreshReg$(_c5, "LavStationModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/RiceDerbiesModule.tsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\RiceDerbiesModule.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\RiceDerbiesModule.tsx"
  );
  import.meta.hot.lastModified = "1779437494326.7532";
}
var formatDate2 = (iso) => {
  if (!iso)
    return "-";
  try {
    return new Date(iso).toLocaleDateString("en-PH", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  } catch {
    return "-";
  }
};
var RiceDerbiesModule = ({
  derbies,
  fetcher,
  cloudinaryConfig
}) => {
  _s4();
  const [isModalOpen, setModalOpen] = (0, import_react4.useState)(false);
  const [title, setTitle] = (0, import_react4.useState)("");
  const [description, setDescription] = (0, import_react4.useState)("");
  const [youtubeLink, setYoutubeLink] = (0, import_react4.useState)("");
  const [imageFiles, setImageFiles] = (0, import_react4.useState)([]);
  const [isUploading, setIsUploading] = (0, import_react4.useState)(false);
  const toast = useAdminToast();
  const formRef = (0, import_react4.useRef)(null);
  const wasSubmitting = (0, import_react4.useRef)(false);
  const isBusy = isUploading || fetcher.state !== "idle";
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setYoutubeLink("");
    setImageFiles([]);
    formRef.current?.reset();
  };
  const closeModal = () => {
    if (isBusy)
      return;
    setModalOpen(false);
    resetForm();
  };
  (0, import_react4.useEffect)(() => {
    if (fetcher.state === "submitting") {
      wasSubmitting.current = true;
    }
    if (wasSubmitting.current && fetcher.state === "idle") {
      wasSubmitting.current = false;
      if (fetcher.data?.error) {
        toast.error(fetcher.data.error);
        return;
      }
      if (fetcher.data?.ok) {
        toast.success(fetcher.data.message ?? "Rice derbies created successfully.");
        setModalOpen(false);
        resetForm();
      }
    }
  }, [fetcher.state, fetcher.data, toast.error, toast.success]);
  const handleSave = async () => {
    if (!title.trim()) {
      toast.error("Title is required.");
      return;
    }
    if (!description.trim()) {
      toast.error("Description is required.");
      return;
    }
    if (imageFiles.length > 0 && !cloudinaryConfig) {
      toast.error("Image upload is not configured.");
      return;
    }
    setIsUploading(true);
    try {
      const imageUrls = imageFiles.length > 0 && cloudinaryConfig ? await uploadImagesToCloudinary(imageFiles, cloudinaryConfig) : [];
      fetcher.submit({
        intent: "create-rice-derbies",
        title: title.trim(),
        description: description.trim(),
        youtubeLink: youtubeLink.trim(),
        images: JSON.stringify(imageUrls)
      }, {
        method: "post"
      });
    } catch (error) {
      toast.error("Failed to upload images. Please try again.");
      toast.error(error instanceof Error ? error.message : "An unknown error occurred during image upload.");
    } finally {
      setIsUploading(false);
    }
  };
  const handleDelete = (id) => {
    if (!confirm("Are you sure you want to delete this rice derbies? This action cannot be undone."))
      return;
    fetcher.submit({
      intent: "delete-rice-derbies",
      id
    }, {
      method: "post"
    });
  };
  const columns = [{
    id: "title",
    header: "Title",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "font-semibold text-slate-900", children: row.title || "-" }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 131,
      columnNumber: 18
    }, this)
  }, {
    id: "description",
    header: "Description",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "line-clamp-2 text-slate-600", children: row.description || "-" }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 135,
      columnNumber: 18
    }, this)
  }, {
    id: "images",
    header: "Images",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      row.images.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { src: row.images[0], alt: row.title, className: "h-10 w-10 rounded-lg border border-slate-200 object-cover" }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 140,
        columnNumber: 46
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-slate-600", children: [
        row.images.length,
        " images(s)"
      ] }, void 0, true, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 141,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 139,
      columnNumber: 18
    }, this)
  }, {
    id: "youtube",
    header: "YouTube",
    cell: (row) => row.youtubeLink ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: row.youtubeLink, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1 font-medium text-emerald-600 hover-emerald-700", children: [
      "View",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(ExternalLink, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 148,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 146,
      columnNumber: 36
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-slate-400", children: "-" }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 149,
      columnNumber: 28
    }, this)
  }, {
    id: "createdAt",
    header: "Created At",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-slate-600", children: formatDate2(row.createdAt) }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 153,
      columnNumber: 18
    }, this)
  }, {
    id: "actions",
    header: "Actions",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "button", onClick: () => handleDelete(row.id), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Table, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 158,
        columnNumber: 21
      }, this),
      "Delete"
    ] }, void 0, true, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 157,
      columnNumber: 18
    }, this)
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "RICE DERBIES" }, void 0, false, {
          fileName: "app/components/admin/RiceDerbiesModule.tsx",
          lineNumber: 165,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Manage rice derbies" }, void 0, false, {
          fileName: "app/components/admin/RiceDerbiesModule.tsx",
          lineNumber: 166,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Add and manage information about your rice derbies." }, void 0, false, {
          fileName: "app/components/admin/RiceDerbiesModule.tsx",
          lineNumber: 167,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 164,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "button", onClick: () => setModalOpen(true), className: "flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/RiceDerbiesModule.tsx",
          lineNumber: 173,
          columnNumber: 17
        }, this),
        "Add rice derbies"
      ] }, void 0, true, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 172,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 163,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AdminPaginatedTable_default, { columns, data: derbies, getRowKey: (row) => row.id, isLoading: fetcher.state === "loading", emptyMessage: 'No rice derbies yet. Use "Add rice derbies" to create one.', itemLabel: "rice derbies", pagination: {
      pageSize: 5
    } }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 178,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AdminModal_default, { open: isModalOpen, onOpenChange: (open) => open ? setModalOpen(true) : closeModal(), title: "Add Rice Derbies", description: "Fill in the details for the new rice derbies.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "button", onClick: closeModal, disabled: isBusy, className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 182,
        columnNumber: 23
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "button", onClick: handleSave, disabled: isBusy, className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400", children: isUploading ? "Uploading images..." : fetcher.state === "submitting" ? "Saving..." : "Save rice derbies" }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 185,
        columnNumber: 23
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 181,
      columnNumber: 211
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { ref: formRef, className: "space-y-4", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Title rice derbies",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "text", name: "title", value: title, onChange: (event) => setTitle(event.target.value), placeholder: 'Rice Derbies title, e.g. "2024 Harvest Festival Rice Derbies"', className: adminInputClass, required: true }, void 0, false, {
          fileName: "app/components/admin/RiceDerbiesModule.tsx",
          lineNumber: 192,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 190,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Description",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("textarea", { name: "content", value: description, onChange: (event) => setDescription(event.target.value), placeholder: "Brief description of the rice derbies", className: `${adminInputClass} admin-scrollbar resize-none`, rows: 4, required: true }, void 0, false, {
          fileName: "app/components/admin/RiceDerbiesModule.tsx",
          lineNumber: 196,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 194,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AdminMultiImageUpload_default, { files: imageFiles, onChange: setImageFiles, disabled: isBusy, maxFiles: 20 }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 198,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "YouTube Link",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "url", name: "youtubeLink", value: youtubeLink, onChange: (event) => setYoutubeLink(event.target.value), placeholder: "https://www.youtube.com/watch?v=example", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/RiceDerbiesModule.tsx",
          lineNumber: 201,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 199,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 189,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 181,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/RiceDerbiesModule.tsx",
    lineNumber: 162,
    columnNumber: 10
  }, this);
};
_s4(RiceDerbiesModule, "PMX9gU+MOCnFQVI9TEwcCsC9KNU=", false, function() {
  return [useAdminToast];
});
_c6 = RiceDerbiesModule;
var _c6;
$RefreshReg$(_c6, "RiceDerbiesModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  LavStationModule,
  RiceDerbiesModule
};
//# sourceMappingURL=/build/_shared/chunk-MWXIN6PT.js.map
