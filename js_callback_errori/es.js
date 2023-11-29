// Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
// Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.

function performOperation(a, b, callback) {
  let sum = a + b;
  if (sum < 10) {
    callback(null, "Il risultato rientra nei parametri");
  } else {
    callback(new Error("ATTENZIONE: Risultato > 10", null));
  }
}

performOperation(5, 3, (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
