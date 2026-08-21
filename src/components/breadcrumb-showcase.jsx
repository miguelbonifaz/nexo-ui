import Breadcrumb from './breadcrumb';

const breadcrumbItems = [
  { label: 'Workspace', href: '#workspace' },
  { label: 'Dashboard' },
];

export default function BreadcrumbShowcase() {
  return (
    <div className="min-h-[360px] bg-white p-5 sm:p-7">
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
}
