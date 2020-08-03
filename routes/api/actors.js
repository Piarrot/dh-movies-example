const express = require("express");
const router = express.Router();

const actorsController = require("../../controllers/api/actors");

router.get("/", actorsController.index);
router.get("/:id", actorsController.detail);

module.exports = router;
