import Link from "next/link";

interface NavCountry {
  name: string;
  slug: string;
}

interface CountryNavigationProps {
  prevCountry: NavCountry | null;
  nextCountry: NavCountry | null;
}

const CountryNavigation: React.FC<CountryNavigationProps> = ({
  prevCountry,
  nextCountry,
}) => {
  return (
    <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            {prevCountry && (
              <Link
                href={`/travel/${prevCountry.slug}`}
                className="group flex flex-col"
              >
                <span className="text-xs font-mono text-gray-400 mb-1">
                  &larr; Previous
                </span>
                <span className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {prevCountry.name}
                </span>
              </Link>
            )}
          </div>

          <Link
            href="/travel"
            className="text-sm font-mono text-gray-400 hover:text-primary transition-colors"
          >
            All Countries
          </Link>

          <div className="text-right">
            {nextCountry && (
              <Link
                href={`/travel/${nextCountry.slug}`}
                className="group flex flex-col items-end"
              >
                <span className="text-xs font-mono text-gray-400 mb-1">
                  Next &rarr;
                </span>
                <span className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-primary transition-colors">
                  {nextCountry.name}
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryNavigation;
