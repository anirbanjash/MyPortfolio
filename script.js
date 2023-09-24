//toggle icn navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active')
    }
    //  scrooplling

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    })

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active')

}
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 200
});
ScrollReveal().reveal('.home-content,.heading,.skills-header,.about h3', { origin: 'top' });
ScrollReveal().reveal('.btn-box,.home-img img,#textmessage,.home .btn-box', { origin: 'bottom' });
ScrollReveal().reveal('#school,#skillpart,.about-img,.home-content h1', { origin: 'left' });
ScrollReveal().reveal('#college,#skillpart1,.about p,.home p', { origin: 'right' });


const typed = new Typed('.multiple-text', {
    strings: ['a JAVA Lover bro', 'an AI Enthusiast bro', 'a Flute Player bro'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
