import { tablerIconSnippet } from './tabler-icons';

const iconPreamble = tablerIconSnippet(['chevronDown']);

export const nativeSelectSnippet = String.raw`'use client';

import { useId, useState } from 'react';
${iconPreamble}

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
  const selectId = id || 'native-select-' + generatedId;
  const hintId = selectId + '-hint';
  const describedBy = [ariaDescribedBy, hint ? hintId : ''].filter(Boolean).join(' ') || undefined;
  const selectClasses = multiple ? 'min-h-28 py-2' : 'h-11 appearance-none pr-10';

  return (
    <label htmlFor={selectId} className="block">
      {label && <span className="mb-2 block text-xs font-semibold tracking-[0.08em] text-slate-500 uppercase">{label}</span>}
      <span className="relative block">
        <select
          id={selectId}
          multiple={multiple}
          aria-describedby={describedBy}
          className={'block w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 shadow-[0_1px_2px_rgb(15_23_42/0.03)] outline-none focus:border-cyan-300 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 ' + selectClasses + ' ' + className}
          {...props}
        >
          {!multiple && <option value="" disabled>{placeholder}</option>}
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        {!multiple && <IconChevronDown aria-hidden="true" size={16} className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-slate-400" />}
      </span>
      {hint && <span id={hintId} className="mt-2 block text-xs text-slate-400">{hint}</span>}
    </label>
  );
}

const deliveryWindows = [
  { value: 'today', label: 'Today · 4–6 PM' },
  { value: 'tomorrow', label: 'Tomorrow · 9–11 AM' },
  { value: 'saturday', label: 'Saturday · 10 AM–12 PM' },
];

export function NativeSelectExample() {
  const [value, setValue] = useState('tomorrow');

  return (
    <NativeSelect
      label="Delivery window"
      options={deliveryWindows}
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  );
}

export function NativeSelectMultipleExample() {
  const [values, setValues] = useState(['insulated-bag']);

  return (
    <NativeSelect
      label="Order extras"
      multiple
      options={[
        { value: 'insulated-bag', label: 'Insulated bag' },
        { value: 'handwritten-note', label: 'Handwritten note' },
      ]}
      value={values}
      onChange={(event) => setValues(Array.from(event.target.selectedOptions, (option) => option.value))}
    />
  );
}`;
