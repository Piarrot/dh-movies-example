const express = require("express");
const router = express.Router();

const moviesRouter = require("./movies");
const actorsRouter = require("./actors");
const genresRouter = require("./genres");

router.use("/movies", moviesRouter);
router.use("/actors", actorsRouter);
router.use("/genres", genresRouter);

router.get("/", async function (req, res) {
    res.render("index");
});

module.exports = router;
