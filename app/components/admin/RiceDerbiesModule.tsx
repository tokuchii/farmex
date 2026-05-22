import { LucideExternalLink, LucidePlus, LucideTable } from "lucide-react";
import { useState, useRef, useEffect } from "react";
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
import type { RiceDerbiesRecord } from "~/lib/rice-derbies.server";

type RiceDerbiesModuleProps = {
    derbies: RiceDerbiesRecord[];
    fetcher: FetcherWithComponents<{ ok?: boolean; error?: string; message?: string }>;
    cloudinaryConfig: CloudinaryConfig | null;
}

const formatDate = (iso: string) => {
    if (!iso) return "-";
    try {
        return new Date(iso).toLocaleDateString("en-PH", {
           year: "numeric",
           month: "short",
           day: "numeric", 
        });
    } catch {
        return "-";
    }
};

export const RiceDerbiesModule = ({
    derbies,
    fetcher,
    cloudinaryConfig,
}: RiceDerbiesModuleProps) => {
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
            const imageUrls =
              imageFiles.length > 0 && cloudinaryConfig
                ? await uploadImagesToCloudinary(imageFiles, cloudinaryConfig)
                : [];

            fetcher.submit(
                {
                    intent: "create-rice-derbies",
                    title: title.trim(),
                    description: description.trim(),
                    youtubeLink: youtubeLink.trim(),
                    images: JSON.stringify(imageUrls),
                },
                {
                    method: "post",
                }
            );
        } catch (error) {
            toast.error("Failed to upload images. Please try again.");
            toast.error(
                error instanceof Error
                    ? error.message
                    : "An unknown error occurred during image upload."
            );
        } finally {
            setIsUploading(false);
        }
    };

    const handleDelete = (id: string) => {
        if (!confirm("Are you sure you want to delete this rice derbies? This action cannot be undone.")) return;

        fetcher.submit(
            {
                intent: "delete-rice-derbies",
                id,
            },
            {
                method: "post",
            }
        );
    };

    const columns: AdminTableColumn<RiceDerbiesRecord>[] = [
        {
            id: "title",
            header: "Title",
            cell: (row) => (
                <p className="font-semibold text-slate-900">{row.title || "-"}</p>
            ),
        },
        {
            id: "description",
            header: "Description",
            cell: (row) => (
                <p className="line-clamp-2 text-slate-600">{row.description || "-"}</p>
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
                    ): null}
                    <span className="text-slate-600">{row.images.length} images(s)</span>
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
                        className="inline-flex items-center gap-1 font-medium text-emerald-600 hover-emerald-700"
                    >
                        View
                        <LucideExternalLink className="h-3.5 w-3.5" />
                    </a>
                ) : (
                    <span className="text-slate-400">-</span>
                ),
        },
        {
            id: "createdAt",
            header: "Created At",
            cell: (row) => <span className="text-slate-600">{formatDate(row.createdAt)}</span>
        },
        {
            id: "actions",
            header: "Actions",
            cell: (row) => (
                <button
                    type="button"
                    onClick={() => handleDelete(row.id)}
                    disabled={isBusy}
                    className="inline-flex items-center gap-1 rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-700 transition hover:bg-rose-100 disabled:opacity-60"
                >
                    <LucideTable className="h-3.5 w-3.5" />
                    Delete
                </button>
            ),
        },
    ];

    return (
        <section className="space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">RICE DERBIES</p>
                    <h1 className="mt-2 text-3xl font-semibold text-slate-900">Manage rice derbies</h1>
                    <p className="mt-3 text-slate-500">
                        Add and manage information about your rice derbies.
                    </p>
                </div>

                <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
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
                title="Add Rice Derbies"
                description="Fill in the details for the new rice derbies."
                size="lg"
                footer={
                    <>
                      <button
                        type="button"
                        onClick={closeModal}
                        disabled={isBusy}
                        className="rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleSave}
                        disabled={isBusy}
                        className="rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400"
                      >
                        {isUploading
                          ? "Uploading images..."
                          : fetcher.state === "submitting"
                            ? "Saving..."
                            : "Save rice derbies"}
                      </button>
                    </>
                }
            >
                <form ref={formRef} className="space-y-4" onSubmit={(event) => event.preventDefault()}>
                    <label className="block text-sm font-medium text-slate-700">
                        Title rice derbies
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                            placeholder='Rice Derbies title, e.g. "2024 Harvest Festival Rice Derbies"'
                            className={adminInputClass}
                            required
                        />
                    </label>
                    <label className="block text-sm font-medium text-slate-700">
                        Description
                        <textarea
                            name="content"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                            placeholder="Brief description of the rice derbies"
                            className={`${adminInputClass} admin-scrollbar resize-none`}
                            rows={4}
                            required
                            />
                    </label>
                    <AdminMultiImageUpload
                        files={imageFiles}
                        onChange={setImageFiles}
                        disabled={isBusy}
                        maxFiles={20}
                    />
                    <label className="block text-sm font-medium text-slate-700">
                        YouTube Link
                        <input
                            type="url"
                            name="youtubeLink"
                            value={youtubeLink}
                            onChange={(event) => setYoutubeLink(event.target.value)}
                            placeholder="https://www.youtube.com/watch?v=example"
                            className={adminInputClass}
                        />
                    </label>
                </form>
            </AdminModal>
        </section>
    );
};
