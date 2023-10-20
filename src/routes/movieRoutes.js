const express = require("express");
const MovieController = require("../controllers/movieController");
const upload = require("../utils/multer");
const router = express.Router();

// router.get("/", MovieController.AllMovies);
router.get("/all", MovieController.getAllMovies);

router.get("/add", MovieController.createForm);
router.post("/add", upload, MovieController.createMovie);

router.get("/edit/:id", MovieController.updateForm);
router.post("/edit/:id", upload, MovieController.updateMovie);

router.get("/delete/:id", MovieController.deleteForm);
router.post("/delete/:id", MovieController.deleteMovie);

router.get("/uploads/:filename", MovieController.getUploadedFile);

module.exports = router;
