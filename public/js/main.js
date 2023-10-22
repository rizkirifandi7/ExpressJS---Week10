function hideMessage(messageId, closeButtonId) {
    setTimeout(function () {
        var message = document.getElementById(messageId);
        if (message) {
            message.style.display = "none";
        }
    }, 2000);

    var closeButton = document.getElementById(closeButtonId);
    if (closeButton) {
        closeButton.addEventListener("click", function () {
            var message = document.getElementById(messageId);
            if (message) {
                message.style.display = "none";
            }
        });
    }
}

hideMessage("successMessage", "closeSuccessMessage");
hideMessage("errorMessages", "closeErrorMessages");

const tablesToInitialize = ["usersTable", "moviesTable"];

$(document).ready(function () {
    tablesToInitialize.forEach(function (tableId) {
        $("#" + tableId).DataTable();
    });
});

const navItems = {
    "/users/all": "users-nav",
    "/movies/all": "movies-nav",
};

const pathName = window.location.pathname;
const currentNavItem = navItems[pathName];

if (currentNavItem) {
    const navElement = document.getElementById(currentNavItem);
    if (navElement) {
        navElement.classList.add("bold");
    }
}

(() => {
    "use strict";

    const forms = document.querySelectorAll(".needs-validation");

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
