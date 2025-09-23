interface PersonSchema {
  name: string;
  url: string;
  email?: string;
  jobTitle: string;
  worksFor?: {
    name: string;
    url?: string;
  };
  address?: {
    addressLocality: string;
    addressCountry: string;
  };
  sameAs?: string[];
  knowsAbout?: string[];
  alumniOf?: {
    name: string;
    url?: string;
  }[];
}

interface WebsiteSchema {
  name: string;
  url: string;
  description: string;
  author: {
    name: string;
    url: string;
  };
  inLanguage: string;
  copyrightYear: number;
}

interface StructuredDataProps {
  type: 'person' | 'website' | 'both';
  personData?: PersonSchema;
  websiteData?: WebsiteSchema;
}

export function StructuredData({ type, personData, websiteData }: StructuredDataProps) {
  const defaultPersonData: PersonSchema = {
    name: 'Elvis Ciuffetelli',
    url: 'https://eciuff.com',
    email: 'elvis.ciuffetelli@gmail.com',
    jobTitle: 'Frontend Developer',
    address: {
      addressLocality: 'London',
      addressCountry: 'UK'
    },
    sameAs: [
      'https://www.linkedin.com/in/elvisciuffetelli/',
      'https://github.com/elvisciuffetelli'
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Frontend Development',
      'Web Development',
      'UI/UX Design'
    ],
    alumniOf: [
      {
        name: 'Università degli Studi di Bari Aldo Moro',
        url: 'https://www.uniba.it/'
      }
    ]
  };

  const defaultWebsiteData: WebsiteSchema = {
    name: 'Elvis Ciuffetelli Portfolio',
    url: 'https://eciuff.com',
    description: 'Personal portfolio of Elvis Ciuffetelli - Frontend Developer specializing in React, Next.js, and modern web technologies',
    author: {
      name: 'Elvis Ciuffetelli',
      url: 'https://eciuff.com'
    },
    inLanguage: 'en-US',
    copyrightYear: new Date().getFullYear()
  };

  const person = personData || defaultPersonData;
  const website = websiteData || defaultWebsiteData;

  const generatePersonSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    url: person.url,
    email: person.email,
    jobTitle: person.jobTitle,
    worksFor: person.worksFor,
    address: person.address ? {
      '@type': 'PostalAddress',
      addressLocality: person.address.addressLocality,
      addressCountry: person.address.addressCountry
    } : undefined,
    sameAs: person.sameAs,
    knowsAbout: person.knowsAbout,
    alumniOf: person.alumniOf?.map(school => ({
      '@type': 'Organization',
      name: school.name,
      url: school.url
    }))
  });

  const generateWebsiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Website',
    name: website.name,
    url: website.url,
    description: website.description,
    author: {
      '@type': 'Person',
      name: website.author.name,
      url: website.author.url
    },
    inLanguage: website.inLanguage,
    copyrightYear: website.copyrightYear
  });

  const generateBreadcrumbSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://eciuff.com'
      }
    ]
  });

  const schemas = [];

  if (type === 'person' || type === 'both') {
    schemas.push(generatePersonSchema());
  }

  if (type === 'website' || type === 'both') {
    schemas.push(generateWebsiteSchema());
    schemas.push(generateBreadcrumbSchema());
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2)
          }}
        />
      ))}
    </>
  );
}