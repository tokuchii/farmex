import type { LucideIcon } from "lucide-react";
import { LucideCalendar, LucideLayoutDashboard, LucideNewspaper } from "lucide-react";

export type AdminNavLink = {
  label: string;
  to: string;
  icon: LucideIcon;
};

export const adminNavLinks: AdminNavLink[] = [
  { label: "Dashboard", to: "/admin/dashboard", icon: LucideLayoutDashboard },
  { label: "News", to: "/admin/news", icon: LucideNewspaper },
  { label: "Training", to: "/admin/training", icon: LucideCalendar },
];
