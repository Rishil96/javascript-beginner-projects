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
}