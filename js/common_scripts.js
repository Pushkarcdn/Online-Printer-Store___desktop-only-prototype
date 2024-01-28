// Storing details of available printers in variables

var productsSeries = [
    "IMAGE",
    "MAXIFY",
    "PIXMA",
];

var productsName = [
    "PIXMA MG3620",
    "MAXIFY MB2720",
    "imageCLASS MF236n",
    "PIXMA Pro-100",
    "PIXMA TS9120",
    "PIXMA iP8720",
    "imagePROGRAF PRO-1000",
    "PIXMA G6020",
    "imageFORMULA DR-C225 II",
    "SELPHY CP1300",
    "imageCLASS MF733Cdw",
    "imageCLASS MF733Cdw",
    "imageCLASS LBP6230dw",
    "PIXMA TR8520",
    "imagePROGRAF PRO-1000",
    "imageFORMULA DR-C225 II",
    "PIXMA MX922",
    "imageRUNNER C5540i",
    "ADVANCE DX 8705/8795/8786 Series"
];

var productsPrice = [
    29000,
    19900,
    18990,
    12999,
    21999,
    37999,
    12999,
    14999,
    24999,
    19999,
    37999,
    24999,
    12999,
    29999,
    14999,
    25999,
    24999,
    149999,
    310900
];


// ----------------------------------------------- Header Section Starts ------------------------------------------------- 

// This function created header when called on any page
function createHeader() {

    // if homepage is opend the links for other pages and images should not start with '../'

    var pageName = document.title;
    pageName = pageName.split(' ')[0];
    pageName = pageName.toLowerCase();

    if (pageName == 'home') {

        var primeLogo = 'images/homepage_images/logo.png';
        var searchIcon = 'icons/search.png';
        var personIcon = 'icons/person.png';
        var loggedinIcon = 'images/login_images/pushkar.png';
        var cartIcon = 'icons/cart.png';
        var menuIcon = 'icons/menu.png';

    } else {

        var primeLogo = '../images/homepage_images/logo.png';
        var searchIcon = '../icons/search.png';
        var personIcon = '../icons/person.png';
        var loggedinIcon = '../images/login_images/pushkar.png';
        var cartIcon = '../icons/cart.png';
        var menuIcon = '../icons/menu.png';

    }

    document.querySelector("header").innerHTML = `

    <div class="header-upper-section">

        <div class="header-upper-left-section">

            <img src="${primeLogo}" height="45px" alt="" id="header-prime-logo-class">

            <div class="logo-text">
                <span>Prime</span>
                <span>Print Creativity</span>
            </div>

        </div>

        <div class="header-upper-right-section">

            <div class="header-search-box">
                <img src="${searchIcon}" alt="" height="23px">
                <input type="text" name="search" placeholder="Search Printers">
            </div>
                
            <div class = "header-login" onclick="loginHandler()" style="display:none;">
                <img src="${personIcon}" alt="" height="25px">
                <span> Sign in</span>
            </div>

            <div class = "header-logged-in-div" style="display:none;">

                <img src="${loggedinIcon}" height="40px" alt="">
        
                <div class="header-logged-user-detail-div">
                    <span class="header-logged-user-detail1">Pushkar Sah</span>
                    <span class="header-logged-user-detail2">Kathmandu</span>
                </div>
        
                <span class="header-sign-out-text">Sign out</span>
                        
            </div>

            <div class="header-cart" onclick="openCart()">
                <img src="${cartIcon}" alt="" height="20px">
                <span>Cart (<span id="cart-items-amount">0</span>)</span>
            </div>
            
            <div class="header-menu">
                <img src="${menuIcon}" alt="" height="20px">
            </div>

        </div>

    </div>

    <hr class="header-line">

    `;

}

// calling this function on all pages to have header on all pages
createHeader();

/* ------------------------------------------------------ Header Section Ends -------------------------------------------------------- */


/* ------------------------------------------------------ Navbar Section Starts -------------------------------------------------------- */

