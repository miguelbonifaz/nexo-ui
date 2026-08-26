export default function Input({ label, hint, className = '', ...props }) {
  return (
    <label className="block">
      {label && (
        <span className="mb-2 block text-xs font-semibold tracking-[0.08em] text-slate-500 uppercase dark:text-slate-400">
          {label}
        </span>
      )}
      <input
        className={`block h-11 w-full rounded-xl border-2 border-slate-200 bg-white px-3.5 text-sm text-slate-900 shadow-[0_1px_2px_rgb(15_23_42/0.03)] outline-none placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:outline-offset-0 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-cyan-300 dark:disabled:bg-slate-800 dark:disabled:text-slate-500 ${className}`}
        {...props}
      />
      {hint && <span className="mt-2 block text-xs text-slate-400">{hint}</span>}
    </label>
  );
}
