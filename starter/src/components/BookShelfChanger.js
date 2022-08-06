import React, {useState} from "react";
import PropTypes from 'prop-types';

const BookShelfChanger = ({bookShelf}) => {

  return(
    <div className="book-shelf-changer">
      <select defaultValue={bookShelf}>
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

};

export default BookShelfChanger;