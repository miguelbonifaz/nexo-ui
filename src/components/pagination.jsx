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
      className="flex flex-col gap-4 border-t border-slate-200 px-5 py-4 transition-colors sm:flex-row sm:items-center sm:justify-between dark:border-slate-800"
    >
      <p className="text-xs text-slate-500 dark:text-slate-400">
        Showing <span className="font-semibold text-slate-700 dark:text-slate-200">{firstItem}</span>{' '}
        to <span className="font-semibold text-slate-700 dark:text-slate-200">{lastItem}</span> of{' '}
        <span className="font-semibold text-slate-700 dark:text-slate-200">{totalItems}</span> {itemLabel}
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Previous page"
          disabled={!canGoBack}
          onClick={() => onPageChange(currentPage - 1)}
          className="inline-flex size-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-35 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:bg-slate-800"
        >
          <ChevronLeft className="size-4" />
        </button>
        <span className="min-w-20 text-center text-xs font-semibold text-slate-600 dark:text-slate-300">
          Page {currentPage} of {totalPages}
        </span>
        <button
          type="button"
          aria-label="Next page"
          disabled={!canGoForward}
          onClick={() => onPageChange(currentPage + 1)}
          className="inline-flex size-8 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-35 dark:border-slate-700 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:bg-slate-800"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
    </nav>
  );
}
