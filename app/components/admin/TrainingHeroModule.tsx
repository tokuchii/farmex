import { LucidePencil, LucidePlus, LucideTrash2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AdminModal from "~/components/admin/AdminModal";
import DeleteConfirmationModal from "~/components/admin/DeleteConfirmationModal";
import { adminInputClass } from "./adminFormStyles";
import type { FetcherWithComponents } from "@remix-run/react";
import type { TrainingHeroRecord } from "~/lib/trainings.server";
import AdminPaginatedTable, {
  type AdminTableColumn,
} from "~/components/admin/AdminPaginatedTable";
import { useAdminToast } from "~/components/admin/AdminToast";

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

const toEditableList = (items: string[]) => (items.length > 0 ? items : [EMPTY_LIST_ITEM]);

type TrainingHeroModuleProps = {
  heroes: TrainingHeroRecord[];
  fetcher: FetcherWithComponents<{ ok?: boolean; error?: string; message?: string }>;
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

export const TrainingHeroModule = ({ heroes, fetcher }: TrainingHeroModuleProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [descriptions, setDescriptions] = useState<string[]>([EMPTY_LIST_ITEM]);
  const [pendingIntent, setPendingIntent] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<{ id: string; label: string } | null>(null);
  const toast = useAdminToast();
  const formRef = useRef<HTMLFormElement>(null);
  const wasSubmitting = useRef(false);
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

  const openEditModal = (item: TrainingHeroRecord) => {
    setEditingId(item.id);
    setTitle(item.title);
    setDescriptions(toEditableList(item.descriptions));
    setModalOpen(true);
  };

  const closeModal = () => {
    if (isSubmitting) return;
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
      descriptions: JSON.stringify(cleanDescriptions),
    };

    if (isEditing && editingId) {
      setPendingIntent("update-training-hero");
      fetcher.submit({ intent: "update-training-hero", id: editingId, ...payload }, { method: "post" });
    } else {
      setPendingIntent("create-training-hero");
      fetcher.submit({ intent: "create-training-hero", ...payload }, { method: "post" });
    }
  };

  const handleDelete = (id: string, label: string) => {
    setDeleteTarget({ id, label });
  };

  const handleConfirmDelete = () => {
    if (!deleteTarget) return;
    toast.success("Training hero deleted.");
    fetcher.submit({ intent: "delete-training-hero", id: deleteTarget.id }, { method: "post" });
    setDeleteTarget(null);
  };

  const columns: AdminTableColumn<TrainingHeroRecord>[] = [
    {
      id: "title",
      header: "Title",
      cell: (row) => <span className="font-semibold text-slate-900">{row.title || "—"}</span>,
    },
    {
      id: "descriptions",
      header: "Descriptions",
      className: "max-w-md",
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
      id: "createdAt",
      header: "Created",
      cell: (row) => <span className="text-slate-600">{formatDate(row.createdAt)}</span>,
    },
    {
      id: "actions",
      header: "Actions",
      className: "w-40",
      cell: (row) => (
        <div className="flex items-center gap-2">
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
            onClick={() => handleDelete(row.id, row.title || "this training hero")}
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
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">TRAINING HERO</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">Manage training hero section</h2>
          <p className="mt-3 text-slate-500">
            Update the title and descriptions shown on the training hero section.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          disabled={isBusy}
          className="flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60"
        >
          <LucidePlus className="mr-2 h-4 w-4" />
          Add hero content
        </button>
      </div>

      <AdminPaginatedTable
        columns={columns}
        data={heroes}
        getRowKey={(row) => row.id}
        isLoading={isSubmitting}
        emptyMessage='No training hero content yet. Click "Add hero content" to create one.'
        itemLabel="training hero entries"
        pagination={{ pageSize: 5 }}
      />

      <AdminModal
        open={isModalOpen}
        onOpenChange={(open) => (open ? setModalOpen(true) : closeModal())}
        title={isEditing ? "Edit Training Hero" : "Add Training Hero"}
        description="Input the title and descriptions for the training hero section."
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
              className="rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              {fetcher.state === "submitting" ? "Saving..." : isEditing ? "Update" : "Add"}
            </button>
          </>
        }
      >
        <form
          ref={formRef}
          className="space-y-4"
          onSubmit={(event) => {
            event.preventDefault();
            handleSave();
          }}
        >
          <label className="block text-sm font-medium text-slate-700">
            Title
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              className={adminInputClass}
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
                    placeholder="Brief description for the training hero section"
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
        </form>
      </AdminModal>

      <DeleteConfirmationModal
        open={deleteTarget !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteTarget(null);
        }}
        title="Delete training hero"
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
        confirmLabel="Delete training hero"
        onConfirm={handleConfirmDelete}
        isBusy={isBusy}
      />
    </section>
  );
};
