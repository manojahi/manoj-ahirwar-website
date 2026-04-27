import React from "react";
import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import { Country } from "@/types/app-types";
import { countriesData } from "@/constants/countriesData";

const Countries: React.FC = () => {
  return (
    <section id="countries" className="py-16 sm:py-20 md:py-32 bg-white px-4 sm:px-6 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3 sm:mb-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              Travel
            </h2>
            <span className="text-xs sm:text-sm font-mono text-gray-400">
              {countriesData.length} countries
            </span>
          </div>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-light max-w-2xl">
            Exploring the world, one country at a time
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {countriesData.map((country: Country, index: number) => (
            <Link
              key={index}
              href={`/travel/${country.slug}`}
              className="group bg-white border border-gray-200 p-4 sm:p-5 rounded-xl hover:shadow-lg hover:border-gray-300 transition-all duration-300 flex flex-col items-center gap-2 sm:gap-3"
            >
              <div className="transform group-hover:scale-110 transition-transform duration-300">
                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  style={{
                    width: "2.5em",
                    height: "2.5em",
                    borderRadius: "4px",
                  }}
                  title={country.name}
                  className="sm:!w-10 sm:!h-10"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-900 text-center group-hover:text-black transition-colors leading-tight">
                {country.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
