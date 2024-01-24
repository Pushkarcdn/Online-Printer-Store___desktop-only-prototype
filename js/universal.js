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

    document.querySelector("header").innerHTML = `

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
                
            <div class = "header-login" onclick="loginHandler()" style="display:none;">
                <img src="../icons/person.png" alt="" height="25px">
                <span> Sign in</span>
            </div>

            <div class = "header-logged-in-div" style="display:none;">

                <img src="/images/login_images/pushkar.png" height="40px" alt="">
        
                <div class="header-logged-user-detail-div">
                    <span class="header-logged-user-detail1">Pushkar Sah</span>
                    <span class="header-logged-user-detail2">Kathmandu</span>
                </div>
        
                <span class="header-sign-out-text">Sign out</span>
                        
            </div>

            <div class="header-cart" onclick="openCart()">
                <img src="../icons/cart.png" alt="" height="20px">
                <span>Cart (<span id="cart-items-amount">0</span>)</span>
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

    document.querySelector("nav").innerHTML = `

    <span><a id="nav-home-button" href="/index.html">Home</a></span>

    <span><a id="nav-products-button" href="/html/products.html">Products</a><img src="../icons/down-arrow.png" alt=""
        height="20"></span>

    <span><a id="nav-blog-button" href="/html/blog.html">Blog</a><img src="../icons/down-arrow.png" alt=""
        height="20"></span>

    <span><a id="nav-research-button" href="/html/research.html">Research</a><img src="../icons/down-arrow.png" alt=""
        height="20"></span>

    <span><a id="nav-about-button" href="/html/about.html">About Us</a><img src="../icons/down-arrow.png" alt=""
        height="20"></span>

    <span><a id="nav-contact-button" href="/html/contact.html">Contact</a></span>
    
    `;

}

function boldCurrentPageName() {
    var pageName = document.title;
    pageName = pageName.split(' ')[0];
    pageName = pageName.toLowerCase();
    document.querySelector('#nav-' + pageName + '-button').classList.add('current-page');
}

createNavbar();
boldCurrentPageName();

/* ------------------------------------------------------ Navbar Section Ends -------------------------------------------------------- */


/* --------------------------------------------------- Message div section Starts ----------------------------------------------------- */

// Error message div
var errorMessageDiv = document.createElement('div');
errorMessageDiv.innerHTML = `

<div class="error-message-div">

    <img src = "/icons/error-circle.png" alt="" height = "60%">
    <p class="error-message-text">Error Message box</p>

</div>

`;

document.body.appendChild(errorMessageDiv);

// Success message div
var successMessageDiv = document.createElement('div');
successMessageDiv.innerHTML = `

<div class="success-message-div">

    <img src = "/icons/success.png" alt="" height = "60%">
    <p class="success-message-text">Success Message box</p>

</div>

`;

document.body.appendChild(successMessageDiv);

// Warning message div
var warningMessageDiv = document.createElement('div');
warningMessageDiv.innerHTML = `

<div class="warning-message-div">

    <img src = "/icons/warning2.png" alt="" height = "50%">
    <p class="warning-message-text">Success Message box</p>

</div>

