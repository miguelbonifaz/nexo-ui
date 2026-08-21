export const componentSections = [
  {
    title: 'Form Controls',
    items: [{ id: 'input', title: 'Input' }],
  },
  {
    title: 'Lists',
    items: [
      { id: 'table', title: 'Table' },
      { id: 'pagination', title: 'Pagination' },
    ],
  },
  {
    title: 'Dialogs',
    items: [{ id: 'detail-modal', title: 'Detail Modal' }],
  },
];

export const componentMeta = {
  input: {
    section: 'Form Controls',
    eyebrow: 'FORM CONTROLS',
    title: 'Input',
    description:
      'A quiet, flexible field for collecting short pieces of information.',
  },
  table: {
    section: 'Lists',
    eyebrow: 'LISTS',
    title: 'Table',
    description:
      'A responsive records table with clear hierarchy, status, and actions.',
  },
  pagination: {
    section: 'Lists',
    eyebrow: 'LISTS',
    title: 'Pagination',
    description:
      'A compact navigation pattern for moving through longer collections.',
  },
  'detail-modal': {
    section: 'Dialogs',
    eyebrow: 'DIALOGS',
    title: 'Detail Modal',
    description:
      'An accessible detail surface for reviewing one record without leaving the current view.',
  },
};
