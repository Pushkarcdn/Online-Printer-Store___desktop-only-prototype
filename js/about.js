const pushkarCard = document.querySelector('#about-pushkar');
const shreyaCard = document.querySelector('#about-shreya');
const brijalCard = document.querySelector('#about-brijal');

function aboutDetails(person) {

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