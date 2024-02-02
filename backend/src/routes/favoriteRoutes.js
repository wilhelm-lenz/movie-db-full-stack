const express = require("express");
const { favoriteController } = require("../controllers");

const router = express.Router();

router.route("/").get(favoriteController.getAllFavoritesCtrl);

router
  .route("/:id")
  .post(favoriteController.createFavoriteCtrl)
  .delete(favoriteController.deleteFavoriteMovieCtrl);

module.exports = router;
