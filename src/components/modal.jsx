'use client';

import { useEffect, useRef, useState } from 'react';
import { tablerIcons } from '@/lib/tabler-icons';
import NexoIcon from './nexo-icon';

export default function Modal({ dark = false, record, open, onClose, onPrimaryAction, withinCanvas = false }) {
  const [closing, setClosing] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    if (!open || withinCanvas) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open, withinCanvas]);

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
    if (closing) return;

    setClosing(true);
    closeTimer.current = window.setTimeout(() => {
      closeTimer.current = null;
      onClose();
    }, 300);
  }

  function handlePrimaryAction() {
    onPrimaryAction?.(record);
    closeModal();
  }

  return (
    <div className={`preview-theme ${dark ? 'dark' : ''} ${withinCanvas ? 'absolute inset-0' : ''}`}>
      <div className={`${withinCanvas ? 'absolute' : 'fixed'} inset-0 z-50 flex items-center justify-center p-4`}>
      <button
        type="button"
        aria-label="Close modal"
        onClick={closeModal}
        className={`${closing ? 'nexo-backdrop-exit' : 'nexo-backdrop-enter'} absolute inset-0 bg-slate-950/35 backdrop-blur-[2px] dark:bg-black/60`}
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(event) => event.stopPropagation()}
        className={`${closing ? 'nexo-modal-exit' : 'nexo-modal-enter'} relative z-10 ${withinCanvas ? 'max-h-full' : 'max-h-[calc(100dvh-2rem)]'} w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white shadow-[0_24px_80px_rgb(15_23_42/0.2)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/40`}
      >
        <header className="flex items-start justify-between gap-5 border-b border-slate-100 px-6 py-5 sm:px-7 dark:border-slate-800">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold tracking-[0.12em] text-slate-400 uppercase dark:text-slate-500">Order details</p>
            <h2 id="modal-title" className="mt-1 truncate text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">{record.title}</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{record.id} · {record.subtitle}</p>
          </div>
          <div className="flex shrink-0 items-start gap-3">
            <button type="button" onClick={closeModal} aria-label="Close modal" className="-mr-2 -mt-2 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200">
              <NexoIcon icon={tablerIcons.x} className="size-4" />
            </button>
          </div>
        </header>

        <div className="space-y-6 px-6 py-6 sm:px-7">
          <dl className={`grid ${withinCanvas ? 'gap-x-4 gap-y-3' : 'gap-x-6 gap-y-5'} sm:grid-cols-2`}>
            {record.fields.map(([label, value]) => (
              <div key={label} className="min-w-0">
                <dt className="text-xs font-medium text-slate-400 dark:text-slate-500">{label}</dt>
                <dd className="mt-1 truncate text-sm font-semibold text-slate-800 dark:text-slate-200">{value}</dd>
              </div>
            ))}
          </dl>
          {record.sections.length > 0 && <div className="grid gap-5 border-t border-slate-100 pt-5 sm:grid-cols-2 dark:border-slate-800">
            {record.sections.map((section) => (
              <DetailNote key={section.label} icon={section.icon} label={section.label} value={section.value} multiline={section.multiline} />
            ))}
          </div>}
        </div>

        <footer className="flex flex-col-reverse gap-3 border-t border-slate-100 px-6 py-4 sm:flex-row sm:justify-end sm:px-7 dark:border-slate-800">
          <button type="button" onClick={closeModal} className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">Close</button>
          {onPrimaryAction && <button type="button" onClick={handlePrimaryAction} className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-900 px-4 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white">Mark as reviewed</button>}
        </footer>
      </section>
      </div>
    </div>
  );
}

function DetailNote({ icon, label, value, multiline = false }) {
  const Icon = {
    calendar: tablerIcons.calendar,
    location: tablerIcons.mapPin,
    note: tablerIcons.message2,
  }[icon];

  return (
    <div className="flex gap-3">
      <NexoIcon icon={Icon} className="mt-0.5 size-4 shrink-0 text-slate-400 dark:text-slate-500" />
      <div className="min-w-0">
        <p className="text-xs font-medium text-slate-400 dark:text-slate-500">{label}</p>
        <p className={`mt-1 text-sm text-slate-700 dark:text-slate-300 ${multiline ? 'leading-6' : 'font-semibold'}`}>{value}</p>
      </div>
    </div>
  );
}
