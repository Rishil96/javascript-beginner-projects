// Date Countdown
const countTo = "1 Jan 2025";

const c = setInterval(() => {

    const endDate = new Date(countTo);
    const currDate = new Date();

    // console.log(endDate);
    // console.log(currDate);

    const totalSeconds = (endDate - currDate) / 1000;

    // console.log(totalSeconds);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    const countDown = document.getElementById("countdown");
    countDown.textContent = `${days} Days ${format(hours)} Hrs : ${format(minutes)} mins : ${format(seconds)}s`

    if (totalSeconds <= 0) {
        clearInterval(c);
        countDown.textContent = "Happy New Year!!!!!"
    }

}, 1000);


// Format single digit timer to add 0 in front of it
function format(t) {
    return t < 10 ? `0${t}` : t;
}