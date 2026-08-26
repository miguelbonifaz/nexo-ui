'use client';

import { useState } from 'react';
import { numberedPaginationSnippet } from '@/lib/snippets/pagination';
import { tablerIcons } from '@/lib/tabler-icons';
import CodeBlock from './code-block';
import NexoIcon from './nexo-icon';
import NumberedPagination from './numbered-pagination';
import ResponsivePreview from './responsive-preview';

async function copyToClipboard(text) {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return;
    }
  } catch {
    // Fall through to the local fallback.
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand('copy');
  textarea.remove();

  if (!copied) throw new Error('Clipboard is unavailable');
}

export default function NumberedPaginationShowcase({ dark, onToggleTheme }) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    await copyToClipboard(numberedPaginationSnippet);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <section className="mt-5 overflow-hidden rounded-[22px] border border-white/[0.1] bg-[#0d131e] shadow-[0_24px_90px_rgb(2_6_23/0.28)]" aria-label="Numbered pagination preview and source code">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] px-4 py-3 sm:px-5">
        <div className="relative grid w-[132px] grid-cols-2 items-center rounded-lg bg-[#070a10] p-1">
          <span aria-hidden="true" className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-md bg-slate-700 shadow-sm transition-transform duration-300 ease-out ${showCode ? 'translate-x-full' : 'translate-x-0'}`} />
          <button type="button" onClick={() => setShowCode(false)} className={`relative z-10 w-full rounded-md px-0 py-1.5 text-xs font-semibold transition-colors ${!showCode ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}>Preview</button>
          <button type="button" onClick={() => setShowCode(true)} className={`relative z-10 w-full rounded-md px-0 py-1.5 text-xs font-semibold transition-colors ${showCode ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}>Code</button>
        </div>
        <div className="flex items-center gap-2">
          {!showCode && <div className="relative hidden items-center gap-1 rounded-lg border border-white/[0.08] p-1 sm:flex"><button type="button" aria-label="Light preview" onClick={() => onToggleTheme(false)} className={`relative z-10 flex size-7 items-center justify-center rounded-md ${!dark ? 'text-white' : 'text-slate-500'}`}><NexoIcon icon={tablerIcons.sun} className={!dark ? 'opacity-0' : 'size-3.5'} /></button><button type="button" aria-label="Dark preview" onClick={() => onToggleTheme(true)} className={`relative z-10 flex size-7 items-center justify-center rounded-md ${dark ? 'text-white' : 'text-slate-500'}`}><NexoIcon icon={tablerIcons.moon} className={dark ? 'opacity-0' : 'size-3.5'} /></button><span aria-hidden="true" className={`pointer-events-none absolute top-1 left-1 z-20 flex size-7 items-center justify-center rounded-md bg-white/[0.12] text-white transition-transform duration-300 ease-out ${dark ? 'translate-x-[calc(100%+0.25rem)]' : 'translate-x-0'}`}><NexoIcon icon={dark ? tablerIcons.moon : tablerIcons.sun} spring="snappy" className="size-3.5" /></span></div>}
          <span className="hidden border-l border-white/[0.1] pl-3 font-mono text-[10px] font-semibold tracking-[0.1em] text-slate-400 uppercase sm:block">React / JSX</span>
          <button type="button" onClick={copyCode} className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-3 py-2 text-xs font-semibold text-[#071018] transition hover:bg-cyan-200"><NexoIcon icon={copied ? tablerIcons.check : tablerIcons.copy} spring="snappy" className="size-3.5" />{copied ? 'Copied' : 'Copy code'}</button>
        </div>
      </div>
      <div className="bg-[#0a101a] p-3 sm:p-5">
        {showCode ? <CodeBlock code={numberedPaginationSnippet} /> : (
          <div className={`preview-theme ${dark ? 'dark' : ''}`}>
            <div className="preview-surface rounded-2xl p-3 shadow-[0_14px_40px_rgb(15_23_42/0.08)] sm:p-5" style={{ minHeight: 0 }}>
              <ResponsivePreview dark={dark} fitContent><NumberedPagination /></ResponsivePreview>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
