import { ArrowUpRight } from 'lucide-react';
import { sampleRecords } from '@/lib/data';

export default function DetailModalShowcase({ onOpen }) {
  const record = sampleRecords[0];

  return (
    <div className="nexo-detail-layout grid gap-6">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold tracking-[0.1em] text-slate-400 uppercase">Selected record</p>
            <h3 className="mt-2 text-lg font-semibold tracking-tight text-slate-900">{record.customer}</h3>
            <p className="mt-1 text-sm text-slate-500">{record.product}</p>
          </div>
          <span className="rounded-lg bg-white p-2 text-slate-400 shadow-sm ring-1 ring-slate-200">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
        <div className="mt-7 flex flex-col gap-3 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">Open the detail surface without leaving this page.</p>
          <button type="button" onClick={() => onOpen(record)} className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-900 px-4 text-sm font-semibold text-white transition hover:bg-slate-700">Open detail modal</button>
        </div>
      </div>
      <aside className="border-l-2 border-slate-200 pl-4">
        <p className="text-[10px] font-semibold tracking-[0.1em] text-slate-400 uppercase">Behavior</p>
        <ul className="mt-3 space-y-3 text-xs leading-5 text-slate-500">
          <li>Closes with Escape, the backdrop, or the close button.</li>
          <li>Preserves the full detail context in one surface.</li>
          <li>Uses a short zoom transition to keep the interaction grounded.</li>
        </ul>
      </aside>
    </div>
  );
}
