import { LucidePencil, LucidePlus, LucideTrash2 } from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import { TrainingGalleryModule } from "./TrainingGalleryModule";
import { TrainingHeroModule } from "./TrainingHeroModule";
import AdminModal from "~/components/admin/AdminModal";
import DeleteConfirmationModal from "~/components/admin/DeleteConfirmationModal";
import { adminInputClass } from "./adminFormStyles";
import type { FetcherWithComponents } from "react-router";
import type { CloudinaryConfig } from "~/lib/cloudinary.server";
import type { TrainingGalleryRecord, TrainingHeroRecord, TrainingSessionRecord } from "~/lib/trainings.server";
import AdminPaginatedTable, {
  type AdminTableColumn,
} from "~/components/admin/AdminPaginatedTable";
import { useAdminToast } from "~/components/admin/AdminToast";

type TrainingModuleProps = {
  sessions: TrainingSessionRecord[];
  galleries: TrainingGalleryRecord[];
  heroes: TrainingHeroRecord[];
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

const openNativePicker = (event: MouseEvent<HTMLInputElement>) => {
  const input = event.currentTarget;
  if (typeof input.showPicker === "function") {
    input.showPicker();
  }
};

const blockManualTyping = (event: KeyboardEvent<HTMLInputElement>) => {
  const allowedKeys = ["Tab", "Shift", "Enter", "Escape", "ArrowLeft", "ArrowRight"];
  if (!allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
};

export const TrainingModule = ({ sessions, galleries, heroes, fetcher, cloudinaryConfig }: TrainingModuleProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
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
    setStartDate("");
    setEndDate("");
    setLocation("");
    formRef.current?.reset();
  };

  const openCreateModal = () => {
    resetForm();
    setModalOpen(true);
  };

  const openEditModal = (session: TrainingSessionRecord) => {
    setEditingId(session.id);
    setTitle(session.title);
    setStartDate(session.startDate);
    setEndDate(session.endDate);
    setLocation(session.location);
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
    fetcher.submit(
      {
        intent,
        ...(editingId ? { id: editingId } : {}),
        title: title.trim(),
        startDate: startDate.trim(),
        endDate: endDate.trim(),
        time: "",
        location: location.trim(),
      },
      { method: "post" }
    );
  };

  const handleDelete = (id: string, label: string) => {
    setDeleteTarget({ id, label });
  };

  const handleConfirmDelete = () => {
    if (!deleteTarget) return;
    toast.success("Training session deleted.");
    fetcher.submit({ intent: "delete-training-session", id: deleteTarget.id }, { method: "post" });
    setDeleteTarget(null);
  };

  const columns: AdminTableColumn<TrainingSessionRecord>[] = [
    {
      id: "title",
      header: "Title",
      cell: (row) => <span className="font-semibold text-slate-900">{row.title || "—"}</span>,
    },
    {
      id: "schedule",
      header: "Schedule",
      cell: (row) => (
        <div className="space-y-1 text-xs text-slate-500">
          <p>
            {row.startDate && row.endDate
              ? row.startDate === row.endDate
                ? formatDate(row.startDate)
                : `${formatDate(row.startDate)} – ${formatDate(row.endDate)}`
              : "No date"}
          </p>
          <p>{row.location || "No location"}</p>
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
            onClick={() => handleDelete(row.id, row.title || "this training session")}
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
      <TrainingHeroModule heroes={heroes} fetcher={fetcher} />

      <hr className="my-4 border-slate-200" />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">TRAINING</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Manage training sessions</h1>
          <p className="mt-3 text-slate-500">
            Add and manage workshop schedules, topics, and venue details.
          </p>
        </div>

        <button
          type="button"
          onClick={openCreateModal}
          disabled={isBusy}
          className="flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:opacity-60"
        >
          <LucidePlus className="mr-2 h-4 w-4" />
          Add training session
        </button>
      </div>

      <div>
        <p className="text-lg font-semibold text-slate-700">
          Event schedule
        </p>
      </div>

      <AdminPaginatedTable
        columns={columns}
        data={sessions}
        getRowKey={(row) => row.id}
        isLoading={isSubmitting}
        emptyMessage='No training sessions yet. Use "Add training session" to create one.'
        itemLabel="training sessions"
        pagination={{ pageSize: 5 }}
      />

      <AdminModal
        open={isModalOpen}
        onOpenChange={(open) => (open ? setModalOpen(true) : closeModal())}
        title={isEditing ? "Edit Training Session" : "Add Training Session"}
        description="Fill in the training session details and schedule."
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
              {fetcher.state === "submitting" ? "Saving..." : isEditing ? "Update training session" : "Save training session"}
            </button>
          </>
        }
      >
        <form ref={formRef} className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <label className="block text-sm font-medium text-slate-700">
            Session title
            <input
              type="text"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Workshop title"
              className={adminInputClass}
              required
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Start date
              <input
                type="date"
                name="startDate"
                value={startDate}
                onChange={(event) => setStartDate(event.target.value)}
                onClick={openNativePicker}
                onKeyDown={blockManualTyping}
                className={adminInputClass}
              />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              End date
              <input
                type="date"
                name="endDate"
                value={endDate}
                min={startDate || undefined}
                onChange={(event) => setEndDate(event.target.value)}
                onClick={openNativePicker}
                onKeyDown={blockManualTyping}
                className={adminInputClass}
              />
            </label>
          </div>
          <label className="block text-sm font-medium text-slate-700">
            Venue or link
            <input
              type="text"
              name="location"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Venue or online link"
              className={adminInputClass}
            />
          </label>
        </form>
      </AdminModal>

         <hr className="my-4 border-slate-200" />

      <TrainingGalleryModule
        galleries={galleries}
        fetcher={fetcher}
        cloudinaryConfig={cloudinaryConfig}
      />
      <DeleteConfirmationModal
        open={deleteTarget !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteTarget(null);
        }}
        title="Delete training session"
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
        confirmLabel="Delete session"
        onConfirm={handleConfirmDelete}
        isBusy={isBusy}
      />
    </section>
  );
};
