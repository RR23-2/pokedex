import Home from "./page/Home.jsx";
import Search from "./page/Search.jsx";
import Detail from "./page/Detail.jsx";
import Favorite from "./page/Favorite.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/detail/:pokemonName" element={<Detail />} />
      <Route path="/favorite" element={<Favorite />} />
    </Routes>
  );
}

export default App;

