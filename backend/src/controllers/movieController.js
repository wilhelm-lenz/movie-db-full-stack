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

// exports.createMovie = (req, res) => {};

// exports.updateMovie = (req, res) => {};

// exports.deleteMovie = (req, res) => {};
