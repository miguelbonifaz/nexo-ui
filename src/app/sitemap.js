import { componentRegistry } from '@/lib/component-registry';
import { absoluteUrl } from '@/lib/site-config';

export default function sitemap() {
  const lastModified = new Date();

  return [
    { url: absoluteUrl('/'), lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: absoluteUrl('/components'), lastModified, changeFrequency: 'weekly', priority: 0.9 },
    ...componentRegistry.map((component) => ({
      url: absoluteUrl(`/components/${component.id}`),
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];
}
