import { Counter } from "./components/Counter";

export function App(){
    
    return (
        <>
            <Counter 
                initialValue={0} 
                setter={(count) => count + 1}
                decrement={(count) => count -1}
            />
        </>
    )
    
}