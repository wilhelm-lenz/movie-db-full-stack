exports.makeMovie = ({
  _id,
  title,
  year,
  rated,
  runtime,
  countries,
  genres,
  director,
  writers,
  actors,
  plot,
  poster,
  imdb,
  tomato,
  metacritic,
  awards,
  type,
}) => {
  if (
    typeof title === "undefined" ||
    typeof title !== "string" ||
    title.trim() === ""
  ) {
    throw new Error("Title Value is invalid!");
  }

  if (typeof year === "undefined" || typeof year !== "number" || year === 0) {
    throw new Error("The Year Value is invalid!");
  }

  if (
    typeof director === "undefined" ||
    typeof director !== "string" ||
    director.trim() === ""
  ) {
    throw new Error("Director Value is invalid!");
  }

  if (!Array.isArray(genres) || genres.length === 0) {
    throw new Error("At least one genre required");
  }

  if (
    (tomato && typeof tomato.rating === "undefined") ||
    typeof tomato.rating !== "number"
  ) {
    throw new Error("Rating Value is invalid!");
  }

  if (
    typeof poster === "undefined" ||
    typeof poster !== "string" ||
    !poster.includes("http") ||
    poster.trim() === ""
  ) {
    throw new Error("Poster Url Value is invalid!");
  }

  console.log("plot: ", typeof plot);
  if (
    typeof plot === "undefined" ||
    typeof plot !== "string" ||
    plot.trim() === ""
  ) {
    throw new Error("Description Value is invalid!");
  }

  console.log("runtime: ", typeof runtime);
  if (
    typeof runtime === "undefined" ||
    typeof runtime !== "number" ||
    runtime === 0
  ) {
    runtime = 90;
  }

  const movie = {
    _id,
    title,
    year,
    rated,
    runtime,
    countries,
    genres,
    director,
    writers,
    actors,
    plot,
    poster,
    imdb,
    tomato,
    metacritic,
    awards,
    type,
  };

  return movie;
};
