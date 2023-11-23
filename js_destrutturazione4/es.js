//Date due variabili a e b, scambia i loro valori usando la destrutturazione.

const arr = [ 10 , 5]

let a = 5;
let b = 10; 

[a , b] = [b , a]   //creo un array temporaneo e lo destrutturo subito dopo per poter invertire il valore delle variabili

console.log(a);
console.log(b);