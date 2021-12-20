let selezione = document.getElementById("myselect").value;
let go = document.getElementById("start");


go.addEventListener ("click", function(){

if(selezione=="easy"){
    for(let i=0; i<100 ; i++){
       document.getElementById("block").innerHTML += `<div class="quadrato  item-${i}"> a</div>`;
    }

}else if(selezione=="medium"){
    for(let index=0; index<81 ; index++){
       document.getElementById("block").innerHTML += `<div class="quadr  item-${index}"> a</div>`;
    }

}else if(selezione=="hard"){
    for(let j=0; j<49 ; j++){
       document.getElementById("block").innerHTML += `<div class="qua  item-${j}"> a</div>`;
    }
  }
})


