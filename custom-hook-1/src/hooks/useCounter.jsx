import { useState } from "react";

export function useCounter(initialValue = 0){
    
    const [counter , setCounter] = useState(initialValue)
    
    function handleincrement(){
        setCounter((c) => c + 1)
    }

    function handleDecrement(){
        if(counter > 0){
            setCounter((c) => c - 1)
        }
        
    }

    function handleReset(){
        setCounter(initialValue)
    }

    return {
        counter : counter,
        onIncrement : handleincrement ,
        onDecrement : handleDecrement , 
        onReset : handleReset ,
    }
}