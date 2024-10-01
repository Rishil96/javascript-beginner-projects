// Sticky Nav Bar with JS

const links = document.querySelectorAll(".nav-list li a");

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

// Sticky Header
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


/* Scroll Indicator JS */
window.onscroll = () => scrollProgress();

function scrollProgress() {
    // First one targets safari browsers and second targets Chrome, Firefox, etc
    const currState = document.body.scrollTop || document.documentElement.scrollTop;

    // Calculate height 
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (currState / pageHeight) * 100;

    const progressBar = document.querySelector(".progress");
    progressBar.style.visibility = "visible";
    progressBar.style.width = scrollPercentage + "%";
}

