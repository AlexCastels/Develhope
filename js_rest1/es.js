// Crea una funzione chiamata somma che accetta un numero qualsiasi di argomenti e restituisce la somma di tali argomenti.
// Utilizza il parametro rest per raccogliere gli argomenti. -Stampa in console l'output della funzione somma.


function sum(...num) {
   console.log(num);
   let sum = 0
   num.forEach(num => sum += num)
   return sum 
}

let result = sum(5 , 5 , 5 , 5)

console.log(result);


