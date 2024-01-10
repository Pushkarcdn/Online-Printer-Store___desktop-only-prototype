document.addEventListener("DOMContentLoaded", function () {

    // Fetch the navigation bar content
    fetch("../html/footer.html")
        .then(response => response.text())
        .then(data => {

            // Insert the navigation bar into the specified container
            document.getElementById("footer").innerHTML = data;

            // JS code for the injected html
        })
        .catch(error => console.error("Error fetching navigation bar:", error));
});