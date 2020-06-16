// Esercizio: calcolo prezzo del biglietto del treno
var risultato;
// chiedere all'utente i chilometri che vorrebbe percorrere
var chilometri = parseInt(prompt("quanti chilometri vuoi percorrere?"), 10);
console.log(chilometri);

// chiedere all'utente l'età
var eta = prompt("quanti anni hai?");


// calcolare prezzo del biglietto in base ai chilometri (0,21€ per km)
var prezzoBiglietto = chilometri * 0.21;
console.log("il prezzo del tuo biglietto è di euro:" + prezzoBiglietto);

// calcolare lo sconto del 20%
var scontoMinorenni = (prezzoBiglietto * 20) / 100;
console.log(scontoMinorenni);

var applicaScontoVenti = prezzoBiglietto - scontoMinorenni;
console.log("il tuo biglietto scontato del 20% ti costerà:" + applicaScontoVenti);

// calcolare lo sconto del 40%
var scontoAnziani = (prezzoBiglietto * 40) / 100;
console.log(scontoAnziani);

var applicaScontoQuaranta = prezzoBiglietto - scontoAnziani;
console.log("il tuo biglietto scontato del 40% ti costerà:" + applicaScontoQuaranta);

// applicare lo sconto del 20% se minore di 18 anni e 40% se maggiore di 65 anni
if (eta < 18) {
  risultato = applicaScontoVenti;
} else if (eta > 65) {
  risultato = applicaScontoQuaranta;
} else {
  risultato = prezzoBiglietto;
}

// output risultato
document.getElementById('prezzo-intero').innerHTML = prezzoBiglietto.toFixed(2);
document.getElementById('title').innerHTML = risultato.toFixed(2);
