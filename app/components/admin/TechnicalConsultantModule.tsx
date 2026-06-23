import { LucidePencil, LucidePlus, LucideTrash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { adminInputClass } from "~/components/admin/adminFormStyles";
import AdminModal from "~/components/admin/AdminModal";
import DeleteConfirmationModal from "~/components/admin/DeleteConfirmationModal";
import AdminMultiImageUpload from "~/components/admin/AdminMultiImageUpload";
import type { FetcherWithComponents } from "@remix-run/react";
import type { CloudinaryConfig } from "~/lib/cloudinary.server";
import { uploadImagesToCloudinary } from "~/lib/cloudinary.client";
import type { TechnicalConsultantRecord } from "~/lib/trainings.server";
import AdminPaginatedTable, {
  type AdminTableColumn,
} from "~/components/admin/AdminPaginatedTable";
import { useAdminToast } from "~/components/admin/AdminToast";

type TechnicalConsultantModuleProps = {
  consultants: TechnicalConsultantRecord[];
  fetcher: FetcherWithComponents<{ ok?: boolean; error?: string; message?: string }>;
  cloudinaryConfig: CloudinaryConfig | null;
};

const EMPTY_LIST_ITEM = "";

const updateListItem = (items: string[], index: number, value: string) => {
  const next = [...items];
  next[index] = value;
  return next;
};

const addListItem = (items: string[]) => [...items, EMPTY_LIST_ITEM];

const removeListItem = (items: string[], index: number) =>
  items.length === 1 ? [EMPTY_LIST_ITEM] : items.filter((_, itemIndex) => itemIndex !== index);

const trimNonEmpty = (items: string[]) =>
  items.map((item) => item.trim()).filter(Boolean);

const toEditableList = (text: string) => {
  const lines = text
    .split(/\r?\n/)
    .map((item) => item.trim())
    .filter(Boolean);
  return lines.length > 0 ? lines : [EMPTY_LIST_ITEM];
};

const formatDate = (iso: string) => {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleDateString("en-PH", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "—";
  }
};

export const TechnicalConsultantModule = ({
  consultants,
  fetcher,
  cloudinaryConfig,
}: TechnicalConsultantModuleProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState<string[]>([EMPTY_LIST_ITEM]);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [pendingIntent, setPendingIntent] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<{ id: string; label: string } | null>(null);
  const toast = useAdminToast();
  const formRef = useRef<HTMLFormElement>(null);
  const wasSubmitting = useRef(false);
  const isSubmitting = fetcher.state === "submitting";
  const isBusy = isUploading || isSubmitting;
  const isEditing = editingId !== null;

  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setDescriptions([EMPTY_LIST_ITEM]);
    setExistingImages([]);
    setImageFiles([]);
    formRef.current?.reset();
  };

  const openCreateModal = () => {
    resetForm();
    setModalOpen(true);
  };

  const openEditModal = (consultant: TechnicalConsultantRecord) => {
    setEditingId(consultant.id);
    setTitle(consultant.title);
    setDescriptions(toEditableList(consultant.description));
    setExistingImages([...consultant.images]);
    setImageFiles([]);
    setModalOpen(true);
  };

  const closeModal = () => {
    if (isUploading || isSubmitting) return;
    setModalOpen(false);
    resetForm();
  };

  useEffect(() => {
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

    const cleanDescriptions = trimNonEmpty(descriptions);

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
      const newImageUrls =
        imageFiles.length > 0 && cloudinaryConfig
          ? await uploadImagesToCloudinary(imageFiles, cloudinaryConfig)
          : [];
      const allImages = [...existingImages, ...newImageUrls];

      if (allImages.length > 20) {
        toast.error("Maximum 20 images allowed.");
        return;
      }

      const payload = {
        title: title.trim(),
        description: cleanDescriptions.join("\n"),
        images: JSON.stringify(allImages),
      };

      if (isEditing && editingId) {
        setPendingIntent("update-technical-consultant");
        fetcher.submit(
          { intent: "update-technical-consultant", id: editingId, ...payload },
          { method: "post" }
        );
      } else {
        setPendingIntent("create-technical-consultant");
        fetcher.submit({ intent: "create-technical-consultant", ...payload }, { method: "post" });
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to upload images.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = (id: string, label: string) => {
    setDeleteTarget({ id, label });
  };

  const handleConfirmDelete = () => {
    if (!deleteTarget) return;
    toast.success("Technical consultant deleted.");
    fetcher.submit({ intent: "delete-technical-consultant", id: deleteTarget.id }, { method: "post" });
    setDeleteTarget(null);
  };

  const columns: AdminTableColumn<TechnicalConsultantRecord>[] = [
    {
      id: "title",
      header: "Title",
      cell: (row) => <span className="font-semibold text-slate-900">{row.title || "—"}</span>,
    },
    {
      id: "description",
      header: "Description",
      className: "max-w-md",
      cell: (row) => {
        const list = row.description
          .split(/\r?\n/)
          .map((item) => item.trim())
          .filter(Boolean);

        if (list.length === 0) {
          return <span className="text-slate-400">—</span>;
        }

        return (
          <div className="space-y-1">
            <p className="line-clamp-2 text-slate-600">{list[0]}</p>
            {list.length > 1 ? (
              <p className="text-xs font-medium text-slate-400">+{list.length - 1} more</p>
            ) : null}
          </div>
        );
      },
    },
    {
      id: "images",
      header: "Images",
      cell: (row) => (
        <div className="flex items-center gap-2">
          {row.images.length > 0 ? (
            <img
              src={row.images[0]}
              alt={row.title}
              className="h-10 w-10 rounded-lg border border-slate-200 object-cover"
            />
          ) : null}
          <span className="text-slate-600">{row.images.length} image(s)</span>
        </div>
      ),
    },
    {
      id: "createdAt",
      header: "Created",
      cell: (row) => <span className="text-slate-600">{formatDate(row.createdAt)}</span>,
    },
    {
      id: "actions",
      header: "Actions",
      className: "w-40",
      cell: (row) => (
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => openEditModal(row)}
            disabled={isBusy}
            className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
          >
            <LucidePencil className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => handleDelete(row.id, row.title || "this consultant")}
            disabled={isBusy}
            className="inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60"
          >
            <LucideTrash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">TECHNICAL CONSULTANT</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Manage technical consultants</h1>
          <p className="mt-3 text-slate-500">
            Add and manage consultant profiles, specialties, and advisory availability.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          disabled={isBusy}
          className="flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60"
        >
          <LucidePlus className="mr-2 h-4 w-4" />
          Add technical consultant
        </button>
      </div>

      <AdminPaginatedTable
        columns={columns}
        data={consultants}
        getRowKey={(row) => row.id}
        isLoading={isSubmitting}
        emptyMessage='No technical consultants yet. Use "Add technical consultant" to create one.'
        itemLabel="technical consultants"
        pagination={{ pageSize: 5 }}
      />

      <AdminModal
        open={isModalOpen}
        onOpenChange={(open) => (open ? setModalOpen(true) : closeModal())}
        title={isEditing ? "Edit Technical Consultant" : "Add Technical Consultant"}
        description="Fill in the consultant’s name, specialty, and availability."
        size="lg"
        footer={
          <>
            <button
              type="button"
              onClick={closeModal}
              disabled={isBusy}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              disabled={isBusy}
              className="rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60"
            >
              {isUploading ? "Uploading images..." : fetcher.state === "submitting" ? "Saving..." : isEditing ? "Update technical consultant" : "Save technical consultant"}
            </button>
          </>
        }
      >
        <form ref={formRef} className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <label className="block text-sm font-medium text-slate-700">
            Title
            <input
              type="text"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Full name"
              className={adminInputClass}
              required
            />
          </label>
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-slate-700">Descriptions</span>
              <button
                type="button"
                onClick={() => setDescriptions(addListItem(descriptions))}
                className="inline-flex items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                <LucidePlus className="h-3.5 w-3.5" />
                Add description
              </button>
            </div>
            <div className="space-y-2">
              {descriptions.map((item, index) => (
                <div key={`description-${index}`} className="flex items-start gap-2">
                  <textarea
                    value={item}
                    onChange={(event) =>
                      setDescriptions(updateListItem(descriptions, index, event.target.value))
                    }
                    placeholder="Brief bio and expertise"
                    className={`${adminInputClass} admin-scrollbar min-h-[88px] flex-1 resize-none`}
                    rows={3}
                  />
                  <button
                    type="button"
                    onClick={() => setDescriptions(removeListItem(descriptions, index))}
                    className="mt-2 inline-flex shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-rose-700 transition hover:bg-rose-100"
                    aria-label={`Remove description ${index + 1}`}
                  >
                    <LucideTrash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          
          <AdminMultiImageUpload
            files={imageFiles}
            onChange={setImageFiles}
            existingUrls={existingImages}
            onExistingUrlsChange={setExistingImages}
            disabled={isBusy}
            maxFiles={20}
          />
        </form>
      </AdminModal>
      <DeleteConfirmationModal
        open={deleteTarget !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteTarget(null);
        }}
        title="Delete technical consultant"
        description={
          deleteTarget ? (
            <>
              Are you sure you want to delete{" "}
              <strong>{deleteTarget.label}</strong>? This action cannot be undone.
            </>
          ) : (
            "Are you sure you want to delete this item?"
          )
        }
        confirmLabel="Delete consultant"
        onConfirm={handleConfirmDelete}
        isBusy={isBusy}
      />
    </section>
  );
};
