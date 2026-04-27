import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Countries from "../components/Countries";
import InternetPresence from "../components/InternetPresence";

const Home: React.FC = () => {
  const title = "Manoj Ahirwar - Engineer, Entrepreneur & Traveller";
  const description =
    "Manoj Ahirwar builds software products and travels the world. Explore projects, travel guides for Indian passport holders, and more.";

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Manoj Ahirwar",
    url: "https://www.manojahi.com",
    jobTitle: "Engineer & Entrepreneur",
    sameAs: ["https://twitter.com/manoj_ahi"],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Manoj Ahirwar",
    url: "https://www.manojahi.com",
  };

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://www.manojahi.com" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.manojahi.com" />
        <meta property="og:site_name" content="Manoj Ahirwar" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@manoj_ahi" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </Head>

      <Header />
      <Projects />
      <Countries />
      <InternetPresence />
    </Layout>
  );
};

export default Home;
