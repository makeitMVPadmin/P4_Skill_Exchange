import { useState } from 'react'
import { Link } from 'react-router-dom'
import '@/src/styles/index.scss'
import DropdownIcon from '../../styles/assets/icons/icons8-dropdown-50.png'

interface CategoryDropdownProps {
  onSelectCategory: (category: string) => void
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  onSelectCategory
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category)
    onSelectCategory(category)
    closeMenu()
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const category = event.target.value
    setSelectedCategory(category)
    onSelectCategory(category)
    closeMenu()
  }

  const handleCategoryAll = () => {
    setSelectedCategory("All")
    onSelectCategory("All")
    closeMenu()
  }

  return (
    <div className="relative">
        <h2 className="text-xl font-bold mb-2">Search by category</h2>
      {isMenuOpen && (
        <div className="absolute mt-2 w-56 bg-white shadow-lg rounded-md py-1 ring-1 ring-black ring-opacity-5">
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={handleCategoryAll}
          >
            All
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => handleCategoryClick('tech')}
          >
            tech
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => handleCategoryClick('work')}
          >
            work
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => handleCategoryClick('database')}
          >
            database
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => handleCategoryClick('Web Development')}
          >
            Web Development
          </Link>
          <Link
            to="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            onClick={() => handleCategoryClick('Backend Developer')}
          >
            Backend Developer
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
      {/* Dropdown field */}
      <div className="mt-2">
        <select
          value={selectedCategory || "select"}
          onChange={handleSelectChange}
          className="border border-gray-300 rounded-md p-2 w-full"
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
    </div>
  )
}

export default CategoryDropdown
