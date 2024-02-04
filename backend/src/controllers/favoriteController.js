const { OK, INTERNAL_SERVER_ERROR } = require("../data_access/httpStatusCodes");
const { MovieService } = require("../services");

exports.getAllFavoritesCtrl = async (_, res) => {
  try {
    const favoriteMovies = await MovieService.getAllFavorites();
    res.status(OK).json({
      status: "success",
      data: { favoriteMovies },
    });
  } catch (error) {
    console.log(error);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ status: "fail", error, message: "Fail to load favorite Movies" });
  }
};

exports.createFavoriteCtrl = async (req, res) => {
  try {
    const favoriteMovieId = await req.params.id;

    const movieInfo = await MovieService.getMovie(favoriteMovieId);

    const favoriteMovies = await MovieService.addToFavorites(movieInfo);

    res.status(OK).json({
      status: "success",
      data: { favoriteMovies },
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not retrieve favorite movies",
    });
  }
};

exports.deleteFavoriteMovieCtrl = (req, res) => {
  try {
    const movieId = req.params.id;
    const deletedMovie = MovieService.deleteFromFavorites(movieId);
    res.status(OK).json({
      status: "success",
      data: deletedMovie,
    });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not retrieve movies",
    });
  }
};
