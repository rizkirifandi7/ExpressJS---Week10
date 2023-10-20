const UserModel = require("../models/userModel");

class UserRepository {
	static async getAllUsers() {
		return UserModel.getAllUsers();
	}

	static async getUserById(id) {
		return UserModel.getUserById(id);
	}

	static async createUser(userData) {
		return UserModel.createUser(userData);
	}

	static async updateUser(id, updatedData) {
		return UserModel.updateUser(id, updatedData);
	}

	static async deleteUser(id) {
		return UserModel.deleteUser(id);
	}
}

module.exports = UserRepository;
