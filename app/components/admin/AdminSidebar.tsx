// components/admin/AdminSidebar.tsx

import { NavLink } from "react-router";

const navItems = [
  {
    label: "Dashboard",
    to: "/admin",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    label: "Users",
    to: "/admin/users",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: "Products",
    to: "/admin/products",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    label: "Orders",
    to: "/admin/orders",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="13" y2="16" />
      </svg>
    ),
  },
  {
    label: "Settings",
    to: "/admin/settings",
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

export default function AdminSidebar() {
  return (
    <aside className="w-56 shrink-0 border-r border-white/[0.07] flex flex-col py-6 px-3 gap-0.5 bg-[#0d0f14]">
      {/* Logo */}
      <div className="flex items-baseline gap-2 px-3 mb-8">
        <span className="text-[#a3e635] text-lg font-bold tracking-tight">FARMEX</span>
        <span className="text-[10px] text-white/25 uppercase tracking-[0.2em]">Admin</span>
      </div>

      {/* Section label */}
      <span className="px-3 text-[10px] text-white/25 uppercase tracking-[0.2em] mb-2">
        Navigation
      </span>

      {/* Nav */}
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/admin"}
          className={({ isActive }) =>
            `group flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 ${
              isActive
                ? "bg-[#a3e635]/10 text-[#a3e635]"
                : "text-white/40 hover:text-white hover:bg-white/5"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-[#a3e635]" : "text-white/30 group-hover:text-white/70"}>
                {item.icon}
              </span>
              {item.label}
              {isActive && (
                <span className="ml-auto w-1 h-1 rounded-full bg-[#a3e635]" />
              )}
            </>
          )}
        </NavLink>
      ))}

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-white/[0.07] px-1">
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="w-7 h-7 rounded-full bg-[#a3e635]/20 flex items-center justify-center text-[#a3e635] text-xs font-bold">
            A
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-white/70">Admin</span>
            <span className="text-[10px] text-white/25">admin@farmex.com</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
