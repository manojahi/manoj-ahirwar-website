import { socialLinksData } from "@/constants/socialData";
import React from "react";

const InternetPresence: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Internet Presence
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {socialLinksData.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center"
                title={link.name}
              >
                <div
                  className={`w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center 
                  hover:opacity-80 transition-all duration-300`}
                >
                  <Icon className="text-2xl" />
                </div>
                <span className="mt-2 text-sm text-gray-600 text-center">
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
