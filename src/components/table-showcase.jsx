'use client';

import { Eye, Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import { sampleRecords } from '@/lib/data';
import Pagination from './pagination';
import StatusBadge from './status-badge';

const pageSize = 4;

export default function TableShowcase({ onSelectRecord }) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const filteredRecords = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) return sampleRecords;

    return sampleRecords.filter((record) =>
      [record.customer, record.product, record.status]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  const totalPages = Math.max(1, Math.ceil(filteredRecords.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const visibleRecords = filteredRecords.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  function updateQuery(value) {
    setQuery(value);
    setPage(1);
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex flex-col gap-4 border-b border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">Recent records</p>
          <p className="mt-1 text-xs text-slate-500">A practical table for operational collections.</p>
        </div>
        <label className="relative block sm:w-64">
          <span className="sr-only">Search records</span>
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
            placeholder="Search records..."
            className="h-10 w-full rounded-lg border border-slate-200 bg-slate-50 pr-3 pl-9 text-xs text-slate-900 outline-none transition focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-900/[0.05] placeholder:text-slate-400"
          />
        </label>
      </div>

      {visibleRecords.length > 0 ? (
        <>
          <div className="hidden overflow-x-auto md:block">
            <DesktopTable records={visibleRecords} onSelectRecord={onSelectRecord} />
          </div>
          <div className="grid gap-3 p-3 md:hidden">
            {visibleRecords.map((record) => (
              <MobileRecord key={record.id} record={record} onSelectRecord={onSelectRecord} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredRecords.length}
            itemsPerPage={pageSize}
            itemLabel="records"
            onPageChange={setPage}
          />
        </>
      ) : (
        <div className="px-6 py-16 text-center">
          <p className="text-sm font-semibold text-slate-700">No records found</p>
          <p className="mt-1 text-xs text-slate-400">Try a different search term.</p>
        </div>
      )}
    </div>
  );
}

function DesktopTable({ records, onSelectRecord }) {
  return (
    <table className="w-full min-w-[760px] text-left text-sm">
      <thead className="bg-slate-50 text-[10px] font-semibold tracking-[0.1em] text-slate-500 uppercase">
        <tr>
          {['Customer', 'Product', 'Delivery', 'Price', 'Status', 'Actions'].map((heading) => (
            <th key={heading} className={`px-5 py-3 ${heading === 'Actions' ? 'text-right' : ''}`}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {records.map((record) => (
          <tr key={record.id} className="transition-colors hover:bg-slate-50/80">
            <td className="px-5 py-4">
              <p className="font-semibold text-slate-900">{record.customer}</p>
              <p className="mt-1 text-xs text-slate-400">{record.id} · {record.phone}</p>
            </td>
            <td className="px-5 py-4">
              <p className="font-medium text-slate-700">{record.product}</p>
              <p className="mt-1 text-xs text-slate-400">{record.servings} · {record.filling}</p>
            </td>
            <td className="px-5 py-4">
              <p className="font-medium text-slate-700">{record.deliveryDate}</p>
              <p className="mt-1 text-xs text-slate-400">{record.deliveryType}</p>
            </td>
            <td className="px-5 py-4 font-semibold text-slate-900">{record.price}</td>
            <td className="px-5 py-4"><StatusBadge label={record.status} tone={record.tone} /></td>
            <td className="px-5 py-4 text-right"><OpenButton record={record} onSelectRecord={onSelectRecord} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function MobileRecord({ record, onSelectRecord }) {
  return (
    <article className="rounded-xl border border-slate-200 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-slate-900">{record.customer}</p>
          <p className="mt-1 text-xs text-slate-400">{record.id} · {record.phone}</p>
        </div>
        <StatusBadge label={record.status} tone={record.tone} />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-100 pt-4 text-xs">
        <div><p className="text-slate-400">Product</p><p className="mt-1 font-medium text-slate-700">{record.product}</p></div>
        <div><p className="text-slate-400">Delivery</p><p className="mt-1 font-medium text-slate-700">{record.deliveryDate}</p></div>
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="font-semibold text-slate-900">{record.price}</span>
        <OpenButton record={record} onSelectRecord={onSelectRecord} />
      </div>
    </article>
  );
}

function OpenButton({ record, onSelectRecord }) {
  return (
    <button
      type="button"
      aria-label={`View details for ${record.customer}`}
      onClick={() => onSelectRecord(record)}
      className="inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
    >
      <Eye className="size-4" />
      <span className="hidden sm:inline">View</span>
    </button>
  );
}
