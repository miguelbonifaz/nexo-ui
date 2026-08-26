'use client';

import { useState } from 'react';
import Pagination from './pagination';
import PaginationListPreview from './pagination-list-preview';

export default function PaginationShowcase() {
  const [page, setPage] = useState(3);
  const totalPages = 6;
  const totalItems = 42;

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-950">
      <PaginationListPreview />
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={7}
        itemLabel="records"
        onPageChange={setPage}
      />
    </div>
  );
}
