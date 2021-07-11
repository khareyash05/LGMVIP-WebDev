var menu = document.querySelector("#menu-bar");
var navbar = document.querySelector(".navbar");

menu.addEventListener('click',() => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});