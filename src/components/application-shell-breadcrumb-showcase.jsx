import ApplicationShellWithBreadcrumb from './application-shell-breadcrumb';

const breadcrumbItems = [
  { label: 'Home', href: '#home' },
  { label: 'Dashboard', href: '#dashboard' },
  { label: 'Reports' },
];

export default function ApplicationShellBreadcrumbShowcase(props) {
  return (
    <ApplicationShellWithBreadcrumb {...props} activeItem="Reports" items={breadcrumbItems}>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <p className="font-mono text-[10px] font-semibold tracking-[0.14em] text-slate-400 uppercase dark:text-slate-500">Current workspace</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Reports</h2>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">A calm content area beneath a persistent breadcrumb header.</p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-3"><div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950"><p className="text-xs text-slate-400">Open reports</p><p className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">24</p></div><div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950"><p className="text-xs text-slate-400">This month</p><p className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">86%</p></div><div className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-950"><p className="text-xs text-slate-400">Last updated</p><p className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-100">Today</p></div></div>
      </div>
    </ApplicationShellWithBreadcrumb>
  );
}
