const defaultColumns = [
  {
    id: 'pending',
    title: 'Pending',
    tone: 'amber',
    cards: [
      { id: 'Q-1048', customer: 'Olivia Carter', phone: '+1 415 555 0182', cake: 'Lemon blossom cake', detail: '24 portions · Vanilla cream', deliveryDate: 'Oct 18, 2026' },
      { id: 'Q-1044', customer: 'Liam Foster', phone: '+1 415 555 0124', cake: 'Chocolate celebration cake', detail: '18 portions · Raspberry filling', deliveryDate: 'Oct 22, 2026' },
    ],
  },
  {
    id: 'review',
    title: 'In Review',
    tone: 'blue',
    cards: [{ id: 'Q-1047', customer: 'Noah Bennett', phone: '+1 415 555 0146', cake: 'Vanilla berry cake', detail: '36 portions · Strawberry cream', deliveryDate: 'Oct 21, 2026' }],
  },
  {
    id: 'confirmed',
    title: 'Confirmed',
    tone: 'emerald',
    cards: [{ id: 'Q-1046', customer: 'Mia Brooks', phone: '+1 415 555 0168', cake: 'Cinnamon roll cake', detail: '20 portions · Cream cheese', deliveryDate: 'Oct 25, 2026' }],
  },
];

const toneClasses = {
  amber: 'bg-amber-400 ring-amber-100 dark:ring-amber-400/15',
  blue: 'bg-blue-500 ring-blue-100 dark:ring-blue-400/15',
  emerald: 'bg-emerald-500 ring-emerald-100 dark:ring-emerald-400/15',
  rose: 'bg-rose-500 ring-rose-100 dark:ring-rose-400/15',
};

export default function Kanban({ columns = defaultColumns }) {
  return (
    <div className="overflow-x-auto pb-3">
      <div className="grid min-w-[900px] grid-cols-3 gap-4">
        {columns.map((column) => <KanbanColumn key={column.id} column={column} />)}
      </div>
    </div>
  );
}

function KanbanColumn({ column }) {
  const cards = column.cards ?? [];

  return (
    <section className="flex min-h-[560px] min-w-0 flex-col rounded-2xl bg-slate-100/75 p-3 dark:bg-slate-900/55">
      <header className="flex items-center justify-between px-1.5 pt-1 pb-4">
        <div className="flex items-center gap-3">
          <span className={`size-2.5 rounded-full ring-4 ${toneClasses[column.tone] ?? toneClasses.blue}`} />
          <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100">{column.title}</h2>
        </div>
        <span className="flex size-6 items-center justify-center rounded-full bg-slate-200/70 text-xs font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400">{cards.length}</span>
      </header>
      <div className="min-h-20 space-y-3">
        {cards.map((card) => <KanbanCard key={card.id} card={card} status={column.title} />)}
        {cards.length === 0 && <p className="rounded-xl border border-dashed border-slate-200 px-4 py-6 text-center text-xs text-slate-400 dark:border-slate-800 dark:text-slate-500">No records</p>}
      </div>
    </section>
  );
}

function KanbanCard({ card, status }) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgb(15_23_42/0.06)] ring-1 ring-slate-200/70 dark:bg-slate-900 dark:shadow-none dark:ring-slate-800">
      <header className="px-4 pt-4 pb-3">
        <h3 className="text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100">{card.customer}</h3>
        <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{card.phone}</p>
      </header>
      <div className="space-y-2 border-y border-slate-100 px-4 py-4 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <p>{card.cake}</p>
        <p>{card.detail}</p>
      </div>
      <footer className="flex items-center justify-between gap-3 px-4 pt-3 pb-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">{card.deliveryDate}</p>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">{status}</span>
      </footer>
    </article>
  );
}
