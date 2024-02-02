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
    const movies = await MovieService.addMovie(movieInfo);
    const requestedAt = req.requestTime;
    res.status(OK).json({
      status: "success",
      requestedAt,
      result: movies.length,
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
    const movieData = await req.body;
    const requestedAt = await req.requestTime;

    const updateData = {
      title: movieData.title,
      year: Number(movieData.year),
      director: movieData.director,
      genres: movieData.genres,
      tomato: { rating: Number(movieData.tomato.rating) },
      poster: movieData.poster,
      plot: movieData.plot,
      runtime: Number(movieData.runtime),
    };

    const updateMoviesArray = await MovieService.updateMovie(
      movieId,
      updateData
    );

    res.status(OK).json({
      status: "success",
      requestedAt,
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
    const requestedAt = req.requestTime;
    const moviesWithoutDeleted = MovieService.deleteMovie(movieId);
    res.status(OK).json({
      status: "success",
      requestedAt,
      data: null,
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
