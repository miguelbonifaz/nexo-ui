'use client';

import { MorphIcon } from 'morphicons/react';

export default function NexoIcon({ icon, ...props }) {
  return <MorphIcon icon={icon} {...props} reducedMotion="user" />;
}
