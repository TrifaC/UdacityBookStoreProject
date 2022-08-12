import React from "react";
import PropTypes from "prop-types";

import BookShelfChanger from "./BookShelfChanger";

const BookShelveElement = ({
  bookID,
  bookShelf,
  bookCoverImageUrl,
  bookTitle,
  bookAuthors,
  updateBookShelf
}) => {

  const checkAndReturnBookShelfValue = () => {
    return (bookShelf ? bookShelf : "none");
  }

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
            bookShelf={checkAndReturnBookShelfValue()} 
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
  bookShelf: PropTypes.string,
  bookCoverImageUrl: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookAuthors: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired
};

export default BookShelveElement;
