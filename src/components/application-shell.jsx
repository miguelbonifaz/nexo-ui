'use client';

import { useEffect, useRef, useState } from 'react';
import { tablerIcons } from '@/lib/tabler-icons';
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

function SidebarItem({ item, activeItem, compact, mobile, onSelect }) {
  const isActive = item.label === activeItem;

  return (
    <a
      href={`#${item.label.toLowerCase()}`}
      aria-label={compact ? item.label : undefined}
      title={compact ? item.label : undefined}
      onClick={onSelect}
      className={`flex items-center rounded-lg py-2.5 text-sm font-medium whitespace-nowrap transition-colors ${mobile ? 'gap-3 px-3' : `max-lg:justify-center max-lg:px-2 ${compact ? 'justify-center px-2' : 'gap-3 px-3'}`} ${isActive ? 'bg-slate-100 text-slate-900 dark:bg-slate-800/80 dark:text-[#2ec4b6]' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100'}`}
    >
      <NexoIcon icon={item.icon} className={`size-[18px] shrink-0 stroke-[1.6] ${isActive ? 'text-slate-900 dark:text-[#2ec4b6]' : 'text-slate-400'}`} />
      <span className={mobile ? 'truncate' : compact ? 'sr-only' : 'truncate max-lg:sr-only'}>{item.label}</span>
    </a>
  );
}

function WorkspaceItem({ workspace, onSelect }) {
  const { name, description } = workspace;

  return (
    <a
      href={`#${name.toLowerCase().replaceAll(' ', '-')}`}
      onClick={onSelect}
      className="flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"
    >
      <span className="min-w-0">
        <span className="block truncate">{name}</span>
        <span className="block truncate text-[10px] font-normal text-slate-400 dark:text-slate-500">{description}</span>
      </span>
    </a>
  );
}

