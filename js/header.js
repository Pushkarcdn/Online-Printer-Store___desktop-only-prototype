document.addEventListener("DOMContentLoaded", function () {
    // Fetch the navigation bar content
    fetch("../html/header.html")
        .then(response => response.text())
        .then(data => {

            // Insert the navigation bar into the specified container
            document.getElementById("header").innerHTML = data;

            // Run JavaScript code for the injected content
            // handleNavbarEvents();
        })
        .catch(error => console.error("Error fetching navigation bar:", error));
});

// function handleNavbarEvents() {

//     // add javascript for header here

// }