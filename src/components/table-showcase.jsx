'use client';

import { useMemo, useState } from 'react';
import { sampleRecords } from '@/lib/data';
import { tablerIcons } from '@/lib/tabler-icons';
import Pagination from './pagination';
import StatusBadge from './status-badge';
import NexoIcon from './nexo-icon';
import Input from './input';

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
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors dark:border-slate-800 dark:bg-slate-950">
      <div className="nexo-table-header flex flex-col gap-4 border-b border-slate-200 px-5 py-4 dark:border-slate-800">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Recent records</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">A practical table for operational collections.</p>
        </div>
        <div className="nexo-table-search relative">
          <NexoIcon icon={tablerIcons.search} className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-400" />
          <Input
            type="search"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
            placeholder="Search records..."
            aria-label="Search records"
            className="pr-3 pl-10"
          />
        </div>
      </div>

      {visibleRecords.length > 0 ? (
        <>
          <div className="overflow-x-auto">
            <DesktopTable records={visibleRecords} onSelectRecord={onSelectRecord} />
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
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">No records found</p>
          <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">Try a different search term.</p>
        </div>
      )}
    </div>
  );
}

function DesktopTable({ records, onSelectRecord }) {
  return (
    <table className="w-full min-w-[760px] text-left text-sm">
      <thead className="bg-slate-50 text-[10px] font-semibold tracking-[0.1em] text-slate-500 uppercase dark:bg-slate-900/70 dark:text-slate-400">
        <tr>
          {['Customer', 'Product', 'Delivery', 'Price', 'Status', 'Actions'].map((heading) => (
            <th key={heading} className={`px-5 py-3 ${heading === 'Actions' ? 'text-right' : ''}`}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
        {records.map((record) => (
          <tr key={record.id} className="transition-colors hover:bg-slate-50/80 dark:hover:bg-slate-900/70">
            <td className="px-5 py-4">
              <p className="font-semibold text-slate-900 dark:text-slate-100">{record.customer}</p>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{record.id} · {record.phone}</p>
            </td>
            <td className="px-5 py-4">
              <p className="font-medium text-slate-700 dark:text-slate-300">{record.product}</p>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{record.servings} · {record.filling}</p>
            </td>
            <td className="px-5 py-4">
              <p className="font-medium text-slate-700 dark:text-slate-300">{record.deliveryDate}</p>
              <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{record.deliveryType}</p>
            </td>
            <td className="px-5 py-4 font-semibold text-slate-900 dark:text-slate-100">{record.price}</td>
            <td className="px-5 py-4"><StatusBadge label={record.status} tone={record.tone} /></td>
            <td className="px-5 py-4 text-right"><OpenButton record={record} onSelectRecord={onSelectRecord} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function OpenButton({ record, onSelectRecord }) {
  return (
    <button
      type="button"
      aria-label={`View details for ${record.customer}`}
      onClick={() => onSelectRecord(record)}
      className="inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
    >
      <NexoIcon icon={tablerIcons.eye} className="size-4" />
      <span className="hidden sm:inline">View</span>
    </button>
  );
}
