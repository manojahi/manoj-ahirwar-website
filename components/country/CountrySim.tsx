import { SimInfo } from "@/types/app-types";

interface CountrySimProps {
  sim: SimInfo;
  countryName: string;
}

const CountrySim: React.FC<CountrySimProps> = ({ sim, countryName }) => {
  const items = [
    { label: "Provider", value: sim.provider },
    { label: "Cost", value: sim.cost },
    { label: "Where to Buy", value: sim.purchaseLocation },
    { label: "Data Plan", value: sim.dataPlan },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 sm:mb-10">
          SIM Card & Internet in {countryName}
        </h2>

        <div className="max-w-2xl">
          <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-8">
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <span className="text-sm text-gray-500">{item.label}</span>
                    <span className="text-sm font-medium text-gray-900 text-right ml-4">
                      {item.value}
                    </span>
                  </div>
                  {index < items.length - 1 && (
                    <div className="border-t border-gray-100 mt-4" />
                  )}
                </div>
              ))}
            </div>

            {sim.tips && (
              <div className="border-t border-gray-100 pt-4 mt-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Tips
                </h3>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {sim.tips}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountrySim;
