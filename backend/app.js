const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { moviesRouter, favoriteRouter } = require("./src/routes");

const app = express();

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.static("./public"));

app.use(express.json());

app.use("/api/v1/movies", moviesRouter);
app.use("/api/v1/favorites", favoriteRouter);

app.use((_, res) => {
  res.status(404).json({ status: "fail", error: "Route not found" });
});

module.exports = app;
