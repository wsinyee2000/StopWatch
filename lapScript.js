//save records
function saveRecord() {
    document.getElementById("timeRecord").style.display = "table";
    let currentTime = timeFormat();

    if (firstTime) {
        timer.lap += 1;
        //the first line of the record
        let newRecord = document.createElement("tr");

        //change the order of the table
        // document.getElementById("timeRecord_body").appendChild(newRecord);
        document.getElementById("timeRecord_body").insertBefore(newRecord, document.getElementById("timeRecord_body").childNodes[0]);

        let newLap = document.createElement("td");
        newLap.innerHTML = setTwoDigit(timer.lap);

        let newLapTime = document.createElement("td");
        newLapTime.innerHTML = timeDifferent(timer.lastSave, currentTime);

        let newSplitTime = document.createElement("td");
        newSplitTime.innerHTML = ("0" + timer.min).slice(-2) + ":" + ("0" + timer.sec).slice(-2) + ":" + ("0" + timer.millisecond).slice(-2);

        newRecord.appendChild(newLap);
        newRecord.appendChild(newLapTime);
        newRecord.appendChild(newSplitTime);

        firstTime = false;
        timer.record.push(timer.lastSave);
    }
    timer.lastSave = timeFormat();

    //the second line
    if (!firstTime) {
        timer.lap += 1;

        newRecord = document.createElement("tr");

        //change the order of the table
        // document.getElementById("timeRecord_body").appendChild(newRecord);
        document.getElementById("timeRecord_body").insertBefore(newRecord, document.getElementById("timeRecord_body").childNodes[0]);

        newLap = document.createElement("td");
        newLap.innerHTML = setTwoDigit(timer.lap);

        newLapTime = document.createElement("td");
        newLapTime.innerHTML = timeDifferent(timer.lastSave, currentTime);

        newSplitTime = document.createElement("td");

        newRecord.appendChild(newLap);
        newRecord.appendChild(newLapTime);
        newRecord.appendChild(newSplitTime);
    }
}

//find out the time different by change time to millisecond
function timeDifferent(start, end) {
    let endTime = end.split(":");
    let startTime = start.split(":");

    endTime.forEach(changeToInt);
    startTime.forEach(changeToInt);

    function changeToInt(item, index, arr) {
        arr[index] = parseInt(item);
    }

    let endTimeMS = (endTime[0] * 60 * 1000) + (endTime[1] * 1000) + endTime[2];
    let startTimeMS = (startTime[0] * 60 * 1000) + (startTime[1] * 1000) + startTime[2];

    let timeDiff = endTimeMS - startTimeMS;

    let timeDiffMin = Math.trunc(timeDiff / 60000);
    let timeDiffSec = Math.trunc(((timeDiff % 60000)) / 1000);
    let timeDiffMs = Math.trunc(((timeDiff % 60000)) % 1000);

    return setTwoDigit(timeDiffMin) + ":" + setTwoDigit(timeDiffSec) + ":" + setTwoDigit(timeDiffMs);

}