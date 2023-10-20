setTimeout(function () {
	var successMessage = document.getElementById("successMessage");
	if (successMessage) {
		successMessage.style.display = "none";
	}
}, 2000);

var closeSuccessMessage = document.getElementById("closeSuccessMessage");
if (closeSuccessMessage) {
	closeSuccessMessage.addEventListener("click", function () {
		var successMessage = document.getElementById("successMessage");
		if (successMessage) {
			successMessage.style.display = "none";
		}
	});
}

setTimeout(function () {
	var errorMessages = document.getElementById("errorMessages");
	if (errorMessages) {
		errorMessages.style.display = "none";
	}
}, 2000);

var closeErrorMessages = document.getElementById("closeErrorMessages");
if (closeErrorMessages) {
	closeErrorMessages.addEventListener("click", function () {
		var errorMessages = document.getElementById("errorMessages");
		if (errorMessages) {
			errorMessages.style.display = "none";
		}
	});
}

$(document).ready(function () {
	$("#usersTable").DataTable();
});

$(document).ready(function () {
	$("#moviesTable").DataTable();
});

// navbar nav menu otomatis
// Mengambil pathname dari URL
const pathName = window.location.pathname;

// Menyimpan elemen navbar
const usersNav = document.getElementById("users-nav");
const moviesNav = document.getElementById("movies-nav");

// Mengatur kelas bold pada elemen yang sesuai dengan halaman saat ini
if (pathName === "/users/all") {
	usersNav.classList.add("bold");
} else if (pathName === "/movies/all") {
	moviesNav.classList.add("bold");
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
	"use strict";

	// Fetch all the forms we want to apply custom Bootstrap validation styles to
	const forms = document.querySelectorAll(".needs-validation");

	// Loop over them and prevent submission
	Array.from(forms).forEach((form) => {
		form.addEventListener(
			"submit",
			(event) => {
				if (!form.checkValidity()) {
					event.preventDefault();
					event.stopPropagation();
				}

				form.classList.add("was-validated");
			},
			false
		);
	});
})();
