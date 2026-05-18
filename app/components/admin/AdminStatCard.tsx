// components/admin/AdminStatCard.tsx
// Reusable stat card for the dashboard

interface AdminStatCardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon?: React.ReactNode;
}

export default function AdminStatCard({
  label,
  value,
  change,
  trend,
  icon,
}: AdminStatCardProps) {
  const trendColor =
    trend === "up"
      ? "text-[#a3e635]"
      : trend === "down"
      ? "text-red-400"
      : "text-white/30";

  const trendArrow = trend === "up" ? "▲" : trend === "down" ? "▼" : "—";

  return (
    <div className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-white/[0.12] rounded-xl p-5 flex flex-col gap-3 transition-all duration-200 cursor-default">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-white/30 uppercase tracking-[0.18em]">{label}</span>
        {icon && (
          <span className="text-white/20 group-hover:text-white/40 transition-colors">
            {icon}
          </span>
        )}
      </div>

      {/* Value */}
      <span className="text-2xl font-bold text-white tracking-tight">{value}</span>

      {/* Change */}
      <div className="flex items-center gap-1.5">
        <span className={`text-xs font-medium ${trendColor}`}>
          {trendArrow} {change}
        </span>
        <span className="text-[10px] text-white/20">vs last month</span>
      </div>
    </div>
  );
}
