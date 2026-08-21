'use client';

import { useState } from 'react';
import Pagination from './pagination';

export default function PaginationShowcase() {
  const [page, setPage] = useState(3);
  const totalPages = 6;
  const totalItems = 42;

  return (
    <div className="space-y-8">
      <div className="nexo-pagination-metrics grid gap-4">
        <Metric label="Total items" value="42" />
        <Metric label="Items per page" value="7" />
        <Metric label="Current page" value={`${page} / ${totalPages}`} />
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="flex min-h-32 items-center justify-center px-5 text-center">
          <div>
            <p className="text-sm font-semibold text-slate-900">Page {page} selected</p>
            <p className="mt-1 text-xs text-slate-500">
              Navigate the collection to see the control update.
            </p>
          </div>
        </div>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={7}
          itemLabel="records"
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="border-l-2 border-slate-200 pl-4">
      <p className="text-[10px] font-semibold tracking-[0.1em] text-slate-400 uppercase">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">{value}</p>
    </div>
  );
}
