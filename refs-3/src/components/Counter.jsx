import { useEffect, useState , useRef } from "react";

export function Counter({initial}) {
    
    const [counter, setCounter] = useState(initial)
    const btnRef = useRef(counter)

    useEffect(()=> {
        console.log(`Now count is: ${counter}`)
    } , [counter])
    
    function handleIncrement() {
        setCounter((c) => c + 1)
        console.log(`The previous value was ${counter}`)
        if(btnRef.current <= counter){
            console.log('value Up')
        }    
    }
    
    function handleDecrement(){
        if(counter > 0){
            setCounter((c) => c - 1)
            console.log(`The previous value was ${counter}`)
            if(btnRef.current <= counter){
                console.log('value Down')
            }
        }
        
    }
    
    return (
        <>
            <h2>My count to: {counter}</h2>
            <button onClick={handleIncrement}>Incrementa</button>
            <button onClick={handleDecrement}>Decrementa</button>
        </>
    );
}