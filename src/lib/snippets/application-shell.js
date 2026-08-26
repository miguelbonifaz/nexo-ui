import { tablerIconSnippet } from './tabler-icons';

const iconPreamble = tablerIconSnippet([
  'chartBar',
  'calendar',
  'fileText',
  'layoutKanban',
  'layoutDashboard',
  'logout',
  'moon',
  'settings',
  'sun',
  'users',
]);

export const applicationShellSnippet = String.raw`'use client';

import { useState } from 'react';
${iconPreamble}

const navigation = [
  { label: 'Dashboard', icon: IconLayoutDashboard },
  { label: 'Team', icon: IconUsers },
  { label: 'Projects', icon: IconLayoutKanban },
  { label: 'Calendar', icon: IconCalendar },
  { label: 'Documents', icon: IconFileText },
  { label: 'Reports', icon: IconChartBar },
];

const workspaces = [
  { name: 'Nexo UI', description: 'Component library' },
  { name: 'Dulce Sabor', description: 'Product workspace' },
  { name: 'Client Projects', description: 'Shared workspace' },
];

function SidebarItem({ item, activeItem }) {
  const Icon = item.icon;
  const isActive = item.label === activeItem;

  return (
    <a
      href={'#' + item.label.toLowerCase()}
      className={'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium whitespace-nowrap transition-colors ' + (isActive ? 'bg-slate-100 text-slate-900 dark:bg-slate-800/80 dark:text-[#2ec4b6]' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100')}
    >
      <Icon aria-hidden="true" size={18} stroke={1.6} className={'shrink-0 ' + (isActive ? 'text-slate-900 dark:text-[#2ec4b6]' : 'text-slate-400')} />
      <span className="truncate">{item.label}</span>
    </a>
  );
}

function WorkspaceItem({ workspace }) {
  const { name, description } = workspace;

  return (
    <a href={'#' + name.toLowerCase().replaceAll(' ', '-')} className="flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100">
      <span className="min-w-0"><span className="block truncate">{name}</span><span className="block truncate text-[10px] font-normal text-slate-400 dark:text-slate-500">{description}</span></span>
    </a>
  );
}

function SidebarFooter({ dark, onToggleTheme }) {
  const ThemeIcon = dark ? IconMoon : IconSun;

  return (
    <div className="mt-auto pt-8">
      <div className="flex items-center justify-between rounded-lg px-3 py-2.5">
        <a href="#settings" className="flex items-center gap-3 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"><IconSettings aria-hidden="true" size={18} stroke={1.6} /><span>Settings</span></a>
        <button type="button" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={dark} onClick={onToggleTheme} className="flex size-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"><ThemeIcon aria-hidden="true" size={18} /></button>
      </div>
      <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700/70">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-2.5 dark:border-slate-800 dark:bg-slate-900">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#2ec4b6] text-xs font-bold text-[#071018]">TU</span>
          <div className="min-w-0 flex-1 leading-tight"><p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">Test User</p><p className="truncate text-xs text-slate-500 dark:text-slate-400">test.user@example.com</p></div>
          <button type="button" aria-label="Sign out" className="flex size-8 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-200"><IconLogout aria-hidden="true" size={18} stroke={1.6} /></button>
        </div>
      </div>
    </div>
  );
}

export default function ApplicationShell({ children, activeItem = 'Dashboard' }) {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? 'dark' : ''}>
    <div className="grid min-h-[520px] w-full grid-cols-[clamp(13rem,22%,22rem)_minmax(0,1fr)] overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-[0_14px_40px_rgb(15_23_42/0.08)] transition-colors dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <aside className="flex min-h-[520px] min-w-0 flex-col border-r border-slate-200 bg-[#FAFAF8] px-4 py-6 text-slate-600 transition-colors dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
        <div className="flex items-center gap-3 px-3 pb-10"><span className="flex size-9 items-center justify-center rounded-xl bg-[#2ec4b6] text-sm font-bold text-[#071018]">N</span><span className="truncate text-base font-semibold tracking-tight text-slate-50">Nexo UI</span></div>
        <nav aria-label="Primary navigation">
          <p className="mb-3 px-3 font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">General</p>
          <div className="space-y-0.5">{navigation.map((item) => <SidebarItem key={item.label} item={item} activeItem={activeItem} />)}</div>
        </nav>
        <div className="mt-8"><p className="mb-3 px-3 text-xs font-semibold text-slate-400">Workspaces</p><div className="space-y-0.5">{workspaces.map((workspace) => <WorkspaceItem key={workspace.name} workspace={workspace} />)}</div></div>
        <SidebarFooter dark={dark} onToggleTheme={() => setDark((current) => !current)} />
      </aside>
      <main aria-label="Workspace" className="flex min-h-[520px] min-w-0 flex-col bg-slate-50 p-6 transition-colors sm:p-10 dark:bg-slate-900">
        <div aria-label="Dashboard workspace" className="min-h-[420px] flex-1 rounded-xl border border-dashed border-slate-300 bg-[repeating-linear-gradient(135deg,transparent_0,transparent_10px,rgb(100_116_139/0.08)_10px,rgb(100_116_139/0.08)_12px)] transition-colors dark:border-slate-700/80 dark:bg-slate-900/60 dark:bg-[repeating-linear-gradient(135deg,transparent_0,transparent_10px,rgb(148_163_184/0.08)_10px,rgb(148_163_184/0.08)_12px)]">{children}</div>
      </main>
    </div>
    </div>
  );
}`;
