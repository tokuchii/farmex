import type { ActionFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, Outlet, useActionData, useLocation } from "@remix-run/react";
import { useCallback, useState } from "react";
import AdminNavbar from "~/components/admin/AdminNavbar";
import AdminSidebar from "~/components/admin/AdminSidebar";

const SAMPLE_EMAIL = "admin@farmex.com";
const SAMPLE_PASSWORD = "password123";

type ActionData = {
  formError?: string;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email");
  const password = form.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return json({ formError: "Hindi valid ang form data." }, { status: 400 });
  }

  if (!email || !password) {
    return json({ formError: "Punan ang email at password." }, { status: 400 });
  }

  if (email !== SAMPLE_EMAIL || password !== SAMPLE_PASSWORD) {
    return json(
      { formError: "Maling email o password. Gamitin ang sample account sa ibaba." },
      { status: 401 }
    );
  }

  return redirect("/admin/dashboard");
};

const AdminRoot = () => {
  const location = useLocation();
  const actionData = useActionData<ActionData>();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const openMobileNav = useCallback(() => setMobileNavOpen(true), []);
  const closeMobileNav = useCallback(() => setMobileNavOpen(false), []);
  const isLoginPage = location.pathname === "/admin" || location.pathname === "/admin/";

  if (isLoginPage) {
    return (
      <main className="min-h-screen bg-white text-slate-100 flex items-center justify-center px-4 py-10">
        <section className="w-full max-w-md rounded-3xl bg-slate-900/95 border border-slate-700 shadow-2xl shadow-slate-950/30 backdrop-blur-xl p-8">
          <div className="mb-8 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-2xl font-semibold text-slate-950">
              A
            </span>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-white">Admin Login</h1>
            <p className="mt-3 text-sm text-slate-400">
              Log in with the sample account to access the admin panel.
            </p>
          </div>

          {actionData?.formError ? (
            <div className="mt-6 rounded-3xl border border-rose-500 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
              {actionData.formError}
            </div>
          ) : null}

          <Form method="post" className="mt-6 space-y-6">
            <label className="block">
              <span className="text-sm font-medium text-slate-300">Email address</span>
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20"
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-300">Password</span>
              <input
                type="password"
                name="password"
                placeholder="********"
                className="mt-2 w-full rounded-3xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20"
                required
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-3xl bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            >
              Login
            </button>
          </Form>

          <div className="mt-6 text-center text-sm text-slate-500">
            <p>
              Don&rsquo;t have an account? <Link to="/" className="font-medium text-white underline">Back to the homepage</Link>
            </p>
          </div>
        </section>
      </main>
    );
  }

  return (
    <div className="h-screen overflow-hidden bg-slate-50 text-slate-900">
      <AdminSidebar mobileOpen={mobileNavOpen} onMobileClose={closeMobileNav} />
      <div className="flex h-full min-w-0 flex-col lg:pl-64">
        <AdminNavbar onMenuClick={openMobileNav} />
        <main className="admin-scrollbar flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminRoot;
