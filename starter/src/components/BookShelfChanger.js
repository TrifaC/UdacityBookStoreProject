import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const BookShelfChanger = ({bookShelf, onBookShelfChanged}) => {

  const [ selectedOption, setSelectedOption ] = useState("")

  // Handle the change in the select tag.
  const onSelectChange = (value) => {
    setSelectedOption(value);
    onBookShelfChanged(value);
  };

  // Set the book shelf selection when the book shelf value is available.
  useEffect(() => {
    setSelectedOption(bookShelf);
  }, [bookShelf]);

  return(
    <div className="book-shelf-changer">
      <select value={selectedOption} onChange={(event)=>{onSelectChange(event.target.value)}}>
        <option value="none" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>                                
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  bookShelf: PropTypes.string.isRequired,
  onBookShelfChanged: PropTypes.func.isRequired,
};

export default BookShelfChanger;