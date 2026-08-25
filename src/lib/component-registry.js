import { componentMeta } from './component-data';
import { applicationShellSnippet } from './snippets/application-shell';
import { breadcrumbSnippet } from './snippets/breadcrumb';
import { detailModalSnippet } from './snippets/detail-modal';
import { inputSnippet } from './snippets/input';
import { paginationSnippet } from './snippets/pagination';
import { tableSnippet } from './snippets/table';

export const componentRegistry = [
  { id: 'application-shell', ...componentMeta['application-shell'], code: applicationShellSnippet },
  { id: 'breadcrumb', ...componentMeta.breadcrumb, code: breadcrumbSnippet },
  { id: 'input', ...componentMeta.input, code: inputSnippet },
  { id: 'table', ...componentMeta.table, code: tableSnippet },
  { id: 'pagination', ...componentMeta.pagination, code: paginationSnippet },
  {
    id: 'detail-modal',
    ...componentMeta['detail-modal'],
    code: detailModalSnippet,
  },
];

export function getComponentById(id) {
  return componentRegistry.find((component) => component.id === id);
}
