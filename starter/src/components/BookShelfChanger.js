import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const BookShelfChanger = ({bookID, bookShelf, onChange}) => {

  const [ selectedOption, setSelectedOption ] = useState("")

  // Handle the change in the select tag.
  const onSelectChange = (value) => {
    setSelectedOption(value);
    onChange(bookID ,value);
  };

  // Set the book shelf selection when the book shelf value is available.
  useEffect(() => {
    setSelectedOption(bookShelf);
  }, [bookShelf]);

  return(
    <div className="book-shelf-changer">
      <select value={selectedOption} onChange={(event)=>{onSelectChange(event.target.value)}}>
        <option value="title" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>                                
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfChanger.propTypes = {
  bookID: PropTypes.string.isRequired,
  bookShelf: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default BookShelfChanger;