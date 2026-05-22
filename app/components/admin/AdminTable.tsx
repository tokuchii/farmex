import type { ReactNode } from "react";
import { cn } from "~/lib/utils";

export type AdminTableColumn<T> = {
  id: string;
  header: string;
  className?: string;
  cell: (row: T) => ReactNode;
};

export type AdminTableProps<T> = {
  columns: AdminTableColumn<T>[];
  data: T[];
  emptyMessage?: string;
  getRowKey: (row: T) => string;
  isLoading?: boolean;
  className?: string;
};

const AdminTable = <T,>({
  columns,
  data,
  emptyMessage = "No records yet.",
  getRowKey,
  isLoading = false,
  className,
}: AdminTableProps<T>) => {
  if (isLoading) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-10 text-center text-sm text-slate-500">
        Loading...
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-200 bg-slate-50/80 p-10 text-center text-slate-500">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      <div className="admin-scrollbar overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
          <thead className="bg-slate-50">
            <tr>
              {columns.map((column) => (
                <th
                  key={column.id}
                  scope="col"
                  className={cn(
                    "px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500",
                    column.className
                  )}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((row) => (
              <tr key={getRowKey(row)} className="transition hover:bg-slate-50/80">
                {columns.map((column) => (
                  <td
                    key={column.id}
                    className={cn("px-4 py-4 align-top text-slate-700", column.className)}
                  >
                    {column.cell(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
