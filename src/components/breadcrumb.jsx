import { tablerIcons } from '@/lib/tabler-icons';
import NexoIcon from './nexo-icon';

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && <NexoIcon icon={tablerIcons.chevronRight} aria-hidden="true" className="size-3.5 text-slate-300 dark:text-slate-600" />}
              {isCurrent ? (
                  <span aria-current="page" className="font-semibold text-slate-900 dark:text-slate-100">
                  {item.label}
                </span>
              ) : (
                  <a href={item.href ?? '#'} className="text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100">
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
