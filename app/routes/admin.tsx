import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  Link,
  Outlet,
  useActionData,
  useLoaderData,
  useLocation,
  useNavigation,
} from "@remix-run/react";
import { useCallback, useState } from "react";
import { compare } from "bcryptjs";
import AdminAuthShell, { adminInputClass } from "~/components/admin/AdminAuthShell";
import { AdminToastProvider } from "~/components/admin/AdminToast";
import { useAdminActionToast } from "~/components/admin/useAdminActionToast";
import type { AdminUrlToastConfig } from "~/components/admin/useAdminUrlToast";
import { useAdminUrlToast } from "~/components/admin/useAdminUrlToast";
import AdminNavbar from "~/components/admin/AdminNavbar";
import AdminSidebar from "~/components/admin/AdminSidebar";
import { db } from "~/lib/firebase.server";
import {
  createAdminSession,
  destroyAdminSession,
  getAdminUser,
  isPublicAdminPath,
} from "~/lib/session.server";
import { collection, query, where, getDocs } from "firebase/firestore";

type ActionData = {
  formError?: string;
};

const LOGIN_URL_TOASTS: AdminUrlToastConfig[] = [
  {
    param: "logout",
    value: "success",
    type: "success",
    message: "Logout successful. See you again!",
  },
  {
    param: "logout",
    value: "deleted",
    type: "success",
    message: "Account deleted. Goodbye!",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const user = await getAdminUser(request);

  if (user && isPublicAdminPath(url.pathname)) {
    throw redirect("/admin/dashboard");
  }

  if (!user && !isPublicAdminPath(url.pathname)) {
    throw redirect("/admin");
  }

  return json({ user });
}

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const intent = form.get("intent");

  if (intent === "logout") {
    return destroyAdminSession(request);
  }

  if (request.method !== "POST") {
    return json({ formError: "Invalid request method" }, { status: 405 });
  }

  const existingUser = await getAdminUser(request);
  if (existingUser) {
    return redirect("/admin/dashboard");
  }

  const email = form.get("email");
  const password = form.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return json({ formError: "Invalid form data." }, { status: 400 });
  }

  if (!email || !password) {
    return json({ formError: "Please fill in all fields." }, { status: 400 });
  }

  try {
    const usersRef = collection(db, "users");
    const emailQuery = query(usersRef, where("email", "==", email.toLowerCase()));
    const snapshot = await getDocs(emailQuery);

    if (snapshot.empty) {
      return json(
        { formError: "Email or password is incorrect." },
        { status: 401 }
      );
    }

    const userDoc = snapshot.docs[0];
    const userData = userDoc.data();
    const storedPassword = userData.password;

    if (typeof storedPassword !== "string") {
      return json(
        { formError: "Email or password is incorrect." },
        { status: 401 }
      );
    }

    const passwordMatches = storedPassword.startsWith("$2")
      ? await compare(password, storedPassword)
      : storedPassword === password;

    if (!passwordMatches) {
      return json(
        { formError: "Email or password is incorrect." },
        { status: 401 }
      );
    }

    const username =
      typeof userData.username === "string" ? userData.username : "Admin";
    const role = typeof userData.role === "string" ? userData.role : "admin";

    return createAdminSession(
      request,
      {
        userId: userDoc.id,
        email: email.toLowerCase(),
        username,
        role,
      },
      "/admin/dashboard?login=success"
    );
  } catch (error) {
    console.error("Login error:", error);
    return json(
      { formError: "An error occurred while logging in. Please try again." },
      { status: 500 }
    );
  }
}

const AdminLoginForm = () => {
  const actionData = useActionData<ActionData>();
  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";

  useAdminUrlToast(LOGIN_URL_TOASTS);
  useAdminActionToast(actionData?.formError);

  return (
    <AdminAuthShell
        eyebrow="Login"
        title="Admin login"
        description="Log in with your credentials to access the admin panel."
        footer={
          <p>
            Don&apos;t have an account?{" "}
            <Link
              to="/admin/register"
              className="font-semibold text-emerald-600 transition hover:text-emerald-700"
            >
              Register here
            </Link>
          </p>
        }
      >
        <div className="space-y-5">
          <Form method="post" className="space-y-5">
            <label className="block">
              <span className="text-sm font-medium text-slate-700">Email address</span>
              <input
                type="email"
                name="email"
                placeholder="example@mail.com"
                autoComplete="email"
                className={adminInputClass}
                required
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium text-slate-700">Password</span>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                autoComplete="current-password"
                className={adminInputClass}
                required
              />
            </label>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
            >
              {isSubmitting ? "Logging in..." : "Log in"}
            </button>
          </Form>
        </div>
      </AdminAuthShell>
  );
};

const AdminRoot = () => {
  const { user } = useLoaderData<typeof loader>();
  const location = useLocation();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const openMobileNav = useCallback(() => setMobileNavOpen(true), []);
  const closeMobileNav = useCallback(() => setMobileNavOpen(false), []);
  const isLoginPage = location.pathname === "/admin" || location.pathname === "/admin/";
  const isRegisterPage = location.pathname === "/admin/register";

  return (
    <AdminToastProvider>
      {isRegisterPage ? (
        <Outlet />
      ) : isLoginPage ? (
        <AdminLoginForm />
      ) : (
        <div className="h-screen overflow-hidden bg-slate-50 text-slate-900">
      <AdminSidebar mobileOpen={mobileNavOpen} onMobileClose={closeMobileNav} />
      <div className="flex h-full min-w-0 flex-col lg:pl-64">
        <AdminNavbar
          onMenuClick={openMobileNav}
          username={user?.username}
          email={user?.email}
        />
        <main className="admin-scrollbar flex-1 overflow-y-auto p-3 sm:p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
      )}
    </AdminToastProvider>
  );
};

export default AdminRoot;
