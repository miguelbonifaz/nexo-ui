import { tablerIcons } from '../tabler-icons';

export function tablerIconSnippet(names) {
  const entries = names
    .map((name) => `  ${name}: ${JSON.stringify(tablerIcons[name])},`)
    .join('\n');

  return `import { MorphIcon } from 'morphicons/react';

const tablerIcons = {
${entries}
};`;
}
