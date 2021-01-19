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
navElements.forEach(function(section){
 const navlistElement = `<li class='menu__link ${section.className}' data-link=${section.id}><a href="#${section.id}">${section.dataset.nav}</li>`
 navBar.insertAdjacentHTML('beforeend',navlistElement)
})

// Add class 'active' to section when near top of viewport


const callback = entries => {
  entries.forEach(entry => {
    const navListElement = document.querySelector(`.menu__link[data-link='${entry.target.id}']`,)

    const section = document.getElementById(entry.target.id)

    .addEventListener('click', function() {

    if (entry && entry.isIntersecting) {
      navListElement.classList.add('active')
      section.classList.add('active')
    } else {
      if (navListElement.classList.contains('active')) {
        navListElement.classList.remove('active')
      }

      if (section.classList.contains('active')) {
        section.classList.remove('active')
      }
    }
  }
  })
}

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