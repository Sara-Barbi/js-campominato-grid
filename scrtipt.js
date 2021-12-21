let go = document.getElementById("start");

go.addEventListener ("click", function(){
    let selezione = document.getElementById("myselect").value;
    let block = document.getElementById("block");  //creo una variabile per non riscrivere sempre document.getElem eccc..
    block.innerHTML = "";     //svuoto il div dei blocchi per far si che ogni volta che clicco go non mi sommi i blocchi dei diversi for
    
    if(selezione=="easy"){  //se seleziono easy allora..
        for(let i=1; i<=100 ; i++){
            block.innerHTML += `<div class="quadrato num item-${i}">${i}</div>`;
        }
        
    }else if(selezione=="medium"){
        for(let index=1; index<=81 ; index++){
            block.innerHTML += `<div class="quadr num item-${index}">${index}</div>`;
        }
        
    }else if(selezione=="hard"){
        for(let j=1; j<=49 ; j++){
            block.innerHTML += `<div class="qua num item-${j}">${j}</div>`;
        }
    }   
    
    let num = document.getElementsByClassName("num");  //richiamo l'elemento che esiste solo dentro alla funzione, dentro alla funzione.
    for(i=0; i<num.length; i++){                       //parte da 0 e abilita tutti i num perche faccio num.lenght
        num[i].addEventListener("click", function(){   //inserisco una click,function a ciascun num, quindi scrivo num[i]
            
            this.classList.add("change");              //con this evidenzio il num cliccato e gli aggiungo una classe vche voglio che spunti al click
        });
    }
    
});












