exports.asMovieListItem = (movie) => {
  return {
    _id: movie._id,
    poster: movie.poster,
    title: movie.title,
    director: movie.director,
    plot: movie.plot,
    year: movie.year,
    genres: movie.genres,
    tomato: movie.tomato,
    runtime: movie.runtime,
  };
};
