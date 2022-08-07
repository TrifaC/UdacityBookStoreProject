import React, {useState} from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const SearchResult = () => {
  return(
    <div className="search-books-results">
      <ol className="books-grid"></ol>
    </div>
  );
};

SearchResult.propTypes = {

};

export default SearchResult;