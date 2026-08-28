import ApplicationShellShowcase from './application-shell-showcase';
import ApplicationShellBreadcrumbShowcase from './application-shell-breadcrumb-showcase';
import BreadcrumbShowcase from './breadcrumb-showcase';
import Modal from './modal';
import ModalShowcase from './modal-showcase';
import InputShowcase from './input-showcase';
import ButtonShowcase from './button-showcase';
import BadgeShowcase from './badge-showcase';
import NativeSelectShowcase from './native-select-showcase';
import CustomSelectShowcase from './custom-select-showcase';
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
  if (componentId === 'solid-button') return <ButtonShowcase variant="solid" />;
  if (componentId === 'outline-button') return <ButtonShowcase variant="outline" />;
  if (componentId === 'medium-badge') return <BadgeShowcase size="md" />;
  if (componentId === 'small-badge') return <BadgeShowcase size="sm" />;
  if (componentId === 'medium-rounded-badge') return <BadgeShowcase size="md" rounded />;
  if (componentId === 'small-rounded-badge') return <BadgeShowcase size="sm" rounded />;
  if (componentId === 'medium-bordered-badge') return <BadgeShowcase size="md" bordered />;
  if (componentId === 'small-bordered-badge') return <BadgeShowcase size="sm" bordered />;
  if (componentId === 'medium-rounded-bordered-badge') return <BadgeShowcase size="md" rounded bordered />;
  if (componentId === 'small-rounded-bordered-badge') return <BadgeShowcase size="sm" rounded bordered />;
  if (componentId === 'native-select') return <NativeSelectShowcase />;
  if (componentId === 'custom-select') return <CustomSelectShowcase />;
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
