import AdminPagination from "~/components/admin/AdminPagination";
import AdminTable, { type AdminTableColumn } from "~/components/admin/AdminTable";
import { cn } from "~/lib/utils";

export type { AdminTableColumn };
import {
  useAdminPagination,
  type UseAdminPaginationOptions,
} from "~/components/admin/useAdminPagination";

export type AdminPaginatedTableProps<T> = {
  columns: AdminTableColumn<T>[];
  data: T[];
  getRowKey: (row: T) => string;
  emptyMessage?: string;
  isLoading?: boolean;
  className?: string;
  itemLabel?: string;
  pagination?: UseAdminPaginationOptions;
  showPageSizeSelect?: boolean;
};

const AdminPaginatedTable = <T,>({
  columns,
  data,
  getRowKey,
  emptyMessage,
  isLoading = false,
  className,
  itemLabel = "records",
  pagination,
  showPageSizeSelect = true,
}: AdminPaginatedTableProps<T>) => {
  const {
    paginatedItems,
    page,
    setPage,
    pageSize,
    setPageSize,
    totalPages,
    totalItems,
    rangeStart,
    rangeEnd,
  } = useAdminPagination(data, pagination);

  if (isLoading) {
    return (
      <AdminTable
        columns={columns}
        data={[]}
        getRowKey={getRowKey}
        isLoading
        emptyMessage={emptyMessage}
        className={className}
      />
    );
  }

  if (totalItems === 0) {
    return (
      <AdminTable
        columns={columns}
        data={[]}
        getRowKey={getRowKey}
        emptyMessage={emptyMessage}
        className={className}
      />
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
            {paginatedItems.map((row) => (
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

      <AdminPagination
        page={page}
        totalPages={totalPages}
        totalItems={totalItems}
        pageSize={pageSize}
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
        onPageChange={setPage}
        onPageSizeChange={showPageSizeSelect ? setPageSize : undefined}
        itemLabel={itemLabel}
      />
    </div>
  );
};

export default AdminPaginatedTable;
