const pushkarCard = document.querySelector('#about-pushkar');
const shreyaCard = document.querySelector('#about-shreya');
const brijalCard = document.querySelector('#about-brijal');

var currentPerson = 0;

function aboutDetails(person) {

    currentPerson = person;

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    if (person == 1) {

        if (shreyaCard.classList.contains('about-left-current-person')) {
            shreyaCard.classList.remove('about-left-current-person');
        }

        if (brijalCard.classList.contains('about-left-current-person')) {
            brijalCard.classList.remove('about-left-current-person');
        }

        pushkarCard.classList.add('about-left-current-person');

        document.querySelector('#about-section-shreya').style.display = 'none';
        document.querySelector('#about-section-brijal').style.display = 'none';
        document.querySelector('#about-section-pushkar').style.display = 'flex';

    }

    if (person == 2) {

        if (pushkarCard.classList.contains('about-left-current-person')) {
            pushkarCard.classList.remove('about-left-current-person');
        }

        if (brijalCard.classList.contains('about-left-current-person')) {
            brijalCard.classList.remove('about-left-current-person');
        }

        shreyaCard.classList.add('about-left-current-person');

        document.querySelector('#about-section-pushkar').style.display = 'none';
        document.querySelector('#about-section-brijal').style.display = 'none';
        document.querySelector('#about-section-shreya').style.display = 'flex';


    }

    if (person == 3) {

        if (pushkarCard.classList.contains('about-left-current-person')) {
            pushkarCard.classList.remove('about-left-current-person');
        }

        if (shreyaCard.classList.contains('about-left-current-person')) {
            shreyaCard.classList.remove('about-left-current-person');
        }

        brijalCard.classList.add('about-left-current-person');

        document.querySelector('#about-section-shreya').style.display = 'none';
        document.querySelector('#about-section-pushkar').style.display = 'none';
        document.querySelector('#about-section-brijal').style.display = 'flex';


    }

}

aboutDetails(1);

// ------------------------About section form handling ----------------

// for (i = 0; i < 3; i++) {
//     document.forms[i].addEventListener('submit', function (event) {
//         // Prevent the default form submission refresh behavior
//         event.preventDefault();
//     });
// }

function aboutSectionFormHandle(i) {

    var fullname = document.forms[i]['fullname'].value;

    var email = document.forms[i]['email'].value;

    var feedback = document.forms[i]['feedback'].value;

    if (fullname == '' || email == '' || feedback == '') {
        alert("Please fill out all the fields");
    } else {

        if (email.includes('@')) {

            alert("Thank you for the feedback, " + fullname);

        } else {
            alert("Please enter a valid email.")
        }
    }

}