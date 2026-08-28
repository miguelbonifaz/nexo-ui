'use client';

import { useState } from 'react';
import CustomSelect from './custom-select';

const orderExtras = [
  { value: 'insulated-bag', label: 'Insulated bag' },
  { value: 'handwritten-note', label: 'Handwritten note' },
  { value: 'extra-sourdough', label: 'Extra sourdough loaf' },
  { value: 'reusable-crate', label: 'Reusable delivery crate' },
  { value: 'rush-delivery', label: 'Same-day rush delivery', disabled: true },
];

export default function CustomSelectShowcase() {
  const [values, setValues] = useState(['insulated-bag', 'handwritten-note']);

  return (
    <div className="flex min-h-[320px] items-start justify-center px-6 pb-16 pt-14 sm:px-10">
      <div className="w-full max-w-md">
        <CustomSelect
          label="Order extras"
          hint="Add finishing touches to this bakery delivery."
          options={orderExtras}
          multiple
          value={values}
          onChange={setValues}
        />
      </div>
    </div>
  );
}
