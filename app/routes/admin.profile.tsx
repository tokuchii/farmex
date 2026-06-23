import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { compare, hash } from "bcryptjs";
import { doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "~/lib/firebase.server";
import {
  requireAdminUser,
  destroyAdminSession,
} from "~/lib/session.server";
import { useAdminToast } from "~/components/admin/AdminToast";
import DeleteConfirmationModal from "~/components/admin/DeleteConfirmationModal";

type LoaderData = {
  admin: {
    id: string;
    username: string;
    email: string;
    role: string;
    createdAt: string;
  };
};

type ActionData = {
  formError?: string;
  successMessage?: string;
  fieldErrors?: {
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  };
};

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAdminUser(request);
  const adminRef = doc(db, "users", user.userId);
  const adminSnapshot = await getDoc(adminRef);

  if (!adminSnapshot.exists()) {
    throw redirect("/admin");
  }

  const adminData = adminSnapshot.data();

  return json<LoaderData>({
    admin: {
      id: adminSnapshot.id,
      username: typeof adminData.username === "string" ? adminData.username : "",
      email: typeof adminData.email === "string" ? adminData.email : "",
      role: typeof adminData.role === "string" ? adminData.role : "admin",
      createdAt:
        typeof adminData.createdAt === "string"
          ? adminData.createdAt
          : "",
    },
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const user = await requireAdminUser(request);
  const form = await request.formData();
  const intent = form.get("intent");

  if (intent === "delete") {
    const adminRef = doc(db, "users", user.userId);
    const adminSnapshot = await getDoc(adminRef);

    if (adminSnapshot.exists()) {
      await deleteDoc(adminRef);
    }

    return destroyAdminSession(request, "deleted");
  }

  const currentPassword = form.get("currentPassword") as string | null;
  const newPassword = form.get("newPassword") as string | null;
  const confirmPassword = form.get("confirmPassword") as string | null;

  const fieldErrors: ActionData["fieldErrors"] = {};

  if (typeof currentPassword !== "string" || !currentPassword) {
    fieldErrors.currentPassword = "Current password is required.";
  }

  if (typeof newPassword !== "string" || newPassword.length < 6) {
    fieldErrors.newPassword = "New password must be at least 6 characters.";
  }

  if (typeof confirmPassword !== "string" || newPassword !== confirmPassword) {
    fieldErrors.confirmPassword = "Passwords do not match.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return json<ActionData>({ fieldErrors }, { status: 400 });
  }

  const adminRef = doc(db, "users", user.userId);
  const adminSnapshot = await getDoc(adminRef);

  if (!adminSnapshot.exists()) {
    return json<ActionData>(
      { formError: "Admin account not found." },
      { status: 404 }
    );
  }

  const adminData = adminSnapshot.data();
  const storedPassword = adminData.password;

  if (typeof storedPassword !== "string") {
    return json<ActionData>(
      { formError: "Unable to validate current password." },
      { status: 400 }
    );
  }

  const passwordMatches = storedPassword.startsWith("$2")
    ? await compare(currentPassword as string, storedPassword)
    : storedPassword === currentPassword;

  if (!passwordMatches) {
    return json<ActionData>(
      { fieldErrors: { currentPassword: "Current password is incorrect." } },
      { status: 401 }
    );
  }

  const hashedPassword = await hash(newPassword as string, 10);
  await updateDoc(adminRef, { password: hashedPassword });

  return json<ActionData>({ successMessage: "Password updated successfully." });
}

function AdminProfile() {
  const { admin } = useLoaderData<LoaderData>();
  const actionData = useActionData<ActionData>();
  const navigation = useNavigation();
  const toast = useAdminToast();
  const isSubmitting = navigation.state === "submitting";
  const [deleteOpen, setDeleteOpen] = useState(false);
  const deleteFormRef = useRef<HTMLFormElement | null>(null);
  const isConfirmingRef = useRef(false);

  useEffect(() => {
    if (!actionData) return;

    if (actionData.formError) {
      toast.error(actionData.formError);
    }

    if (actionData.successMessage) {
      toast.success(actionData.successMessage);
    }

    if (actionData.fieldErrors) {
      Object.values(actionData.fieldErrors).forEach((err) => {
        if (err) toast.error(err as string);
      });
    }
  }, [actionData, toast]);

  const handleDelete = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDeleteOpen(true);
  };

  const handleDeleteConfirm = () => {
    isConfirmingRef.current = true;
    // submit the hidden form
    deleteFormRef.current?.submit();
  };

  const handleDeleteOpenChange = (open: boolean) => {
    if (!open && !isConfirmingRef.current) {
      toast.error("Account deletion cancelled.");
    }

    if (!open) isConfirmingRef.current = false;
    setDeleteOpen(open);
  };

  return (
    <section className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">Profile</p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">Admin Profile</h1>
        <p className="mt-2 text-sm text-slate-500">Manage your admin profile information and account settings.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Account Information</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div>
            <p className="text-sm text-slate-500">Username</p>
            <p className="font-medium text-slate-900">{admin.username}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Email</p>
            <p className="font-medium text-slate-900">{admin.email}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Role</p>
            <p className="font-medium capitalize text-slate-900">{admin.role}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500">Created At</p>
            <p className="font-medium text-slate-900">{admin.createdAt}</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 p-6">
        <h2 className="text-xl font-semibold text-slate-900">Change Password</h2>

        {/* Notifications shown via toast */}

        <Form method="post" className="mt-6 space-y-4">
          <input type="hidden" name="intent" value="update" />

          <div>
            <label htmlFor="currentPassword" className="mb-2 block text-sm font-medium text-slate-700">
              Current Password
            </label>
            <input
              id="currentPassword"
              type="password"
              name="currentPassword"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-emerald-500 focus:outline-none"
              required
            />
            {/* field errors displayed via toast */}
          </div>

          <div>
            <label htmlFor="newPassword" className="mb-2 block text-sm font-medium text-slate-700">
              New Password
            </label>
            <input
              id="newPassword"
              type="password"
              name="newPassword"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-emerald-500 focus:outline-none"
              required
            />
            {/* field errors displayed via toast */}
          </div>

          <div>
            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-700">
              Confirm New Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 focus:border-emerald-500 focus:outline-none"
              required
            />
            {/* field errors displayed via toast */}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Updating..." : "Update Password"}
          </button>
        </Form>
      </div>

      <div className="rounded-2xl border border-red-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-red-700">Delete Account</h2>
        <p className="mt-2 text-sm text-slate-600">Permanently delete your admin account and all associated data. This action cannot be undone.</p>

        <Form method="post" ref={deleteFormRef} className="mt-4">
          <input type="hidden" name="intent" value="delete" />
          <button
            type="button"
            onClick={(e) => handleDelete(e as unknown as FormEvent<HTMLFormElement>)}
            className="rounded-xl bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-700"
          >
            Delete Account
          </button>
        </Form>

        <DeleteConfirmationModal
          open={deleteOpen}
          onOpenChange={handleDeleteOpenChange}
          description={
            "Permanently delete your admin account and all associated data. This action cannot be undone."
          }
          confirmLabel="Delete Account"
          onConfirm={handleDeleteConfirm}
        />
      </div>
    </section>
  );
}

export default AdminProfile;