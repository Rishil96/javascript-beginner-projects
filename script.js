// Time Count Down

let time = 10; // Time in minutes
let promoTime = time * 60;

let counting = document.getElementById("countdown");

function startCountDown() {
    let promoTimer = setInterval(() => {
        if (promoTime <= 0) {
            clearInterval(promoTimer);
            counting.innerHTML = "Promo has ended";
        } else {
            promoTime--;
            const days = Math.floor(promoTime / 3600 / 24);
            const hours = Math.floor(promoTime / 3600) % 24;
            const minutes = Math.floor(promoTime / 60) % 60;
            const seconds = Math.floor(promoTime % 60);

            counting.innerHTML = `TIME: ${format(hours)}hr : ${format(minutes)}mins : ${format(seconds)}s`;
        }
    }, 1000);
}

function format(t) {
    return t < 10 ? `0${t}` : t;
}

startCountDown();
