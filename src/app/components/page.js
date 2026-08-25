import ComponentIndex from '@/components/component-index';
import { absoluteUrl, openGraphImage, siteConfig, twitterImage } from '@/lib/site-config';

export const metadata = {
  title: 'React & Tailwind CSS Components',
  description: 'Browse reusable React UI components with Tailwind CSS, live previews, and adaptable JSX source code.',
  alternates: { canonical: '/components' },
  openGraph: {
    title: 'React & Tailwind CSS Components | Nexo UI',
    description: 'Browse reusable React UI components with Tailwind CSS, live previews, and adaptable JSX source code.',
    url: '/components',
    siteName: siteConfig.name,
    type: 'website',
    images: [openGraphImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'React & Tailwind CSS Components | Nexo UI',
    description: 'Browse reusable React UI components with Tailwind CSS, live previews, and adaptable JSX source code.',
    images: [twitterImage],
  },
};

function breadcrumbJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
      { '@type': 'ListItem', position: 2, name: 'Components', item: absoluteUrl('/components') },
    ],
  };
}

export default function ComponentsPage() {
  const jsonLd = JSON.stringify(breadcrumbJsonLd()).replace(/</g, '\\u003c');

  return (
    <>
      <ComponentIndex />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  );
}
