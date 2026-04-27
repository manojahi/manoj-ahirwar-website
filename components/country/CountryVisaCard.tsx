import { VisaInfo } from "@/types/app-types";

interface CountryVisaCardProps {
  visa: VisaInfo;
  countryName: string;
}

const visaBadgeColors: Record<VisaInfo["type"], string> = {
  "visa-free": "bg-green-50 text-green-700 border-green-200",
  "visa-on-arrival": "bg-yellow-50 text-yellow-700 border-yellow-200",
  "e-visa": "bg-blue-50 text-blue-700 border-blue-200",
  "sticker-visa": "bg-red-50 text-red-700 border-red-200",
};

const visaLabels: Record<VisaInfo["type"], string> = {
  "visa-free": "Visa Free",
  "visa-on-arrival": "Visa on Arrival",
  "e-visa": "e-Visa",
  "sticker-visa": "Sticker Visa",
};

const CountryVisaCard: React.FC<CountryVisaCardProps> = ({
  visa,
  countryName,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 sm:mb-10">
          Visa for Indian Passport
        </h2>

        <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-8 max-w-2xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span
              className={`text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border ${visaBadgeColors[visa.type]}`}
            >
              {visaLabels[visa.type]}
            </span>
            <span className="text-sm font-mono text-gray-400">
              {visa.duration}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <span className="text-sm text-gray-500">Cost</span>
              <span className="text-sm font-medium text-gray-900">
                {visa.cost}
              </span>
            </div>
            <div className="border-t border-gray-100" />
            <div>
              <span className="text-sm text-gray-500 block mb-1">Notes</span>
              <p className="text-sm text-gray-700 leading-relaxed">
                {visa.notes}
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-6 font-mono">
            Information for Indian passport holders. Always verify with the
            embassy before travel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountryVisaCard;
