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

const SHELF_ARRAY = [
  {title: CURRENTLU_READING_TITLE, key: CURRENTLY_READING_SHELF_KEY},
  {title: WANT_TO_READ_TITLE, key: WANT_TO_READ_SHELF_KEY},
  {title: READ_TITLE, key: READ_KEY}
]

const MainScreen = () => {
  const [books, setBooks] = useState([]);
  const [update, setUpdate] = useState([]);

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
  }, [update]);

  const updateBookShelf = async (bookId, newShelf) => {
    const bookToBeUpdated = books.filter((book) => (book.id === bookId))
    const res = await BooksAPI.update({id: bookId}, newShelf);
    setUpdate(res)
  };

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {SHELF_ARRAY.map((shelf) => (
              <BookShelve
                key={shelf.title}
                bookShelfName={shelf.title}
                books={getBooksFromSpecificShelf(shelf.key)}
                updateBookShelf={(bookId, newShelf) => {updateBookShelf(bookId, newShelf)}}
              />
            ))}
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
