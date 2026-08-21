import { ChevronRight, Command, Copy, X } from 'lucide-react';
import { componentSections } from '@/lib/component-data';

export default function ShowcaseSidebar({ activeId, onSelect, mobileOpen, onClose }) {
  return (
    <>
      {mobileOpen && <button type="button" aria-label="Close navigation" onClick={onClose} className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden" />}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[252px] flex-col border-r border-white/[0.08] bg-[#070a10] px-5 py-5 transition-transform duration-300 lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between px-2">
          <button type="button" onClick={() => onSelect('table')} className="flex items-center gap-3 text-left">
            <span className="flex size-8 items-center justify-center rounded-xl bg-cyan-300 text-[#071018] shadow-[0_0_24px_rgb(103_232_249/0.2)]"><Command className="size-4" /></span>
            <span><span className="block text-sm font-semibold tracking-tight text-white">Nexo UI</span><span className="block text-[10px] tracking-[0.08em] text-slate-500 uppercase">Personal library</span></span>
          </button>
          <button type="button" onClick={onClose} aria-label="Close navigation" className="rounded-lg p-2 text-slate-500 hover:bg-white/[0.06] hover:text-white lg:hidden"><X className="size-4" /></button>
        </div>

        <nav className="mt-12 flex-1 overflow-y-auto pr-1" aria-label="Component navigation">
          {componentSections.map((section) => (
            <div key={section.title} className="mb-9">
              <p className="mb-3 px-2 font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">{section.title}</p>
              <div className="space-y-1 border-l border-white/[0.1] pl-3">
                {section.items.map((item) => {
                  const isActive = item.id === activeId;

                  return (
                    <button key={item.id} type="button" onClick={() => { onSelect(item.id); onClose(); }} className={`group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${isActive ? 'bg-white/[0.08] font-semibold text-white' : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200'}`}>
                      <span>{item.title}</span>
                      <ChevronRight className={`size-3.5 transition-transform ${isActive ? 'translate-x-0 text-cyan-300' : '-translate-x-1 text-slate-600 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="border-t border-white/[0.08] pt-5">
          <div className="flex items-center gap-2 px-2 text-[10px] font-semibold tracking-[0.12em] text-slate-500 uppercase"><Copy className="size-3.5 text-cyan-300" /> Copy-ready components</div>
          <p className="mt-3 px-2 text-xs leading-5 text-slate-500">A small, growing set of React patterns for your next interface.</p>
        </div>
      </aside>
    </>
  );
}
