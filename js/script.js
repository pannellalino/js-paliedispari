/* **Palindroma**
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
**Pari e Dispari**
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const parola = 'osso';

for(let i = 0; i < parola.length ; i++){
  console.log(i);
}


//


const sceltaUtente = 'pari';

const numeroUtente = 5;
numeroRandom = Math.floor(Math.random()* 5)+ 1;

function sommaNumeri (num1, num2){
  let risultato = num1 + num2;

  return risultato;
}

let somma = sommaNumeri(numeroUtente, numeroRandom);
console.log(somma);

if(somma % 2 === 0){
  console.log('pari');
}else{
  console.log('dispari');
}