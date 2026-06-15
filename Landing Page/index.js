const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav_menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});