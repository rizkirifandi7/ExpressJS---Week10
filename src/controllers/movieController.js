const MovieRepository = require("../repositories/movieRepository");
const path = require("path");

class MovieController {
	static async getUploadedFile(req, res) {
		const filename = req.params.filename;
		const filePath = path.join(__dirname, "../uploads/", filename);
		res.sendFile(filePath);
	}

	static async getAllMovies(req, res) {
		const successMessages = req.flash("success");
		const errorMessages = req.flash("error");
		try {
			const movies = await MovieRepository.getAllMovies();
			res.render("movie_data", { movies, successMessages, errorMessages });
		} catch (error) {
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	static async createForm(req, res) {
		const locals = {
			title: "Add New Movies",
		};
		res.render("createMovie", { locals });
	}

	static async createMovie(req, res) {
		const { title, genres, year } = req.body;

		if (!title || !genres || !year) {
			req.flash("error", "Complete all attributes(title, genres, year)");
			return res.status(400).json({ error: "Complete all attributes(title, genres, year)" });
		}

		try {
			let photo = null;

			if (req.file) {
				photo = req.file.filename;
			}

			const movieData = {
				title,
				genres,
				year,
				photo,
			};

			const movie = await MovieRepository.createMovie(movieData);
			if (movie) {
				req.flash("success", "The movie was successfully made!");
				res.redirect("/movies/all");
			} else {
				req.flash("error", "Failed to create new movies data!");
				res.status(404).json({ error: "Failed to create new movies data!" });
			}
		} catch (error) {
			req.flash("error", "Internal Server Error");
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	static async updateForm(req, res) {
		const { id } = req.params;
		try {
			const movie = await MovieRepository.getMovieById(id);
			if (movie) {
				res.render("editMovie", { movie });
			} else {
				req.flash("error", "Movie not found");
				res.redirect("/movies/all");
			}
		} catch (error) {
			req.flash("error", "Internal Server Error");
			res.redirect("/movies/all");
		}
	}

	static async updateMovie(req, res) {
		const { id } = req.params;
		const updatedData = {};

		// Memeriksa dan menambahkan atribut yang ingin diubah ke objek updatedData
		if (req.body.title) {
			updatedData.title = req.body.title;
		}
		if (req.body.genres) {
			updatedData.genres = req.body.genres;
		}
		if (req.body.year) {
			updatedData.year = req.body.year;
		}
		if (req.file) {
			updatedData.photo = req.file.filename;
		}

		try {
			const movie = await MovieRepository.updateMovie(id, updatedData);
			if (movie) {
				req.flash("success", "Movie updated successfully!");
				res.redirect("/movies/all");
			} else {
				req.flash("error", "Movie not found");
				res.redirect("/movies/all");
			}
		} catch (error) {
			req.flash("error", "Internal Server Error");
			res.redirect("/movies/all");
		}
	}

	static async deleteForm(req, res) {
		const { id } = req.params;
		try {
			const movie = await MovieRepository.getMovieById(id);
			if (movie) {
				res.render("deleteMovie", { movie });
			} else {
				req.flash("error", "Movie not found");
				res.redirect("/movies/all");
			}
		} catch (error) {
			req.flash("error", "Internal Server Error");
			res.redirect("/movies/all");
		}
	}

	static async deleteMovie(req, res) {
		const { id } = req.params;

		try {
			const movie = await MovieRepository.deleteMovie(id);
			if (movie) {
				req.flash("success", "Movie successfully deleted!");
				res.redirect("/movies/all");
			} else {
				req.flash("error", "Movie not found");
				res.redirect("/movies/all");
			}
		} catch (error) {
			req.flash("error", "Internal Server Error");
			res.redirect("/movies/all");
		}
	}
}

module.exports = MovieController;
