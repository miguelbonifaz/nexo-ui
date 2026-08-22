'use client';

import { Check, Copy, Menu, Monitor, Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { sampleRecords, toDetailRecord } from '@/lib/data';
import { componentMeta, componentSections } from '@/lib/component-data';
import { componentRegistry } from '@/lib/component-registry';
import CodeBlock from './code-block';
import ApplicationShellShowcase from './application-shell-showcase';
import BreadcrumbShowcase from './breadcrumb-showcase';
import DetailModal from './detail-modal';
import DetailModalShowcase from './detail-modal-showcase';
import InputShowcase from './input-showcase';
import PaginationShowcase from './pagination-showcase';
import ResponsivePreview from './responsive-preview';
import ShowcaseSidebar from './showcase-sidebar';
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

export default function ShowcaseApp() {
  const [activeId, setActiveId] = useState('table');
  const [showCode, setShowCode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [previewMode, setPreviewMode] = useState('dark');
  const [copied, setCopied] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(() => toDetailRecord(sampleRecords[0]));
  const [modalOpen, setModalOpen] = useState(false);

  const meta = componentMeta[activeId];
  const registryItem = componentRegistry.find((item) => item.id === activeId);

  function selectComponent(id) {
    setActiveId(id);
    setShowCode(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function copyCode() {
    await copyToClipboard(registryItem.code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function openDetail(record) {
    setSelectedRecord(toDetailRecord(record));
    setModalOpen(true);
  }

  function renderPreview() {
    if (activeId === 'application-shell') return <ApplicationShellShowcase />;
    if (activeId === 'breadcrumb') return <BreadcrumbShowcase />;
    if (activeId === 'input') return <InputShowcase />;
    if (activeId === 'pagination') return <PaginationShowcase />;
    if (activeId === 'detail-modal') return <DetailModalShowcase onOpen={openDetail} />;
    return <TableShowcase onSelectRecord={openDetail} />;
  }

  return (
    <div className="min-h-screen bg-[#070a10] text-slate-100">
      <ShowcaseSidebar activeId={activeId} onSelect={selectComponent} mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="min-h-screen lg:pl-[252px]">
        <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-white/[0.08] bg-[#070a10]/90 px-5 backdrop-blur-xl sm:px-8 lg:px-12">
          <div className="flex items-center gap-3">
            <button type="button" onClick={() => setMobileOpen(true)} aria-label="Open navigation" className="rounded-lg p-2 text-slate-400 hover:bg-white/[0.06] hover:text-white lg:hidden"><Menu className="size-5" /></button>
            <span className="hidden font-mono text-[10px] font-semibold tracking-[0.15em] text-slate-500 uppercase sm:block">Component library / {meta.section}</span>
            <span className="font-mono text-[10px] font-semibold tracking-[0.15em] text-slate-500 uppercase sm:hidden">Nexo UI</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400"><span className="hidden items-center gap-2 rounded-full border border-white/[0.1] px-3 py-1.5 sm:flex"><span className="size-1.5 rounded-full bg-emerald-400" />Local preview</span><span className="font-mono text-[10px] text-slate-600">v0.1</span></div>
        </header>

        <main className="nexo-grid min-h-[calc(100vh-72px)] px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div className="mx-auto max-w-[1320px]">
            <div className="nexo-enter mb-10 max-w-3xl">
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-cyan-300 uppercase">{meta.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">{meta.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">{meta.description}</p>
            </div>

            <section className="nexo-enter-delay-1 overflow-hidden rounded-[22px] border border-white/[0.1] bg-[#0d131e] shadow-[0_24px_90px_rgb(2_6_23/0.28)]">
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
                {showCode ? <CodeBlock code={registryItem.code} /> : (
                  <div className={`preview-theme ${previewMode === 'dark' ? 'dark' : ''}`}>
                    <div className="preview-surface rounded-2xl p-3 shadow-[0_14px_40px_rgb(15_23_42/0.08)] sm:p-5">
                      <ResponsivePreview dark={previewMode === 'dark'}>{renderPreview()}</ResponsivePreview>
                    </div>
                  </div>
                )}
              </div>
            </section>

            <div className="nexo-enter-delay-2 mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-5 text-xs text-slate-500"><span>{componentSections.find((section) => section.title === meta.section)?.title} / {meta.title}</span><span className="inline-flex items-center gap-2"><Monitor className="size-3.5" /> Built for responsive React interfaces</span></div>
          </div>
        </main>
      </div>

      <DetailModal dark={previewMode === 'dark'} record={selectedRecord} open={modalOpen} onClose={() => setModalOpen(false)} onPrimaryAction={() => setModalOpen(false)} />
    </div>
  );
}
