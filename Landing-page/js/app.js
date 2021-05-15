/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

let allSections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function create_nav_li_atag(liIdFromSectionfn, liValueFromSectionfn) {
    return (atagHtml = `<a class ="menu__link" data-id="${liIdFromSectionfn}">${liValueFromSectionfn}</a>`);
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

function navbuild() {
    for (let i = 0; i < allSections.length; i++) {
        const newLi = document.createElement("li");
        const liIdFromSection = allSections[i].getAttribute("id");
        const liValueFromSection = allSections[i].getAttribute("data-nav");
        newLi.innerHTML = create_nav_li_atag(liIdFromSection, liValueFromSection);
        const navBarValues = document.getElementById("navbar__list");
        navBarValues.appendChild(newLi);
    }
}

// Add class 'active' to section when near top of viewport

function atViewPort(allSeci) {
    const winBox = allSeci.getBoundingClientRect();
    return winBox.top >= 0 && winBox.left >= 0 && winBox.bottom <= (window.innerHeight || document.documentElement.clientHeight) && winBox.right <= (window.innerWidth || document.documentElement.clientWidth);
}

function activateClass() {
    for (let i = 0; i < allSections.length; i++) {
        if (atViewPort(allSections[i])) {
            allSections[i].classList.add("your-active-class");
        } else {
            allSections[i].classList.remove("your-active-class");
        }
    }
}

// Scroll to anchor ID using scrollTO event

function scrollTo_anchor(action) {
    if (action.target.nodeName === "A") {
        const allSecId = action.target.getAttribute("data-id");
        const allSec = document.getElementById(allSecId);
        allSec.scrollIntoView({ behavior: "smooth" });
    }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

navbuild();

// Scroll to section on link click

const all_navBar = document.getElementById("navbar__list");
all_navBar.addEventListener("click", function (action) {
    scrollTo_anchor(action);
});

// Set sections as active

document.addEventListener("scroll", function () {
    activateClass();
});
