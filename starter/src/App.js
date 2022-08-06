import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import MainScreen from "./screens/MainScreen";
import SearchScreen from "./screens/SearchScreen";

const App = () => {
  const [showSearchPage, setShowSearchpage] = useState(false);
  
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
