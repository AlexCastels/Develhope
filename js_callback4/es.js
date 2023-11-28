// Crea una funzione chiamata runCallbacks che accetta un array di funzioni di callback come argomento.
// La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.


function runCallbacks(callbacks) {
    let result = callbacks.forEach(element => {
        element()
        
    });
  return result
}

function firstCallback() {
    console.log('First');
  
}

function secondCallback() {
    console.log('Second');
  
}

function thirdCallback() {
    console.log('Third');
  
}

const callbackArray = [firstCallback, secondCallback,  thirdCallback];
runCallbacks(callbackArray);