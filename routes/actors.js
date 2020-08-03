const express = require("express");
const router = express.Router();
const multer = require("multer");

const actorsController = require("../controllers/actors");

// const storage = multer.memoryStorage({
//     destination: function (req, file, cb) {
//         cb(null, "");
//     },
// });

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
router.get("/create", actorsController.showCreate);
router.get("/:id", actorsController.detail);
router.patch("/:id", processProfilePic, actorsController.update);
router.get("/:id/edit", actorsController.showEdit);
router.post("/", processProfilePic, actorsController.create);
router.delete("/:id", actorsController.delete);

module.exports = router;
