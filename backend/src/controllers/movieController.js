const { OK, INTERNAL_SERVER_ERROR } = require("../data_access/httpStatusCodes");
const { MovieService } = require("../services");

exports.getAllMoviesCtrl = async (_, res) => {
  try {
    const result = await MovieService.getAllMovies();
    res.status(OK).json({
      status: "success",
      data: {
        movies: result,
      },
    });
  } catch (error) {
    console.log(error);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ status: "fail", error, message: "Fail to load movies" });
  }
};

exports.createMovieCtrl = async (req, res) => {
  try {
    const movieInfo = req.body;

    const newMovieInfo = parsingDataFromBody(movieInfo);

    const movies = await MovieService.addMovie(newMovieInfo);

    res.status(OK).json({
      status: "success",
      data: { movies },
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

exports.updateMovieCtrl = async (req, res) => {
  try {
    const movieId = await req.params.id;
    const movieInfo = await req.body;

    const updateData = parsingDataFromBody(movieInfo);

    const updateMoviesArray = await MovieService.updateMovie(
      movieId,
      updateData
    );
    await MovieService.updateFavorites(movieId, updateData);

    res.status(OK).json({
      status: "success",
      data: { movies: updateMoviesArray },
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

exports.deleteMovieCtrl = (req, res) => {
  try {
    const movieId = req.params.id;
    const movieDeleted = MovieService.deleteMovie(movieId);
    res.status(OK).json({
      status: "success",
      data: movieDeleted,
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
