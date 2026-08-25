import { notFound } from 'next/navigation';
import ShowcasePage from '@/components/showcase-page';
import { componentRegistry, getComponentById } from '@/lib/component-registry';
import { openGraphImage, siteConfig, twitterImage } from '@/lib/site-config';

export const dynamicParams = false;

export function generateStaticParams() {
  return componentRegistry.map(({ id }) => ({ componentId: id }));
}

export async function generateMetadata({ params }) {
  const { componentId } = await params;
  const component = getComponentById(componentId);

  if (!component) notFound();

  const pathname = `/components/${component.id}`;

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
  const component = getComponentById(componentId);

  if (!component) notFound();

  return <ShowcasePage component={component} />;
}
