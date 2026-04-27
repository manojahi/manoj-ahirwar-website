import React from "react";
import { pressData } from "@/constants/pressData";

const Press: React.FC = () => {
  return (
    <section
      id="press"
      className="py-16 sm:py-20 md:py-32 bg-white px-4 sm:px-6 border-t border-gray-200"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4">
            Featured On
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl font-light max-w-2xl">
            My work has been covered across these publications
          </p>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3">
          {pressData.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm sm:text-base font-medium text-gray-700 px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-50 border border-gray-200 rounded-full hover:bg-black hover:text-white hover:border-black transition-colors duration-300"
            >
              {item.publication}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Press;
