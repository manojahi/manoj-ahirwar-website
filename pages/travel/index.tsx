import Head from "next/head";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import Layout from "@/components/Layout";
import { countryDetailData } from "@/constants/countryDetailData";
import { CountryDetail } from "@/types/app-types";
import { GetStaticProps } from "next";

interface TravelIndexProps {
  countries: CountryDetail[];
}

const TravelIndex: React.FC<TravelIndexProps> = ({ countries }) => {
  const title =
    "Travel Guides for Indian Passport Holders | Manoj Ahirwar";
  const description = `Practical travel guides from ${countries.length} countries. Visa info for Indian passport, SIM cards, ATMs, transport, food & tips from personal experience.`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: "https://www.manojahi.com/travel",
    author: {
      "@type": "Person",
      name: "Manoj Ahirwar",
      url: "https://www.manojahi.com",
    },
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://www.manojahi.com/travel" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.manojahi.com/travel" />
        <meta property="og:site_name" content="Manoj Ahirwar" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@manoj_ahi" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <section className="py-16 sm:py-20 md:py-32 bg-white px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 sm:mb-16">
            <Link
              href="/"
              className="text-sm font-mono text-gray-400 hover:text-primary transition-colors mb-8 inline-block"
            >
              &larr; Home
            </Link>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3 sm:mb-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                Travel Guides
              </h1>
              <span className="text-xs sm:text-sm font-mono text-gray-400">
                {countries.length} countries
              </span>
            </div>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl font-light max-w-2xl">
              Practical travel guides for Indian passport holders. Visa, SIM
              cards, ATMs, transport, and personal experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {countries.map((country) => (
              <Link
                key={country.slug}
                href={`/travel/${country.slug}`}
                className="group bg-white border border-gray-200 p-5 sm:p-6 rounded-xl hover:shadow-lg hover:border-gray-300 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ReactCountryFlag
                    countryCode={country.code}
                    svg
                    style={{
                      width: "2em",
                      height: "2em",
                      borderRadius: "4px",
                    }}
                    title={country.name}
                  />
                  <h2 className="text-lg font-semibold text-gray-900 group-hover:text-black transition-colors">
                    {country.name}
                  </h2>
                </div>
                <p className="text-sm text-gray-500 font-light leading-relaxed mb-3">
                  {country.heroTagline}
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-mono text-gray-400">
                    {country.visa.type === "visa-free"
                      ? "Visa Free"
                      : country.visa.type === "visa-on-arrival"
                      ? "VOA"
                      : country.visa.type === "e-visa"
                      ? "e-Visa"
                      : "Sticker Visa"}
                  </span>
                  {country.tripDuration &&
                    !country.tripDuration.includes("TODO") && (
                      <span className="text-xs font-mono text-gray-400">
                        &middot; {country.tripDuration}
                      </span>
                    )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<TravelIndexProps> = async () => {
  return {
    props: {
      countries: countryDetailData,
    },
  };
};

export default TravelIndex;
