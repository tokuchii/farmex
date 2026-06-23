import { useState } from "react";
import AdminModal from "~/components/admin/AdminModal";
import { adminInputClass } from "./adminFormStyles";
import { LucidePlus } from "lucide-react";
import AdminMultiImageUpload from "~/components/admin/AdminMultiImageUpload";

export const TrainingGalleryModule = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <section className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-semibold text-slate-700">Gallery  Collections</p>
            </div>

            <button
             type="button"
             onClick={() => setModalOpen(true)}
             className="flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
            <LucidePlus className="mr-2 h-4 w-4" />
                Add gallery collection
            </button>
           </div>

           <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-center text-slate-500">
             No gallery collections yet. Use “Add gallery collection” to create one in the modal.
           </div>

            <AdminModal
                open={isModalOpen}
                onOpenChange={setModalOpen}
                title="Add Gallery Collection"
                description="Fill in the gallery collection details and schedule."
                size="lg"
                footer={
                    <>
                    <button 
                        type="button"
                        onClick={() => setModalOpen(false)}
                        className="rounded-2xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => setModalOpen(false)}
                        className="rounded-2xl bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400"
                    >
                      Save collection
                    </button>
                    </>
                }
            >
                <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
                    <div>
                        <label htmlFor="collectionName" className="block text-sm font-medium text-slate-700">
                            Collection Name
                        </label>
                        <input
                            type="text"
                            id="collectionName"
                            name="collectionName"
                            className={adminInputClass}
                            placeholder="e.g. Spring 2024 Training Highlights"
                        />
                    </div>
                    
                    <AdminMultiImageUpload
                        files={[]}
                        onChange={() => {}}
                    />
                </form>
             </AdminModal>
        </section>    
    );
}
