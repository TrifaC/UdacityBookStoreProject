import React, { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import SearchResult from "../components/SearchResult";

import * as BooksAPI from "../apis/BooksAPI";

const SearchScreen = () => {


//------------------------------------- Use State Declare -----------------------------------------

  const [localBooks, setLocalBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);


//------------------------------------- Shelf Update Functions ------------------------------------

  // Update the book shelf when changing the bookShelfChanger.
  const updateBooksShelfByUser = async (bookId, newShelf) => {
    const res = await BooksAPI.update({id: bookId}, newShelf);
  };

  // Get the book shelf of the search result from our local data.
  const getShelfNameOfLocalBook = ({ resultBookID }) => {
    const targetElment = localBooks.find((localBook) => localBook.id === resultBookID)
    if (targetElment) {
      return targetElment.shelf;
    }
    return null;
  }

  // Update the book shelf value for the search resutl.
  const updateBooksShelfFromLocal = (result) => {
    result.map((book) => {
      const shelfName = getShelfNameOfLocalBook({resultBookID: book.id})
      if (shelfName) {
        book.shelf = shelfName
      }
    });
    setSearchResult(result);
  };


//------------------------------------- Query Update Functions ------------------------------------


  // Update the search query.
  const updateQuery = (searchQuery) => {
    setQuery(searchQuery.trim());
  }


//------------------------------------- UseEffect -------------------------------------------------


  // Update the search result when the search query is changed.
  useEffect(() => {
    const searchBookFromServer = async (currentQuery, maxResults) => {
      const result = await BooksAPI.search(currentQuery, maxResults);
      if ('error' in result){
        setSearchResult([]);
      } else {
        updateBooksShelfFromLocal(result);
      }
    }

    query.length > 1 
    ? searchBookFromServer(query, 20)
    : setSearchResult([])
  }, [query]);

  // Get the local books from server.
  useEffect(()=>{
    const getBooksFromServer = async () => {
      // Get All Book From Server.
      const res = await BooksAPI.getAll();
      setLocalBooks(res);
    };
    getBooksFromServer();
  }, []);


//------------------------------------- Return ----------------------------------------------------


  return(
    <div className="app">
      <div className="search-books">
        <SearchBar 
          query={query} 
          onSearchBarValueChange={(value) => updateQuery(value)}
        />
        <SearchResult
          books={searchResult}
          updateBookShelf={(bookId, newShelf) => {updateBooksShelfByUser(bookId, newShelf)}}
        />
      </div>
    </div>
  );


};

export default SearchScreen;