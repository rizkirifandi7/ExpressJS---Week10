const express = require("express");
const UserController = require("../controllers/userController");
const router = express.Router();

// routes menampilkan seluruh data
router.get("/all", UserController.getAllUsers);

// routes membuat data user
router.get("/add", UserController.createForm);
router.post("/add", UserController.createUser);

// routes mengedit data user
router.get("/edit/:id", UserController.updateForm);
router.post("/edit/:id", UserController.updateUser);

// routes menghapus data user
router.get("/delete/:id", UserController.deleteForm);
router.post("/delete/:id", UserController.deleteUser);

module.exports = router;
