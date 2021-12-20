let go = document.getElementById("start");


go.addEventListener ("click", function(){
    let selezione = document.getElementById("myselect").value;
    let block = document.getElementById("block");
    block.innerHTML = "";
    
if(selezione=="easy"){
    for(let i=0; i<100 ; i++){
       block.innerHTML += `<div class="quadrato  item-${i}"> a</div>`;
    }

}else if(selezione=="medium"){
    for(let index=0; index<81 ; index++){
       block.innerHTML += `<div class="quadr  item-${index}"> a</div>`;
    }

}else if(selezione=="hard"){
    for(let j=0; j<49 ; j++){
       block.innerHTML += `<div class="qua  item-${j}"> a</div>`;
    }
  }
})


