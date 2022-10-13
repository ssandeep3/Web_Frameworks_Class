function changebg(){
    bd = document.getElementById("mainbody");
    bd = document.getElementsByTagName("body");
    // console.log(bd.classList)
    // bd.classList.add("myclass");
    // if(bd.classList.contains("one")==true){
    //     bd.classList.remove("one");
    // }
    // else{
    //     bd.classList.add("one");
    // }
    bd[0].classList.toggle("one");
    console.log("Before removing:"+bd[0].id);
    bd[0].removeAttribute('id');
    console.log("After removing:"+bd[0].id);
    bd[0].setAttribute("id","mainbody");
    console.log("Atlast removing:"+bd[0].id);
    inbox = document.getElementById("inbox");
    console.log(inbox.value);
    
}