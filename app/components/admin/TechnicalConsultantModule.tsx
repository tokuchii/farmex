import { LucidePlus } from "lucide-react";
import { useState } from "react";
import AdminModal from "~/components/admin/AdminModal";

const adminInputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20";

export const TechnicalConsultantModule = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">TECHNICAL CONSULTANT</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Manage technical consultants</h1>
          <p className="mt-3 text-slate-500">
            Add and manage consultant profiles, specialties, and advisory availability.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
        >
          <LucidePlus className="mr-2 h-4 w-4" />
          Add technical consultant
        </button>
      </div>

      <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-center text-slate-500">
        No technical consultants yet. Use “Add technical consultant” to create one in the modal.
      </div>

      <AdminModal
        open={isModalOpen}
        onOpenChange={setModalOpen}
        title="Add Technical Consultant"
        description="Fill in the consultant’s name, specialty, and availability."
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
              Save technical consultant
            </button>
          </>
        }
      >
        <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <label className="block text-sm font-medium text-slate-700">
            Consultant name
            <input type="text" name="name" placeholder="Full name" className={adminInputClass} />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Specialty
            <input type="text" name="specialty" placeholder="Soil, machinery, crop planning" className={adminInputClass} />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Availability notes
            <textarea
              name="details"
              placeholder="Dates, locations, or service scope"
              className={`${adminInputClass} admin-scrollbar resize-none`}
              rows={4}
            />
          </label>
        </form>
      </AdminModal>
    </section>
  );
};
