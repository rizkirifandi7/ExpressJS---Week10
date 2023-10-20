const session = require("express-session");
const flash = require("express-flash");

const configureFlash = (app) => {
	app.use(
		session({
			secret: process.env.FLASH_KEY,
			resave: false,
			saveUninitialized: true,
		})
	);

	app.use(flash());
};

module.exports = configureFlash;