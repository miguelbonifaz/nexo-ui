const solidStyles = {
  xl: 'rounded-md bg-indigo-600 px-5 py-3 text-base font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  lg: 'rounded-md bg-indigo-600 px-[18px] py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  md: 'rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
  sm: 'rounded-md bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
};

const outlineStyles = {
  xl: 'rounded-md border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-700 shadow-xs hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 dark:hover:bg-slate-800/70 dark:focus-visible:outline-slate-300',
  lg: 'rounded-md border border-slate-300 bg-white px-[18px] py-2.5 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 dark:hover:bg-slate-800/70 dark:focus-visible:outline-slate-300',
  md: 'rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-700 shadow-xs hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 dark:hover:bg-slate-800/70 dark:focus-visible:outline-slate-300',
  sm: 'rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-500 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-transparent dark:text-slate-200 dark:hover:bg-slate-800/70 dark:focus-visible:outline-slate-300',
};

const cancelStyles = outlineStyles.md;

function createButtonSnippet(componentName, styles) {
  return String.raw`'use client';

import { useState } from 'react';
import { IconArrowUpRight } from '@tabler/icons-react';

export default function ${componentName}() {
  const [message, setMessage] = useState('Buttons are ready to use.');
  const [saving, setSaving] = useState(false);

  function handleCreate(event) {
    event.preventDefault();
    setSaving(true);
    setMessage('Guardando...');

    window.setTimeout(() => {
      setSaving(false);
      setMessage('Producto creado');
    }, 700);
  }

  function handleCancel() {
    setSaving(false);
    setMessage('Cancelado');
  }

  return (
    <div className="flex flex-wrap items-end gap-4">
      <div className="flex flex-col items-start gap-2">
        <button
          type="button"
          onClick={() => setMessage('XL clicked')}
          className="${styles.xl}"
        >
          XL button
        </button>
        <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-slate-400 uppercase">XL</span>
      </div>
      <div className="flex flex-col items-start gap-2">
        <button
          type="button"
          onClick={() => setMessage('LG clicked')}
          className="${styles.lg}"
        >
          LG button
        </button>
        <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-slate-400 uppercase">LG</span>
      </div>
      <div className="flex flex-col items-start gap-2">
        <button
          type="button"
          onClick={() => setMessage('MD clicked')}
          className="${styles.md}"
        >
          MD button
        </button>
        <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-slate-400 uppercase">MD</span>
      </div>
      <div className="flex flex-col items-start gap-2">
        <button
          type="button"
          onClick={() => setMessage('SM clicked')}
          className="${styles.sm}"
        >
          SM button
        </button>
        <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-slate-400 uppercase">SM</span>
      </div>

      <form onSubmit={handleCreate} className="basis-full flex flex-wrap items-center gap-3 border-t border-slate-200/80 pt-6 dark:border-slate-800">
        <button
          type="submit"
          disabled={saving}
          className="${styles.md}"
        >
          {saving ? 'Guardando...' : 'Crear producto'}
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="${cancelStyles}"
        >
          Cancelar
        </button>
      </form>

      <button
        type="button"
        onClick={() => setMessage('Place order clicked')}
        className="inline-flex items-center gap-2 ${styles.md}"
      >
        <IconArrowUpRight aria-hidden="true" size={16} />
        Place order
      </button>
      <button
        type="button"
        disabled
        className="${styles.md}"
      >
        Disabled
      </button>
      <p role="status" aria-live="polite" className="basis-full text-xs text-slate-400 dark:text-slate-500">{message}</p>
    </div>
  );
}`;
}

export const solidButtonSnippet = createButtonSnippet('SolidButtonExample', solidStyles);
export const outlineButtonSnippet = createButtonSnippet('OutlineButtonExample', outlineStyles);
