import ApplicationShellShowcase from './application-shell-showcase';
import ApplicationShellBreadcrumbShowcase from './application-shell-breadcrumb-showcase';
import BreadcrumbShowcase from './breadcrumb-showcase';
import Modal from './modal';
import ModalShowcase from './modal-showcase';
import InputShowcase from './input-showcase';
import KanbanShowcase from './kanban-showcase';
import PaginationShowcase from './pagination-showcase';
import TableShowcase from './table-showcase';

export default function ComponentPreview({
  componentId,
  dark,
  onToggleTheme,
  onOpenModal,
  modalOpen,
  onClose,
  modalPreviewRecord,
}) {
  const shellProps = { dark, onToggleTheme };

  if (componentId === 'application-shell') return <ApplicationShellShowcase {...shellProps} />;
  if (componentId === 'application-shell-breadcrumb') return <ApplicationShellBreadcrumbShowcase {...shellProps} />;
  if (componentId === 'breadcrumb') return <BreadcrumbShowcase />;
  if (componentId === 'input') return <InputShowcase />;
  if (componentId === 'kanban') return <KanbanShowcase />;
  if (componentId === 'pagination') return <PaginationShowcase />;
  if (componentId === 'modal') {
    return (
      <ModalShowcase onOpen={onOpenModal}>
        <Modal key={modalOpen ? 'open' : 'closed'} dark={dark} record={modalPreviewRecord} open={modalOpen} onClose={onClose} withinCanvas />
      </ModalShowcase>
    );
  }

  return <TableShowcase onSelectRecord={onOpenModal} />;
}
