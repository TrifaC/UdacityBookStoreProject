import React, { useState } from "react";
import PropTypes from "prop-types";

import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";

import * as BooksAPI from "../apis/BooksAPI";
import * as Constants from "../utilities/Constants";
import { createBrowserHistory } from "history";

const SearchScreen = () => {


//------------------------------------- Use State Declare ---------------------


  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);


//------------------------------------- Update Function Via API ---------------


  const updateBookShelf = async (bookId, newShelf) => {
    // const bookToBeUpdated = books.filter((book) => (book.id === bookId))
    const res = await BooksAPI.update({id: bookId}, newShelf);
  };

  const searchBookFromServer = async (query, maxResults) => {
    const result = await BooksAPI.search(query, maxResults);
    setSearchResult(result);
  }


//------------------------------------- State Update Functions ----------------


  const updateQuery = (newQuery) => {
    setQuery(newQuery.trim());
    newQuery.length !== 0 
      ? searchBookFromServer(newQuery, 20)
      : setSearchResult([])
  }

//------------------------------------- Return --------------------------------


  return(
    <div className="app">
      <div className="search-books">
        <SearchBar 
          query={query} 
          onSearchBarValueChange={(value) => updateQuery(value)}
        />
        <SearchResult
          books={searchResult}
          updateBookShelf={(bookId, newShelf) => {updateBookShelf(bookId, newShelf)}}
        />
      </div>
    </div>
  );


};

export default SearchScreen;