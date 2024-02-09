import { useState } from "react";
import { Link } from "react-router-dom";

export function Counter(){
    const [count , setCount] = useState(0)
    
    function increment(){
        setCount((prev) => prev + 1)
    }
    
    function decrement(){
        if(count > 0 ){
            setCount((prev) => prev -1)
        }
        
    }
    
    function reset(){
        setCount(0)
    }
    
    return (
        <>
            <div className="counter">
                <h2>COUNTER</h2>
                <p>Count is: {count}</p>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>   
        </>
        
    )
}