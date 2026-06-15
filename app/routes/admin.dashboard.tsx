import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import {
  LucideArrowRight,
  LucideCaptions,
  LucideCalendar,
  LucideNewspaper,
  LucideQuote,
  LucideTractor,
} from "lucide-react";
import type { AdminUrlToastConfig } from "~/components/admin/useAdminUrlToast";
import { useAdminUrlToast } from "~/components/admin/useAdminUrlToast";
import { getLavStations } from "~/lib/lav-stations.server";
import { getNews } from "~/lib/news.server";
import { getRiceDerbies } from "~/lib/rice-derbies.server";
import { requireAdminUser } from "~/lib/session.server";
import { getTestimonials } from "~/lib/testimonials.server";
import {
  getMachineRentalGalleries,
  getMachineRentals,
  getTechnicalConsultants,
  getTrainingGalleries,
  getTrainingSessions,
} from "~/lib/trainings.server";

const DASHBOARD_URL_TOASTS: AdminUrlToastConfig[] = [
  {
    param: "login",
    value: "success",
    type: "success",
    message: "Login successful! Welcome back.",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAdminUser(request);

  const [
    news,
    machineRentals,
    machineRentalGalleries,
    technicalConsultants,
    trainingSessions,
    trainingGalleries,
    testimonials,
    lavStations,
    riceDerbies,
  ] = await Promise.all([
    getNews(),
    getMachineRentals(),
    getMachineRentalGalleries(),
    getTechnicalConsultants(),
    getTrainingSessions(),
    getTrainingGalleries(),
    getTestimonials(),
    getLavStations(),
    getRiceDerbies(),
  ]);

  return json({
    user,
    totals: {
      news: news.length,
      machineRentals: machineRentals.length,
      machineRentalGalleries: machineRentalGalleries.length,
      technicalConsultants: technicalConsultants.length,
      trainingSessions: trainingSessions.length,
      trainingGalleries: trainingGalleries.length,
      testimonials: testimonials.length,
      lavStations: lavStations.length,
      riceDerbies: riceDerbies.length,
    },
  });
}

const AdminDashboard = () => {
  const { user, totals } = useLoaderData<typeof loader>();

  useAdminUrlToast(DASHBOARD_URL_TOASTS);

  const stats = [
    {
      label: "News articles",
      value: totals.news.toString(),
      description: "Items in News module",
    },
    {
      label: "Service records",
      value: (
        totals.machineRentals +
        totals.machineRentalGalleries +
        totals.technicalConsultants +
        totals.trainingSessions +
        totals.trainingGalleries
      ).toString(),
      description: "Machine rentals, consultants, training, and galleries",
    },
    {
      label: "Knowledge transfer",
      value: (totals.lavStations + totals.riceDerbies).toString(),
      description: "Lav stations and rice derbies records",
    },
    {
      label: "Testimonials",
      value: totals.testimonials.toString(),
      description: "Client testimonial entries",
    },
  ] as const;

  // const quickLinks = [
  //   {
  //     title: "Manage news",
  //     description: `Create and update articles (${totals.news} records).`,
  //     to: "/admin/news",
  //     icon: LucideNewspaper,
  //   },
  //   {
  //     title: "Manage services",
  //     description:
  //       "Machine rentals, machine gallery, technical consultant, training sessions, and training gallery.",
  //     to: "/admin/services",
  //     icon: LucideTractor,
  //   },
  //   {
  //     title: "Manage testimonials",
  //     description: `Handle customer testimonials (${totals.testimonials} records).`,
  //     to: "/admin/testimonial",
  //     icon: LucideQuote,
  //   },
  //   {
  //     title: "Manage knowledge transfer",
  //     description: `Lav stations (${totals.lavStations}) and rice derbies (${totals.riceDerbies}).`,
  //     to: "/admin/knowledgeT",
  //     icon: LucideCaptions,
  //   },
  //   {
  //     title: "Open training section",
  //     description: `Jump to services > training (${totals.trainingSessions} sessions).`,
  //     to: "/admin/services",
  //     icon: LucideCalendar,
  //   },
  // ] as const;

  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">Dashboard</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          Welcome back, {user.username}
        </h1>
        <p className="mt-3 max-w-2xl text-slate-500">
          Overview of the current admin content. Use quick actions below to manage each section.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <article
            key={item.label}
            className="rounded-3xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {item.label}
            </p>
            <p className="mt-3 text-3xl font-semibold text-slate-900">{item.value}</p>
            <p className="mt-1 text-sm text-slate-500">{item.description}</p>
          </article>
        ))}
      </div>

      <div>
        {/* <h2 className="text-lg font-semibold text-slate-900">Quick actions</h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {quickLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.to}
                to={item.to}
                className="group flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-5 transition hover:border-emerald-300 hover:shadow-md"
              >
                <span className="rounded-2xl bg-emerald-500/10 p-3 text-emerald-600">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 font-semibold text-slate-900">
                    {item.title}
                    <LucideArrowRight className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-emerald-600" />
                  </span>
                  <span className="mt-1 block text-sm text-slate-500">{item.description}</span>
                </span>
              </Link>
            );
          })}
        </div> */}
      </div>
    </section>
  );
};

export default AdminDashboard;
