// components/admin/AdminTopbar.tsx

import { useLocation, useNavigate } from "react-router";

const pageTitles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/users": "Users",
  "/admin/products": "Products",
  "/admin/orders": "Orders",
  "/admin/settings": "Settings",
};

export default function AdminTopbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const title = pageTitles[location.pathname] ?? "Admin";

  function handleLogout() {
    localStorage.removeItem("role");
    navigate("/login");
  }

  return (
    <header className="h-14 shrink-0 border-b border-white/[0.07] px-8 flex items-center justify-between bg-[#0d0f14]">
      {/* Page title */}
      <h1 className="text-sm font-semibold text-white tracking-wide">{title}</h1>

      {/* Right actions */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white/5 border border-white/10 rounded-lg pl-8 pr-4 py-1.5 text-xs text-white/60 placeholder-white/20 focus:outline-none focus:border-[#a3e635]/40 focus:text-white transition-all w-40 focus:w-56"
          />
          <svg
            className="absolute left-2.5 top-1/2 -translate-y-1/2 text-white/25"
            width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        {/* Notifications */}
        <button className="relative w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#a3e635]" />
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-1.5 text-xs text-white/40 hover:text-red-400 hover:bg-red-400/5 border border-white/10 hover:border-red-400/20 rounded-lg transition-all"
        >
          <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Logout
        </button>
      </div>
    </header>
  );
}
