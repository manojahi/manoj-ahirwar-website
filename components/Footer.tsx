import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-black">
              Manoj Ahirwar
            </h3>
          </div>

          <div className="flex items-center gap-6 sm:gap-8 text-sm">
            <a
              href="https://twitter.com/manoj_ahi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black font-medium transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://github.com/manojahi/manoj-ahirwar-website"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black font-medium transition-colors"
            >
              Github Code
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
