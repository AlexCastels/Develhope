import { useEffect, useState } from "react"

export function Clock(){
    
    const [date , setDate] = useState(new Date())
    
    useEffect(()=>{
        
        setInterval(()=>{
            console.log(`Interval`);
            setDate(new Date())
        },1000)    
        
    },[])
    
    return(
        <>
        <h2>Time: {date.toLocaleTimeString()}</h2>
        </>
    )
}