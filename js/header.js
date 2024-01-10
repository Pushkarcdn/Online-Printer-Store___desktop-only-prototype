// document.addEventListener("DOMContentLoaded", function () {
//     // Fetch the navigation bar content
//     fetch("../html/header.html")
//         .then(response => response.text())
//         .then(data => {

//             // Insert the navigation bar into the specified container
//             document.getElementById("header").innerHTML = data;

//             // Run JavaScript code for the injected content
//             // handleNavbarEvents();
//         })
//         .catch(error => console.error("Error fetching header:", error));
// });

// // function handleNavbarEvents() {

// //     // add javascript for header here

// // }

function createHeader() {

    const header = document.querySelector("header")
    header.innerHTML = `

    <div class="header-upper-section">

        <div class="header-upper-left-section">

            <img src="../images/homepage_images/logo.png" height="45px" alt="">

            <div class="logo-text">
                <span>Prime</span>
                <span>Print Creativity</span>
            </div>

        </div>

        <div class="header-upper-right-section">

            <div class="header-search-box">
                <img src="../icons/search.png" alt="" height="23px">
                <input type="text" name="search" placeholder="Search Printers">
            </div>

            <div class="header-cart">
                <img src="../icons/cart.png" alt="" height="20px">
                <span>Cart (0)</span>
            </div>

            <div class="header-menu">
                <img src="../icons/menu.png" alt="" height="20px">
            </div>

        </div>

    </div>

    <hr class="header-line">
    
    `;

}

createHeader();