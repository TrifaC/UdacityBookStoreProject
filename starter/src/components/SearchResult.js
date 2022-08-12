import React, { useState } from "react";
import PropTypes from 'prop-types';

import BookShelveElement from "./BookShelveElement";

const SearchResult = ({ books, updateBookShelf }) => {

  return(
    <div className="search-books-results">
      <ol className="books-grid">
        {books.map((book) => (
          <BookShelveElement
              key={book.id}
              bookID={book.id}
              bookShelf={book.shelf}
              bookCoverImageUrl={book.imageLinks.thumbnail}
              bookTitle={book.title}
              bookAuthors={book.authors}
              updateBookShelf={updateBookShelf}
            />
        ))}
      </ol>
    </div>
  );

};

SearchResult.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired
};

export default SearchResult;