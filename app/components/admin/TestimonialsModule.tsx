import { useEffect, useRef, useState } from "react";
import { LucidePencil, LucidePlus, LucideTrash2 } from "lucide-react";
import type { FetcherWithComponents } from "@remix-run/react";
import AdminModal from "~/components/admin/AdminModal";
import DeleteConfirmationModal from "~/components/admin/DeleteConfirmationModal";
import AdminMultiImageUpload from "~/components/admin/AdminMultiImageUpload";
import AdminPaginatedTable, {
  type AdminTableColumn,
} from "~/components/admin/AdminPaginatedTable";
import { useAdminToast } from "~/components/admin/AdminToast";
import { adminInputClass } from "./adminFormStyles";
import type { CloudinaryConfig } from "~/lib/cloudinary.server";
import { uploadImagesToCloudinary } from "~/lib/cloudinary.client";
import type { TestimonialRecord } from "~/lib/testimonials.server";

type TestimonialsModuleProps = {
  testimonials: TestimonialRecord[];
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

export const TestimonialsModule = ({ testimonials, fetcher, cloudinaryConfig }: TestimonialsModuleProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [content, setContent] = useState<string[]>([EMPTY_LIST_ITEM]);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState("");
  const [variety, setVariety] = useState("");
  const [existingImage, setExistingImage] = useState("");
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

  const openEditModal = (testimonial: TestimonialRecord) => {
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
      const newImageUrls =
        imageFiles.length > 0 && cloudinaryConfig
          ? await uploadImagesToCloudinary(imageFiles, cloudinaryConfig)
          : [];
      const image = newImageUrls[0] ?? existingImage ?? "";

      const intent = isEditing ? "update-testimonial" : "create-testimonial";
      setPendingIntent(intent);

      fetcher.submit(
        {
          intent,
          ...(editingId ? { id: editingId } : {}),
          name: name.trim(),
          content: cleanContent.join("\n"),
          date: date.trim(),
          location: location.trim(),
          position: position.trim(),
          variety: variety.trim(),
          image,
        },
        { method: "post" }
      );
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(error instanceof Error ? error.message : "Failed to upload image.");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = (id: string, label: string) => {
    setDeleteTarget({ id, label });
  };

  const handleConfirmDelete = () => {
    if (!deleteTarget) return;
    toast.success("Testimonial deleted.");
    fetcher.submit({ intent: "delete-testimonial", id: deleteTarget.id }, { method: "post" });
    setDeleteTarget(null);
  };

  const columns: AdminTableColumn<TestimonialRecord>[] = [
    {
      id: "name",
      header: "Customer",
      cell: (row) => <span className="font-semibold text-slate-900">{row.name || "—"}</span>,
    },
    {
      id: "content",
      header: "Testimonial",
      className: "max-w-md",
      cell: (row) => {
        const list = row.content
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
      id: "image",
      header: "Image",
      cell: (row) =>
        row.image ? (
          <img
            src={row.image}
            alt={row.name || "Testimonial"}
            className="h-12 w-12 rounded-lg object-cover"
          />
        ) : (
          <span className="text-slate-400">—</span>
        ),
    },
    {
      id: "meta",
      header: "Details",
      cell: (row) => (
        <div className="space-y-1 text-xs text-slate-500">
          <p>{row.position || "No position"}</p>
          <p>{row.location || "No location"}</p>
          <p>{row.variety || "No variety"}</p>
          <p className="text-slate-400 text-[0.625rem]">{row.date || "No date"}</p>
        </div>
      ),
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
            onClick={() => handleDelete(row.id, row.name || "this testimonial")}
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
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">Testimonial</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Manage testimonials</h1>
          <p className="mt-3 text-slate-500">
            Add and manage customer testimonials for your website.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          disabled={isBusy}
          className="flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60"
        >
          <LucidePlus className="mr-2 h-4 w-4" />
          Add testimonial
        </button>
      </div>

      <AdminPaginatedTable
        columns={columns}
        data={testimonials}
        getRowKey={(row) => row.id}
        isLoading={isSubmitting}
        emptyMessage='No testimonials yet. Use "Add testimonial" to create one.'
        itemLabel="testimonials"
        pagination={{ pageSize: 5 }}
      />

      <AdminModal
        open={modalOpen}
        onOpenChange={(open) => (open ? setModalOpen(true) : closeModal())}
        title={isEditing ? "Edit testimonial" : "Add testimonial"}
        description="Share your customers' experiences and feedback."
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
              {fetcher.state === "submitting" || isUploading
                ? "Saving..."
                : isEditing
                  ? "Update testimonial"
                  : "Save testimonial"}
            </button>
          </>
        }
      >
        <form ref={formRef} className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <label className="block text-sm font-medium text-slate-700">
            Customer name
            <input
              type="text"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Full name"
              className={adminInputClass}
              required
            />
          </label>
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-slate-700">Testimonial content</span>
              <button
                type="button"
                onClick={() => setContent(addListItem(content))}
                className="inline-flex items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100"
              >
                <LucidePlus className="h-3.5 w-3.5" />
                Add content
              </button>
            </div>
            <div className="space-y-2">
              {content.map((item, index) => (
                <div key={`testimonial-content-${index}`} className="flex items-start gap-2">
                  <textarea
                    value={item}
                    onChange={(event) =>
                      setContent(updateListItem(content, index, event.target.value))
                    }
                    placeholder="Share your experience..."
                    className={`${adminInputClass} admin-scrollbar min-h-[88px] flex-1 resize-none`}
                    rows={4}
                  />
                  <button
                    type="button"
                    onClick={() => setContent(removeListItem(content, index))}
                    className="mt-2 inline-flex shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-rose-700 transition hover:bg-rose-100"
                    aria-label={`Remove testimonial content ${index + 1}`}
                  >
                    <LucideTrash2 className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
          <label className="block text-sm font-medium text-slate-700">
            Date
            <input
              type="date"
              name="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              className={adminInputClass}
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Location
            <input
              type="text"
              name="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Venue or online link"
              className={adminInputClass}
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Position
            <span className="ml-1 text-slate-400 text-xs">(Optional)</span>
            <input
              type="text"
              name="position"
              value={position}
              onChange={(event) => setPosition(event.target.value)}
              placeholder="Job title or role"
              className={adminInputClass}
            />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Variety
            <span className="ml-1 text-slate-400 text-xs">(Optional)</span>
            <input
              type="text"
              name="variety"
              value={variety}
              onChange={(event) => setVariety(event.target.value)}
              placeholder="Product or service variety"
              className={adminInputClass}
            />
          </label>
          <AdminMultiImageUpload
            label="Image"
            files={imageFiles}
            onChange={setImageFiles}
            existingUrls={existingImage ? [existingImage] : []}
            onExistingUrlsChange={(urls) => setExistingImage(urls[0] ?? "")}
            maxFiles={1}
            disabled={isBusy}
          />
        </form>
      </AdminModal>
      <DeleteConfirmationModal
        open={deleteTarget !== null}
        onOpenChange={(open) => {
          if (!open && !isUploading && !isSubmitting) setDeleteTarget(null);
        }}
        title="Delete testimonial"
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
        confirmLabel="Delete testimonial"
        onConfirm={handleConfirmDelete}
        isBusy={isBusy}
      />
    </section>
  );
};