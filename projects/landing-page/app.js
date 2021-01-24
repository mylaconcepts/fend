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
const navElements = document.querySelectorAll('section')
const navBar = document.getElementById('navbar__list')


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
navElements.forEach( section => {
 const navlistElement = `<li class='menu__link ${section.className}' data-link=${section.id}><a href="#${section.id}">${section.dataset.nav}</li>`
 navBar.insertAdjacentHTML('beforeend',navlistElement)
})

// Add class 'active' to section when near top of viewport
navBar.addEventListener('click', e => {
  
  e.preventDefault();
  navBar.querySelector('.active')?.classList.remove('active');
  e.target.classList.add('active');
});
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
navBar.addEventListener('click', e => {
  e.preventDefault()
  const parent = e.target.hasAttribute('data-link')
  ? e.target
  : e.target.parentElement
  const elementToScrollTo = document.getElementById(parent.dataset.link)
  elementToScrollTo.scrollIntoView({block: 'end', behavior: 'smooth'})
})

// Set sections as active

/*Add an active state to your navigation items when a section is in the viewport.
Hide fixed navigation bar while not scrolling (it should still be present on page load).
Hint: setTimeout can be used to check when the user is no longer scrolling.
Add a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.
Update/change the design/content.
Make sections collapsible.*/
