import { useState } from 'react';
import { Link } from 'react-router-dom';
// import '@/src/styles/index.scss';
import "./CategoryDropdown.scss";

interface CategoryDropdownProps {
  onSelectCategory: (category: string) => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  onSelectCategory,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleCategoryClick = (category: string) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
      onSelectCategory(category);
    }
    closeMenu();
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    if (!selectedCategories.includes(category)) {
      setSelectedCategories([...selectedCategories, category]);
      onSelectCategory(category);
    }
    closeMenu();
  };

  const handleCategoryAll = () => {
    setSelectedCategories(['All']);
    onSelectCategory('All');
    closeMenu();
  };

  return (
    <div className="category-dropdown">
      <h2 className="category-title">Search by category</h2>
      {isMenuOpen && (
        <div className="menu">
          <Link to="#" className="menu-item" onClick={handleCategoryAll}>
            All
          </Link>
          <Link to="#" className="menu-item" onClick={() => handleCategoryClick('tech')}>
            tech
          </Link>
          <Link to="#" className="menu-item" onClick={() => handleCategoryClick('work')}>
            work
          </Link>
          <Link to="#" className="menu-item" onClick={() => handleCategoryClick('database')}>
            database
          </Link>
          <Link to="#" className="menu-item" onClick={() => handleCategoryClick('Web Development')}>
            Web Development
          </Link>
          <Link to="#" className="menu-item" onClick={() => handleCategoryClick('Backend Developer')}>
            Backend Developer
          </Link>
        </div>
      )}
      <div className="dropdown__parent">
        <div className="dropdown">
          <select
            value="select"
            onChange={handleSelectChange}
            className="dropdown-select"
          >
            <option value="select" disabled>
              Select
            </option>
            <option value="All">All</option>
            <option value="tech">tech</option>
            <option value="work">work</option>
            <option value="database">database</option>
            <option value="Web Development">Web Development</option>
            <option value="Backend Developer">Backend Developer</option>
          </select>
        </div>
        <div className="selected-categories">
          {selectedCategories.map((category) => (
            <span key={category} className="category-tag">
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
