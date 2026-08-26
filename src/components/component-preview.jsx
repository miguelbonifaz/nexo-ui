import ApplicationShellShowcase from './application-shell-showcase';
import ApplicationShellBreadcrumbShowcase from './application-shell-breadcrumb-showcase';
import BreadcrumbShowcase from './breadcrumb-showcase';
import DetailModal from './detail-modal';
import DetailModalShowcase from './detail-modal-showcase';
import InputShowcase from './input-showcase';
import PaginationShowcase from './pagination-showcase';
import TableShowcase from './table-showcase';

export default function ComponentPreview({
  componentId,
  dark,
  onToggleTheme,
  onOpenDetail,
  modalOpen,
  onClose,
  modalPreviewRecord,
}) {
  const shellProps = { dark, onToggleTheme };

  if (componentId === 'application-shell') return <ApplicationShellShowcase {...shellProps} />;
  if (componentId === 'application-shell-breadcrumb') return <ApplicationShellBreadcrumbShowcase {...shellProps} />;
  if (componentId === 'breadcrumb') return <BreadcrumbShowcase />;
  if (componentId === 'input') return <InputShowcase />;
  if (componentId === 'pagination') return <PaginationShowcase />;
  if (componentId === 'detail-modal') {
    return (
      <DetailModalShowcase onOpen={onOpenDetail}>
        <DetailModal key={modalOpen ? 'open' : 'closed'} dark={dark} record={modalPreviewRecord} open={modalOpen} onClose={onClose} withinCanvas />
      </DetailModalShowcase>
    );
  }

  return <TableShowcase onSelectRecord={onOpenDetail} />;
}
