import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <p className="text-gray-400">
            © 2023 My Portfolio. All rights reserved.
          </p>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
