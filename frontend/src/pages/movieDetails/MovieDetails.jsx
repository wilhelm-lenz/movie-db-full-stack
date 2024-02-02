import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Main from "../../components/main/Main";
import "./MovieDetails.scss";
import { MovieContext } from "../../contextes/MovieContext";
import FavoritesButton from "../../components/buttons/FavoritesButton";
import EditMovieButton from "../../components/buttons/EditMovieButton";

const MovieDetails = () => {
  const { state } = useLocation();
  const { id } = useParams();
  const { movies, setMovies, setFavoriteMovies, isInFavorites } =
    useContext(MovieContext);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const getAllMovies = async () => {
      const res = await fetch(`http://localhost:8000/api/v1/movies`);
      const dataObj = await res.json();
      const { status, data, error } = dataObj;
      if (status !== "success") console.log(error);
      else setMovies(data.movies);
    };

    getAllMovies();

    const getAllFavoriteMovies = async () => {
      const res = await fetch(`http://localhost:8000/api/v1/favorites`);
      const dataObj = await res.json();
      const { status, data, error } = dataObj;
      if (status !== "success") console.log(error);
      else setFavoriteMovies(data.favoriteMovies);
    };

    getAllFavoriteMovies();
  }, [id]);

  const handleImageLoaded = () => {
    setImageLoaded(true); // Setzt den Status, wenn das Bild erfolgreich geladen wurde
  };

  const handleImageError = (e) => {
    e.target.src = state.defaultPoster; // Setzt das Bild auf das Standardbild, wenn ein Fehler auftritt
  };

  const movie = movies?.find((movie) => movie._id === id);
  if (!movie) {
    return <div>Film nicht gefunden.</div>;
  }

  const { description, director, genres, runtime, title, year, tomato } = movie;

  return (
    <>
      <Main>
        <section className="section-movie-details container">
          <h2 className="heading-secondary">{title}</h2>
          <span className="year-and-director">
            {year} | {director}
          </span>
          <div className="btns-wrapper">
            <FavoritesButton btnText={"Add to Favorites"} movieId={id} />
            <EditMovieButton btnText={"Edit Movie"} />
          </div>
          <article className="movie-details-wrapper">
            <div className="movie-details-left-side">
              {!imageLoaded && <div>Loading...</div>}
              <img
                src={state.posterURL}
                alt={`picture of ${title}`}
                className="movie-details-img"
                onLoad={handleImageLoaded} // Event-Handler für erfolgreiches Laden
                onError={handleImageError}
              />
              <div className="movie-details-rating-and-duration-wrapper">
                {tomato ? (
                  <span className="movie-details-rating">
                    Rating: {tomato?.rating}
                  </span>
                ) : null}

                <span className="movie-details-duration">
                  Duration: {Math.floor(runtime / 60)} h {runtime % 60} min
                </span>
              </div>
            </div>
            <div className="movie-details-right-side">
              {genres.map((genre, index) =>
                genre ? (
                  <span className="movie-details-genre" key={index}>
                    {genre}
                  </span>
                ) : null
              )}
              <h2 className="heading-secondary">Story</h2>
              <p className="movie-details-description">{description}</p>
            </div>
          </article>
        </section>
      </Main>
    </>
  );
};

export default MovieDetails;
