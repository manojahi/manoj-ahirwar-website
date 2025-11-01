import { socialLinksData } from "@/constants/socialData";
import React from "react";

const InternetPresence: React.FC = () => {
  return (
    <section id="connect" className="py-16 sm:py-20 md:py-32 bg-gray-50 px-4 sm:px-6 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
            Internet Presence
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-light max-w-2xl">
            Find me on social 
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {socialLinksData.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-gray-300 transition-all duration-300"
                title={link.name}
              >
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <Icon className="text-base sm:text-lg" />
                </div>
                <span className="text-sm font-semibold text-gray-900 group-hover:text-black">
                  {link.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InternetPresence;
