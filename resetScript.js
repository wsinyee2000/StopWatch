//reset the timer and stop the timer
function resetFunction() {
    clearInterval(stopThis);
    timer.record = [];
    timer.lap = 0;
    timer.lastSave = "00:00:00";
    timer.sec = 0;
    timer.millisecond = 0;
    showTime.innerHTML = "00:00:00";
    document.getElementById("timeRecord_body").innerHTML = "";
    document.getElementById("reset-btn").style.display = "none";
    document.getElementById("timeRecord").style.display = "none";
}