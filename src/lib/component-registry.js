import { componentMeta } from './component-data';
import { applicationShellSnippet } from './snippets/application-shell';
import { applicationShellBreadcrumbSnippet } from './snippets/application-shell-breadcrumb';
import { breadcrumbSnippet } from './snippets/breadcrumb';
import { modalSnippet } from './snippets/modal';
import { inputSnippet } from './snippets/input';
import { kanbanSnippet } from './snippets/kanban';
import { paginationSnippet } from './snippets/pagination';
import { tableSnippet } from './snippets/table';

export const componentRegistry = [
  { id: 'application-shell', ...componentMeta['application-shell'], code: applicationShellSnippet },
  { id: 'application-shell-breadcrumb', ...componentMeta['application-shell-breadcrumb'], code: applicationShellBreadcrumbSnippet },
  { id: 'breadcrumb', ...componentMeta.breadcrumb, code: breadcrumbSnippet },
  { id: 'input', ...componentMeta.input, code: inputSnippet },
  { id: 'kanban', ...componentMeta.kanban, code: kanbanSnippet },
  { id: 'table', ...componentMeta.table, code: tableSnippet },
  { id: 'pagination', ...componentMeta.pagination, code: paginationSnippet },
  {
    id: 'modal',
    ...componentMeta.modal,
    code: modalSnippet,
  },
];

export function getComponentById(id) {
  return componentRegistry.find((component) => component.id === id);
}

export function getComponentGroupById(id) {
  const component = getComponentById(id);
  if (!component) return undefined;

  return {
    id: component.groupId,
    components: componentRegistry.filter((candidate) => candidate.groupId === component.groupId),
  };
}

export function getComponentGroups() {
  return [...new Set(componentRegistry.map((component) => component.groupId))].map(getComponentGroupById);
}
