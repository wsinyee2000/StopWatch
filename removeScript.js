const removeRecord = () => {
    let td = event.target.parentNode; 
    let tr = td.parentNode; 
    //find row number
    let rowsnumber = tr.firstChild.innerHTML;
    console.log(rowsnumber);
    //remove row
    tr.parentNode.removeChild(tr);



    



}