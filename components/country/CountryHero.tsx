import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import { CountryDetail } from "@/types/app-types";

interface CountryHeroProps {
  country: CountryDetail;
}

const CountryHero: React.FC<CountryHeroProps> = ({ country }) => {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-white px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <Link
          href="/travel"
          className="text-sm font-mono text-gray-400 hover:text-primary transition-colors mb-8 inline-block"
        >
          &larr; All Countries
        </Link>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
          <ReactCountryFlag
            countryCode={country.code}
            svg
            style={{
              width: "4em",
              height: "4em",
              borderRadius: "8px",
            }}
            title={country.name}
          />
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-black">
              {country.name}
            </h1>
            <p className="text-gray-500 text-lg sm:text-xl font-light mt-1">
              {country.heroTagline}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 sm:gap-4 mt-6">
          {country.tripDuration && (
            <span className="text-xs sm:text-sm font-mono text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
              {country.tripDuration}
            </span>
          )}
          {country.visitedDate && (
            <span className="text-xs sm:text-sm font-mono text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
              {country.visitedDate}
            </span>
          )}
          <span className="text-xs sm:text-sm font-mono text-gray-400 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
            {country.language}
          </span>
        </div>

        {country.summary && (
          <p className="text-gray-600 text-base sm:text-lg font-light max-w-3xl mt-8 leading-relaxed">
            {country.summary}
          </p>
        )}
      </div>
    </section>
  );
};

export default CountryHero;
