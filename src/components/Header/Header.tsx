import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/index.scss'
import '../../styles/partials/_global.scss'
import './Header.scss'
import Home from '../../../public/icons/Home.svg'
import Communities from '../../../public/icons/Community.svg'
import Events from '../../../public/icons/Events.svg'
import SkillShare from '../../../public/icons/Skill share.svg'
import Logo from '../../assets/images/Community Logo.svg'
import DropDownIcon from '../../assets/Icons/Dropdown.svg'
import NotificationsIcon from '../../assets/Icons/Notifications.svg'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('provider')
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <header className="header">
      <div className="header__container">
        <a 
        href="/"
        className='header__logo'
        >
          <img src={Logo} alt="logo" />
        </a>
        <nav className="nav">
          <div className="menu-toggle">
            <button onClick={toggleMenu} className="menu-button">
              <svg
                className="menu-icon"
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
          <ul className={`nav-list ${isMenuOpen ? 'open' : ''}`}>
            <li className="nav-parent">
              <a href="/" className="nav-item">
                <img className="nav-item--img" src={Home} alt="home icon" />
                <p className="nav-item--title">Home</p>
              </a>
            </li>
            <li className="nav-parent">
              <a href="#" className="nav-item">
                <img className="nav-item--img" src={Communities} alt="communities icon" />
                <p className="nav-item--title">
                  Communities
                </p>
              </a>
            </li>
            <li className="nav-parent">
              <a href="#" className="nav-item">
                <img className="nav-item--img" src={Events} alt="events icon" />
                <p className="nav-item--title">
                  Events
                </p>
              </a>
            </li>
            <li className="nav-parent">
              <a href="/skillshare" className="nav-item">
                <img className="nav-item--img" src={SkillShare} alt="skill share icon" />
                <p className="nav-item--title">
                  Skill Share
                </p>
              </a>
            </li>
            <li className="dropdown">
              <div onClick={toggleDropdown} className="dropdown-toggle">
                <img className="smallicon" src={NotificationsIcon} alt="notifications icon" />
                <div className="avatar"></div>
                <img className="smallicon" src={DropDownIcon} alt="dropdpwn icon" />
              </div>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/profile" className="dropdown-item">
                      View Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="dropdown-item">
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
    </header>
  )
}

export default Header
