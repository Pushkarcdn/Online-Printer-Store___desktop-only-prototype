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

    document.querySelector('#nav-home-button').addEventListener('click', function () {
        window.location.href = 'index.html';
    });

    document.querySelector('#nav-products-button').addEventListener('click', function () {
        window.location.href = 'products.html';
    });

    document.querySelector('#nav-blog-button').addEventListener('click', function () {
        window.location.href = 'blog.html';
    });

    document.querySelector('#nav-research-button').addEventListener('click', function () {
        window.location.href = 'research.html';
    });

    document.querySelector('#nav-about-button').addEventListener('click', function () {
        window.location.href = 'about.html';
    });

    document.querySelector('#nav-contact-button').addEventListener('click', function () {
        window.location.href = 'contact.html';
    });

    var pageName = document.title;
    pageName = pageName.split(' ')[0];
    pageName = pageName.toLowerCase();

    document.querySelector('#nav-' + pageName + '-button').classList.add('current-page');

}