// This function creates navbar when called on any page
function createNavbar() {

    var pageName = document.title;
    pageName = pageName.split(' ')[0];
    pageName = pageName.toLowerCase();

    if (pageName == 'home') {

        var homePageLink = 'index.html';
        var productPageLink = 'html/products.html';
        var blogPageLink = 'html/blog.html';
        var researchPageLink = 'html/research.html';
        var aboutPageLink = 'html/about.html';
        var contactPageLink = 'html/contact.html';
        var downArrow = 'icons/down-arrow.png';

    } else {

        var homePageLink = '../index.html';
        var productPageLink = '../html/products.html';
        var blogPageLink = '../html/blog.html';
        var researchPageLink = '../html/research.html';
        var aboutPageLink = '../html/about.html';
        var contactPageLink = '../html/contact.html';
        var downArrow = '../icons/down-arrow.png';

    }

    document.querySelector("nav").innerHTML = `

    <span><a id="nav-home-button" href="${homePageLink}">Home</a></span>

    <span><a id="nav-products-button" href="${productPageLink}">Products</a><img src="${downArrow}" alt=""
        height="20"></span>

    <span><a id="nav-blog-button" href="${blogPageLink}">Blog</a><img src="${downArrow}" alt=""
        height="20"></span>

    <span><a id="nav-research-button" href="${researchPageLink}">Research</a><img src="${downArrow}" alt=""
        height="20"></span>

    <span><a id="nav-about-button" href="${aboutPageLink}">About Us</a><img src="${downArrow}" alt=""
        height="20"></span>

    <span><a id="nav-contact-button" href="${contactPageLink}">Contact</a></span>
    
    `;

}

// bolds the current page name on navbar
function boldCurrentPageName() {
    var pageName = document.title;
    pageName = pageName.split(' ')[0];
    pageName = pageName.toLowerCase();
    document.querySelector('#nav-' + pageName + '-button').classList.add('current-page');
}

// calling this function on all page so that navbar is available on all page 
createNavbar();
boldCurrentPageName();

/* ------------------------------------------------------ Navbar Section Ends -------------------------------------------------------- */


/* ------------------------------------------------------ Footer Section Starts -------------------------------------------------------- */

// image links on homepage should not start with '../' on homepage
var pageName = document.title;
pageName = pageName.split(' ')[0];
pageName = pageName.toLowerCase();

if (pageName == 'home') {

    var primeLogo = 'images/homepage_images/logo.png';
    var facebookIcon = 'icons/facebook.png';
    var instagramnIcon = 'icons/insta.png';
    var linkedinIcon = 'icons/linkedin.png';
    var githubIcon = 'icons/github.png';
    var feedIcon = 'icons/feed.png';

} else {

    var primeLogo = '../images/homepage_images/logo.png';
    var facebookIcon = '../icons/facebook.png';
    var instagramnIcon = '../icons/insta.png';
    var linkedinIcon = '../icons/linkedin.png';
    var githubIcon = '../icons/github.png';
    var feedIcon = '../icons/feed.png';

}

// creating footer on all pages
document.querySelector('footer').innerHTML = `

<div class="footer-upper-section">

    <div class="footer-upper-inner-div">
        <ul>
            <li>ALL PRINTERS</li>
            <li>BUSINESS PRINTERS</li>
            <li>REGULAR PRINTERS</li>
            <li>PORTABLE PRINTERS</li>
            <li>CLASSIC PRINTERS</li>
        </ul>
    </div>

    <div class="footer-upper-inner-div">
        <ul>
            <li>SMART PRINTERS</li>
            <li>WIRELESS PRINTERS</li>
            <li>All In One PRINTERS</li>
        </ul>
    </div>

    <div class="footer-upper-inner-div">
        <ul>
            <li>SUPERTANK PRINTERS</li>
            <li>EcoTANK PRINTERS</li>
            <li>OFFICE PRINTERS</li>
            <li>PORTABLE PRINTERS</li>
        </ul>
    </div>

    <div class="footer-upper-inner-div">
        <ul>
            <li>3D PRINTERS</li>
            <li>PHOTO PRINTERS</li>
            <li>LABEL Printers</li>
            <li>UV PRINTERS</li>
        </ul>
    </div>

    <div class="footer-upper-inner-div">

        <ul>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>AFFILIATES</li>
        </ul>

    </div>

</div>

<hr>

<div class="footer-lower-section">

    <div class="footer-logo-section">

        <img src="${primeLogo}" alt="" width="90px">

        <div class="footer-comapny-details">
            <span>PRIME</span>
            <span>PRINT DREAMS <br> PRINT CREATIVITY <br>SINCE 1995</span>
        </div>

    </div>

    <div class="footer-contact-section">

        <div class="footer-talk-section">

            <span>TALK WITH US</span>

            <ul>
                <li>+977 9844187887</li>
                <li>support@primestore.com</li>
            </ul>

            <div class="footer-social-links">
                <img src="${facebookIcon}" alt="" height="20px">
                <img src="${instagramnIcon}" alt="" height="20px">
                <img src="${linkedinIcon}" alt="" height="20px">
                <img src="${githubIcon}" alt="" height="23px">
                <img src="${feedIcon}" alt="" height="18px">
            </div>

        </div>

        <div class="footer-subscribe-section">
            <span>SUBSCRIBE US</span>
            <form onsubmit="footerFormHandle()" name="footerForm">
                <input type="text" name="email" placeholder="YOUR EMAIL">
                <input type="submit" value="SUBSCRIBE">
            </form>
        </div>

    </div>

</div>

<hr id="footer-second-hr">

<div class="footer-copyright-section">

    <p>Copyright &copy; Prime Stores. All rights reserved.</p>

</div>

`;

