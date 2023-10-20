const db = require("../db/database");

class Movie {
	static async getAllMovies() {
		try {
			const query = "SELECT * FROM movies";
			const result = await db.query(query);
			return result.rows;
		} catch (error) {
			throw error;
		}
	}

	static async getMovieById(id) {
		try {
			const query = "SELECT * FROM movies WHERE id = $1";
			const result = await db.query(query, [id]);
			return result.rows[0];
		} catch (error) {
			throw error;
		}
	}

	static async createMovie(movieData) {
		const { title, genres, year, photo } = movieData;

		try {
			const query = "INSERT INTO movies (title, genres, year, photo) VALUES ($1, $2, $3, $4) RETURNING *";
			const result = await db.query(query, [title, genres, year, photo]);
			return result.rows[0];
		} catch (error) {
			throw error;
		}
	}

	static async updateMovie(id, updatedData) {
		const { title, genres, year, photo } = updatedData;

		try {
			let query = "UPDATE movies SET";
			const values = [];
			const valueCount = [];

			if (title !== undefined) {
				valueCount.push(`title = $${values.length + 1}`);
				values.push(title);
			}
			if (genres !== undefined) {
				valueCount.push(`genres = $${values.length + 1}`);
				values.push(genres);
			}
			if (year !== undefined) {
				valueCount.push(`year = $${values.length + 1}`);
				values.push(year);
			}
			if (photo !== undefined) {
				valueCount.push(`photo = $${values.length + 1}`);
				values.push(photo);
			}

			query += ` ${valueCount.join(", ")} WHERE id = $${values.length + 1} RETURNING *`;
			values.push(id);

			const result = await db.query(query, values);

			if (result.rows.length > 0) {
				return result.rows[0];
			} else {
				return null; // Film tidak ditemukan
			}
		} catch (error) {
			throw error;
		}
	}

	static async deleteMovie(id) {
		try {
			const query = "DELETE FROM movies WHERE id = $1 RETURNING *";
			const result = await db.query(query, [id]);
			return result.rows[0];
		} catch (error) {
			throw error;
		}
	}
}

module.exports = Movie;
