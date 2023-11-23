// Utilizza forEach per stampare i nomi degli studenti.
// Utilizza find per trovare uno studente con un voto superiore a 90.
// Utilizza reduce per calcolare la media dei voti degli studenti.
// Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
// Utilizza filter per trovare gli studenti con voti superiori a 85.

const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];

console.log('-----ForEach-----')


studenti.forEach(value => console.log(value))


console.log('-----Find-----')


let voto90 = studenti.find(value =>  value.voto > 90)
console.log(voto90)


console.log('-----Reduce-----')


let voto = []
    studenti.forEach(element => { element.voto
    voto.push(element.voto)})
    let sum = voto.reduce((a , number) => a + number , 0);
    let media = sum / studenti.length
    console.log(`La media degli studenti è: ${(media)}`);


console.log('-----Map-----')


let maiuscolo = studenti.map(studente => studente.nome.toUpperCase())
console.log(maiuscolo)                        


console.log('-----Filter-----')

let filtroVoti = studenti.filter(value => value.voto > 85)
console.log(filtroVoti);
