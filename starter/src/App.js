import "./App.css";
import { Route, Routes } from "react-router-dom";

import MainScreen from "./screens/MainScreen";
import SearchScreen from "./screens/SearchScreen";

const App = () => {

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
