import { Outlet, NavLink, useNavigate } from "react-router";
import { useEffect, useState } from "react";

// 🔐 Replace this with your real auth logic (e.g. context, cookie, JWT check)
function useAdminAuth() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    // Example: check localStorage for a token/role
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin");
  }, []);

  return isAdmin;
}

const navItems = [
  { to: "/admin", label: "Dashboard", icon: "⬛" },
  { to: "/admin/users", label: "Users", icon: "👥" },
  { to: "/admin/products", label: "Products", icon: "📦" },
  { to: "/admin/orders", label: "Orders", icon: "🧾" },
  { to: "/admin/settings", label: "Settings", icon: "⚙️" },
];

export default function AdminLayout() {
  const isAdmin = useAdminAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin === false) {
      navigate("/login", { replace: true });
    }
  }, [isAdmin, navigate]);

  // Still checking auth
  if (isAdmin === null) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0f1117]">
        <span className="text-[#a3e635] text-sm tracking-widest uppercase animate-pulse">
          Verifying access...
        </span>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#0f1117] text-white font-mono overflow-hidden">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 border-r border-white/10 flex flex-col py-6 px-4 gap-1">
        {/* Logo */}
        <div className="mb-8 px-2">
          <span className="text-[#a3e635] text-xl font-bold tracking-tight">
            FARMEX
          </span>
          <span className="ml-2 text-xs text-white/30 uppercase tracking-widest">
            Admin
          </span>
        </div>

        {/* Nav links */}
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/admin"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-150 ${
                isActive
                  ? "bg-[#a3e635]/10 text-[#a3e635]"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              }`
            }
          >
            <span>{item.icon}</span>
            {item.label}
          </NavLink>
        ))}

        {/* Logout */}
        <div className="mt-auto">
          <button
            onClick={() => {
              localStorage.removeItem("role");
              navigate("/login");
            }}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm text-white/40 hover:text-red-400 hover:bg-red-400/5 rounded-md transition-all"
          >
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
