'use client';

import { useEffect, useState } from 'react';
import CodeBlock from './code-block';
import ComponentPreview from './component-preview';
import NexoIcon from './nexo-icon';
import NumberedPaginationShowcase from './numbered-pagination-showcase';
import ResponsivePreview from './responsive-preview';
import { tablerIcons } from '@/lib/tabler-icons';

async function copyToClipboard(text) {
  try {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(text);
      return;
    }
  } catch {
    // Fall through to the local HTTP fallback.
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

export default function ComponentShowcase({ component, previewMode, onSetPreviewMode, onOpenModal, modalOpen, onClose, modalPreviewRecord }) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const fitContentPreview = component.id === 'input'
    || component.id === 'breadcrumb'
    || component.id === 'pagination'
    || component.id === 'solid-button'
    || component.id === 'outline-button'
    || component.id === 'medium-badge'
    || component.id === 'small-badge'
    || component.id === 'native-select';

  useEffect(() => {
    if (!isExpanded) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event) {
      if (event.key === 'Escape') setIsExpanded(false);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isExpanded]);

  async function copyCode() {
    await copyToClipboard(component.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function togglePreviewTheme() {
    onSetPreviewMode(previewMode === 'dark' ? 'light' : 'dark');
  }

  return (
    <div id={component.id} className="scroll-mt-28">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">{component.title}</h2>
      </div>
      <section className={`nexo-enter-delay-1 overflow-hidden border border-white/[0.1] bg-[#0d131e] shadow-[0_24px_90px_rgb(2_6_23/0.28)] ${isExpanded ? 'fixed inset-0 z-50 flex min-h-screen flex-col rounded-none border-0' : 'rounded-[22px]'}`} aria-label={`${component.title} preview and source code`}>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] px-4 py-3 sm:px-5">
          <div className="relative grid w-[132px] grid-cols-2 items-center rounded-lg bg-[#070a10] p-1">
            <span aria-hidden="true" className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-md bg-slate-700 shadow-sm transition-transform duration-300 ease-out ${showCode ? 'translate-x-full' : 'translate-x-0'}`} />
            <button type="button" onClick={() => { setShowCode(false); setIsExpanded(false); }} className={`relative z-10 w-full rounded-md px-0 py-1.5 text-xs font-semibold transition-colors ${!showCode ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}>Preview</button>
            <button type="button" onClick={() => { setShowCode(true); setIsExpanded(false); }} className={`relative z-10 w-full rounded-md px-0 py-1.5 text-xs font-semibold transition-colors ${showCode ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}>Code</button>
          </div>
          <div className="flex items-center gap-2">
            {!showCode && <div className="relative hidden items-center gap-1 rounded-lg border border-white/[0.08] p-1 sm:flex"><button type="button" aria-label="Light preview" onClick={() => onSetPreviewMode('light')} className={`relative z-10 flex size-7 items-center justify-center rounded-md ${previewMode === 'light' ? 'text-white' : 'text-slate-500'}`}><NexoIcon icon={tablerIcons.sun} className={previewMode === 'light' ? 'opacity-0' : 'size-3.5'} /></button><button type="button" aria-label="Dark preview" onClick={() => onSetPreviewMode('dark')} className={`relative z-10 flex size-7 items-center justify-center rounded-md ${previewMode === 'dark' ? 'text-white' : 'text-slate-500'}`}><NexoIcon icon={tablerIcons.moon} className={previewMode === 'dark' ? 'opacity-0' : 'size-3.5'} /></button><span aria-hidden="true" className={`pointer-events-none absolute top-1 left-1 z-20 flex size-7 items-center justify-center rounded-md bg-white/[0.12] text-white transition-transform duration-300 ease-out ${previewMode === 'dark' ? 'translate-x-[calc(100%+0.25rem)]' : 'translate-x-0'}`}><NexoIcon icon={previewMode === 'light' ? tablerIcons.sun : tablerIcons.moon} spring="snappy" className="size-3.5" /></span></div>}
            <span className="hidden border-l border-white/[0.1] pl-3 font-mono text-[10px] font-semibold tracking-[0.1em] text-slate-400 uppercase sm:block">React / JSX</span>
            {!showCode && <button type="button" aria-label={isExpanded ? 'Exit full screen preview' : 'Expand preview'} aria-pressed={isExpanded} onClick={() => setIsExpanded((expanded) => !expanded)} className="inline-flex size-9 items-center justify-center rounded-lg border border-white/[0.1] text-slate-400 transition hover:border-cyan-300/50 hover:text-cyan-200"><NexoIcon icon={isExpanded ? tablerIcons.arrowsMinimize : tablerIcons.arrowsMaximize} spring="snappy" className="size-4" /></button>}
            <button type="button" onClick={copyCode} className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-3 py-2 text-xs font-semibold text-[#071018] transition hover:bg-cyan-200"><NexoIcon icon={copied ? tablerIcons.check : tablerIcons.copy} spring="snappy" className="size-3.5" />{copied ? 'Copied' : 'Copy code'}</button>
          </div>
        </div>
        <div className={`bg-[#0a101a] p-3 sm:p-5 ${isExpanded ? 'min-h-0 flex-1 overflow-auto' : ''}`}>
          {showCode ? <CodeBlock code={component.code} /> : (
            <div className={`preview-theme ${previewMode === 'dark' ? 'dark' : ''}`}>
              <div className="preview-surface rounded-2xl p-3 shadow-[0_14px_40px_rgb(15_23_42/0.08)] sm:p-5" style={fitContentPreview ? { minHeight: 0 } : undefined}>
                <ResponsivePreview dark={previewMode === 'dark'} fitContent={fitContentPreview}>
                  <ComponentPreview componentId={component.id} dark={previewMode === 'dark'} onToggleTheme={togglePreviewTheme} onOpenModal={onOpenModal} modalOpen={modalOpen} onClose={onClose} modalPreviewRecord={modalPreviewRecord} />
                </ResponsivePreview>
              </div>
            </div>
          )}
        </div>
      </section>
      {component.id === 'pagination' && <NumberedPaginationShowcase dark={previewMode === 'dark'} onToggleTheme={(dark) => onSetPreviewMode(dark ? 'dark' : 'light')} />}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500"><span className="inline-flex items-center gap-2"><NexoIcon icon={tablerIcons.deviceDesktop} className="size-3.5" /> Built for responsive React interfaces</span><span>Preview the component, then copy the JSX.</span></div>
    </div>
  );
}
