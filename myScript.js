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
    
}

//reset the timer and stop the timer
function resetFunction() {
    clearInterval(stopThis);
    timer.sec = 00;
    timer.millisecond = 00;
    second.innerHTML = ("0" + timer.sec).slice(-2);
    millisecond.innerHTML = ("0" + timer.millisecond).slice(-2);

}


//buttons
document.getElementById("start-btn").addEventListener("click", startFunction);
document.getElementById("stop-btn").addEventListener("click", () => {
    clearInterval(stopThis);
} 
);
document.getElementById("reset-btn").addEventListener("click", resetFunction);