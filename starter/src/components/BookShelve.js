import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import BookShelveElement from "./BookShelveElement";

const BookShelve = ({ bookShelfName, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{bookShelfName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <BookShelveElement
              key={book.id}
              bookID={book.id}
              bookShelf={book.shelf}
              bookCoverImageUrl={book.imageLinks.thumbnail}
              bookTitle={book.title}
              bookAuthors={book.authors}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelve.propTypes = {
  bookShelfName: PropTypes.string.isRequired,
};

export default BookShelve;
