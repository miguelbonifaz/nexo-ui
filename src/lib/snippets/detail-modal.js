import { tablerIconSnippet } from './tabler-icons';

const iconPreamble = tablerIconSnippet(['x']);

export const detailModalSnippet = String.raw`import { useEffect } from 'react';
${iconPreamble}

export default function DetailModal({ record, open, onClose }) {
  useEffect(() => {
    if (!open) return;

    function closeOnEscape(event) {
      if (event.key === 'Escape') onClose();
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [open, onClose]);

  if (!open || !record) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/35 backdrop-blur-[2px]"
      />
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-modal-title"
        className="relative z-10 max-h-[calc(100dvh-2rem)] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-[0_24px_80px_rgb(15_23_42/0.2)]"
      >
        <header className="flex items-start justify-between border-b px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">Record details</p>
            <h2 id="detail-modal-title" className="mt-1 text-xl font-semibold text-slate-900">{record.title}</h2>
          </div>
          <button type="button" onClick={onClose} aria-label="Close modal" className="rounded-lg p-2 text-slate-400 hover:bg-slate-100">
            <MorphIcon icon={tablerIcons.x} reducedMotion="user" className="size-4" />
          </button>
        </header>
        <div className="grid gap-5 px-6 py-6 sm:grid-cols-2">
          {record.fields.map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs font-medium text-slate-400">{label}</dt>
              <dd className="mt-1 text-sm font-semibold text-slate-800">{value}</dd>
            </div>
          ))}
        </div>
        <footer className="flex justify-end gap-3 border-t px-6 py-4">
          <button type="button" onClick={onClose} className="rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white">
            Close
          </button>
        </footer>
      </section>
    </div>
  );
}`;
