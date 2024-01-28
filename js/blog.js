// shows the first blog section
function blogInner1() {

    // hide all the sections and shows only the first blog section

    var allSections = document.querySelectorAll("section");

    for (i = 0; i < allSections.length; i++) {
        allSections[i].style.display = 'none';
    }

    document.querySelector("#blog-inner-section").style.display = 'block';

}

// shows the second blog section
function blogInner2() {

    // hide all the sections and shows only the second blog section

    var allSections = document.querySelectorAll("section");

    for (i = 0; i < allSections.length; i++) {
        allSections[i].style.display = 'none';
    }

    document.querySelector("#blog-inner-section-2").style.display = 'block';

}

// returns to the main blog page
function backToBlogs() {

    // hide all the sections and shows only the main blog page

    var allSections = document.querySelectorAll("section");

    for (i = 0; i < allSections.length; i++) {
        allSections[i].style.display = 'none';
    }

    document.querySelector("#blog-main-section").style.display = 'block';

}