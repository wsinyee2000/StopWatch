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

        firstTime = false;
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
