'use client';

import Input from './input';

export default function InputShowcase() {
  return (
    <div className="flex items-center justify-center px-6 py-6">
      <div className="w-full max-w-md">
        <Input aria-label="Input example" placeholder="olivia.carter@example.com" />
      </div>
    </div>
  );
}
