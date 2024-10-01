// Smooth Scroll using JS

const links = document.querySelectorAll(".nav-list li a");

// Add event listener to all a tags inside navbar
for (let link of links) {
    link.addEventListener("click", smoothScroll);
}


function smoothScroll(e) {
    e.preventDefault();

    const href = this.getAttribute("href");
    
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
    // hideMenu();
}


// Responsive Mobile Menu
const menuWrapper = document.querySelector(".nav-wrapper");
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");


const showMenu = () => {
    hamburger.style.display = "none";
    close.style.transform = "translateY(0)";
    menuWrapper.style.transform = "translateX(0)"
    menu.style.transform = "translateX(0)"
}


hamburger.addEventListener("click", showMenu);

const hideMenu = () => {
    close.style.transform = "translateY(-20rem)";
    hamburger.style.display = "block";
    menuWrapper.style.transform = "translateY(-200%)";
    menu.style.transform = "translateX(200%)";
    subMenuThree.style.transform = "translateX(-100%)";
}


close.addEventListener("click", hideMenu);
menuWrapper.addEventListener("click", hideMenu);

// Submenu Section
const thirdLink = document.querySelector(".third-link");
const back = document.querySelector(".back-to-menu");
const subMenuThree = document.querySelector(".submenu-three");

thirdLink.addEventListener("click", () => {
    menu.style.transform = "translateX(-100%)";
    subMenuThree.style.transform = "translateX(0)";
})

back.addEventListener("click", () => {
    subMenuThree.style.transform = "translateX(-100%)";
    menu.style.transform = "translateX(0)";
})