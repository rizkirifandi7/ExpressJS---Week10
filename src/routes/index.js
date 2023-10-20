const express = require("express");
const router = express.Router();
const userRouter = require("./userRoutes");
const movieRouter = require("./movieRoutes");

router.use("/users", userRouter);
router.use("/movies", movieRouter);

module.exports = router;
