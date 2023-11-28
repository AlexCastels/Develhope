// Crea una funzione chiamata delay che accetta una funzione di callback e un ritardo temporale in millisecondi come argomenti.
// delay dovrebbe eseguire la funzione di callback dopo il ritardo specificato.


// function delay(callback, delayTime) {

//     callback();
// }

// function sayHi() {
//   setTimeout(() => {
//     console.log("Hi, there!");
//   },2000)
// }

// delay(sayHi); // Should log "Hi, there!" after a 2-second delay.


function delay(callback, delayTime) {
    setTimeout(callback, delayTime) //imposto come argomenti del setTimeout la callback e un tempo che verrà specificato poi       
}                                   // nel momento in cui si richiama la funzione 

function sayHi() {
    console.log("Hi, there!");
}

delay(sayHi, 2000); // Should log "Hi, there!" after a 2-second delay.