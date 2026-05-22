import { useState } from "react";
import { LucideTractor, LucideUserCog, LucideCalendar } from "lucide-react";
import { MachineRentalsModule, TechnicalConsultantModule, TrainingModule } from "~/components/admin";

const AdminServices = () => {
  const [activeSection, setActiveSection] = useState<"rentals" | "consultation" | "training">("rentals");

  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setActiveSection("rentals")}
          className={`w-full sm:basis-0 sm:flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${
            activeSection === "rentals"
              ? "bg-emerald-500 text-white hover:bg-emerald-400"
              : "bg-slate-200 text-slate-900 hover:bg-slate-300"
          }`}
        >
          <LucideTractor className="mr-2 inline-block" />
          Machine Rentals
        </button>
        <button
          type="button"
          onClick={() => setActiveSection("consultation")}
          className={`w-full sm:basis-0 sm:flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${
            activeSection === "consultation"
              ? "bg-emerald-500 text-white hover:bg-emerald-400"
              : "bg-slate-200 text-slate-900 hover:bg-emerald-300"
          }`}
        >
          <LucideUserCog className="mr-2 inline-block" />
          Technical Consultant
        </button>
        <button
          type="button"
          onClick={() => setActiveSection("training")}
          className={`w-full sm:basis-0 sm:flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${
            activeSection === "training"
              ? "bg-emerald-500 text-white hover:bg-emerald-400"
              : "bg-slate-200 text-slate-900 hover:bg-slate-300"
          }`}
        >
          <LucideCalendar className="mr-2 inline-block" />
          Training
        </button>
      </div>

      {activeSection === "rentals" ? (
        <MachineRentalsModule />
      ) : activeSection === "consultation" ? (
        <TechnicalConsultantModule />
      ) : (
        <TrainingModule />
      )}
    </section>
  );
};

export default AdminServices;
