export function tablerIconSnippet(names) {
  const imports = names
    .map((name) => `Icon${name[0].toUpperCase()}${name.slice(1)}`)
    .join(', ');

  return `import { ${imports} } from '@tabler/icons-react';`;
}
