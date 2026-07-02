import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData } from "@remix-run/react";
import { hash } from "bcryptjs";
import AdminAuthShell, {
  AdminAuthField,
  adminInputClass,
} from "~/components/admin/AdminAuthShell";
import { useAdminActionToast } from "~/components/admin/useAdminActionToast";
import type { AdminUrlToastConfig } from "~/components/admin/useAdminUrlToast";
import { useAdminUrlToast } from "~/components/admin/useAdminUrlToast";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "~/lib/firebase.server";

const DEFAULT_ROLE = "admin";

const REGISTER_URL_TOASTS: AdminUrlToastConfig[] = [
  {
    param: "registered",
    value: "true",
    type: "success",
    message: "Account successfully created! You can now log in.",
  },
];

type ActionData = {
  formError?: string;
  fieldErrors?: {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  };
};

export const meta: MetaFunction = () => [
  { title: "Register | Farmex Admin" },
];

export async function action({ request }: ActionFunctionArgs) {
  if (request.method !== "POST") {
    return json({ formError: "Invalid request method." }, { status: 405 });
  }

  const form = await request.formData();
  const username = form.get("username");
  const email = form.get("email");
  const password = form.get("password");
  const confirmPassword = form.get("confirmPassword");

  const fieldErrors: ActionData["fieldErrors"] = {};

  if (typeof username !== "string" || !username.trim()) {
    fieldErrors.username = "Username is required.";
  } else if (username.trim().length < 3) {
    fieldErrors.username = "Username must be at least 3 characters.";
  }

  if (typeof email !== "string" || !email.trim()) {
    fieldErrors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    fieldErrors.email = "Email address is not valid.";
  }

  if (typeof password !== "string" || !password) {
    fieldErrors.password = "Password is required.";
  } else if (password.length < 6) {
    fieldErrors.password = "Password must be at least 6 characters.";
  }

  if (typeof confirmPassword !== "string" || !confirmPassword) {
    fieldErrors.confirmPassword = "Confirm password is required.";
  } else if (password !== confirmPassword) {
    fieldErrors.confirmPassword = "Passwords do not match.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return json({ fieldErrors }, { status: 400 });
  }

  const normalizedEmail = (email as string).trim().toLowerCase();
  const normalizedUsername = (username as string).trim();

  try {
    const usersRef = collection(db, "users");
    const emailQuery = query(usersRef, where("email", "==", normalizedEmail));
    const existingByEmail = await getDocs(emailQuery);

    if (!existingByEmail.empty) {
      return json(
        { fieldErrors: { email: "An account with this email already exists." } },
        { status: 409 }
      );
    }

    const usernameQuery = query(
      usersRef,
      where("username", "==", normalizedUsername)
    );
    const existingByUsername = await getDocs(usernameQuery);

    if (!existingByUsername.empty) {
      return json(
        { fieldErrors: { username: "An account with this username already exists." } },
        { status: 409 }
      );
    }

    const hashedPassword = await hash(password as string, 10);

    await addDoc(usersRef, {
      username: normalizedUsername,
      email: normalizedEmail,
      password: hashedPassword,
      role: DEFAULT_ROLE,
      createdAt: new Date().toISOString(),
    });

    return redirect("/admin/register?registered=true");
  } catch (error) {
    console.error("Registration error:", error);
    return json(
      { formError: "An error occurred while registering. Please try again." },
      { status: 500 }
    );
  }
}

export default function AdminRegister() {
  const actionData = useActionData<ActionData>();

  useAdminUrlToast(REGISTER_URL_TOASTS);
  useAdminActionToast(actionData?.formError);

  return (
    <AdminAuthShell
      eyebrow="Register"
      title="Create admin account"
      description="Create an admin account to access the panel."
      footer={
        <p>
          Have an account?{" "}
          <Link
            to="/admin"
            className="font-semibold text-emerald-600 transition hover:text-emerald-700"
          >
            Log in here
          </Link>
        </p>
      }
    >
      <div className="space-y-5">
        <Form method="post" className="space-y-5">
          <AdminAuthField
            label="Username"
            htmlFor="username"
            error={actionData?.fieldErrors?.username}
          >
            <input
              id="username"
              type="text"
              name="username"
              placeholder="juan_delacruz"
              autoComplete="username"
              className={adminInputClass}
              required
            />
          </AdminAuthField>

          <AdminAuthField
            label="Email address"
            htmlFor="email"
            error={actionData?.fieldErrors?.email}
          >
            <input
              id="email"
              type="email"
              name="email"
              placeholder="example@mail.com"
              autoComplete="email"
              className={adminInputClass}
              required
            />
          </AdminAuthField>

          <AdminAuthField
            label="Password"
            htmlFor="password"
            error={actionData?.fieldErrors?.password}
          >
            <input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              autoComplete="new-password"
              className={adminInputClass}
              required
            />
          </AdminAuthField>

          <AdminAuthField
            label="Confirm password"
            htmlFor="confirmPassword"
            error={actionData?.fieldErrors?.confirmPassword}
          >
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              autoComplete="new-password"
              className={adminInputClass}
              required
            />
          </AdminAuthField>

          <button
            type="submit"
            className="w-full rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
          >
            Register
          </button>
        </Form>
      </div>
    </AdminAuthShell>
  );
}
