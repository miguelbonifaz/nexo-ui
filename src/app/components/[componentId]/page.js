import { notFound, permanentRedirect } from 'next/navigation';
import ShowcasePage from '@/components/showcase-page';
import { componentRegistry, getComponentGroupById } from '@/lib/component-registry';
import { openGraphImage, siteConfig, twitterImage } from '@/lib/site-config';

export const dynamicParams = false;

export function generateStaticParams() {
  return [...new Set(componentRegistry.flatMap(({ id, groupId }) => [id, groupId]))].map((componentId) => ({ componentId }));
}

export async function generateMetadata({ params }) {
  const { componentId } = await params;
  const group = getComponentGroupById(componentId);

  if (!group) notFound();

  const component = group.components[0];
  const pathname = `/components/${group.id}`;

  return {
    title: component.seoTitle,
    description: component.seoDescription,
    alternates: { canonical: pathname },
    openGraph: {
      title: `${component.seoTitle} | Nexo UI`,
      description: component.seoDescription,
      url: pathname,
      siteName: siteConfig.name,
      type: 'website',
      images: [openGraphImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${component.seoTitle} | Nexo UI`,
      description: component.seoDescription,
      images: [twitterImage],
    },
  };
}

export default async function ComponentPage({ params }) {
  const { componentId } = await params;
  const group = getComponentGroupById(componentId);

  if (!group) notFound();
  if (componentId !== group.id) permanentRedirect(`/components/${group.id}#${componentId}`);

  return <ShowcasePage group={group} />;
}
