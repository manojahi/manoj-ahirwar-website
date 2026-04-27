import { CityVisited } from "@/types/app-types";

interface CountryCitiesProps {
  cities: CityVisited[];
  countryName: string;
}

const CountryCities: React.FC<CountryCitiesProps> = ({
  cities,
  countryName,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-white px-4 sm:px-6 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 sm:mb-10">
          Cities & Places
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {city.name}
                </h3>
                <span className="text-xs font-mono text-gray-400 ml-2 shrink-0">
                  {city.daysSpent} {city.daysSpent === 1 ? "day" : "days"}
                </span>
              </div>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {city.highlights}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountryCities;
