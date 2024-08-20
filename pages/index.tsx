import Head from "next/head";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Countries from "../components/Countries";
import InternetPresence from "../components/InternetPresence";

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Manoj Ahirwar</title>
        <meta name="description" content="Manoj Ahirwar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Projects />
      <Countries />
      <InternetPresence />
    </Layout>
  );
};

export default Home;
