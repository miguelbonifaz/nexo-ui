'use client';

import { useEffect, useRef, useState } from 'react';
import { tablerIcons } from '@/lib/tabler-icons';
import Breadcrumb from './breadcrumb';
import NexoIcon from './nexo-icon';

const navigation = [
  { label: 'Dashboard', icon: tablerIcons.layoutDashboard },
  { label: 'Team', icon: tablerIcons.users },
  { label: 'Projects', icon: tablerIcons.layoutKanban },
  { label: 'Calendar', icon: tablerIcons.calendar },
  { label: 'Documents', icon: tablerIcons.fileText },
  { label: 'Reports', icon: tablerIcons.chartBar },
];

const workspaces = [
  { name: 'Nexo UI', description: 'Component library' },
  { name: 'Dulce Sabor', description: 'Product workspace' },
  { name: 'Client Projects', description: 'Shared workspace' },
];

function SidebarItem({ item, activeItem, compact, onSelect }) {
  const isActive = item.label === activeItem;

  return (
    <a href={`#${item.label.toLowerCase()}`} onClick={onSelect} aria-label={compact ? item.label : undefined} title={compact ? item.label : undefined} className={`flex items-center rounded-lg py-2.5 text-sm font-medium whitespace-nowrap transition-colors md:max-lg:justify-center md:max-lg:px-2 ${compact ? 'justify-center px-2' : 'gap-3 px-3'} ${isActive ? 'bg-slate-100 text-slate-900 dark:bg-slate-800/80 dark:text-[#2ec4b6]' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100'}`}>
      <NexoIcon icon={item.icon} className={`size-[18px] shrink-0 stroke-[1.6] ${isActive ? 'text-slate-900 dark:text-[#2ec4b6]' : 'text-slate-400'}`} />
      <span className={compact ? 'sr-only' : 'truncate md:max-lg:sr-only'}>{item.label}</span>
    </a>
  );
}

function SidebarFooter({ compact, dark, onToggleTheme }) {
  const compactClasses = compact ? 'flex' : 'hidden';
  const expandedClasses = compact ? 'hidden' : 'block';

  return (
    <><div className={`mt-auto flex-col items-center gap-2 pt-8 ${compactClasses}`}><a href="#settings" aria-label="Settings" title="Settings" className="flex size-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"><NexoIcon icon={tablerIcons.settings} className="size-[18px] stroke-[1.6]" /></a><button type="button" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={dark} onClick={onToggleTheme} className="flex size-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"><NexoIcon icon={dark ? tablerIcons.moon : tablerIcons.sun} spring="snappy" className="size-[18px]" /></button><button type="button" aria-label="Sign out" title="Sign out" className="flex size-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"><NexoIcon icon={tablerIcons.logout} className="size-[18px] stroke-[1.6]" /></button></div><div className={`mt-auto pt-8 ${expandedClasses}`}>
      <div className="flex items-center justify-between rounded-lg px-3 py-2.5">
        <a href="#settings" className="flex items-center gap-3 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
          <NexoIcon icon={tablerIcons.settings} className="size-[18px] stroke-[1.6]" />
          <span>Settings</span>
        </a>
        <button type="button" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={dark} onClick={onToggleTheme} className="flex size-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100">
          <NexoIcon icon={dark ? tablerIcons.moon : tablerIcons.sun} spring="snappy" className="size-[18px]" />
        </button>
      </div>
      <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700/70">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-2.5 dark:border-slate-800 dark:bg-slate-900">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#2ec4b6] text-xs font-bold text-[#071018]">TU</span>
          <div className="min-w-0 flex-1 leading-tight"><p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">Test User</p><p className="truncate text-xs text-slate-500 dark:text-slate-400">test.user@example.com</p></div>
          <button type="button" aria-label="Sign out" className="flex size-8 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-200"><NexoIcon icon={tablerIcons.logout} className="size-[18px] stroke-[1.6]" /></button>
        </div>
      </div>
    </div></>
  );
}

