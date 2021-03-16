$(document).ready(function() {

  // Definisco le variabili
  var listRandomNumbers = [];
  var n = 0;
  var listPlayerNumbers = [];
  var numeriIndovinati = 0;
  var listaNumeriIndovinati = [];

  // Aggiungo il ciclo che crea numeri random e metto un alert con i numeri creati
  while (listRandomNumbers.length < 5) {
    n = Math.floor(Math.random() * 100) + 1;
    if (listRandomNumbers.includes(n) == false) {
      listRandomNumbers.push(n);
    }
  }
  alert("Memorizza i seguenti numeri: " + listRandomNumbers);

  // Funzione timer 30 secondi dopo i quali l'utente deve inserire i 5 numeri
  setTimeout(function () {
    for (var i = 1; i <= 5; i++) {
      n = parseInt(prompt("Inserisci il " + i + "° numero: "));
      listPlayerNumbers.push(n);
      if (listRandomNumbers.includes(n)) {
        numeriIndovinati += 1;
        listaNumeriIndovinati.push(n);
      }
    }
    
    // Vari console.log per debugging
    // console.log("Hai indovinato " + numeriIndovinati + " numeri");
    // console.log("Questi sono i numeri che hai inserito: " + listPlayerNumbers);
    // console.log("Questi sono i numeri che hai indovinato: " + listaNumeriIndovinati);
    // console.log("Questi sono i numeri che avresti dovuto indovinare: " + listRandomNumbers);

    // Alert con i numeri indovinati dall'utente
    alert("Hai indovinato " + numeriIndovinati + " numeri: " + listaNumeriIndovinati);

  }, 30000);

});
