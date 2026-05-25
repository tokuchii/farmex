import { LucideExternalLink, LucidePencil, LucidePlus, LucideTrash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FetcherWithComponents } from "@remix-run/react";
import AdminActiveToggle from "~/components/admin/AdminActiveToggle";
import AdminModal from "~/components/admin/AdminModal";
import AdminMultiImageUpload from "~/components/admin/AdminMultiImageUpload";
import AdminPaginatedTable, {
  type AdminTableColumn,
} from "~/components/admin/AdminPaginatedTable";
import { adminInputClass } from "~/components/admin/adminFormStyles";
import { useAdminToast } from "~/components/admin/AdminToast";
import { uploadImagesToCloudinary } from "~/lib/cloudinary.client";
import type { CloudinaryConfig } from "~/lib/cloudinary.server";
import type { RiceDerbiesRecord } from "~/lib/rice-derbies.server";

type RiceDerbiesModuleProps = {
  derbies: RiceDerbiesRecord[];
  fetcher: FetcherWithComponents<{ ok?: boolean; error?: string; message?: string }>;
  cloudinaryConfig: CloudinaryConfig | null;
};

const EMPTY_LIST_ITEM = "";

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

const toEditableList = (items: string[]) =>
  items.length > 0 ? items : [EMPTY_LIST_ITEM];

type StringListFieldProps = {
  label: string;
  items: string[];
  onChange: (items: string[]) => void;
  addLabel: string;
  inputType?: "text" | "url";
  placeholder: string;
  multiline?: boolean;
  disabled?: boolean;
};

const StringListField = ({
  label,
  items,
  onChange,
  addLabel,
  inputType = "text",
  placeholder,
  multiline = false,
  disabled = false,
}: StringListFieldProps) => (
  <div className="space-y-3">
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm font-medium text-slate-700">{label}</span>
      <button
        type="button"
        onClick={() => onChange(addListItem(items))}
        disabled={disabled}
        className="inline-flex items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 disabled:opacity-60"
      >
        <LucidePlus className="h-3.5 w-3.5" />
        {addLabel}
      </button>
    </div>

    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={`${label}-${index}`} className="flex items-start gap-2">
          {multiline ? (
            <textarea
              value={item}
              onChange={(event) => onChange(updateListItem(items, index, event.target.value))}
              placeholder={placeholder}
              className={`${adminInputClass} admin-scrollbar min-h-[88px] flex-1 resize-none`}
              rows={3}
              disabled={disabled}
            />
          ) : (
            <input
              type={inputType}
              value={item}
              onChange={(event) => onChange(updateListItem(items, index, event.target.value))}
              placeholder={placeholder}
              className={`${adminInputClass} flex-1`}
              disabled={disabled}
            />
          )}
          <button
            type="button"
            onClick={() => onChange(removeListItem(items, index))}
            disabled={disabled}
            className="mt-2 inline-flex shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-rose-700 transition hover:bg-rose-100 disabled:opacity-60"
            aria-label={`Remove ${label.toLowerCase()} ${index + 1}`}
          >
            <LucideTrash2 className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  </div>
);

