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