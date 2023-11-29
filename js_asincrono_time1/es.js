// Utilizza setInterval per chiamare la funzione "visualizzaOrologio" ogni secondo.


function visualizzaOrologio() {
  const orarioCorrente = new Date();
  const ore = orarioCorrente.getHours();
  const minuti = orarioCorrente.getMinutes();
  const secondi = orarioCorrente.getSeconds();
  
  console.log(`Ora attuale: ${ore}:${minuti}:${secondi}`);
}

let id = setInterval(visualizzaOrologio, 1000)  

setTimeout(() => {                   
    clearInterval(id)  //imposto un clearInterval per evitare di bloccare manualmente l'intervallo nel terminale 
}, 1000 )
