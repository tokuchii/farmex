import { useEffect, useRef, useState } from "react";
import AdminModal from "~/components/admin/AdminModal";
import DeleteConfirmationModal from "~/components/admin/DeleteConfirmationModal";
import { adminInputClass } from "./adminFormStyles";
import { LucidePencil, LucidePlus, LucideTrash2 } from "lucide-react";
import AdminMultiImageUpload from "~/components/admin/AdminMultiImageUpload";
import type { FetcherWithComponents } from "react-router";
import type { CloudinaryConfig } from "~/lib/cloudinary.server";
import { uploadImagesToCloudinary } from "~/lib/cloudinary.client";
import {
  type TrainingGalleryRecord,
} from "~/lib/trainings.server";
import AdminPaginatedTable, {
  type AdminTableColumn,
} from "~/components/admin/AdminPaginatedTable";
import { useAdminToast } from "~/components/admin/AdminToast";

type TrainingGalleryModuleProps = {
  galleries: TrainingGalleryRecord[];
  fetcher: FetcherWithComponents<{ ok?: boolean; error?: string; message?: string }>;
  cloudinaryConfig: CloudinaryConfig | null;
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

export const TrainingGalleryModule = ({
  galleries,
  fetcher,
  cloudinaryConfig,
}: TrainingGalleryModuleProps) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [collectionName, setCollectionName] = useState("");
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
      setCollectionName("");
      setExistingImages([]);
      setImageFiles([]);
      formRef.current?.reset();
    };

    const openCreateModal = () => {
      resetForm();
      setModalOpen(true);
    };

    const openEditModal = (gallery: TrainingGalleryRecord) => {
      setEditingId(gallery.id);
      setCollectionName(gallery.collectionName);
      setExistingImages([...gallery.images]);
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
        const newImageUrls =
          imageFiles.length > 0 && cloudinaryConfig
            ? await uploadImagesToCloudinary(imageFiles, cloudinaryConfig)
            : [];
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
          images: JSON.stringify(allImages),
        };

        if (isEditing && editingId) {
          setPendingIntent("update-training-gallery");
          fetcher.submit(
            { intent: "update-training-gallery", id: editingId, ...payload },
            { method: "post" }
          );
        } else {
          setPendingIntent("create-training-gallery");
          fetcher.submit({ intent: "create-training-gallery", ...payload }, { method: "post" });
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
      toast.success("Gallery collection deleted.");
      fetcher.submit({ intent: "delete-training-gallery", id: deleteTarget.id }, { method: "post" });
      setDeleteTarget(null);
    };

    const columns: AdminTableColumn<TrainingGalleryRecord>[] = [
      {
        id: "collectionName",
        header: "Collection",
        cell: (row) => <span className="font-semibold text-slate-900">{row.collectionName || "—"}</span>,
      },
      {
        id: "images",
        header: "Images",
        cell: (row) => (
          <div className="flex items-center gap-2">
            {row.images.length > 0 ? (
              <img
                src={row.images[0]}
                alt={row.collectionName}
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
              onClick={() => handleDelete(row.id, row.collectionName || "this gallery collection")}
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
              <p className="text-lg font-semibold text-slate-700">Gallery  Collections</p>
            </div>

            <button
             type="button"
             onClick={openCreateModal}
             disabled={isBusy}
             className="flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60"
            >
            <LucidePlus className="mr-2 h-4 w-4" />
                Add gallery collection
            </button>
           </div>

           <AdminPaginatedTable
            columns={columns}
            data={galleries}
            getRowKey={(row) => row.id}
            isLoading={isSubmitting}
            emptyMessage='No gallery collections yet. Use "Add gallery collection" to create one.'
            itemLabel="galleries"
            pagination={{ pageSize: 5 }}
           />

            <AdminModal
                open={isModalOpen}
                onOpenChange={(open) => (open ? setModalOpen(true) : closeModal())}
                title={isEditing ? "Edit Gallery Collection" : "Add Gallery Collection"}
                description="Fill in the gallery collection details."
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
                      {isUploading ? "Uploading images..." : fetcher.state === "submitting" ? "Saving..." : isEditing ? "Update collection" : "Save collection"}
                    </button>
                    </>
                }
            >
                <form ref={formRef} className="space-y-4" onSubmit={(event) => event.preventDefault()}>
                    <div>
                        <label htmlFor="collectionName" className="block text-sm font-medium text-slate-700">
                            Collection Name
                        </label>
                        <input
                            type="text"
                            id="collectionName"
                            name="collectionName"
                            value={collectionName}
                            onChange={(event) => setCollectionName(event.target.value)}
                            className={adminInputClass}
                            placeholder="e.g. Spring 2024 Training Highlights"
                            required
                        />
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
        title="Delete training gallery"
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
        confirmLabel="Delete gallery"
        onConfirm={handleConfirmDelete}
        isBusy={isBusy}
      />
        </section>    
    );
}
