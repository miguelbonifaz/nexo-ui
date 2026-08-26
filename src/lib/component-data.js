export const componentSections = [
  {
    title: 'Application Shells',
    items: [
      { id: 'application-shell', groupId: 'application-shell', title: 'Application Shell' },
      { id: 'application-shell-breadcrumb', groupId: 'application-shell', title: 'Application Shell with Breadcrumb' },
    ],
  },
  {
    title: 'Navigation',
    items: [{ id: 'breadcrumb', groupId: 'breadcrumb', title: 'Breadcrumb' }],
  },
  {
    title: 'Form Controls',
    items: [{ id: 'input', groupId: 'input', title: 'Input' }],
  },
  {
    title: 'Lists',
    items: [
      { id: 'table', groupId: 'table', title: 'Table' },
      { id: 'pagination', groupId: 'pagination', title: 'Pagination' },
    ],
  },
  {
    title: 'Dialogs',
    items: [{ id: 'detail-modal', groupId: 'detail-modal', title: 'Modal' }],
  },
];

export const componentMeta = {
  'application-shell': {
    groupId: 'application-shell',
    section: 'Application Shells',
    eyebrow: 'APPLICATION SHELLS',
    title: 'Application Shell',
    description: 'A reusable application frame with persistent navigation and an empty workspace.',
    seoTitle: 'Application Shell Component for React & Tailwind CSS',
    seoHeading: 'React Application Shell with Tailwind CSS',
    seoDescription:
      'A reusable React application shell built with Tailwind CSS, including persistent navigation, workspaces, and a responsive empty workspace.',
  },
  'application-shell-breadcrumb': {
    groupId: 'application-shell',
    section: 'Application Shells',
    eyebrow: 'APPLICATION SHELLS',
    title: 'Application Shell with Breadcrumb',
    description: 'A responsive application frame with a sticky header breadcrumb and mobile navigation.',
    seoTitle: 'Application Shell with Breadcrumb Component for React & Tailwind CSS',
    seoHeading: 'React Application Shell with Breadcrumb',
    seoDescription:
      'A responsive React application shell styled with Tailwind CSS, combining persistent navigation, a sticky breadcrumb header, and mobile sidebar navigation.',
  },
  breadcrumb: {
    groupId: 'breadcrumb',
    section: 'Navigation',
    eyebrow: 'NAVIGATION',
    title: 'Breadcrumb',
    description: 'A compact trail that keeps users oriented within nested pages.',
    seoTitle: 'Breadcrumb Component for React & Tailwind CSS',
    seoHeading: 'React Breadcrumb Component with Tailwind CSS',
    seoDescription:
      'A compact, accessible React breadcrumb navigation component styled with Tailwind CSS for nested pages and dashboards.',
  },
  input: {
    groupId: 'input',
    section: 'Form Controls',
    eyebrow: 'FORM CONTROLS',
    title: 'Input',
    description:
      'A quiet, flexible field for collecting short pieces of information.',
    seoTitle: 'Input Component for React & Tailwind CSS',
    seoHeading: 'React Input Component with Tailwind CSS',
    seoDescription:
      'A flexible React input component styled with Tailwind CSS for forms, filters, search fields, and short text entry.',
  },
  table: {
    groupId: 'table',
    section: 'Lists',
    eyebrow: 'LISTS',
    title: 'Table',
    description:
      'A responsive records table with clear hierarchy, status, and actions.',
    seoTitle: 'Table Component for React & Tailwind CSS',
    seoHeading: 'React Table Component with Tailwind CSS',
    seoDescription:
      'A responsive React table component styled with Tailwind CSS, including search, pagination, status badges, and record actions.',
  },
  pagination: {
    groupId: 'pagination',
    section: 'Lists',
    eyebrow: 'LISTS',
    title: 'Pagination',
    description:
      'A compact navigation pattern for moving through longer collections.',
    seoTitle: 'Pagination Component for React & Tailwind CSS',
    seoHeading: 'React Pagination Component with Tailwind CSS',
    seoDescription:
      'A compact React pagination component styled with Tailwind CSS for navigating records, search results, and longer collections.',
  },
  'detail-modal': {
    groupId: 'detail-modal',
    section: 'Dialogs',
    eyebrow: 'DIALOGS',
    title: 'Modal',
    description:
      'An accessible detail surface for reviewing one record without leaving the current view.',
    seoTitle: 'Modal Component for React & Tailwind CSS',
    seoHeading: 'React Modal with Tailwind CSS',
    seoDescription:
      'An accessible React modal styled with Tailwind CSS for reviewing records with keyboard, backdrop, and action support.',
  },
};