// this function handles the submission of footer's form
function footerFormHandle() {

    // check if a valid email is given or not
    var email = document.forms['footerForm']['email'].value;

    if (email == '') {

        document.querySelector(".error-message-text").innerHTML = 'Please input your email first.';
        document.querySelector(".error-message-div").style.display = 'flex';

        setTimeout(function () {
            document.querySelector(".error-message-div").style.display = 'none';
        }, 3000);

    } else {

        if (email.includes('@')) {

            document.querySelector(".success-message-text").innerHTML = 'Thank you for subscribing.';
            document.querySelector(".success-message-div").style.display = 'flex';

            setTimeout(function () {
                document.querySelector(".success-message-div").style.display = 'none';
            }, 3000);

        } else {

            document.querySelector(".error-message-text").innerHTML = 'Please input a valid email.';
            document.querySelector(".error-message-div").style.display = 'flex';

            setTimeout(function () {
                document.querySelector(".error-message-div").style.display = 'none';
            }, 3000);

        }

    }

}

/* ------------------------------------------------------ Footer Section Ends -------------------------------------------------------- */


/* --------------------------------------------------- Header Cart Section Starts ------------------------------------------------------ */

// declaring array for storing cart items and quantity
var cartItems = [];
var cartItemsQuantity = [];

// checking if the browser supports local storage
if (typeof (Storage) !== "undefined") {

    // retrieve the 'cartItems' array stored in browser's local storage and stores in 'pastCart' named array
    var pastCart = JSON.parse(localStorage.getItem("cartItems"));

    // retrieve the 'cartItemsQuantity' array stored in browser's local storage and stores in 'pastCartQuantity' named array
    var pastCartQuantities = JSON.parse(localStorage.getItem("cartItemsQuantity"));

    // if the local storage contains the cart item details, store it into cartItems and cartItemsQuantity
    if (pastCart == "" || pastCart == " " || pastCart == null) {
        cartItems = [];
        cartItemsQuantity = [];
    } else {
        cartItems = pastCart;
        cartItemsQuantity = pastCartQuantities;
    }

}

// updates the cart when 'add to cart' button is pressed
function updateCart() {

    // push the added item to the 'cartItems' array
    cartItems.push(clickedProductIndex);

    // push the added item's desired quantity to clickedProductQuantity
    clickedProductQuantity = parseInt(document.querySelector(".product-quantity-div").innerHTML);
    cartItemsQuantity.push(clickedProductQuantity);

    // storing the cart details inside browser local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartItemsQuantity', JSON.stringify(cartItemsQuantity));

    // after adding to cart, displays a message according to loggedIn status

    if (loggedIn == "true") {

        document.querySelector(".success-message-text").innerHTML = clickedProductQuantity + ` items added to cart.`;
        document.querySelector(".success-message-div").style.display = 'flex';

        setTimeout(function () {
            document.querySelector(".success-message-div").style.display = 'none';
        }, 3000);

    } else {

        document.querySelector(".warning-message-text").innerHTML = clickedProductQuantity + ` items added to cart. Please sign in to place the order.`;
        document.querySelector(".warning-message-div").style.display = 'flex';

        setTimeout(function () {
            document.querySelector(".warning-message-div").style.display = 'none';
        }, 3000);


    }

    // then, updates cart total items count
    updateCartTotal();
    updateCartDetails();

}

