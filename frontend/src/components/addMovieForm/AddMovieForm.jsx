/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import "./AddMovieForm.scss";
import { MovieContext } from "../../contextes/MovieContext";
import { useLocation } from "react-router-dom";

const AddMovieForm = ({ movie }) => {
  const location = useLocation().pathname.split("/").slice(1, 2).join("");

  const { setMovies } = useContext(MovieContext);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [genres, setGenres] = useState([]);
  const [rating, setRating] = useState("");
  const [posterUrl, setPosterURL] = useState("");
  const [description, setDescription] = useState("");
  const [runtime, setRuntime] = useState("");

  useEffect(() => {
    if (location === "movieDetails" && movie) {
      setTitle(movie.title || "");
      setYear(movie.year.toString() || "");
      setDirector(movie?.director || "");
      setGenres(movie.genres.map((genre) => genre).join(", ") || "");
      setRating(movie.tomato.rating.toString() || "");
      setPosterURL(movie.poster || "");
      setDescription(movie.plot || "");
      setRuntime(movie.runtime.toString() || "");
    }
  }, []);

  const localURL = import.meta.env.VITE_BACKAND_URL;

  const createMovie = async () => {
    try {
      const res = await fetch(`${localURL}/api/v1/movies`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          year,
          director,
          genres,
          tomato: { rating },
          posterUrl,
          plot: description,
          runtime,
        }),
      });
      const result = await res.json();
      const { success, data, error } = result;

      if (!success) throw error;
      else
        setMovies([
          ...data.movies,
          {
            title,
            year,
            director,
            genres,
            tomato: { rating },
            posterUrl,
            plot: description,
            runtime,
          },
        ]);
    } catch (err) {
      console.log(err);
    }
    setTitle("");
    setYear("");
    setDirector("");
    setGenres("");
    setRating("");
    setPosterURL("");
    setDescription("");
    setRuntime("");
  };

  const updatedMovie = async () => {
    try {
      const res = await fetch(`${localURL}/api/v1/movies/${movie._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          year,
          director,
          genres,
          tomato: { rating },
          posterUrl,
          plot: description,
          runtime,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setMovies((prevMovies) =>
          prevMovies.map((m) =>
            m._id === movie._id ? { ...result.data, _id: movie._id } : m
          )
        );
      } else {
        throw result.error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="section-add-and-update-movie container">
      {location !== "movieDetails" ? (
        <h2 className="heading-secondary">Add your own movies</h2>
      ) : null}
      <form className="add-movie-form">
        <label htmlFor="title">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="year">
          <input
            type="number"
            name="year"
            id="year"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>
        <label htmlFor="director">
          <input
            type="text"
            name="director"
            id="director"
            placeholder="Director"
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
        </label>
        <label htmlFor="genre">
          <input
            type="text"
            name="genre"
            id="genre"
            placeholder="Genre"
            value={genres}
            onChange={(e) => setGenres(e.target.value)}
          />
        </label>
        <label htmlFor="rating">
          <input
            type="number"
            name="rating"
            id="rating"
            placeholder="Rate"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
        <label htmlFor="posterUrl">
          <input
            type="text"
            name="runtime"
            id="runtime"
            placeholder="Runtime"
            value={runtime}
            onChange={(e) => setRuntime(e.target.value)}
          />
        </label>
        <label htmlFor="posterUrl">
          <input
            type="text"
            name="posterUrl"
            id="posterUrl"
            placeholder="URL for movieposter"
            value={posterUrl}
            onChange={(e) => setPosterURL(e.target.value)}
          />
        </label>

        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="button"
          value="Submit"
          className="submit-btn"
          onClick={location === "movieDetails" ? updatedMovie : createMovie}
        />
      </form>
    </section>
  );
};

export default AddMovieForm;
