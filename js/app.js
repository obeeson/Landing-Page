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

var position = 0;
var posArray = [];
var pageSections = document.querySelectorAll("Section");
var length = pageSections.length;
var parentUL = document.querySelector("#navbar-list");
var half_window_height = parseInt(window.innerHeight / 2);
var topValue = null;
var elem;


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav(){ 
    pageSections.forEach((element, ind) => {
    let listInfo = element.getAttribute("data-nav");
    console.log('list info', listInfo);
    let listIt = document.createElement("li");
    listIt.innerHTML = `<a href="#section${ind+1}" id="sect${ind+1}">${listInfo}</a>`
    parentUL.appendChild(listIt);
})
}

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', () => {
    pageSections.forEach((element, ind) => {
        let pos = element.getBoundingClientRect().top;
        posArray.push(pos);
        setInactive(element);
    })
    topValue = posArray.findIndex(el => el > 0);
    setActive(topValue);
})

// Scroll to anchor ID using scrollTO event
for (let i=0; i<length; i++) {
    document.getElementById(`section${i+1}`).addEventListener('click', function(event){
        event.preventDefault();
        scrollTo(event.target)}
    )
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', buildNav());

// Scroll to section on link click
function scrollTo(position) {
    document.getElementById(`section${position+1}`).scrollIntoView({behavior: "smooth"});
    setActive(position);
}

// Set sections as active
function setActive(position) {
    document.getElementById(`section${position+1}`).classList.add("your-active-class");
}

function setInactive(position) {
    document.getElementById(`section${position+1}`).classList.remove("your-active-class");
}


