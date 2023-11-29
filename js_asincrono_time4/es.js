// Implementa la funzione lanciaDadi che:
// Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.
// Visualizzi in console il risultato del lancio Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}.
// Utilizzi il metodo setTimeout per ritardare l' esecuzione della funzione "lanciaDadi" di 2 secondi.
// Prima dello scadere dei 2 secondi stampa in console il messaggio ""Lancio dei dadi in corso..."
// Per la generazione casuale dei numeri dei dadi servirà utilizzare i metodi Math.floor() e Math.random()



function lancioRandom(){
    return Math.floor(Math.random() * (7 - 1) + 1);
}

const dado1 = lancioRandom()
const dado2 = lancioRandom()

function lanciaDadi(num1 , num2){
    setTimeout(()=>{
        console.log(`Dado 1 = ${num1}`)
        console.log(`Dado 2 = ${num2}`)

    },2000)
    return 'Lancio dei dadi in corso...'
}

const result = lanciaDadi(dado1 , dado2)

console.log(result);


