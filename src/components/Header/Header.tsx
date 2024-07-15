import { Link } from "react-router-dom";
import { useState } from "react";
import "../../styles/index.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href={"/"}>
          <h1 className="text-2xl font-bold text-gray-800 font-corben">
            Communiti
          </h1>
        </a>
        <nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex space-x-6 mt-4 md:mt-0 `}
          >
            <li>
              <Link
                to="#"
                className="text-gray-600 hover:text-gray-900 font-gilroy"
              >
                Events
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="text-gray-600 hover:text-gray-900 font-gilroy"
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className="text-gray-600 hover:text-gray-900 font-gilroy"
              >
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
