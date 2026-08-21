'use client';

import { CalendarDays, MapPin, MessageSquareText, X } from 'lucide-react';
import { useEffect } from 'react';
import StatusBadge from './status-badge';

export default function DetailModal({ record, open, onClose, onPrimaryAction }) {
  useEffect(() => {
    if (!open) return undefined;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    function closeOnEscape(event) {
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [onClose, open]);

  if (!open || !record) return null;

  function closeModal() {
    onClose();
  }

  function handlePrimaryAction() {
    onPrimaryAction?.(record);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close modal"
        onClick={closeModal}
        className="nexo-backdrop-enter absolute inset-0 bg-slate-950/35 backdrop-blur-[2px]"
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-modal-title"
        onClick={(event) => event.stopPropagation()}
        className="nexo-modal-enter relative z-10 max-h-[calc(100dvh-2rem)] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-[0_24px_80px_rgb(15_23_42/0.2)]"
      >
        <header className="flex items-start justify-between gap-5 border-b border-slate-100 px-6 py-5 sm:px-7">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold tracking-[0.12em] text-slate-400 uppercase">Record details</p>
            <h2 id="detail-modal-title" className="mt-1 truncate text-xl font-semibold tracking-tight text-slate-900">{record.title}</h2>
            <p className="mt-1 text-sm text-slate-500">{record.id} · {record.subtitle}</p>
          </div>
          <div className="flex shrink-0 items-start gap-3">
            <StatusBadge label={record.status} tone={record.tone} />
            <button type="button" onClick={closeModal} aria-label="Close modal" className="-mr-2 -mt-2 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700">
              <X className="size-4" />
            </button>
          </div>
        </header>

        <div className="space-y-6 px-6 py-6 sm:px-7">
          <dl className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {record.fields.map(([label, value]) => (
              <div key={label} className="min-w-0">
                <dt className="text-xs font-medium text-slate-400">{label}</dt>
                <dd className="mt-1 truncate text-sm font-semibold text-slate-800">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="grid gap-5 border-t border-slate-100 pt-5 sm:grid-cols-2">
            {record.sections.map((section) => (
              <DetailNote key={section.label} icon={section.icon} label={section.label} value={section.value} multiline={section.multiline} />
            ))}
          </div>
        </div>

        <footer className="flex flex-col-reverse gap-3 border-t border-slate-100 px-6 py-4 sm:flex-row sm:justify-end sm:px-7">
          <button type="button" onClick={closeModal} className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-600 transition hover:bg-slate-50">Close</button>
          {onPrimaryAction && <button type="button" onClick={handlePrimaryAction} className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-900 px-4 text-sm font-semibold text-white transition hover:bg-slate-700">Mark as reviewed</button>}
        </footer>
      </section>
    </div>
  );
}

function DetailNote({ icon, label, value, multiline = false }) {
  const Icon = {
    calendar: CalendarDays,
    location: MapPin,
    note: MessageSquareText,
  }[icon];

  return (
    <div className="flex gap-3">
      <Icon className="mt-0.5 size-4 shrink-0 text-slate-400" />
      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-400">{label}</p>
        <p className={`mt-1 text-sm text-slate-700 ${multiline ? 'leading-6' : 'font-semibold'}`}>{value}</p>
      </div>
    </div>
  );
}
