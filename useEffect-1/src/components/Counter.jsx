import { useEffect, useState } from "react";

export function Counter({ initialValue , setter }) {
    
    const [counter, setCounter] = useState(initialValue)

    useEffect(()=> {
        console.log(`Count is: ${counter}`);
    } , [counter])
    
    function handleIncrement() {
        setCounter(setter);
    }
    
    return (
        <>
            <h2>My count to: {counter}</h2>
            <button onClick={handleIncrement}>Incrementa</button>
        </>
    );
}
