import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import MainScreen from "./screens/MainScreen";
import SearchScreen from "./screens/SearchScreen";

import * as BooksAPI from "./apis/BooksAPI";

const App = () => {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      console.log(res)
    };
    getBooks();
  }, []);

  return (
    <Routes>
      <Route
        exact path="/"
        element={<MainScreen/>}
      />
      <Route
        path="/search"
        element={<SearchScreen/>}
      />
    </Routes>
  );
}

export default App;
