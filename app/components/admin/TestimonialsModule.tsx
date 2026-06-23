import { useState } from "react";
import { LucidePlus } from "lucide-react";
import AdminModal from "~/components/admin/AdminModal";
import { adminInputClass } from "./adminFormStyles";

export const TestimonialsModule = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">Testimonial</p>
                <h1 className="mt-2 text-3xl font-semibold text-slate-900">Manage testimonials</h1>
                <p className="mt-3 text-slate-500">
                    Add and manage customer testimonials for your website.
                </p>
                </div>

                <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
                >
                <LucidePlus className="mr-2 h-4 w-4" />
                Add testimonial
                </button>
            </div>

            <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-center text-slate-500">
                No testimonials yet. Use &ldquo;Add testimonial&rdquo; to create one in the modal.
            </div>

            <AdminModal
                open={modalOpen}
                onOpenChange={setModalOpen}
                title="Add testimonial"
                description="Share your customers' experiences and feedback."
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
                    Save testimonial
                    </button>
                </>
                }
            >
                <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
                <label className="block text-sm font-medium text-slate-700">
                    Customer name
                    <input type="text" name="name" placeholder="Full name" className={adminInputClass} />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                    Testimonial content
                    <textarea
                        name="content"
                        placeholder="Share your experience..."
                        className={`${adminInputClass} admin-scrollbar resize-none`}
                        rows={4}
                        />
                </label>
                    <label className="block text-sm font-medium text-slate-700">
                    Date
                    <input type="date" name="date" className={adminInputClass} />
                    </label>
                <label className="block text-sm font-medium text-slate-700">
                    Location
                    <input type="text" name="location" placeholder="Venue or online link" className={adminInputClass} />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                    Position
                        <span className="ml-1 text-slate-400 text-xs">(Optional)</span>
                    <input type="text" name="position" placeholder="Job title or role" className={adminInputClass} />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                    Variety
                        <span className="ml-1 text-slate-400 text-xs">(Optional)</span>
                    <input type="text" name="variety" placeholder="Product or service variety" className={adminInputClass} />
                </label>
                </form>
            </AdminModal>
        </section>
    );
};