var counter = 0;
var timer = document.getElementById("hTimer");
var btnStart = document.getElementById("btnStart");
var timeLeft = parseInt(document.getElementById("timeIn").value);

btnStart.onclick = function () {
    console.log(timeLeft);
    setInterval(getTime, 1000);
}

function convertSeconds(s) {
    var min = Math.floor(s / 60);
    var sec = s % 60;
    if (sec < 10) {
        return "0" + min + ":" + "0" + sec;
    }
    return "0" + min + ":" + sec;
}

function getTime() {
    counter++;
    timer.innerHTML = convertSeconds(timeLeft - counter);
}

