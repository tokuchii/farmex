import type { ReactNode } from "react";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { cn } from "~/lib/utils";

export type AdminModalSize = "sm" | "md" | "lg" | "xl";

const sizeClasses: Record<AdminModalSize, string> = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
};

export type AdminModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  size?: AdminModalSize;
  className?: string;
  contentClassName?: string;
};

const AdminModal = ({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  size = "md",
  className,
  contentClassName,
}: AdminModalProps) => {
  useEffect(() => {
    if (!open) {
      document.body.style.pointerEvents = "";
      document.body.style.overflow = "";
      return;
    }

    return () => {
      document.body.style.pointerEvents = "";
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <Dialog
      open
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onOpenChange(false);
      }}
    >
      <DialogContent
        className={cn(
          "gap-0 overflow-hidden rounded-3xl border border-slate-200 bg-white p-0 text-slate-900 shadow-2xl shadow-slate-900/10",
          sizeClasses[size],
          className,
          contentClassName
        )}
      >
        <DialogHeader className="space-y-1 border-b border-slate-100 px-6 py-5 text-left">
          <DialogTitle className="text-xl font-semibold tracking-tight text-slate-900">
            {title}
          </DialogTitle>
          {description ? (
            <DialogDescription className="text-sm text-slate-500">
              {description}
            </DialogDescription>
          ) : null}
        </DialogHeader>

        {children ? <div className="admin-scrollbar max-h-[calc(100vh-280px)] overflow-y-auto px-6 py-5">{children}</div> : null}

        {footer ? (
          <DialogFooter className="gap-3 border-t border-slate-100 bg-slate-50/80 px-6 py-4 sm:flex-row sm:justify-end">
            {footer}
          </DialogFooter>
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default AdminModal;
