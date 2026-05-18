// app/routes/admin/users.tsx  →  renders at /admin/users

export default function AdminUsers() {
  return (
    <div className="p-8 font-mono">
      <h1 className="text-2xl font-bold text-white tracking-tight">Users</h1>
      <p className="text-white/40 text-sm mt-1">Manage registered users</p>
      {/* Add your users table/logic here */}
    </div>
  );
}
