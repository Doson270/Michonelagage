const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === "true" || false;

    burger.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('active');
});