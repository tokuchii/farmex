import type { ReactNode } from "react";

const adminInputClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20";

const adminLabelClass = "text-sm font-medium text-slate-700";

type AdminAuthShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  footer?: ReactNode;
};

export const AdminAuthField = ({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
}) => (
  <label className="block" htmlFor={htmlFor}>
    <span className={adminLabelClass}>{label}</span>
    {children}
    {error ? <p className="mt-2 text-sm text-rose-600">{error}</p> : null}
  </label>
);

export { adminInputClass };

const AdminBrand = () => (
  <div className="flex items-center justify-center gap-3">
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500 text-lg font-bold text-white shadow-sm shadow-emerald-500/25">
      F
    </span>
    <div className="text-left">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-600">Farmex</p>
      <p className="text-lg font-semibold text-slate-900">Admin panel</p>
    </div>
  </div>
);

const AdminAuthShell = ({
  eyebrow,
  title,
  description,
  children,
  footer,
}: AdminAuthShellProps) => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 sm:py-14">
      <div className="w-full max-w-md space-y-8">
        <AdminBrand />

        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
          <div className="border-b border-slate-100 pb-6">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-600">
              {eyebrow}
            </p>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-slate-500">{description}</p>
          </div>

          <div className="pt-6">{children}</div>

          {footer ? (
            <div className="mt-8 border-t border-slate-100 pt-6 text-center text-sm text-slate-500">
              {footer}
            </div>
          ) : null}
        </section>
      </div>
    </main>
  );
};

export default AdminAuthShell;