export const RiceDerbiesModule = ({
  derbies,
  fetcher,
  cloudinaryConfig,
}: RiceDerbiesModuleProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState<string[]>([EMPTY_LIST_ITEM]);
  const [youtubeLinks, setYoutubeLinks] = useState<string[]>([EMPTY_LIST_ITEM]);
  const [existingImages, setExistingImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const toast = useAdminToast();
  const formRef = useRef<HTMLFormElement>(null);
  const wasSubmitting = useRef(false);

  const isBusy = isUploading || fetcher.state !== "idle";
  const fetcherFormData = fetcher.formData as FormData | undefined;
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

  const openEditModal = (derby: RiceDerbiesRecord) => {
    setEditingId(derby.id);
    setTitle(derby.title);
    setDescriptions(toEditableList(derby.descriptions));
    setYoutubeLinks(toEditableList(derby.youtubeLinks));
    setExistingImages([...derby.images]);
    setImageFiles([]);
    setModalOpen(true);
  };

  const closeModal = () => {
    if (isBusy) return;
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
        return;
      }

      if (fetcher.data?.ok) {
        toast.success(fetcher.data.message ?? "Updated successfully.");
        const submittedIntent = fetcherFormData?.get("intent");
        if (
          submittedIntent === "create-rice-derbies" ||
          submittedIntent === "update-rice-derbies"
        ) {
          setModalOpen(false);
          resetForm();
        }
      }
    }
  }, [fetcher.state, fetcher.data, fetcherFormData, toast.error, toast.success, toast]);

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
        descriptions: JSON.stringify(trimmedDescriptions),
        youtubeLinks: JSON.stringify(trimmedYoutubeLinks),
        images: JSON.stringify(allImages),
      };

      if (isEditing && editingId) {
        fetcher.submit(
          { intent: "update-rice-derbies", id: editingId, ...payload },
          { method: "post" }
        );
      } else {
        fetcher.submit({ intent: "create-rice-derbies", ...payload }, { method: "post" });
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to upload images. Please try again."
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this rice derbies entry?")) return;

    fetcher.submit({ intent: "delete-rice-derbies", id }, { method: "post" });
  };

  const handleToggleActive = (id: string, nextActive: boolean) => {
    fetcher.submit(
      {
        intent: "toggle-rice-derbies-active",
        id,
        active: nextActive ? "true" : "false",
      },
      { method: "post" }
    );
  };

  const isRowBusy = (id: string, intent: string) =>
    fetcher.state !== "idle" &&
    fetcherFormData?.get("intent") === intent &&
    fetcherFormData?.get("id") === id;

  const columns: AdminTableColumn<RiceDerbiesRecord>[] = [
    {
      id: "title",
      header: "Title",
      cell: (row) => (
        <span className="font-semibold text-slate-900">{row.title || "—"}</span>
      ),
    },
    {
      id: "descriptions",
      header: "Descriptions",
      className: "max-w-xs",
      cell: (row) => (
        <div className="space-y-1">
          {row.descriptions.length > 0 ? (
            <>
              <p className="line-clamp-2 text-slate-600">{row.descriptions[0]}</p>
              {row.descriptions.length > 1 ? (
                <p className="text-xs font-medium text-slate-400">
                  +{row.descriptions.length - 1} more
                </p>
              ) : null}
            </>
          ) : (
            <span className="text-slate-400">—</span>
          )}
        </div>
      ),
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
      id: "youtube",
      header: "YouTube",
      cell: (row) =>
        row.youtubeLinks.length > 0 ? (
          <div className="flex flex-col gap-1">
            {row.youtubeLinks.slice(0, 2).map((link) => (
              <a
                key={link}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 hover:text-emerald-700"
              >
                View
                <LucideExternalLink className="h-3.5 w-3.5" />
              </a>
            ))}
            {row.youtubeLinks.length > 2 ? (
              <span className="text-xs text-slate-400">
                +{row.youtubeLinks.length - 2} more
              </span>
            ) : null}
          </div>
        ) : (
          <span className="text-slate-400">—</span>
        ),
    },
    {
      id: "createdAt",
      header: "Created",
      cell: (row) => <span className="text-slate-600">{formatDate(row.createdAt)}</span>,
    },
    {
      id: "active",
      header: "Active",
      className: "w-28",
      cell: (row) => (
        <AdminActiveToggle
          active={row.active}
          disabled={isBusy || isRowBusy(row.id, "toggle-rice-derbies-active")}
          onToggle={() => handleToggleActive(row.id, !row.active)}
        />
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
            Edit
          </button>
          <button
            type="button"
            onClick={() => handleDelete(row.id)}
            disabled={isBusy}
            className="inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60"
          >
            <LucideTrash2 className="h-3.5 w-3.5" />
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            RICE DERBIES
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Manage rice derbies</h1>
          <p className="mt-3 text-slate-500">
            Add and manage information about your rice derbies.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          disabled={isBusy}
          className="flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60"
        >
          <LucidePlus className="mr-2 h-4 w-4" />
          Add rice derbies
        </button>
      </div>

      <AdminPaginatedTable
        columns={columns}
        data={derbies}
        getRowKey={(row) => row.id}
        isLoading={fetcher.state === "loading"}
        emptyMessage='No rice derbies yet. Use "Add rice derbies" to create one.'
        itemLabel="rice derbies"
        pagination={{ pageSize: 5 }}
      />

      <AdminModal
        open={isModalOpen}
        onOpenChange={(open) => (open ? setModalOpen(true) : closeModal())}
        title={isEditing ? "Edit Rice Derbies" : "Add Rice Derbies"}
        description={
          isEditing
            ? "I-update ang details. Puwedeng magdagdag o mag-alis ng images, descriptions, at links."
            : "Fill in the details. Images upload to Cloudinary; data saves to Firestore."
        }
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
              {isUploading
                ? "Uploading images..."
                : fetcher.state === "submitting"
                  ? "Saving..."
                  : isEditing
                    ? "Update rice derbies"
                    : "Save rice derbies"}
            </button>
          </>
        }
      >
        <form ref={formRef} className="space-y-5" onSubmit={(event) => event.preventDefault()}>
          <label className="block text-sm font-medium text-slate-700">
            Title rice derbies
            <input
              type="text"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder='Rice derbies title, e.g. "2024 Harvest Festival Rice Derbies"'
              className={adminInputClass}
              required
            />
          </label>

          <StringListField
            label="Descriptions"
            items={descriptions}
            onChange={setDescriptions}
            addLabel="Add description"
            placeholder="Brief description of the rice derbies"
            multiline
            disabled={isBusy}
          />

          <AdminMultiImageUpload
            files={imageFiles}
            onChange={setImageFiles}
            existingUrls={existingImages}
            onExistingUrlsChange={setExistingImages}
            disabled={isBusy}
            maxFiles={20}
          />

          <StringListField
            label="YouTube video links"
            items={youtubeLinks}
            onChange={setYoutubeLinks}
            addLabel="Add link"
            inputType="url"
            placeholder="https://www.youtube.com/watch?v=..."
            disabled={isBusy}
          />
        </form>
      </AdminModal>
    </section>
  );
};
