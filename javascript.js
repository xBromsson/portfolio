//element variables
let navItems = document.querySelector(".nav-items")
let hamburger = document.querySelector(".hamburger")

//functions
const openMenu = () => {
    navItems.classList.toggle("hidden")
}

//event listeners
hamburger.addEventListener('click', openMenu)

