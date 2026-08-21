export const componentSections = [
  {
    title: 'Shells',
    items: [{ id: 'application-shell', title: 'Application Shell' }],
  },
  {
    title: 'Navigation',
    items: [{ id: 'breadcrumb', title: 'Breadcrumb' }],
  },
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
  'application-shell': {
    section: 'Shells',
    eyebrow: 'SHELLS',
    title: 'Application Shell',
    description: 'A reusable application frame with persistent navigation and an empty workspace.',
  },
  breadcrumb: {
    section: 'Navigation',
    eyebrow: 'NAVIGATION',
    title: 'Breadcrumb',
    description: 'A compact trail that keeps users oriented within nested pages.',
  },
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
