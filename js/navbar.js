document.addEventListener("DOMContentLoaded", function () {
    // Fetch the navigation bar content
    fetch("../html/navbar.html")
        .then(response => response.text())
        .then(data => {
            // Insert the navigation bar into the specified container
            document.getElementById("navbar").innerHTML = data;

            // Run JavaScript code for the injected content
            handleNavEvents();
        })
        .catch(error => console.error("Error fetching navigation bar:", error));
});


function handleNavEvents() {

    boldCurrentPageName();
    adjustStyles();

    function boldCurrentPageName() {
        var pageName = document.title;
        pageName = pageName.split(' ')[0];
        pageName = pageName.toLowerCase();
        document.querySelector('#nav-' + pageName + '-button').classList.add('current-page');
    }

    function adjustStyles() {

        if (window.innerWidth < 480) {
            document.querySelector('nav').style.display = 'none';
            document.querySelector('header').classList.add('nav-shadow');
            document.querySelector('.header-cart').style.display = 'none';
            document.querySelector('.header-line').style.display = 'none';
            document.querySelector('.header-menu').style.display = 'flex';
        } else {
            document.querySelector('nav').style.display = 'flex';
            document.querySelector('.header-cart').style.display = 'flex';
            document.querySelector('.header-line').style.display = 'flex';
            document.querySelector('.header-menu').style.display = 'none';
        }

        if (window.innerWidth < 860) {
            document.querySelector('.header-search-box').style.display = 'none';
        }
        else {
            document.querySelector('.header-search-box').style.display = 'flex';
        }

        if (window.innerWidth < 550) {
            document.querySelector('#nav-home-button').style.display = 'none';
        }
        else {
            document.querySelector('#nav-home-button').style.display = 'flex';
        }

    }

    boldCurrentPageName();
    adjustStyles();

    // Adjust styles when the window is resized
    window.addEventListener('resize', adjustStyles);

    boldCurrentPageName();
    adjustStyles();

}