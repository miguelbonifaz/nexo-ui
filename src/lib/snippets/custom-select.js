import { tablerIconSnippet } from './tabler-icons';

const iconPreamble = tablerIconSnippet(['check', 'chevronDown']);

export const customSelectSnippet = String.raw`'use client';

import { useEffect, useId, useRef, useState } from 'react';
${iconPreamble}

function toSelectedValues(value, multiple) {
  if (multiple) return Array.isArray(value) ? value : value ? [value] : [];
  return Array.isArray(value) ? value.slice(0, 1) : value ? [value] : [];
}

function firstEnabledIndex(options) {
  return options.findIndex((option) => !option.disabled);
}

function nextEnabledIndex(options, currentIndex, direction) {
  if (!options.length) return -1;

  const startIndex = currentIndex >= 0 ? currentIndex : direction > 0 ? -1 : options.length;

  for (let step = 1; step <= options.length; step += 1) {
    const index = (startIndex + (direction * step) + options.length) % options.length;
    if (!options[index].disabled) return index;
  }

  return currentIndex;
}

export default function CustomSelect({
  label,
  hint,
  options = [],
  value,
  defaultValue,
  onChange,
  placeholder = 'Select an option',
  multiple = false,
  disabled = false,
  className = '',
  id,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
}) {
  const generatedId = useId();
  const selectId = id || 'custom-select-' + generatedId;
  const labelId = selectId + '-label';
  const hintId = selectId + '-hint';
  const listboxId = selectId + '-listbox';
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [internalValue, setInternalValue] = useState(() => (multiple ? defaultValue || [] : defaultValue || ''));
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const selectedValue = value === undefined ? internalValue : value;
  const selectedValues = toSelectedValues(selectedValue, multiple);
  const selectedOptions = options.filter((option) => selectedValues.includes(option.value));
  const hasSelection = selectedOptions.length > 0;
  const displayValue = !hasSelection
    ? placeholder
    : multiple && selectedOptions.length > 1
      ? selectedOptions.length + ' selected'
      : selectedOptions[0].label;
  const describedBy = [ariaDescribedBy, hint ? hintId : ''].filter(Boolean).join(' ') || undefined;

  useEffect(() => {
    if (!open) return undefined;

    function handlePointerDown(event) {
      if (!rootRef.current || !rootRef.current.contains(event.target)) setOpen(false);
    }

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [open]);

  function openMenu() {
    if (disabled) return;

    const selectedIndex = options.findIndex((option) => selectedValues.includes(option.value) && !option.disabled);
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : firstEnabledIndex(options));
    setOpen(true);
  }

  function closeMenu(restoreFocus = false) {
    setOpen(false);
    if (restoreFocus) triggerRef.current?.focus();
  }

  function commitValue(nextValue) {
    if (value === undefined) setInternalValue(nextValue);
    onChange?.(nextValue);
  }

  function selectOption(option, index) {
    if (option.disabled) return;

    setActiveIndex(index);
    if (multiple) {
      const nextValue = selectedValues.includes(option.value)
        ? selectedValues.filter((selected) => selected !== option.value)
        : [...selectedValues, option.value];
      commitValue(nextValue);
      return;
    }

    commitValue(option.value);
    closeMenu(true);
  }

  function handleKeyDown(event) {
    if (disabled) return;

    if (!open && ['Enter', ' ', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
      event.preventDefault();
      openMenu();
      return;
    }

    if (!open) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      closeMenu(true);
      return;
    }
    if (event.key === 'Tab') {
      setOpen(false);
      return;
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((current) => nextEnabledIndex(options, current, event.key === 'ArrowDown' ? 1 : -1));
      return;
    }
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      setActiveIndex(event.key === 'Home' ? firstEnabledIndex(options) : nextEnabledIndex(options, 0, -1));
      return;
    }
    if (['Enter', ' '].includes(event.key) && activeIndex >= 0) {
      event.preventDefault();
      selectOption(options[activeIndex], activeIndex);
    }
  }

  return (
    <div ref={rootRef} className={'relative ' + className}>
      {label && <span id={labelId} className="mb-2 block text-xs font-semibold tracking-[0.08em] text-slate-500 uppercase">{label}</span>}
      <button
        ref={triggerRef}
        id={selectId}
        type="button"
        role="combobox"
        disabled={disabled}
        aria-expanded={open}
        aria-controls={listboxId}
        aria-haspopup="listbox"
        aria-activedescendant={open && activeIndex >= 0 ? selectId + '-option-' + activeIndex : undefined}
        aria-labelledby={ariaLabelledBy || (label ? labelId : undefined)}
        aria-label={label ? undefined : ariaLabel || 'Select an option'}
        aria-describedby={describedBy}
        className={'flex h-11 w-full items-center justify-between gap-3 rounded-xl border bg-white px-3.5 text-left text-sm shadow-[0_1px_2px_rgb(15_23_42/0.03)] outline-none transition-[border-color,box-shadow] focus-visible:border-cyan-300 focus-visible:ring-2 focus-visible:ring-cyan-300/25 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 ' + (open ? 'border-cyan-300 ring-2 ring-cyan-300/25' : 'border-slate-200 text-slate-900') + (hasSelection ? '' : ' text-slate-400')}
        onClick={() => (open ? closeMenu() : openMenu())}
        onKeyDown={handleKeyDown}
      >
        <span className="truncate">{displayValue}</span>
        <IconChevronDown aria-hidden="true" size={16} className={'shrink-0 text-slate-400 transition-transform ' + (open ? 'rotate-180' : '')} />
      </button>
      {hint && <span id={hintId} className="mt-2 block text-xs text-slate-400">{hint}</span>}
      {open && (
        <div id={listboxId} role="listbox" aria-label={label || 'Options'} aria-multiselectable={multiple || undefined} className="absolute top-full z-20 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_16px_40px_rgb(15_23_42/0.16)]">
          {options.length === 0 ? (
            <div role="option" aria-selected="false" aria-disabled="true" className="px-3 py-2.5 text-sm text-slate-400">No options available</div>
          ) : options.map((option, index) => {
            const isSelected = selectedValues.includes(option.value);
            const isActive = index === activeIndex;

            return (
              <div
                key={option.value}
                id={selectId + '-option-' + index}
                role="option"
                tabIndex={-1}
                aria-selected={isSelected}
                aria-disabled={option.disabled || undefined}
                className={'flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ' + (option.disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer') + ' ' + (isActive ? 'bg-slate-100 text-slate-900' : 'text-slate-600') + (isSelected ? ' font-semibold' : '')}
                onMouseDown={(event) => event.preventDefault()}
                onMouseEnter={() => !option.disabled && setActiveIndex(index)}
                onClick={() => selectOption(option, index)}
              >
                <span className="truncate">{option.label}</span>
                {isSelected && <IconCheck aria-hidden="true" size={16} className="shrink-0 text-cyan-500" />}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

const orderExtras = [
  { value: 'insulated-bag', label: 'Insulated bag' },
  { value: 'handwritten-note', label: 'Handwritten note' },
  { value: 'extra-sourdough', label: 'Extra sourdough loaf' },
];

export function CustomSelectExample() {
  const [values, setValues] = useState(['insulated-bag', 'handwritten-note']);

  return (
    <CustomSelect
      label="Order extras"
      options={orderExtras}
      multiple
      value={values}
      onChange={setValues}
    />
  );
}

export function CustomSelectSingleExample() {
  const [value, setValue] = useState('tomorrow');

  return (
    <CustomSelect
      label="Delivery window"
      options={[
        { value: 'today', label: 'Today · 4–6 PM' },
        { value: 'tomorrow', label: 'Tomorrow · 9–11 AM' },
      ]}
      value={value}
      onChange={setValue}
    />
  );
}`;
