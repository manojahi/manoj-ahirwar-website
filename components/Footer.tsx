import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-2 sm:mb-0">
            <p>
              &copy; 2024 All rights reserved. |{" "}
              <a
                href="https://twitter.com/manoj_ahi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              > 
                @manoj_ahi
              </a>
            </p>
          </div>
          <div>
            <a
              href="https://github.com/manojahi/manoj-ahirwar-website"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Source Code at Github
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
