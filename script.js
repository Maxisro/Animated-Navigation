const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const navs = document.querySelectorAll(".nav");

function navAnimation(direction1, direction2) {
    navs.forEach((nav, i) => {
        nav.classList.remove(`slide-${direction1}-${i + 1}`);
        nav.classList.add(`slide-${direction2}-${i + 1}`);
    });
}

function toggleNav() {
    menuBars.classList.toggle("change");
    overlay.classList.toggle("overlay-active");
    if (overlay.classList.contains("overlay-active")) {
        overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

        navAnimation('out', 'in');
    } else {
        overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

        navAnimation('in', 'out');

    }
}

// Event Listeners
menuBars.addEventListener("click", toggleNav);

navs.forEach((nav) => {
    nav.addEventListener("click", toggleNav);
});