//save records
function saveRecord() {

    if(firstTime){
        createTableElements();
        createTableElements();
    }else{
        createTableElements();
    }
    // timer.lastSave = timeFormat();
    timer.newlastSave = [timer.min, timer.sec, timer.millisecond];

}

//create new element in table
function createTableElements() {
    document.getElementById("timeRecord").style.display = "table";
    // let currentTime = timeFormat();
    let newCurrentTime = [timer.min, timer.sec, timer.millisecond];

    timer.lap += 1;

    let newRecord = document.createElement("tr");

    //change the order of the table
    document.getElementById("timeRecord_body").insertBefore(newRecord, document.getElementById("timeRecord_body").childNodes[0]);

    let newLap = document.createElement("td");
    let newLapTime = document.createElement("td");
    let newSplitTime = document.createElement("td");
    let removeRow = document.createElement("td");
    let removeBtn = document.createElement("p");


    if(firstTime){
        newLapTime.innerHTML = otherTimeDifferent(timer.newlastSave, newCurrentTime);
        newSplitTime.innerHTML = timeFormat();
        firstTime = false;
    }

    newLap.innerHTML = setTwoDigit(timer.lap);
    removeBtn.innerHTML = 'x';
    removeRow.className +='removerow';
    removeRow.onclick = removeRecord;

    newRecord.appendChild(newLap);
    newRecord.appendChild(newLapTime);
    newRecord.appendChild(newSplitTime);
    newRecord.appendChild(removeRow);
    removeRow.appendChild(removeBtn);


    
}



//find out the time different by change time to millisecond
// function timeDifferent(start, end) {
//     let endTime = end.split(":");
//     let startTime = start.split(":");

//     endTime.forEach(changeToInt);
//     startTime.forEach(changeToInt);

//     function changeToInt(item, index, arr) {
//         arr[index] = parseInt(item);
//     }

//     let endTimeMS = (endTime[0] * 60 * 1000) + (endTime[1] * 1000) + endTime[2];
//     let startTimeMS = (startTime[0] * 60 * 1000) + (startTime[1] * 1000) + startTime[2];

//     let timeDiff = endTimeMS - startTimeMS;

//     let timeDiffMin = Math.trunc(timeDiff / 60000);
//     let timeDiffSec = Math.trunc(((timeDiff % 60000)) / 1000);
//     let timeDiffMs = Math.trunc(((timeDiff % 60000)) % 1000);

//     return setTwoDigit(timeDiffMin) + ":" + setTwoDigit(timeDiffSec) + ":" + setTwoDigit(timeDiffMs);

// } 

//Another way to find time different
function otherTimeDifferent(newlastSave, newCurrentTime) {
    let newDiffTime = [0,0,0];
//60s = 1min
//100ms = 1s
    //find ms
    if(newCurrentTime[2]<newlastSave[2]){
        newCurrentTime[2] += 100;
        newCurrentTime[1] -=1;
    }
    newDiffTime[2] = newCurrentTime[2]-newlastSave[2];
    

    //find s
    if(newCurrentTime[1]<newlastSave[1]){
        newCurrentTime[1] += 60;
        newCurrentTime[0] -=1;
    }
    newDiffTime[1] = newCurrentTime[1]-newlastSave[1];

    //find min
    newDiffTime[0] = newCurrentTime[0]-newlastSave[0];

    return setTwoDigit(newDiffTime[0])+":"+setTwoDigit(newDiffTime[1])+":"+setTwoDigit(newDiffTime[2]);

}