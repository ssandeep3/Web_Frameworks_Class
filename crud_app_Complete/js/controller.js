window.addEventListener("load",init);

const showHideSearchBar = ()=> document.querySelector('#searchbar').classList.toggle('hide');

var auto = autoGen();
function loadId(){
document.querySelector('#id').innerText = auto.next().value;
document.querySelector('#id').focus();
}
function clearAll(){
    itemObject = new Item();
    for(let key in itemObject){
        if(key=='isMarked' || key=='id'){
            continue;
        }
        document.querySelector('#'+key).value = '';
    }
}

function init(){
    clearAll();
    loadId();
    showTotal();
    bindEvents();
    showHideSearchBar();
   
}
function updateRecord(){
    for(let key in itemObject){
        if(key=='isMarked'){
            continue;
        }
        itemObject[key] = document.querySelector('#'+key).value;
    }
    printTable(itemOperations.items);
}

const sortByPrice=()=>printTable(itemOperations.sortByPrice());


function saveRecords(){
    if(localStorage){
        localStorage.myitems = JSON.stringify(itemOperations.items);
        alert("Data Store....")
    }
    else{
        alert("NO Local Storage Feature is Supported in Ur Browser...")
    }
}

function loadRecords(){
    if(localStorage){
        if(localStorage.myitems){
            itemOperations.items = JSON.parse(localStorage.myitems);
            printTable(itemOperations.items);
        }
        else{
            alert("No Data to Load...");
        }
    }
    else{
        alert("NO Local Storage Feature is Supported in Ur Browser...")
    }
}

function loadFromServer(){
    const url = 'https://raw.githubusercontent.com/ssandeep3/wd_cs3/master/products.json';
    var promise = fetch(url);
    promise.then(response=>{
        response.json().then(data=>{
                console.log('Result is ',data);
                itemOperations.items = JSON.parse(data);
                printTable(itemOperations.items);
        }).catch(err=>{
            console.log('JSON Invalid ',err);   
        })
    }).catch(err=>{
        console.log('Server Issue ',err);
    });
}

function bindEvents(){
    document.querySelector('#loadfromserver').addEventListener('click',loadFromServer);
    document.querySelector('#save').addEventListener('click',saveRecords);
    document.querySelector('#load').addEventListener('click',loadRecords);
    document.querySelector('#sort').addEventListener('click',sortByPrice);
    document.querySelector('#update').addEventListener('click',updateRecord);
    document.querySelector('#searchTxt').addEventListener('change',search);
    document.querySelector('#search').addEventListener('click',showHideSearchBar);
    document.querySelector('#remove').addEventListener('click',deleteRecords);
    document.querySelector('#add').addEventListener('click',addRecord);
}

function search(){
    var val = document.querySelector('#searchTxt').value;
    var key = document.querySelector('#searchby').value;
    var items = itemOperations.searchAll(key,val);
    printTable(items);
}

function deleteRecords(){
    var items = itemOperations.remove();
    printTable(items);
}

function showTotal(){
    document.querySelector('#total').innerText = itemOperations.items.length;
    document.querySelector('#mark').innerText = itemOperations.countTotalMark();
    document.querySelector('#unmark').innerText = itemOperations.items.length - itemOperations.countTotalMark();
}

function createIcon(className,fn, id){
    // <i class="fas fa-trash"></i>
    // <i class="fas fa-edit"></i>
    var iTag = document.createElement("i");
    iTag.className = className;
    iTag.addEventListener('click',fn);
    iTag.setAttribute("data-itemid", id) ;

    return iTag;
}

var itemObject;
function edit(){
    var id = this.getAttribute('data-itemid');
     itemObject = itemOperations.search(id);
     fillFields();
    console.log("i am Edit ",this.getAttribute('data-itemid'));
}

function fillFields(){
    for(let key in itemObject){
        if(key=='isMarked'){
            continue;
        }
        document.querySelector('#'+key).value = itemObject[key];
    }
}

function trash(){
    let id = this.getAttribute('data-itemid');
    itemOperations.markUnMark(id);
    showTotal();
    let tr = this.parentNode.parentNode;
    /*if(tr.className){
    tr.className = '';
    }
    else{
        tr.className = 'alert-danger';
    }*/
    tr.classList.toggle('alert-danger');
    console.log("I am Trash ",this.getAttribute('data-itemid'))
}

function addRecord(){
    var item = new Item();
    for(let key in item){
        if(key=='isMarked'){
            continue;
        }
        if(key=='id'){
            item[key] = document.querySelector('#'+key).innerText;
            continue;
        }
        item[key] = document.querySelector('#'+key).value;
    }
    itemOperations.add(item);
    printRecord(item);
    console.log('Item Object is ',item);
    showTotal();
    loadId();
    clearAll();
}
function printTable(items){
   var tbody =  document.querySelector('#items');
   tbody.innerHTML ='';
    items.forEach(item=>printRecord(item));
    showTotal();
}
function printRecord(item){
    var tbody = document.querySelector('#items');
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in item){
        if(key=='isMarked'){
            continue;
        }
        let cell = tr.insertCell(index);
        cell.innerText = item[key] ;
        index++;
    }
    var lastTD = tr.insertCell(index);
    lastTD.appendChild(createIcon('fas fa-trash mr-2',trash,item.id));
    lastTD.appendChild(createIcon('fas fa-edit',edit,item.id));
}