// this function updates the cart items total count
function updateCartTotal() {

    cartItemsTotal = 0;
    for (i = 0; i < cartItems.length; i++) {
        cartItemsTotal = cartItemsTotal + cartItemsQuantity[i];
    }

    document.querySelector('#cart-items-amount').innerHTML = cartItemsTotal;

}

// updating the cart items total count on page load
updateCartTotal();


/* ----------------------------------------------------- Header Cart Section Ends -------------------------------------------------------- */


/* --------------------------------------------------- Message div section Starts ----------------------------------------------------- */

// Creating message divs for displaying success, error and warning messages

// image links on homepage should not start with '../'
var pageName = document.title;
pageName = pageName.split(' ')[0];
pageName = pageName.toLowerCase();

if (pageName == 'home') {

    var errorIcon = 'icons/error-circle.png';
    var successIcon = 'icons/success.png';
    var warningicon = 'icons/warning2.png';

} else {

    var errorIcon = '../icons/error-circle.png';
    var successIcon = '../icons/success.png';
    var warningicon = '../icons/warning2.png';

}

// creating error message box
var errorMessageDiv = document.createElement('div');
errorMessageDiv.innerHTML = `

<div class="error-message-div">

    <img src = "${errorIcon}" alt="" height = "60%">
    <p class="error-message-text">Error Message box</p>

</div>

`;

document.body.appendChild(errorMessageDiv);

// creating success message box
var successMessageDiv = document.createElement('div');
successMessageDiv.innerHTML = `

<div class="success-message-div">

    <img src = "${successIcon}" alt="" height = "60%">
    <p class="success-message-text">Success Message box</p>

</div>

`;

document.body.appendChild(successMessageDiv);

// creating warning message box
var warningMessageDiv = document.createElement('div');
warningMessageDiv.innerHTML = `

<div class="warning-message-div">

    <img src = "${warningicon}" alt="" height = "50%">
    <p class="warning-message-text">Success Message box</p>

</div>

`;

document.body.appendChild(warningMessageDiv);


/* --------------------------------------------------- Message div section ends ------------------------------------------------------- */



/* ------------------------------------------------------ Login Section Starts -------------------------------------------------------- */

// declare a variable that stores loggedIn status
var loggedIn;

// checks if the browser supports local storage or not
if (typeof (Storage) !== "undefined") {

    // checks if the 'pastLoggedIn' named variable is present in local storage or not
    var pastLoggedIn = localStorage.getItem("loggedIn");

    if (pastLoggedIn == "" || pastLoggedIn == "" || pastLoggedIn == null) {

        // if not found, loggedIn status is set to false
        loggedIn = "false";
        localStorage.setItem("loggedIn", "false");

    }
    else if (pastLoggedIn == "true") {

        // if found and was true, loggedIn status is set to true
        loggedIn = "true";

        // button to sign out is set to visible and eventListener is added
        document.querySelector('.header-sign-out-text').addEventListener('click', function () {

            // changes the loggedIn status to false and clears the local storage (including cart)
            loggedIn = "false";
            localStorage.setItem("loggedIn", "false");
            localStorage.clear();

            // displays a message 
            document.querySelector('.warning-message-text').innerHTML = 'You have signed out of your account.';
            document.querySelector('.warning-message-div').style.display = 'flex';

            // refresh the page after 1 second
            setTimeout(() => {
                location.reload();
            }, 1000);

        });

    }

} else {
    // if not found, loggedIn status is set to false
    loggedIn = "false";
}

// if loggedIn status is true, user cart is visible on header
if (loggedIn == "true") {
    document.querySelector('.header-logged-in-div').style.display = 'flex';
} else {
    document.querySelector('.header-login').style.display = 'flex';
}

