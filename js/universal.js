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

            <div class="header-cart">
                <img src="../icons/cart.png" alt="" height="20px">
                <span>Cart (<span id="cart-items-amount">0</span>)</span>
            </div>
                
            <div class = "header-login" onclick="loginHandler()">
                <img src="../icons/person.png" alt="" height="25px">
                <span> Sign in</span>
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



/* ------------------------------------------------------ Responsivness Section Starts -------------------------------------------------------- */

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

        document.querySelector('.header-search-box').style.display = 'flex';

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

/* ------------------------------------------------------ Responsivness Section Ends -------------------------------------------------------- */


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
                        <input type="text" name="login-password" class="login-input-field" placeholder="Password">
    
                    </div>
    
                    <div class="login-remember-checkbox-div">
                        <input type="checkbox" name="" id=""> <span>Remember me</span>
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

    const username = "admin";
    const password = "admin";

    // take entered username and password from the login form
    var enteredUsername = document.forms["login-form"]["login-username"].value;
    var enteredPassword = document.forms["login-form"]["login-password"].value;

    if (enteredUsername === username && enteredPassword === password) {

        loggedIn = "true";
        localStorage.setItem("loggedIn", "true");
        location.reload();

    }
    else {
        alert("Wrong Credentials");
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

        loggedIn = true;

        document.querySelector('.header-login>span').innerHTML = 'Sign out';

        document.querySelector('.header-login>span').addEventListener('click', function () {

            loggedIn = "false";
            localStorage.setItem("loggedIn", "false");
            location.reload();

        });

    }

} else {
    loggedIn = "false";
}

/* ------------------------------------------------------ Login Section Ends -------------------------------------------------------- */