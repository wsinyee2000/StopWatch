let showTime = document.getElementById("timer");
let timer = {
    min: 00,
    sec: 00,
    millisecond: 00,
    lap: 0,
    lastSave: "00:00:00",
    record: []
};
var stopThis;


//Printing out the time from start function
function printTimer() {
    
    var currTime = ("0" + timer.min).slice(-2)+":"+ ("0" + timer.sec).slice(-2) + ":" + ("0" + timer.millisecond).slice(-2);

    if(timer.millisecond < 99){
        timer.millisecond += 1;
    } else if (timer.sec < 60){
        timer.millisecond = 00;
        timer.sec += 1;
    } else {
        timer.sec = 00;
        timer.min += 1;
    }
    showTime.innerHTML =("0" + timer.min).slice(-2)+":"+ ("0" + timer.sec).slice(-2) + ":" + ("0" + timer.millisecond).slice(-2);
    
    //for the table
    if(timer.record.length > 0){
        var table_splitTime = document.getElementById("timeRecord_body").firstChild;

        //for the table lapTime time running
        var table_splitTimeChange = table_splitTime.firstChild.nextSibling;
        table_splitTimeChange.innerHTML = timeDifferent(timer.lastSave, currTime);

        //for the table split time running
        var table_splitTimeChange = table_splitTime.lastChild;
        table_splitTimeChange.innerHTML = ("0" + timer.min).slice(-2)+":"+ ("0" + timer.sec).slice(-2) + ":" + ("0" + timer.millisecond).slice(-2);
    }
    
   
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
    timer.record = [];
    timer.lap= 0;
    timer.lastSave= "00:00:00";
    timer.sec = 00;
    timer.millisecond = 00;
    showTime.innerHTML = "00:00:00";
    document.getElementById("timeRecord_body").innerHTML = "";
    document.getElementById("reset-btn").style.display = "none";
    document.getElementById("timeRecord").style.display = "none";
}

//find out the time different
function timeDifferent(start, end) {
    let endTime = end.split(":");
    let startTime = start.split(":"); 

    let endTimeMS = parseInt((endTime[0]*60*1000)) + parseInt((endTime[1] * 1000)) + parseInt(endTime[2]);
    let startTimeMS = parseInt((startTime[0]*60*1000)) + parseInt((startTime[1] * 1000)) + parseInt(startTime[2]);
    
    let timeDiff = endTimeMS - startTimeMS;
    
    let timeDiffMin = Math.trunc(timeDiff /60000) ;
    let timeDiffSec = Math.trunc(((timeDiff %60000)) / 1000);
    let timeDiffMs = Math.trunc(((timeDiff %60000)) % 1000);

    return ("0" + timeDiffMin).slice(-2) + ":" + ("0" + timeDiffSec).slice(-2) + ":" + ("0" + timeDiffMs).slice(-2);

}

//save records
function saveRecord() {
    document.getElementById("timeRecord").style.display = "table";
    var currentTime = ("0" + timer.min).slice(-2)+":"+("0" + timer.sec).slice(-2) + ":" + ("0" + timer.millisecond).slice(-2);

    if(timer.record.length === 0){
        timer.lap += 1;
        
        //the first line of the record
        
        
        var newRecord = document.createElement("tr");

        //change the order of the table
        // document.getElementById("timeRecord_body").appendChild(newRecord);
        document.getElementById("timeRecord_body").insertBefore(newRecord, document.getElementById("timeRecord_body").childNodes[0]);
        
        var newLap = document.createElement("td");
        newLap.innerHTML = ("0" + timer.lap).slice(-2);
        
        var newLapTime = document.createElement("td");
        newLapTime.innerHTML = timeDifferent(timer.lastSave, currentTime);
        
        var newSplitTime = document.createElement("td");
        newSplitTime.innerHTML = ("0" + timer.min).slice(-2)+":"+("0" + timer.sec).slice(-2) + ":" + ("0" + timer.millisecond).slice(-2);
        
        newRecord.appendChild(newLap);
        newRecord.appendChild(newLapTime);
        newRecord.appendChild(newSplitTime);

        
        timer.record.push(timer.lastSave);
    }
    timer.lastSave = ("0" + timer.min).slice(-2)+":"+("0" + timer.sec).slice(-2) + ":" + ("0" + timer.millisecond).slice(-2);

    //the second line
    if(timer.record.length > 0){
        timer.lap += 1;

        var newRecord = document.createElement("tr");

        //change the order of the table
        // document.getElementById("timeRecord_body").appendChild(newRecord);
        document.getElementById("timeRecord_body").insertBefore(newRecord, document.getElementById("timeRecord_body").childNodes[0]);
        
        var newLap = document.createElement("td");
        newLap.innerHTML = ("0" + timer.lap).slice(-2);
        
        var newLapTime = document.createElement("td");
        newLapTime.innerHTML = timeDifferent(timer.lastSave, currentTime);
        
        var newSplitTime = document.createElement("td");
        // newSplitTime.innerHTML = ("0" + timer.min).slice(-2)+":"+("0" + timer.sec).slice(-2) + ":" + ("0" + timer.millisecond).slice(-2);
        
        newRecord.appendChild(newLap);
        newRecord.appendChild(newLapTime);
        newRecord.appendChild(newSplitTime);
    }

    
    
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
    saveRecord();
});
document.getElementById("reset-btn").addEventListener("click", resetFunction);
document.getElementById("pause-btn").addEventListener("click", pauseTimer);