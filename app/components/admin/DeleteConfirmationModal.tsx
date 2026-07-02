import type { ReactNode } from "react";
import AdminModal from "~/components/admin/AdminModal";

type DeleteConfirmationModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  isBusy?: boolean;
  icon?: ReactNode;
};

const DeleteConfirmationModal = ({
  open,
  onOpenChange,
  title = "Confirm delete",
  description,
  confirmLabel = "Delete",
  cancelLabel = "Cancel",
  onConfirm,
  isBusy = false,
}: DeleteConfirmationModalProps) => {
  return (
    <AdminModal
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      size="sm"
      footer={
        <>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            disabled={isBusy}
            className="rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={isBusy}
            className="rounded-2xl bg-rose-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-rose-400 disabled:opacity-60"
          >
            {confirmLabel}
          </button>
        </>
      }
    >
      <div className="space-y-4 text-sm text-slate-600">
        <p>{description}</p>
      </div>
    </AdminModal>
  );
};

export default DeleteConfirmationModal;
