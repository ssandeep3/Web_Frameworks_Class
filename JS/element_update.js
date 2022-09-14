function createChild(){
    console.log("Hello");
    s = document.createElement("Span");
    s.innerHTML = "Hello";
    document.getElementById("mypara").innerHTML =  "<h1>My Heading</h1>";
}
function addrec(){
    t = document.getElementById("mytable");
    tr = document.createElement("tr");
    t.appendChild(tr);
    td1 = document.createElement("td");
    td2 = document.createElement("td");
    td3 = document.createElement("td");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    td1.innerHTML = "1";
    td2.innerHTML = "21CSU023";
    td3.innerHTML = "Ram";
}