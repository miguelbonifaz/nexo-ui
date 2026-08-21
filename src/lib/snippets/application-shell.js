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

const teams = ['Heroicons', 'Tailwind Labs', 'Workcation'];

function SidebarItem({ item, activeItem }) {
  const Icon = item.icon;
  const isActive = item.label === activeItem;

  return (
    <a
      href={'#' + item.label.toLowerCase()}
      className={'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold whitespace-nowrap transition ' + (isActive ? 'bg-[#2ec4b6]/10 text-[#2ec4b6]' : 'text-slate-400 hover:bg-white/[0.05] hover:text-slate-100')}
    >
      <Icon className={'size-[18px] shrink-0 stroke-[1.6] ' + (isActive ? 'text-[#2ec4b6]' : 'text-slate-400')} />
      <span className="truncate">{item.label}</span>
    </a>
  );
}

function TeamItem({ name }) {
  return (
    <a href={'#' + name.toLowerCase().replaceAll(' ', '-')} className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-slate-400 transition hover:bg-white/[0.05] hover:text-slate-100">
      <span className="flex size-7 shrink-0 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/70 font-mono text-[10px] text-slate-300">{name[0]}</span>
      <span className="truncate">{name}</span>
    </a>
  );
}

function SidebarFooter() {
  return (
    <div className="mt-auto pt-8">
      <div className="flex items-center justify-between rounded-2xl bg-white/[0.04] px-3.5 py-2.5">
        <span className="font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">Dark</span>
        <button type="button" aria-label="Toggle color theme" className="relative flex h-[26px] w-12 items-center justify-end rounded-full bg-slate-800 px-[3px] ring-1 ring-slate-700"><span className="flex size-[18px] items-center justify-center rounded-full bg-slate-100 text-slate-900 shadow-sm"><Moon className="size-3" /></span></button>
      </div>
      <a href="#settings" className="mt-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-400 transition hover:bg-white/[0.05] hover:text-slate-100"><Settings className="size-[18px] stroke-[1.6]" /><span>Settings</span></a>
      <div className="mt-4 border-t border-slate-700/70 pt-4">
        <div className="flex items-center gap-3 rounded-2xl bg-white/[0.04] p-2.5">
          <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#2ec4b6] text-xs font-bold text-[#071018]">TU</span>
          <div className="min-w-0 flex-1 leading-tight"><p className="truncate text-sm font-semibold text-slate-100">Test User</p><p className="truncate text-xs text-slate-500">test.user@example.com</p></div>
          <button type="button" aria-label="Sign out" className="flex size-8 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-white/[0.08] hover:text-slate-200"><LogOut className="size-[18px] stroke-[1.6]" /></button>
        </div>
      </div>
    </div>
  );
}

export default function ApplicationShell({ children, activeItem = 'Dashboard' }) {
  return (
    <div className="flex min-h-[460px] w-full overflow-hidden bg-white text-slate-900">
      <aside className="flex w-56 shrink-0 flex-col bg-[#0f0f0f] px-3 py-5 text-slate-300">
        <div className="flex items-center gap-3 px-3 pb-10"><span className="flex size-9 items-center justify-center rounded-xl bg-[#2ec4b6] text-sm font-bold text-[#071018]">N</span><span className="truncate text-base font-semibold tracking-tight text-slate-50">Nexo UI</span></div>
        <nav aria-label="Primary navigation">
          <p className="mb-3 px-3 font-mono text-[10px] font-semibold tracking-[0.16em] text-slate-500 uppercase">General</p>
          <div className="space-y-0.5">{navigation.map((item) => <SidebarItem key={item.label} item={item} activeItem={activeItem} />)}</div>
        </nav>
        <div className="mt-8"><p className="mb-3 px-3 text-xs font-semibold text-slate-400">Your teams</p><div className="space-y-0.5">{teams.map((name) => <TeamItem key={name} name={name} />)}</div></div>
        <SidebarFooter />
      </aside>
      <main aria-label="Workspace" className="min-h-[460px] min-w-0 flex-1 bg-white">{children}</main>
    </div>
  );
}`;
