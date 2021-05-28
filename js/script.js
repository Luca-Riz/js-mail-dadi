// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


// genero un numero random da 1 a 6 per giocatore 1

var dado1 = Math.floor(Math.random() * 6 + 1);
console.log(dado1);

// genero un numero random da 1 a 6 per giocatore 2

var dado2 = Math.floor(Math.random() * 6 + 1);
console.log(dado2);

// confronto i due risultati e dò la vittoria al punteggio più alto