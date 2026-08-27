export const kanbanSnippet = String.raw`const columns = [
  {
    id: 'pending',
    title: 'Pending',
    tone: 'amber',
    cards: [
      { id: 'Q-1048', customer: 'Olivia Carter', phone: '+1 415 555 0182', cake: 'Lemon blossom cake', detail: '24 portions · Vanilla cream', deliveryDate: 'Oct 18, 2026' },
    ],
  },
  { id: 'review', title: 'In Review', tone: 'blue', cards: [] },
  { id: 'confirmed', title: 'Confirmed', tone: 'emerald', cards: [] },
];

const toneClasses = {
  amber: 'bg-amber-400 ring-amber-100',
  blue: 'bg-blue-500 ring-blue-100',
  emerald: 'bg-emerald-500 ring-emerald-100',
};

export default function Kanban({ columns: providedColumns = columns }) {
  return (
    <div className="overflow-x-auto pb-3">
      <div className="grid min-w-[900px] grid-cols-3 gap-4">
        {providedColumns.map((column) => (
          <section key={column.id} className="flex min-h-[560px] min-w-0 flex-col rounded-2xl bg-slate-100/75 p-3">
            <header className="flex items-center justify-between px-1.5 pt-1 pb-4">
              <div className="flex items-center gap-3">
                <span className={'size-2.5 rounded-full ring-4 ' + toneClasses[column.tone]} />
                <h2 className="text-sm font-semibold text-slate-900">{column.title}</h2>
              </div>
              <span className="flex size-6 items-center justify-center rounded-full bg-slate-200/70 text-xs font-medium text-slate-500">{column.cards.length}</span>
            </header>
            <div className="min-h-20 space-y-3">
              {column.cards.map((card) => (
                <article key={card.id} className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgb(15_23_42/0.06)] ring-1 ring-slate-200/70">
                  <header className="px-4 pt-4 pb-3">
                    <h3 className="text-sm font-semibold tracking-tight text-slate-900">{card.customer}</h3>
                    <p className="mt-1 text-xs text-slate-400">{card.phone}</p>
                  </header>
                  <div className="space-y-2 border-y border-slate-100 px-4 py-4 text-sm text-slate-500">
                    <p>{card.cake}</p>
                    <p>{card.detail}</p>
                  </div>
                  <footer className="flex items-center justify-between gap-3 px-4 pt-3 pb-4">
                    <p className="text-sm text-slate-500">{card.deliveryDate}</p>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600">{column.title}</span>
                  </footer>
                </article>
              ))}
              {column.cards.length === 0 && <p className="rounded-xl border border-dashed border-slate-200 px-4 py-6 text-center text-xs text-slate-400">No records</p>}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}`;
