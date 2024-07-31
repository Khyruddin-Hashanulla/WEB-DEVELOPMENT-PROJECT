//Toggle icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//Scroll Sections
let Sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    Sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active Navbar Links 
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            // Active Section For Animation On Scroll
            sec.classList.add('show-animate');
        }

        //If Want To Use Animation that Reapeats On Scroll Use This
        else {
            sec.classList.remove('show-animate');
        }

    });
    //Sticky Header
    let Header = document.querySelector('header');
    Header.classList.toggle('sticky', window.scrollY > 100);

    // Remove Toggle Icon And Navbar When Click Navbar Links (Scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //Animation Footer On Scroll
    let Footer = document.querySelector('footer');

    Footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}
//Contact Section 

const form = document.querySelector("form");

function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "business.khyruddin@gmail.com",
        Password: "0FF60F38B296281C1169AA71848A11787998",
        To: 'business.khyruddin@gmail.com',
        From: "business.khyruddin@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}
form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
});