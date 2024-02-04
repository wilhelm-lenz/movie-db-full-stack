exports.makeFavoriteMovie = ({ title, director, poster, inFavorites }) => {
  console.log("Title: ", typeof title);
  if (
    typeof title === "undefined" ||
    typeof title !== "string" ||
    title.trim() === ""
  ) {
    throw new Error("Title Value is invalid!");
  }

  console.log("director: ", typeof director);
  if (
    typeof director === "undefined" ||
    typeof director !== "string" ||
    director.trim() === ""
  ) {
    throw new Error("Director Value is invalid!");
  }

  console.log("poster: ", typeof poster);
  if (
    typeof poster === "undefined" ||
    typeof poster !== "string" ||
    !poster.includes("http") ||
    poster.trim() === ""
  ) {
    throw new Error("Poster Url Value is invalid!");
  }

  const movie = {
    title,
    director,
    poster,
    inFavorites,
  };

  return movie;
};
