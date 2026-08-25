import { tablerIconSnippet } from './tabler-icons';

const iconPreamble = tablerIconSnippet(['chevronLeft', 'chevronRight']);

export const paginationSnippet = String.raw`${iconPreamble}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage = 10,
  onPageChange,
}) {
  const firstItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  const lastItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <nav aria-label="Pagination" className="flex items-center justify-between border-t px-5 py-4">
      <p className="text-xs text-slate-500">
        Showing {firstItem} to {lastItem} of {totalItems} items
      </p>
      <div className="flex items-center gap-2">
        <button
          type="button"
          aria-label="Previous page"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="inline-flex size-8 items-center justify-center rounded-lg border disabled:opacity-35"
        >
          <MorphIcon icon={tablerIcons.chevronLeft} reducedMotion="user" className="size-4" />
        </button>
        <span className="px-2 text-xs font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          type="button"
          aria-label="Next page"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="inline-flex size-8 items-center justify-center rounded-lg border disabled:opacity-35"
        >
          <MorphIcon icon={tablerIcons.chevronRight} reducedMotion="user" className="size-4" />
        </button>
      </div>
    </nav>
  );
}`;
