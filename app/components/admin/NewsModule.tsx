import { useState } from "react";
import { LucidePlus } from "lucide-react";
import AdminModal from "~/components/admin/AdminModal";
import { adminInputClass } from "./adminFormStyles";
import type { FetcherWithComponents } from "@remix-run/react";
import AdminMultiImageUpload from "~/components/admin/AdminMultiImageUpload";
import AdminPaginatedTable, {
  type AdminTableColumn,
} from "~/components/admin/AdminPaginatedTable";
import { NewsRecords } from "~/lib/news.server";
import { CloudinaryConfig } from "~/lib/cloudinary.server";

type NewsModuleProps = {
    news: NewsRecords[];
    fetcher: FetcherWithComponents<{ ok?: boolean; error?: string; message?: string}>;
    cloudinaryConfig: CloudinaryConfig | null;
};

export const NewsModule = ({ news, fetcher, cloudinaryConfig }: NewsModuleProps
) => {
    const [modalOpen, setModalOpen] = useState(false);

    const columns: AdminTableColumn<NewsRecords>[] = [
        {
            id: "title",
            header: "Title",
            cell: (row) => <span>{row.title}</span>
        }
    ];

    return (
        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">News</p>
                <h1 className="mt-2 text-3xl font-semibold text-slate-900">Manage news</h1>
                <p className="mt-3 text-slate-500">
                    Create and update news articles shown on the public site.
                </p>
                </div>

                <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="flex justify-center items-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
                >
                <LucidePlus className="mr-2 h-4 w-4" />
                Add article
                </button>
            </div>

            <AdminPaginatedTable
                columns={columns}
                data={news}
                getRowKey={(row) => row.id}
            />

            <AdminModal
                open={modalOpen}
                onOpenChange={setModalOpen}
                title="Add news article"
                description="Fill in the details below. You can connect this form to your API later."
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
                    Save article
                    </button>
                </>
                }
            >
                <form className="space-y-4" onSubmit={(event) => event.preventDefault()}>
                <label className="block text-sm font-medium text-slate-700">
                    Title
                    <input type="text" name="title" placeholder="Article title" className={adminInputClass} />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                    Author
                    <span className="ml-1 text-slate-400 text-xs">(Optional)</span>

                    <input
                        type="text"
                        name="author"
                        placeholder="Full name"
                        className={adminInputClass}
                    />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                    Organization
                    <input
                    type="text"
                    name="organization"
                    placeholder="Name of the organization"
                    className={adminInputClass}
                    />
                </label>

                <label className="block text-sm font-medium text-slate-700">
                    Position
                    <span className="ml-1 text-slate-400 text-xs">(Optional)</span>

                    <input
                    type="text"
                    name="position"
                    placeholder="Job title or role"
                    className={adminInputClass}
                    />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                    Notes
                    <span className="ml-1 text-slate-400 text-xs">(Optional)</span>
                    <textarea
                    name="notes"
                    placeholder="Additional details or context"
                    className={`${adminInputClass} resize-none`}
                    rows={3}
                    />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                    Location
                    <input type="text" name="location" placeholder="City, state, or region" className={adminInputClass} />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                    Publish date
                    <input type="date" name="publishedAt" className={adminInputClass} />
                </label>
                <label className="block text-sm font-medium text-slate-700">
                    Summary
                    <textarea
                    name="summary"
                    rows={3}
                    placeholder="Short description for listings"
                    className={`${adminInputClass} resize-none`}
                    />
                </label>

                <AdminMultiImageUpload
                    files={[]}
                    onChange={() => {}}
                />
                </form>
            </AdminModal>
        </section>
    );
};

export default NewsModule;