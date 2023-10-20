const UserRepository = require("../repositories/userRepository");

class UserController {
	static async getAllUsers(req, res) {
		const successMessages = req.flash("success");
		const errorMessages = req.flash("error");
		try {
			const users = await UserRepository.getAllUsers();
			res.render("user_data", { users, successMessages, errorMessages });
		} catch (error) {
			res.status(500).json({ error: "Internal Server Error" });
		}
	}

	static async createForm(req, res) {
		res.render("createUser", { errorMessages: req.flash("error") });
	}

	static async createUser(req, res) {
		const { email, gender, password, role } = req.body;

		if (!email || !gender || !password || !role) {
			req.flash("error", "Complete all attributes!");
			return res.redirect("/users/add");
		}

		try {
			const userData = {
				email,
				gender,
				password,
				role,
			};

			const user = await UserRepository.createUser(userData);
			if (user) {
				req.flash("success", "User created successfully!");
				res.redirect("/users/all");
			} else {
				req.flash("error", "Failed to create new user data!");
				res.redirect("/users/all");
			}
		} catch (error) {
			req.flash("error", "Internal Server Error");
			res.redirect("/users/all");
		}
	}

	static async updateForm(req, res) {
		const { id } = req.params;
		try {
			const user = await UserRepository.getUserById(id);
			if (user) {
				res.render("editUser", { user });
			} else {
				req.flash("error", "User not found");
				res.redirect("/users/all");
			}
		} catch (error) {
			req.flash("error", "Internal Server Error");
			res.redirect("/users/all");
		}
	}

	static async updateUser(req, res) {
		const { id } = req.params;
		const updatedData = {};

		// Memeriksa dan menambahkan atribut yang ingin diubah ke objek updatedData
		if (req.body.email) {
			updatedData.email = req.body.email;
		}
		if (req.body.gender) {
			updatedData.gender = req.body.gender;
		}
		if (req.body.password) {
			updatedData.password = req.body.password;
		}
		if (req.body.role) {
			updatedData.role = req.body.role;
		}

		try {
			const user = await UserRepository.updateUser(id, updatedData);
			if (user) {
				req.flash("success", "User updated successfully!");
				res.redirect("/users/all");
			} else {
				req.flash("error", "User not found");
				res.redirect("/users/all");
			}
		} catch (error) {
			req.flash("error", "Internal Server Error");
			res.redirect("/users/all");
		}
	}

	static async deleteForm(req, res) {
		const { id } = req.params;
		try {
			const user = await UserRepository.getUserById(id);
			if (user) {
				res.render("deleteUser", { user });
			} else {
				req.flash("error", "User not found");
				res.redirect("/users/all");
			}
		} catch (error) {
			req.flash("error", "Internal Server Error");
			res.redirect("/users/all");
		}
	}

	static async deleteUser(req, res) {
		const { id } = req.params;
		try {
			await UserRepository.deleteUser(id);
			req.flash("success", "User successfully deleted!");
			res.redirect("/users/all");
		} catch (error) {
			req.flash("error", "Internal Server Error");
			res.redirect("/users/all");
		}
	}
}

module.exports = UserController;
