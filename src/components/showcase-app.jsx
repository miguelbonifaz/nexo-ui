'use client';

import { Check, Copy, Monitor, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { sampleRecords, toDetailRecord } from '@/lib/data';
import CodeBlock from './code-block';
import ApplicationShellShowcase from './application-shell-showcase';
import BreadcrumbShowcase from './breadcrumb-showcase';
import DetailModal from './detail-modal';
import DetailModalShowcase from './detail-modal-showcase';
import InputShowcase from './input-showcase';
import PaginationShowcase from './pagination-showcase';
import ResponsivePreview from './responsive-preview';
import TableShowcase from './table-showcase';

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

export default function ShowcaseApp({ component }) {
  const activeId = component.id;
  const [showCode, setShowCode] = useState(false);
  const [previewMode, setPreviewMode] = useState('dark');
  const [copied, setCopied] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(() => toDetailRecord(sampleRecords[0]));
  const [modalOpen, setModalOpen] = useState(false);

  function renderPreview() {
    if (activeId === 'application-shell') return <ApplicationShellShowcase />;
    if (activeId === 'breadcrumb') return <BreadcrumbShowcase />;
    if (activeId === 'input') return <InputShowcase />;
    if (activeId === 'pagination') return <PaginationShowcase />;
    if (activeId === 'detail-modal') return <DetailModalShowcase onOpen={openDetail} />;
    return <TableShowcase onSelectRecord={openDetail} />;
  }

  async function copyCode() {
    await copyToClipboard(component.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function openDetail(record) {
    setSelectedRecord(toDetailRecord(record));
    setModalOpen(true);
  }

  return (
    <>
      <section className="nexo-enter-delay-1 overflow-hidden rounded-[22px] border border-white/[0.1] bg-[#0d131e] shadow-[0_24px_90px_rgb(2_6_23/0.28)]" aria-label={`${component.title} preview and source code`}>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] px-4 py-3 sm:px-5">
          <div className="relative grid w-[132px] grid-cols-2 items-center rounded-lg bg-[#070a10] p-1">
            <span aria-hidden="true" className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-md bg-slate-700 shadow-sm transition-transform duration-300 ease-out ${showCode ? 'translate-x-full' : 'translate-x-0'}`} />
            <button type="button" onClick={() => setShowCode(false)} className={`relative z-10 w-full rounded-md px-0 py-1.5 text-xs font-semibold transition-colors ${!showCode ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}>Preview</button>
            <button type="button" onClick={() => setShowCode(true)} className={`relative z-10 w-full rounded-md px-0 py-1.5 text-xs font-semibold transition-colors ${showCode ? 'text-white' : 'text-slate-500 hover:text-slate-300'}`}>Code</button>
          </div>
          <div className="flex items-center gap-2">
            {!showCode && <div className="hidden items-center gap-1 rounded-lg border border-white/[0.08] p-1 sm:flex"><button type="button" aria-label="Light preview" onClick={() => setPreviewMode('light')} className={`rounded-md p-1.5 ${previewMode === 'light' ? 'bg-white/[0.12] text-white' : 'text-slate-500'}`}><Sun className="size-3.5" /></button><button type="button" aria-label="Dark preview" onClick={() => setPreviewMode('dark')} className={`rounded-md p-1.5 ${previewMode === 'dark' ? 'bg-white/[0.12] text-white' : 'text-slate-500'}`}><Moon className="size-3.5" /></button></div>}
            <span className="hidden border-l border-white/[0.1] pl-3 font-mono text-[10px] font-semibold tracking-[0.1em] text-slate-400 uppercase sm:block">React / JSX</span>
            <button type="button" onClick={copyCode} className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-3 py-2 text-xs font-semibold text-[#071018] transition hover:bg-cyan-200">{copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}{copied ? 'Copied' : 'Copy code'}</button>
          </div>
        </div>
        <div className="bg-[#0a101a] p-3 sm:p-5">
          {showCode ? <CodeBlock code={component.code} /> : (
            <div className={`preview-theme ${previewMode === 'dark' ? 'dark' : ''}`}>
              <div className="preview-surface rounded-2xl p-3 shadow-[0_14px_40px_rgb(15_23_42/0.08)] sm:p-5">
                <ResponsivePreview dark={previewMode === 'dark'}>{renderPreview()}</ResponsivePreview>
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500"><span className="inline-flex items-center gap-2"><Monitor className="size-3.5" /> Built for responsive React interfaces</span><span>Preview the component, then copy the JSX.</span></div>
      <DetailModal dark={previewMode === 'dark'} record={selectedRecord} open={modalOpen} onClose={() => setModalOpen(false)} onPrimaryAction={() => setModalOpen(false)} />
    </>
  );
}
