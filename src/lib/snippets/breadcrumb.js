import { tablerIconSnippet } from './tabler-icons';

const iconPreamble = tablerIconSnippet(['chevronRight']);

export const breadcrumbSnippet = String.raw`${iconPreamble}

export default function Breadcrumb({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && <IconChevronRight aria-hidden="true" size={14} className="text-slate-300" />}
              {isCurrent ? (
                <span aria-current="page" className="font-semibold text-slate-900">
                  {item.label}
                </span>
              ) : (
                <a href={item.href ?? '#'} className="text-slate-500 transition hover:text-slate-900">
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}`;
