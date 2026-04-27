import { GetStaticPaths, GetStaticProps } from "next";
import { countryDetailData } from "@/constants/countryDetailData";
import { CountryDetail } from "@/types/app-types";
import Layout from "@/components/Layout";
import CountrySEO from "@/components/country/CountrySEO";
import CountryHero from "@/components/country/CountryHero";
import CountryVisaCard from "@/components/country/CountryVisaCard";
import CountryCities from "@/components/country/CountryCities";
import CountryTransport from "@/components/country/CountryTransport";
import CountryMoney from "@/components/country/CountryMoney";
import CountrySim from "@/components/country/CountrySim";
import CountryNarrative from "@/components/country/CountryNarrative";
import CountryTips from "@/components/country/CountryTips";
import CountryNavigation from "@/components/country/CountryNavigation";

interface CountryPageProps {
  country: CountryDetail;
  prevCountry: { name: string; slug: string } | null;
  nextCountry: { name: string; slug: string } | null;
}

const CountryPage: React.FC<CountryPageProps> = ({
  country,
  prevCountry,
  nextCountry,
}) => {
  return (
    <Layout>
      <CountrySEO country={country} />
      <CountryHero country={country} />
      <CountryVisaCard visa={country.visa} countryName={country.name} />
      <CountryCities cities={country.cities} countryName={country.name} />
      <CountryTransport
        transport={country.transport}
        countryName={country.name}
      />
      <CountryMoney money={country.money} countryName={country.name} />
      <CountrySim sim={country.sim} countryName={country.name} />
      <CountryNarrative title="Food" content={country.food} bgColor="white" />
      <CountryNarrative
        title="People & Culture"
        content={`${country.people}\n\n${country.culture}`}
        bgColor="gray"
      />
      <CountryNarrative
        title="The Vibe"
        content={country.vibe}
        bgColor="white"
      />
      <CountryTips
        tips={country.tips}
        safety={country.safety}
        bestTimeToVisit={country.bestTimeToVisit}
      />
      <CountryNavigation
        prevCountry={prevCountry}
        nextCountry={nextCountry}
      />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = countryDetailData.map((country) => ({
    params: { slug: country.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<CountryPageProps> = async ({
  params,
}) => {
  const slug = params?.slug as string;
  const index = countryDetailData.findIndex((c) => c.slug === slug);
  const country = countryDetailData[index];

  if (!country) return { notFound: true };

  const prevCountry =
    index > 0
      ? {
          name: countryDetailData[index - 1].name,
          slug: countryDetailData[index - 1].slug,
        }
      : null;
  const nextCountry =
    index < countryDetailData.length - 1
      ? {
          name: countryDetailData[index + 1].name,
          slug: countryDetailData[index + 1].slug,
        }
      : null;

  return { props: { country, prevCountry, nextCountry } };
};

export default CountryPage;
