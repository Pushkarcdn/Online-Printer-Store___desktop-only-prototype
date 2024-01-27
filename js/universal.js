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


/* ------------------------------------------------------ Header Section Starts -------------------------------------------------------- */

function createHeader() {

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

createHeader();

/* ------------------------------------------------------ Header Section Ends -------------------------------------------------------- */


/* --------------------------------------------------- Header Cart Section Starts ------------------------------------------------------ */

var cartItems = [];
var cartItemsQuantity = [];

if (typeof (Storage) !== "undefined") {

    var pastCart = JSON.parse(localStorage.getItem("cartItems"));
    var pastCartQuantities = JSON.parse(localStorage.getItem("cartItemsQuantity"));

    if (pastCart == "" || pastCart == " " || pastCart == null) {
        cartItems = [];
        cartItemsQuantity = [];
    } else {
        cartItems = pastCart;
        cartItemsQuantity = pastCartQuantities;
    }

    // // Retrieving the array
    // var retrievedArray = JSON.parse(localStorage.getItem('myArray'));
    // console.log(retrievedArray); // Outputs: [1, 2, 3, 4, 5]

}

function updateCart() {

    cartItems.push(clickedProductIndex);
    clickedProductQuantity = parseInt(document.querySelector(".product-quantity-div").innerHTML);
    cartItemsQuantity.push(clickedProductQuantity);

    // storing the cart details inside browser local storage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartItemsQuantity', JSON.stringify(cartItemsQuantity));

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

    updateCartTotal();
    updateCartDetails();

}

function updateCartTotal() {

    cartItemsTotal = 0;

    for (i = 0; i < cartItems.length; i++) {
        cartItemsTotal = cartItemsTotal + cartItemsQuantity[i];
    }

    document.querySelector('#cart-items-amount').innerHTML = cartItemsTotal;

}

updateCartTotal();


/* ----------------------------------------------------- Header Cart Section Ends -------------------------------------------------------- */


/* ------------------------------------------------------ Navbar Section Starts -------------------------------------------------------- */

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

function boldCurrentPageName() {
    var pageName = document.title;
    pageName = pageName.split(' ')[0];
    pageName = pageName.toLowerCase();
    document.querySelector('#nav-' + pageName + '-button').classList.add('current-page');
}



// createHeader();
createNavbar();

boldCurrentPageName();

/* ------------------------------------------------------ Navbar Section Ends -------------------------------------------------------- */


/* --------------------------------------------------- Message div section Starts ----------------------------------------------------- */

// Error message div

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


var errorMessageDiv = document.createElement('div');
errorMessageDiv.innerHTML = `

<div class="error-message-div">

    <img src = "${errorIcon}" alt="" height = "60%">
    <p class="error-message-text">Error Message box</p>

</div>

`;

document.body.appendChild(errorMessageDiv);

// Success message div
var successMessageDiv = document.createElement('div');
successMessageDiv.innerHTML = `

<div class="success-message-div">

    <img src = "${successIcon}" alt="" height = "60%">
    <p class="success-message-text">Success Message box</p>

</div>

`;

document.body.appendChild(successMessageDiv);

// Warning message div
var warningMessageDiv = document.createElement('div');
warningMessageDiv.innerHTML = `

<div class="warning-message-div">

    <img src = "${warningicon}" alt="" height = "50%">
    <p class="warning-message-text">Success Message box</p>

</div>

`;

document.body.appendChild(warningMessageDiv);


/* --------------------------------------------------- Message div section ends ------------------------------------------------------- */


/* ------------------------------------------------------ Footer Section Starts -------------------------------------------------------- */

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

function footerFormHandle() {

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


/* ------------------------------------------------------ Login Section Starts -------------------------------------------------------- */

function loginHandler() {

    if (loggedIn != "true") {

        var allSections = document.querySelectorAll('section');

        for (i = 0; i < allSections.length; i++) {
            allSections[i].style.display = 'none';
        }

        // document.querySelector('#login-section').style.display = 'flex';

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

        var footerSection = document.querySelector('footer');

        document.body.insertBefore(loginFeatureDiv, footerSection);

    }

}

function socialLogin() {

    document.querySelector(".warning-message-text").innerHTML = `This feature will be available soon.`;
    document.querySelector(".warning-message-div").style.display = 'flex'

    setTimeout(function () {
        document.querySelector(".warning-message-div").style.display = 'none'
    }, 3000);

}

function forgotPassword() {

    document.querySelector(".warning-message-text").innerHTML = `Please contact the owner for password reset.`;
    document.querySelector(".warning-message-div").style.display = 'flex'

    setTimeout(function () {
        document.querySelector(".warning-message-div").style.display = 'none'
    }, 3000);

}

// when the username and password is entered and login button is pressed
function signIn() {

    const username = "admin";
    const password = "admin";

    // take entered username and password from the login form
    var enteredUsername = document.forms["login-form"]["login-username"].value;
    var enteredPassword = document.forms["login-form"]["login-password"].value;

    if (enteredUsername === username) {

        if (enteredPassword === password) {

            loggedIn = "true";
            localStorage.setItem("loggedIn", "true");

            document.querySelector('.success-message-text').innerHTML = 'You have successully signed in.';
            document.querySelector('.success-message-div').style.display = 'flex';

            setTimeout(() => {
                location.reload();
            }, 600);

        } else {

            document.querySelector('.error-message-text').innerHTML = 'Invalid password!';
            document.querySelector('.error-message-div').style.display = 'flex';

            setTimeout(() => {
                document.querySelector('.error-message-div').style.display = 'none';
            }, 3000);
        }
    }
    else {

        document.querySelector('.error-message-text').innerHTML = "User '" + enteredUsername + "' does not exist!";
        document.querySelector('.error-message-div').style.display = 'flex';

        setTimeout(() => {
            document.querySelector('.error-message-div').style.display = 'none';
        }, 3000);

    }

}

var loggedIn;

if (typeof (Storage) !== "undefined") {

    var pastLoggedIn = localStorage.getItem("loggedIn");

    if (pastLoggedIn == "" || pastLoggedIn == "" || pastLoggedIn == null) {

        // alert("past login was not saved.");

        loggedIn = "false";

        localStorage.setItem("loggedIn", "false");

    }
    else if (pastLoggedIn == "true") {

        loggedIn = "true";

        document.querySelector('.header-sign-out-text').addEventListener('click', function () {

            loggedIn = "false";
            localStorage.setItem("loggedIn", "false");
            localStorage.clear();

            document.querySelector('.warning-message-text').innerHTML = 'You have signed out of your account.';
            document.querySelector('.warning-message-div').style.display = 'flex';

            setTimeout(() => {
                location.reload();
            }, 1000);

        });

    }

} else {
    loggedIn = "false";
}

if (loggedIn == "true") {
    document.querySelector('.header-logged-in-div').style.display = 'flex';
} else {
    document.querySelector('.header-login').style.display = 'flex';
}

/* ------------------------------------------------------ Login Section Ends -------------------------------------------------------- */


/* -------------------------------------------------- Product inner Section Starts----------------------------------------------- */

function buyNow() {

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


/* ------------------------------------------------------ Cart detailed Section Starts -------------------------------------------------------- */

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


function updateCartDetails() {

    cartTotalPrice = 0;

    document.querySelector('.cart-detailed-products-list-div').innerHTML = '';

    for (i = 0; i < cartItems.length; i++) {

        createCartDetailedItem(i);

    }

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

    document.querySelector('.cart-total-price').innerHTML = 'रु ' + cartTotalPrice;

}

function createCartDetailedItem(i) {

    var j = cartItems[i];

    if (document.title == "Home - Prime Store") {
        var image = 'images/products_images/canon' + j + '.png';
    } else {
        var image = '../images/products_images/canon' + j + '.png';
    }

    var name = productsName[j];
    var price = productsPrice[j];

    if (cartItems[i] == 18) {
        price = price - (36 / 100 * price);
    } else {
        price = price - (50 / 100 * price);
    }

    var quantity = cartItemsQuantity[i];

    for (i = 1; i <= quantity; i++) {
        cartTotalPrice = cartTotalPrice + price;
    }

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

    var firstItem = document.querySelector('.cart-detailed-products-list-div>div:first-child');

    document.querySelector('.cart-detailed-products-list-div').insertBefore(newCartItem, firstItem);

}


function openCart() {

    document.querySelector('#cart-detailed-section').style.right = '0px';

    setTimeout(function () {

        document.addEventListener('click', clickOutsideHandler);

    }, 500);

}

var clickOutsideHandler = clickOutside;

function clickOutside(event) {

    var cartDiv = document.querySelector('#cart-detailed-section');
    const isClickInside = cartDiv.contains(event.target);

    if (!isClickInside) {

        closeCart();

    }

}

function closeCart() {

    document.querySelector('#cart-detailed-section').style.right = '-600px';
    document.removeEventListener('click', clickOutsideHandler);

}

var cartTotalPrice = 0;
updateCartDetails();

/* ------------------------------------------------------ Cart detailed Section Ends -------------------------------------------------------- */


/* --------------------------------------------------- Responsivness Section Starts ------------------------------------------------------ */

function adjustStyles() {

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

window.onload = function () {
    adjustStyles();
};

adjustStyles();
window.addEventListener('resize', adjustStyles);

/* ---------------------------------------------------- Responsivness Section Ends ------------------------------------------------------ */


const allForms = document.querySelectorAll('form');

for (i = 0; i < allForms.length; i++) {

    allForms[i].addEventListener('submit', function (event) {

        // Prevent the default form submission refresh behavior
        event.preventDefault();

    });

}