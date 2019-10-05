const toggle = document.querySelector(".navigation__toggle");
const nav = document.querySelector(".navigation__nav");

function toggleNav() {
    toggle.addEventListener("click", function() {
        console.log("triggered");
        nav.classList.toggle("hide");
    });
}

function adjustNav() {
    if (window.innerWidth <= 850) {
        nav.classList.add("hide");
    } else {
        nav.classList.remove("hide");
    }
}

window.addEventListener("resize", adjustNav);

document.addEventListener("DOMContentLoaded", function() {
    toggleNav();
    adjustNav();
});

