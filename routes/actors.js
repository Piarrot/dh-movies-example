const express = require("express");
const router = express.Router();
const multer = require("multer");

const actorsController = require("../controllers/actors");

const storage = multer.memoryStorage({
    destination: function (req, file, cb) {
        cb(null, "");
    },
});

const processProfilePic = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (["image/jpeg", "image/png"].includes(file.mimetype)) {
            return cb(null, true);
        }
        return cb(null, false);
    },
}).single("profilePic");

router.get("/", actorsController.index);
router.get("/:id", actorsController.detail);
router.patch("/:id", processProfilePic, actorsController.update);
router.get("/:id/edit", actorsController.showEdit);
router.get("/create", actorsController.showCreate);
router.post("/", processProfilePic, actorsController.create);

module.exports = router;
