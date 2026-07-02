import type { LoaderFunctionArgs } from "react-router";
import { data } from "react-router";
import { useLoaderData, useSearchParams } from "react-router";
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
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { useVisitorChart } from "~/hooks/useVisitorChart";

const DASHBOARD_URL_TOASTS: AdminUrlToastConfig[] = [
  {
    param: "login",
    value: "success",
    type: "success",
    message: "Login successful! Welcome back.",
  },
];

type ViewMode = "today" | "week" | "month" | "year";

function getFilterLabel(view: ViewMode): string {
  switch (view) {
    case "today":
      return "Today";
    case "week":
      return "This Week";
    case "month":
      return "This Year";
    case "year":
      return "All Time";
  }
}

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

  return data({
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

const filterTabs: { key: ViewMode; label: string }[] = [
  { key: "today", label: "Today" },
  { key: "week", label: "Week" },
  { key: "month", label: "Month" },
  { key: "year", label: "Year" },
];

const AdminDashboard = () => {
  const { user, totals } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();
  const view = (searchParams.get("view") || "year") as ViewMode;
  const { chartData, filteredCount } = useVisitorChart(view);

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
    {
      label: "Visitors",
      value: filteredCount.toString(),
      description: `Live count — ${getFilterLabel(view)}`,
    },
  ] as const;

  function handleViewChange(v: ViewMode) {
    const next = new URLSearchParams(searchParams);
    next.set("view", v);
    setSearchParams(next);
  }

  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
          Dashboard
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          Welcome back, {user.username}
        </h1>
        <p className="mt-3 max-w-2xl text-slate-500">
          Overview of the current admin content. Use quick actions below to
          manage each section.
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
            <p className="mt-3 text-3xl font-semibold text-slate-900">
              {item.value}
            </p>
            <p className="mt-1 text-sm text-slate-500">{item.description}</p>
          </article>
        ))}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">
            Website Visitors
          </h2>

          <div className="flex gap-1 rounded-xl border border-slate-200 bg-slate-50 p-1">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleViewChange(tab.key)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                  view === tab.key
                    ? "bg-emerald-500 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              accessibilityLayer={false}
              margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient
                  id="visitorGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="0%"
                    stopColor="#84cc16"
                    stopOpacity={0.45}
                  />
                  <stop
                    offset="100%"
                    stopColor="#84cc16"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                vertical={false}
                stroke="#e5e7eb"
                strokeDasharray="0"
              />

              <XAxis
                dataKey="label"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9ca3af", fontSize: 13 }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                domain={[0, "dataMax + 3"]}
                tick={{ fill: "#9ca3af", fontSize: 13 }}
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="visitors"
                stroke="#84cc16"
                strokeWidth={4}
                fill="url(#visitorGradient)"
                dot={{
                  r: 7,
                  fill: "#84cc16",
                  stroke: "#fff",
                  strokeWidth: 3,
                }}
                activeDot={{
                  r: 9,
                  fill: "#84cc16",
                  stroke: "#fff",
                  strokeWidth: 4,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
