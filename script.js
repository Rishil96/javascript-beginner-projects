// Click to Copy

const btn = document.querySelector(".btn");
const coupon = document.querySelector(".coupon");


const copyText = (e) => {
    e.preventDefault();     // Here we have not created a form so this is not necessary
    /* Old way to copy text */
    // Select the text inside the input text box 
    // coupon.select();
    // coupon.setSelectionRange(0, 999999);
    // document.execCommand("copy");

    /* New Way */
    navigator.clipboard.writeText(coupon.value)
    .then(() => {
        btn.textContent = "Copied!!!";
        setTimeout(() => {
            btn.textContent = "Copy"
        }, 3000);
    });

}


btn.addEventListener("click", copyText);
