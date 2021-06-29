var seconds = 0;
var minutes = 0;
var hours = 0;

function activeTimer() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    result = hours + ":" + minutes + ":" + seconds;
    element = document.querySelector('.time');
    if (element) { element.innerHTML = result; }
}
setInterval(activeTimer, 1000);


