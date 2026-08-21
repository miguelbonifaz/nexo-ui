'use client';

import { Search } from 'lucide-react';
import { useState } from 'react';
import Input from './input';

export default function InputShowcase() {
  const [value, setValue] = useState('Olivia Carter');

  return (
    <div className="space-y-8">
      <div className="nexo-input-grid grid gap-5">
        <Input label="Default" placeholder="Enter a value" />
        <Input
          label="With value"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Input label="Disabled" value="Disabled input" disabled />
      </div>

      <div className="border-t border-slate-200 pt-7">
        <div className="mb-4 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-slate-900">Search input</p>
            <p className="mt-1 text-xs text-slate-500">
              A composed input with a leading icon for collection filters.
            </p>
          </div>
          <span className="hidden rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold tracking-[0.08em] text-slate-500 uppercase sm:inline-flex">
            Interactive
          </span>
        </div>
        <label className="relative block max-w-xl">
          <span className="sr-only">Search records</span>
          <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder="Search records..."
            className="h-12 w-full rounded-xl border border-slate-200 bg-white pr-4 pl-10 text-sm text-slate-900 shadow-[0_1px_2px_rgb(15_23_42/0.03)] outline-none transition focus:border-slate-400 focus:ring-4 focus:ring-slate-900/[0.06] placeholder:text-slate-400"
          />
        </label>
      </div>
    </div>
  );
}
