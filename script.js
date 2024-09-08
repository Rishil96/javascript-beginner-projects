// Modal / Popup Markup

const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn");
const close = document.querySelector(".close");
const modalContent = document.querySelector(".modal-content");

btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);


// Functions for events
function openModal(e) {
    /*
        When a button present inside of a form is clicked, the page is refreshed,
        to prevent this default behaviour we use the below method in our event.
    */
    e.preventDefault();
    modal.style.display = "block";
}

function closeModal() {
    modalContent.classList.add("slide-up");
    setTimeout(() => {
        modal.style.display = "none";
        modalContent.classList.remove("slide-up");
    }, 500);
}