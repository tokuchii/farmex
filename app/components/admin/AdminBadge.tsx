// components/admin/AdminBadge.tsx
// Reusable status/label badge

type BadgeVariant = "success" | "warning" | "danger" | "info" | "neutral";

interface AdminBadgeProps {
  label: string;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  success: "bg-[#a3e635]/10 text-[#a3e635] border-[#a3e635]/20",
  warning: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  danger:  "bg-red-400/10 text-red-400 border-red-400/20",
  info:    "bg-sky-400/10 text-sky-400 border-sky-400/20",
  neutral: "bg-white/5 text-white/40 border-white/10",
};

export default function AdminBadge({ label, variant = "neutral" }: AdminBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium border ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
}
