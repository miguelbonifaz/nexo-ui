import { tablerIconSnippet } from './tabler-icons';

const iconPreamble = tablerIconSnippet(['eye']);

export const tableSnippet = String.raw`${iconPreamble}

export const records = [
  { id: 'Q-1048', customer: 'Olivia Carter', product: 'Artisan Sourdough Loaf', deliveryDate: 'Oct 18, 2026', price: '$18.00', status: 'Pending' },
  { id: 'Q-1047', customer: 'Noah Bennett', product: 'Morning Pastry Box', deliveryDate: 'Oct 21, 2026', price: '$34.00', status: 'In Review' },
  { id: 'Q-1046', customer: 'Mia Brooks', product: 'Cinnamon Roll Bundle', deliveryDate: 'Oct 25, 2026', price: '$26.00', status: 'Confirmed' },
  { id: 'Q-1045', customer: 'James Rivera', product: 'Wholegrain Bread Basket', deliveryDate: 'Oct 28, 2026', price: '$29.00', status: 'Finalized' },
];

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

export default function Table({ records: providedRecords, onOpen }) {
  const rows = providedRecords ?? records;

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
            {rows.map((record) => (
              <tr key={record.id} className="hover:bg-slate-50">
                <td className="px-5 py-4 font-semibold text-slate-900">{record.customer}</td>
                <td className="px-5 py-4 text-slate-600">{record.product}</td>
                <td className="px-5 py-4 text-slate-600">{record.deliveryDate}</td>
                <td className="px-5 py-4 font-medium text-slate-900">{record.price}</td>
                <td className="px-5 py-4"><StatusBadge status={record.status} /></td>
                <td className="px-5 py-4 text-right">
                  <button type="button" onClick={() => onOpen(record)} aria-label={'View ' + record.customer}>
                    <IconEye aria-hidden="true" size={16} className="text-slate-400" />
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
