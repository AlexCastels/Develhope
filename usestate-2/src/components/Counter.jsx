import { useState } from "react";
import { Counterdisplay } from "./CounterDisplay";

export function Counter({ initialValue , setter , decrement}) {
    
    const [counter, setCounter] = useState(initialValue);
    
    function handleIncrement(){
        setCounter(setter)
    }
    
    function handleDecrement(){
        setCounter(decrement)
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
