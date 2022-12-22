 const menu = document.querySelector(".menu-bar");
 const nav = document.querySelector(".navbar");

 menu.addEventListener('click', function() {
    nav.classList.toggle("menu-active");
 });