function SidebarContent({ activeItem, compact = false, onClose, onToggleCompact, mobileOpen = false, dark, onToggleTheme }) {
  return (
    <>
      <div className={`flex items-center pb-10 ${compact ? 'justify-center px-0' : 'justify-between px-3 md:max-lg:justify-center md:max-lg:px-0'}`}>
        {!compact && <div className="flex items-center gap-3 md:max-lg:hidden">
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#2ec4b6] text-sm font-bold text-[#071018] shadow-[0_6px_16px_-6px_rgb(46_196_182/0.4)]">N</span>
          <span className="truncate text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50">Nexo UI</span>
        </div>}
        {onToggleCompact && <button type="button" onClick={onToggleCompact} aria-label={compact ? 'Expand sidebar' : 'Collapse sidebar'} aria-expanded={!compact} title={compact ? 'Expand sidebar' : 'Collapse sidebar'} className="flex size-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"><NexoIcon icon={tablerIcons.layoutSidebar} className="size-5" /></button>}
        {onClose && <button type="button" onClick={onClose} aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"><NexoIcon icon={mobileOpen ? tablerIcons.x : tablerIcons.menu2} spring="snappy" className="size-4" /></button>}
      </div>
      <nav aria-label="Primary navigation">
        <p className={`mb-3 font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400 ${compact ? 'sr-only' : 'px-3 md:max-lg:sr-only'}`}>General</p>
        <div className="space-y-0.5">{navigation.map((item) => <SidebarItem key={item.label} item={item} activeItem={activeItem} compact={compact} onSelect={onClose} />)}</div>
      </nav>
      <div className={compact ? 'hidden' : 'mt-8 md:max-lg:hidden'}>
        <p className="mb-3 px-3 text-xs font-semibold text-slate-500 dark:text-slate-400">Workspaces</p>
        <div className="space-y-0.5">{workspaces.map((workspace) => <a key={workspace.name} href={`#${workspace.name.toLowerCase().replaceAll(' ', '-')}`} onClick={onClose} className="flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"><span className="min-w-0"><span className="block truncate">{workspace.name}</span><span className="block truncate text-[10px] font-normal text-slate-400 dark:text-slate-500">{workspace.description}</span></span></a>)}</div>
      </div>
      <SidebarFooter compact={compact} dark={dark} onToggleTheme={onToggleTheme} />
    </>
  );
}

export default function ApplicationShellWithBreadcrumb({ children, activeItem = 'Dashboard', items, dark, onToggleTheme }) {
  const shellRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [autoCompact, setAutoCompact] = useState(false);
  const [sidebarCompact, setSidebarCompact] = useState(false);
  const [localDark, setLocalDark] = useState(true);
  const isDark = typeof dark === 'boolean' ? dark : localDark;
  const compactSidebar = sidebarCompact || autoCompact;
  const breadcrumbItems = items ?? [];
  const closeNavigation = () => setMobileOpen(false);
  const toggleTheme = onToggleTheme ?? (() => setLocalDark((current) => !current));

  useEffect(() => {
    if (!shellRef.current) return undefined;
    const observer = new ResizeObserver(([entry]) => setAutoCompact(entry.contentRect.width < 900));
    observer.observe(shellRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
    <div ref={shellRef} className="relative flex min-h-[520px] w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-[0_14px_40px_rgb(15_23_42/0.08)] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
      {mobileOpen && <button type="button" onClick={closeNavigation} aria-label="Close navigation overlay" className="absolute inset-0 z-30 bg-slate-950/35 backdrop-blur-[2px] md:hidden" />}
      <aside className={`hidden min-h-[520px] shrink-0 flex-col border-r border-slate-200 bg-[#FAFAF8] py-6 text-slate-600 transition-[width,padding] duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 md:flex ${compactSidebar ? 'w-[76px] px-2.5' : 'w-[272px] px-4'}`}><SidebarContent activeItem={activeItem} compact={compactSidebar} onToggleCompact={() => setSidebarCompact((current) => !current)} dark={isDark} onToggleTheme={toggleTheme} /></aside>
      <aside className={`absolute inset-y-0 left-0 z-40 flex w-[272px] flex-col border-r border-slate-200 bg-[#FAFAF8] px-4 py-6 text-slate-600 shadow-2xl shadow-slate-900/10 transition-transform duration-300 md:hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}><SidebarContent activeItem={activeItem} onClose={closeNavigation} mobileOpen={mobileOpen} dark={isDark} onToggleTheme={toggleTheme} /></aside>
      <div className="flex min-h-[520px] min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 hidden min-h-[58px] items-center border-b border-slate-200/70 bg-white/85 px-6 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/85 md:flex"><Breadcrumb items={breadcrumbItems} /></header>
        <header className="flex min-h-[58px] items-center justify-between border-b border-slate-200/70 bg-white px-4 dark:border-slate-800/70 dark:bg-slate-950 md:hidden"><button type="button" onClick={() => setMobileOpen(true)} aria-label="Open navigation" className="flex size-9 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"><NexoIcon icon={tablerIcons.menu2} className="size-5" /></button><span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">Nexo UI</span><span className="size-9" /></header>
        <main className="flex min-h-[462px] flex-1 flex-col bg-slate-50 p-4 dark:bg-slate-900 sm:p-6"><div aria-label="Dashboard workspace" className="flex min-h-[400px] flex-1 flex-col rounded-xl border border-dashed border-slate-300 bg-[repeating-linear-gradient(135deg,transparent_0,transparent_10px,rgb(100_116_139/0.08)_10px,rgb(100_116_139/0.08)_12px)] p-5 dark:border-slate-700/80 dark:bg-slate-900/60 dark:bg-[repeating-linear-gradient(135deg,transparent_0,transparent_10px,rgb(148_163_184/0.08)_10px,rgb(148_163_184/0.08)_12px)]">{children}</div></main>
      </div>
    </div>
    </div>
  );
}
