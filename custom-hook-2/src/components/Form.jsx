import { useState } from "react"
import { useDataForm } from "../hooks/useDataForm"

export function Form(){
    
    const {username , password , dataUser , handleForm} = useDataForm()
    const [show , setShow] = useState()
    
    function showData(){
        setShow(JSON.stringify(dataUser, null , 2))
    }
    
    return (
        <form onSubmit={handleForm}>
            <input name='username' type="text" onChange={username} value={dataUser.username} />
            <input name='password' type="password" onChange={password} value={dataUser.password}/>
            <button onClick={showData}>Submit</button>
            <p>{show}</p>
            
        </form>
    )
}