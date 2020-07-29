const express = require("express");
const router = express.Router();

const actorsRouter = require("./api/actors");

// /api/actors
router.use("/actors", actorsRouter);

// // /api/genres
// router.use("/genres", actorsRouter);

// // /api/movies
// router.use("/movies", actorsRouter);

module.exports = router;
