// Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.
// Utilizzare il parametro rest per raccogliere gli argomenti.

function filterOutOdds(...num) {
    let odd = num.filter(numero => numero % 2 !== 0)
    return odd
}

let result = filterOutOdds(1,2,3,4,5,6,7)

console.log(result);