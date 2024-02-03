import { useContext, useState } from "react";
import "./AddMovieForm.scss";
import { MovieContext } from "../../contextes/MovieContext";
import { useLocation } from "react-router-dom";

const AddMovieForm = () => {
  const location = useLocation().pathname.split("/").slice(1, 2).join("");

  const { setMovies } = useContext(MovieContext);
  const [title, setTitle] = useState("");
  const [year, setAYear] = useState("");
  const [director, setDirector] = useState("");
  const [genres, setGenres] = useState([]);
  const [rating, setRating] = useState("");
  const [posterUrl, setPosterURL] = useState("");
  const [description, setDescription] = useState("");
  const [runtime, setRuntime] = useState("");

  const createMovie = async () => {
    try {
      const res = await fetch(`http://localhost:8000/api/v1/movies`, {
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
      console.log(data.movies);
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
            description,
            runtime,
          },
        ]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="section-add-movie">
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
            type="text"
            name="year"
            id="year"
            placeholder="Year"
            value={year}
            onChange={(e) => setAYear(e.target.value)}
          />
        </label>
        <label htmlFor="director">
          <input
            type="text"
            name="director"
            id="director"
            placeholder="Director"
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
            type="text"
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
        <input type="button" value="Submit" onClick={createMovie} />
      </form>
    </section>
  );
};

export default AddMovieForm;
