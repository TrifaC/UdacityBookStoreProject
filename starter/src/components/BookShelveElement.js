import React from "react";
import PropTypes from "prop-types";

import BookShelfChanger from "./BookShelfChanger";

import * as BooksAPI from "../apis/BooksAPI";

const BookShelveElement = ({
  bookID,
  bookShelf,
  bookCoverImageUrl,
  bookTitle,
  bookAuthors,
  updateBookShelf
}) => {

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${bookCoverImageUrl}")`,
            }}
          ></div>
          <BookShelfChanger 
            bookID={bookID}
            bookShelf={bookShelf} 
            onChange={updateBookShelf}  />
        </div>
        <div className="book-title">{bookTitle}</div>
        {bookAuthors.map((author) => (
          <div key={author} className="book-authors">
            {author}
          </div>
        ))}
      </div>
    </li>
  );
};

BookShelveElement.propTypes = {
  bookID: PropTypes.string.isRequired,
  bookShelf: PropTypes.string.isRequired,
  bookCoverImageUrl: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookAuthors: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired
};

export default BookShelveElement;
