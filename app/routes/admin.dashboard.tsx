import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { AdminUrlToastConfig } from "~/components/admin/useAdminUrlToast";
import { useAdminUrlToast } from "~/components/admin/useAdminUrlToast";
import { getLavStations } from "~/lib/lav-stations.server";
import { getNews } from "~/lib/news.server";
import { getRiceDerbies } from "~/lib/rice-derbies.server";
import { requireAdminUser } from "~/lib/session.server";
import { getTestimonials } from "~/lib/testimonials.server";
import { getVisitorSessions } from "~/lib/visitors.server";
import {
  getMachineRentalGalleries,
  getMachineRentals,
  getTechnicalConsultants,
  getTrainingGalleries,
  getTrainingSessions,
} from "~/lib/trainings.server";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";

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
    visitors,
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
    getVisitorSessions(),
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
      visitors: visitors.length,
    },
    visitorChartData,
  });
}

const visitors = await getVisitorSessions();

const visitorChartData = Object.values(
  visitors.reduce((acc, visitor) => {
    const date = new Date(visitor.createdAt).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

    if (!acc[date]) {
      acc[date] = {
        date,
        visitors: 0,
      };
    }

    acc[date].visitors++;

    return acc;
  }, {} as Record<string, { date: string; visitors: number }>)
);

const AdminDashboard = () => {
  const { user, totals, visitorChartData } = useLoaderData<typeof loader>();

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
      value: totals.visitors.toString(),
      description: "Total guest/user who view the website"
    },
  ] as const;

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

      {/*Visitors Chart*/}
      <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 p-6 shadow-lg shadow-emerald-100/50">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Website Visitors
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Daily visitor trends and engagement metrics
            </p>
          </div>
          <div className="rounded-full bg-emerald-100 p-3">
            <svg
              className="h-6 w-6 text-emerald-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
          </div>
        </div>

        <div className="mt-8">
          <div className="h-[400px] rounded-2xl bg-white p-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={visitorChartData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#e2e8f0"
                  vertical={false}
                />
                <XAxis
                  dataKey="date"
                  stroke="#94a3b8"
                  style={{ fontSize: "12px" }}
                />
                <YAxis
                  allowDecimals={false}
                  stroke="#94a3b8"
                  style={{ fontSize: "12px" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e293b",
                    border: "1px solid #0f172a",
                    borderRadius: "12px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                  }}
                  labelStyle={{ color: "#f1f5f9" }}
                  formatter={(value) => [
                    <span key="value" className="font-semibold text-emerald-400">
                      {value} visitors
                    </span>,
                  ]}
                  labelFormatter={(label) => (
                    <span className="text-slate-300">{label}</span>
                  )}
                />
                <Area
                  type="monotone"
                  dataKey="visitors"
                  stroke="#10b981"
                  strokeWidth={3}
                  fill="url(#colorVisitors)"
                  dot={{ fill: "#10b981", r: 5, strokeWidth: 2, stroke: "#fff" }}
                  activeDot={{ r: 7, fill: "#059669", stroke: "#fff", strokeWidth: 2 }}
                  isAnimationActive={true}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="rounded-2xl bg-emerald-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">
              Total Visitors
            </p>
            <p className="mt-2 text-2xl font-bold text-emerald-900">
              {visitorChartData.reduce((sum, day) => sum + day.visitors, 0)}
            </p>
          </div>
          <div className="rounded-2xl bg-blue-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-700">
              Average Daily
            </p>
            <p className="mt-2 text-2xl font-bold text-blue-900">
              {Math.round(
                visitorChartData.reduce((sum, day) => sum + day.visitors, 0) /
                  visitorChartData.length || 0
              )}
            </p>
          </div>
          <div className="rounded-2xl bg-purple-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-purple-700">
              Peak Day
            </p>
            <p className="mt-2 text-2xl font-bold text-purple-900">
              {Math.max(...visitorChartData.map((day) => day.visitors), 0)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
