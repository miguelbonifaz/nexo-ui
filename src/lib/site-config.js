const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

export const siteConfig = {
  name: 'Nexo UI',
  url: configuredSiteUrl.replace(/\/$/, ''),
  title: 'React & Tailwind CSS Components | Nexo UI',
  description:
    'Explore responsive React UI components with live previews and code you can adapt to your project.',
};

export const openGraphImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'Nexo UI React and Tailwind CSS components',
};

export const twitterImage = '/twitter-image';

export function absoluteUrl(path = '/') {
  return new URL(path, `${siteConfig.url}/`).toString();
}
