let showTime = document.getElementById("timer");
let timer = {
    min: 0,
    sec: 0,
    millisecond: 0,
    lap: 0,
    lastSave: "00:00:00",
    record: []
};
let stopThis;
let firstTime = true;

//Start counting
function startFunction() {
    stopThis = setInterval(printTimer, 10);
    document.getElementById("start-btn").style.display = "none";
    document.getElementById("pause-btn").style.display = "block";
    document.getElementById("lap-btn").style.display = "block";
    document.getElementById("reset-btn").style.display = "none";
}

//Printing out the time from start function
function printTimer() {

    if(timer.millisecond < 99){
        timer.millisecond += 1;
    } else if (timer.sec < 60){
        timer.millisecond = 0;
        timer.sec += 1;
    } else {
        timer.sec = 0;
        timer.min += 1;
    }
    showTime.innerHTML =timeFormat();
    
    //for the table
    if(firstTime === false){
        let table_splitTime = document.getElementById("timeRecord_body").firstChild;

        //for the table lapTime time running
        let table_lapTimeChange = table_splitTime.firstChild.nextSibling;
        table_lapTimeChange.innerHTML = timeDifferent(timer.lastSave, timeFormat());

        //for the table split time running
        let table_splitTimeChange = table_splitTime.lastChild;
        table_splitTimeChange.innerHTML = timeFormat();
    }
}

//formate number from 0 to 00
function setTwoDigit(num) {
    return ("0" + num).slice(-2);
}

//Make the time have a 00:00:00 formate
function timeFormat() {
    return setTwoDigit(timer.min)+":"+ setTwoDigit(timer.sec) + ":" + setTwoDigit(timer.millisecond);
}

