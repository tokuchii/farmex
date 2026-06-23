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
  sortFilesByName
} from "/build/_shared/chunk-UF6K54N4.js";
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

// app/components/admin/NewsModule.tsx
var import_react = __toESM(require_react(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\admin\\\\NewsModule.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\admin\\NewsModule.tsx"
  );
  import.meta.hot.lastModified = "1781445242539.8623";
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
var NewsModule = ({
  news,
  fetcher,
  cloudinaryConfig
}) => {
  _s();
  const [modalOpen, setModalOpen] = (0, import_react.useState)(false);
  const [editingId, setEditingId] = (0, import_react.useState)(null);
  const [title, setTitle] = (0, import_react.useState)("");
  const [author, setAuthor] = (0, import_react.useState)("");
  const [organization, setOrganization] = (0, import_react.useState)("");
  const [position, setPosition] = (0, import_react.useState)("");
  const [notes, setNotes] = (0, import_react.useState)([EMPTY_LIST_ITEM]);
  const [location, setLocation] = (0, import_react.useState)("");
  const [publishedAt, setPublishedAt] = (0, import_react.useState)("");
  const [summary, setSummary] = (0, import_react.useState)([EMPTY_LIST_ITEM]);
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
    setTitle("");
    setAuthor("");
    setOrganization("");
    setPosition("");
    setNotes([EMPTY_LIST_ITEM]);
    setLocation("");
    setPublishedAt("");
    setSummary([EMPTY_LIST_ITEM]);
    setExistingImages([]);
    setImageFiles([]);
    formRef.current?.reset();
  };
  const openCreateModal = () => {
    resetForm();
    setModalOpen(true);
  };
  const openEditModal = (article) => {
    setEditingId(article.id);
    setTitle(article.title);
    setAuthor(article.author);
    setOrganization(article.organization);
    setPosition(article.position);
    setNotes(toEditableList(article.notes));
    setLocation(article.location);
    setPublishedAt(article.publishedAt);
    setSummary(toEditableList(article.summary));
    setExistingImages([...article.images]);
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
      if (fetcher.data?.ok && (pendingIntent === "create-news" || pendingIntent === "update-news")) {
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
    if (imageFiles.length > 0 && !cloudinaryConfig) {
      toast.error("Image upload is not configured.");
      return;
    }
    setIsUploading(true);
    try {
      const sortedImageFiles = sortFilesByName(imageFiles);
      const newImageUrls = sortedImageFiles.length > 0 && cloudinaryConfig ? await uploadImagesToCloudinary(sortedImageFiles, cloudinaryConfig) : [];
      const allImages = [...existingImages, ...newImageUrls];
      if (allImages.length > 20) {
        toast.error("Maximum 20 images allowed.");
        return;
      }
      const cleanNotes = trimNonEmpty(notes);
      const cleanSummary = trimNonEmpty(summary);
      const payload = {
        title: title.trim(),
        author: author.trim(),
        organization: organization.trim(),
        position: position.trim(),
        notes: cleanNotes.join("\n"),
        location: location.trim(),
        publishedAt: publishedAt.trim(),
        summary: cleanSummary.join("\n"),
        images: JSON.stringify(allImages)
      };
      if (isEditing && editingId) {
        setPendingIntent("update-news");
        fetcher.submit({
          intent: "update-news",
          id: editingId,
          ...payload
        }, {
          method: "post"
        });
      } else {
        setPendingIntent("create-news");
        fetcher.submit({
          intent: "create-news",
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
    toast.success("Article deleted.");
    fetcher.submit({
      intent: "delete-news",
      id: deleteTarget.id
    }, {
      method: "post"
    });
    setDeleteTarget(null);
  };
  const columns = [{
    id: "title",
    header: "Title",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-semibold text-slate-900", children: row.title || "\u2014" }, void 0, false, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 204,
      columnNumber: 18
    }, this)
  }, {
    id: "meta",
    header: "Details",
    className: "max-w-xs",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1 text-xs text-slate-500", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: row.author || "No author" }, void 0, false, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 210,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: row.organization || "No organization" }, void 0, false, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 211,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-slate-400 text-[0.625rem]", children: row.publishedAt || "No publish date" }, void 0, false, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 212,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 209,
      columnNumber: 18
    }, this)
  }, {
    id: "summary",
    header: "Summary",
    className: "max-w-sm",
    cell: (row) => {
      const list = row.summary.split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
      if (list.length === 0) {
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-slate-400", children: "\u2014" }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 221,
          columnNumber: 16
        }, this);
      }
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-1", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "line-clamp-2 text-slate-600", children: list[0] }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 224,
          columnNumber: 25
        }, this),
        list.length > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xs font-medium text-slate-400", children: [
          "+",
          list.length - 1,
          " more"
        ] }, void 0, true, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 225,
          columnNumber: 44
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 223,
        columnNumber: 14
      }, this);
    }
  }, {
    id: "images",
    header: "Images",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-slate-600", children: [
      row.images.length,
      " image(s)"
    ] }, void 0, true, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 233,
      columnNumber: 18
    }, this)
  }, {
    id: "actions",
    header: "Actions",
    className: "w-40",
    cell: (row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => openEditModal(row), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Pencil, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 240,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 239,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => handleDelete(row.id, row.title || "this article"), disabled: isBusy, className: "inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-3.5 w-3.5" }, void 0, false, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 243,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 242,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 238,
      columnNumber: 18
    }, this)
  }];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-emerald-600", children: "News" }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 250,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "mt-2 text-3xl font-semibold text-slate-900", children: "Manage news" }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 251,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mt-3 text-slate-500", children: "Create and update news articles shown on the public site." }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 252,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 249,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: openCreateModal, disabled: isBusy, className: "flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "mr-2 h-4 w-4" }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 258,
          columnNumber: 17
        }, this),
        "Add article"
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 257,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 248,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminPaginatedTable_default, { columns, data: news, getRowKey: (row) => row.id }, void 0, false, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 263,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminModal_default, { open: modalOpen, onOpenChange: (open) => open ? setModalOpen(true) : closeModal(), title: isEditing ? "Edit news article" : "Add news article", description: "Fill in the details below.", size: "lg", footer: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: closeModal, disabled: isBusy, className: "rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60", children: "Cancel" }, void 0, false, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 266,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: handleSave, disabled: isBusy, className: "rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60", children: isUploading ? "Uploading images..." : fetcher.state === "submitting" ? "Saving..." : isEditing ? "Update article" : "Save article" }, void 0, false, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 269,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 265,
      columnNumber: 226
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { ref: formRef, className: "space-y-4", onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Title",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "title", value: title, onChange: (event) => setTitle(event.target.value), placeholder: "Article title", className: adminInputClass, required: true }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 276,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 274,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Author",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1 text-slate-400 text-xs", children: "(Optional)" }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 280,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "author", value: author, onChange: (event) => setAuthor(event.target.value), placeholder: "Full name", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 282,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 278,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Organization",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "organization", value: organization, onChange: (event) => setOrganization(event.target.value), placeholder: "Name of the organization", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 287,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 285,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Position",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1 text-slate-400 text-xs", children: "(Optional)" }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 292,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "position", value: position, onChange: (event) => setPosition(event.target.value), placeholder: "Job title or role", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 294,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 290,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-slate-700", children: [
            "Notes",
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "ml-1 text-slate-400 text-xs", children: "(Optional)" }, void 0, false, {
              fileName: "app/components/admin/NewsModule.tsx",
              lineNumber: 300,
              columnNumber: 29
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/admin/NewsModule.tsx",
            lineNumber: 298,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setNotes(addListItem(notes)), className: "inline-flex items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "app/components/admin/NewsModule.tsx",
              lineNumber: 303,
              columnNumber: 29
            }, this),
            "Add note"
          ] }, void 0, true, {
            fileName: "app/components/admin/NewsModule.tsx",
            lineNumber: 302,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 297,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: notes.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { value: item, onChange: (event) => setNotes(updateListItem(notes, index, event.target.value)), placeholder: "Additional details or context", className: `${adminInputClass} admin-scrollbar min-h-[88px] flex-1 resize-none`, rows: 3 }, void 0, false, {
            fileName: "app/components/admin/NewsModule.tsx",
            lineNumber: 309,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setNotes(removeListItem(notes, index)), className: "mt-2 inline-flex shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-rose-700 transition hover:bg-rose-100", "aria-label": `Remove note ${index + 1}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/admin/NewsModule.tsx",
            lineNumber: 311,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/admin/NewsModule.tsx",
            lineNumber: 310,
            columnNumber: 33
          }, this)
        ] }, `notes-${index}`, true, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 308,
          columnNumber: 53
        }, this)) }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 307,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 296,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Location",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "text", name: "location", value: location, onChange: (event) => setLocation(event.target.value), placeholder: "City, state, or region", className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 318,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 316,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { className: "block text-sm font-medium text-slate-700", children: [
        "Publish date",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", name: "publishedAt", value: publishedAt, onChange: (event) => setPublishedAt(event.target.value), className: adminInputClass }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 322,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 320,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-sm font-medium text-slate-700", children: "Summary" }, void 0, false, {
            fileName: "app/components/admin/NewsModule.tsx",
            lineNumber: 326,
            columnNumber: 25
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setSummary(addListItem(summary)), className: "inline-flex items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Plus, { className: "h-3.5 w-3.5" }, void 0, false, {
              fileName: "app/components/admin/NewsModule.tsx",
              lineNumber: 328,
              columnNumber: 29
            }, this),
            "Add summary"
          ] }, void 0, true, {
            fileName: "app/components/admin/NewsModule.tsx",
            lineNumber: 327,
            columnNumber: 25
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 325,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "space-y-2", children: summary.map((item, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", { value: item, onChange: (event) => setSummary(updateListItem(summary, index, event.target.value)), rows: 3, placeholder: "Short description for listings", className: `${adminInputClass} admin-scrollbar min-h-[88px] flex-1 resize-none` }, void 0, false, {
            fileName: "app/components/admin/NewsModule.tsx",
            lineNumber: 334,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "button", onClick: () => setSummary(removeListItem(summary, index)), className: "mt-2 inline-flex shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-rose-700 transition hover:bg-rose-100", "aria-label": `Remove summary ${index + 1}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trash2, { className: "h-4 w-4" }, void 0, false, {
            fileName: "app/components/admin/NewsModule.tsx",
            lineNumber: 336,
            columnNumber: 37
          }, this) }, void 0, false, {
            fileName: "app/components/admin/NewsModule.tsx",
            lineNumber: 335,
            columnNumber: 33
          }, this)
        ] }, `summary-${index}`, true, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 333,
          columnNumber: 55
        }, this)) }, void 0, false, {
          fileName: "app/components/admin/NewsModule.tsx",
          lineNumber: 332,
          columnNumber: 21
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 324,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AdminMultiImageUpload_default, { files: imageFiles, onChange: setImageFiles, existingUrls: existingImages, onExistingUrlsChange: setExistingImages, disabled: isBusy, maxFiles: 20 }, void 0, false, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 342,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 273,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 265,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DeleteConfirmationModal_default, { open: deleteTarget !== null, onOpenChange: (open) => {
      if (!open)
        setDeleteTarget(null);
    }, title: "Delete news article", description: deleteTarget ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      "Are you sure you want to delete",
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: deleteTarget.label }, void 0, false, {
        fileName: "app/components/admin/NewsModule.tsx",
        lineNumber: 349,
        columnNumber: 25
      }, this),
      "? This action cannot be undone."
    ] }, void 0, true, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 347,
      columnNumber: 64
    }, this) : "Are you sure you want to delete this item?", confirmLabel: "Delete article", onConfirm: handleConfirmDelete, isBusy }, void 0, false, {
      fileName: "app/components/admin/NewsModule.tsx",
      lineNumber: 345,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/admin/NewsModule.tsx",
    lineNumber: 247,
    columnNumber: 10
  }, this);
};
_s(NewsModule, "o3fiYzeCJjJfA1k7WKC5ZasbDrQ=", false, function() {
  return [useAdminToast];
});
_c = NewsModule;
var _c;
$RefreshReg$(_c, "NewsModule");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  NewsModule
};
//# sourceMappingURL=/build/_shared/chunk-H7ULNRH6.js.map
