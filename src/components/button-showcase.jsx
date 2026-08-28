'use client';

import { useState } from 'react';
import { tablerIcons } from '@/lib/tabler-icons';
import Button from './button';
import NexoIcon from './nexo-icon';

const sizes = [
  { value: 'xl', label: 'XL' },
  { value: 'lg', label: 'LG' },
  { value: 'md', label: 'MD' },
  { value: 'sm', label: 'SM' },
];

export default function ButtonShowcase({ variant = 'solid' }) {
  const [message, setMessage] = useState('Buttons are ready to use.');
  const variantLabel = variant === 'outline' ? 'Outline' : 'Solid';

  function handleClick(label) {
    setMessage(`${label} clicked`);
  }

  return (
    <div className="flex min-h-[300px] items-center justify-center px-4 py-8 sm:px-8">
      <div className="w-full max-w-3xl">
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:grid-cols-4">
          {sizes.map((size) => (
            <div key={size.value} className="flex min-w-0 flex-col items-start gap-2">
              <Button variant={variant} size={size.value} onClick={() => handleClick(`${variantLabel} ${size.label}`)}>Place order</Button>
              <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-slate-400 uppercase">{size.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-slate-200/80 pt-6 dark:border-slate-800">
          <Button variant={variant} size="md" onClick={() => handleClick('Create product')}>Create product</Button>
          <Button variant="outline" size="md" type="button" onClick={() => handleClick('Cancel')}>Cancel</Button>
          <Button
            variant={variant}
            size="md"
            icon={<NexoIcon icon={tablerIcons.arrowUpRight} className="size-full" />}
            onClick={() => handleClick('Place order')}
          >
            Place order
          </Button>
          <Button variant={variant} size="md" disabled>Disabled</Button>
        </div>
        <p role="status" aria-live="polite" className="mt-5 text-xs text-slate-400 dark:text-slate-500">{message}</p>
      </div>
    </div>
  );
}
