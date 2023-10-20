const db = require("../db/database");

class UserModel {
	static async getAllUsers() {
		try {
			const query = "SELECT * FROM users";
			const result = await db.query(query);
			return result.rows;
		} catch (error) {
			throw error;
		}
	}

	static async getUserById(id) {
		try {
			const query = "SELECT * FROM users WHERE id = $1";
			const result = await db.query(query, [id]);
			return result.rows[0];
		} catch (error) {
			throw error;
		}
	}

	static async createUser(userData) {
		const { email, gender, password, role } = userData;
		try {
			const query = "INSERT INTO users (email, gender, password, role) VALUES ($1, $2, $3, $4) RETURNING *";
			const result = await db.query(query, [email, gender, password, role]);
			return result.rows[0];
		} catch (error) {
			throw error;
		}
	}

	// static async updateUser(id, email, gender, password, role) {
	// 	try {
	// 		const query = "UPDATE users SET email = $2, gender = $3, password = $4, role = $5 WHERE id = $1 RETURNING *";
	// 		const result = await db.query(query, [id, email, gender, password, role]);
	// 		return result.rows[0];
	// 	} catch (error) {
	// 		throw error;
	// 	}
	// }

	static async updateUser(id, updatedData) {
		const { email, gender, password, role } = updatedData;

		try {
			let query = "UPDATE users SET";
			const values = [];
			const valueCount = [];

			if (email !== undefined) {
				valueCount.push(`email = $${values.length + 1}`);
				values.push(email);
			}
			if (gender !== undefined) {
				valueCount.push(`gender = $${values.length + 1}`);
				values.push(gender);
			}
			if (password !== undefined) {
				valueCount.push(`password = $${values.length + 1}`);
				values.push(password);
			}
			if (role !== undefined) {
				valueCount.push(`role = $${values.length + 1}`);
				values.push(role);
			}

			query += ` ${valueCount.join(", ")} WHERE id = $${values.length + 1} RETURNING *`;
			values.push(id);

			const result = await db.query(query, values);

			if (result.rows.length > 0) {
				return result.rows[0];
			} else {
				return null;
			}
		} catch (error) {
			throw error;
		}
	}

	static async deleteUser(id) {
		try {
			const query = "DELETE FROM users WHERE id = $1";
			await db.query(query, [id]);
		} catch (error) {
			throw error;
		}
	}
}

module.exports = UserModel;
