import { Form, Link, useLocation } from "@remix-run/react";
import { LucideExternalLink, LucideLogOut, LucideMenu, LucideUser } from "lucide-react";
import type { FC } from "react";
import { adminNavLinks } from "./adminNavLinks";
import { cn } from "~/lib/utils";

type AdminNavbarProps = {
  onMenuClick?: () => void;
  username?: string;
  email?: string;
};

const getPageTitle = (pathname: string) => {
  const match = adminNavLinks.find(
    (link) => pathname === link.to || pathname.startsWith(`${link.to}/`)
  );

  return match?.label ?? "Admin";
};

const AdminNavbar: FC<AdminNavbarProps> = ({ onMenuClick, username, email }) => {
  const { pathname } = useLocation();
  const pageTitle = getPageTitle(pathname);
  const displayName = username ?? "Admin";

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur-sm sm:px-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            className="inline-flex shrink-0 items-center justify-center rounded-xl border border-slate-200 p-2.5 text-slate-700 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 lg:hidden"
            aria-label="Open menu"
          >
            <LucideMenu className="h-5 w-5" />
          </button>

          <div className="min-w-0 lg:hidden">
            <p className="truncate text-xs font-bold uppercase tracking-[0.16em] text-emerald-600">
              Farmex Admin
            </p>
            <p className="truncate text-base font-semibold text-slate-900">{pageTitle}</p>
          </div>

          <div className="hidden min-w-0 lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Current page
            </p>
            <p className="truncate text-lg font-semibold text-slate-900">{pageTitle}</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            to="/"
            className="hidden items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 transition hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-800 sm:inline-flex"
          >
            <LucideExternalLink className="h-4 w-4" aria-hidden />
            Site
          </Link>

          <div
            className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 sm:flex"
            title={email ?? displayName}
          >
            <span className="rounded-lg bg-white p-1.5 text-emerald-600 shadow-sm">
              <LucideUser className="h-4 w-4" aria-hidden />
            </span>
            <span className="max-w-[8rem] truncate text-sm font-medium text-slate-700 md:max-w-[10rem]">
              <a href="/admin/profile">{displayName}</a>
            </span>
          </div>

          <Form method="post" action="/admin">
            <input type="hidden" name="intent" value="logout" />
            <button
              type="submit"
              className={cn(
                "inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-3 py-2 text-sm font-semibold text-white transition hover:bg-emerald-400",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40"
              )}
            >
              <LucideLogOut className="h-4 w-4" aria-hidden />
              <span className="hidden sm:inline">Logout</span>
              <span className="sr-only sm:hidden">Logout</span>
            </button>
          </Form>
        </div>
      </div>
    </header>
  );
};

export default AdminNavbar;