// This function handles the login process
function loginHandler() {

    // the login page should only be displayed if the user have not logged in yet
    if (loggedIn != "true") {

        // hiding all the sections on the page and shows only the login page

        var allSections = document.querySelectorAll('section');

        for (i = 0; i < allSections.length; i++) {
            allSections[i].style.display = 'none';
        }

        // image links should not start with '../' on the homepage
        if (document.title == "Home - Prime Store") {
            var image = 'images/login_images/man-using-laptop.png';
            var googleLoginImage = 'icons/google-plus.png';
            var personImage = 'icons/person2.png';
            var lockedImage = 'icons/locked.png';
            var facebookLoginImage = 'icons/facebook2.png';
            var twitterLoginImage = 'icons/twitter2.png';
        } else {
            var image = '../images/login_images/man-using-laptop.png';
            var googleLoginImage = '../icons/google-plus.png';
            var personImage = '../icons/person2.png';
            var lockedImage = '../icons/locked.png';
            var facebookLoginImage = '../icons/facebook2.png';
            var twitterLoginImage = '../icons/twitter2.png';
        }

        // creating the login page and displaying it
        var loginFeatureDiv = document.createElement('div');

        loginFeatureDiv.innerHTML = ` 
    
    <section id="login-section">
    
    <div class="login-section-inner-div">
    
        <div class="login-section-inner-left">
            <img src="${image}" alt="" width="100%">
        </div>
    
        <div class="login-section-inner-right">
    
            <p class="log-in-text">Log In</p>
    
            <div class="login-form-div">
    
                <form name = "login-form">
    
                    <div class="login-input-div">
    
                        <img src="${personImage}" height="18px" alt="">
                        <input type="text" name="login-username" class="login-input-field" placeholder="Username">
    
                    </div>
    
                    <div class="login-input-div">
    
                        <img src="${lockedImage}" height="16px" alt="">
                        <input type="password" name="login-password" class="login-input-field" placeholder="Password">
    
                    </div>
    
                    <div class="login-remember-checkbox-div">
                        <input type="checkbox" name="" checked> <span>Remember me</span>
                    </div>
    
                    <div class="login-button-div">
                        <input type="button" value="Log In" class="login-form-submit-button" onclick="signIn()">
                        <span class="forgot-password-text" onclick="forgotPassword()">Forgot password?</span>
                    </div>
    
                </form>
    
            </div>
    
            <div class="social-login-options-div">
    
                <span class="login-with-text">Or login with</span>
    
                <div class="social-login-icons-div" onclick="socialLogin()">
                    <img src="${googleLoginImage}" alt="" height="31px">
                    <img src="${facebookLoginImage}" alt="" height="30px">
                    <img src="${twitterLoginImage}" alt="" height="30px">
                </div>
    
            </div>
    
        </div>
    
    </div>
    
    </section>
    
    `;

        // inserting the login page html code before the footer
        var footerSection = document.querySelector('footer');
        document.body.insertBefore(loginFeatureDiv, footerSection);

    }

}

// This function handles the login process via facebook/google
function socialLogin() {

    document.querySelector(".warning-message-text").innerHTML = `This feature will be available soon.`;
    document.querySelector(".warning-message-div").style.display = 'flex'

    setTimeout(function () {
        document.querySelector(".warning-message-div").style.display = 'none'
    }, 3000);

}

// This function handles the password reset process
function forgotPassword() {

    document.querySelector(".warning-message-text").innerHTML = `Please contact the owner for password reset.`;
    document.querySelector(".warning-message-div").style.display = 'flex'

    setTimeout(function () {
        document.querySelector(".warning-message-div").style.display = 'none'
    }, 3000);

}

// This function handles the login process when the username & password is entered 
function signIn() {

    // creating a username and password for login test
    const username = "admin";
    const password = "admin";

    // store the entered username and password from the login form
    var enteredUsername = document.forms["login-form"]["login-username"].value;
    var enteredPassword = document.forms["login-form"]["login-password"].value;

    // checking the username and password validity
    if (enteredUsername === username) {

        if (enteredPassword === password) {

            // changes the loggedIn status to true & store it in browser's local storage
            loggedIn = "true";
            localStorage.setItem("loggedIn", "true");

            // displays a success message
            document.querySelector('.success-message-text').innerHTML = 'You have successully signed in.';
            document.querySelector('.success-message-div').style.display = 'flex';

            // message is hidden after 0.6 seconds
            setTimeout(() => {
                location.reload();
            }, 600);

        } else {

            // displays error message for 3 seconds if invalid password is given 
            document.querySelector('.error-message-text').innerHTML = 'Invalid password!';
            document.querySelector('.error-message-div').style.display = 'flex';

            setTimeout(() => {
                document.querySelector('.error-message-div').style.display = 'none';
            }, 3000);
        }
    }
    else {

        // displays error message for 3 seconds if invalid username is given 
        document.querySelector('.error-message-text').innerHTML = "User '" + enteredUsername + "' does not exist!";
        document.querySelector('.error-message-div').style.display = 'flex';

        setTimeout(() => {
            document.querySelector('.error-message-div').style.display = 'none';
        }, 3000);

    }

}


