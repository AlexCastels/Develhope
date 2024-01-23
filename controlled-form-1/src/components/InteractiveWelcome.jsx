import { useState } from "react"
import { Welcome } from "./Welcome"

export function InteractiveWelcome(){
    
    const [data , setData] = useState('')
    
    function handleInput(e){
        setData(e.target.value)
    }
    
    
    return (
        <>
            <h1>My form</h1>
            <input name='username' value={data} onChange={handleInput}/>
            <Welcome name = {data}/>
        </>
        
    )
}