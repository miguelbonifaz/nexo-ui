import Breadcrumb from './breadcrumb';

const breadcrumbItems = [
  { label: 'Workspace', href: '#workspace' },
  { label: 'Dashboard' },
];

export default function BreadcrumbShowcase() {
  return (
    <div className="bg-white p-5 transition-colors sm:p-7 dark:bg-slate-950">
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
}
