// Input Field Character Count

const count = document.querySelector(".count-char");
const input = document.querySelector("input");

input.addEventListener("keyup", () => {
    // Update count of input text
    count.innerHTML = input.value.length;
})