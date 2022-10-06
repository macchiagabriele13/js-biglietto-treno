// Il programma dovrà chiedere all'utente:
//  il numero di chilometri che vuole percorrere
// e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca, oltre alla ricerca da fare per ricordarsi come calcolare uno sconto (Googlate qulcosa del tipo: come si calcola lo sconto? e cercate una risorsa che vi possa aiutare a capire cosa fare)


/* il numero di chilometri che vuole percorrere */
const userKm = prompt("Quanti chilometri vuoi percorrere?");
console.log(userKm); 

/* l'età del passeggero. */
const userAge = prompt("Quanti anni hai?");
console.log(userAge); 

/* prezzo del biglietto è definito in base ai km (0.21 € al km) */
const ticketPrice = 0.21 * userKm;
console.log(ticketPrice+"€");

/* va applicato uno sconto del 20% per i minorenni */
if (userAge < 18) {
    const ticketPriceUnder = ticketPrice *0.8;
    console.log(ticketPriceUnder + "€");
    
} else {
    ticketPriceUnder = ticketPrice
}

/* va applicato uno sconto del 40% per gli over 65. */

if (userAge > 65 ) {
    const ticketPriceUnder = ticketPrice *0.6;
    console.log(ticketPriceUnder + "€");
    
} else {
    ticketPriceUnder = ticketPrice
}