import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ShowGitHubUSer({username}){
    
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(false)
    
    async function getData(username){
        
        setLoading(true)
        
        try {
            const res = await fetch(`https://api.github.com/users/${username}`)
            const data = await res.json()
            setData(data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData(username)
    },[])
    
    return (
        <>
            <div className="fetch">
                {loading && <h1>Loading..</h1>}
                {data && data.message && <p>Errore: <span>{data.message}</span></p>}
                {data && data.name && <div className='card'>
                    <h2>Welcome: {data.name}!</h2>
                    <p>Your username is: {data.login}</p>
                    <p>Your avatar is:</p>
                    <img src={data.avatar_url} alt='avatar' width="300px"/>
                </div>}
            </div>
        </>
    )
}