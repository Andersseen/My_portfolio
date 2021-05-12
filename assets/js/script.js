// HAMBURGER
const hamburger = document.querySelector('.nav__hamburger');
const navbar = document.querySelector('.page__nav');
const navlist = document.querySelector('.nav__list');


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
    navlist.classList.toggle('active');

})

// SWIPER

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 10,
    direction: 'vertical',
    mousewheel: true,
    keyboard: true,
    speed: 1000,
    effect: 'cube',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },


});
document.querySelector('.slide-1').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(0, 1000);
});
document.querySelector('.slide-2').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(1, 1000);
});
document.querySelector('.slide-3').addEventListener('click', function (e) {
    e.preventDefault();
    swiper.slideTo(2, 1000);
});