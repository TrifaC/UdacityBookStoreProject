import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import BookShelfChanger from "./BookShelfChanger";

const BookShelveElement = ({ book, updateBookShelf }) => {


//------------------------------------- useState --------------------------------------------------


  const [bookShelf, setBookShelf] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthors, setBookAuthors] = useState([]);
  const [bookCoverStyle, setBookCoverStyle] = useState({});


//------------------------------------- useEffect -------------------------------------------------


  const checkBooksCoverAvailableAndSetStyle = () => {
    const valideBookCoverStyle = {
      width: 128,
      height: 193,
      backgroundImage: `url("${book.imageLinks.thumbnail}")`
    }
    book.imageLinks
      ? setBookCoverStyle(valideBookCoverStyle)
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


//------------------------------------- Return ----------------------------------------------------


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
