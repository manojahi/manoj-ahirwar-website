import React from "react";
import Link from "next/link";
import { FaTwitter, FaGithub, FaLinkedin, FaCheckCircle } from "react-icons/fa";
import { HiOutlineLink, HiOutlineCalendar } from "react-icons/hi";

const Header: React.FC = () => {
  return (
    <header className="bg-white px-4 sm:px-6 pt-8 sm:pt-12 pb-12 sm:pb-16">
      <div className="container mx-auto max-w-4xl">
        <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
          <div className="h-32 sm:h-44 relative bg-black flex items-end justify-end px-6 sm:px-10 pb-4 sm:pb-5">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
              Building and Travelling
            </h2>
          </div>

          <div className="px-4 sm:px-6 pb-6 sm:pb-8 relative">
            <div className="flex items-end justify-between -mt-12 sm:-mt-16 mb-3 sm:mb-4">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white bg-gray-100 overflow-hidden shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/Manoj.jpg"
                  alt="Manoj Ahirwar"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-1 sm:mb-2 justify-end">
                <Link
                  href="https://twitter.com/manoj_ahi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="p-2 sm:p-2.5 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                >
                  <FaTwitter className="w-4 h-4" />
                </Link>
                <Link
                  href="https://github.com/manojahi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-2 sm:p-2.5 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                >
                  <FaGithub className="w-4 h-4" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/manojahi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 sm:p-2.5 rounded-full border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
                >
                  <FaLinkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="https://twitter.com/manoj_ahi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors"
                >
                  Follow
                </Link>
              </div>
            </div>

            <div className="mb-3">
              <div className="flex items-center gap-1.5">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black tracking-tight">
                  Manoj Ahirwar
                </h1>
                <FaCheckCircle
                  className="w-5 h-5 text-emerald-500"
                  aria-label="Verified"
                />
              </div>
              <p className="text-sm sm:text-base text-gray-500">@manoj_ahi</p>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 max-w-2xl">
              Engineer · Entrepreneur · Traveller · Anime Fan. Building
              products, exploring the world.
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-gray-500 mb-4">
              <Link
                href="https://twitter.com/manoj_ahi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-emerald-600 hover:underline"
              >
                <HiOutlineLink className="w-4 h-4" />
                twitter.com/manoj_ahi
              </Link>
              <span className="inline-flex items-center gap-1">
                <HiOutlineCalendar className="w-4 h-4" />
                Building since 2014
              </span>
            </div>

            <div className="flex flex-wrap gap-5 text-sm">
              <span className="text-gray-500">
                <span className="font-bold text-black">40+</span> Products
                Launched
              </span>
              <span className="text-gray-500">
                <span className="font-bold text-black">20</span> Countries
                Visited
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
