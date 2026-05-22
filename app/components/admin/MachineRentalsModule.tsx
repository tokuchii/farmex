import { LucidePlus } from "lucide-react";
import { useState } from "react";
import AdminModal from "~/components/admin/AdminModal";

const adminInputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20";

export const MachineRentalsModule = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">MACHINE RENTALS</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Manage machine rentals</h1>
          <p className="mt-3 text-slate-500">
            Add and manage equipment rentals, pricing, and availability for tractors, harvesters, and other tools.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
        >
          <LucidePlus className="mr-2 h-4 w-4" />
          Add machine rental
        </button>
      </div>

      <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-center text-slate-500">
        No machine rentals yet. Use “Add machine rental” to create one in the modal.
      </div>

      <AdminModal
        open={isModalOpen}
        onOpenChange={setModalOpen}
        title="Add Machine Rental"
        description="Fill in the details for the rental equipment and availability schedule."
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
              Save machine rental
            </button>
          </>
        }
      >
        <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
          <label className="block text-sm font-medium text-slate-700">
            Equipment name
            <input type="text" name="name" placeholder="Tractor, harvester, etc." className={adminInputClass} />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Rental rate
            <input type="text" name="rate" placeholder="e.g. ₱1,200 per day" className={adminInputClass} />
          </label>
          <label className="block text-sm font-medium text-slate-700">
            Availability notes
            <textarea
              name="details"
              placeholder="Location, condition, or special instructions"
              className={`${adminInputClass} admin-scrollbar resize-none`}
              rows={4}
            />
          </label>
        </form>
      </AdminModal>
    </section>
  );
};
