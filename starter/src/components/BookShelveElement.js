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
}) => {

  const onBookShelfChanged = async ({newShelf}) => {
    console.log(newShelf)
    const res = await BooksAPI.update({id: bookID}, newShelf);
    console.log(res)
  };

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
          <BookShelfChanger bookShelf={bookShelf} onBookShelfChanged={(value) => onBookShelfChanged({newShelf: value})}  />
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
};

export default BookShelveElement;
