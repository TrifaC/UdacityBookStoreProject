import React, { useState, useEffect } from "react";

import BookShelve from "../components/BookShelve";
import BookAddingButton from "../components/BookAddingButton";

import * as BooksAPI from "../apis/BooksAPI";
import * as Constants from "../utilities/Constants";


const MainScreen = () => {


//------------------------------------- Use State Declare -----------------------------------------


  const [books, setBooks] = useState([]);
  const [update, setUpdate] = useState([]);

  const getBooksFromSpecificShelf = (shelfName) => {
    return (
      books.filter((book) => book.shelf === shelfName)
    );
  }

  const updateBookShelf = async (bookId, newShelf) => {
    // const bookToBeUpdated = books.filter((book) => (book.id === bookId))
    const res = await BooksAPI.update({id: bookId}, newShelf);
    setUpdate(res)
  };


//------------------------------------- useEffect Functions ---------------------------------------


  useEffect(() => {
    const getBooksFromServer = async () => {
      // Get All Book From Server.
      const res = await BooksAPI.getAll();
      console.log(res);
      setBooks(res);
    };
    getBooksFromServer();
  }, [update]);


//------------------------------------- Return Function -------------------------------------------


  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {Constants.SHELF_ARRAY.map((shelf) => (
              <BookShelve
                key={shelf.title}
                bookShelfName={shelf.title}
                books={getBooksFromSpecificShelf(shelf.key)}
                updateBookShelf={(bookId, newShelf) => {updateBookShelf(bookId, newShelf)}}
              />
            ))}
          </div>
        </div>
        <BookAddingButton/>
      </div>
    </div>
  );
};

export default MainScreen;
