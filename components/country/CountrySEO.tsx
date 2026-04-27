import Head from "next/head";
import { CountryDetail } from "@/types/app-types";

interface CountrySEOProps {
  country: CountryDetail;
}

const CountrySEO: React.FC<CountrySEOProps> = ({ country }) => {
  const title = `${country.name} Travel Guide for Indian Passport Holders | Manoj Ahirwar`;
  const url = `https://www.manojahi.com/travel/${country.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${country.name} Travel Guide for Indian Passport Holders`,
    author: {
      "@type": "Person",
      name: "Manoj Ahirwar",
      url: "https://www.manojahi.com",
    },
    description: country.metaDescription,
    mainEntityOfPage: url,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.manojahi.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Travel",
        item: "https://www.manojahi.com/travel",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: country.name,
      },
    ],
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={country.metaDescription} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={country.metaDescription} />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Manoj Ahirwar" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@manoj_ahi" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={country.metaDescription} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </Head>
  );
};

export default CountrySEO;
