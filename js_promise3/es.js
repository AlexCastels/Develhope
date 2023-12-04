// -Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. 
// -Utilizzare setTimeout per simulare un'operazione asincrona.

function myFunction(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise risolta dopo 2s')
        },2000)
    })
}

myFunction().then((data) => console.log(`Siamo dentro il .then, ${data}`)).catch((err) => console.error(err))