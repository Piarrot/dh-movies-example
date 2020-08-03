const express = require("express");
const router = express.Router();

const actorsRouter = require("./api/actors");
const genresRouter = require("./api/genres");
const moviesRouter = require("./api/movies");

// /api/actors
router.use("/actors", actorsRouter);

// /api/genres
router.use("/genres", genresRouter);

// /api/movies
router.use("/movies", moviesRouter);

module.exports = router;
