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
    title: 'Buttons',
    items: [
      { id: 'solid-button', groupId: 'button', title: 'Solid Button' },
      { id: 'outline-button', groupId: 'button', title: 'Outline Button' },
    ],
  },
  {
    title: 'Badges',
    items: [
      { id: 'medium-badge', groupId: 'badge', title: 'Medium Badge' },
      { id: 'small-badge', groupId: 'badge', title: 'Small Badge' },
      { id: 'medium-rounded-badge', groupId: 'badge', title: 'Medium Rounded Badge' },
      { id: 'small-rounded-badge', groupId: 'badge', title: 'Small Rounded Badge' },
      { id: 'medium-bordered-badge', groupId: 'badge', title: 'Medium Bordered Badge' },
      { id: 'small-bordered-badge', groupId: 'badge', title: 'Small Bordered Badge' },
      { id: 'medium-rounded-bordered-badge', groupId: 'badge', title: 'Medium Rounded Bordered Badge' },
      { id: 'small-rounded-bordered-badge', groupId: 'badge', title: 'Small Rounded Bordered Badge' },
    ],
  },
  {
    title: 'Selects',
    items: [
      { id: 'native-select', groupId: 'select', title: 'Native Select' },
      { id: 'custom-select', groupId: 'select', title: 'Custom Select' },
    ],
  },
  {
    title: 'Lists',
    items: [
      { id: 'kanban', groupId: 'kanban', title: 'Kanban' },
      { id: 'table', groupId: 'table', title: 'Table' },
      { id: 'pagination', groupId: 'pagination', title: 'Pagination' },
    ],
  },
  {
    title: 'Dialogs',
    items: [{ id: 'modal', groupId: 'modal', title: 'Modal' }],
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
  'solid-button': {
    groupId: 'button',
    section: 'Buttons',
    eyebrow: 'BUTTONS',
    title: 'Solid Button',
    description: 'A high-contrast action button with an indigo surface and clear hierarchy.',
    seoTitle: 'Solid Button Component for React & Tailwind CSS',
    seoHeading: 'React Solid Button with Tailwind CSS',
    seoDescription:
      'A reusable solid React button styled with Tailwind CSS, including four sizes, disabled state, and optional icons.',
  },
  'outline-button': {
    groupId: 'button',
    section: 'Buttons',
    eyebrow: 'BUTTONS',
    title: 'Outline Button',
    description: 'A restrained secondary action with a neutral border and quiet surface.',
    seoTitle: 'Outline Button Component for React & Tailwind CSS',
    seoHeading: 'React Outline Button with Tailwind CSS',
    seoDescription:
      'A reusable outline React button styled with Tailwind CSS, including four sizes, disabled state, and optional icons.',
  },
  'medium-badge': {
    groupId: 'badge',
    section: 'Badges',
    eyebrow: 'BADGES',
    title: 'Medium Badge',
    description: 'A compact medium badge with simple semantic tones for lightweight status context.',
    seoTitle: 'Badge Component for React & Tailwind CSS',
    seoHeading: 'React Badge with Tailwind CSS',
    seoDescription:
      'A compact React badge styled with Tailwind CSS, with separate medium and small sections plus neutral, error, warning, success, info, indigo, purple, and pink tones.',
  },
  'small-badge': {
    groupId: 'badge',
    section: 'Badges',
    eyebrow: 'BADGES',
    title: 'Small Badge',
    description: 'A compact small badge with simple semantic tones for lightweight status context.',
    seoTitle: 'Small Badge Component for React & Tailwind CSS',
    seoHeading: 'React Small Badge with Tailwind CSS',
    seoDescription:
      'A compact small React badge styled with Tailwind CSS, with eight direct color examples for lightweight status context.',
  },
  'medium-rounded-badge': {
    groupId: 'badge',
    section: 'Badges',
    eyebrow: 'BADGES',
    title: 'Medium Rounded Badge',
    description: 'A compact medium badge with fully rounded edges and lightweight status colors.',
    seoTitle: 'Rounded Badge Component for React & Tailwind CSS',
    seoHeading: 'React Rounded Badge with Tailwind CSS',
    seoDescription:
      'A reusable medium React badge with fully rounded edges, styled with Tailwind CSS and shown in eight direct color examples.',
  },
  'small-rounded-badge': {
    groupId: 'badge',
    section: 'Badges',
    eyebrow: 'BADGES',
    title: 'Small Rounded Badge',
    description: 'A compact small badge with fully rounded edges and lightweight status colors.',
    seoTitle: 'Small Rounded Badge Component for React & Tailwind CSS',
    seoHeading: 'React Small Rounded Badge with Tailwind CSS',
    seoDescription:
      'A reusable small React badge with fully rounded edges, styled with Tailwind CSS and shown in eight direct color examples.',
  },
  'medium-bordered-badge': {
    groupId: 'badge',
    section: 'Badges',
    eyebrow: 'BADGES',
    title: 'Medium Bordered Badge',
    description: 'A compact medium badge with a subtle tone-matched border and lightweight status colors.',
    seoTitle: 'Bordered Badge Component for React & Tailwind CSS',
    seoHeading: 'React Bordered Badge with Tailwind CSS',
    seoDescription:
      'A reusable medium React badge with a tone-matched border, styled with Tailwind CSS and shown in eight direct color examples.',
  },
  'small-bordered-badge': {
    groupId: 'badge',
    section: 'Badges',
    eyebrow: 'BADGES',
    title: 'Small Bordered Badge',
    description: 'A compact small badge with a subtle tone-matched border and lightweight status colors.',
    seoTitle: 'Small Bordered Badge Component for React & Tailwind CSS',
    seoHeading: 'React Small Bordered Badge with Tailwind CSS',
    seoDescription:
      'A reusable small React badge with a tone-matched border, styled with Tailwind CSS and shown in eight direct color examples.',
  },
  'medium-rounded-bordered-badge': {
    groupId: 'badge',
    section: 'Badges',
    eyebrow: 'BADGES',
    title: 'Medium Rounded Bordered Badge',
    description: 'A compact medium badge with fully rounded edges and a subtle tone-matched border.',
    seoTitle: 'Medium Rounded Bordered Badge Component for React & Tailwind CSS',
    seoHeading: 'React Medium Rounded Bordered Badge with Tailwind CSS',
    seoDescription:
      'A reusable medium React badge with fully rounded edges and a tone-matched border, styled with Tailwind CSS.',
  },
  'small-rounded-bordered-badge': {
    groupId: 'badge',
    section: 'Badges',
    eyebrow: 'BADGES',
    title: 'Small Rounded Bordered Badge',
    description: 'A compact small badge with fully rounded edges and a subtle tone-matched border.',
    seoTitle: 'Small Rounded Bordered Badge Component for React & Tailwind CSS',
    seoHeading: 'React Small Rounded Bordered Badge with Tailwind CSS',
    seoDescription:
      'A reusable small React badge with fully rounded edges and a tone-matched border, styled with Tailwind CSS.',
  },
  'native-select': {
    groupId: 'select',
    section: 'Selects',
    eyebrow: 'SELECTS',
    title: 'Native Select',
    description: 'A styled select that preserves the browser’s native form behavior.',
    seoTitle: 'Native Select Component for React & Tailwind CSS',
    seoHeading: 'React Native Select with Tailwind CSS',
    seoDescription:
      'A reusable native HTML select component styled with Tailwind CSS, with single and multiple selection support.',
  },
  'custom-select': {
    groupId: 'select',
    section: 'Selects',
    eyebrow: 'SELECTS',
    title: 'Custom Select',
    description: 'A fully styled select with a controlled menu that opens below the trigger.',
    seoTitle: 'Custom Select Component for React & Tailwind CSS',
    seoHeading: 'React Custom Select with Tailwind CSS',
    seoDescription:
      'An accessible custom React select with a menu that opens below the trigger, keyboard navigation, and multiple selection support.',
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
  kanban: {
    groupId: 'kanban',
    section: 'Lists',
    eyebrow: 'LISTS',
    title: 'Kanban',
    description: 'A clear board layout for grouping records by workflow stage.',
    seoTitle: 'Kanban Component for React & Tailwind CSS',
    seoHeading: 'React Kanban Component with Tailwind CSS',
    seoDescription:
      'A reusable static React Kanban board styled with Tailwind CSS, featuring workflow columns, record cards, and responsive horizontal scrolling.',
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
  modal: {
    groupId: 'modal',
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
