import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { MovieContextProvider } from "./contextes/MovieContext";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import CreateMovie from "./pages/createMovie/CreateMovie";
import Favorites from "./pages/favorites/Favorites";

function App() {
  return (
    <>
      <MovieContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movieDetails/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/createMovie" element={<CreateMovie />} />
        </Routes>
      </MovieContextProvider>
    </>
  );
}

export default App;
