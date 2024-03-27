import React,{useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({ handleSearch }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = () => {
    navigate("/cart");
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <span className="font-bold text-lg">Your Logo</span>
          </Link>
        </div>
        {/* <div className="flex justify-center">
          <a href="#" className="mx-4">
            Home
          </a>
          <a href="#" className="mx-4">
            Categories
          </a>
        </div> */}
        <div className="flex items-center">
          <div className="relative mr-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-lg focus:outline-none text-gray-800"
              value={searchQuery}
              onChange={handleChange}
            />
            <button className="absolute right-0 top-0 mt-2 mr-2">
              <FontAwesomeIcon icon="search" className="text-gray-800" />
            </button>
          </div>
          <button className="bg-white text-gray-800 px-4 py-2 rounded-lg mr-4">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="mr-2"
              onClick={addToCart}
            />
          </button>
          {/* <button className="bg-white text-gray-800 px-4 py-2 rounded-lg">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
