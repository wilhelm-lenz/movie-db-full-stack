exports.parsingDataFromBody = (movieInfo) => {
  const updateData = {
    title: movieInfo.title,
    year: parseInt(movieInfo.year),
    director: movieInfo.director,
    genres: movieInfo.genres.split(",").map((genre) => genre.trim()),
    tomato: { rating: parseFloat(movieInfo.tomato.rating) || null },
    poster: movieInfo.posterUrl,
    plot: movieInfo.plot,
    runtime: parseInt(movieInfo.runtime),
  };
  return updateData;
};
