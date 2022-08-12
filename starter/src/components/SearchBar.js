import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const SearchBar = ({ query, onSearchBarValueChange }) => {

  return(
    <div className="search-books-bar">
      <Link to="/" className="close-search">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          placeholder="Search by title, author, or ISBN"
          type="text"
          value={query}
          onChange={(event) => onSearchBarValueChange(event.target.value)}
        />
      </div>
    </div>
  );

};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onSearchBarValueChange: PropTypes.func.isRequired
};

export default SearchBar;