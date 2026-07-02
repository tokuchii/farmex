import { AlertCircle, CheckCircle, X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type ToastType = "success" | "error";

type ToastItem = {
  id: string;
  type: ToastType;
  message: string;
  expiresAt: number;
};

type AdminToastContextValue = {
  showToast: (type: ToastType, message: string) => void;
};

const AdminToastContext = createContext<AdminToastContextValue | null>(null);

const TOAST_DURATION_MS = 5000;

export function AdminToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const [now, setNow] = useState(() => Date.now());

  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((type: ToastType, message: string) => {
    const id =
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `${Date.now()}-${Math.random()}`;

    setToasts((current) => [
      ...current,
      { id, type, message, expiresAt: Date.now() + TOAST_DURATION_MS },
    ]);
  }, []);

  useEffect(() => {
    if (toasts.length === 0) return;

    const interval = window.setInterval(() => setNow(Date.now()), 50);

    return () => window.clearInterval(interval);
  }, [toasts.length]);

  useEffect(() => {
    if (toasts.length === 0) return;

    const timers = toasts.map((toast) =>
      window.setTimeout(() => dismiss(toast.id), TOAST_DURATION_MS)
    );

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [toasts, dismiss]);

  return (
    <AdminToastContext.Provider value={{ showToast }}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed right-4 top-4 z-[200] flex w-full max-w-sm flex-col gap-2"
      >
        {toasts.map((toast) => {
          const remainingMs = toast.expiresAt - now;
          const progress = Math.max(
            0,
            Math.min(100, (remainingMs / TOAST_DURATION_MS) * 100)
          );

          return (
            <div
              key={toast.id}
              role="status"
              className={`pointer-events-auto flex flex-col gap-3 rounded-2xl border px-4 py-3 text-sm shadow-lg shadow-slate-900/10 ${
                toast.type === "success"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-900"
                  : "border-rose-200 bg-rose-50 text-rose-900"
              }`}
            >
              <div className="flex items-start gap-3">
                {toast.type === "success" ? (
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                ) : (
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-600" />
                )}
                <p className="min-w-0 flex-1 font-medium">{toast.message}</p>
                <button
                  type="button"
                  onClick={() => dismiss(toast.id)}
                  className="shrink-0 rounded-lg p-1 text-slate-500 transition hover:bg-white/60 hover:text-slate-700"
                  aria-label="Dismiss notification"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-slate-200">
                <div
                  className={`h-full rounded-full transition-all duration-50 ${
                    toast.type === "success"
                      ? "bg-emerald-600"
                      : "bg-rose-600"
                  }`}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </AdminToastContext.Provider>
  );
}

export function useAdminToast() {
  const context = useContext(AdminToastContext);

  if (!context) {
    throw new Error("useAdminToast must be used within AdminToastProvider");
  }

  return useMemo(
    () => ({
      success: (message: string) => context.showToast("success", message),
      error: (message: string) => context.showToast("error", message),
    }),
    [context.showToast]
  );
}
