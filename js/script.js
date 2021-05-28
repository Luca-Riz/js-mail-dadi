// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.


// genero un numero random da 1 a 6 per giocatore 1

var dado1 = Math.floor(Math.random() * 6 + 1);
// console.log('Il tuo dado segna: ' + dado1);

// genero un numero random da 1 a 6 per giocatore 2

var dado2 = Math.floor(Math.random() * 6 + 1);
// console.log('Il computer ha fatto: ' + dado2);

// confronto i due risultati e dò la vittoria al punteggio più alto

var risultato;

if (dado1 > dado2) {
    // console.log('Hai vinto!');
    risultato = 'Hai vinto!';
} else if (dado1 < dado2) {
    // console.log('Hai perso');
    risultato = 'Hai perso';
} else {
    // console.log('Pareggio');
    risultato = 'Pareggio';
}

// passo tutti i dati al mio html

document.getElementById('dado1').innerHTML += dado1
document.getElementById('dado2').innerHTML += dado2
document.getElementById('risultato').innerHTML = risultato