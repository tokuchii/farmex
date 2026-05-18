// components/admin/AdminTable.tsx
// Generic, reusable table component for admin pages

import { ReactNode } from "react";

export interface Column<T> {
  key: keyof T | string;
  label: string;
  align?: "left" | "right" | "center";
  render?: (row: T) => ReactNode;
}

interface AdminTableProps<T> {
  title?: string;
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
  action?: ReactNode; // optional button in the header
}

export default function AdminTable<T extends Record<string, unknown>>({
  title,
  columns,
  data,
  emptyMessage = "No data found.",
  action,
}: AdminTableProps<T>) {
  return (
    <div className="bg-white/[0.03] border border-white/[0.07] rounded-xl overflow-hidden">
      {/* Card header */}
      {(title || action) && (
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.07]">
          {title && (
            <h2 className="text-sm font-semibold text-white tracking-wide">{title}</h2>
          )}
          {action && <div>{action}</div>}
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/[0.05]">
              {columns.map((col) => (
                <th
                  key={String(col.key)}
                  className={`px-6 py-3 text-[10px] text-white/25 uppercase tracking-[0.15em] font-medium ${
                    col.align === "right"
                      ? "text-right"
                      : col.align === "center"
                      ? "text-center"
                      : "text-left"
                  }`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className="px-6 py-10 text-center text-white/25 text-xs"
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-white/[0.04] last:border-0 hover:bg-white/[0.03] transition-colors"
                >
                  {columns.map((col) => (
                    <td
                      key={String(col.key)}
                      className={`px-6 py-3 text-white/70 ${
                        col.align === "right"
                          ? "text-right"
                          : col.align === "center"
                          ? "text-center"
                          : "text-left"
                      }`}
                    >
                      {col.render
                        ? col.render(row)
                        : String(row[col.key as keyof T] ?? "")}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
