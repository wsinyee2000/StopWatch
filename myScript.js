let second = document.getElementById("second");
let millisecond = document.getElementById("millisecond");
let timer = {
    sec: 00,
    millisecond: 00
};
var stopThis;

//Printing out the time from start function
function printTimer() {
    if(timer.millisecond < 99){
        timer.millisecond += 1;
    } else {
        timer.millisecond = 00;
        timer.sec += 1;
    }
    second.innerHTML = ("0" + timer.sec).slice(-2);
    millisecond.innerHTML = ("0" + timer.millisecond).slice(-2);

}

//Start counting
function startFunction() {
    stopThis = setInterval(printTimer, 10);
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("pause-btn").style.display = "block";
    document.getElementById("lap-btn").style.display = "block";
    document.getElementById("reset-btn").style.display = "none";

}

//reset the timer and stop the timer
function resetFunction() {
    clearInterval(stopThis);
    timer.sec = 00;
    timer.millisecond = 00;
    second.innerHTML = ("0" + timer.sec).slice(-2);
    millisecond.innerHTML = ("0" + timer.millisecond).slice(-2);
    document.getElementById("timeRecord").innerHTML = "";
}

//save records
function saveRecord() {
    
    var newRecord = document.createElement("p");
    newRecord.innerHTML = ("0" + timer.sec).slice(-2) + ":" + ("0" + timer.millisecond).slice(-2);
    document.getElementById("timeRecord").appendChild(newRecord);
}

//pause the timer
function pauseTimer() {
    clearInterval(stopThis);
    document.getElementById("start-btn").style.display = "block";
    document.getElementById("pause-btn").style.display = "none";
    document.getElementById("lap-btn").style.display = "none";
    document.getElementById("reset-btn").style.display = "block";

}

//buttons
document.getElementById("start-btn").addEventListener("click", startFunction);
document.getElementById("lap-btn").addEventListener("click", () => {
    // clearInterval(stopThis);
    saveRecord();
});
document.getElementById("reset-btn").addEventListener("click", resetFunction);
document.getElementById("pause-btn").addEventListener("click", pauseTimer);