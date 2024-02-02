const express = require("express");
const multer = require("multer");
const movieController = require("../controllers/movieController");

const router = express.Router();

const upload = multer();

router
  .route("/")
  .get(movieController.getAllMoviesCtrl)
  .post(movieController.createMovieCtrl);

router
  .route("/:id")
  .patch(upload.none(), movieController.updateMovieCtrl)
  .delete(movieController.deleteMovieCtrl);

module.exports = router;
