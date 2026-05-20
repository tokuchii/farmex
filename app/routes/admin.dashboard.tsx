import { Link } from "@remix-run/react";
import { LucideArrowRight, LucideCalendar, LucideNewspaper } from "lucide-react";

const stats = [
  { label: "News articles", value: "0", description: "Published on the site" },
  { label: "Training events", value: "0", description: "Scheduled sessions" },
  { label: "Draft items", value: "0", description: "Waiting to publish" },
  { label: "Status", value: "Live", description: "Admin panel ready" },
] as const;

const quickLinks = [
  {
    title: "Manage news",
    description: "Add or edit articles for the public news page.",
    to: "/admin/news",
    icon: LucideNewspaper,
  },
  {
    title: "Manage training",
    description: "Schedule workshops and calendar events.",
    to: "/admin/training",
    icon: LucideCalendar,
  },
] as const;

const AdminDashboard = () => {
  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">Dashboard</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Welcome back, Admin</h1>
        <p className="mt-3 max-w-2xl text-slate-500">
          Overview of your Farmex admin panel. Use the cards below to jump to news or training, or
          open the sidebar anytime.
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
        <h2 className="text-lg font-semibold text-slate-900">Quick actions</h2>
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
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