/* ------------------------------------------------------ Login Section Ends -------------------------------------------------------- */


/* -------------------------------------------------- Product inner Section Starts----------------------------------------------- */

// This function is called when buyNow button is clicked
function buyNow() {

    // displaying a message for 3 seconds based on loggedIn status

    if (loggedIn == "true") {

        document.querySelector(".success-message-text").innerHTML = `Congratulations! Your order has been placed. `;
        document.querySelector(".success-message-div").style.display = 'flex'

        setTimeout(function () {
            document.querySelector(".success-message-div").style.display = 'none'
        }, 3000);

    } else {

        document.querySelector(".warning-message-text").innerHTML = `Please sign in to place your order. `;
        document.querySelector(".warning-message-div").style.display = 'flex'

        setTimeout(function () {
            document.querySelector(".warning-message-div").style.display = 'none'
        }, 3000);

    }

}

/* -------------------------------------------------- Product inner Section Ends ----------------------------------------------- */


/* ------------------------------------------------------ Cart Section Starts -------------------------------------------------------- */

// image links on homepage should not start with '../'


var cartTotalPrice = 0;

var pageName = document.title;
pageName = pageName.split(' ')[0];
pageName = pageName.toLowerCase();

if (pageName == 'home') {

    var cartIcon = 'icons/cart.png';
    var cartCloseIcon = 'icons/cross.png';

} else {

    var cartIcon = '../icons/cart.png';
    var cartCloseIcon = '../icons/cross.png';

}


// creating cart section

var cartSection = document.createElement('div');
cartSection.id = 'cart-detailed-section';

cartSection.innerHTML = `

<div class="cart-detailed-inner-div">

    <div class="cart-detailed-upper">

        <div class="cart-detailed-upper-left">
            <img src="${cartIcon}" height="22px" alt="">
            <span class="cart-detailed-title">Cart</span>
        </div>

        <img src="${cartCloseIcon}" height="35px" alt="" onclick="closeCart()">

    </div>

    <hr>

    <div class="cart-detailed-products-list-div">

        <div></div>

    </div>

    <div class = "cart-detailed-lower">

        <hr class="cart-detailed-lower-hr"> 
    
        <div class = "cart-detailed-lower-left">
        
            <span class = "cart-total-text"> Total </span>
            <span class = "cart-total-price"></span>
        
        </div>

        <div class="cart-detailed-buy-button" onclick="buyNow()"> 
            Place order
        </div>
    
    </div>

</div>


`;

document.body.appendChild(cartSection);

// this function updates cart when new items are addred to cart
function updateCartDetails() {

    cartTotalPrice = 0;

    document.querySelector('.cart-detailed-products-list-div').innerHTML = '';

    for (i = 0; i < cartItems.length; i++) {

        // creating individual products list in cart section
        createCartDetailedItem(i);

    }

    // if the cart is empty, displays a message

    if (cartItems.length == 0) {

        document.querySelector('.cart-detailed-products-list-div').innerHTML = `
        
            <p class="empty-cart-text"> Your cart is empty. <br> Continue shopping. </p>        
        
        `;

        document.querySelector('.cart-detailed-lower').style.display = 'none';

        document.querySelector('.cart-detailed-products-list-div').style.overflowY = 'hidden';

    } else {

        document.querySelector('.cart-detailed-lower').style.display = 'flex';

        document.querySelector('.cart-detailed-products-list-div').style.overflowY = 'auto';

    }

    // updates the cart items total price
    document.querySelector('.cart-total-price').innerHTML = 'रु ' + cartTotalPrice;

}

