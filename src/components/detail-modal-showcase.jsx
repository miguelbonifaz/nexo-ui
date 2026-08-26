export default function DetailModalShowcase({ onOpen, children }) {
  return (
    <div className="relative flex min-h-[420px] items-center justify-center overflow-hidden">
      <button
        type="button"
        onClick={onOpen}
        className="inline-flex h-10 items-center justify-center rounded-lg bg-slate-900 px-4 text-sm font-semibold text-white transition hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
      >
        Open detail modal
      </button>
      {children}
    </div>
  );
}
