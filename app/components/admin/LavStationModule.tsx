import { LucideExternalLink, LucidePlus, LucideTrash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { FetcherWithComponents } from "@remix-run/react";
import AdminModal from "~/components/admin/AdminModal";
import AdminMultiImageUpload from "~/components/admin/AdminMultiImageUpload";
import AdminPaginatedTable, {
  type AdminTableColumn,
} from "~/components/admin/AdminPaginatedTable";
import { adminInputClass } from "~/components/admin/adminFormStyles";
import { useAdminToast } from "~/components/admin/AdminToast";
import { uploadImagesToCloudinary } from "~/lib/cloudinary.client";
import type { CloudinaryConfig } from "~/lib/cloudinary.server";
import type { LavStationRecord } from "~/lib/lav-stations.server";

type LavStationModuleProps = {
  stations: LavStationRecord[];
  fetcher: FetcherWithComponents<{ ok?: boolean; error?: string; message?: string }>;
  cloudinary: CloudinaryConfig | null;
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

export const LavStationModule = ({
  stations,
  fetcher,
  cloudinary,
}: LavStationModuleProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [youtubeLink, setYoutubeLink] = useState("");
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const toast = useAdminToast();
  const formRef = useRef<HTMLFormElement>(null);
  const wasSubmitting = useRef(false);

  const isBusy = isUploading || fetcher.state !== "idle";

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setYoutubeLink("");
    setImageFiles([]);
    formRef.current?.reset();
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
        toast.success(fetcher.data.message ?? "Action completed successfully.");
        setModalOpen(false);
        resetForm();
      }
    }
  }, [fetcher.state, fetcher.data, toast.error, toast.success]);

  const handleSave = async () => {
    if (!title.trim()) {
      toast.error("Kailangan ang title.");
      return;
    }

    if (!description.trim()) {
      toast.error("Kailangan ang description.");
      return;
    }

    if (imageFiles.length > 0 && !cloudinary) {
      toast.error(
        "Cloudinary ay hindi naka-configure. Lagyan ang VITE_CLOUDINARY_CLOUD_NAME at VITE_CLOUDINARY_UPLOAD_PRESET sa .env file."
      );
      return;
    }

    setIsUploading(true);

    try {
      const imageUrls =
        imageFiles.length > 0 && cloudinary
          ? await uploadImagesToCloudinary(imageFiles, cloudinary)
          : [];

      fetcher.submit(
        {
          intent: "create-lav-station",
          title: title.trim(),
          description: description.trim(),
          youtubeLink: youtubeLink.trim(),
          images: JSON.stringify(imageUrls),
        },
        { method: "post" }
      );
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "May error sa pag-upload ng images. Subukan ulit."
      );
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = (id: string) => {
    if (!confirm("Delete this lav station?")) return;

    fetcher.submit(
      { intent: "delete-lav-station", id },
      { method: "post" }
    );
  };

  const columns: AdminTableColumn<LavStationRecord>[] = [
    {
      id: "title",
      header: "Title",
      cell: (row) => (
        <span className="font-semibold text-slate-900">{row.title || "—"}</span>
      ),
    },
    {
      id: "description",
      header: "Description",
      className: "max-w-xs",
      cell: (row) => (
        <p className="line-clamp-2 text-slate-600">{row.description || "—"}</p>
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
        row.youtubeLink ? (
          <a
            href={row.youtubeLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-medium text-emerald-600 hover:text-emerald-700"
          >
            View
            <LucideExternalLink className="h-3.5 w-3.5" />
          </a>
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
      id: "actions",
      header: "Actions",
      className: "w-24",
      cell: (row) => (
        <button
          type="button"
          onClick={() => handleDelete(row.id)}
          disabled={isBusy}
          className="inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60"
        >
          <LucideTrash2 className="h-3.5 w-3.5" />
          Delete
        </button>
      ),
    },
  ];

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
            LAV STATION
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Manage lav station info</h1>
          <p className="mt-3 text-slate-500">
            Add and manage information about your lav stations.
          </p>
        </div>

        <button
          type="button"
          className="flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60"
          onClick={() => setModalOpen(true)}
          disabled={isBusy}
        >
          <LucidePlus className="mr-2 h-4 w-4" />
          Add lav station
        </button>
      </div>

      <AdminPaginatedTable
        columns={columns}
        data={stations}
        getRowKey={(row) => row.id}
        isLoading={fetcher.state === "loading"}
        emptyMessage='No lav stations yet. Use "Add lav station" to create one.'
        itemLabel="lav stations"
        pagination={{ pageSize: 5 }}
      />

      <AdminModal
        open={isModalOpen}
        onOpenChange={(open) => (open ? setModalOpen(true) : closeModal())}
        title="Add Lav Station"
        description="Fill in the details. Images upload to Cloudinary; data saves to Firestore."
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
                  : "Save lav station"}
            </button>
          </>
        }
      >
        <form ref={formRef} className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <label className="block text-sm font-medium text-slate-700">
            Title lav station
            <input
              type="text"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Lav station title"
              className={adminInputClass}
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-700">
            Description
            <textarea
              name="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Brief description of the lav station"
              className={`${adminInputClass} admin-scrollbar resize-none`}
              rows={4}
              required
            />
          </label>

          <AdminMultiImageUpload
            files={imageFiles}
            onChange={setImageFiles}
            disabled={isBusy}
            maxFiles={10}
          />

          <label className="block text-sm font-medium text-slate-700">
            Youtube video link
            <input
              type="url"
              name="youtubeLink"
              value={youtubeLink}
              onChange={(event) => setYoutubeLink(event.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className={adminInputClass}
            />
          </label>
        </form>
      </AdminModal>
    </section>
  );
};