// this function creates individual products list in cart section
function createCartDetailedItem(i) {

    // storing the index of product in variable 'j' 
    var j = cartItems[i];

    // deciding link of image according to current page
    if (document.title == "Home - Prime Store") {
        var image = 'images/products_images/canon' + j + '.png';
    } else {
        var image = '../images/products_images/canon' + j + '.png';
    }

    // storing the name and price of product in variables
    var name = productsName[j];
    var price = productsPrice[j];

    // calculating the discounting price acc to product
    if (cartItems[i] == 18) {
        price = price - (36 / 100 * price);
    } else {
        price = price - (50 / 100 * price);
    }

    // storing the product quantity
    var quantity = cartItemsQuantity[i];

    // adding the price of item to cartTotalPrice
    for (i = 1; i <= quantity; i++) {
        cartTotalPrice = cartTotalPrice + price;
    }

    // creating the product list item
    var newCartItem = document.createElement('div');
    newCartItem.innerHTML = `
    
    <div class="cart-product">

            <div class="cart-product-detail-div">

                <img src="${image}"  height="75px" alt="">

                <div class="cart-product-detail-inner">

                    <span class="cart-product-name">${name}</span>
                    <span class="cart-product-brand">Canon</span>

                </div>

            </div>

            <span class="cart-product-price">रु ${price}</span>

            <div class="cart-product-quantity-div">
                
                <span class="cart-product-quantity">${quantity} &nbsp;&nbsp;&nbsp;</span>
                
            </div>

        </div>


    
    `;

    // inserting the new product on top of the cart
    var firstItem = document.querySelector('.cart-detailed-products-list-div>div:first-child');
    document.querySelector('.cart-detailed-products-list-div').insertBefore(newCartItem, firstItem);

}

// This functions closes the cart if clicked on other parts of the page
function clickOutside(event) {

    var cartDiv = document.querySelector('#cart-detailed-section');
    const isClickInside = cartDiv.contains(event.target);

    if (!isClickInside) {

        closeCart();

    }

}

// storing the reference of clickOutside() function in clickOutsideHandler variable
var clickOutsideHandler = clickOutside;

// This function shows the cart section
function openCart() {

    // shows the cart section
    document.querySelector('#cart-detailed-section').style.right = '0px';

    // adds eventListener to close the cart if clicked other part of the page
    setTimeout(function () {
        document.addEventListener('click', clickOutsideHandler);
    }, 500);

}

// this function closes the cart
function closeCart() {

    document.querySelector('#cart-detailed-section').style.right = '-600px';

    // remove the clickOutsideHandler eventlistener
    document.removeEventListener('click', clickOutsideHandler);

}

// updates the cart when the page is loaded
updateCartDetails();

/* ------------------------------------------------------ Cart detailed Section Ends -------------------------------------------------------- */


/* --------------------------------------------------- Responsivness Section Starts ------------------------------------------------------ */

// Product page and contact page is only made responsive (using only javascript) (no media queries)

function adjustStyles() {

    // determining the visibility of elements acc to window's inner width

    if (window.innerWidth < 525) {

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

    } else {

        document.querySelector('.header-search-box').style.display = 'none';

    }

    if (window.innerWidth < 590) {

        document.querySelector('.header-logged-in-div').style.display = 'none';
        document.querySelector('.header-login').style.display = 'none';
        document.querySelector('#nav-home-button').style.display = 'none';

    } else {

        if (loggedIn == "true") {
            document.querySelector('.header-logged-in-div').style.display = 'flex';
        } else {
            document.querySelector('.header-login').style.display = 'flex';
        }

        document.querySelector('#nav-home-button').style.display = 'flex';

    }

}

// run adjustStyles() function when the page is loaded

window.onload = function () {
    adjustStyles();
};

adjustStyles();

// adds eventListener so that when the screen is resized, adjustStyles() is called
window.addEventListener('resize', adjustStyles);

/* ---------------------------------------------------- Responsivness Section Ends ------------------------------------------------------ */


// removing the default reload behavior of form submission

// storing all forms of page in array
const allForms = document.querySelectorAll('form');

// removing reload behavior of each form
for (i = 0; i < allForms.length; i++) {

    allForms[i].addEventListener('submit', function (event) {
        event.preventDefault();
    });

}