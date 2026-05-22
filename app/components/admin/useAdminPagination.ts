import { useEffect, useMemo, useState } from "react";

export type UseAdminPaginationOptions = {
  pageSize?: number;
  initialPage?: number;
};

export function useAdminPagination<T>(
  items: T[],
  { pageSize = 10, initialPage = 1 }: UseAdminPaginationOptions = {}
) {
  const [page, setPage] = useState(initialPage);
  const [perPage, setPerPage] = useState(pageSize);

  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / perPage));
  const currentPage = Math.min(Math.max(1, page), totalPages);

  useEffect(() => {
    if (page !== currentPage) {
      setPage(currentPage);
    }
  }, [page, currentPage]);

  useEffect(() => {
    setPage(1);
  }, [perPage]);

  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    return items.slice(start, start + perPage);
  }, [items, currentPage, perPage]);

  const rangeStart = totalItems === 0 ? 0 : (currentPage - 1) * perPage + 1;
  const rangeEnd = Math.min(currentPage * perPage, totalItems);

  const goToPage = (nextPage: number) => {
    setPage(Math.min(Math.max(1, nextPage), totalPages));
  };

  const goToFirst = () => goToPage(1);
  const goToLast = () => goToPage(totalPages);
  const goToPrevious = () => goToPage(currentPage - 1);
  const goToNext = () => goToPage(currentPage + 1);

  return {
    page: currentPage,
    setPage: goToPage,
    pageSize: perPage,
    setPageSize: setPerPage,
    totalPages,
    totalItems,
    paginatedItems,
    rangeStart,
    rangeEnd,
    goToFirst,
    goToLast,
    goToPrevious,
    goToNext,
    canGoPrevious: currentPage > 1,
    canGoNext: currentPage < totalPages,
  };
}
