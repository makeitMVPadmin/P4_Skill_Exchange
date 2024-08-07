import { useState } from 'react';
import { Link } from 'react-router-dom';
import './CategoryDropdown.scss';

interface CategoryDropdownProps {
  onSelectCategory: (category: string) => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ onSelectCategory }) => {
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

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value;
    if (category !== 'select') {
      setSelectedCategory(category);
      onSelectCategory(category);
    }
  };

  const clearSelection = () => {
    setSelectedCategory(null);
    onSelectCategory('All');
  };

  return (
    <div className="category-dropdown">
      <h2 className="category-title">Search by category</h2>
      {isMenuOpen && (
        <div className="menu">
          <Link to="#" className="menu-item" onClick={() => handleCategoryClick('All')}>
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
            <option className="dropdown" value="select" disabled>
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
          {selectedCategory && selectedCategory !== 'All' && (
            <span key={selectedCategory} className="category-tag">
              {selectedCategory}
              <button className="clear-btn" onClick={clearSelection}>X</button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
