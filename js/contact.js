function formValidate(event) {

    event.preventDefault();

    var fname = document.forms["contactForm"]["Fname"].value.trim();
    var lname = document.forms["contactForm"]["Lname"].value.trim();
    var phone = document.forms["contactForm"]["Phone"].value.trim();
    var email = document.forms["contactForm"]["Email"].value.trim();
    var message = document.forms["contactForm"]["Message"].value.trim();

    if (fname == "" || lname == "" || phone == "" || email == "" || message == "") {

        document.querySelector("#form-submitted-message>p").innerHTML = `Please fill out all the fields.`;
        document.querySelector("#form-submitted-message>p").style.color = 'red';
        document.querySelector("#form-submitted-message").style.display = "flex";

    } else {

        if (email.includes('@')) {

            document.querySelector("#form-submitted-message>p").innerHTML = `Form submitted successfully.`;
            document.querySelector("#form-submitted-message>p").style.color = 'green';
            document.querySelector("#form-submitted-message").style.display = "flex";

        } else {

            document.querySelector("#form-submitted-message>p").innerHTML = `Please input a valid email.`;
            document.querySelector("#form-submitted-message>p").style.color = 'red';
            document.querySelector("#form-submitted-message").style.display = "flex";

        }

    }

}