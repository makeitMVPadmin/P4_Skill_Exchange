import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/index.scss';
import '../../styles/partials/_global.scss';
import './Header.scss';
import Logo from '../../assets/images/Community Logo.svg';
import DropDownIcon from '../../assets/Icons/Dropdown.svg';
import NotificationsIcon from '../../assets/Icons/Notifications.svg';
import Home from '../../assets/Icons/modified icons/Home.svg';
import { UserData } from '@/src/interfaces/types';
import { getUserData, getAllProjectsByUserID } from '@/src/utils/Firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [avatarLoaded, setAvatarLoaded] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const location = useLocation();

  const userID = 'UID99993230';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserData(userID);
        if (data !== undefined && data !== null) {
          setUserData(data as UserData);
        } else {
          toast.error('User not found');
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
        toast.error(`Failed to fetch user data: ${(err as Error).message}`);
      }
    };
    fetchData();
  }, [userID]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header__container">
        <a 
          href="/"
          className="header__logo"
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
              <a href="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
              <svg className="nav-item--img" viewBox="0 0 51 47" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.6667 34.6667V26.6667H28V34.6667H34.6667V24H38.6667L25.3333 12L12 24H16V34.6667H22.6667Z" stroke="currentColor"/>
              </svg>
                <p className="nav-item--title">Home</p>
              </a>
            </li>
            <li className="nav-parent">
              <a href="/communities" className={`nav-item ${isActive('/communities') ? 'active' : ''}`}>
              <svg className="nav-item--img" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.6776 41.6803C35.5411 41.3672 28.1261 36.956 28.1176 36.9502C27.0717 36.1811 26.9443 35.4328 27.788 35.003C28.5117 34.6355 29.1341 33.4509 29.6035 32.1832C29.6893 32.2211 29.7789 32.2291 29.8707 32.203C31.8403 31.627 31.8755 27.652 30.5581 28.3539C31.7896 17.6099 16.9144 17.6045 18.1459 28.3544C16.8269 27.6509 16.8632 31.627 18.8323 32.203C18.9235 32.2291 19.0141 32.2211 19.1 32.1838C19.5688 33.451 20.1901 34.6355 20.9139 35.003C21.7645 35.436 21.5965 36.1475 20.5635 36.9667C20.2189 37.2403 15.4184 39.9166 14.0632 40.8222C14.0605 40.8227 14.0557 40.8259 14.0557 40.8259H14.0573C13.4979 41.2008 13.1 41.5123 13.0259 41.6808C12.6397 42.571 12.5 44.0003 12.5 44.0003H36.2035C36.2035 44.0003 36.0648 42.571 35.6776 41.6803Z" fill="currentColor"/>
                <path d="M29.8575 21.5288C30.8255 22.6147 31.8911 24.4845 31.8138 27.4109C32.1892 27.692 32.5028 28.1731 32.6095 28.9187C32.8058 30.2957 32.2452 32.5518 30.4548 33.2542C29.97 34.3982 29.4404 35.2056 28.8522 35.7022H44.5007C44.5007 35.7022 44.361 34.2728 43.9748 33.3822C43.8383 33.0696 36.4234 28.6584 36.4154 28.652C35.3684 27.8835 35.2415 27.1352 36.0852 26.7053C36.809 26.3373 37.4308 25.1533 37.9007 23.8856C37.986 23.9229 38.0767 23.9315 38.1679 23.9043C40.137 23.3293 40.1727 19.3544 38.8554 20.0563C40.0612 9.53894 25.8426 9.31868 26.3956 19.3971C27.7311 19.7704 28.938 20.4984 29.8575 21.5288Z" stroke="currentColor"/>
              </svg>
                <p className="nav-item--title">Communities</p>
              </a>
            </li>
            <li className="nav-parent">
              <a href="/events" className={`nav-item ${isActive('/events') ? 'active' : ''}`}>
              <svg className="nav-item--img" viewBox="0 0 56 56" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 38.7033C12 41.3027 14.08 43.2904 16.8 43.2904H39.2C41.92 43.2904 44 41.3027 44 38.7033V26.471H12V38.7033ZM39.2 15.7678H36V14.2388C36 13.3213 35.36 12.7097 34.4 12.7097C33.44 12.7097 32.8 13.3213 32.8 14.2388V15.7678H23.2V14.2388C23.2 13.3213 22.56 12.7097 21.6 12.7097C20.64 12.7097 20 13.3213 20 14.2388V15.7678H16.8C14.08 15.7678 12 17.7555 12 20.3549V23.413H44V20.3549C44 17.7555 41.92 15.7678 39.2 15.7678Z" stroke="currentColor"/>
              </svg>
                <p className="nav-item--title">Events</p>
              </a>
            </li>
            <li className="nav-parent">
              <a href="/skillshare" className={`nav-item ${isActive('/skillshare') ? 'active' : ''}`}>
              <svg className="nav-item--img" viewBox="0 0 56 58" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.8271 24.9546H27.3874V28.4335H25.8271V24.9546Z" stroke="currentColor"/>
                <path d="M21.3745 24.3112C22.3822 24.844 23.4657 25.2265 24.5879 25.4466V24.9063C24.591 24.2612 25.125 23.7406 25.7829 23.7406H27.436C28.0923 23.7406 28.6232 24.2627 28.6248 24.9063V25.6105C30.0504 25.4284 31.4295 24.9882 32.6912 24.3112C33.5162 23.8756 40.5204 20.1264 41.1489 19.7941V19.0914C41.1473 17.8513 40.1227 16.8465 38.858 16.845H32.6788V14.0096C32.6757 12.9016 31.7609 12.003 30.6294 12H22.545C21.4135 12.0015 20.4971 12.9001 20.4956 14.0096V16.845H14.3104C13.6402 16.8541 13.0071 17.1455 12.569 17.6419C12.131 18.1397 11.9313 18.797 12.0211 19.4496C12.4947 19.7 20.6272 23.9196 21.3745 24.3112ZM21.7336 14.0095C21.7352 13.5709 22.0974 13.2157 22.5447 13.2142H30.6291C31.0765 13.2157 31.4387 13.5709 31.4402 14.0095V16.8449H21.7335L21.7336 14.0095Z" stroke="currentColor"/>
                <path d="M38.7842 39.7611C40.4001 38.7199 41.4682 37.0336 41.705 35.1516C41.9418 33.2679 41.3242 31.3782 40.0163 29.9816C36.498 26.1946 29.7972 27.9477 28.7677 33.0356C27.5279 38.5711 33.9673 42.912 38.7842 39.7611Z" stroke="currentColor"/>
                <path d="M27.5532 32.7867C28.6119 27.3681 35.497 24.8696 39.9101 28.2633C40.3651 28.5958 40.78 28.9752 41.1484 29.3987V21.184C40.5045 21.5285 34.1116 24.9376 33.285 25.3794C31.8424 26.155 30.259 26.6483 28.6243 26.8304V28.4758C28.6243 28.7854 28.5004 29.0844 28.2775 29.303C28.0547 29.5231 27.7513 29.6476 27.4355 29.6476H25.7824C25.1214 29.6476 24.5874 29.1224 24.5874 28.4758V26.6908C21.778 26.3402 15.8186 22.6609 13.2584 21.4634L12.0201 20.8198V35.2559L12.0186 35.2574C12.0217 36.5992 13.133 37.686 14.5013 37.686H28.1659C27.4074 36.1651 27.1926 34.441 27.5532 32.7867Z" stroke="currentColor"/>
                <path d="M43.5061 41.4552L41.6548 38.6624C40.4815 40.3623 38.6612 41.528 36.6025 41.8984L38.4538 44.6791C40.6812 47.8529 45.5571 44.7201 43.5061 41.4552Z" stroke="currentColor"/>
              </svg>
                <p className="nav-item--title">Skill Share</p>
              </a>
            </li>
            <li className="dropdown">
              <div onClick={toggleDropdown} className="dropdown-toggle">
                <img className="smallicon" src={NotificationsIcon} alt="notifications icon" />
                <div className="avatar">
                  <img
                    className="avatar-img"
                    src={userData?.profilePhoto || ''}
                    alt="User Avatar"
                    onLoad={() => setAvatarLoaded(true)}
                    onError={() => {
                      setAvatarError(true);
                      setAvatarLoaded(true);
                    }}
                  />
                </div>
                <img className="smallicon" src={DropDownIcon} alt="dropdpwn icon" />
              </div>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li>
                    <a href="/profile" className={`headerdropdown-item ${isActive('/profile') ? 'active' : ''}`}>
                      View Profile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="headerdropdown-item">
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
  )
}

export default Header
