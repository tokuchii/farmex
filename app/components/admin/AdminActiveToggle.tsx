import { cn } from "~/lib/utils";

type AdminActiveToggleProps = {
  active: boolean;
  disabled?: boolean;
  onToggle: () => void;
};

const AdminActiveToggle = ({ active, disabled, onToggle }: AdminActiveToggleProps) => (
  <button
    type="button"
    onClick={onToggle}
    disabled={disabled}
    aria-pressed={active}
    className={cn(
      "min-w-[3.25rem] rounded-xl px-3 py-1.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40",
      active
        ? "bg-emerald-500 text-white hover:bg-emerald-400"
        : "border border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200",
      disabled && "cursor-not-allowed opacity-60"
    )}
  >
    {active ? "On" : "Off"}
  </button>
);

export default AdminActiveToggle;
