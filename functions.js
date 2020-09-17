'use strict';

/* Ez a függvény deklarációs módszer.

function Osszead(a, b){
    return a + b;
}

let eredmeny = Osszead(123, 25);

//document.getElementById('kiir').innerText = eredmeny;

console.log(eredmeny);
console.log(Osszead(-96, 485));*/

/*function Osszead(){
    let elso = window.prompt('Kérem az első számot: ', 10)
    let masodik = window.prompt('Kérem a második számot: ', 20)
    //console.log(`Az eredmény: ${+elso + +masodik}`)
    console.log(`Az eredmény: ${Number(elso) + Number(masodik)}`)
}

Osszead();*/

/*ehesvagye();

function ehesvagye(){
    let valasz = window.confirm('Éhes vagy-e?');
    if (valasz) {
        console.log('Akkor menj el kajálni!')
    } else {
        console.log('Jó neked')
    }

}*/
//ehesvagye();

/* Ez a függvény literál módszer.*/
/*console.log(Osszead(123, 586));
let Osszead = function(a, b){
    return a + b;
};*/

//console.log(Osszead(123, 586));

/*let ehesvagye = function(){
    if(window.confirm('Éhes vagy-e?')){
        console.log('Akkor menj el kajálni')
    } else {
        console.log('Jó neked')
    }
};

ehesvagye();*/


// Ez egy anonim callback függvény
/*function szamol(question, igen, nem){
    
    if (window.confirm(question)) {
        igen();

    } else {
        nem();
    }
}
szamol("Tudsz-e számolni",
    function(){
        let elso = window.prompt('Az első szám: ', 0)
        let masodik = window.prompt('A második szám: ', 0)
        console.log(`Az eredmény ${+elso + +masodik}`)
    },
    function(){
        console.log('Menj vissza az iskolába');
    }
)*/


/* Arrow function (nyíl függvény)*/


/*Függvény literál
let Osszead = function(a, b){
    return a + b;
};*/

//Arrow function

let Osszead = (a, b) => a + b;

console.log(Osszead(14, 28))

//Megjegyzések
/* let ValamilyenFuggveny = () => ;
Ha egy paraméterem van:
 let ValamilyenFuggveny = (a) => ;
 let ValamilyenFuggveny = a => ;

 Több paraméter esetén
 let ValamilyenFuggveny = () =>{
     .....
     return ....;
 } ;
*/