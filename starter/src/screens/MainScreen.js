import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import BookShelve from "../components/BookShelve";

import * as BooksAPI from "../apis/BooksAPI";

const CURRENTLY_READING_SHELF_KEY = "currentlyReading";
const CURRENTLU_READING_TITLE = "Currently Reading";
const WANT_TO_READ_SHELF_KEY = "wantToRead";
const WANT_TO_READ_TITLE = "Want To Read";
const READ_KEY = "read";
const READ_TITLE = "Read";

const MainScreen = () => {
  const [books, setBooks] = useState([]);

  const getBooksFromSpecificShelf = (shelfName) => {
    return (
      books.filter((book) => book.shelf === shelfName)
    );
  }

  useEffect(() => {
    const getBooksFromServer = async () => {
      // Get All Book From Server.
      const res = await BooksAPI.getAll();
      console.log(res);
      setBooks(res);
    };
    getBooksFromServer();
  }, []);

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelve
              bookShelfName={CURRENTLU_READING_TITLE}
              books={getBooksFromSpecificShelf(CURRENTLY_READING_SHELF_KEY)}
            />
            <BookShelve
              bookShelfName={WANT_TO_READ_TITLE}
              books={getBooksFromSpecificShelf(WANT_TO_READ_SHELF_KEY)}
            />
            <BookShelve
              bookShelfName={READ_TITLE}
              books={getBooksFromSpecificShelf(READ_KEY)}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
