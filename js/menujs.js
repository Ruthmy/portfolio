let header = document.querySelector(".app-bar");
let hamburger = document.querySelector("#hamburger");
let menu = document.querySelector(".desktop-menu");

hamburger.addEventListener("click", function(event) {
  event.stopPropagation();
  menu.classList.toggle("showMobil");
  hamburger.classList.toggle("showMobil");
});
