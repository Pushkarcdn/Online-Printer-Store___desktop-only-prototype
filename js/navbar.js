document.addEventListener("DOMContentLoaded", function () {
    // Fetch the navigation bar content
    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            // Insert the navigation bar into the specified container
            document.getElementById("navbar").innerHTML = data;

            // Run JavaScript code for the injected content
            handleNavbarEvents();
        })
        .catch(error => console.error("Error fetching navigation bar:", error));
});

function handleNavbarEvents() {

    var pageName = document.title;
    pageName = pageName.split(' ')[0];
    pageName = pageName.toLowerCase();

    document.querySelector('#nav-' + pageName + '-button').classList.add('current-page');

    document.querySelector('#nav-home-button').addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    // Assigning link to each buttons on navbar:

    var arrOfNavButtons = ["products", "blog", "research", "about", "contact"];

    arrOfNavButtons.forEach(function arrOfNavButtons(value) {
        document.querySelector('#nav-' + value + '-button').addEventListener('click', function () {
            window.location.href = value + '.html';
        });
    });

}