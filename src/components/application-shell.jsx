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

function SidebarItem({ item, activeItem, compact }) {
  const isActive = item.label === activeItem;

  return (
    <a
      href={`#${item.label.toLowerCase()}`}
      aria-label={compact ? item.label : undefined}
      title={compact ? item.label : undefined}
      className={`flex items-center rounded-lg py-2.5 text-sm font-medium whitespace-nowrap transition-colors max-lg:justify-center max-lg:px-2 ${compact ? 'justify-center px-2' : 'gap-3 px-3'} ${isActive ? 'bg-slate-100 text-slate-900 dark:bg-slate-800/80 dark:text-[#2ec4b6]' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100'}`}
    >
      <NexoIcon icon={item.icon} className={`size-[18px] shrink-0 stroke-[1.6] ${isActive ? 'text-slate-900 dark:text-[#2ec4b6]' : 'text-slate-400'}`} />
      <span className={compact ? 'sr-only' : 'truncate max-lg:sr-only'}>{item.label}</span>
    </a>
  );
}

function WorkspaceItem({ workspace }) {
  const { name, description } = workspace;

  return (
    <a
      href={`#${name.toLowerCase().replaceAll(' ', '-')}`}
      className="flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"
    >
      <span className="min-w-0">
        <span className="block truncate">{name}</span>
        <span className="block truncate text-[10px] font-normal text-slate-400 dark:text-slate-500">{description}</span>
      </span>
    </a>
  );
}

function SidebarFooter({ compact, dark, onToggleTheme }) {
  const compactClasses = compact ? 'flex' : 'hidden max-lg:flex';
  const expandedClasses = compact ? 'hidden' : 'hidden lg:block';

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

export default function ApplicationShell({ children, activeItem = 'Dashboard', dark, onToggleTheme }) {
  const shellRef = useRef(null);
  const [localDark, setLocalDark] = useState(true);
  const [autoCompact, setAutoCompact] = useState(false);
  const [sidebarCompact, setSidebarCompact] = useState(false);
  const isDark = typeof dark === 'boolean' ? dark : localDark;
  const compactSidebar = sidebarCompact || autoCompact;
  const toggleTheme = onToggleTheme ?? (() => setLocalDark((current) => !current));

  useEffect(() => {
    if (!shellRef.current) return undefined;
    const observer = new ResizeObserver(([entry]) => setAutoCompact(entry.contentRect.width < 900));
    observer.observe(shellRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={isDark ? 'dark' : ''}>
    <div ref={shellRef} className={`grid min-h-[520px] w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-[0_14px_40px_rgb(15_23_42/0.08)] transition-[grid-template-columns,colors] duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 ${compactSidebar ? 'grid-cols-[76px_minmax(0,1fr)]' : 'grid-cols-[clamp(13rem,22%,22rem)_minmax(0,1fr)]'}`}>
      <aside className={`flex min-h-[520px] min-w-0 flex-col border-r border-slate-200 bg-[#FAFAF8] py-6 text-slate-600 transition-[padding] duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 ${compactSidebar ? 'px-2.5' : 'px-4'}`}>
        <div className={`flex items-center pb-10 ${compactSidebar ? 'justify-center px-0' : 'justify-between px-3'}`}>
          {!compactSidebar && <div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-xl bg-[#2ec4b6] text-sm font-bold text-[#071018] shadow-[0_6px_16px_-6px_rgb(46_196_182/0.4)]">N</span><span className="truncate text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50">Nexo UI</span></div>}
          <button type="button" onClick={() => setSidebarCompact((current) => !current)} aria-label={compactSidebar ? 'Expand sidebar' : 'Collapse sidebar'} aria-expanded={!compactSidebar} title={compactSidebar ? 'Expand sidebar' : 'Collapse sidebar'} className="flex size-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"><NexoIcon icon={tablerIcons.layoutSidebar} className="size-5" /></button>
        </div>

        <nav aria-label="Primary navigation">
            <p className={`mb-3 font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400 ${compactSidebar ? 'sr-only' : 'px-3'}`}>General</p>
          <div className="space-y-0.5">
            {navigation.map((item) => <SidebarItem key={item.label} item={item} activeItem={activeItem} compact={compactSidebar} />)}
          </div>
        </nav>

        <div className={compactSidebar ? 'hidden' : 'mt-8'}>
          <p className="mb-3 px-3 text-xs font-semibold text-slate-500 dark:text-slate-400">Workspaces</p>
          <div className="space-y-0.5">
            {workspaces.map((workspace) => <WorkspaceItem key={workspace.name} workspace={workspace} />)}
          </div>
        </div>

        <SidebarFooter compact={compactSidebar} dark={isDark} onToggleTheme={toggleTheme} />
      </aside>

      <main aria-label="Workspace" className="flex min-h-[520px] min-w-0 flex-col bg-slate-50 p-6 transition-colors sm:p-10 dark:bg-slate-900">
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
