import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage = 5,
  itemLabel = 'items',
  onPageChange,
}) {
  const firstItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const lastItem = Math.min(currentPage * itemsPerPage, totalItems);
  const canGoBack = currentPage > 1;
  const canGoForward = currentPage < totalPages;

  return (
    <nav
      aria-label="Pagination"
      className="flex flex-col gap-4 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <p className="text-xs text-slate-500">
        Showing <span className="font-semibold text-slate-700">{firstItem}</span>{' '}
        to <span className="font-semibold text-slate-700">{lastItem}</span> of{' '}
        <span className="font-semibold text-slate-700">{totalItems}</span> {itemLabel}
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Previous page"
          disabled={!canGoBack}
          onClick={() => onPageChange(currentPage - 1)}
          className="inline-flex size-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-35"
        >
          <ChevronLeft className="size-4" />
        </button>
        <span className="min-w-20 text-center text-xs font-semibold text-slate-600">
          Page {currentPage} of {totalPages}
        </span>
        <button
          type="button"
          aria-label="Next page"
          disabled={!canGoForward}
          onClick={() => onPageChange(currentPage + 1)}
          className="inline-flex size-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-35"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </nav>
  );
}
