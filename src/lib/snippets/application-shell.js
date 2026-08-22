export const applicationShellSnippet = String.raw`import {
  BarChart3,
  CalendarDays,
  FileText,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Moon,
  Settings,
  Users,
} from 'lucide-react';

const navigation = [
  { label: 'Dashboard', icon: LayoutDashboard },
  { label: 'Team', icon: Users },
  { label: 'Projects', icon: FolderKanban },
  { label: 'Calendar', icon: CalendarDays },
  { label: 'Documents', icon: FileText },
  { label: 'Reports', icon: BarChart3 },
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
      className={'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors ' + (isActive ? 'bg-slate-100 text-slate-900 dark:bg-slate-800/80 dark:text-[#2ec4b6]' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100')}
    >
      <Icon className={'size-[18px] shrink-0 stroke-[1.6] ' + (isActive ? 'text-slate-900 dark:text-[#2ec4b6]' : 'text-slate-400')} />
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

function SidebarFooter() {
  return (
    <div className="mt-auto pt-8">
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 dark:border-slate-800 dark:bg-slate-900">
        <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">Dark</span>
        <button type="button" aria-label="Toggle color theme" className="relative flex h-[26px] w-12 items-center justify-end rounded-full bg-slate-800 px-[3px] ring-1 ring-slate-700"><span className="flex size-[18px] items-center justify-center rounded-full bg-slate-100 text-slate-900 shadow-sm"><Moon className="size-3" /></span></button>
      </div>
      <a href="#settings" className="mt-4 flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/60 dark:hover:text-slate-100"><Settings className="size-[18px] stroke-[1.6]" /><span>Settings</span></a>
      <div className="mt-4 border-t border-slate-200 pt-4 dark:border-slate-700/70">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-2.5 dark:border-slate-800 dark:bg-slate-900">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#2ec4b6] text-xs font-bold text-[#071018]">TU</span>
          <div className="min-w-0 flex-1 leading-tight"><p className="truncate text-sm font-semibold text-slate-900 dark:text-slate-100">Test User</p><p className="truncate text-xs text-slate-500 dark:text-slate-400">test.user@example.com</p></div>
          <button type="button" aria-label="Sign out" className="flex size-8 shrink-0 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-200"><LogOut className="size-[18px] stroke-[1.6]" /></button>
        </div>
      </div>
    </div>
  );
}

export default function ApplicationShell({ children, activeItem = 'Dashboard' }) {
  return (
    <div className="grid min-h-[520px] w-full grid-cols-[clamp(13rem,22%,22rem)_minmax(0,1fr)] overflow-hidden rounded-xl border border-slate-200 bg-white text-slate-900 shadow-[0_14px_40px_rgb(15_23_42/0.08)] transition-colors dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100">
      <aside className="flex min-h-[520px] min-w-0 flex-col border-r border-slate-200 bg-[#FAFAF8] px-4 py-6 text-slate-600 transition-colors dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
        <div className="flex items-center gap-3 px-3 pb-10"><span className="flex size-9 items-center justify-center rounded-xl bg-[#2ec4b6] text-sm font-bold text-[#071018]">N</span><span className="truncate text-base font-semibold tracking-tight text-slate-50">Nexo UI</span></div>
        <nav aria-label="Primary navigation">
          <p className="mb-3 px-3 font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">General</p>
          <div className="space-y-0.5">{navigation.map((item) => <SidebarItem key={item.label} item={item} activeItem={activeItem} />)}</div>
        </nav>
        <div className="mt-8"><p className="mb-3 px-3 text-xs font-semibold text-slate-400">Workspaces</p><div className="space-y-0.5">{workspaces.map((workspace) => <WorkspaceItem key={workspace.name} workspace={workspace} />)}</div></div>
        <SidebarFooter />
      </aside>
      <main aria-label="Workspace" className="flex min-h-[520px] min-w-0 flex-col bg-slate-50 p-6 transition-colors sm:p-10 dark:bg-slate-900">
        <div aria-label="Dashboard workspace" className="min-h-[420px] flex-1 rounded-xl border border-dashed border-slate-300 bg-[repeating-linear-gradient(135deg,transparent_0,transparent_10px,rgb(100_116_139/0.08)_10px,rgb(100_116_139/0.08)_12px)] transition-colors dark:border-slate-700/80 dark:bg-slate-900/60 dark:bg-[repeating-linear-gradient(135deg,transparent_0,transparent_10px,rgb(148_163_184/0.08)_10px,rgb(148_163_184/0.08)_12px)]">{children}</div>
      </main>
    </div>
  );
}`;
