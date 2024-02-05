exports.asFavoriteListItem = (movie) => {
  return {
    _id: movie?._id,
    poster: movie.poster,
    title: movie.title,
    director: movie.director,
    inFavorites: true,
  };
};
