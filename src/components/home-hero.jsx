import Link from 'next/link';
import { tablerIcons } from '@/lib/tabler-icons';
import NexoIcon from './nexo-icon';

const featuredComponents = [
  { label: 'Application Shell', id: 'application-shell' },
  { label: 'Table', id: 'table' },
  { label: 'Modal', id: 'detail-modal' },
];

export default function HomeHero() {
  return (
    <div className="min-h-screen bg-[#070a10] text-slate-100">
      <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="Nexo UI home">
          <span className="flex size-9 items-center justify-center rounded-xl bg-cyan-300 text-[#071018] shadow-[0_0_24px_rgb(103_232_249/0.2)]">
            <NexoIcon icon={tablerIcons.layersIntersect} className="size-4" />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-tight text-white">Nexo UI</span>
            <span className="block font-mono text-[10px] tracking-[0.08em] text-slate-500 uppercase">Component library</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <a href="https://github.com/miguelbonifaz/nexo-ui" target="_blank" rel="noreferrer" aria-label="Open Nexo UI repository on GitHub" className="inline-flex size-9 items-center justify-center rounded-lg border border-white/[0.12] text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-200">
            <NexoIcon icon={tablerIcons.brandGithub} className="size-4" />
          </a>
          <Link href="/components" className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] px-3 py-2 text-xs font-semibold text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-200">
            Browse components
            <NexoIcon icon={tablerIcons.arrowUpRight} className="size-3.5" />
          </Link>
        </div>
      </header>

      <main className="nexo-grid flex min-h-[calc(100vh-89px)] items-center px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(24rem,0.8fr)] lg:gap-20">
          <section className="nexo-enter max-w-3xl">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-cyan-300 uppercase">React / Tailwind CSS</p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl lg:text-[5.5rem] lg:leading-[0.98]">
              Copy-ready React components built with Tailwind CSS.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Explore responsive React UI components with live previews and code you can adapt to your project.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/components" className="inline-flex items-center gap-2 rounded-lg bg-cyan-300 px-4 py-3 text-sm font-semibold text-[#071018] transition hover:bg-cyan-200">
                Explore components
                <NexoIcon icon={tablerIcons.arrowUpRight} className="size-4" />
              </Link>
              <Link href="/components/table" className="inline-flex items-center gap-2 rounded-lg border border-white/[0.14] px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/30 hover:bg-white/[0.05]">
                Open Table
              </Link>
            </div>
          </section>

          <aside className="nexo-enter-delay-1 rounded-[26px] border border-white/[0.12] bg-[#0d131e]/90 p-3 shadow-[0_24px_90px_rgb(2_6_23/0.32)]">
            <div className="rounded-[20px] border border-white/[0.08] bg-[#111927] p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                  <NexoIcon icon={tablerIcons.code} className="size-4 text-cyan-300" />
                  Nexo UI / JSX
                </div>
                <span className="rounded-full border border-emerald-300/20 px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.1em] text-emerald-300 uppercase">Live preview</span>
              </div>
              <pre className="mt-6 overflow-hidden font-mono text-[11px] leading-6 text-slate-400 sm:text-xs"><code><span className="text-cyan-300">export default</span> <span className="text-violet-300">function</span> <span className="text-amber-300">Table</span>() {'{'}{`\n`}  <span className="text-violet-300">return</span> ({`\n`}    &lt;<span className="text-cyan-300">table</span> className=<span className="text-amber-300">&quot;...&quot;</span> /&gt;{`\n`}  ){`\n`}{'}'}</code></pre>
              <div className="mt-7 grid gap-2 border-t border-white/[0.08] pt-5">
                {featuredComponents.map((component, index) => (
                  <Link key={component.id} href={`/components/${component.id}`} className="group flex items-center justify-between rounded-xl border border-white/[0.06] px-3.5 py-3 transition hover:border-cyan-300/30 hover:bg-white/[0.04]">
                    <span className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-slate-600">0{index + 1}</span>
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white">{component.label}</span>
                    </span>
                    <NexoIcon icon={tablerIcons.arrowUpRight} className="size-3.5 text-slate-600 transition group-hover:text-cyan-300" />
                  </Link>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-2 text-xs text-slate-500">
                <NexoIcon icon={tablerIcons.copy} className="size-3.5 text-cyan-300" />
                Preview, inspect, and adapt the code.
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
