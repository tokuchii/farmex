import { LucidePlus } from "lucide-react";
import { useState } from "react";
import { TrainingGalleryModule } from "./TrainingGalleryModule";
import AdminModal from "~/components/admin/AdminModal";
import { adminInputClass } from "./adminFormStyles";

export const TrainingModule = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className="space-y-6">
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
          onClick={() => setModalOpen(true)}
          className="flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
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

      <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-center text-slate-500">
        No training sessions yet. Use “Add training session” to create one in the modal.
      </div>

      <AdminModal
        open={isModalOpen}
        onOpenChange={setModalOpen}
        title="Add Training Session"
        description="Fill in the training session details and schedule."
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
              className="rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              Save training session
            </button>
          </>
        }
      >
        <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <label className="block text-sm font-medium text-slate-700">
            Session title
            <input type="text" name="title" placeholder="Workshop title" className={adminInputClass} />
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
            Venue or link
            <input type="text" name="location" placeholder="Venue or online link" className={adminInputClass} />
          </label>
        </form>
      </AdminModal>

         <hr className="my-4 border-slate-200" />

      <TrainingGalleryModule />
    </section>
  );
};
