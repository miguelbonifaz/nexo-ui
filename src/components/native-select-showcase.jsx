'use client';

import { useState } from 'react';
import NativeSelect from './native-select';

const deliveryWindows = [
  { value: 'today', label: 'Today · 4–6 PM' },
  { value: 'tomorrow', label: 'Tomorrow · 9–11 AM' },
  { value: 'saturday', label: 'Saturday · 10 AM–12 PM' },
  { value: 'friday', label: 'Friday · Fully booked', disabled: true },
];

export default function NativeSelectShowcase() {
  const [value, setValue] = useState('tomorrow');

  return (
    <div className="flex items-center justify-center px-6 py-8 sm:px-10 sm:py-10">
      <div className="w-full max-w-md">
        <NativeSelect
          label="Delivery window"
          hint="Choose when the bakery should arrive."
          options={deliveryWindows}
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
    </div>
  );
}
