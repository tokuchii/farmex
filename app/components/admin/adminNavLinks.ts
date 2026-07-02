import type { LucideIcon } from "lucide-react";
import {
  LucideSettings2,
  LucideLayoutDashboard,
  LucideNewspaper,
  LucideMessageSquare,
  LucideBrainCircuit,
} from "lucide-react";

export type AdminNavLink = {
  label: string;
  to: string;
  icon: LucideIcon;
};

export const adminNavLinks: AdminNavLink[] = [
  { label: "Dashboard", to: "/admin/dashboard", icon: LucideLayoutDashboard },
  { label: "News", to: "/admin/news", icon: LucideNewspaper },
  { label: "Services", to: "/admin/services", icon: LucideSettings2 },
  { label: "Testimonials", to: "/admin/testimonial", icon: LucideMessageSquare },
  { label: "Knowledge transfer", to: "/admin/knowledgeT", icon: LucideBrainCircuit },
];
