const express = require("express");
const router = express.Router();

const genreController = require("../controllers/genres");

router.get("/", genreController.index);
router.get("/:id", genreController.detail);
router.patch("/:id", genreController.update);
router.get("/:id/edit", genreController.showEdit);
router.get("/create", genreController.showCreate);
router.post("/", genreController.create);

module.exports = router;
