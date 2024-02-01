exports.makeMovie = ({
  _id,
  title,
  year,
  director,
  genres,
  tomato,
  poster,
  plot,
  runtime,
}) => {
  // if (!genres || !Array.isArray(genres) || genres.length === 0) {
  //   throw new Error("At least one genre required");
  // }
  const movie = {
    _id,
    title,
    year,
    director,
    genres,
    tomato,
    poster,
    plot,
    runtime,
  };

  return movie;
};
