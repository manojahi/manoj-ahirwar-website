import { TransportInfo } from "@/types/app-types";

interface CountryTransportProps {
  transport: TransportInfo;
  countryName: string;
}

const CountryTransport: React.FC<CountryTransportProps> = ({
  transport,
  countryName,
}) => {
  const sections = [
    { title: "From Airport", content: transport.fromAirport },
    { title: "Local Transport", content: transport.local },
    { title: "Between Cities", content: transport.intercity },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 sm:mb-10">
          Getting Around {countryName}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6"
            >
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {section.title}
              </h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {transport.tips && (
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 sm:p-6 max-w-2xl">
            <h3 className="text-sm font-semibold text-blue-900 mb-1">
              Transport Tips
            </h3>
            <p className="text-sm text-blue-800 font-light leading-relaxed">
              {transport.tips}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryTransport;
