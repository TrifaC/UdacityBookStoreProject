import React, { useState } from "react";
import PropTypes from "prop-types";

import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";

const SearchScreen = () => {
  return(
    <div className="app">
      <div className="search-books">
        <SearchBar/>
        <SearchResult/>
      </div>
    </div>
  );
};

export default SearchScreen;