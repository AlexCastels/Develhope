import { useState } from "react";
import { GitHubUser } from "./GitHubUser";

export function UsersGithub(){
    
    const [data , setData] = useState([])
    const [username , setUsername] = useState()

    function handleInput(e){
        setUsername(e.target.value)
    }

    function handleBtn(){
        setData((prev) => [...prev , username])
        setUsername('')        
    }

    function handleForm(e){
        e.preventDefault()
    }
    console.log(data)
    return (
        <>
            <form onSubmit={handleForm}>
                <input onChange={handleInput} type="text" value={username}/>
                <button onClick={handleBtn}>Sent</button>
            </form>
            <ul className="card-container">
                {data.map((item , index) => 
                    <li key={index}><GitHubUser username={item}/></li>
                    )}
            </ul>
            
        </>
    )
}

