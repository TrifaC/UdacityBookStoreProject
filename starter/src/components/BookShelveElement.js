import React, {useState} from "react";
import PropTypes from 'prop-types';

import BookShelfChanger from "./BookShelfChanger";

const BookShelveElement = ({bookCoverImageUrl, bookTitle, bookAuthors}) => {
  return(
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url("${bookCoverImageUrl}")`,
            }}
          ></div>
          <BookShelfChanger/>
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthors}</div>
      </div>
    </li>
  );
};

BookShelveElement.propTypes = {
  bookCoverImageUrl: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookAuthors: PropTypes.string.isRequired
};

export default BookShelveElement;