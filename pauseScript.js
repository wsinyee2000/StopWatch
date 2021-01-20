//pause the timer
function pauseTimer() {
    clearInterval(stopThis);
    document.getElementById("start-btn").style.display = "block";
    document.getElementById("pause-btn").style.display = "none";
    document.getElementById("lap-btn").style.display = "none";
    document.getElementById("reset-btn").style.display = "block";
}