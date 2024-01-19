import { Counter } from "./components/Counter";


export function App(){
    
    return (
        <>
            <Counter initialValue={0} setter={(count) => count + 1}/>
        </>
        
    )
    
    //passo come prop una funzione e non un valore definito perchè useState essendo 'asincrono'
    //e renderizzando ogni volta il componente non salva il valore precedente della variabile di stato
    //utilizzando la funzione permettiamo di salvare il valore della variabile al suo interno, dunque questo ci permette
    //di poter visualizzare effettivamente il Counter aggiornato ogni qualvolta premiamo il bottone.
}