function SidebarFooter({ compact, mobile, dark, onToggleTheme }) {
  const compactClasses = mobile ? 'hidden' : compact ? 'flex' : 'hidden max-lg:flex';
  const expandedClasses = mobile ? 'block' : compact ? 'hidden' : 'hidden lg:block';

  return (
    <>
      <div className={`mt-auto flex-col items-center gap-2 pt-8 ${compactClasses}`}>
        <a href="#settings" aria-label="Settings" title="Settings" className="flex size-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"><NexoIcon icon={tablerIcons.settings} className="size-[18px] stroke-[1.6]" /></a>
        <button type="button" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} title={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={dark} onClick={onToggleTheme} className="flex size-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"><NexoIcon icon={dark ? tablerIcons.moon : tablerIcons.sun} spring="snappy" className="size-[18px]" /></button>
        <button type="button" aria-label="Sign out" title="Sign out" className="flex size-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"><NexoIcon icon={tablerIcons.logout} className="size-[18px] stroke-[1.6]" /></button>
      </div>
      <div className={`mt-auto pt-8 ${expandedClasses}`}>
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
          <div className="min-w-0 flex-1 leading-tight">
            <p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">Test User</p>
            <p className="truncate text-xs text-slate-500 dark:text-slate-400">test.user@example.com</p>
          </div>
          <button type="button" aria-label="Sign out" className="flex size-8 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-200">
            <NexoIcon icon={tablerIcons.logout} className="size-[18px] stroke-[1.6]" />
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

function SidebarContent({ activeItem, compact, mobile = false, onClose, onToggleCompact, dark, onToggleTheme }) {
  return (
    <>
      <div className={`flex items-center pb-10 ${compact ? 'justify-center px-0' : 'justify-between px-3'}`}>
        {!compact && <div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-xl bg-[#2ec4b6] text-sm font-bold text-[#071018] shadow-[0_6px_16px_-6px_rgb(46_196_182/0.4)]">N</span><span className="truncate text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50">Nexo UI</span></div>}
        {onToggleCompact && <button type="button" onClick={onToggleCompact} aria-label={compact ? 'Expand sidebar' : 'Collapse sidebar'} aria-expanded={!compact} title={compact ? 'Expand sidebar' : 'Collapse sidebar'} className="flex size-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"><NexoIcon icon={tablerIcons.layoutSidebar} className="size-5" /></button>}
        {onClose && <button type="button" onClick={onClose} aria-label="Close navigation" title="Close navigation" className="flex size-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"><NexoIcon icon={tablerIcons.x} className="size-5" /></button>}
      </div>
      <nav aria-label="Primary navigation">
        <p className={`mb-3 font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400 ${compact ? 'sr-only' : 'px-3'}`}>General</p>
        <div className="space-y-0.5">{navigation.map((item) => <SidebarItem key={item.label} item={item} activeItem={activeItem} compact={compact} mobile={mobile} onSelect={onClose} />)}</div>
      </nav>
      <div className={compact && !mobile ? 'hidden' : 'mt-8'}>
        <p className="mb-3 px-3 text-xs font-semibold text-slate-500 dark:text-slate-400">Workspaces</p>
        <div className="space-y-0.5">{workspaces.map((workspace) => <WorkspaceItem key={workspace.name} workspace={workspace} onSelect={onClose} />)}</div>
      </div>
      <SidebarFooter compact={compact} mobile={mobile} dark={dark} onToggleTheme={onToggleTheme} />
    </>
  );
}

export default function ApplicationShell({ children, activeItem = 'Dashboard', dark, onToggleTheme }) {
  const shellRef = useRef(null);
  const [localDark, setLocalDark] = useState(true);
  const [autoCompact, setAutoCompact] = useState(false);
  const [sidebarCompact, setSidebarCompact] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = typeof dark === 'boolean' ? dark : localDark;
  const compactSidebar = sidebarCompact || autoCompact;
  const toggleTheme = onToggleTheme ?? (() => setLocalDark((current) => !current));
  const closeNavigation = () => setMobileOpen(false);

  useEffect(() => {
    if (!shellRef.current) return undefined;
    const observer = new ResizeObserver(([entry]) => setAutoCompact(entry.contentRect.width < 900));
    observer.observe(shellRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') closeNavigation();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <div className={isDark ? 'dark' : ''}>
    <div ref={shellRef} className={`relative grid min-h-[520px] w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-[0_14px_40px_rgb(15_23_42/0.08)] transition-[grid-template-columns,colors] duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 ${autoCompact ? 'grid-cols-[minmax(0,1fr)]' : compactSidebar ? 'grid-cols-[76px_minmax(0,1fr)]' : 'grid-cols-[clamp(13rem,22%,22rem)_minmax(0,1fr)]'}`}>
      {autoCompact && mobileOpen && <button type="button" onClick={closeNavigation} aria-label="Close navigation overlay" className="absolute inset-0 z-30 bg-slate-950/35 backdrop-blur-[2px]" />}
      {!autoCompact && <aside className={`min-h-[520px] min-w-0 flex-col border-r border-slate-200 bg-[#FAFAF8] py-6 text-slate-600 transition-[padding] duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 ${compactSidebar ? 'flex px-2.5' : 'flex px-4'}`}>
        <SidebarContent activeItem={activeItem} compact={compactSidebar} onToggleCompact={() => setSidebarCompact((current) => !current)} dark={isDark} onToggleTheme={toggleTheme} />
      </aside>}
      {autoCompact && <aside aria-hidden={!mobileOpen} inert={!mobileOpen} className={`absolute inset-y-0 left-0 z-40 flex w-[272px] flex-col border-r border-slate-200 bg-[#FAFAF8] px-4 py-6 text-slate-600 shadow-2xl shadow-slate-900/10 transition-transform duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <SidebarContent activeItem={activeItem} mobile onClose={closeNavigation} dark={isDark} onToggleTheme={toggleTheme} />
      </aside>}

      <main aria-label="Workspace" className="flex min-h-[520px] min-w-0 flex-col bg-slate-50 p-6 transition-colors sm:p-10 dark:bg-slate-900">
        {autoCompact && <header className="-mx-6 -mt-6 mb-6 flex min-h-[58px] items-center justify-between border-b border-slate-200/70 bg-white px-4 dark:border-slate-800/70 dark:bg-slate-950 sm:-mx-10 sm:-mt-10">
          <button type="button" onClick={() => setMobileOpen(true)} aria-label="Open navigation" aria-expanded={mobileOpen} className="flex size-9 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"><NexoIcon icon={tablerIcons.menu2} className="size-5" /></button>
          <span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">Nexo UI</span>
          <span className="size-9" />
        </header>}
        <div
          aria-label="Dashboard workspace"
          className="min-h-[420px] flex-1 rounded-xl border border-dashed border-slate-300 bg-[repeating-linear-gradient(135deg,transparent_0,transparent_10px,rgb(100_116_139/0.08)_10px,rgb(100_116_139/0.08)_12px)] transition-colors dark:border-slate-700/80 dark:bg-slate-900/60 dark:bg-[repeating-linear-gradient(135deg,transparent_0,transparent_10px,rgb(148_163_184/0.08)_10px,rgb(148_163_184/0.08)_12px)]"
        >
          {children}
        </div>
      </main>
    </div>
    </div>
  );
}
