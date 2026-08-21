export const tableSnippet = String.raw`import { Eye } from 'lucide-react';

const statusStyles = {
  Pending: 'bg-amber-50 text-amber-700',
  'In Review': 'bg-blue-50 text-blue-700',
  Confirmed: 'bg-emerald-50 text-emerald-700',
};

function StatusBadge({ status }) {
  return (
    <span className={'rounded-full px-2.5 py-1 text-xs font-semibold ' + statusStyles[status]}>
      {status}
    </span>
  );
}

export default function Table({ records, onOpen }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
            <tr>
              <th className="px-5 py-3">Customer</th>
              <th className="px-5 py-3">Product</th>
              <th className="px-5 py-3">Delivery</th>
              <th className="px-5 py-3">Price</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-slate-50">
                <td className="px-5 py-4 font-semibold text-slate-900">{record.customer}</td>
                <td className="px-5 py-4 text-slate-600">{record.product}</td>
                <td className="px-5 py-4 text-slate-600">{record.deliveryDate}</td>
                <td className="px-5 py-4 font-medium text-slate-900">{record.price}</td>
                <td className="px-5 py-4"><StatusBadge status={record.status} /></td>
                <td className="px-5 py-4 text-right">
                  <button type="button" onClick={() => onOpen(record)} aria-label={'View ' + record.customer}>
                    <Eye className="size-4 text-slate-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}`;
