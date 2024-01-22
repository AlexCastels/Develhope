import { useState } from "react";
import { Counterdisplay } from "./CounterDisplay";

export function Counter({ initialValue , value}) {
    
    const [counter, setCounter] = useState(initialValue);
    
    function handleIncrement(){
        setCounter((c) => c + value)
    }
    
    function handleDecrement(){
        setCounter((c) => c - value)
    }

    function handleReset(){
        setCounter(initialValue)
    }
    
    return (
        <>
            <Counterdisplay counter = {counter}/>
            <button onClick={handleIncrement}>Incrementa</button>
            <button onClick={handleDecrement}>Decrementa</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
}
