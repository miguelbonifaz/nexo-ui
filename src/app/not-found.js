import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="nexo-grid flex min-h-screen items-center justify-center px-5 py-16 text-slate-100 sm:px-8">
      <div className="max-w-lg text-center">
        <p className="font-mono text-[11px] font-semibold tracking-[0.16em] text-cyan-300 uppercase">404 / Not found</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-white">That component does not exist.</h1>
        <p className="mt-5 text-base leading-7 text-slate-400">Return to the component library and choose a reusable React pattern.</p>
        <Link href="/components" className="mt-8 inline-flex rounded-lg bg-cyan-300 px-4 py-3 text-sm font-semibold text-[#071018] transition hover:bg-cyan-200">Browse components</Link>
      </div>
    </main>
  );
}
