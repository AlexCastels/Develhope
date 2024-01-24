import { useRef , useEffect } from "react"

export function FocusableInput(){
    const inputRef = useRef(null)
    
    useEffect(()=>{
        inputRef.current?.focus()    
    }, [])
    
    return (
        <>
            <h2>my Input</h2>
            <input ref={inputRef} name='myInput' type='text'/>
        </>
    )
}