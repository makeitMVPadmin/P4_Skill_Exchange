import searchIcon from "/icons/search-icon.svg";
import "./SearchCard.scss";

const SearchCard = ({ name, handleSearchChange }) => {
  return (
    <div className="search">
      <div className="search__bar">
        <div className="search__bar-input">
          <input
            className="search__input"
            placeholder="Search..."
            onChange={(e) => handleSearchChange(e.target.value)}
            type="search"
          />
          <img 
            src={searchIcon} 
            alt="searchIcon" 
            className="search__icon" 
          />
        </div>
        <div className="search__bar-categories">
          <select className="category__button" defaultValue={"design"}>
            <option value="design">Design</option>
            <option value="engineering">Engineering</option>
            <option value="product">Product</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
    </div> 
  );
};

export default SearchCard;
