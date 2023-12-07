// In questo esercizio andremo a simulare il caricamento di moduli di un veicolo spaziale in modo asincrono e quindi lanciare il veicolo spaziale quando tutti i moduli sono stati caricati con successo!

// La funzione "caricaModulo" ritorna una promise simulando il caricamento di un modulo con un ritardo di 2 secondi!

// Implementa la funzione asincrona "lanciaVeicoloSpaziale" che chiama in sequenza la funzione "caricaModulo" per caricare i moduli A, B e C, attendendo il completamento di ciascuna operazione prima di passare alla successiva.

// Alla fine, quando tutti i moduli sono stati caricati con successo, stampa in console "Veicolo spaziale pronto per il lancio!".


// function caricaModulo1(modulo) {
//     return new Promise((resolve , reject) => {
//     if(modulo === 'A') {
//         setTimeout(() => {
//             resolve(`Il modulo ${modulo} è stato caricato.`);
//         }, 2000)
//     } else {
//         reject(`Attenzione: Il modulo 'A' non è stato caricato correttamente`)
//     }
//     });
// }


// function caricaModulo2(modulo) {
//     return new Promise((resolve , reject) => {
//     if(modulo === 'B') {
//         setTimeout(() => {
//             resolve(`Il modulo ${modulo} è stato caricato.`);
//         }, 2000)
//     } else {
//         reject(`Attenzione: Il modulo 'B' non è stato caricato correttamente`)
//     }
//     });
// }

// function caricaModulo3(modulo) {
//     return new Promise((resolve , reject) => {
//     if(modulo === 'C') {
//         setTimeout(() => {
//             resolve(`Il modulo ${modulo} è stato caricato.`);
//         }, 2000)
//     } else {
//         reject(`Attenzione: Il modulo 'C' non è stato caricato correttamente`)
//     }
//     });
// }




// async function lanciaVeicoloSpaziale(){
//     try {
//         const modulo1 = await caricaModulo1('A')
//         const modulo2 = await caricaModulo2('B')
//         const modulo3 = await caricaModulo3('C')

//         console.log(modulo1)
//         console.log(modulo2)
//         console.log(modulo3)

//         console.log("Veicolo spaziale pronto per il lancio!");
//     } catch (err) {
//         console.error(err)
//         console.log('Lancio annullato')
        
//     }
// }

// lanciaVeicoloSpaziale()

function caricaModulo(modulo) {
    return new Promise((resolve) => {
        setTimeout(() => {
        resolve(`Il modulo ${modulo} è stato caricato.`);
        }, 2000);
    });
}

async function lanciaVeicoloSpaziale(){
    try {
        const moduloA = await caricaModulo('A')
        const moduloB = await caricaModulo('B')
        const moduloC = await caricaModulo('C')
        
        console.log(moduloA)
        console.log(moduloB)
        console.log(moduloC)
        console.log("Veicolo spaziale pronto per il lancio!")
        
    } catch (error) {
        console.log(error);
        
    }
}

lanciaVeicoloSpaziale()