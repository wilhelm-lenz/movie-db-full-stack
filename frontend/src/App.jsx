import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { MovieContextProvider } from "./contextes/MovieContext";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import CreateMovie from "./pages/createMovie/CreateMovie";
import Favorites from "./pages/favorites/Favorites";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <MovieContextProvider>
        <Header>
          <Nav />
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movieDetails/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/createMovie" element={<CreateMovie />} />
        </Routes>
        <Footer />
      </MovieContextProvider>
    </>
  );
}

export default App;
