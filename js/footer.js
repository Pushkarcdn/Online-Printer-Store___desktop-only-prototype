document.addEventListener("DOMContentLoaded", function () {
    // Fetch the navigation bar content
    fetch("../html/footer.html")
        .then(response => response.text())
        .then(data => {

            // Insert the navigation bar into the specified container
            document.getElementById("footer").innerHTML = data;

            // Run JavaScript code for the injected content
            // handleNavbarEvents();
        })
        .catch(error => console.error("Error fetching navigation bar:", error));
});

// function handleNavbarEvents() {

//     // add javascript for footer here

// }