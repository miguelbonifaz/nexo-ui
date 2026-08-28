import Badge from './badge';

const badgeExamples = [
  { tone: 'neutral', label: 'Neutral' },
  { tone: 'error', label: 'Error' },
  { tone: 'warning', label: 'Warning' },
  { tone: 'success', label: 'Success' },
  { tone: 'info', label: 'Info' },
  { tone: 'indigo', label: 'Indigo' },
  { tone: 'purple', label: 'Purple' },
  { tone: 'pink', label: 'Pink' },
];

export default function BadgeShowcase({ size = 'md' }) {
  const resolvedSize = size === 'sm' ? 'sm' : 'md';

  return (
    <div className="@container flex min-h-[180px] items-center justify-center px-5 py-8 sm:px-8">
      <div className="flex w-full max-w-2xl flex-wrap items-center justify-center gap-2.5">
        {badgeExamples.map(({ tone, label }) => <Badge key={tone} size={resolvedSize} tone={tone}>{label}</Badge>)}
      </div>
    </div>
  );
}
