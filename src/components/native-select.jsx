import { useId } from 'react';
import { tablerIcons } from '@/lib/tabler-icons';
import NexoIcon from './nexo-icon';

export default function NativeSelect({
  label,
  hint,
  options = [],
  placeholder = 'Select an option',
  multiple = false,
  className = '',
  id,
  'aria-describedby': ariaDescribedBy,
  ...props
}) {
  const generatedId = useId();
  const selectId = id ?? `native-select-${generatedId}`;
  const hintId = `${selectId}-hint`;
  const describedBy = [ariaDescribedBy, hint ? hintId : ''].filter(Boolean).join(' ') || undefined;
  const selectClasses = multiple
    ? 'min-h-28 py-2'
    : 'h-11 appearance-none pr-10';

  return (
    <label htmlFor={selectId} className="block">
      {label && <span className="mb-2 block text-xs font-semibold tracking-[0.08em] text-slate-500 uppercase dark:text-slate-400">{label}</span>}
      <span className="relative block">
        <select
          id={selectId}
          multiple={multiple}
          aria-describedby={describedBy}
          className={`block w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 shadow-[0_1px_2px_rgb(15_23_42/0.03)] outline-none focus:border-cyan-300 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100 dark:disabled:bg-slate-800 dark:disabled:text-slate-500 ${selectClasses} ${className}`}
          {...props}
        >
          {!multiple && <option value="" disabled>{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        {!multiple && <NexoIcon icon={tablerIcons.chevronDown} aria-hidden="true" className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-slate-400 dark:text-slate-500" />}
      </span>
      {hint && <span id={hintId} className="mt-2 block text-xs text-slate-400 dark:text-slate-500">{hint}</span>}
    </label>
  );
}
