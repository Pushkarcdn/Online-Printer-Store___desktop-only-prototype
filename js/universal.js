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



// Login System

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
