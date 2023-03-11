// Code for Mobile Menu
const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('.menu');
const arrAncherTag = document.querySelectorAll('.menu__link');
const mediaQuery = window.matchMedia('(max-width: 768px)');

hamburger.addEventListener('click', (event) => {
  event.stopPropagation();
  menu.classList.toggle('showMobil');
  hamburger.classList.toggle('showMobil');
});

arrAncherTag.forEach((a) => {
  a.addEventListener('click', (event) => {
    event.stopPropagation();
    if (mediaQuery.matches) {
      menu.classList.toggle('showMobil');
      hamburger.classList.toggle('showMobil');
    }
  });
});
