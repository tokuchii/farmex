import { useState } from "react";
import { LucidePlus } from "lucide-react";
import AdminModal from "~/components/admin/AdminModal";

const adminInputClass =
  "mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20";

const AdminTraining = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">Training</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Manage training events</h1>
          <p className="mt-3 text-slate-500">
            Schedule workshops and training sessions for the knowledge transfer calendar.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="flex justify-between items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
        >
          <LucidePlus className="mr-2 h-4 w-4" />
          Add event
        </button>
      </div>

      <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-center text-slate-500">
        No training events yet. Use &ldquo;Add event&rdquo; to create one in the modal.
      </div>

      <AdminModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title="Add training event"
        description="Set the date, location, and details for a new training session."
        size="lg"
        footer={
          <>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              Save event
            </button>
          </>
        }
      >
        <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <label className="block text-sm font-medium text-slate-700">
            Event title
            <input type="text" name="title" placeholder="Workshop name" className={adminInputClass} />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Date
              <input type="date" name="date" className={adminInputClass} />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Time
              <input type="time" name="time" className={adminInputClass} />
            </label>
          </div>
          <label className="block text-sm font-medium text-slate-700">
            Location
            <input type="text" name="location" placeholder="Venue or online link" className={adminInputClass} />
          </label>
        </form>
      </AdminModal>
    </section>
  );
};

export default AdminTraining;
