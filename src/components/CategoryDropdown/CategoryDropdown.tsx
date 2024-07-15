import { useState } from "react";
import { Link } from "react-router-dom";
import "@/src/styles/index.scss";

function CategoryDropdown() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="flex items-center ">
        <h2 className="text-xl font-bold mb-2">Category</h2>
        <svg
          className="h-6 w-6 inline-block"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path d="M19 9l-7 7-7-7"></path>
          ) : (
            <path d="M9 5l7 7-7 7"></path>
          )}
        </svg>
      </button>
      {isMenuOpen && (
        <div className="absolute mt-2 w-56 bg-white shadow-lg rounded-md py-1 ring-1 ring-black ring-opacity-5">
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={closeMenu}
          >
            Category 1
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={closeMenu}
          >
            Category 2
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={closeMenu}
          >
            Category 3
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={closeMenu}
          >
            Category 4
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={closeMenu}
          >
            Category 5
          </Link>
        </div>
      )}
    </div>
  );
}

export default CategoryDropdown;
