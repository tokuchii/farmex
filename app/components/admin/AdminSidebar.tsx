import { NavLink, useLocation } from "@remix-run/react";
import { LucideX } from "lucide-react";
import { useEffect } from "react";
import type { FC } from "react";
import { adminNavLinks } from "./adminNavLinks";
import { cn } from "~/lib/utils";

type AdminSidebarProps = {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
};

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  cn(
    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
    isActive
      ? "bg-emerald-500 text-white shadow-sm shadow-emerald-500/25"
      : "text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"
  );

const SidebarBrand = () => (
  <div className="flex items-center gap-3">
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-sm font-bold text-white">
      F
    </span>
    <div className="min-w-0">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">Farmex</p>
      <p className="truncate text-base font-semibold text-slate-900">Admin panel</p>
    </div>
  </div>
);

const AdminNav = ({ onNavigate }: { onNavigate?: () => void }) => (
  <nav className="flex flex-col gap-1" aria-label="Admin navigation">
    {adminNavLinks.map((item) => {
      const Icon = item.icon;

      return (
        <NavLink key={item.to} to={item.to} onClick={onNavigate} className={navLinkClass}>
          <Icon className="h-4 w-4 shrink-0" aria-hidden />
          {item.label}
        </NavLink>
      );
    })}
  </nav>
);

const AdminSidebar: FC<AdminSidebarProps> = ({ mobileOpen = false, onMobileClose }) => {
  const location = useLocation();

  useEffect(() => {
    onMobileClose?.();
  }, [location.pathname, onMobileClose]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-20 lg:flex lg:w-64 lg:flex-col border-r border-slate-200 bg-white">
        <div className="admin-scrollbar flex h-full flex-col overflow-y-auto px-4 py-5">
          <SidebarBrand />
          <div className="mt-8 flex-1">
            <AdminNav />
          </div>
          <p className="mt-6 border-t border-slate-100 pt-4 text-xs text-slate-400">
              Farmex Corporation @2026.
          </p>
        </div>
      </aside>

      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={onMobileClose}
          className={cn(
            "absolute inset-0 bg-slate-900/40 transition-opacity duration-300",
            mobileOpen ? "opacity-100" : "opacity-0"
          )}
        />

        <aside
          className={cn(
            "absolute left-0 top-0 flex h-full w-[min(100%,18rem)] flex-col border-r border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Admin menu"
        >
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-4">
            <SidebarBrand />
            <button
              type="button"
              onClick={onMobileClose}
              className="rounded-xl border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-50 hover:text-slate-900"
              aria-label="Close menu"
            >
              <LucideX className="h-5 w-5" />
            </button>
          </div>

          <div className="admin-scrollbar flex-1 overflow-y-auto px-4 py-5">
            <AdminNav onNavigate={onMobileClose} />
          </div>

          <p className="border-t border-slate-100 px-4 py-4 text-xs text-slate-400">
            Farmex Corporation @2026.
          </p>
        </aside>
      </div>
    </>
  );
};

export default AdminSidebar;
