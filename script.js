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
    hideMenu();
}


// Responsive Mobile Menu
const menu = document.querySelector(".nav-list");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".close");


const showMenu = () => {
    hamburger.style.display = "none";
    close.style.transform = "translateY(0)";
    menu.style.transform = "translateY(0)";
}


hamburger.addEventListener("click", showMenu);

const hideMenu = () => {
    close.style.transform = "translateY(-20rem)"
    hamburger.style.display = "block";
    menu.style.transform = "translateY(-200%)"
}


close.addEventListener("click", hideMenu);

