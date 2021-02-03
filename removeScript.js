const removeRecord = () => {
    let td = event.target.parentNode; 
    let tr = td.parentNode; 
    let tbody = tr.parentNode;
    //find last row number
    let lastRowNumber = tbody.firstChild.firstChild.innerHTML;
   
    //find row number
    let rowsnumber = parseInt(tr.firstChild.innerHTML);
    // find how many row need to update
    let ChangeLapNumber = parseInt(lastRowNumber-rowsnumber);


    //update lap numbers
    for(let i=ChangeLapNumber; i>=0; i--){
        tbody.childNodes[i].firstChild.innerHTML = setTwoDigit(rowsnumber-1);
        rowsnumber += 1;
    }

    //remove row
    tr.parentNode.removeChild(tr);



    



}