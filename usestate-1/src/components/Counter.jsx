import { useState } from "react";

export function Counter({ initialValue , value }) {
    
    const [counter, setCounter] = useState(initialValue);
    
    function handleIncrement() {
        setCounter((c) => c + value);
    }
    
    return (
        <>
            <h2>My count to: {counter}</h2>
            <button onClick={handleIncrement}>Incrementa</button>
        </>
    );
}
