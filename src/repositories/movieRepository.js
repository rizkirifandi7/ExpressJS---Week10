const Movie = require("../models/movieModel");

class MovieRepository {
	static async getAllMovies() {
		return Movie.getAllMovies();
	}

	static async getMovieById(id) {
		return Movie.getMovieById(id);
	}

	static async createMovie(movieData) {
		return Movie.createMovie(movieData);
	}

	static async updateMovie(id, updatedData) {
		return Movie.updateMovie(id, updatedData);
	}

	static async deleteMovie(id) {
		return Movie.deleteMovie(id);
	}
}

module.exports = MovieRepository;
