import { useState } from "react"

export function Container({title , children}){
    
    const [toggle , setToggle] = useState(false)
    
    function handleButton(){
        setToggle((t) => !t)
    }
    
    return (
        <div onClick={handleButton} className="container">
            <div>{title}</div>
            <p>Click to show more</p>
            {toggle && <div>{children}</div>}
        </div>
    )
}