function addrec(){
    cl = document.getElementById("class").value;
    bt = document.getElementById("batch").value;
    s = document.getElementById("students").value;
    br = document.getElementById("branch").value;
    addRecord(cl,bt,s,br);
}


function printTable(){
    tbody = document.getElementById("tbd");
    classes.forEach(element => {
        tr = document.createElement(tr);
        tbody.appendChild(tr);
        element.forEach(e=>{
            tc.appendChild("td").innerHTML = element[e];
        });
    });
}