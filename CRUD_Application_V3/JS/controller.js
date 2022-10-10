window.addEventListener('load',init);
function init(){
    document.querySelector("#add").addEventListener('click',addrec);
    document.querySelector("#delrec").addEventListener('click',deleterec);
    document.querySelector("#sortrec").addEventListener('click',sortrecords);
}
function sortrecords(){
    sortrecord(document.querySelector("#sortchoice").value);
    printTable();
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
        // cell.appendChild(createIcon('fa-solid fa-trash-can',deleterec,element.Class));
        //cell.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        //cell.setAttribute('id',element.Class);
        // document.querySelector("#"+element['Class']).addEventListener('click',deleterec);
        cell.innerHTML = "<input type='checkbox' id="+element.Class+"value = 'true'>";
        // document.getElementById(element.Class).addEventListener('click',deleterec);
    });
}

function deleterec(){
    var inputs = document.getElementsByTagName("input");
    var count=0;
    var toDelete = 0;
    for (var i = 0, len = inputs.length; i < len; i++) {
        if (inputs[i].type == "checkbox") {
            count++;
            if(inputs[i].checked==true) {
                toDelete = count;
                
            }
        }
    }
    console.log(count);
    classes1 = [];
    for(j=0;j<=classes.length;j++){
        obj = classes[j];
        classes.pop();
        classes1.push(obj);
    }
    console.log(classes.length);
    console.log(classes1.length);
    for(j=0;j<classes1.length;j++){
        if(j==(toDelete-1)){
            console.log("toDelete"+toDelete);
            continue;
        }
        classes.push(classes1[j]);
    }
    printTable();
}