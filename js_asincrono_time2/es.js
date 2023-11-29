// Crea una funzione chiamata "contoAllaRovescia" che diminuirà il conto alla rovescia di 1 unità e visualizzerà il tempo rimanente in console.
// Utilizza setInterval per chiamare la funzione contoAllaRovescia ogni secondo.
// Visualizza il messaggio "Conto alla rovescia in corso..." all'inizio.
// Quando il conto alla rovescia raggiunge 0, visualizza un messaggio che indica che il conto alla rovescia è terminato.

let tempoRimanente = 10;

function contoAllaRovescia(num) {

   const id = setInterval(() => {
        num --;
        console.log(`Conto alla rovescia in corso - ${num}`)
    }, 1000)
    
    setTimeout(() => {
        clearInterval(id)
        console.log('Il conto alla rovescia è terminato');
    },11000)
    
    return `Inizia il conto alla rovescia: ${num}`
    
}
    
    const result = contoAllaRovescia(tempoRimanente)
    
    console.log(result);

// const id = setInterval(() => {
//     contoAllaRovescia(tempoRimanente)
//     tempoRimanente --;
//     console.log(`Conto alla rovescia in corso - ${tempoRimanente}`)
// }, 1000)

// setTimeout(() => {
//     clearInterval(id)
//     console.log('Il conto alla rovescia è terminato');
// },11000)

