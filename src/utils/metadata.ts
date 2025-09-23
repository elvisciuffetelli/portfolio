import type { Metadata } from 'next';

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  author?: string;
  url?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
}

const defaultConfig = {
  title: 'Elvis Ciuffetelli | Frontend Developer',
  description: 'Personal portfolio of Elvis Ciuffetelli - Frontend Developer specializing in React, Next.js, and modern web technologies',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Web Development', 'Portfolio', 'Elvis Ciuffetelli'],
  author: 'Elvis Ciuffetelli',
  url: 'https://eciuff.com',
  image: 'https://eciuff.com/og-image.jpg',
  type: 'website' as const
};

export function generateMetadata(config: SEOConfig = {}): Metadata {
  const {
    title = defaultConfig.title,
    description = defaultConfig.description,
    keywords = defaultConfig.keywords,
    author = defaultConfig.author,
    url = defaultConfig.url,
    image = defaultConfig.image,
    type = defaultConfig.type,
    noindex = false
  } = config;

  const fullTitle = title.includes('Elvis Ciuffetelli') ? title : `${title} | Elvis Ciuffetelli`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: author }],
    creator: author,
    publisher: author,
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
      },
    },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} - Preview Image`,
        },
      ],
      siteName: 'Elvis Ciuffetelli Portfolio',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    other: {
      'theme-color': '#3B82F6',
      'msapplication-TileColor': '#3B82F6',
    },
  };
}

export function generateViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#3B82F6',
  };
}