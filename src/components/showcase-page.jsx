import Link from 'next/link';
import { absoluteUrl } from '@/lib/site-config';
import ShowcaseApp from './showcase-app';
import ShowcaseSidebar from './showcase-sidebar';

function breadcrumbJsonLd(component) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Components', item: absoluteUrl('/components') },
      { '@type': 'ListItem', position: 3, name: component.title, item: absoluteUrl(`/components/${component.groupId}`) },
    ],
  };
}

export default function ShowcasePage({ group }) {
  const component = group.components[0];
  const jsonLd = JSON.stringify(breadcrumbJsonLd(component)).replace(/</g, '\\u003c');

  return (
    <div className="min-h-screen bg-[#070a10] text-slate-100">
      <ShowcaseSidebar activeId={component.id} />
      <div className="min-h-screen lg:pl-[252px]">
        <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-white/[0.08] bg-[#070a10]/90 px-5 pl-16 backdrop-blur-xl sm:px-8 sm:pl-8 lg:px-12">
          <div>
            <span className="hidden font-mono text-[10px] font-semibold tracking-[0.15em] text-slate-500 uppercase sm:block">React &amp; Tailwind CSS / {component.section}</span>
            <span className="font-mono text-[10px] font-semibold tracking-[0.15em] text-slate-500 uppercase sm:hidden">Nexo UI</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-400"><span className="hidden items-center gap-2 rounded-full border border-white/[0.1] px-3 py-1.5 sm:flex"><span className="size-1.5 rounded-full bg-emerald-400" />Live preview</span><span className="font-mono text-[10px] text-slate-600">React / JSX</span></div>
        </header>

        <main className="nexo-grid min-h-[calc(100vh-72px)] px-5 py-10 sm:px-8 sm:py-14 lg:px-12">
          <div className="mx-auto max-w-[1320px]">
            <nav aria-label="Breadcrumb" className="text-xs text-slate-500">
              <Link href="/" className="transition hover:text-slate-200">Home</Link>
              <span className="mx-2 text-slate-700">/</span>
              <Link href="/components" className="transition hover:text-slate-200">Components</Link>
              <span className="mx-2 text-slate-700">/</span>
              <span aria-current="page" className="text-slate-300">{component.title}</span>
            </nav>
            <div className="nexo-enter mb-10 mt-8 max-w-4xl">
              <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-cyan-300 uppercase">{component.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-6xl">{component.seoHeading}</h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">{component.seoDescription}</p>
            </div>

        <ShowcaseApp key={group.id} group={group} />
            <footer className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.08] pt-5 text-xs text-slate-500">
              <span>React &amp; Tailwind CSS / {component.title}</span>
              <Link href="/components" className="transition hover:text-slate-300">Browse all components</Link>
            </footer>
          </div>
        </main>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </div>
  );
}
