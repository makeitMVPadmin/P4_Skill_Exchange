import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import "../../styles/index.scss";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("provider");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "provider") {
      navigate("/");
    } else if (tab === "seeker") {
      // Add navigation for "seeker" if needed
    }
  };

  const providerButtonClass = classNames(
    "py-2 px-4",
    {
      "bg-gray-300": activeTab === "provider",
      "text-gray-600 hover:text-gray-900": activeTab !== "provider",
    },
    "focus:outline-none focus:ring-2 focus:ring-gray-800 rounded-md"
  );

  const seekerButtonClass = classNames(
    "py-2 px-4",
    {
      "bg-gray-300": activeTab === "seeker",
      "text-gray-600 hover:text-gray-900": activeTab !== "seeker",
    },
    "focus:outline-none focus:ring-2 focus:ring-gray-800 rounded-md"
  );

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/">
          <h1 className="text-2xl font-bold text-gray-800 font-corben">Communiti</h1>
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
              <a href="/" className="text-gray-600 hover:text-gray-900 font-gilroy">Home</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-gilroy">Communities</a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-900 font-gilroy">Events</a>
            </li>
            <li>
              <a href="/skillshare" className="text-gray-600 hover:text-gray-900 font-gilroy">Skill Share</a>
            </li>
            <li className="relative">
              <div onClick={toggleDropdown} className="flex items-center cursor-pointer">
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
              {isDropdownOpen && (
                <ul className="absolute right-0 mt-2 py-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <li>
                    <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      View Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                      Sign Out
                      {/* // TODO: Add functionality to this when ready */}
                    </a>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto px-4 py-2 flex justify-center items-center space-x-4">
        {/* TODO: Make a reusable button */}
        <button
          onClick={() => handleTabClick("provider")}
          className={providerButtonClass}
        >
          As a Skill Provider
        </button>
        <button
          onClick={() => handleTabClick("seeker")}
          className={seekerButtonClass}
        >
          As a Talent Seeker
        </button>
      </div>
    </header>
  );
}

export default Header;
