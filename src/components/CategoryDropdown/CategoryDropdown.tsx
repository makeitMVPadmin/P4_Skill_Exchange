import { useState } from "react";
import { Link } from "react-router-dom";
import "@/src/styles/index.scss";
import DropdownIcon from "../../styles/assets/icons/icons8-dropdown-50.png";

interface CategoryDropdownProps {
  onSelectCategory: (category: string) => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  onSelectCategory,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onSelectCategory(category);
    closeMenu();
  };

  return (
    <div className="relative">
      <button onClick={toggleMenu} className="flex items-center space-x-2">
        <h2 className="text-xl font-bold mb-2">Categories</h2>
        <img 
          src={DropdownIcon} 
          alt="Dropdown Icon" 
          className="w-4 h-4 mt-1"
        />
      </button>
      {isMenuOpen && (
        <div className="absolute mt-2 w-56 bg-white shadow-lg rounded-md py-1 ring-1 ring-black ring-opacity-5">
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => handleCategoryClick("Development")}
          >
            Development
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => handleCategoryClick("Design")}
          >
            Design
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => handleCategoryClick("Research")}
          >
            Research
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => handleCategoryClick("Mobile Development")}
          >
            Mobile Development
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => handleCategoryClick("Tutoring")}
          >
            Tutoring
          </Link>
        </div>
      )}
      {/* Display the selected category as a bubble tag */}
      {selectedCategory && (
        <div className="mt-2">
          <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm">
            {selectedCategory}
          </span>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
