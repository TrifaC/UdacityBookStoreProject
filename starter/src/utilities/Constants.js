const CURRENTLY_READING_SHELF_KEY = "currentlyReading";
const CURRENTLU_READING_TITLE = "Currently Reading";
const WANT_TO_READ_SHELF_KEY = "wantToRead";
const WANT_TO_READ_TITLE = "Want To Read";
const READ_KEY = "read";
const READ_TITLE = "Read";

const SHELF_ARRAY = [
  {title: CURRENTLU_READING_TITLE, key: CURRENTLY_READING_SHELF_KEY},
  {title: WANT_TO_READ_TITLE, key: WANT_TO_READ_SHELF_KEY},
  {title: READ_TITLE, key: READ_KEY}
]

const EMPTY_QUETY_RESULT = { error: "empty query", items: [] }

export { SHELF_ARRAY, EMPTY_QUETY_RESULT }