`;

document.body.appendChild(warningMessageDiv);


/* --------------------------------------------------- Message div section ends ------------------------------------------------------- */


/* ------------------------------------------------------ Footer Section Starts -------------------------------------------------------- */

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

        <img src="../images/homepage_images/logo.png" alt="" width="90px">

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
                <img src="../icons/facebook.png" alt="" height="20px">
                <img src="../icons/insta.png" alt="" height="20px">
                <img src="../icons/linkedin.png" alt="" height="20px">
                <img src="../icons/github.png" alt="" height="23px">
                <img src="../icons/feed.png" alt="" height="18px">
            </div>

        </div>

        <div class="footer-subscribe-section">
            <span>SUBSCRIBE US</span>
            <form action="">
                <input type="email" name="Email" placeholder="YOUR EMAIL" required>
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

/* ------------------------------------------------------ Footer Section Ends -------------------------------------------------------- */


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

    }
    else {

        document.querySelector('.header-search-box').style.display = 'none';

    }

    if (window.innerWidth < 570) {

        document.querySelector('#nav-home-button').style.display = 'none';

    }
    else {

        document.querySelector('#nav-home-button').style.display = 'flex';

    }

}

window.onload = function () {
    adjustStyles();
};

adjustStyles();
window.addEventListener('resize', adjustStyles);

/* ---------------------------------------------------- Responsivness Section Ends ------------------------------------------------------ */


/* ------------------------------------------------------ Login Section Starts -------------------------------------------------------- */

function loginHandler() {

    if (loggedIn != "true") {

        var allSections = document.querySelectorAll('section');

        for (i = 0; i < allSections.length; i++) {
            allSections[i].style.display = 'none';
        }

        // document.querySelector('#login-section').style.display = 'flex';

        var loginFeatureDiv = document.createElement('div');

        loginFeatureDiv.innerHTML = ` 
    
    <section id="login-section">
    
    <div class="login-section-inner-div">
    
        <div class="login-section-inner-left">
            <img src="../images/login_images/man-using-laptop.png" alt="" width="100%">
        </div>
    
        <div class="login-section-inner-right">
    
            <p class="log-in-text">Log In</p>
    
            <div class="login-form-div">
    
                <form name = "login-form">
    
                    <div class="login-input-div">
    
                        <img src="../icons/person2.png" height="18px" alt="">
                        <input type="text" name="login-username" class="login-input-field" placeholder="Username">
    
                    </div>
    
                    <div class="login-input-div">
    
                        <img src="../icons/locked.png" height="16px" alt="">
                        <input type="password" name="login-password" class="login-input-field" placeholder="Password">
    
                    </div>
    
                    <div class="login-remember-checkbox-div">
                        <input type="checkbox" name="" checked> <span>Remember me</span>
                    </div>
    
                    <div class="login-button-div">
                        <input type="button" value="Log In" class="login-form-submit-button" onclick="signIn()">
                        <span class="forgot-password-text">Forgot password?</span>
                    </div>
    
                </form>
    
            </div>
    
            <div class="social-login-options-div">
    
                <span class="login-with-text">Or login with</span>
    
                <div class="social-login-icons-div">
                    <img src="../icons/google-plus.png" alt="" height="31px">
                    <img src="../icons/facebook2.png" alt="" height="30px">
                    <img src="../icons/twitter2.png" alt="" height="30px">
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

// when the username and password is entered and login button is pressed
function signIn() {

    const username = "user";
    const password = "user";

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

        // document.querySelector('.header-login').removeAttribute('onclick');

        // document.querySelector('.header-login>span').innerHTML = 'Sign out';

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

var cartSection = document.createElement('div');
cartSection.id = 'cart-detailed-section';

cartSection.innerHTML = `

<div class="cart-detailed-inner-div">

<div class="cart-detailed-upper">

    <div class="cart-detailed-upper-left">
        <img src="/icons/cart.png" height="22px" alt="">
        <span class="cart-detailed-title">Cart</span>
    </div>

    <img src="/icons/cross.png" height="35px" alt="" onclick="closeCart()">

</div>

<hr>

<div class="cart-detailed-products-list-div">

<div>
</div>

</div>

</div>


`;

document.body.appendChild(cartSection);


function updateCartDetails() {

    document.querySelector('.cart-detailed-products-list-div').innerHTML = '';

    for (i = 0; i < cartItems.length; i++) {

        createCartDetailedItem(i);

    }

}

function createCartDetailedItem(i) {

    var j = cartItems[i];

    var image = 'canon' + j + '.png';
    var name = productsName[j];
    var price = productsPrice[j];
    var quantity = cartItemsQuantity[i];

    var newCartItem = document.createElement('div');
    newCartItem.innerHTML = `
    
    <div class="cart-product">

            <div class="cart-product-detail-div">

                <img src="/images/products_images/${image}"  height="75px" alt="">

                <div class="cart-product-detail-inner">

                    <span class="cart-product-name">${name}</span>
                    <span class="cart-product-brand">Canon</span>

                </div>

            </div>

            <span class="cart-product-price">रु ${price - (50 / 100 * price)}</span>

            <div class="cart-product-quantity-div">
                <span>-</span>
                <span class="cart-product-quantity">${quantity}</span>
                <span>+</span>
            </div>

        </div>


    
    `;

    // document.querySelector('.cart-detailed-products-list-div').appendChild(newCartItem);

    var firstItem = document.querySelector('.cart-detailed-products-list-div>div:first-child');

    document.querySelector('.cart-detailed-products-list-div').insertBefore(newCartItem, firstItem);

}


function openCart() {
    // document.querySelector('#cart-detailed-section').style.display='flex';
    document.querySelector('#cart-detailed-section').style.right = '0px';

}

function closeCart() {
    document.querySelector('#cart-detailed-section').style.right = '-550px';
}


updateCartDetails();
