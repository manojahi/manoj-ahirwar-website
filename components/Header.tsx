import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white px-4 sm:px-6 py-16 sm:py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.03),transparent_50%)]" />

      <div className="container mx-auto max-w-5xl relative">
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-black mb-6 sm:mb-8 tracking-tight leading-none">
          Manoj<br />Ahirwar
        </h1>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-10">
          {["Engineer", "Entrepreneur", "Traveller", "Anime Fan"].map((role) => (
            <span
              key={role}
              className="text-xs sm:text-sm font-medium text-gray-700 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-50 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors cursor-default"
            >
              {role}
            </span>
          ))}
        </div>

        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed font-light">
          Building products, exploring the world, and creating experiences through technology.
        </p>
      </div>
    </header>
  );
};

export default Header;
