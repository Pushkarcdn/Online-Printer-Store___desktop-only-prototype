// assigning reference of detailed section of each member to constants
const pushkarCard = document.querySelector('#about-pushkar');
const shreyaCard = document.querySelector('#about-shreya');
const brijalCard = document.querySelector('#about-brijal');

// starting from member 1
var currentPerson = 0;

// when a member is clicked, this function shows his/her portfolio
function aboutDetails(person) {

    currentPerson = person;

    // scrolls to top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    if (person == 1) {

        // adding class 'about-left-current-person' to current member's div and removing from others

        if (shreyaCard.classList.contains('about-left-current-person')) {
            shreyaCard.classList.remove('about-left-current-person');
        }

        if (brijalCard.classList.contains('about-left-current-person')) {
            brijalCard.classList.remove('about-left-current-person');
        }

        pushkarCard.classList.add('about-left-current-person');

        // hiding other members portfolio and showing only his/her portfolio
        document.querySelector('#about-section-shreya').style.display = 'none';
        document.querySelector('#about-section-brijal').style.display = 'none';
        document.querySelector('#about-section-pushkar').style.display = 'flex';

    }

    if (person == 2) {

        // adding class 'about-left-current-person' to current member's div and removing from others

        if (pushkarCard.classList.contains('about-left-current-person')) {
            pushkarCard.classList.remove('about-left-current-person');
        }

        if (brijalCard.classList.contains('about-left-current-person')) {
            brijalCard.classList.remove('about-left-current-person');
        }

        shreyaCard.classList.add('about-left-current-person');

        // hiding other members portfolio and showing only his/her portfolio

        document.querySelector('#about-section-pushkar').style.display = 'none';
        document.querySelector('#about-section-brijal').style.display = 'none';
        document.querySelector('#about-section-shreya').style.display = 'flex';


    }

    if (person == 3) {

        // adding class 'about-left-current-person' to current member's div and removing from others

        if (pushkarCard.classList.contains('about-left-current-person')) {
            pushkarCard.classList.remove('about-left-current-person');
        }

        if (shreyaCard.classList.contains('about-left-current-person')) {
            shreyaCard.classList.remove('about-left-current-person');
        }

        brijalCard.classList.add('about-left-current-person');

        // hiding other members portfolio and showing only his/her portfolio

        document.querySelector('#about-section-shreya').style.display = 'none';
        document.querySelector('#about-section-pushkar').style.display = 'none';
        document.querySelector('#about-section-brijal').style.display = 'flex';

    }

}

// running the function when the page loads
aboutDetails(1);