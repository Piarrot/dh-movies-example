const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/movies");

router.get("/", moviesController.index);
router.patch("/:id", moviesController.update);
router.get("/:id/edit", moviesController.showEdit);
router.get("/create", moviesController.showCreate);
router.post("/", moviesController.create);
router.get("/:id", moviesController.detail);

router.post("/:id/actor", moviesController.addActor);
router.patch("/:id/actor/:actorId", moviesController.updateActor);
router.delete("/:id/actor/:actorId", moviesController.removeActor);

module.exports = router;
