export default function CodeBlock({ code }) {
  const lines = code.split('\n');

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-[#111927] shadow-[0_16px_50px_rgb(2_6_23/0.18)]">
      <div className="flex items-center justify-between border-b border-slate-700/70 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-rose-400/80" />
          <span className="size-2 rounded-full bg-amber-300/80" />
          <span className="size-2 rounded-full bg-emerald-400/80" />
        </div>
        <span className="font-mono text-[10px] font-semibold tracking-[0.1em] text-slate-400 uppercase">
          JSX
        </span>
      </div>
      <pre className="code-scroll max-h-[620px] overflow-auto px-4 py-5 text-[12px] leading-6 text-slate-300 sm:px-6 sm:text-[13px]">
        <code>
          {lines.map((line, index) => (
            <span key={`${index}-${line}`} className="flex min-w-max">
              <span className="mr-5 w-7 shrink-0 select-none text-right text-slate-600">{index + 1}</span>
              <span>{line || ' '}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
