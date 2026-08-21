export default function Input({ label, hint, className = '', ...props }) {
  return (
    <label className="block">
      {label && (
        <span className="mb-2 block text-xs font-semibold tracking-[0.08em] text-slate-500 uppercase">
          {label}
        </span>
      )}
      <input
        className={`block h-11 w-full rounded-xl border border-slate-200 bg-white px-3.5 text-sm text-slate-900 shadow-[0_1px_2px_rgb(15_23_42/0.03)] outline-none transition duration-200 placeholder:text-slate-400 focus:border-slate-400 focus:ring-4 focus:ring-slate-900/[0.06] disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 ${className}`}
        {...props}
      />
      {hint && <span className="mt-2 block text-xs text-slate-400">{hint}</span>}
    </label>
  );
}
