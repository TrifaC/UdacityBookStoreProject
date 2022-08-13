import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import BookShelfChanger from "./BookShelfChanger";

const BookShelveElement = ({ book, updateBookShelf }) => {

  const [bookShelf, setBookShelf] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthors, setBookAuthors] = useState([]);
  const [bookCoverStyle, setBookCoverStyle] = useState({});

  const checkBooksCoverAvailableAndSetStyle = () => {
    book.imageLinks
      ? setBookCoverStyle({ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` })
      : setBookCoverStyle({});
  }

  useEffect(() => {
    const checkBooksKeyAvailable = () => {
      book.shelf 
        ? setBookShelf(book.shelf) 
        : setBookShelf("none");
      book.title 
        ? setBookTitle(book.title) 
        : setBookTitle("");
      book.authors 
        ? setBookAuthors(book.authors) 
        : setBookAuthors([]);
    };
    checkBooksKeyAvailable();
    checkBooksCoverAvailableAndSetStyle();
  }, []);

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={bookCoverStyle}
          ></div>
          <BookShelfChanger 
            bookID={book.id}
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
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired
};

export default BookShelveElement;
