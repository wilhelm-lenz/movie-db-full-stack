const express = require("express");
const movieController = require("../controllers/movieController");
const router = express.Router();

router.route("/").get(movieController.getAllMoviesCtrl);
// .post();

// router.route("/:id").patch().delete();

module.exports = router;
