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
  useAdminToast
} from "/build/_shared/chunk-VYS3PCQI.js";
import {
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

// app/components/admin/TestimonialsModule.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\TestimonialsModule.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\TestimonialsModule.tsx"
  );
  import.meta.hot.lastModified = "1781440714501.3684";
}
var EMPTY_LIST_ITEM = "";
var updateListItem = (items, index, value) => {
  const next = [...items];
  next[index] = value;
  return next;
};
var addListItem = (items) => [...items, EMPTY_LIST_ITEM];
var removeListItem = (items, index) => items.length === 1 ? [EMPTY_LIST_ITEM] : items.filter((_, itemIndex) => itemIndex !== index);
var trimNonEmpty = (items) => items.map((item) => item.trim()).filter(Boolean);
var toEditableList = (text) => {
  const lines = text.split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
  return lines.length > 0 ? lines : [EMPTY_LIST_ITEM];
};
var TestimonialsModule = ({
  testimonials,
  fetcher,
  cloudinaryConfig
}) => {
  _s();
  const [modalOpen, setModalOpen] = (0, import_react.useState)(false);
  const [editingId, setEditingId] = (0, import_react.useState)(null);
  const [name, setName] = (0, import_react.useState)("");
  const [content, setContent] = (0, import_react.useState)([EMPTY_LIST_ITEM]);
  const [date, setDate] = (0, import_react.useState)("");
  const [location, setLocation] = (0, import_react.useState)("");
  const [position, setPosition] = (0, import_react.useState)("");
  const [variety, setVariety] = (0, import_react.useState)("");
  const [existingImage, setExistingImage] = (0, import_react.useState)("");
  const [imageFiles, setImageFiles] = (0, import_react.useState)([]);
  const [isUploading, setIsUploading] = (0, import_react.useState)(false);
  const [pendingIntent, setPendingIntent] = (0, import_react.useState)(null);
  const [deleteTarget, setDeleteTarget] = (0, import_react.useState)(null);
  const toast = useAdminToast();
  const formRef = (0, import_react.useRef)(null);
  const wasSubmitting = (0, import_react.useRef)(false);
  const isSubmitting = fetcher.state === "submitting";
  const isBusy = isUploading || isSubmitting;
  const isEditing = editingId !== null;
  const resetForm = () => {
    setEditingId(null);
    setName("");
    setContent([EMPTY_LIST_ITEM]);
    setDate("");
    setLocation("");
    setPosition("");
    setVariety("");
    setExistingImage("");
    setImageFiles([]);
    formRef.current?.reset();
  };
  const openCreateModal = () => {
    resetForm();
    setModalOpen(true);
  };
  const openEditModal = (testimonial) => {
    setEditingId(testimonial.id);
    setName(testimonial.name);
    setContent(toEditableList(testimonial.content));
    setDate(testimonial.date);
    setLocation(testimonial.location);
    setPosition(testimonial.position);
    setVariety(testimonial.variety);
    setExistingImage(testimonial.image);
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
      if (fetcher.data?.ok && (pendingIntent === "create-testimonial" || pendingIntent === "update-testimonial")) {
        toast.success(fetcher.data.message ?? "Updated successfully.");
        setModalOpen(false);
        resetForm();
        setPendingIntent(null);
      }
    }
  }, [fetcher.state, fetcher.data, pendingIntent, toast.error, toast.success, toast]);
  const handleSave = async () => {
    const cleanContent = trimNonEmpty(content);
    if (cleanContent.length === 0) {
      toast.error("Testimonial content is required.");
      return;
    }
    if (imageFiles.length > 0 && !cloudinaryConfig) {
      toast.error("Image upload is not configured.");
      return;
    }
    setIsUploading(true);
    try {
      const newImageUrls = imageFiles.length > 0 && cloudinaryConfig ? await uploadImagesToCloudinary(imageFiles, cloudinaryConfig) : [];
      const image = newImageUrls[0] ?? existingImage ?? "";
      const intent = isEditing ? "update-testimonial" : "create-testimonial";
      setPendingIntent(intent);
      fetcher.submit({
        intent,
        ...editingId ? {
          id: editingId
        } : {},
        name: name.trim(),
        content: cleanContent.join("\n"),
        date: date.trim(),
        location: location.trim(),
        position: position.trim(),
        variety: variety.trim(),
        image
      }, {
        method: "post"
      });
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to upload image.");
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
    toast.success("Testimonial deleted.");
    fetcher.submit({
      intent: "delete-testimonial",
      id: deleteTarget.id
    }, {
      method: "post"
    });
    setDeleteTarget(null);
  };
  const columns = [{
    id: "name",
    header: "Customer",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-900", children: row.name || "\u2014" }, void 0, false, {
      fileName: "app/components/admin/TestimonialsModule.tsx",
      lineNumber: 179,
      columnNumber: 18
    }, this)
  }, {
    id: "content",
    header: "Testimonial",
    className: "max-w-md",
    cell: (row) => {
      const list = row.content.split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
      if (list.length === 0) {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-slate-400", children: "\u2014" }, void 0, false, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 187,
          columnNumber: 16
        }, this);
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "line-clamp-2 text-slate-600", children: list[0] }, void 0, false, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 190,
          columnNumber: 13
        }, this),
        list.length > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-medium text-slate-400", children: [
          "+",
          list.length - 1,
          " more"
        ] }, void 0, true, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 191,
          columnNumber: 32
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 189,
        columnNumber: 14
      }, this);
    }
  }, {
    id: "image",
    header: "Image",
    cell: (row) => row.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: row.image, alt: row.name || "Testimonial", className: "h-12 w-12 rounded-lg object-cover" }, void 0, false, {
      fileName: "app/components/admin/TestimonialsModule.tsx",
      lineNumber: 197,
      columnNumber: 30
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-slate-400", children: "\u2014" }, void 0, false, {
      fileName: "app/components/admin/TestimonialsModule.tsx",
      lineNumber: 197,
      columnNumber: 134
    }, this)
  }, {
    id: "meta",
    header: "Details",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1 text-xs text-slate-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: row.position || "No position" }, void 0, false, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 202,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: row.location || "No location" }, void 0, false, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 203,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: row.variety || "No variety" }, void 0, false, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 204,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-400 text-[0.625rem]", children: row.date || "No date" }, void 0, false, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 205,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TestimonialsModule.tsx",
      lineNumber: 201,
      columnNumber: 18
    }, this)
  }, {
    id: "actions",
    header: "Actions",
    className: "w-40",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => openEditModal(row), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pencil, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 213,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 212,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => handleDelete(row.id, row.name || "this testimonial"), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 215,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TestimonialsModule.tsx",
      lineNumber: 211,
      columnNumber: 18
    }, this)
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "Testimonial" }, void 0, false, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 223,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Manage testimonials" }, void 0, false, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 224,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Add and manage customer testimonials for your website." }, void 0, false, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 225,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 222,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: openCreateModal, disabled: isBusy, className: "flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 231,
          columnNumber: 11
        }, this),
        "Add testimonial"
      ] }, void 0, true, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 230,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TestimonialsModule.tsx",
      lineNumber: 221,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminPaginatedTable_default, { columns, data: testimonials, getRowKey: (row) => row.id, isLoading: isSubmitting, emptyMessage: 'No testimonials yet. Use "Add testimonial" to create one.', itemLabel: "testimonials", pagination: {
      pageSize: 5
    } }, void 0, false, {
      fileName: "app/components/admin/TestimonialsModule.tsx",
      lineNumber: 236,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminModal_default, { open: modalOpen, onOpenChange: (open) => open ? setModalOpen(true) : closeModal(), title: isEditing ? "Edit testimonial" : "Add testimonial", description: "Share your customers' experiences and feedback.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: closeModal, disabled: isBusy, className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 241,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: handleSave, disabled: isBusy, className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: fetcher.state === "submitting" || isUploading ? "Saving..." : isEditing ? "Update testimonial" : "Save testimonial" }, void 0, false, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 244,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TestimonialsModule.tsx",
      lineNumber: 240,
      columnNumber: 239
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { ref: formRef, className: "space-y-4", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Customer name",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "name", value: name, onChange: (event) => setName(event.target.value), placeholder: "Full name", className: adminInputClass, required: true }, void 0, false, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 251,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 249,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-slate-700", children: "Testimonial content" }, void 0, false, {
            fileName: "app/components/admin/TestimonialsModule.tsx",
            lineNumber: 255,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setContent(addListItem(content)), className: "inline-flex items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "app/components/admin/TestimonialsModule.tsx",
              lineNumber: 257,
              columnNumber: 17
            }, this),
            "Add content"
          ] }, void 0, true, {
            fileName: "app/components/admin/TestimonialsModule.tsx",
            lineNumber: 256,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 254,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: content.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { value: item, onChange: (event) => setContent(updateListItem(content, index, event.target.value)), placeholder: "Share your experience...", className: `${adminInputClass} admin-scrollbar min-h-[88px] flex-1 resize-none`, rows: 4 }, void 0, false, {
            fileName: "app/components/admin/TestimonialsModule.tsx",
            lineNumber: 263,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setContent(removeListItem(content, index)), className: "mt-2 inline-flex shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-rose-700 transition hover:bg-rose-100", "aria-label": `Remove testimonial content ${index + 1}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/admin/TestimonialsModule.tsx",
            lineNumber: 265,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/admin/TestimonialsModule.tsx",
            lineNumber: 264,
            columnNumber: 19
          }, this)
        ] }, `testimonial-content-${index}`, true, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 262,
          columnNumber: 45
        }, this)) }, void 0, false, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 261,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 253,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Date",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "date", value: date, onChange: (event) => setDate(event.target.value), className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 272,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 270,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Location",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "location", value: location, onChange: (event) => setLocation(event.target.value), placeholder: "Venue or online link", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 276,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 274,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Position",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1 text-slate-400 text-xs", children: "(Optional)" }, void 0, false, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 280,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "position", value: position, onChange: (event) => setPosition(event.target.value), placeholder: "Job title or role", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 281,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 278,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Variety",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1 text-slate-400 text-xs", children: "(Optional)" }, void 0, false, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 285,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "variety", value: variety, onChange: (event) => setVariety(event.target.value), placeholder: "Product or service variety", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/TestimonialsModule.tsx",
          lineNumber: 286,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 283,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminMultiImageUpload_default, { label: "Image", files: imageFiles, onChange: setImageFiles, existingUrls: existingImage ? [existingImage] : [], onExistingUrlsChange: (urls) => setExistingImage(urls[0] ?? ""), maxFiles: 1, disabled: isBusy }, void 0, false, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 288,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TestimonialsModule.tsx",
      lineNumber: 248,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/TestimonialsModule.tsx",
      lineNumber: 240,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteConfirmationModal_default, { open: deleteTarget !== null, onOpenChange: (open) => {
      if (!open && !isUploading && !isSubmitting)
        setDeleteTarget(null);
    }, title: "Delete testimonial", description: deleteTarget ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      "Are you sure you want to delete",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: deleteTarget.label }, void 0, false, {
        fileName: "app/components/admin/TestimonialsModule.tsx",
        lineNumber: 295,
        columnNumber: 15
      }, this),
      "? This action cannot be undone."
    ] }, void 0, true, {
      fileName: "app/components/admin/TestimonialsModule.tsx",
      lineNumber: 293,
      columnNumber: 63
    }, this) : "Are you sure you want to delete this item?", confirmLabel: "Delete testimonial", onConfirm: handleConfirmDelete, isBusy }, void 0, false, {
      fileName: "app/components/admin/TestimonialsModule.tsx",
      lineNumber: 291,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/TestimonialsModule.tsx",
    lineNumber: 220,
    columnNumber: 10
  }, this);
};
_s(TestimonialsModule, "IYv8/Jy5yMV1aNFSwOscgSvOitY=", false, function() {
  return [useAdminToast];
});
_c = TestimonialsModule;
var _c;
$RefreshReg$(_c, "TestimonialsModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  TestimonialsModule
};
//# sourceMappingURL=/build/_shared/chunk-5QVOTQXX.js.map
