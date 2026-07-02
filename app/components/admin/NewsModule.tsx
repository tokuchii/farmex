import { useEffect, useRef, useState } from "react";
import { LucidePencil, LucidePlus, LucideTrash2 } from "lucide-react";
import AdminModal from "~/components/admin/AdminModal";
import DeleteConfirmationModal from "~/components/admin/DeleteConfirmationModal";
import { adminInputClass } from "./adminFormStyles";
import type { FetcherWithComponents } from "@remix-run/react";
import AdminMultiImageUpload from "~/components/admin/AdminMultiImageUpload";
import AdminPaginatedTable, {
  type AdminTableColumn,
} from "~/components/admin/AdminPaginatedTable";
import type { NewsRecords } from "~/lib/news.server";
import type { CloudinaryConfig } from "~/lib/cloudinary.server";
import { useAdminToast } from "~/components/admin/AdminToast";
import { uploadImagesToCloudinary } from "~/lib/cloudinary.client";
import { sortFilesByName } from "~/lib/utils";

type NewsModuleProps = {
    news: NewsRecords[];
    fetcher: FetcherWithComponents<{ ok?: boolean; error?: string; message?: string}>;
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

export const NewsModule = ({ news, fetcher, cloudinaryConfig }: NewsModuleProps
) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [organization, setOrganization] = useState("");
    const [position, setPosition] = useState("");
    const [notes, setNotes] = useState<string[]>([EMPTY_LIST_ITEM]);
    const [location, setLocation] = useState("");
    const [publishedAt, setPublishedAt] = useState("");
    const [summary, setSummary] = useState<string[]>([EMPTY_LIST_ITEM]);
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

    const openEditModal = (article: NewsRecords) => {
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
            const newImageUrls =
                sortedImageFiles.length > 0 && cloudinaryConfig
                    ? await uploadImagesToCloudinary(sortedImageFiles, cloudinaryConfig)
                    : [];
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
                images: JSON.stringify(allImages),
            };

            if (isEditing && editingId) {
                setPendingIntent("update-news");
                fetcher.submit(
                    { intent: "update-news", id: editingId, ...payload },
                    { method: "post" }
                );
            } else {
                setPendingIntent("create-news");
                fetcher.submit(
                    { intent: "create-news", ...payload },
                    { method: "post" }
                );
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

    const handleDelete = (id: string, label: string) => {
        setDeleteTarget({ id, label });
    };

    const handleConfirmDelete = () => {
        if (!deleteTarget) return;
        toast.success("Article deleted.");
        fetcher.submit({ intent: "delete-news", id: deleteTarget.id }, { method: "post" });
        setDeleteTarget(null);
    };

    const columns: AdminTableColumn<NewsRecords>[] = [
        {
            id: "title",
            header: "Title",
            cell: (row) => <span className="font-semibold text-slate-900">{row.title || "—"}</span>,
        },
        {
            id: "meta",
            header: "Details",
            className: "max-w-xs",
            cell: (row) => (
                <div className="space-y-1 text-xs text-slate-500">
                    <p>{row.author || "No author"}</p>
                    <p>{row.organization || "No organization"}</p>
                    <p className="text-slate-400 text-[0.625rem]">{row.publishedAt || "No publish date"}</p>
                </div>
            ),
        },
        {
            id: "summary",
            header: "Summary",
            className: "max-w-sm",
            cell: (row) => {
                const list = row.summary
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
                            <p className="text-xs font-medium text-slate-400">
                                +{list.length - 1} more
                            </p>
                        ) : null}
                    </div>
                );
            },
        },
        {
            id: "images",
            header: "Images",
            cell: (row) => (
                <span className="text-slate-600">{row.images.length} image(s)</span>
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
                        onClick={() => handleDelete(row.id, row.title || "this article")}
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
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">News</p>
                <h1 className="mt-2 text-3xl font-semibold text-slate-900">Manage news</h1>
                <p className="mt-3 text-slate-500">
                    Create and update news articles shown on the public site.
                </p>
                </div>

                <button
                type="button"
                onClick={openCreateModal}
                disabled={isBusy}
                className="flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60"
                >
                <LucidePlus className="mr-2 h-4 w-4" />
                Add article
                </button>
            </div>

            <AdminPaginatedTable
                columns={columns}
                data={news}
                getRowKey={(row) => row.id}
            />

            <AdminModal
                open={modalOpen}
                onOpenChange={(open) => (open ? setModalOpen(true) : closeModal())}
                title={isEditing ? "Edit news article" : "Add news article"}
                description="Fill in the details below."
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
                    {isUploading ? "Uploading images..." : fetcher.state === "submitting" ? "Saving..." : isEditing ? "Update article" : "Save article"}
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
                        placeholder="Article title"
                        className={adminInputClass}
                        required
                    />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                    Author
                    <span className="ml-1 text-slate-400 text-xs">(Optional)</span>

                    <input
                        type="text"
                        name="author"
                        value={author}
                        onChange={(event) => setAuthor(event.target.value)}
                        placeholder="Full name"
                        className={adminInputClass}
                    />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                    Organization
                    <input
                    type="text"
                    name="organization"
                    value={organization}
                    onChange={(event) => setOrganization(event.target.value)}
                    placeholder="Name of the organization"
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
                <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-slate-700">
                            Notes
                            <span className="ml-1 text-slate-400 text-xs">(Optional)</span>
                        </span>
                        <button
                            type="button"
                            onClick={() => setNotes(addListItem(notes))}
                            className="inline-flex items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100"
                        >
                            <LucidePlus className="h-3.5 w-3.5" />
                            Add note
                        </button>
                    </div>
                    <div className="space-y-2">
                        {notes.map((item, index) => (
                            <div key={`notes-${index}`} className="flex items-start gap-2">
                                <textarea
                                    value={item}
                                    onChange={(event) =>
                                        setNotes(updateListItem(notes, index, event.target.value))
                                    }
                                    placeholder="Additional details or context"
                                    className={`${adminInputClass} admin-scrollbar min-h-[88px] flex-1 resize-none`}
                                    rows={3}
                                />
                                <button
                                    type="button"
                                    onClick={() => setNotes(removeListItem(notes, index))}
                                    className="mt-2 inline-flex shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-rose-700 transition hover:bg-rose-100"
                                    aria-label={`Remove note ${index + 1}`}
                                >
                                    <LucideTrash2 className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <label className="block text-sm font-medium text-slate-700">
                    Location
                    <input
                        type="text"
                        name="location"
                        value={location}
                        onChange={(event) => setLocation(event.target.value)}
                        placeholder="City, state, or region"
                        className={adminInputClass}
                    />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                    Publish date
                    <input
                        type="date"
                        name="publishedAt"
                        value={publishedAt}
                        onChange={(event) => setPublishedAt(event.target.value)}
                        className={adminInputClass}
                    />
                </label>
                <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-slate-700">Summary</span>
                        <button
                            type="button"
                            onClick={() => setSummary(addListItem(summary))}
                            className="inline-flex items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100"
                        >
                            <LucidePlus className="h-3.5 w-3.5" />
                            Add summary
                        </button>
                    </div>
                    <div className="space-y-2">
                        {summary.map((item, index) => (
                            <div key={`summary-${index}`} className="flex items-start gap-2">
                                <textarea
                                    value={item}
                                    onChange={(event) =>
                                        setSummary(updateListItem(summary, index, event.target.value))
                                    }
                                    rows={3}
                                    placeholder="Short description for listings"
                                    className={`${adminInputClass} admin-scrollbar min-h-[88px] flex-1 resize-none`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setSummary(removeListItem(summary, index))}
                                    className="mt-2 inline-flex shrink-0 items-center justify-center rounded-xl border border-rose-200 bg-rose-50 p-2.5 text-rose-700 transition hover:bg-rose-100"
                                    aria-label={`Remove summary ${index + 1}`}
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
                title="Delete news article"
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
                confirmLabel="Delete article"
                onConfirm={handleConfirmDelete}
                isBusy={isBusy}
            />
        </section>
    );
};

export default NewsModule;