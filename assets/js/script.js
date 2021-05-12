const hamburger = document.querySelector('.nav__hamburger');
const navbar = document.querySelector('.page__nav');
const navlist = document.querySelector('.nav__list');


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
    navlist.classList.toggle('active');

})