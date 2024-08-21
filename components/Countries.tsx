import React from "react";
import ReactCountryFlag from "react-country-flag";
import { Country } from "@/types/app-types";
import { countriesData } from "@/constants/countriesData";

const Countries: React.FC = () => {
  return (
    <section className="px-3 md:px-0 py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800">
          Countries I've Visited
        </h2>
        <p className="text-center mt-8 text-gray-600 font-medium mb-12">
          Total countries visited: {countriesData.length}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {countriesData.map((country: Country, index: number) => (
            <div
              key={index}
              className="bg-white px-6 py-6 rounded-lg shadow-md hover:shadow-lg 
              transition-shadow duration-300 flex flex-col items-center"
            >
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  width: "2em",
                  height: "2em",
                }}
                title={country.name}
              />
              <h3 className="text-lg font-semibold text-gray-700 mt-2">
                {country.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Countries;
