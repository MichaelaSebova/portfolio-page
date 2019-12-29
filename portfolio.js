let menuButton = document.querySelector("#button-mobile-nav");
let menu = document.querySelector("nav");
let menuUl = document.querySelector("#nav-ul");
let langButtons = document.querySelectorAll("nav ul li a button");


// responsive menu for smaller screens
menuButton.addEventListener("click", function() {
    menu.classList.remove("none");
    menu.classList.toggle("menu-toggle");
    menuUl.classList.add("ul-toggle"); 
    for (let i = 0; i < langButtons.length; i++) {
        langButtons[i].classList.add("lang-buttons-style");
    }
})

menuUl.addEventListener("click", function() {
    menu.classList.add("none");
    menu.classList.remove("menu-toggle");
})