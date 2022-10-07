window.addEventListener('load',init);
function init(){
    document.querySelector("#add").addEventListener('click',addrec);
}
function addrec(){
    cl = document.getElementById("class").value;
    bt = document.getElementById("batch").value;
    s = document.getElementById("students").value;
    br = document.getElementById("branch").value;
    addRecord(cl,bt,s,br);
    printTable();
}


function printTable(){
    var counter = 0;
    tbody = document.getElementById("tbd");
    tbody.innerHTML = "";
    classes.forEach(element => {
        tr = tbody.insertRow();
        cell = tr.insertCell();
        counter += 1;
        cell.innerHTML = counter;
        for(var e in element){
            cell = tr.insertCell();
            cell.innerHTML = element[e];
        }
        cell = tr.insertCell();
        cell.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        cell.setAttribute('id',element.Class);
        document.querySelector("#"+element['Class']).addEventListener('click',deleterec(element['Class']));
    });
}
function deleterec(recclass){
    console.log("Delete Pressed "+recclass);
}