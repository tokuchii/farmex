import {
  AdminMultiImageUpload_default,
  AdminPaginatedTable_default,
  adminInputClass,
  uploadImagesToCloudinary
} from "/build/_shared/chunk-2T37EEZG.js";
import {
  AdminModal_default,
  DeleteConfirmationModal_default
} from "/build/_shared/chunk-SCF47TFB.js";
import {
  cn
} from "/build/_shared/chunk-UF6K54N4.js";
import {
  useAdminToast
} from "/build/_shared/chunk-VYS3PCQI.js";
import {
  ExternalLink,
  Pencil,
  Plus,
  Trash2
} from "/build/_shared/chunk-HHCPKSUZ.js";
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
var import_react = __toESM(require_react(), 1);

// app/components/admin/AdminActiveToggle.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\AdminActiveToggle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\AdminActiveToggle.tsx"
  );
  import.meta.hot.lastModified = "1779630305069.252";
}
var AdminActiveToggle = ({
  active,
  disabled,
  onToggle
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: onToggle, disabled, "aria-pressed": active, className: cn("min-w-[3.25rem] rounded-xl px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40", active ? "bg-emerald-500 text-white hover:bg-emerald-400" : "border border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200", disabled && "cursor-not-allowed opacity-60"), children: active ? "On" : "Off" }, void 0, false, {
  fileName: "app/components/admin/AdminActiveToggle.tsx",
  lineNumber: 26,
  columnNumber: 7
}, this);
_c = AdminActiveToggle;
var AdminActiveToggle_default = AdminActiveToggle;
var _c;
$RefreshReg$(_c, "AdminActiveToggle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/LavStationModule.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\LavStationModule.tsx"
  );
  import.meta.hot.lastModified = "1781440729070.3162";
}
var EMPTY_LIST_ITEM = "";
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
var updateListItem = (items, index, value) => {
  const next = [...items];
  next[index] = value;
  return next;
};
var addListItem = (items) => [...items, EMPTY_LIST_ITEM];
var removeListItem = (items, index) => items.length === 1 ? [EMPTY_LIST_ITEM] : items.filter((_, itemIndex) => itemIndex !== index);
var trimNonEmpty = (items) => items.map((item) => item.trim()).filter(Boolean);
var toEditableList = (items) => items.length > 0 ? items : [EMPTY_LIST_ITEM];
var StringListField = ({
  label,
  items,
  onChange,
  addLabel,
  inputType = "text",
  placeholder,
  multiline = false,
  disabled = false
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-3", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm font-medium text-slate-700", children: label }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => onChange(addListItem(items)), disabled, className: "inline-flex items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 disabled:opacity-60", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Plus, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      addLabel
    ] }, void 0, true, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/LavStationModule.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-2", children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-start gap-2", children: [
    multiline ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("textarea", { value: item, onChange: (event) => onChange(updateListItem(items, index, event.target.value)), placeholder, className: `${adminInputClass} admin-scrollbar min-h-[88px] flex-1 resize-none`, rows: 3, disabled }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 74,
      columnNumber: 24
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: inputType, value: item, onChange: (event) => onChange(updateListItem(items, index, event.target.value)), placeholder, className: `${adminInputClass} flex-1`, disabled }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 74,
      columnNumber: 267
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => onChange(removeListItem(items, index)), disabled, className: "mt-2 inline-flex shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-rose-700 transition hover:bg-rose-100 disabled:opacity-60", "aria-label": `Remove ${label.toLowerCase()} ${index + 1}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Trash2, { className: "h-4 w-4" }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this)
  ] }, `${label}-${index}`, true, {
    fileName: "app/components/admin/LavStationModule.tsx",
    lineNumber: 73,
    columnNumber: 35
  }, this)) }, void 0, false, {
    fileName: "app/components/admin/LavStationModule.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/admin/LavStationModule.tsx",
  lineNumber: 63,
  columnNumber: 7
}, this);
_c2 = StringListField;
var LavStationModule = ({
  stations,
  fetcher,
  cloudinary
}) => {
  _s();
  const [isModalOpen, setModalOpen] = (0, import_react.useState)(false);
  const [editingId, setEditingId] = (0, import_react.useState)(null);
  const [title, setTitle] = (0, import_react.useState)("");
  const [descriptions, setDescriptions] = (0, import_react.useState)([EMPTY_LIST_ITEM]);
  const [youtubeLinks, setYoutubeLinks] = (0, import_react.useState)([EMPTY_LIST_ITEM]);
  const [existingImages, setExistingImages] = (0, import_react.useState)([]);
  const [imageFiles, setImageFiles] = (0, import_react.useState)([]);
  const [isUploading, setIsUploading] = (0, import_react.useState)(false);
  const [pendingIntent, setPendingIntent] = (0, import_react.useState)(null);
  const [deleteTarget, setDeleteTarget] = (0, import_react.useState)(null);
  const toast = useAdminToast();
  const formRef = (0, import_react.useRef)(null);
  const wasSubmitting = (0, import_react.useRef)(false);
  const fetcherFormData = fetcher.formData;
  const isSubmitting = fetcher.state === "submitting";
  const isBusy = isUploading || isSubmitting;
  const isEditing = editingId !== null;
  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setDescriptions([EMPTY_LIST_ITEM]);
    setYoutubeLinks([EMPTY_LIST_ITEM]);
    setExistingImages([]);
    setImageFiles([]);
    formRef.current?.reset();
  };
  const openCreateModal = () => {
    resetForm();
    setModalOpen(true);
  };
  const openEditModal = (station) => {
    setEditingId(station.id);
    setTitle(station.title);
    setDescriptions(toEditableList(station.descriptions));
    setYoutubeLinks(toEditableList(station.youtubeLinks));
    setExistingImages([...station.images]);
    setImageFiles([]);
    setModalOpen(true);
  };
  const closeModal = () => {
    if (isUploading || isSubmitting)
      return;
    setModalOpen(false);
    resetForm();
  };
  (0, import_react.useEffect)(() => {
    if (fetcher.state === "submitting") {
      wasSubmitting.current = true;
    }
    if (wasSubmitting.current && fetcher.state === "idle") {
      wasSubmitting.current = false;
      if (fetcher.data?.error) {
        toast.error(fetcher.data.error);
        setPendingIntent(null);
        return;
      }
      if (fetcher.data?.ok && (pendingIntent === "create-lav-station" || pendingIntent === "update-lav-station")) {
        toast.success(fetcher.data.message ?? "Updated successfully.");
        setModalOpen(false);
        resetForm();
        setPendingIntent(null);
      }
    }
  }, [fetcher.state, fetcher.data, pendingIntent, toast.error, toast.success, toast]);
  const handleSave = async () => {
    const trimmedDescriptions = trimNonEmpty(descriptions);
    const trimmedYoutubeLinks = trimNonEmpty(youtubeLinks);
    if (!title.trim()) {
      toast.error("Title is required.");
      return;
    }
    if (trimmedDescriptions.length === 0) {
      toast.error("At least one description is required.");
      return;
    }
    if (imageFiles.length > 0 && !cloudinary) {
      toast.error("Image upload is not configured.");
      return;
    }
    setIsUploading(true);
    try {
      const newImageUrls = imageFiles.length > 0 && cloudinary ? await uploadImagesToCloudinary(imageFiles, cloudinary) : [];
      const allImages = [...existingImages, ...newImageUrls];
      if (allImages.length > 20) {
        toast.error("Maximum 20 images allowed.");
        return;
      }
      const payload = {
        title: title.trim(),
        descriptions: JSON.stringify(trimmedDescriptions),
        youtubeLinks: JSON.stringify(trimmedYoutubeLinks),
        images: JSON.stringify(allImages)
      };
      if (isEditing && editingId) {
        setPendingIntent("update-lav-station");
        fetcher.submit({
          intent: "update-lav-station",
          id: editingId,
          ...payload
        }, {
          method: "post"
        });
      } else {
        setPendingIntent("create-lav-station");
        fetcher.submit({
          intent: "create-lav-station",
          ...payload
        }, {
          method: "post"
        });
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to upload images. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };
  const handleDelete = (id, label) => {
    setDeleteTarget({
      id,
      label
    });
  };
  const handleConfirmDelete = () => {
    if (!deleteTarget)
      return;
    toast.success("Lav station deleted.");
    fetcher.submit({
      intent: "delete-lav-station",
      id: deleteTarget.id
    }, {
      method: "post"
    });
    setDeleteTarget(null);
  };
  const handleToggleActive = (id, nextActive) => {
    fetcher.submit({
      intent: "toggle-lav-station-active",
      id,
      active: nextActive ? "true" : "false"
    }, {
      method: "post"
    });
  };
  const isRowBusy = (id, intent) => fetcher.state !== "idle" && pendingIntent === intent && fetcherFormData?.get("id") === id;
  const columns = [{
    id: "title",
    header: "Title",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-semibold text-slate-900", children: row.title || "\u2014" }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 235,
      columnNumber: 18
    }, this)
  }, {
    id: "descriptions",
    header: "Descriptions",
    className: "max-w-xs",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1", children: row.descriptions.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "line-clamp-2 text-slate-600", children: row.descriptions[0] }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 242,
        columnNumber: 15
      }, this),
      row.descriptions.length > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs font-medium text-slate-400", children: [
        "+",
        row.descriptions.length - 1,
        " more"
      ] }, void 0, true, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 243,
        columnNumber: 46
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 241,
      columnNumber: 42
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-slate-400", children: "\u2014" }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 246,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 240,
      columnNumber: 18
    }, this)
  }, {
    id: "images",
    header: "Images",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      row.images.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { src: row.images[0], alt: row.title, className: "h-10 w-10 rounded-lg border border-slate-200 object-cover" }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 252,
        columnNumber: 36
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-slate-600", children: [
        row.images.length,
        " image(s)"
      ] }, void 0, true, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 253,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 251,
      columnNumber: 18
    }, this)
  }, {
    id: "youtube",
    header: "YouTube",
    cell: (row) => row.youtubeLinks.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-1", children: [
      row.youtubeLinks.slice(0, 2).map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("a", { href: link, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700", children: [
        "View",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExternalLink, { className: "h-3.5 w-3.5" }, void 0, false, {
          fileName: "app/components/admin/LavStationModule.tsx",
          lineNumber: 261,
          columnNumber: 17
        }, this)
      ] }, link, true, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 259,
        columnNumber: 55
      }, this)),
      row.youtubeLinks.length > 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-xs text-slate-400", children: [
        "+",
        row.youtubeLinks.length - 2,
        " more"
      ] }, void 0, true, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 263,
        columnNumber: 44
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 258,
      columnNumber: 48
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-slate-400", children: "\u2014" }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 266,
      columnNumber: 20
    }, this)
  }, {
    id: "createdAt",
    header: "Created",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-slate-600", children: formatDate(row.createdAt) }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 270,
      columnNumber: 18
    }, this)
  }, {
    id: "active",
    header: "Active",
    className: "w-28",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminActiveToggle_default, { active: row.active, disabled: isBusy || isRowBusy(row.id, "toggle-lav-station-active"), onToggle: () => handleToggleActive(row.id, !row.active) }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 275,
      columnNumber: 18
    }, this)
  }, {
    id: "actions",
    header: "Actions",
    className: "w-40",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => openEditModal(row), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Pencil, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 282,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 281,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => handleDelete(row.id, row.title || "this lav station"), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Trash2, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 285,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 284,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 280,
      columnNumber: 18
    }, this)
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "LAV STATION" }, void 0, false, {
          fileName: "app/components/admin/LavStationModule.tsx",
          lineNumber: 292,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Manage lav station info" }, void 0, false, {
          fileName: "app/components/admin/LavStationModule.tsx",
          lineNumber: 295,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Add and manage information about your lav stations." }, void 0, false, {
          fileName: "app/components/admin/LavStationModule.tsx",
          lineNumber: 296,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 291,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", className: "flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", onClick: openCreateModal, disabled: isBusy, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/LavStationModule.tsx",
          lineNumber: 302,
          columnNumber: 11
        }, this),
        "Add lav station"
      ] }, void 0, true, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 301,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 290,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminPaginatedTable_default, { columns, data: stations, getRowKey: (row) => row.id, isLoading: isSubmitting, emptyMessage: 'No lav stations yet. Use "Add lav station" to create one.', itemLabel: "lav stations", pagination: {
      pageSize: 5
    } }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 307,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminModal_default, { open: isModalOpen, onOpenChange: (open) => open ? setModalOpen(true) : closeModal(), title: isEditing ? "Edit Lav Station" : "Add Lav Station", description: isEditing ? "I-update ang details. Puwedeng magdagdag o mag-alis ng images, descriptions, at links." : "Fill in the details. Images upload to Cloudinary; data saves to Firestore.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: closeModal, disabled: isBusy, className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 312,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: handleSave, disabled: isBusy, className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: isUploading ? "Uploading images..." : fetcher.state === "submitting" ? "Saving..." : isEditing ? "Update lav station" : "Save lav station" }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 315,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 311,
      columnNumber: 373
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { ref: formRef, className: "space-y-5", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Title lav station",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "text", name: "title", value: title, onChange: (event) => setTitle(event.target.value), placeholder: "Lav station title, e.g. 'Main Lav Station near the rice fields'", className: adminInputClass, required: true }, void 0, false, {
          fileName: "app/components/admin/LavStationModule.tsx",
          lineNumber: 322,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 320,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringListField, { label: "Descriptions", items: descriptions, onChange: setDescriptions, addLabel: "Add description", placeholder: "Brief description of the lav station", multiline: true, disabled: isBusy }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 325,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminMultiImageUpload_default, { files: imageFiles, onChange: setImageFiles, existingUrls: existingImages, onExistingUrlsChange: setExistingImages, disabled: isBusy, maxFiles: 20 }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 327,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(StringListField, { label: "YouTube video links", items: youtubeLinks, onChange: setYoutubeLinks, addLabel: "Add link", inputType: "url", placeholder: "https://www.youtube.com/watch?v=...", disabled: isBusy }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 329,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 319,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 311,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DeleteConfirmationModal_default, { open: deleteTarget !== null, onOpenChange: (open) => {
      if (!open)
        setDeleteTarget(null);
    }, title: "Delete lav station", description: deleteTarget ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      "Are you sure you want to delete",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { children: deleteTarget.label }, void 0, false, {
        fileName: "app/components/admin/LavStationModule.tsx",
        lineNumber: 336,
        columnNumber: 15
      }, this),
      "? This action cannot be undone."
    ] }, void 0, true, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 334,
      columnNumber: 63
    }, this) : "Are you sure you want to delete this item?", confirmLabel: "Delete lav station", onConfirm: handleConfirmDelete, isBusy }, void 0, false, {
      fileName: "app/components/admin/LavStationModule.tsx",
      lineNumber: 332,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/LavStationModule.tsx",
    lineNumber: 289,
    columnNumber: 10
  }, this);
};
_s(LavStationModule, "lEuokHHJ3iNYFbwf910UV5LAAvc=", false, function() {
  return [useAdminToast];
});
_c22 = LavStationModule;
var _c2;
var _c22;
$RefreshReg$(_c2, "StringListField");
$RefreshReg$(_c22, "LavStationModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/RiceDerbiesModule.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\RiceDerbiesModule.tsx"
  );
  import.meta.hot.lastModified = "1781440730132.3982";
}
var EMPTY_LIST_ITEM2 = "";
var formatDate2 = (iso) => {
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
var updateListItem2 = (items, index, value) => {
  const next = [...items];
  next[index] = value;
  return next;
};
var addListItem2 = (items) => [...items, EMPTY_LIST_ITEM2];
var removeListItem2 = (items, index) => items.length === 1 ? [EMPTY_LIST_ITEM2] : items.filter((_, itemIndex) => itemIndex !== index);
var trimNonEmpty2 = (items) => items.map((item) => item.trim()).filter(Boolean);
var toEditableList2 = (items) => items.length > 0 ? items : [EMPTY_LIST_ITEM2];
var StringListField2 = ({
  label,
  items,
  onChange,
  addLabel,
  inputType = "text",
  placeholder,
  multiline = false,
  disabled = false
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-3", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-sm font-medium text-slate-700", children: label }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: () => onChange(addListItem2(items)), disabled, className: "inline-flex items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 disabled:opacity-60", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Plus, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      addLabel
    ] }, void 0, true, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 66,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/RiceDerbiesModule.tsx",
    lineNumber: 64,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-2", children: items.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-start gap-2", children: [
    multiline ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("textarea", { value: item, onChange: (event) => onChange(updateListItem2(items, index, event.target.value)), placeholder, className: `${adminInputClass} admin-scrollbar min-h-[88px] flex-1 resize-none`, rows: 3, disabled }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 74,
      columnNumber: 24
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: inputType, value: item, onChange: (event) => onChange(updateListItem2(items, index, event.target.value)), placeholder, className: `${adminInputClass} flex-1`, disabled }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 74,
      columnNumber: 267
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: () => onChange(removeListItem2(items, index)), disabled, className: "mt-2 inline-flex shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-rose-700 transition hover:bg-rose-100 disabled:opacity-60", "aria-label": `Remove ${label.toLowerCase()} ${index + 1}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Trash2, { className: "h-4 w-4" }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 76,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this)
  ] }, `${label}-${index}`, true, {
    fileName: "app/components/admin/RiceDerbiesModule.tsx",
    lineNumber: 73,
    columnNumber: 35
  }, this)) }, void 0, false, {
    fileName: "app/components/admin/RiceDerbiesModule.tsx",
    lineNumber: 72,
    columnNumber: 5
  }, this)
] }, void 0, true, {
  fileName: "app/components/admin/RiceDerbiesModule.tsx",
  lineNumber: 63,
  columnNumber: 7
}, this);
_c3 = StringListField2;
var RiceDerbiesModule = ({
  derbies,
  fetcher,
  cloudinaryConfig
}) => {
  _s2();
  const [isModalOpen, setModalOpen] = (0, import_react2.useState)(false);
  const [editingId, setEditingId] = (0, import_react2.useState)(null);
  const [title, setTitle] = (0, import_react2.useState)("");
  const [descriptions, setDescriptions] = (0, import_react2.useState)([EMPTY_LIST_ITEM2]);
  const [youtubeLinks, setYoutubeLinks] = (0, import_react2.useState)([EMPTY_LIST_ITEM2]);
  const [existingImages, setExistingImages] = (0, import_react2.useState)([]);
  const [imageFiles, setImageFiles] = (0, import_react2.useState)([]);
  const [isUploading, setIsUploading] = (0, import_react2.useState)(false);
  const [pendingIntent, setPendingIntent] = (0, import_react2.useState)(null);
  const [deleteTarget, setDeleteTarget] = (0, import_react2.useState)(null);
  const toast = useAdminToast();
  const formRef = (0, import_react2.useRef)(null);
  const wasSubmitting = (0, import_react2.useRef)(false);
  const isSubmitting = fetcher.state === "submitting";
  const isBusy = isUploading || isSubmitting;
  const fetcherFormData = fetcher.formData;
  const isEditing = editingId !== null;
  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setDescriptions([EMPTY_LIST_ITEM2]);
    setYoutubeLinks([EMPTY_LIST_ITEM2]);
    setExistingImages([]);
    setImageFiles([]);
    formRef.current?.reset();
  };
  const openCreateModal = () => {
    resetForm();
    setModalOpen(true);
  };
  const openEditModal = (derby) => {
    setEditingId(derby.id);
    setTitle(derby.title);
    setDescriptions(toEditableList2(derby.descriptions));
    setYoutubeLinks(toEditableList2(derby.youtubeLinks));
    setExistingImages([...derby.images]);
    setImageFiles([]);
    setModalOpen(true);
  };
  const closeModal = () => {
    if (isUploading || isSubmitting)
      return;
    setModalOpen(false);
    resetForm();
  };
  (0, import_react2.useEffect)(() => {
    if (fetcher.state === "submitting") {
      wasSubmitting.current = true;
    }
    if (wasSubmitting.current && fetcher.state === "idle") {
      wasSubmitting.current = false;
      if (fetcher.data?.error) {
        toast.error(fetcher.data.error);
        setPendingIntent(null);
        return;
      }
      if (fetcher.data?.ok && (pendingIntent === "create-rice-derbies" || pendingIntent === "update-rice-derbies")) {
        toast.success(fetcher.data.message ?? "Updated successfully.");
        setModalOpen(false);
        resetForm();
        setPendingIntent(null);
      }
    }
  }, [fetcher.state, fetcher.data, pendingIntent, toast.error, toast.success, toast]);
  const handleSave = async () => {
    const trimmedDescriptions = trimNonEmpty2(descriptions);
    const trimmedYoutubeLinks = trimNonEmpty2(youtubeLinks);
    if (!title.trim()) {
      toast.error("Title is required.");
      return;
    }
    if (trimmedDescriptions.length === 0) {
      toast.error("At least one description is required.");
      return;
    }
    if (imageFiles.length > 0 && !cloudinaryConfig) {
      toast.error("Image upload is not configured.");
      return;
    }
    setIsUploading(true);
    try {
      const newImageUrls = imageFiles.length > 0 && cloudinaryConfig ? await uploadImagesToCloudinary(imageFiles, cloudinaryConfig) : [];
      const allImages = [...existingImages, ...newImageUrls];
      if (allImages.length > 20) {
        toast.error("Maximum 20 images allowed.");
        return;
      }
      const payload = {
        title: title.trim(),
        descriptions: JSON.stringify(trimmedDescriptions),
        youtubeLinks: JSON.stringify(trimmedYoutubeLinks),
        images: JSON.stringify(allImages)
      };
      if (isEditing && editingId) {
        setPendingIntent("update-rice-derbies");
        fetcher.submit({
          intent: "update-rice-derbies",
          id: editingId,
          ...payload
        }, {
          method: "post"
        });
      } else {
        setPendingIntent("create-rice-derbies");
        fetcher.submit({
          intent: "create-rice-derbies",
          ...payload
        }, {
          method: "post"
        });
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to upload images. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };
  const handleDelete = (id, label) => {
    setDeleteTarget({
      id,
      label
    });
  };
  const handleConfirmDelete = () => {
    if (!deleteTarget)
      return;
    toast.success("Rice derbies entry deleted.");
    fetcher.submit({
      intent: "delete-rice-derbies",
      id: deleteTarget.id
    }, {
      method: "post"
    });
    setDeleteTarget(null);
  };
  const handleToggleActive = (id, nextActive) => {
    fetcher.submit({
      intent: "toggle-rice-derbies-active",
      id,
      active: nextActive ? "true" : "false"
    }, {
      method: "post"
    });
  };
  const isRowBusy = (id, intent) => fetcher.state !== "idle" && fetcherFormData?.get("intent") === intent && fetcherFormData?.get("id") === id;
  const columns = [{
    id: "title",
    header: "Title",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-semibold text-slate-900", children: row.title || "\u2014" }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 235,
      columnNumber: 18
    }, this)
  }, {
    id: "descriptions",
    header: "Descriptions",
    className: "max-w-xs",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-1", children: row.descriptions.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "line-clamp-2 text-slate-600", children: row.descriptions[0] }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 242,
        columnNumber: 15
      }, this),
      row.descriptions.length > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xs font-medium text-slate-400", children: [
        "+",
        row.descriptions.length - 1,
        " more"
      ] }, void 0, true, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 243,
        columnNumber: 46
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 241,
      columnNumber: 42
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-slate-400", children: "\u2014" }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 246,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 240,
      columnNumber: 18
    }, this)
  }, {
    id: "images",
    header: "Images",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      row.images.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: row.images[0], alt: row.title, className: "h-10 w-10 rounded-lg border border-slate-200 object-cover" }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 252,
        columnNumber: 36
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-slate-600", children: [
        row.images.length,
        " image(s)"
      ] }, void 0, true, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 253,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 251,
      columnNumber: 18
    }, this)
  }, {
    id: "youtube",
    header: "YouTube",
    cell: (row) => row.youtubeLinks.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-1", children: [
      row.youtubeLinks.slice(0, 2).map((link) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: link, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700", children: [
        "View",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ExternalLink, { className: "h-3.5 w-3.5" }, void 0, false, {
          fileName: "app/components/admin/RiceDerbiesModule.tsx",
          lineNumber: 261,
          columnNumber: 17
        }, this)
      ] }, link, true, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 259,
        columnNumber: 55
      }, this)),
      row.youtubeLinks.length > 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-xs text-slate-400", children: [
        "+",
        row.youtubeLinks.length - 2,
        " more"
      ] }, void 0, true, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 263,
        columnNumber: 44
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 258,
      columnNumber: 48
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-slate-400", children: "\u2014" }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 266,
      columnNumber: 20
    }, this)
  }, {
    id: "createdAt",
    header: "Created",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-slate-600", children: formatDate2(row.createdAt) }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 270,
      columnNumber: 18
    }, this)
  }, {
    id: "active",
    header: "Active",
    className: "w-28",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AdminActiveToggle_default, { active: row.active, disabled: isBusy || isRowBusy(row.id, "toggle-rice-derbies-active"), onToggle: () => handleToggleActive(row.id, !row.active) }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 275,
      columnNumber: 18
    }, this)
  }, {
    id: "actions",
    header: "Actions",
    className: "w-40",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: () => openEditModal(row), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Pencil, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 282,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 281,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: () => handleDelete(row.id, row.title || "this rice derbies entry"), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Trash2, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 285,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 284,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 280,
      columnNumber: 18
    }, this)
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "RICE DERBIES" }, void 0, false, {
          fileName: "app/components/admin/RiceDerbiesModule.tsx",
          lineNumber: 292,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Manage rice derbies" }, void 0, false, {
          fileName: "app/components/admin/RiceDerbiesModule.tsx",
          lineNumber: 295,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Add and manage information about your rice derbies." }, void 0, false, {
          fileName: "app/components/admin/RiceDerbiesModule.tsx",
          lineNumber: 296,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 291,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: openCreateModal, disabled: isBusy, className: "flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/RiceDerbiesModule.tsx",
          lineNumber: 302,
          columnNumber: 11
        }, this),
        "Add rice derbies"
      ] }, void 0, true, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 301,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 290,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AdminPaginatedTable_default, { columns, data: derbies, getRowKey: (row) => row.id, isLoading: isSubmitting, emptyMessage: 'No rice derbies yet. Use "Add rice derbies" to create one.', itemLabel: "rice derbies", pagination: {
      pageSize: 5
    } }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 307,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AdminModal_default, { open: isModalOpen, onOpenChange: (open) => open ? setModalOpen(true) : closeModal(), title: isEditing ? "Edit Rice Derbies" : "Add Rice Derbies", description: isEditing ? "I-update ang details. Puwedeng magdagdag o mag-alis ng images, descriptions, at links." : "Fill in the details. Images upload to Cloudinary; data saves to Firestore.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: closeModal, disabled: isBusy, className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 312,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: handleSave, disabled: isBusy, className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: isUploading ? "Uploading images..." : fetcher.state === "submitting" ? "Saving..." : isEditing ? "Update rice derbies" : "Save rice derbies" }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 315,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 311,
      columnNumber: 375
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { ref: formRef, className: "space-y-5", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Title rice derbies",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "text", name: "title", value: title, onChange: (event) => setTitle(event.target.value), placeholder: 'Rice derbies title, e.g. "2024 Harvest Festival Rice Derbies"', className: adminInputClass, required: true }, void 0, false, {
          fileName: "app/components/admin/RiceDerbiesModule.tsx",
          lineNumber: 322,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 320,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(StringListField2, { label: "Descriptions", items: descriptions, onChange: setDescriptions, addLabel: "Add description", placeholder: "Brief description of the rice derbies", multiline: true, disabled: isBusy }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 325,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AdminMultiImageUpload_default, { files: imageFiles, onChange: setImageFiles, existingUrls: existingImages, onExistingUrlsChange: setExistingImages, disabled: isBusy, maxFiles: 20 }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 327,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(StringListField2, { label: "YouTube video links", items: youtubeLinks, onChange: setYoutubeLinks, addLabel: "Add link", inputType: "url", placeholder: "https://www.youtube.com/watch?v=...", disabled: isBusy }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 329,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 319,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 311,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DeleteConfirmationModal_default, { open: deleteTarget !== null, onOpenChange: (open) => {
      if (!open)
        setDeleteTarget(null);
    }, title: "Delete rice derbies entry", description: deleteTarget ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      "Are you sure you want to delete",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: deleteTarget.label }, void 0, false, {
        fileName: "app/components/admin/RiceDerbiesModule.tsx",
        lineNumber: 336,
        columnNumber: 15
      }, this),
      "? This action cannot be undone."
    ] }, void 0, true, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 334,
      columnNumber: 70
    }, this) : "Are you sure you want to delete this item?", confirmLabel: "Delete rice derbies", onConfirm: handleConfirmDelete, isBusy }, void 0, false, {
      fileName: "app/components/admin/RiceDerbiesModule.tsx",
      lineNumber: 332,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/RiceDerbiesModule.tsx",
    lineNumber: 289,
    columnNumber: 10
  }, this);
};
_s2(RiceDerbiesModule, "lEuokHHJ3iNYFbwf910UV5LAAvc=", false, function() {
  return [useAdminToast];
});
_c23 = RiceDerbiesModule;
var _c3;
var _c23;
$RefreshReg$(_c3, "StringListField");
$RefreshReg$(_c23, "RiceDerbiesModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  LavStationModule,
  RiceDerbiesModule
};
//# sourceMappingURL=/build/_shared/chunk-I7E2KYFF.js.map
