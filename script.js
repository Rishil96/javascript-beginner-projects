// Scroll to Top

const scrollBtn = document.querySelector(".top");
const rootEl = document.documentElement;

document.addEventListener("scroll", showButton);
scrollBtn.addEventListener("click", scrollToTop);

// Function to display the button when more than 30% of the page is scrolled down
function showButton() {
    const scrollTotal = rootEl.scrollHeight - rootEl.clientHeight;
    if (rootEl.scrollTop / scrollTotal > 0.3) {
        scrollBtn.classList.add("show-btn");
    }
    else {
        scrollBtn.classList.remove("show-btn");
    }
}

// Function to scroll back up to the top on clicking the scroll btn
function scrollToTop() {
    rootEl.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}