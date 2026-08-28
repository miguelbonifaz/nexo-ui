import { componentMeta } from './component-data';
import { applicationShellSnippet } from './snippets/application-shell';
import { applicationShellBreadcrumbSnippet } from './snippets/application-shell-breadcrumb';
import { breadcrumbSnippet } from './snippets/breadcrumb';
import { modalSnippet } from './snippets/modal';
import { inputSnippet } from './snippets/input';
import { solidButtonSnippet, outlineButtonSnippet } from './snippets/button';
import {
  mediumBadgeSnippet,
  smallBadgeSnippet,
  mediumRoundedBadgeSnippet,
  smallRoundedBadgeSnippet,
  mediumBorderedBadgeSnippet,
  smallBorderedBadgeSnippet,
  mediumRoundedBorderedBadgeSnippet,
  smallRoundedBorderedBadgeSnippet,
} from './snippets/badge';
import { nativeSelectSnippet } from './snippets/native-select';
import { customSelectSnippet } from './snippets/custom-select';
import { kanbanSnippet } from './snippets/kanban';
import { paginationSnippet } from './snippets/pagination';
import { tableSnippet } from './snippets/table';

export const componentRegistry = [
  { id: 'application-shell', ...componentMeta['application-shell'], code: applicationShellSnippet },
  { id: 'application-shell-breadcrumb', ...componentMeta['application-shell-breadcrumb'], code: applicationShellBreadcrumbSnippet },
  { id: 'breadcrumb', ...componentMeta.breadcrumb, code: breadcrumbSnippet },
  { id: 'input', ...componentMeta.input, code: inputSnippet },
  { id: 'solid-button', ...componentMeta['solid-button'], code: solidButtonSnippet },
  { id: 'outline-button', ...componentMeta['outline-button'], code: outlineButtonSnippet },
  { id: 'medium-badge', ...componentMeta['medium-badge'], code: mediumBadgeSnippet },
  { id: 'small-badge', ...componentMeta['small-badge'], code: smallBadgeSnippet },
  { id: 'medium-rounded-badge', ...componentMeta['medium-rounded-badge'], code: mediumRoundedBadgeSnippet },
  { id: 'small-rounded-badge', ...componentMeta['small-rounded-badge'], code: smallRoundedBadgeSnippet },
  { id: 'medium-bordered-badge', ...componentMeta['medium-bordered-badge'], code: mediumBorderedBadgeSnippet },
  { id: 'small-bordered-badge', ...componentMeta['small-bordered-badge'], code: smallBorderedBadgeSnippet },
  { id: 'medium-rounded-bordered-badge', ...componentMeta['medium-rounded-bordered-badge'], code: mediumRoundedBorderedBadgeSnippet },
  { id: 'small-rounded-bordered-badge', ...componentMeta['small-rounded-bordered-badge'], code: smallRoundedBorderedBadgeSnippet },
  { id: 'native-select', ...componentMeta['native-select'], code: nativeSelectSnippet },
  { id: 'custom-select', ...componentMeta['custom-select'], code: customSelectSnippet },
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
  const component = getComponentById(id) ?? componentRegistry.find((candidate) => candidate.groupId === id);
  if (!component) return undefined;

  return {
    id: component.groupId,
    components: componentRegistry.filter((candidate) => candidate.groupId === component.groupId),
  };
}

export function getComponentGroups() {
  return [...new Set(componentRegistry.map((component) => component.groupId))].map(getComponentGroupById);
}
