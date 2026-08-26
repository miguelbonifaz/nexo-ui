import { tablerIcons } from '@/lib/tabler-icons';
import NexoIcon from './nexo-icon';

const pages = [1, 2, 3, 'ellipsis', 9, 10, 11];
const itemClasses = 'flex h-9 min-w-9 shrink-0 items-center justify-center border-r border-slate-200 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300';

export default function NumberedPagination() {
  return (
    <nav aria-label="Numbered pagination" className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 transition-colors dark:border-slate-800 dark:bg-slate-950">
      <p className="shrink-0 text-xs text-slate-500 dark:text-slate-400">
        Showing <strong className="font-semibold text-slate-700 dark:text-slate-200">15</strong> to <strong className="font-semibold text-slate-700 dark:text-slate-200">21</strong> of <strong className="font-semibold text-slate-700 dark:text-slate-200">42</strong> records
      </p>
      <div className="w-full min-w-0 overflow-x-auto sm:ml-auto sm:w-auto">
        <div className="flex min-w-max justify-start sm:justify-end">
          <div className="inline-flex min-w-max overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700">
        <span aria-hidden="true" className={`${itemClasses} px-3 text-slate-500 dark:text-slate-400`}>
          <NexoIcon icon={tablerIcons.chevronLeft} className="size-4" />
        </span>
        {pages.map((page) => page === 'ellipsis' ? (
          <span key={page} aria-hidden="true" className={`${itemClasses} min-w-12 px-3 text-slate-400 dark:border-slate-700 dark:text-slate-500`}>
            ...
          </span>
        ) : (
          <span key={page} aria-current={page === 3 ? 'page' : undefined} className={`${itemClasses} ${page === 3 ? 'bg-cyan-300 text-[#071018]' : ''}`}>
            {page}
          </span>
        ))}
        <span aria-hidden="true" className="flex h-9 min-w-9 shrink-0 items-center justify-center px-3 text-slate-500 dark:text-slate-400">
          <NexoIcon icon={tablerIcons.chevronRight} className="size-4" />
        </span>
          </div>
        </div>
      </div>
    </nav>
  );
}
