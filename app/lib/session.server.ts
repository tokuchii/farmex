import { createCookieSessionStorage, redirect } from "@remix-run/node";

export type AdminUser = {
  userId: string;
  email: string;
  username: string;
  role: string;
};

const sessionSecret =
  process.env.SESSION_SECRET ?? "farmex-dev-session-secret-change-in-production";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__admin_session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [sessionSecret],
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
  },
});

export function isPublicAdminPath(pathname: string) {
  return (
    pathname === "/admin" ||
    pathname === "/admin/" ||
    pathname === "/admin/register"
  );
}

export async function getAdminSession(request: Request) {
  return sessionStorage.getSession(request.headers.get("Cookie"));
}

export async function getAdminUser(request: Request): Promise<AdminUser | null> {
  const session = await getAdminSession(request);
  const userId = session.get("userId");

  if (typeof userId !== "string") {
    return null;
  }

  const email = session.get("email");
  const username = session.get("username");
  const role = session.get("role");

  if (
    typeof email !== "string" ||
    typeof username !== "string" ||
    typeof role !== "string"
  ) {
    return null;
  }

  return { userId, email, username, role };
}

export async function createAdminSession(
  request: Request,
  user: AdminUser,
  redirectTo = "/admin/dashboard"
) {
  const session = await getAdminSession(request);
  session.set("userId", user.userId);
  session.set("email", user.email);
  session.set("username", user.username);
  session.set("role", user.role);

  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session),
    },
  });
}

export async function destroyAdminSession(request: Request) {
  const session = await getAdminSession(request);

  return redirect("/admin?logout=success", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}

export async function requireAdminUser(request: Request) {
  const user = await getAdminUser(request);

  if (!user) {
    throw redirect("/admin");
  }

  return user;
}
