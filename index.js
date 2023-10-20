const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routers = require("./src/routes");
const path = require("path");
const port = 3000;
const morgan = require("morgan");
const fs = require("fs");
const configureFlash = require("./src/utils/flash");
const logStream = fs.createWriteStream(path.join(__dirname, "./src/log/log.txt"), { flags: "a" });
require("dotenv").config();

app.use(morgan("common", { stream: logStream }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));

configureFlash(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "uploads")));

app.use(routers);

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
