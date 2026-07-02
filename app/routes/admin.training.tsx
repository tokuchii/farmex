import { useState } from "react";

const AdminServices = () => {
  const [activeSection, setActiveSection] = useState<"rentals" | "consultation" | "training">("rentals");

  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
      <div className="flex gap-3 sm:flex-row">
        <button
          type="button"
          onClick={() => setActiveSection("rentals")}
          className={`flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${
            activeSection === "rentals"
              ? "bg-emerald-500 text-white hover:bg-emerald-400"
              : "bg-slate-200 text-slate-900 hover:bg-slate-300"
          }`}
        >
          Machine Rentals
        </button>
        <button
          type="button"
          onClick={() => setActiveSection("consultation")}
          className={`flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${
            activeSection === "consultation"
              ? "bg-emerald-500 text-white hover:bg-emerald-400"
              : "bg-slate-200 text-slate-900 hover:bg-slate-300"
          }`}
        >
          Technical Consultant
        </button>
        <button
          type="button"
          onClick={() => setActiveSection("training")}
          className={`flex-1 rounded-2xl px-5 py-3 text-sm font-semibold transition ${
            activeSection === "training"
              ? "bg-emerald-500 text-white hover:bg-emerald-400"
              : "bg-slate-200 text-slate-900 hover:bg-slate-300"
          }`}
        >
          Training
        </button>
      </div>

      <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-slate-700">
        {activeSection === "rentals" ? (
          <>
            <p className="text-lg font-semibold text-slate-900">Machine rentals</p>
            <p className="mt-3 text-slate-500">
              Manage equipment inventory, rental rates, and machine availability for tractors, harvesters, and other agricultural tools.
            </p>
          </>
        ) : activeSection === "consultation" ? (
          <>
            <p className="text-lg font-semibold text-slate-900">Technical consultant</p>
            <p className="mt-3 text-slate-500">
              Coordinate consultant assignments, advisory sessions, and field support for farmer clients and extension programs.
            </p>
          </>
        ) : (
          <>
            <p className="text-lg font-semibold text-slate-900">Training</p>
            <p className="mt-3 text-slate-500">
              Organize training schedules, workshop topics, and venue details for production training and knowledge-transfer events.
            </p>
          </>
        )}
      </div>
    </section>
  );
};

export default AdminServices;
