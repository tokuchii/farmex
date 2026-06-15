import "/build/_shared/chunk-COVJFQDL.js";
import "/build/_shared/chunk-MIRQCLL2.js";
import "/build/_shared/chunk-Z74I43MM.js";
import "/build/_shared/chunk-MS5RYMMK.js";
import {
  AdminModal_default,
  AdminMultiImageUpload_default,
  AdminPaginatedTable_default,
  DeleteConfirmationModal_default,
  adminInputClass,
  require_cloudinary,
  uploadImagesToCloudinary
} from "/build/_shared/chunk-3SIS6I7N.js";
import "/build/_shared/chunk-NPIM253G.js";
import "/build/_shared/chunk-UF6K54N4.js";
import "/build/_shared/chunk-Y6RJRNBS.js";
import {
  require_trainings
} from "/build/_shared/chunk-KA2R6GWF.js";
import {
  require_session
} from "/build/_shared/chunk-WDL7VJWI.js";
import "/build/_shared/chunk-VOMTZOVV.js";
import "/build/_shared/chunk-SOAH3HEL.js";
import {
  useAdminToast
} from "/build/_shared/chunk-VYS3PCQI.js";
import {
  Calendar,
  Pencil,
  Plus,
  Tractor,
  Trash2,
  UserCog
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

// app/routes/admin.services.tsx
var import_node = __toESM(require_node(), 1);
var import_react8 = __toESM(require_react(), 1);

// app/components/admin/MachineRentalsModule.tsx
var import_react2 = __toESM(require_react(), 1);

// app/components/admin/MachineRentalGalleryModule.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\MachineRentalGalleryModule.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\MachineRentalGalleryModule.tsx"
  );
  import.meta.hot.lastModified = "1781439789908.006";
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
var MachineRentalGalleryModule = ({
  galleries,
  fetcher,
  cloudinaryConfig
}) => {
  _s();
  const [isModalOpen, setModalOpen] = (0, import_react.useState)(false);
  const [editingId, setEditingId] = (0, import_react.useState)(null);
  const [collectionName, setCollectionName] = (0, import_react.useState)("");
  const [existingImages, setExistingImages] = (0, import_react.useState)([]);
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
    setCollectionName("");
    setExistingImages([]);
    setImageFiles([]);
    formRef.current?.reset();
  };
  const openCreateModal = () => {
    resetForm();
    setModalOpen(true);
  };
  const openEditModal = (item) => {
    setEditingId(item.id);
    setCollectionName(item.collectionName);
    setExistingImages([...item.images]);
    setImageFiles([]);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
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
      if (fetcher.data?.ok && (pendingIntent === "create-machine-rental-gallery" || pendingIntent === "update-machine-rental-gallery")) {
        toast.success(fetcher.data.message ?? "Updated successfully.");
        setModalOpen(false);
        resetForm();
        setPendingIntent(null);
      }
    }
  }, [fetcher.state, fetcher.data, pendingIntent, toast.error, toast.success, toast]);
  const handleSave = async () => {
    if (!collectionName.trim()) {
      toast.error("Collection name is required.");
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
      if (allImages.length === 0) {
        toast.error("At least one image is required.");
        return;
      }
      if (allImages.length > 1) {
        toast.error("Only 1 image is allowed.");
        return;
      }
      const payload = {
        collectionName: collectionName.trim(),
        images: JSON.stringify(allImages)
      };
      if (isEditing && editingId) {
        setPendingIntent("update-machine-rental-gallery");
        fetcher.submit({
          intent: "update-machine-rental-gallery",
          id: editingId,
          ...payload
        }, {
          method: "post"
        });
      } else {
        setPendingIntent("create-machine-rental-gallery");
        fetcher.submit({
          intent: "create-machine-rental-gallery",
          ...payload
        }, {
          method: "post"
        });
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to upload images.");
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
    toast.success("Machine rental gallery item deleted.");
    fetcher.submit({
      intent: "delete-machine-rental-gallery",
      id: deleteTarget.id
    }, {
      method: "post"
    });
    setDeleteTarget(null);
  };
  const columns = [{
    id: "collectionName",
    header: "Collection",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-900", children: row.collectionName || "\u2014" }, void 0, false, {
      fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
      lineNumber: 175,
      columnNumber: 18
    }, this)
  }, {
    id: "images",
    header: "Images",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      row.images.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: row.images[0], alt: row.collectionName, className: "h-10 w-10 rounded-lg border border-slate-200 object-cover" }, void 0, false, {
        fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
        lineNumber: 180,
        columnNumber: 36
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-slate-600", children: [
        row.images.length,
        " image(s)"
      ] }, void 0, true, {
        fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
        lineNumber: 181,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
      lineNumber: 179,
      columnNumber: 18
    }, this)
  }, {
    id: "createdAt",
    header: "Created",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-slate-600", children: formatDate(row.createdAt) }, void 0, false, {
      fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
      lineNumber: 186,
      columnNumber: 18
    }, this)
  }, {
    id: "actions",
    header: "Actions",
    className: "w-40",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => openEditModal(row), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pencil, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
        lineNumber: 193,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
        lineNumber: 192,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => handleDelete(row.id, row.collectionName || "this gallery item"), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
        lineNumber: 196,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
      lineNumber: 191,
      columnNumber: 18
    }, this)
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-lg font-semibold text-slate-700", children: "Machine Rental Gallery" }, void 0, false, {
        fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
        lineNumber: 202,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: openCreateModal, disabled: isBusy, className: "flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, this),
        "Add gallery item"
      ] }, void 0, true, {
        fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
        lineNumber: 203,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
      lineNumber: 201,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminPaginatedTable_default, { columns, data: galleries, getRowKey: (row) => row.id, isLoading: isSubmitting, emptyMessage: 'No gallery items yet. Click "Add gallery item" to create one.', itemLabel: "gallery items", pagination: {
      pageSize: 5
    } }, void 0, false, {
      fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
      lineNumber: 209,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminModal_default, { open: isModalOpen, onOpenChange: (open) => open ? setModalOpen(true) : handleCloseModal(), title: editingId ? "Edit Machine Rental Gallery Item" : "Add Machine Rental Gallery Item", description: "Fill in Name and upload one Image only.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: handleCloseModal, disabled: isBusy, className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
        lineNumber: 214,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: handleSave, disabled: isBusy, className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: isUploading ? "Uploading images..." : fetcher.state === "submitting" ? "Saving..." : editingId ? "Update item" : "Save item" }, void 0, false, {
        fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
        lineNumber: 217,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
      lineNumber: 213,
      columnNumber: 271
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { ref: formRef, className: "space-y-4", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Name",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "collectionName", value: collectionName, onChange: (event) => setCollectionName(event.target.value), placeholder: "Machine rental name", className: adminInputClass, required: true }, void 0, false, {
          fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
          lineNumber: 224,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
        lineNumber: 222,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminMultiImageUpload_default, { files: imageFiles, onChange: setImageFiles, existingUrls: existingImages, onExistingUrlsChange: setExistingImages, disabled: isBusy, maxFiles: 1 }, void 0, false, {
        fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
        lineNumber: 226,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
      lineNumber: 221,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
      lineNumber: 213,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteConfirmationModal_default, { open: deleteTarget !== null, onOpenChange: (open) => {
      if (!open)
        setDeleteTarget(null);
    }, title: "Delete machine rental gallery", description: deleteTarget ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      "Are you sure you want to delete",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: deleteTarget.label }, void 0, false, {
        fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
        lineNumber: 233,
        columnNumber: 15
      }, this),
      "? This action cannot be undone."
    ] }, void 0, true, {
      fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
      lineNumber: 231,
      columnNumber: 74
    }, this) : "Are you sure you want to delete this item?", confirmLabel: "Delete gallery item", onConfirm: handleConfirmDelete, isBusy }, void 0, false, {
      fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
      lineNumber: 229,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/MachineRentalGalleryModule.tsx",
    lineNumber: 200,
    columnNumber: 10
  }, this);
};
_s(MachineRentalGalleryModule, "LX2FZCv0MUxtZm6vpPqD6tNOuNY=", false, function() {
  return [useAdminToast];
});
_c = MachineRentalGalleryModule;
var _c;
$RefreshReg$(_c, "MachineRentalGalleryModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/MachineRentalsModule.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\MachineRentalsModule.tsx"
  );
  import.meta.hot.lastModified = "1781439779546.408";
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
var toEditableList = (items) => items.length > 0 ? items : [EMPTY_LIST_ITEM];
var MachineRentalsModule = ({
  rentals,
  galleries,
  fetcher,
  cloudinaryConfig
}) => {
  _s2();
  const [isModalOpen, setModalOpen] = (0, import_react2.useState)(false);
  const [editingId, setEditingId] = (0, import_react2.useState)(null);
  const [title, setTitle] = (0, import_react2.useState)("");
  const [descriptions, setDescriptions] = (0, import_react2.useState)([EMPTY_LIST_ITEM]);
  const [pendingIntent, setPendingIntent] = (0, import_react2.useState)(null);
  const [deleteTarget, setDeleteTarget] = (0, import_react2.useState)(null);
  const toast = useAdminToast();
  const formRef = (0, import_react2.useRef)(null);
  const wasSubmitting = (0, import_react2.useRef)(false);
  const isSubmitting = fetcher.state === "submitting";
  const isBusy = isSubmitting;
  const isEditing = editingId !== null;
  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setDescriptions([EMPTY_LIST_ITEM]);
    formRef.current?.reset();
  };
  const openCreateModal = () => {
    resetForm();
    setModalOpen(true);
  };
  const openEditModal = (item) => {
    setEditingId(item.id);
    setTitle(item.title);
    setDescriptions(toEditableList(item.descriptions));
    setModalOpen(true);
  };
  const closeModal = () => {
    if (isSubmitting)
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
      if (fetcher.data?.ok && (pendingIntent === "create-machine-rental" || pendingIntent === "update-machine-rental")) {
        toast.success(fetcher.data.message ?? "Updated successfully.");
        setModalOpen(false);
        resetForm();
        setPendingIntent(null);
      }
    }
  }, [fetcher.state, fetcher.data, pendingIntent, toast.error, toast.success, toast]);
  const handleSaveRental = () => {
    const cleanTitle = title.trim();
    const cleanDescriptions = trimNonEmpty(descriptions);
    if (!cleanTitle) {
      toast.error("Title is required.");
      return;
    }
    if (cleanDescriptions.length === 0) {
      toast.error("At least one description is required.");
      return;
    }
    const payload = {
      title: cleanTitle,
      descriptions: JSON.stringify(cleanDescriptions)
    };
    if (isEditing && editingId) {
      setPendingIntent("update-machine-rental");
      fetcher.submit({
        intent: "update-machine-rental",
        id: editingId,
        ...payload
      }, {
        method: "post"
      });
    } else {
      setPendingIntent("create-machine-rental");
      fetcher.submit({
        intent: "create-machine-rental",
        ...payload
      }, {
        method: "post"
      });
    }
  };
  const handleDeleteRental = (id, label) => {
    setDeleteTarget({
      id,
      label
    });
  };
  const handleConfirmDelete = () => {
    if (!deleteTarget)
      return;
    toast.success("Machine rental deleted.");
    fetcher.submit({
      intent: "delete-machine-rental",
      id: deleteTarget.id
    }, {
      method: "post"
    });
    setDeleteTarget(null);
  };
  const columns = [{
    id: "title",
    header: "Title",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "font-semibold text-slate-900", children: row.title || "\u2014" }, void 0, false, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 165,
      columnNumber: 18
    }, this)
  }, {
    id: "descriptions",
    header: "Descriptions",
    className: "max-w-md",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-1", children: row.descriptions.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "line-clamp-2 text-slate-600", children: row.descriptions[0] }, void 0, false, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 172,
        columnNumber: 15
      }, this),
      row.descriptions.length > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-xs font-medium text-slate-400", children: [
        "+",
        row.descriptions.length - 1,
        " more"
      ] }, void 0, true, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 173,
        columnNumber: 46
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 171,
      columnNumber: 42
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-slate-400", children: "\u2014" }, void 0, false, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 176,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 170,
      columnNumber: 18
    }, this)
  }, {
    id: "createdAt",
    header: "Created",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-slate-600", children: formatDate2(row.createdAt) }, void 0, false, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 181,
      columnNumber: 18
    }, this)
  }, {
    id: "actions",
    header: "Actions",
    className: "w-40",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => openEditModal(row), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Pencil, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 188,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => handleDeleteRental(row.id, row.title || "this machine rental"), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Trash2, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 191,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 190,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 186,
      columnNumber: 18
    }, this)
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "MACHINE RENTALS" }, void 0, false, {
          fileName: "app/components/admin/MachineRentalsModule.tsx",
          lineNumber: 198,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Manage machine rentals" }, void 0, false, {
          fileName: "app/components/admin/MachineRentalsModule.tsx",
          lineNumber: 199,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Add machine rental items with title and description only." }, void 0, false, {
          fileName: "app/components/admin/MachineRentalsModule.tsx",
          lineNumber: 200,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: openCreateModal, disabled: isBusy, className: "flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/MachineRentalsModule.tsx",
          lineNumber: 206,
          columnNumber: 11
        }, this),
        "Add item"
      ] }, void 0, true, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 205,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 196,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminPaginatedTable_default, { columns, data: rentals, getRowKey: (row) => row.id, isLoading: isSubmitting, emptyMessage: 'No machine rentals yet. Click "Add item" to create one.', itemLabel: "machine rentals", pagination: {
      pageSize: 5
    } }, void 0, false, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 211,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(AdminModal_default, { open: isModalOpen, onOpenChange: (open) => open ? setModalOpen(true) : closeModal(), title: isEditing ? "Edit Machine Rental" : "Add Machine Rental", description: "Input title and description only.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: closeModal, disabled: isBusy, className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: handleSaveRental, disabled: isBusy, className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400", children: fetcher.state === "submitting" ? "Saving..." : isEditing ? "Update" : "Add" }, void 0, false, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 219,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 215,
      columnNumber: 233
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("form", { ref: formRef, className: "space-y-4", onSubmit: (event) => {
      event.preventDefault();
      handleSaveRental();
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Title",
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("input", { type: "text", name: "title", placeholder: "Enter title", value: title, onChange: (event) => setTitle(event.target.value), className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/MachineRentalsModule.tsx",
          lineNumber: 229,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 227,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-sm font-medium text-slate-700", children: "Descriptions" }, void 0, false, {
            fileName: "app/components/admin/MachineRentalsModule.tsx",
            lineNumber: 233,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => setDescriptions(addListItem(descriptions)), className: "inline-flex items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Plus, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "app/components/admin/MachineRentalsModule.tsx",
              lineNumber: 235,
              columnNumber: 17
            }, this),
            "Add description"
          ] }, void 0, true, {
            fileName: "app/components/admin/MachineRentalsModule.tsx",
            lineNumber: 234,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/MachineRentalsModule.tsx",
          lineNumber: 232,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "space-y-2", children: descriptions.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("textarea", { value: item, onChange: (event) => setDescriptions(updateListItem(descriptions, index, event.target.value)), placeholder: "Brief description of the machine rental", className: `${adminInputClass} admin-scrollbar min-h-[88px] flex-1 resize-none`, rows: 3 }, void 0, false, {
            fileName: "app/components/admin/MachineRentalsModule.tsx",
            lineNumber: 241,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "button", onClick: () => setDescriptions(removeListItem(descriptions, index)), className: "mt-2 inline-flex shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-rose-700 transition hover:bg-rose-100", "aria-label": `Remove description ${index + 1}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Trash2, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/admin/MachineRentalsModule.tsx",
            lineNumber: 243,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/admin/MachineRentalsModule.tsx",
            lineNumber: 242,
            columnNumber: 19
          }, this)
        ] }, `description-${index}`, true, {
          fileName: "app/components/admin/MachineRentalsModule.tsx",
          lineNumber: 240,
          columnNumber: 50
        }, this)) }, void 0, false, {
          fileName: "app/components/admin/MachineRentalsModule.tsx",
          lineNumber: 239,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 231,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 223,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 215,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("hr", { className: "my-4 border-slate-200" }, void 0, false, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 251,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(MachineRentalGalleryModule, { galleries, fetcher, cloudinaryConfig }, void 0, false, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DeleteConfirmationModal_default, { open: deleteTarget !== null, onOpenChange: (open) => {
      if (!open)
        setDeleteTarget(null);
    }, title: "Delete machine rental", description: deleteTarget ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      "Are you sure you want to delete",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("strong", { children: deleteTarget.label }, void 0, false, {
        fileName: "app/components/admin/MachineRentalsModule.tsx",
        lineNumber: 258,
        columnNumber: 15
      }, this),
      "? This action cannot be undone."
    ] }, void 0, true, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 256,
      columnNumber: 66
    }, this) : "Are you sure you want to delete this item?", confirmLabel: "Delete machine rental", onConfirm: handleConfirmDelete, isBusy }, void 0, false, {
      fileName: "app/components/admin/MachineRentalsModule.tsx",
      lineNumber: 254,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/MachineRentalsModule.tsx",
    lineNumber: 195,
    columnNumber: 10
  }, this);
};
_s2(MachineRentalsModule, "ZP27G5lzlYXW2Hcn/NtrEHZD++E=", false, function() {
  return [useAdminToast];
});
_c2 = MachineRentalsModule;
var _c2;
$RefreshReg$(_c2, "MachineRentalsModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/TechnicalConsultantModule.tsx
var import_react3 = __toESM(require_react(), 1);
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\TechnicalConsultantModule.tsx"
  );
  import.meta.hot.lastModified = "1781439787637.5115";
}
var EMPTY_LIST_ITEM2 = "";
var updateListItem2 = (items, index, value) => {
  const next = [...items];
  next[index] = value;
  return next;
};
var addListItem2 = (items) => [...items, EMPTY_LIST_ITEM2];
var removeListItem2 = (items, index) => items.length === 1 ? [EMPTY_LIST_ITEM2] : items.filter((_, itemIndex) => itemIndex !== index);
var trimNonEmpty2 = (items) => items.map((item) => item.trim()).filter(Boolean);
var toEditableList2 = (text) => {
  const lines = text.split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
  return lines.length > 0 ? lines : [EMPTY_LIST_ITEM2];
};
var formatDate3 = (iso) => {
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
var TechnicalConsultantModule = ({
  consultants,
  fetcher,
  cloudinaryConfig
}) => {
  _s3();
  const [isModalOpen, setModalOpen] = (0, import_react3.useState)(false);
  const [editingId, setEditingId] = (0, import_react3.useState)(null);
  const [title, setTitle] = (0, import_react3.useState)("");
  const [descriptions, setDescriptions] = (0, import_react3.useState)([EMPTY_LIST_ITEM2]);
  const [existingImages, setExistingImages] = (0, import_react3.useState)([]);
  const [imageFiles, setImageFiles] = (0, import_react3.useState)([]);
  const [isUploading, setIsUploading] = (0, import_react3.useState)(false);
  const [pendingIntent, setPendingIntent] = (0, import_react3.useState)(null);
  const [deleteTarget, setDeleteTarget] = (0, import_react3.useState)(null);
  const toast = useAdminToast();
  const formRef = (0, import_react3.useRef)(null);
  const wasSubmitting = (0, import_react3.useRef)(false);
  const isSubmitting = fetcher.state === "submitting";
  const isBusy = isUploading || isSubmitting;
  const isEditing = editingId !== null;
  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setDescriptions([EMPTY_LIST_ITEM2]);
    setExistingImages([]);
    setImageFiles([]);
    formRef.current?.reset();
  };
  const openCreateModal = () => {
    resetForm();
    setModalOpen(true);
  };
  const openEditModal = (consultant) => {
    setEditingId(consultant.id);
    setTitle(consultant.title);
    setDescriptions(toEditableList2(consultant.description));
    setExistingImages([...consultant.images]);
    setImageFiles([]);
    setModalOpen(true);
  };
  const closeModal = () => {
    if (isUploading || isSubmitting)
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
        setPendingIntent(null);
        return;
      }
      if (fetcher.data?.ok && (pendingIntent === "create-technical-consultant" || pendingIntent === "update-technical-consultant")) {
        toast.success(fetcher.data.message ?? "Updated successfully.");
        setModalOpen(false);
        resetForm();
        setPendingIntent(null);
      }
    }
  }, [fetcher.state, fetcher.data, pendingIntent, toast, toast.error, toast.success]);
  const handleSave = async () => {
    if (!title.trim()) {
      toast.error("Title is required.");
      return;
    }
    const cleanDescriptions = trimNonEmpty2(descriptions);
    if (cleanDescriptions.length === 0) {
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
        description: cleanDescriptions.join("\n"),
        images: JSON.stringify(allImages)
      };
      if (isEditing && editingId) {
        setPendingIntent("update-technical-consultant");
        fetcher.submit({
          intent: "update-technical-consultant",
          id: editingId,
          ...payload
        }, {
          method: "post"
        });
      } else {
        setPendingIntent("create-technical-consultant");
        fetcher.submit({
          intent: "create-technical-consultant",
          ...payload
        }, {
          method: "post"
        });
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to upload images.");
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
    toast.success("Technical consultant deleted.");
    fetcher.submit({
      intent: "delete-technical-consultant",
      id: deleteTarget.id
    }, {
      method: "post"
    });
    setDeleteTarget(null);
  };
  const columns = [{
    id: "title",
    header: "Title",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "font-semibold text-slate-900", children: row.title || "\u2014" }, void 0, false, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 193,
      columnNumber: 18
    }, this)
  }, {
    id: "description",
    header: "Description",
    className: "max-w-md",
    cell: (row) => {
      const list = row.description.split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
      if (list.length === 0) {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-slate-400", children: "\u2014" }, void 0, false, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 201,
          columnNumber: 16
        }, this);
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "line-clamp-2 text-slate-600", children: list[0] }, void 0, false, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 204,
          columnNumber: 13
        }, this),
        list.length > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-xs font-medium text-slate-400", children: [
          "+",
          list.length - 1,
          " more"
        ] }, void 0, true, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 205,
          columnNumber: 32
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 203,
        columnNumber: 14
      }, this);
    }
  }, {
    id: "images",
    header: "Images",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      row.images.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("img", { src: row.images[0], alt: row.title, className: "h-10 w-10 rounded-lg border border-slate-200 object-cover" }, void 0, false, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 212,
        columnNumber: 36
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-slate-600", children: [
        row.images.length,
        " image(s)"
      ] }, void 0, true, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 213,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 211,
      columnNumber: 18
    }, this)
  }, {
    id: "createdAt",
    header: "Created",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-slate-600", children: formatDate3(row.createdAt) }, void 0, false, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 218,
      columnNumber: 18
    }, this)
  }, {
    id: "actions",
    header: "Actions",
    className: "w-40",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: () => openEditModal(row), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Pencil, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 225,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 224,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: () => handleDelete(row.id, row.title || "this consultant"), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Trash2, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 228,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 227,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 223,
      columnNumber: 18
    }, this)
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("section", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "TECHNICAL CONSULTANT" }, void 0, false, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 235,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Manage technical consultants" }, void 0, false, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 236,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Add and manage consultant profiles, specialties, and advisory availability." }, void 0, false, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 237,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 234,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: openCreateModal, disabled: isBusy, className: "flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 243,
          columnNumber: 11
        }, this),
        "Add technical consultant"
      ] }, void 0, true, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 242,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 233,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AdminPaginatedTable_default, { columns, data: consultants, getRowKey: (row) => row.id, isLoading: isSubmitting, emptyMessage: 'No technical consultants yet. Use "Add technical consultant" to create one.', itemLabel: "technical consultants", pagination: {
      pageSize: 5
    } }, void 0, false, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 248,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AdminModal_default, { open: isModalOpen, onOpenChange: (open) => open ? setModalOpen(true) : closeModal(), title: isEditing ? "Edit Technical Consultant" : "Add Technical Consultant", description: "Fill in the consultant\u2019s name, specialty, and availability.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: closeModal, disabled: isBusy, className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 253,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: handleSave, disabled: isBusy, className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: isUploading ? "Uploading images..." : fetcher.state === "submitting" ? "Saving..." : isEditing ? "Update technical consultant" : "Save technical consultant" }, void 0, false, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 256,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 252,
      columnNumber: 271
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { ref: formRef, className: "space-y-4", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Title",
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "text", name: "title", value: title, onChange: (event) => setTitle(event.target.value), placeholder: "Full name", className: adminInputClass, required: true }, void 0, false, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 263,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 261,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { className: "text-sm font-medium text-slate-700", children: "Descriptions" }, void 0, false, {
            fileName: "app/components/admin/TechnicalConsultantModule.tsx",
            lineNumber: 267,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: () => setDescriptions(addListItem2(descriptions)), className: "inline-flex items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Plus, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "app/components/admin/TechnicalConsultantModule.tsx",
              lineNumber: 269,
              columnNumber: 17
            }, this),
            "Add description"
          ] }, void 0, true, {
            fileName: "app/components/admin/TechnicalConsultantModule.tsx",
            lineNumber: 268,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 266,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "space-y-2", children: descriptions.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("textarea", { value: item, onChange: (event) => setDescriptions(updateListItem2(descriptions, index, event.target.value)), placeholder: "Brief bio and expertise", className: `${adminInputClass} admin-scrollbar min-h-[88px] flex-1 resize-none`, rows: 3 }, void 0, false, {
            fileName: "app/components/admin/TechnicalConsultantModule.tsx",
            lineNumber: 275,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "button", onClick: () => setDescriptions(removeListItem2(descriptions, index)), className: "mt-2 inline-flex shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-rose-700 transition hover:bg-rose-100", "aria-label": `Remove description ${index + 1}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Trash2, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/admin/TechnicalConsultantModule.tsx",
            lineNumber: 277,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/admin/TechnicalConsultantModule.tsx",
            lineNumber: 276,
            columnNumber: 19
          }, this)
        ] }, `description-${index}`, true, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 274,
          columnNumber: 50
        }, this)) }, void 0, false, {
          fileName: "app/components/admin/TechnicalConsultantModule.tsx",
          lineNumber: 273,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 265,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AdminMultiImageUpload_default, { files: imageFiles, onChange: setImageFiles, existingUrls: existingImages, onExistingUrlsChange: setExistingImages, disabled: isBusy, maxFiles: 20 }, void 0, false, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 283,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 260,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 252,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(DeleteConfirmationModal_default, { open: deleteTarget !== null, onOpenChange: (open) => {
      if (!open)
        setDeleteTarget(null);
    }, title: "Delete technical consultant", description: deleteTarget ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: [
      "Are you sure you want to delete",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("strong", { children: deleteTarget.label }, void 0, false, {
        fileName: "app/components/admin/TechnicalConsultantModule.tsx",
        lineNumber: 290,
        columnNumber: 15
      }, this),
      "? This action cannot be undone."
    ] }, void 0, true, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 288,
      columnNumber: 72
    }, this) : "Are you sure you want to delete this item?", confirmLabel: "Delete consultant", onConfirm: handleConfirmDelete, isBusy }, void 0, false, {
      fileName: "app/components/admin/TechnicalConsultantModule.tsx",
      lineNumber: 286,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/TechnicalConsultantModule.tsx",
    lineNumber: 232,
    columnNumber: 10
  }, this);
};
_s3(TechnicalConsultantModule, "111HjxHJ1J5BcDgVFB2hTl/247I=", false, function() {
  return [useAdminToast];
});
_c3 = TechnicalConsultantModule;
var _c3;
$RefreshReg$(_c3, "TechnicalConsultantModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/TrainingModule.tsx
var import_react6 = __toESM(require_react(), 1);

// app/components/admin/TrainingGalleryModule.tsx
var import_react4 = __toESM(require_react(), 1);
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\TrainingGalleryModule.tsx"
  );
  import.meta.hot.lastModified = "1781439788820.5728";
}
var formatDate4 = (iso) => {
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
var TrainingGalleryModule = ({
  galleries,
  fetcher,
  cloudinaryConfig
}) => {
  _s4();
  const [isModalOpen, setModalOpen] = (0, import_react4.useState)(false);
  const [editingId, setEditingId] = (0, import_react4.useState)(null);
  const [collectionName, setCollectionName] = (0, import_react4.useState)("");
  const [existingImages, setExistingImages] = (0, import_react4.useState)([]);
  const [imageFiles, setImageFiles] = (0, import_react4.useState)([]);
  const [isUploading, setIsUploading] = (0, import_react4.useState)(false);
  const [pendingIntent, setPendingIntent] = (0, import_react4.useState)(null);
  const [deleteTarget, setDeleteTarget] = (0, import_react4.useState)(null);
  const toast = useAdminToast();
  const formRef = (0, import_react4.useRef)(null);
  const wasSubmitting = (0, import_react4.useRef)(false);
  const isSubmitting = fetcher.state === "submitting";
  const isBusy = isUploading || isSubmitting;
  const isEditing = editingId !== null;
  const resetForm = () => {
    setEditingId(null);
    setCollectionName("");
    setExistingImages([]);
    setImageFiles([]);
    formRef.current?.reset();
  };
  const openCreateModal = () => {
    resetForm();
    setModalOpen(true);
  };
  const openEditModal = (gallery) => {
    setEditingId(gallery.id);
    setCollectionName(gallery.collectionName);
    setExistingImages([...gallery.images]);
    setImageFiles([]);
    setModalOpen(true);
  };
  const closeModal = () => {
    if (isUploading || isSubmitting)
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
        setPendingIntent(null);
        return;
      }
      if (fetcher.data?.ok && (pendingIntent === "create-training-gallery" || pendingIntent === "update-training-gallery")) {
        toast.success(fetcher.data.message ?? "Updated successfully.");
        setModalOpen(false);
        resetForm();
        setPendingIntent(null);
      }
    }
  }, [fetcher.state, fetcher.data, pendingIntent, toast, toast.error, toast.success]);
  const handleSave = async () => {
    if (!collectionName.trim()) {
      toast.error("Collection name is required.");
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
      if (allImages.length === 0) {
        toast.error("At least one image is required.");
        return;
      }
      if (allImages.length > 20) {
        toast.error("Maximum 20 images allowed.");
        return;
      }
      const payload = {
        collectionName: collectionName.trim(),
        images: JSON.stringify(allImages)
      };
      if (isEditing && editingId) {
        setPendingIntent("update-training-gallery");
        fetcher.submit({
          intent: "update-training-gallery",
          id: editingId,
          ...payload
        }, {
          method: "post"
        });
      } else {
        setPendingIntent("create-training-gallery");
        fetcher.submit({
          intent: "create-training-gallery",
          ...payload
        }, {
          method: "post"
        });
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to upload images.");
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
    toast.success("Gallery collection deleted.");
    fetcher.submit({
      intent: "delete-training-gallery",
      id: deleteTarget.id
    }, {
      method: "post"
    });
    setDeleteTarget(null);
  };
  const columns = [{
    id: "collectionName",
    header: "Collection",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "font-semibold text-slate-900", children: row.collectionName || "\u2014" }, void 0, false, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 175,
      columnNumber: 18
    }, this)
  }, {
    id: "images",
    header: "Images",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      row.images.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("img", { src: row.images[0], alt: row.collectionName, className: "h-10 w-10 rounded-lg border border-slate-200 object-cover" }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 180,
        columnNumber: 38
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-slate-600", children: [
        row.images.length,
        " image(s)"
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 181,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 179,
      columnNumber: 18
    }, this)
  }, {
    id: "createdAt",
    header: "Created",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-slate-600", children: formatDate4(row.createdAt) }, void 0, false, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 186,
      columnNumber: 18
    }, this)
  }, {
    id: "actions",
    header: "Actions",
    className: "w-40",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", onClick: () => openEditModal(row), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Pencil, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 193,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 192,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", onClick: () => handleDelete(row.id, row.collectionName || "this gallery collection"), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Trash2, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 196,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 195,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 191,
      columnNumber: 18
    }, this)
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-lg font-semibold text-slate-700", children: "Gallery  Collections" }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 203,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 202,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", onClick: openCreateModal, disabled: isBusy, className: "flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/TrainingGalleryModule.tsx",
          lineNumber: 207,
          columnNumber: 13
        }, this),
        "Add gallery collection"
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 206,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 201,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AdminPaginatedTable_default, { columns, data: galleries, getRowKey: (row) => row.id, isLoading: isSubmitting, emptyMessage: 'No gallery collections yet. Use "Add gallery collection" to create one.', itemLabel: "galleries", pagination: {
      pageSize: 5
    } }, void 0, false, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 212,
      columnNumber: 12
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AdminModal_default, { open: isModalOpen, onOpenChange: (open) => open ? setModalOpen(true) : closeModal(), title: isEditing ? "Edit Gallery Collection" : "Add Gallery Collection", description: "Fill in the gallery collection details.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", onClick: closeModal, disabled: isBusy, className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 217,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { type: "button", onClick: handleSave, disabled: isBusy, className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: isUploading ? "Uploading images..." : fetcher.state === "submitting" ? "Saving..." : isEditing ? "Update collection" : "Save collection" }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 220,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 216,
      columnNumber: 253
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { ref: formRef, className: "space-y-4", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "collectionName", className: "block text-sm font-medium text-slate-700", children: "Collection Name" }, void 0, false, {
          fileName: "app/components/admin/TrainingGalleryModule.tsx",
          lineNumber: 226,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { type: "text", id: "collectionName", name: "collectionName", value: collectionName, onChange: (event) => setCollectionName(event.target.value), className: adminInputClass, placeholder: "e.g. Spring 2024 Training Highlights", required: true }, void 0, false, {
          fileName: "app/components/admin/TrainingGalleryModule.tsx",
          lineNumber: 229,
          columnNumber: 25
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 225,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(AdminMultiImageUpload_default, { files: imageFiles, onChange: setImageFiles, existingUrls: existingImages, onExistingUrlsChange: setExistingImages, disabled: isBusy, maxFiles: 20 }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 232,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 224,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 216,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(DeleteConfirmationModal_default, { open: deleteTarget !== null, onOpenChange: (open) => {
      if (!open)
        setDeleteTarget(null);
    }, title: "Delete training gallery", description: deleteTarget ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
      "Are you sure you want to delete",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("strong", { children: deleteTarget.label }, void 0, false, {
        fileName: "app/components/admin/TrainingGalleryModule.tsx",
        lineNumber: 239,
        columnNumber: 15
      }, this),
      "? This action cannot be undone."
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 237,
      columnNumber: 68
    }, this) : "Are you sure you want to delete this item?", confirmLabel: "Delete gallery", onConfirm: handleConfirmDelete, isBusy }, void 0, false, {
      fileName: "app/components/admin/TrainingGalleryModule.tsx",
      lineNumber: 235,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/TrainingGalleryModule.tsx",
    lineNumber: 200,
    columnNumber: 10
  }, this);
};
_s4(TrainingGalleryModule, "LX2FZCv0MUxtZm6vpPqD6tNOuNY=", false, function() {
  return [useAdminToast];
});
_c4 = TrainingGalleryModule;
var _c4;
$RefreshReg$(_c4, "TrainingGalleryModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/TrainingHeroModule.tsx
var import_react5 = __toESM(require_react(), 1);
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\TrainingHeroModule.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\TrainingHeroModule.tsx"
  );
  import.meta.hot.lastModified = "1781439774050.5388";
}
var EMPTY_LIST_ITEM3 = "";
var updateListItem3 = (items, index, value) => {
  const next = [...items];
  next[index] = value;
  return next;
};
var addListItem3 = (items) => [...items, EMPTY_LIST_ITEM3];
var removeListItem3 = (items, index) => items.length === 1 ? [EMPTY_LIST_ITEM3] : items.filter((_, itemIndex) => itemIndex !== index);
var trimNonEmpty3 = (items) => items.map((item) => item.trim()).filter(Boolean);
var toEditableList3 = (items) => items.length > 0 ? items : [EMPTY_LIST_ITEM3];
var formatDate5 = (iso) => {
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
var TrainingHeroModule = ({
  heroes,
  fetcher
}) => {
  _s5();
  const [isModalOpen, setModalOpen] = (0, import_react5.useState)(false);
  const [editingId, setEditingId] = (0, import_react5.useState)(null);
  const [title, setTitle] = (0, import_react5.useState)("");
  const [descriptions, setDescriptions] = (0, import_react5.useState)([EMPTY_LIST_ITEM3]);
  const [pendingIntent, setPendingIntent] = (0, import_react5.useState)(null);
  const [deleteTarget, setDeleteTarget] = (0, import_react5.useState)(null);
  const toast = useAdminToast();
  const formRef = (0, import_react5.useRef)(null);
  const wasSubmitting = (0, import_react5.useRef)(false);
  const isSubmitting = fetcher.state === "submitting";
  const isBusy = isSubmitting;
  const isEditing = editingId !== null;
  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setDescriptions([EMPTY_LIST_ITEM3]);
    formRef.current?.reset();
  };
  const openCreateModal = () => {
    resetForm();
    setModalOpen(true);
  };
  const openEditModal = (item) => {
    setEditingId(item.id);
    setTitle(item.title);
    setDescriptions(toEditableList3(item.descriptions));
    setModalOpen(true);
  };
  const closeModal = () => {
    if (isSubmitting)
      return;
    setModalOpen(false);
    resetForm();
  };
  (0, import_react5.useEffect)(() => {
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
      if (fetcher.data?.ok && (pendingIntent === "create-training-hero" || pendingIntent === "update-training-hero")) {
        toast.success(fetcher.data.message ?? "Updated successfully.");
        setModalOpen(false);
        resetForm();
        setPendingIntent(null);
      }
    }
  }, [fetcher.state, fetcher.data, pendingIntent, toast.error, toast.success, toast]);
  const handleSave = () => {
    const cleanTitle = title.trim();
    const cleanDescriptions = trimNonEmpty3(descriptions);
    if (!cleanTitle) {
      toast.error("Title is required.");
      return;
    }
    if (cleanDescriptions.length === 0) {
      toast.error("At least one description is required.");
      return;
    }
    const payload = {
      title: cleanTitle,
      descriptions: JSON.stringify(cleanDescriptions)
    };
    if (isEditing && editingId) {
      setPendingIntent("update-training-hero");
      fetcher.submit({
        intent: "update-training-hero",
        id: editingId,
        ...payload
      }, {
        method: "post"
      });
    } else {
      setPendingIntent("create-training-hero");
      fetcher.submit({
        intent: "create-training-hero",
        ...payload
      }, {
        method: "post"
      });
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
    toast.success("Training hero deleted.");
    fetcher.submit({
      intent: "delete-training-hero",
      id: deleteTarget.id
    }, {
      method: "post"
    });
    setDeleteTarget(null);
  };
  const columns = [{
    id: "title",
    header: "Title",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "font-semibold text-slate-900", children: row.title || "\u2014" }, void 0, false, {
      fileName: "app/components/admin/TrainingHeroModule.tsx",
      lineNumber: 162,
      columnNumber: 18
    }, this)
  }, {
    id: "descriptions",
    header: "Descriptions",
    className: "max-w-md",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-1", children: row.descriptions.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "line-clamp-2 text-slate-600", children: row.descriptions[0] }, void 0, false, {
        fileName: "app/components/admin/TrainingHeroModule.tsx",
        lineNumber: 169,
        columnNumber: 15
      }, this),
      row.descriptions.length > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-xs font-medium text-slate-400", children: [
        "+",
        row.descriptions.length - 1,
        " more"
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingHeroModule.tsx",
        lineNumber: 170,
        columnNumber: 46
      }, this) : null
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingHeroModule.tsx",
      lineNumber: 168,
      columnNumber: 42
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-slate-400", children: "\u2014" }, void 0, false, {
      fileName: "app/components/admin/TrainingHeroModule.tsx",
      lineNumber: 173,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/admin/TrainingHeroModule.tsx",
      lineNumber: 167,
      columnNumber: 18
    }, this)
  }, {
    id: "createdAt",
    header: "Created",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-slate-600", children: formatDate5(row.createdAt) }, void 0, false, {
      fileName: "app/components/admin/TrainingHeroModule.tsx",
      lineNumber: 178,
      columnNumber: 18
    }, this)
  }, {
    id: "actions",
    header: "Actions",
    className: "w-40",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", onClick: () => openEditModal(row), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Pencil, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/TrainingHeroModule.tsx",
        lineNumber: 185,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/TrainingHeroModule.tsx",
        lineNumber: 184,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", onClick: () => handleDelete(row.id, row.title || "this training hero"), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Trash2, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/TrainingHeroModule.tsx",
        lineNumber: 188,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/TrainingHeroModule.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingHeroModule.tsx",
      lineNumber: 183,
      columnNumber: 18
    }, this)
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "TRAINING HERO" }, void 0, false, {
          fileName: "app/components/admin/TrainingHeroModule.tsx",
          lineNumber: 195,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mt-2 text-2xl font-semibold text-slate-900", children: "Manage training hero section" }, void 0, false, {
          fileName: "app/components/admin/TrainingHeroModule.tsx",
          lineNumber: 196,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Update the title and descriptions shown on the training hero section." }, void 0, false, {
          fileName: "app/components/admin/TrainingHeroModule.tsx",
          lineNumber: 197,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingHeroModule.tsx",
        lineNumber: 194,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", onClick: openCreateModal, disabled: isBusy, className: "flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/TrainingHeroModule.tsx",
          lineNumber: 203,
          columnNumber: 11
        }, this),
        "Add hero content"
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingHeroModule.tsx",
        lineNumber: 202,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingHeroModule.tsx",
      lineNumber: 193,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AdminPaginatedTable_default, { columns, data: heroes, getRowKey: (row) => row.id, isLoading: isSubmitting, emptyMessage: 'No training hero content yet. Click "Add hero content" to create one.', itemLabel: "training hero entries", pagination: {
      pageSize: 5
    } }, void 0, false, {
      fileName: "app/components/admin/TrainingHeroModule.tsx",
      lineNumber: 208,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(AdminModal_default, { open: isModalOpen, onOpenChange: (open) => open ? setModalOpen(true) : closeModal(), title: isEditing ? "Edit Training Hero" : "Add Training Hero", description: "Input the title and descriptions for the training hero section.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", onClick: closeModal, disabled: isBusy, className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/TrainingHeroModule.tsx",
        lineNumber: 213,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", onClick: handleSave, disabled: isBusy, className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400", children: fetcher.state === "submitting" ? "Saving..." : isEditing ? "Update" : "Add" }, void 0, false, {
        fileName: "app/components/admin/TrainingHeroModule.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingHeroModule.tsx",
      lineNumber: 212,
      columnNumber: 261
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { ref: formRef, className: "space-y-4", onSubmit: (event) => {
      event.preventDefault();
      handleSave();
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Title",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "text", name: "title", placeholder: "Enter title", value: title, onChange: (event) => setTitle(event.target.value), className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/TrainingHeroModule.tsx",
          lineNumber: 226,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingHeroModule.tsx",
        lineNumber: 224,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "text-sm font-medium text-slate-700", children: "Descriptions" }, void 0, false, {
            fileName: "app/components/admin/TrainingHeroModule.tsx",
            lineNumber: 230,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", onClick: () => setDescriptions(addListItem3(descriptions)), className: "inline-flex items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Plus, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "app/components/admin/TrainingHeroModule.tsx",
              lineNumber: 232,
              columnNumber: 17
            }, this),
            "Add description"
          ] }, void 0, true, {
            fileName: "app/components/admin/TrainingHeroModule.tsx",
            lineNumber: 231,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/TrainingHeroModule.tsx",
          lineNumber: 229,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "space-y-2", children: descriptions.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("textarea", { value: item, onChange: (event) => setDescriptions(updateListItem3(descriptions, index, event.target.value)), placeholder: "Brief description for the training hero section", className: `${adminInputClass} admin-scrollbar min-h-[88px] flex-1 resize-none`, rows: 3 }, void 0, false, {
            fileName: "app/components/admin/TrainingHeroModule.tsx",
            lineNumber: 238,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "button", onClick: () => setDescriptions(removeListItem3(descriptions, index)), className: "mt-2 inline-flex shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-rose-700 transition hover:bg-rose-100", "aria-label": `Remove description ${index + 1}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Trash2, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/admin/TrainingHeroModule.tsx",
            lineNumber: 240,
            columnNumber: 21
          }, this) }, void 0, false, {
            fileName: "app/components/admin/TrainingHeroModule.tsx",
            lineNumber: 239,
            columnNumber: 19
          }, this)
        ] }, `description-${index}`, true, {
          fileName: "app/components/admin/TrainingHeroModule.tsx",
          lineNumber: 237,
          columnNumber: 50
        }, this)) }, void 0, false, {
          fileName: "app/components/admin/TrainingHeroModule.tsx",
          lineNumber: 236,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingHeroModule.tsx",
        lineNumber: 228,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingHeroModule.tsx",
      lineNumber: 220,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/TrainingHeroModule.tsx",
      lineNumber: 212,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(DeleteConfirmationModal_default, { open: deleteTarget !== null, onOpenChange: (open) => {
      if (!open)
        setDeleteTarget(null);
    }, title: "Delete training hero", description: deleteTarget ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
      "Are you sure you want to delete",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("strong", { children: deleteTarget.label }, void 0, false, {
        fileName: "app/components/admin/TrainingHeroModule.tsx",
        lineNumber: 252,
        columnNumber: 15
      }, this),
      "? This action cannot be undone."
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingHeroModule.tsx",
      lineNumber: 250,
      columnNumber: 65
    }, this) : "Are you sure you want to delete this item?", confirmLabel: "Delete training hero", onConfirm: handleConfirmDelete, isBusy }, void 0, false, {
      fileName: "app/components/admin/TrainingHeroModule.tsx",
      lineNumber: 248,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/TrainingHeroModule.tsx",
    lineNumber: 192,
    columnNumber: 10
  }, this);
};
_s5(TrainingHeroModule, "ZP27G5lzlYXW2Hcn/NtrEHZD++E=", false, function() {
  return [useAdminToast];
});
_c5 = TrainingHeroModule;
var _c5;
$RefreshReg$(_c5, "TrainingHeroModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/TrainingModule.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s6 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\TrainingModule.tsx"
  );
  import.meta.hot.lastModified = "1781439775028.2495";
}
var formatDate6 = (iso) => {
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
var openNativePicker = (event) => {
  const input = event.currentTarget;
  if (typeof input.showPicker === "function") {
    input.showPicker();
  }
};
var blockManualTyping = (event) => {
  const allowedKeys = ["Tab", "Shift", "Enter", "Escape", "ArrowLeft", "ArrowRight"];
  if (!allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
};
var TrainingModule = ({
  sessions,
  galleries,
  heroes,
  fetcher,
  cloudinaryConfig
}) => {
  _s6();
  const [isModalOpen, setModalOpen] = (0, import_react6.useState)(false);
  const [editingId, setEditingId] = (0, import_react6.useState)(null);
  const [title, setTitle] = (0, import_react6.useState)("");
  const [startDate, setStartDate] = (0, import_react6.useState)("");
  const [endDate, setEndDate] = (0, import_react6.useState)("");
  const [location, setLocation] = (0, import_react6.useState)("");
  const [pendingIntent, setPendingIntent] = (0, import_react6.useState)(null);
  const [deleteTarget, setDeleteTarget] = (0, import_react6.useState)(null);
  const toast = useAdminToast();
  const formRef = (0, import_react6.useRef)(null);
  const wasSubmitting = (0, import_react6.useRef)(false);
  const isSubmitting = fetcher.state === "submitting";
  const isBusy = isSubmitting;
  const isEditing = editingId !== null;
  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setStartDate("");
    setEndDate("");
    setLocation("");
    formRef.current?.reset();
  };
  const openCreateModal = () => {
    resetForm();
    setModalOpen(true);
  };
  const openEditModal = (session) => {
    setEditingId(session.id);
    setTitle(session.title);
    setStartDate(session.startDate);
    setEndDate(session.endDate);
    setLocation(session.location);
    setModalOpen(true);
  };
  const closeModal = () => {
    if (isSubmitting)
      return;
    setModalOpen(false);
    resetForm();
  };
  (0, import_react6.useEffect)(() => {
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
      if (fetcher.data?.ok && (pendingIntent === "create-training-session" || pendingIntent === "update-training-session")) {
        toast.success(fetcher.data.message ?? "Updated successfully.");
        setModalOpen(false);
        resetForm();
        setPendingIntent(null);
      }
    }
  }, [fetcher.state, fetcher.data, pendingIntent, toast.error, toast.success, toast]);
  const handleSave = () => {
    const intent = isEditing ? "update-training-session" : "create-training-session";
    setPendingIntent(intent);
    fetcher.submit({
      intent,
      ...editingId ? {
        id: editingId
      } : {},
      title: title.trim(),
      startDate: startDate.trim(),
      endDate: endDate.trim(),
      time: "",
      location: location.trim()
    }, {
      method: "post"
    });
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
    toast.success("Training session deleted.");
    fetcher.submit({
      intent: "delete-training-session",
      id: deleteTarget.id
    }, {
      method: "post"
    });
    setDeleteTarget(null);
  };
  const columns = [{
    id: "title",
    header: "Title",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "font-semibold text-slate-900", children: row.title || "\u2014" }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 158,
      columnNumber: 18
    }, this)
  }, {
    id: "schedule",
    header: "Schedule",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "space-y-1 text-xs text-slate-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: row.startDate && row.endDate ? row.startDate === row.endDate ? formatDate6(row.startDate) : `${formatDate6(row.startDate)} \u2013 ${formatDate6(row.endDate)}` : "No date" }, void 0, false, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 163,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: row.location || "No location" }, void 0, false, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 162,
      columnNumber: 18
    }, this)
  }, {
    id: "createdAt",
    header: "Created",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { className: "text-slate-600", children: formatDate6(row.createdAt) }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 171,
      columnNumber: 18
    }, this)
  }, {
    id: "actions",
    header: "Actions",
    className: "w-40",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "button", onClick: () => openEditModal(row), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Pencil, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 178,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 177,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "button", onClick: () => handleDelete(row.id, row.title || "this training session"), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Trash2, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 181,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 180,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 176,
      columnNumber: 18
    }, this)
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("section", { className: "space-y-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TrainingHeroModule, { heroes, fetcher }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 186,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("hr", { className: "my-4 border-slate-200" }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 188,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "TRAINING" }, void 0, false, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Manage training sessions" }, void 0, false, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 193,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Add and manage workshop schedules, topics, and venue details." }, void 0, false, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 194,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 191,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "button", onClick: openCreateModal, disabled: isBusy, className: "flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 200,
          columnNumber: 11
        }, this),
        "Add training session"
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 199,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 190,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "text-lg font-semibold text-slate-700", children: "Event schedule" }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 206,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 205,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AdminPaginatedTable_default, { columns, data: sessions, getRowKey: (row) => row.id, isLoading: isSubmitting, emptyMessage: 'No training sessions yet. Use "Add training session" to create one.', itemLabel: "training sessions", pagination: {
      pageSize: 5
    } }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 211,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(AdminModal_default, { open: isModalOpen, onOpenChange: (open) => open ? setModalOpen(true) : closeModal(), title: isEditing ? "Edit Training Session" : "Add Training Session", description: "Fill in the training session details and schedule.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "button", onClick: closeModal, disabled: isBusy, className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { type: "button", onClick: handleSave, disabled: isBusy, className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: fetcher.state === "submitting" ? "Saving..." : isEditing ? "Update training session" : "Save training session" }, void 0, false, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 219,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 215,
      columnNumber: 254
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("form", { ref: formRef, className: "space-y-4", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Session title",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "text", name: "title", value: title, onChange: (event) => setTitle(event.target.value), placeholder: "Workshop title", className: adminInputClass, required: true }, void 0, false, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 226,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 224,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
          "Start date",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "date", name: "startDate", value: startDate, onChange: (event) => setStartDate(event.target.value), onClick: openNativePicker, onKeyDown: blockManualTyping, className: adminInputClass }, void 0, false, {
            fileName: "app/components/admin/TrainingModule.tsx",
            lineNumber: 231,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 229,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
          "End date",
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "date", name: "endDate", value: endDate, min: startDate || void 0, onChange: (event) => setEndDate(event.target.value), onClick: openNativePicker, onKeyDown: blockManualTyping, className: adminInputClass }, void 0, false, {
            fileName: "app/components/admin/TrainingModule.tsx",
            lineNumber: 235,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 233,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 228,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Venue or link",
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { type: "text", name: "location", value: location, onChange: (event) => setLocation(event.target.value), placeholder: "Venue or online link", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/TrainingModule.tsx",
          lineNumber: 240,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 238,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 223,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 215,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("hr", { className: "my-4 border-slate-200" }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 245,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(TrainingGalleryModule, { galleries, fetcher, cloudinaryConfig }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 247,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(DeleteConfirmationModal_default, { open: deleteTarget !== null, onOpenChange: (open) => {
      if (!open)
        setDeleteTarget(null);
    }, title: "Delete training session", description: deleteTarget ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
      "Are you sure you want to delete",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("strong", { children: deleteTarget.label }, void 0, false, {
        fileName: "app/components/admin/TrainingModule.tsx",
        lineNumber: 252,
        columnNumber: 15
      }, this),
      "? This action cannot be undone."
    ] }, void 0, true, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 250,
      columnNumber: 68
    }, this) : "Are you sure you want to delete this item?", confirmLabel: "Delete session", onConfirm: handleConfirmDelete, isBusy }, void 0, false, {
      fileName: "app/components/admin/TrainingModule.tsx",
      lineNumber: 248,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/TrainingModule.tsx",
    lineNumber: 185,
    columnNumber: 10
  }, this);
};
_s6(TrainingModule, "Zf4w6mXixuOi6vh+l9QPUSgwYbk=", false, function() {
  return [useAdminToast];
});
_c6 = TrainingModule;
var _c6;
$RefreshReg$(_c6, "TrainingModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/admin/index.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\index.ts"
  );
  import.meta.hot.lastModified = "1781439436598.697";
}

// app/routes/admin.services.tsx
var import_cloudinary4 = __toESM(require_cloudinary(), 1);
var import_session = __toESM(require_session(), 1);
var import_trainings = __toESM(require_trainings(), 1);
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
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
var _s7 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\admin.services.tsx"
  );
  import.meta.hot.lastModified = "1781439449240.548";
}
var AdminServices = () => {
  _s7();
  const {
    machineRentals,
    machineRentalGalleries,
    trainingSessions,
    trainingGalleries,
    trainingHeroes,
    technicalConsultants,
    cloudinaryConfig
  } = useLoaderData();
  const fetcher = useFetcher();
  const [activeSection, setActiveSection] = (0, import_react8.useState)("rentals");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-col gap-3 sm:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "button", onClick: () => setActiveSection("rentals"), className: `w-full sm:basis-0 sm:flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${activeSection === "rentals" ? "bg-emerald-500 text-white hover:bg-emerald-400" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Tractor, { className: "mr-2 inline-block" }, void 0, false, {
          fileName: "app/routes/admin.services.tsx",
          lineNumber: 783,
          columnNumber: 11
        }, this),
        "Machine Rentals"
      ] }, void 0, true, {
        fileName: "app/routes/admin.services.tsx",
        lineNumber: 782,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "button", onClick: () => setActiveSection("consultation"), className: `w-full sm:basis-0 sm:flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${activeSection === "consultation" ? "bg-emerald-500 text-white hover:bg-emerald-400" : "bg-slate-200 text-slate-900 hover:bg-emerald-300"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(UserCog, { className: "mr-2 inline-block" }, void 0, false, {
          fileName: "app/routes/admin.services.tsx",
          lineNumber: 787,
          columnNumber: 11
        }, this),
        "Technical Consultant"
      ] }, void 0, true, {
        fileName: "app/routes/admin.services.tsx",
        lineNumber: 786,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { type: "button", onClick: () => setActiveSection("training"), className: `w-full sm:basis-0 sm:flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${activeSection === "training" ? "bg-emerald-500 text-white hover:bg-emerald-400" : "bg-slate-200 text-slate-900 hover:bg-slate-300"}`, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Calendar, { className: "mr-2 inline-block" }, void 0, false, {
          fileName: "app/routes/admin.services.tsx",
          lineNumber: 791,
          columnNumber: 11
        }, this),
        "Training"
      ] }, void 0, true, {
        fileName: "app/routes/admin.services.tsx",
        lineNumber: 790,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/admin.services.tsx",
      lineNumber: 781,
      columnNumber: 7
    }, this),
    activeSection === "rentals" ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(MachineRentalsModule, { rentals: machineRentals, galleries: machineRentalGalleries, fetcher, cloudinaryConfig }, void 0, false, {
      fileName: "app/routes/admin.services.tsx",
      lineNumber: 796,
      columnNumber: 38
    }, this) : activeSection === "consultation" ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TechnicalConsultantModule, { consultants: technicalConsultants, fetcher, cloudinaryConfig }, void 0, false, {
      fileName: "app/routes/admin.services.tsx",
      lineNumber: 796,
      columnNumber: 214
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(TrainingModule, { sessions: trainingSessions, galleries: trainingGalleries, heroes: trainingHeroes, fetcher, cloudinaryConfig }, void 0, false, {
      fileName: "app/routes/admin.services.tsx",
      lineNumber: 796,
      columnNumber: 335
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/admin.services.tsx",
    lineNumber: 780,
    columnNumber: 10
  }, this);
};
_s7(AdminServices, "dVNjTHQC/zEQwHlDdBFFNPb6hAA=", false, function() {
  return [useLoaderData, useFetcher];
});
_c7 = AdminServices;
var admin_services_default = AdminServices;
var _c7;
$RefreshReg$(_c7, "AdminServices");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  admin_services_default as default
};
//# sourceMappingURL=/build/routes/admin.services-354JV3SP.js.map
