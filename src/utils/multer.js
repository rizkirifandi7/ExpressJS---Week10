const multer = require("multer");

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./src/uploads");
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + "-" + Date.now() + file.originalname); // Nama file foto yang disimpan
	},
});

const upload = multer({ storage }).single("photo");

module.exports = upload;
