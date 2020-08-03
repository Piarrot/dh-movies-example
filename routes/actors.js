const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const actorsController = require("../controllers/actors");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, "../public/images/actors"));
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});
const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        if (["image/jpeg", "image/png"].includes(file.mimetype)) {
            return cb(null, true);
        }
        return cb(null, false);
    },
});

router.get("/", actorsController.index);
router.get("/create", actorsController.showCreate);
router.get("/:id", actorsController.detail);
router.patch("/:id", upload.single("profilePic"), actorsController.update);
router.get("/:id/edit", actorsController.showEdit);
router.post("/", upload.single("profilePic"), actorsController.create);
router.delete("/:id", actorsController.delete);

module.exports = router;
