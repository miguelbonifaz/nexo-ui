import Link from 'next/link';
import { tablerIcons } from '@/lib/tabler-icons';
import { getComponentGroups } from '@/lib/component-registry';
import NexoIcon from './nexo-icon';

export default function ComponentIndex() {
  const componentGroups = getComponentGroups();

  return (
    <div className="min-h-screen bg-[#070a10] text-slate-100">
      <header className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3" aria-label="Nexo UI home">
          <span className="flex size-9 items-center justify-center rounded-xl bg-cyan-300 text-[#071018] shadow-[0_0_24px_rgb(103_232_249/0.2)]"><NexoIcon icon={tablerIcons.command} className="size-4" /></span>
          <span><span className="block text-sm font-semibold tracking-tight text-white">Nexo UI</span><span className="block font-mono text-[10px] tracking-[0.08em] text-slate-500 uppercase">Component library</span></span>
        </Link>
        <Link href="/" className="text-xs font-semibold text-slate-400 transition hover:text-white">Back home</Link>
      </header>

      <main className="nexo-grid min-h-[calc(100vh-89px)] px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
        <div className="mx-auto w-full max-w-[1180px]">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
            <Link href="/" className="transition hover:text-slate-200">Home</Link>
            <span className="mx-2 text-slate-700">/</span>
            <span aria-current="page" className="text-slate-300">Components</span>
          </nav>
          <div className="nexo-enter mt-9 max-w-3xl">
            <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-cyan-300 uppercase">React / Tailwind CSS</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-white sm:text-7xl">React &amp; Tailwind CSS components.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">Browse reusable UI patterns with live previews, responsive behavior, and JSX you can adapt to your project.</p>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {componentGroups.map((group, index) => {
              const component = group.components[0];

              return <Link key={group.id} href={`/components/${group.id}`} className="group flex min-h-64 flex-col rounded-2xl border border-white/[0.1] bg-[#0d131e] p-5 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-[#111927]">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] font-semibold tracking-[0.14em] text-slate-600">0{index + 1}</span>
                  <NexoIcon icon={tablerIcons.arrowUpRight} className="size-4 text-slate-600 transition group-hover:text-cyan-300" />
                </div>
                <div className="mt-auto pt-12">
                  <p className="font-mono text-[10px] font-semibold tracking-[0.14em] text-cyan-300 uppercase">{component.section}</p>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight text-white">{component.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{component.seoDescription}</p>
                  {group.components.length > 1 && <p className="mt-3 font-mono text-[10px] font-semibold tracking-[0.12em] text-slate-500 uppercase">{group.components.length} variants</p>}
                </div>
              </Link>;
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
