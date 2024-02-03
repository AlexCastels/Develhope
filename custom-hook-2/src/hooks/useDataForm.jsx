import { useState } from "react"

export function useDataForm(){ 
    
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    
    function handleUsername(e){
        const value = e.target.value
        setUsername(value)
    }

    function handlePassword(e){
        const value = e.target.value
        setPassword(value)
    }
    
    const data = {
        username : username , 
        password : password ,
    }

    function handleForm(e){
        e.preventDefault()
        setUsername('')
        setPassword('')
        console.log(data)
    }
    

    return {
        username : handleUsername , 
        password : handlePassword ,
        dataUser : data ,
        handleForm : handleForm ,
    }
}