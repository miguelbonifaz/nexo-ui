export const inputSnippet = String.raw`import { useState } from 'react';

export default function Input({ label, hint, ...props }) {
  return (
    <label className="block">
      {label && (
        <span className="mb-2 block text-xs font-semibold tracking-[0.08em] text-slate-500 uppercase">
          {label}
        </span>
      )}
      <input
        className="block h-11 w-full rounded-xl border-2 border-slate-200 bg-white px-3.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:bg-slate-100"
        {...props}
      />
      {hint && <span className="mt-2 block text-xs text-slate-400">{hint}</span>}
    </label>
  );
}

export function InputExample() {
  const [value, setValue] = useState('');

  return (
    <Input
      label="Project name"
      value={value}
      onChange={(event) => setValue(event.target.value)}
      placeholder="Enter a project name"
    />
  );
}`;
