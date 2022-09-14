var turn = "X";
function buttonPress(i){
    if(turn=='X'){
        if(document.getElementsByTagName("button")[i-1].innerHTML==""){
            document.getElementsByTagName("button")[i-1].innerHTML = "X";
        }
        turn ='O';
    }
    else{
        if(document.getElementsByTagName("button")[i-1].innerHTML==""){
            document.getElementsByTagName("button")[i-1].innerHTML = "O";
        }
        turn ='X';
    }
    checkWin();
}
function checkWin(){
    if(((document.getElementsByTagName("button")[0].innerHTML== document.getElementsByTagName("button")[1].innerHTML) && (document.getElementsByTagName("button")[1].innerHTML==document.getElementsByTagName("button")[2].innerHTML) && (document.getElementsByTagName("button")[2].innerHTML!=""))||((document.getElementsByTagName("button")[0].innerHTML== document.getElementsByTagName("button")[3].innerHTML) && (document.getElementsByTagName("button")[3].innerHTML==document.getElementsByTagName("button")[6].innerHTML)&& (document.getElementsByTagName("button")[6].innerHTML!="")) || ((document.getElementsByTagName("button")[3].innerHTML== document.getElementsByTagName("button")[4].innerHTML) && (document.getElementsByTagName("button")[4].innerHTML==document.getElementsByTagName("button")[5].innerHTML)&& (document.getElementsByTagName("button")[5].innerHTML!="")) || ((document.getElementsByTagName("button")[6].innerHTML== document.getElementsByTagName("button")[7].innerHTML) && (document.getElementsByTagName("button")[7].innerHTML==document.getElementsByTagName("button")[8].innerHTML)&& (document.getElementsByTagName("button")[8].innerHTML!="")) || ((document.getElementsByTagName("button")[1].innerHTML== document.getElementsByTagName("button")[4].innerHTML) && (document.getElementsByTagName("button")[4].innerHTML==document.getElementsByTagName("button")[7].innerHTML)&& (document.getElementsByTagName("button")[4].innerHTML!="")) || ((document.getElementsByTagName("button")[2].innerHTML== document.getElementsByTagName("button")[5].innerHTML) && (document.getElementsByTagName("button")[5].innerHTML==document.getElementsByTagName("button")[8].innerHTML)&& (document.getElementsByTagName("button")[8].innerHTML!="")) || ((document.getElementsByTagName("button")[0].innerHTML== document.getElementsByTagName("button")[4].innerHTML) && (document.getElementsByTagName("button")[4].innerHTML==document.getElementsByTagName("button")[8].innerHTML)&& (document.getElementsByTagName("button")[4].innerHTML!="")) || ((document.getElementsByTagName("button")[2].innerHTML== document.getElementsByTagName("button")[4].innerHTML) && (document.getElementsByTagName("button")[4].innerHTML==document.getElementsByTagName("button")[6].innerHTML)&& (document.getElementsByTagName("button")[6].innerHTML!=""))){
        if(turn == "X"){
            document.getElementById("win").innerText = "O";
        }
        else{
            document.getElementById("win").innerText = "X";
        }
    }
}