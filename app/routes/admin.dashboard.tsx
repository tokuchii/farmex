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
  AreaChart,
  Area,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  defs,
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

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthlyVisitors = months.map((month) => ({
    month,
    visitors: 0,
  }));

  visitors.forEach((visitor) => {
    const month = new Date(visitor.createdAt).toLocaleString("en-US", {
      month: "short",
    });

    const item = monthlyVisitors.find((m) => m.month === month);

    if (item) {
      item.visitors++;
    }
  });

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
    visitorChartData: monthlyVisitors,
  });
}

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

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold text-slate-900">
          Website Visitors
        </h2>

        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={visitorChartData}
              accessibilityLayer={false}
              margin={{
                top: 20,
                right: 20,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="visitorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#84cc16" stopOpacity={0.45} />
                  <stop offset="100%" stopColor="#84cc16" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid
                vertical={false}
                stroke="#e5e7eb"
                strokeDasharray="0"
              />

              <XAxis
                dataKey="month"
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
