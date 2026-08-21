import Breadcrumb from './breadcrumb';

const breadcrumbItems = [
  { label: 'Workspace', href: '#workspace' },
  { label: 'Dashboard' },
];

export default function BreadcrumbShowcase() {
  return (
    <div className="min-h-[360px] bg-white p-5 transition-colors sm:p-7 dark:bg-slate-950">
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
}
