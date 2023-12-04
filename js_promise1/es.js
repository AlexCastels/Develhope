// Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.

let obj =  {name: "John", age: 30 }
//let obj = 525

function fetchDataFromAPI(obj , callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(typeof obj === 'object'){
        resolve(callback(obj))
      } else {
        reject('inserire un oggetto')
      }
    }, 2000);
  })
  
}

function handleData(data) {
  const result = data
  return result
}

fetchDataFromAPI(obj , handleData)
.then((data) => console.log(data))
.catch((err) => console.error(err))
