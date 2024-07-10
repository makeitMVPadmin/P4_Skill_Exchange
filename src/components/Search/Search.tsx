import searchIcon from "../../assets/icons/search-24px.svg";
import { Link } from "react-router-dom";
// import "./SearchCard.scss";

const SearchCard = ({ name, handleSearchChange }) => {
  return (
    <>
      <div className="search">
        <h1>{name}</h1>
        <div className="search__right">
          <div className="search__inputWrapper">
            <input
              className="search__input"
              placeholder="Search..."
              onChange={(e) => handleSearchChange(e.target.value)}
              type="search"
            />
            <img src={searchIcon} alt="searchIcon" />
          </div>
          <Link
            to={name === "Inventory" ? "add" : "warehouse/add"}
            className="link"
          >
            <button className="search__button">
              <p className="search__buttonCopy">
                + Add New {name === "Inventory" ? "Item" : "Warehouse"}
              </p>
            </button>
          </Link>
        </div>
      </div>
      <hr className="divider search__divider" />
    </>
  );
};

export default SearchCard;
