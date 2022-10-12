// mobile-menu

(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;

        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenuRef.classList.toggle("is-open");
    });
    mobileMenuRef.addEventListener('click', (event) => {

        if (event.target.classList.contains('header__link')) {
            mobileMenuRef.classList.toggle("is-open");
            menuBtnRef.classList.remove('is-open');
            menuBtnRef.setAttribute('aria-expanded', false);
        }
    })
})();

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;


// $(document).ready(function ()
document.addEventListener("DOMContentLoaded", function () {
    $('.slider').slick({
        arrows: false,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        easing: `ease`,
        infinite: true,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: false,
        fade: true,
    });

});

document.addEventListener("DOMContentLoaded", function () {
    $('.slider2').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        easing: `ease`,
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        fade: false,
    });

});

import './js/modals'