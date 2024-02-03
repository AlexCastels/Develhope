import { useCounter } from "../Hooks/useCounter"


export function Counter(){
    
    const {counter , onIncrement , onDecrement , onReset} = useCounter()
    
    return (
        <div>
            <p>{counter}</p>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}