import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const SearchBar = () => {
  return(
    <div className="search-books-bar">
      <Link to="/" className="close-search">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {

};

export default SearchBar;