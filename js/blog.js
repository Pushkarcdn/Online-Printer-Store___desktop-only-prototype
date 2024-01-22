function blogInner1() {

    var allSections = document.querySelectorAll("section");

    for (i = 0; i < allSections.length; i++) {
        allSections[i].style.display = 'none';
    }

    document.querySelector("#blog-inner-section").style.display = 'block';

}

function blogInner2() {

    var allSections = document.querySelectorAll("section");

    for (i = 0; i < allSections.length; i++) {
        allSections[i].style.display = 'none';
    }

    document.querySelector("#blog-inner-section-2").style.display = 'block';

}

function backToBlogs() {

    var allSections = document.querySelectorAll("section");

    for (i = 0; i < allSections.length; i++) {
        allSections[i].style.display = 'none';
    }

    document.querySelector("#blog-main-section").style.display = 'block';

}