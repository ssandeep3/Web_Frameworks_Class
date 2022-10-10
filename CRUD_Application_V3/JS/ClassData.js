const classes=[];

function addRecord(cl, bt, no_students, br){
    classes.push(new BtechClass(cl, bt,no_students,br))
}
function sortrecord(sno){
    if(sno == "studentNo"){
        classes.sort((a,b)=>a.students - b.students);
    }
    if(sno=="classwise"){
        classes.sort((a,b)=>{
            for(i=0;i<a.Class.length;i++){
                if(a.Class.charAt(i)==b.Class.charAt(i)){
                    continue;
                }
                if(a.Class.charAt(i)<b.Class.charAt(i)){
                    return -1;
                }
                else{
                    return 1;
                }
            }
        });
    }
    console.log(classes);
}