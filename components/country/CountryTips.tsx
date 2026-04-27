interface CountryTipsProps {
  tips: string;
  safety: string;
  bestTimeToVisit: string;
}

const CountryTips: React.FC<CountryTipsProps> = ({
  tips,
  safety,
  bestTimeToVisit,
}) => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-8 sm:mb-10">
          Tips for Indian Travelers
        </h2>

        <div className="space-y-4 max-w-2xl">
          <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Best Time to Visit
            </h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              {bestTimeToVisit}
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-2">
              Safety
            </h3>
            <p className="text-sm text-gray-600 font-light leading-relaxed">
              {safety}
            </p>
          </div>

          {tips && (
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">
                Personal Tips
              </h3>
              <p className="text-sm text-blue-800 font-light leading-relaxed whitespace-pre-line">
                {tips}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CountryTips;
