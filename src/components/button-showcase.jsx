'use client';

import Button from './button';

const sizes = [
  'xl',
  'lg',
  'md',
  'sm',
];

export default function ButtonShowcase({ variant = 'solid' }) {
  return (
    <div className="flex min-h-[300px] items-center justify-center px-4 py-8 sm:px-8">
      <div className="flex w-full items-center justify-center gap-3 overflow-x-auto">
        {sizes.map((size) => (
          <Button key={size} variant={variant} size={size}>Place order</Button>
        ))}
      </div>
    </div>
  );
}
