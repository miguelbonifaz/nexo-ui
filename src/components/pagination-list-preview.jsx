import { sampleRecords } from '@/lib/data';

const previewRecords = sampleRecords.slice(0, 3);

export default function PaginationListPreview() {
  return (
    <div aria-hidden="true" className="pointer-events-none select-none border-b border-slate-200/80 bg-slate-50/60 px-5 py-3 opacity-60 dark:border-slate-800 dark:bg-slate-900/50">
      <div className="divide-y divide-slate-200/70 dark:divide-slate-800/80">
        {previewRecords.map((record) => (
          <div key={record.id} className="flex items-center justify-between gap-4 py-2.5 first:pt-0 last:pb-0">
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-slate-700 dark:text-slate-300">{record.product}</p>
              <p className="mt-0.5 truncate text-[11px] text-slate-400 dark:text-slate-500">{record.customer} · {record.id}</p>
            </div>
            <div className="hidden shrink-0 items-center gap-6 text-[11px] text-slate-400 sm:flex dark:text-slate-500">
              <span>{record.deliveryDate}</span>
              <span className="font-semibold">{record.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
