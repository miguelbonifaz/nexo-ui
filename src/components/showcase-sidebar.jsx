'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { componentSections } from '@/lib/component-data';
import { tablerIcons } from '@/lib/tabler-icons';
import NexoIcon from './nexo-icon';

export default function ShowcaseSidebar({ activeId }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ pathname, id: activeId });
  const selectedId = selectedItem.pathname === pathname ? selectedItem.id : activeId;

  function closeNavigation() {
    setMobileOpen(false);
  }

  function selectItem(id) {
    setSelectedItem({ pathname, id });
    setMobileOpen(false);
  }

  return (
    <>
      <button type="button" onClick={() => setMobileOpen(true)} aria-label="Open navigation" className="fixed top-4 left-4 z-40 rounded-lg p-2 text-slate-400 hover:bg-white/[0.06] hover:text-white lg:hidden"><NexoIcon icon={mobileOpen ? tablerIcons.x : tablerIcons.menu2} spring="snappy" className="size-5" /></button>
      {mobileOpen && <button type="button" aria-label="Close navigation" onClick={closeNavigation} className="fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm lg:hidden" />}
      <aside className={`fixed inset-y-0 left-0 z-50 flex w-[252px] flex-col border-r border-white/[0.08] bg-[#070a10] px-5 py-5 transition-transform duration-300 lg:translate-x-0 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between px-2">
          <Link href="/" onClick={closeNavigation} className="flex items-center gap-3 text-left">
            <span className="flex size-8 items-center justify-center rounded-xl bg-cyan-300 text-[#071018] shadow-[0_0_24px_rgb(103_232_249/0.2)]"><NexoIcon icon={tablerIcons.command} className="size-4" /></span>
            <span><span className="block text-sm font-semibold tracking-tight text-white">Nexo UI</span><span className="block text-[10px] tracking-[0.08em] text-slate-500 uppercase">Component library</span></span>
          </Link>
          <button type="button" onClick={closeNavigation} aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} className="rounded-lg p-2 text-slate-500 hover:bg-white/[0.06] hover:text-white lg:hidden"><NexoIcon icon={mobileOpen ? tablerIcons.x : tablerIcons.menu2} spring="snappy" className="size-4" /></button>
        </div>

        <nav className="mt-12 flex-1 overflow-y-auto pr-1" aria-label="Component navigation">
          {componentSections.map((section) => (
            <div key={section.title} className="mb-9">
              <p className="mb-3 px-2 font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">{section.title}</p>
              <div className="space-y-1 border-l border-white/[0.1] pl-3">
                {section.items.map((item) => <ComponentLink key={item.id} item={item} activeId={selectedId} onNavigate={selectItem} />)}
              </div>
            </div>
          ))}
        </nav>

        <div className="border-t border-white/[0.08] pt-5">
          <div className="flex items-center gap-2 px-2 text-[10px] font-semibold tracking-[0.12em] text-slate-500 uppercase"><NexoIcon icon={tablerIcons.copy} className="size-3.5 text-cyan-300" /> Copy-ready components</div>
          <p className="mt-3 px-2 text-xs leading-5 text-slate-500">Reusable React patterns with live previews and adaptable JSX.</p>
        </div>
      </aside>
    </>
  );
}

function ComponentLink({ item, activeId, onNavigate }) {
  const isActive = item.id === activeId;
  const href = item.id === item.groupId ? `/components/${item.groupId}` : `/components/${item.groupId}#${item.id}`;

  return <Link href={href} onClick={() => onNavigate(item.id)} aria-current={isActive ? 'page' : undefined} className={`group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-[13px] transition ${isActive ? 'bg-white/[0.08] font-semibold text-white' : 'text-slate-400 hover:bg-white/[0.04] hover:text-slate-200'}`}><span>{item.title}</span><NexoIcon icon={tablerIcons.chevronRight} className={`size-3.5 transition-transform ${isActive ? 'translate-x-0 text-cyan-300' : '-translate-x-1 text-slate-600 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} /></Link>;
}
