import { componentMeta } from './component-data';
import { detailModalSnippet } from './snippets/detail-modal';
import { inputSnippet } from './snippets/input';
import { paginationSnippet } from './snippets/pagination';
import { tableSnippet } from './snippets/table';

export const componentRegistry = [
  { id: 'input', ...componentMeta.input, code: inputSnippet },
  { id: 'table', ...componentMeta.table, code: tableSnippet },
  { id: 'pagination', ...componentMeta.pagination, code: paginationSnippet },
  {
    id: 'detail-modal',
    ...componentMeta['detail-modal'],
    code: detailModalSnippet,
  },
];
