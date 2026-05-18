// app/routes/admin/index.tsx  →  renders at /admin

const stats = [
  { label: "Total Users", value: "1,284", change: "+12%", up: true },
  { label: "Products", value: "348", change: "+3%", up: true },
  { label: "Orders Today", value: "57", change: "-4%", up: false },
  { label: "Revenue", value: "₱84,200", change: "+21%", up: true },
];

const recentOrders = [
  { id: "#ORD-001", customer: "Juan dela Cruz", status: "Completed", amount: "₱1,200" },
  { id: "#ORD-002", customer: "Maria Santos", status: "Pending", amount: "₱450" },
  { id: "#ORD-003", customer: "Pedro Reyes", status: "Cancelled", amount: "₱780" },
  { id: "#ORD-004", customer: "Ana Lim", status: "Completed", amount: "₱2,100" },
];

const statusColor: Record<string, string> = {
  Completed: "text-[#a3e635] bg-[#a3e635]/10",
  Pending: "text-yellow-400 bg-yellow-400/10",
  Cancelled: "text-red-400 bg-red-400/10",
};

export default function AdminDashboard() {
  return (
    <div className="p-8 space-y-8 font-mono">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Dashboard</h1>
        <p className="text-white/40 text-sm mt-1">Welcome back, Admin</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white/5 border border-white/10 rounded-xl p-5 flex flex-col gap-2"
          >
            <span className="text-white/40 text-xs uppercase tracking-widest">{s.label}</span>
            <span className="text-2xl font-bold text-white">{s.value}</span>
            <span
              className={`text-xs font-medium ${
                s.up ? "text-[#a3e635]" : "text-red-400"
              }`}
            >
              {s.up ? "▲" : "▼"} {s.change} this month
            </span>
          </div>
        ))}
      </div>

      {/* Recent orders table */}
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-white/10">
          <h2 className="text-sm font-semibold text-white tracking-wide">Recent Orders</h2>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-white/30 uppercase text-xs tracking-widest border-b border-white/5">
              <th className="text-left px-6 py-3">Order</th>
              <th className="text-left px-6 py-3">Customer</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-right px-6 py-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-white/5 hover:bg-white/[0.03] transition-colors"
              >
                <td className="px-6 py-3 text-white/60">{order.id}</td>
                <td className="px-6 py-3 text-white">{order.customer}</td>
                <td className="px-6 py-3">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColor[order.status]}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-3 text-right text-white">{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
