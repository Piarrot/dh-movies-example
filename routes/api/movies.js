const express = require("express");
const router = express.Router();

const moviesController = require("../../controllers/api/movies");

router.get("/", moviesController.index);
router.get("/featured", moviesController.featured);
router.get("/:id", moviesController.detail);

module.exports = router;
