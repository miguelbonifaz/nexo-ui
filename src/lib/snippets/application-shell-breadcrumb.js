import { tablerIconSnippet } from './tabler-icons';

const iconPreamble = tablerIconSnippet([
  'calendar',
  'chartBar',
  'chevronRight',
  'fileText',
  'layoutDashboard',
  'layoutKanban',
  'logout',
  'menu2',
  'settings',
  'sun',
  'users',
  'x',
]);

export const applicationShellBreadcrumbSnippet = String.raw`'use client';

import { useState } from 'react';
${iconPreamble}

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

function BreadcrumbTrail({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && <MorphIcon icon={tablerIcons.chevronRight} reducedMotion="user" aria-hidden="true" className="size-3.5 text-slate-300 dark:text-slate-600" />}
              {isCurrent ? <span aria-current="page" className="font-semibold text-slate-900 dark:text-slate-100">{item.label}</span> : <a href={item.href ?? '#'} className="text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">{item.label}</a>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function SidebarItem({ item, activeItem, onSelect }) {
  const isActive = item.label === activeItem;

  return <a href={'#' + item.label.toLowerCase()} onClick={onSelect} className={'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors ' + (isActive ? 'bg-slate-100 text-slate-900 dark:bg-slate-800/80 dark:text-[#2ec4b6]' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100')}><MorphIcon icon={item.icon} reducedMotion="user" className={'size-[18px] shrink-0 stroke-[1.6] ' + (isActive ? 'text-slate-900 dark:text-[#2ec4b6]' : 'text-slate-400')} /><span className="truncate">{item.label}</span></a>;
}

function SidebarFooter({ dark, onToggleTheme }) {
  return (
    <div className="mt-auto pt-8">
      <div className="flex items-center justify-between rounded-lg px-3 py-2.5">
        <a href="#settings" className="flex items-center gap-3 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"><MorphIcon icon={tablerIcons.settings} reducedMotion="user" className="size-[18px] stroke-[1.6]" /><span>Settings</span></a>
        <button type="button" aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={dark} onClick={onToggleTheme} className="flex size-8 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"><MorphIcon icon={dark ? tablerIcons.moon : tablerIcons.sun} spring="snappy" reducedMotion="user" className="size-[18px]" /></button>
      </div>
      <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700/70">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-2.5 dark:border-slate-800 dark:bg-slate-900"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#2ec4b6] text-xs font-bold text-[#071018]">TU</span><div className="min-w-0 flex-1 leading-tight"><p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">Test User</p><p className="truncate text-xs text-slate-500 dark:text-slate-400">test.user@example.com</p></div><button type="button" aria-label="Sign out" className="flex size-8 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-200"><MorphIcon icon={tablerIcons.logout} reducedMotion="user" className="size-[18px] stroke-[1.6]" /></button></div>
      </div>
    </div>
  );
}

function SidebarContent({ activeItem, onClose, mobileOpen = false, dark, onToggleTheme }) {
  return (
    <>
      <div className="flex items-center justify-between px-3 pb-10">
        <div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center rounded-xl bg-[#2ec4b6] text-sm font-bold text-[#071018]">N</span><span className="truncate text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50">Nexo UI</span></div>
        {onClose && <button type="button" onClick={onClose} aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"><MorphIcon icon={mobileOpen ? tablerIcons.x : tablerIcons.menu2} reducedMotion="user" className="size-4" /></button>}
      </div>
      <nav aria-label="Primary navigation"><p className="mb-3 px-3 font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase dark:text-slate-400">General</p><div className="space-y-0.5">{navigation.map((item) => <SidebarItem key={item.label} item={item} activeItem={activeItem} onSelect={onClose} />)}</div></nav>
      <div className="mt-8"><p className="mb-3 px-3 text-xs font-semibold text-slate-500 dark:text-slate-400">Workspaces</p><div className="space-y-0.5">{workspaces.map((workspace) => <a key={workspace.name} href={'#' + workspace.name.toLowerCase().replaceAll(' ', '-')} onClick={onClose} className="flex items-center rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"><span className="min-w-0"><span className="block truncate">{workspace.name}</span><span className="block truncate text-[10px] font-normal text-slate-400 dark:text-slate-500">{workspace.description}</span></span></a>)}</div></div>
      <SidebarFooter dark={dark} onToggleTheme={onToggleTheme} />
    </>
  );
}

export default function ApplicationShellWithBreadcrumb({ children, activeItem = 'Dashboard', items = [] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const closeNavigation = () => setMobileOpen(false);

  return (
    <div className={dark ? 'dark' : ''}>
    <div className="relative flex min-h-[520px] w-full overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-[0_14px_40px_rgb(15_23_42/0.08)] dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
      {mobileOpen && <button type="button" onClick={closeNavigation} aria-label="Close navigation overlay" className="absolute inset-0 z-30 bg-slate-950/35 backdrop-blur-[2px] md:hidden" />}
      <aside className="hidden min-h-[520px] w-[272px] shrink-0 flex-col border-r border-slate-200 bg-[#FAFAF8] px-4 py-6 text-slate-600 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 md:flex"><SidebarContent activeItem={activeItem} dark={dark} onToggleTheme={() => setDark((current) => !current)} /></aside>
      <aside className={'absolute inset-y-0 left-0 z-40 flex w-[272px] flex-col border-r border-slate-200 bg-[#FAFAF8] px-4 py-6 text-slate-600 shadow-2xl shadow-slate-900/10 transition-transform duration-300 md:hidden dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 ' + (mobileOpen ? 'translate-x-0' : '-translate-x-full')}><SidebarContent activeItem={activeItem} onClose={closeNavigation} mobileOpen={mobileOpen} dark={dark} onToggleTheme={() => setDark((current) => !current)} /></aside>
      <div className="flex min-h-[520px] min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 hidden min-h-[58px] items-center border-b border-slate-200/70 bg-white/85 px-6 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/85 md:flex"><BreadcrumbTrail items={items} /></header>
        <header className="flex min-h-[58px] items-center justify-between border-b border-slate-200/70 bg-white px-4 dark:border-slate-800/70 dark:bg-slate-950 md:hidden"><button type="button" onClick={() => setMobileOpen(true)} aria-label="Open navigation" className="flex size-9 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"><MorphIcon icon={tablerIcons.menu2} reducedMotion="user" className="size-5" /></button><span className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">Nexo UI</span><span className="size-9" /></header>
        <main className="flex min-h-[462px] flex-1 flex-col bg-slate-50 p-4 dark:bg-slate-900 sm:p-6"><div aria-label="Dashboard workspace" className="flex min-h-[400px] flex-1 flex-col rounded-xl border border-dashed border-slate-300 bg-[repeating-linear-gradient(135deg,transparent_0,transparent_10px,rgb(100_116_139/0.08)_10px,rgb(100_116_139/0.08)_12px)] p-5 dark:border-slate-700/80 dark:bg-slate-900/60 dark:bg-[repeating-linear-gradient(135deg,transparent_0,transparent_10px,rgb(148_163_184/0.08)_10px,rgb(148_163_184/0.08)_12px)]">{children}</div></main>
      </div>
    </div>
    </div>
  );
}`;
