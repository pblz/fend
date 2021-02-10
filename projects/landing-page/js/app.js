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

// List to keep all sections
let sections = [];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Find Sections
function getSections() {
    sections = document.querySelectorAll("[data-nav]");

}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the nav
function populateNav() {
    // Iterate over html to get all sections: a section always has the attribute data-nav
    sections = document.querySelectorAll("[data-nav]");
    // Sections should go into the navbar__list
    var navList = document.getElementById("navbar__list");
    for (const section of sections) {
        const newLi = document.createElement("li");
        //newLi.innerHTML = section.dataset.nav;
        var linkElement = document.createElement("a");
        linkElement.href = "#"+ section.id;
        linkElement.innerHTML=section.dataset.nav;
        newLi.appendChild(linkElement);
        console.log(newLi);
        navList.appendChild(newLi);
        if (section.classList.contains("your-active-class")){
            newLi.classList.add("active");
        };
        console.log(newLi);
    }
}

// Add class 'active' to section when near top of viewport

function checkActiveSection() {
    console.log(window.pageYOffset);
    sections = document.querySelectorAll("[data-nav]");
    for (const section of sections) {
        var rect = section.getBoundingClientRect();
        console.log("Section " + section.id);
        console.log(rect);
        if (rect.top > -500) {
            console.log(section.id + " is active");
            var navList = document.getElementById("navbar__list");
            var liList = navList.getElementsByTagName("li");
            var oldActiveElement = navList.getElementsByClassName("active")[0];
            if (oldActiveElement){
                oldActiveElement.classList.remove("active");
            }
            for (liEl of liList){
                    var s1 = liEl.textContent.toString();
                    var s2 = section.dataset.nav.toString();
                    if(s1 === s2){
                        liEl.classList.add("active");
                    }
            }
            break;
        }
    }

}


// Scroll to anchor ID using scrollTO event
function scrollTo(){
    // Using relative links in the navElements for navigation
    // This method just makes sure after a click, the highlight is updated if necessary
    checkActiveSection();
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

document.addEventListener("DOMContentLoaded", populateNav);

// Scroll to section on link click
document.getElementById("navbar__list").addEventListener("click", scrollTo);


// Set sections as active
document.addEventListener("scroll", checkActiveSection);




