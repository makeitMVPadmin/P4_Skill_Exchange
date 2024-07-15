import { useState } from "react";
import "../../styles/index.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href={"/"}>
          <h1 className="text-2xl font-bold text-gray-800 font-corben">
            Communiti
          </h1>
        </a>
        <nav className="flex items-center space-x-6">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 rounded-md"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
          <ul className={`${isMenuOpen ? "block" : "hidden"} md:flex space-x-6 mt-4 md:mt-0`}>
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-900 font-gilroy">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-gilroy">
                Communities
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-gilroy">
                Events
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-600 hover:text-gray-900 font-gilroy">
                Skill Share
              </a>
            </li>
            <li className="relative">
              <div onClick={toggleMenu} className="flex items-center cursor-pointer">
                <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                <svg
                  className="h-4 w-4 ml-2 text-gray-600 hover:text-gray-900"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
              {isMenuOpen && (
                <ul className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <li>
                    <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      View Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Sign Out
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
